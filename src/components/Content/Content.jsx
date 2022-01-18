import React, { useEffect } from 'react'
import './Content.scss'

import { Route, Routes, useLocation, useNavigate } from 'react-router'
import Marketplace from '../../Pages/Marketplace/Marketplace'
import Deposit from "../../Pages/Deposit/Deposit";
import CardCArd from '../../Pages/CardCard/CardCArd';
import Cabinet from '../../Pages/Cabinet/Cabinet';
import Pvp from '../../Pages/Arena/Pvp/Pvp';
import Pve from '../../Pages/Arena/Pve/Pve';
import Tournament from '../../Pages/Arena/Tournament/Tournament';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useSelector } from 'react-redux';
import Staking from '../../Pages/Staking/Staking';
import Farming from '../../Pages/Farming/Farming';
import Leaders from '../../Pages/Leaders/Leaders';
import Garage from '../../Pages/Garage/Garage';
import Rewards from '../../Pages/Garage/Rewards';
import Conteiner from '../../Pages/Conteiner/Conteiner';

const Content = () => {

    const history = useNavigate()
    const { pathname } = useLocation()

    const token = localStorage.getItem('token')
    const { auth } = useSelector(state => state.user)


    // useEffect( () => {
    //     if (auth) {
    //         console.log('token', token);
    //         axios.get(`${BASE_URL}/PveBattles/uncompleted`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json; charset=UTF-8',
    //                 'accept': 'text/plain'
    //             }
    //         }).then(res => {
    //             console.log('uncomp', res);
    //         })
    //     }
    // }, [auth])

    return (
        
        <div className={`page-content__main ${pathname === '/rewards' ? 'garage2' : ''}${pathname === '/conteiner' ? 'roulette-page' : ''}`}>
            <Routes>
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/arena/pvp' element={<Pvp />} />
                <Route path='/arena/pve' element={<Pve />} />
                <Route path='/arena/tournament' element={<Tournament />} />
                <Route path='/conteiner' element={<Conteiner />} />
                <Route path='/garage' element={<Garage />} />
                <Route path='/farming' element={<Farming />} />
                <Route path='/leaderboard' element={<Leaders />} />
                <Route path='/staking' element={<Staking />} />
                <Route path='/deposit' element={<Deposit />} />
                <Route path='/cabinet' element={<Cabinet />} />
                <Route path='/marketplace/:carId' element={<CardCArd />} />
                <Route path='/rewards' element={<Rewards />} />
            </Routes>
        </div>

    )
}

export default Content
