import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router';


import '../Main.scss'

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal/Modal';

import heart from "../asset/heart.png"
import coin from "../asset/coin.png"
import star from "../asset/star.png"
import { HubConnectionBuilder } from '@microsoft/signalr';


const PagesRoutes = () => {

    const token = localStorage.getItem('token')
    const { auth } = useSelector(state => state.user)

    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [resBattle, setResBattle] = useState([])
    const [connection, setConnection] = useState(null)

    const history = useNavigate()

    const contextClass = {
        success: "bg-blue-600",
        error: "bg-red-600",
        info: "bg-gray-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300",
    };

    const finishBattle = (battleId) => {
        axios.post(`${BASE_URL}/PveBattles/complete/${battleId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log('finishRes', res);
            getHistory()
            // setContentTag('pveCards')
        })

    }

    const getHistory = () => {
        if (token) {
            console.log('token', token);
            axios.get(`${BASE_URL}/PveBattles/uncompleted`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'accept': 'text/plain'
                }
            }).then(res => {
                setResBattle(res.data.data)

                console.log('uncomp', res);
            })
        }
    }

    useEffect(() => {
        let newConnection = new HubConnectionBuilder()
            .withUrl(`${BASE_URL}/platform`, { accessTokenFactory: () => token })
            .build();

        setConnection(newConnection)

    }, [])
    useEffect(() => {
    
    }, [])

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected platform!');

                    connection.on('CheckTransactions', message => {
                        console.log('CheckTransactions', message);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection])



    useEffect(() => {
        if (resBattle.length > 0) {
            history({ pathname: '/arena/pve' })
            setActiveModalSuccess(true)
        }
    }, [resBattle])

    useEffect(() => {
        getHistory()
    }, [token])

    return (
        <>
            <Modal dopFunc={() => finishBattle(resBattle.pveBattleId)} active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div class="form text-center">
                    <div class="modal__victoryTitle">Victory</div>
                    <div class="congratsEls">
                        <div class="congratsEls__title">{resBattle[0]?.position === 1 ? 'Congrats!' : 'Defeat!'}</div>
                        <ul class="congratsEls__list">
                            <li class="congratsEls__list-el">Car damage <span class="semibold">30%</span> <img class="congratsEls__list-el-img" src={heart} alt="#" /> </li>
                            <li class="congratsEls__list-el">You finished in <span class="semibold">{resBattle[0]?.position === 1 ? '1' : '4'}</span> placе </li>
                            <li class="congratsEls__list-el">Your reward is <span class="semibold">10</span> <img class="congratsEls__list-el-img" src={coin} alt="#" /> </li>
                            <li class="congratsEls__list-el">You get <span class="semibold">{resBattle[0]?.expiriencePoints}XP</span> <img class="congratsEls__list-el-img" src={star} alt="#" /> </li>
                        </ul>
                    </div>
                    <div class="form__buttons">
                        <button onClick={() => {
                            finishBattle(resBattle[0].pveBattleId)
                            // setContentTag('pveCards')
                            setActiveModalSuccess(false)
                        }} class="button button--success modal-close">Ok</button>
                    </div>
                </div>
            </Modal>
            <div className='page-content'>
                <ToastContainer />
                <Header />
                <div className="page-content__body">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </>
    )
}

export default PagesRoutes
