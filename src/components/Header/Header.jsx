import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import abi from '../../abi';
import Wallet from '../../asset/componentsSVG/Wallet'
import { injected } from '../../injectedConnector';
import { actionAuth, actionDataUser } from '../../redux/reducers/userReduser';
import { toast, ToastContainer } from "react-toastify";
import web3 from '../../web3';

import './Header.scss'
import axios from 'axios';
import { BASE_URL } from '../../constants';
import User from '../../asset/componentsSVG/User';
import { HubConnectionBuilder } from '@microsoft/signalr';

const Header = () => {

    const { active, account, library, connector, activate, deactivate } = useWeb3React();

    const { auth } = useSelector(state => state.user)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    const [connection2, setConnection2] = useState(null)

    async function connect() {
        try {
            if (!window.web3) {
                toast.error("Metamask is not installed")
                return;
            }

            await activate(injected);
            toast("Connected to Metamask");

        } catch (ex) {
            toast.error("Can't connect to Metamask")
            console.log(ex)
        }
    }
    async function disconnect() {
        try {
            if (!window.web3) {
                toast.error("Metamask is not installed")
                return;
            }

            await deactivate(injected);
            toast("Disconnected to Metamask");
            localStorage.removeItem('account')
            localStorage.removeItem('token')
            dispatch(actionAuth(false))

        } catch (ex) {
            toast.error("Can't connect to Metamask")
            console.log(ex)
        }
    }

    useEffect(() => {
        console.log('EEEEEEEEEE', auth);

        if (active) {

            axios.post(`${BASE_URL}/Account/token`, {
                address: account
            }, {
                header: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'accept': 'text/plain',
                }
            })
                .then(res => {
                    // console.log(res.data.data);
                    localStorage.setItem('token', res.data.data)
                }).then(() => {
                    let token = localStorage.getItem('token')
                    // console.log(token);
                    if (token) {

                        axios.get(`${BASE_URL}/account/userInfo`, {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json; charset=UTF-8',
                                'accept': 'text/plain'
                            }
                        })
                            .then(res => {
                                console.log('DATAUSET', res)
                                dispatch(actionDataUser(res.data.data))
                                // localStorage.setItem('userData')
                                // setTotalSupply(res.data.data.balance);
                            })
                    }

                })
                .catch(e => {
                    console.log(e)
                })
        }
    }, [active])

    useEffect(() => {
        if (localStorage.getItem('account')) {
            dispatch(actionAuth(true))
            connect()
        } else {
            dispatch(actionAuth(false))
        }
    }, [])

    useEffect(() => {
        let newConnection2 = new HubConnectionBuilder()
            .withUrl(`${BASE_URL}/balance`, { accessTokenFactory: () => token })
            .build();

        setConnection2(newConnection2)

    }, [])

    useEffect(() => {
        if (account) {
            localStorage.setItem('account', account)
            dispatch(actionAuth(true))
        }
    }, [active, account])

    useEffect(() => {
        if (connection2) {
            connection2.start()
                .then(result => {
                    console.log('Connected!');

                    connection2.on('UsersBalanceChanged', message => {
                        console.log('UsersBalanceChanged', message);
                        axios.get(`${BASE_URL}/account/userInfo`, {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json; charset=UTF-8',
                                'accept': 'text/plain'
                            }
                        })
                            .then(res => {
                                console.log('DATAUSET', res)
                                dispatch(actionDataUser(res.data.data))
                                // localStorage.setItem('userData')
                                // setTotalSupply(res.data.data.balance);
                            })
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection2])

    return (
        <>

            <header className="page-content__header">
                <a href="#" className="logo">logo</a>

                <div className='userAndWallet'>
                    <User />
                    <div onClick={() => {
                        auth ? disconnect() : connect()
                    }} className="page-content__header-right">
                        {/* <a href="#" className="userButton"></a> */}
                        <div className="gitBook">
                            <Wallet />
                            {auth ? 'Disconnect wallet' : 'Connect wallet'}

                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header
