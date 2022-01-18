import React, { useEffect, useState } from 'react'

import './Marketplace.scss'

import Cars from '../../asset/componentsSVG/Cars'


import Dashboard from './Dashboard/Dashboard'
import Market from './Market/Market'
import NFTCard from './NFTCard/NFTCard'
import axios from 'axios'
import { BASE_URL } from '../../constants'

const Marketplace = () => {

    const [contentTag, setContentTag] = useState('My NFT Card')

    return (
        <>
            <div className="page-content__tabs nav-tabs">
                <div
                    onClick={() => setContentTag('Dashboard')}
                    className={contentTag === 'Dashboard' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}
                >
                    Dashboard
                </div>
                <div
                    onClick={() => setContentTag('Market')}
                    className={contentTag === 'Market' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}
                >
                    Market
                </div>
                <div
                    onClick={() => setContentTag('My NFT Card')}
                    className={contentTag === 'My NFT Card' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}
                >
                    My NFT Card
                </div>
            </div>

            <div className="tab-content market-all">
                {contentTag === 'Dashboard' && <Dashboard />}
                {contentTag === 'Market' && <Market />}
                {contentTag === 'My NFT Card' && <NFTCard />}
            </div>


        </>
    )
}

export default Marketplace
