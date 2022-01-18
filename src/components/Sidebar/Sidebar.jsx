import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import './Sidebar.scss'
import abi from "../../abi";
import axios from "axios";
import { BASE_URL } from "../../constants";
import Scrollbars from 'react-custom-scrollbars';

const Sidebar = () => {

    const { pathname } = useLocation()

    const { auth, dataUser } = useSelector(state => state.user)
    const [totalSupply, setTotalSupply] = useState(0);

    const history = useNavigate()
    const token = localStorage.getItem('token')

    const address = localStorage.getItem('address')

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: `rgb(130, 54, 13)`,
            borderRadius: 10
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }
    const renderTrack = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: `rgb(228, 215, 187)`,
            right: '0px',
            height: '100%',
            borderRadius: 10
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }


    useEffect(() => {
        if (!auth) {
            history({ pathname: '/' })
        }
        // if(address) {
        //     const totalSupply = await abi.methods.balanceOf(address).call();
        //     setTotalSupply(totalSupply);
        // }
    }, [auth])

    useEffect(() => {
        console.log('dataUser', dataUser);
        if (Object.keys(dataUser).length > 0) {
            setTotalSupply(dataUser.balance)
        }
    }, [dataUser])

    return (
        <aside className="page-content__sidebar">
            {/* <Scrollbars autoHide renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}> */}

                <div className="id">{localStorage.getItem('account')
                    ? `${localStorage.getItem('account').slice(0, 4)}...${localStorage.getItem('account').slice(Math.max(localStorage.getItem('account').length - 4, 0))}`
                    : '0x000000'}</div>
                <div className="stats">
                    <div className="stats__el stats__el--pickaxe">{localStorage.getItem('account') ? '6790000' : '0000000'}</div>
                    <div className="stats__el stats__el--coin">{localStorage.getItem('account') ? totalSupply : '0000000'}</div>
                    <div className="stats__el stats__el--xp">{localStorage.getItem('account') ? '6790000' : '0000000'}</div>
                    <div className="stats__el stats__el--freespin">{localStorage.getItem('account') ? '1' : '0'}</div>
                </div>
                <div className="menu">
                    <NavLink className={pathname === '/conteiner' ? "menu__el active" : "menu__el"} to={auth ? '/conteiner' : '/'}><span>Conteiner</span></NavLink>
                    <NavLink className={pathname === '/garage' ? "menu__el active" : "menu__el"} to={auth ? '/garage' : '/'}><span>Garage</span></NavLink>
                    <NavLink className={(pathname === '/arena/pvp' || pathname === '/arena/pve' || pathname === '/arena/tournament') ? "menu__el active" : "menu__el"} to={auth ? '/arena/pvp' : '/'}><span>Arena</span></NavLink>
                    <NavLink className={pathname === '/farming' ? "menu__el active" : "menu__el"} to={auth ? '/farming' : '/'}><span>Farming</span></NavLink>
                    <NavLink className={pathname === '/marketplace' ? "menu__el active" : "menu__el"} to={auth ? '/marketplace' : '/'}><span>Marketplace</span></NavLink>
                    <NavLink className={pathname === '/leaderboard' ? "menu__el active" : "menu__el"} to={auth ? '/leaderboard' : '/'} ><span>Leaderboard</span></NavLink>
                    <NavLink className={pathname === '/staking' ? "menu__el active" : "menu__el"} to={auth ? '/staking' : '/'}><span>Staking</span></NavLink>
                    {/* <NavLink className={pathname === '/cabinet' ? "menu__el active" : "menu__el"} to={auth ? '/cabinet' : '/'}><span>Cabinet</span></NavLink> */}
                    {/* <NavLink className={pathname === '/deposit' ? "menu__el active" : "menu__el"} to={auth ? '/deposit' : '/'}><span>Deposit</span></NavLink> */}
                </div>
            {/* </Scrollbars> */}
        </aside>
    )
}

export default Sidebar
