import React, { useEffect, useState } from 'react'

import car from '../../../asset/car.svg'

import SimpleBar from "simplebar-react";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import Loader from "../../../components/Loader/Loader";
import Card from "../Market/Card/Card";

import { Scrollbars } from 'react-custom-scrollbars'

const Dashboard = () => {

    const [loadingTotal, setLoadingTotal] = useState(true)
    const [loadingSold, setLoadingSold] = useState(true)
    const [loadingListed, setLoadingListed] = useState(true)

    const [currentCost, setCurrentCost] = useState(0)
    const [totalSales, setTotalSales] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    const [recentlySold, setRecentlySold] = useState([])
    const [recentlyListed, setRecentlyListed] = useState([])

    const token = localStorage.getItem('token')

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
        setLoadingTotal(true)
        setLoadingSold(true)
        setLoadingListed(true)
        axios.get(`${BASE_URL}/dashboard/totals`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'multipart/form-data',
                'accept': 'text/plain'
            }
        })
            .then(res => {
                let responseData = res.data.data;
                setTotalValue(responseData.totalValue);
                setCurrentCost(responseData.currentCost);
                setTotalSales(responseData.totalSales)
            }).then(() => {
                setLoadingTotal(false)
            })

        // const bodyFormDataSold = new FormData();
        // bodyFormDataSold.append('Skip', 0)
        // bodyFormDataSold.append('Take', 10)

        axios.post(`${BASE_URL}/Dashboard/recently-sold`, {
            skip: 0,
            take: 10
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log('sold', res)
            setRecentlySold([...res.data.data.data])
        }).then(() => {
            setLoadingSold(false)
        })

        axios.post(`${BASE_URL}/Dashboard/put-into`, {
            skip: 0,
            take: 10
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log('listed', res)
            setRecentlyListed([...res.data.data.data])

        }).then(() => {
            setLoadingListed(false)
        })
    }, [])

    return (
        <>
            {loadingTotal || loadingSold || loadingListed ? <div className='loader'><Loader /></div>
                :
                <div className="tab-pane fade show active p" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="totalList">
                        <div className="totalList__el">
                            Total sale
                            <div className="value">{currentCost}xz</div>
                        </div>
                        <div className="totalList__el">
                            Total sold
                            <div className="value">{totalSales}xz</div>
                        </div>
                        <div className="totalList__el">
                            Total volume
                            <div className="value">${totalValue}</div>
                        </div>
                    </div>
                    <div className="results__titles">
                        <div className="results__el-title">Recently listed</div>
                        <div className="results__el-title">Recently Sold</div>
                    </div>
                    <div className="results customScroll results--dashboard">
                        
                        <Scrollbars className='scrollReact' renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>

                            <div className="results__el">
                                <div className="results__el-table">
                                    <div className="results__el-table-header">
                                        <div className="results__el-table-row">
                                            <div className="results__el-table-el w50p">Car name</div>
                                            <div className="results__el-table-el">Seller</div>
                                            <div className="results__el-table-el">Price</div>
                                        </div>
                                    </div>
                                    <div className="results__el-table-body">
                                        {recentlyListed.map((el, i) => {
                                            return (
                                                <div key={i} className="results__el-table-row">
                                                    <div className="results__el-table-el w50p">
                                                        <span className="carName">
                                                            <span className="carName__imgContainer">
                                                                <img src={el.imageUrl} alt="#" className="carName__img" />
                                                            </span>
                                                            <span className="carName__text">
                                                                <span className="carName__name">[{el.color}] {el.name}</span>
                                                                <span className="carName__id">id {el.carId}</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="results__el-table-el">{`${el?.ownerAddress.slice(0, 4)}...${el?.ownerAddress.slice(Math.max(el?.ownerAddress.length - 4, 0))}`}</div>
                                                    <div className="results__el-table-el">{el.price}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* <table className="results__el-table">
                                    <thead className="results__el-table-header">
                                        <tr className="results__el-table-row">
                                            <th className="results__el-table-el">Car name</th>
                                            <th className="results__el-table-el">Seller</th>
                                            <th className="results__el-table-el">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="results__el-table-body">
                                        {recentlyListed.map((el, i) => {
                                            return (
                                                <tr key={i} className="results__el-table-row">
                                                    <td className="results__el-table-el">
                                                        <span className="carName">
                                                            <span className="carName__imgContainer">
                                                                <img src={el.imageUrl} alt="#" className="carName__img" />
                                                            </span>
                                                            <span className="carName__text">
                                                                <span className="carName__name">[{el.color}] {el.name}</span>
                                                                <span className="carName__id">id {el.carId}</span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td className="results__el-table-el">{`${el?.ownerAddress.slice(0, 4)}...${el?.ownerAddress.slice(Math.max(el?.ownerAddress.length - 4, 0))}`}</td>
                                                    <td className="results__el-table-el">{el.price}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table> */}
                            </div>

                            <div className="results__el">

                                <div className="results__el-table">
                                    <div className="results__el-table-header">
                                        <div className="results__el-table-row">
                                            <div className="results__el-table-el w50p">Car name</div>
                                            <div className="results__el-table-el">Seller</div>
                                            <div className="results__el-table-el">Price</div>
                                        </div>
                                    </div>
                                    <div className="results__el-table-body">
                                        {recentlySold.map((el, i) => {
                                            return (
                                                <div key={i} className="results__el-table-row">
                                                    <div className="results__el-table-el w50p">
                                                        <span className="carName">
                                                            <span className="carName__imgContainer">
                                                                {/* <Cars /> */}
                                                                <img src={el.imageUrl} alt="#" className="carName__img" />
                                                            </span>
                                                            <span className="carName__text">
                                                                <span className="carName__name">[{el.color}] {el.name}</span>
                                                                <span className="carName__id">id {el.carId}</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="results__el-table-el">{`${el?.ownerAddress.slice(0, 4)}...${el?.ownerAddress.slice(Math.max(el?.ownerAddress.length - 4, 0))}`}</div>
                                                    <div className="results__el-table-el">{el.price}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </Scrollbars>
                    </div>
                </div>}
        </>
    )
}

export default Dashboard
