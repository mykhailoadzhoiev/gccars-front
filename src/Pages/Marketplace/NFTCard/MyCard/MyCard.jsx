import React, { useState, useEffect } from 'react'

import car from '../../../../asset/car.svg'
import CircleProgressbar from '../../../../components/CircleProgressbar/CircleProgressbar'
import axios from "axios";
import { BASE_URL } from "../../../../constants";
import Modal from '../../../../components/Modal/Modal';
import { toast } from 'react-toastify';
import useResizeAware from 'react-resize-aware';

const MyCard = ({ item, sellItem }) => {

    const token = localStorage.getItem('token')

    const [activeModalError, setActiveModalError] = useState(false)
    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [activeModalСonfirmation, setActiveModalСonfirmation] = useState(false)
    const [activeModalСancel, setActiveModalСancel] = useState(false)
    const [priceCar, setPriceCar] = useState('')

    const [resizeListener, sizes] = useResizeAware();

    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)

    async function sellCar(carId) {
        // const bodyFormData = new FormData();
        // bodyFormData.append('carId', carId)
        // bodyFormData.append('price', +priceCar)
        if (priceCar.trim().length > 0) {
            axios.post(`${BASE_URL}/cars/sell`, {
                carId: carId,
                price: +priceCar
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'accept': 'text/plain'
                }
            })
                .then(res => {
                    console.log(res);
                    setActiveModalSuccess(false)
                    setActiveModalСancel(false)
                    sellItem()

                    if (res.data.messages != null && res.data.messages.length > 0) {
                        res.data.messages.forEach(el => {
                            toast.error(el)
                        })
                    }
                }).catch(e => {
                    console.log(e)
                    setActiveModalError(true)
                    setActiveModalSuccess(false)
                    setActiveModalСancel(false)
                })
        }

    }

    const cancelCar = (carId) => {
        // const bodyFormData = new FormData();
        // bodyFormData.append('carId', carId)
        axios.post(`${BASE_URL}/Cars/${carId}/sale-cancel`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'multipart/form-data',
                'accept': 'text/plain'
            }
        })
            .then(res => {
                console.log(res);
                sellItem()

                if (res.data.messages != null && res.data.messages.length > 0) {
                    res.data.messages.forEach(el => {
                        toast.error(el)
                    })
                }
            }).catch(e => {
                console.log(e)
            })

    }

    useEffect(() => {
        // console.log(sizes);
        setSqSize(sizes.width / 7.24)
        setStrokeWidth(sizes.width / 41)
    }, [sizes.width])

    return (
        <>
            <Modal active={activeModalСancel} setActive={setActiveModalСancel}>
                <div className="form text-center">
                    <div className="form__text">Do you want to cancel <span>{item.name}?</span></div>
                    <div className="form__buttons">
                        <button onClick={() => cancelCar(item.carId)} className="button button--success modal-close modal-toggle" data-target="#modalStackingValue">Yes</button>
                        <button onClick={() => setActiveModalСancel(false)} className="btnCloseModal">No</button>
                    </div>
                </div>
            </Modal>
            <Modal active={activeModalError} setActive={setActiveModalError}>
                <div class="form text-center">
                    <div class="form__text small">Sell failed</div>
                    {/* <input type="text" class="form__input" /> */}
                    <div class="form__buttons">
                        <button onClick={() => setActiveModalError(false)} class="button button--success modal-close">Ок</button>
                    </div>
                </div>
            </Modal>
            <Modal active={activeModalСonfirmation} setActive={setActiveModalСonfirmation}>
                <div class="form">
                    <div class="form__text exclamation smaller text-left pl">All uncharmited rewards will be written off after the card will be sold.</div>
                    <div class="form__text smaller text-left pl">Do you really want to sell this cards?</div>
                    <div class="form__buttons">
                        <button onClick={() => {
                            setActiveModalСonfirmation(false)
                            setActiveModalSuccess(true)
                        }} class="button button--success modal-close modal-toggle" data-target="#modalSetPrice">Yes</button>
                        <button onClick={() => setActiveModalСonfirmation(false)} class="btnCloseModal">No</button>
                    </div>
                </div>
            </Modal>
            <Modal active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div class="form text-center">
                    <div class="form__text small">Set the price for the card</div>
                    <div class="form__field">
                        <div class="form__inputs">
                            <div class="form___input center">
                                <input value={priceCar} onChange={(e) => {
                                    if (/^[\d.]*$/.test(e.target.value)) {
                                        setPriceCar(e.target.value)
                                    }
                                }
                                } type="text" class="form__input form__input-input bigInput" />
                            </div>
                        </div>
                    </div>
                    <div class="form__buttons">
                        <button onClick={() => sellCar(item.carId)} class="button button--success modal-close modal-toggle"
                            data-target="#modalStackingValue">Confirm</button>
                    </div>
                </div>
            </Modal>
            <div className="card">
            {resizeListener}
                <div className="card__inner">
                    <div className="card__id">id {item.carId}</div>
                    <div className="card__top">
                        <div className="card__top-el lvl"><span className="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                        <div className="card__top-el hash">{item.parameters[4].value} Hash</div>
                    </div>
                    <div className="card__imgContainer">
                        <img src={item.imageUrl} alt="#" className="card__img" />
                    </div>
                    <div className="card__title">[{item.parameters.filter(el => el.carParameter === 5)[0].value}] {item.name.length >= 10
                        ? `${item.name.slice(0, 10)}...`
                        : item.name
                    }
                    </div>
                    <div className="card__stats">
                        <ul className="card__statsList">
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Speed</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 0)[0].value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 0)[0].value}%` }}></span>
                                </span>
                            </li>

                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Armor</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 1)[0].value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 1)[0].value}%` }}></span>
                                </span>
                            </li>
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Attack</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 2)[0].value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 2)[0].value}%` }}></span>
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
                    {/* <div className="card__coins hidden">50coin</div> */}
                    {!item.isDeleted
                        ?
                        <span className="card__button" type="submit" onClick={() => {
                            item.isTradeable
                                ? setActiveModalСancel(true)
                                : setActiveModalСonfirmation(true)

                        }}>{item.isTradeable ? 'Cancel' : 'Sell'}</span>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </>
    )
}

export default MyCard
