import React, { useEffect, useState } from 'react'

import car from '../../../../asset/car.svg'
import CircleProgressbar from '../../../../components/CircleProgressbar/CircleProgressbar'
import axios from "axios";
import { BASE_URL } from "../../../../constants";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { actionCar } from '../../../../redux/reducers/carReducer';
import useResizeAware from 'react-resize-aware';

const Card = ({ item, buyItem }) => {

    const token = localStorage.getItem('token')
    const address = localStorage.getItem('account')

    const [resizeListener, sizes] = useResizeAware();

    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)

    const dispatch = useDispatch()

    const history = useNavigate()

    useEffect(() => {
        // console.log(sizes);
        setSqSize(sizes.width / 7.24)
        setStrokeWidth(sizes.width / 41)
    }, [sizes.width])

    return (
        <>
            <div className="card">
            {resizeListener}
                <div className="card__inner">
                    <div className="card__id">id {item.carId}</div>
                    <div className="card__top">
                        <div className="card__top-el lvl"><span className="value">{item.parameters.filter(el => el.carParameter === 3)[0]?.value}</span> Level</div>
                        <div className="card__top-el hash">{item.parameters.filter(el => el.carParameter === 4)[0]?.value} Hash</div>
                    </div>
                    <div className="card__imgContainer">
                        <img src={item.imageUrl} alt="#" className="card__img" />
                    </div>
                    <div className="card__title">[{item.parameters.filter(el => el.carParameter === 5)[0]?.value}] {item.name.length >= 10
                        ? `${item.name.slice(0, 10)}...`
                        : item.name
                    }</div>
                    <div className="card__stats">
                        <ul className="card__statsList">
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Speed</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 0)[0]?.value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 0)[0]?.value}%` }}></span>
                                </span>
                            </li>
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Armor</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 1)[0]?.value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 1)[0]?.value}%` }}></span>
                                </span>
                            </li>
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Attack</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 2)[0]?.value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 2)[0]?.value}%` }}></span>
                                </span>
                            </li>
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Hp</span>
                                    <span className="card__statsList-el-numbers">70</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": "70%" }}></span>
                                </span>
                            </li>
                        </ul>
                        <div className="card__health" data-percent="60">
                            <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={60} />
                            <div>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                    <div className="card__coins">{item.price} coin</div>
                    {/* {item.address !== address ? */}
                    <span className="card__button" type="submit" onClick={() => {
                        // dispatch(actionCar(item))
                        history({ pathname: `/marketplace/${item.carId}` })
                    }}>View</span>
                </div>
            </div>
        </>
    )
}

export default Card
