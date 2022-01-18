import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useResizeAware from 'react-resize-aware'
import { toast } from 'react-toastify'
import CircleProgressbar from '../../../../../components/CircleProgressbar/CircleProgressbar'
import Modal from '../../../../../components/Modal/Modal'
import { BASE_URL } from '../../../../../constants'

const CardPvp = ({ item, hasJoinCar, joinBattle }) => {

    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [checkedModal, setCheckedModal] = useState(1)
    const [maxPlayers, setMaxPlayers] = useState('')
    const [price, setPrice] = useState('')

    const [resizeListener, sizes] = useResizeAware();

    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)

    const token = localStorage.getItem('token')

    const checkMaxPlayers = (count) => {
        if (+count > 10) {
            setMaxPlayers('10')
        } else {
            setMaxPlayers(count)
        }
    }

    const createBattle = (dataBattle) => {
        axios.post(`${BASE_URL}/PvpBattles/create`, {
            level: dataBattle.level,
            maxFighters: dataBattle.maxFighters,
            betAmount: dataBattle.betAmount,
            carId: dataBattle.carId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log('createBattle', res)
            setActiveModalSuccess(false)
            if (res.data.messages) {
                res.data.messages.forEach(el => {
                    toast(el)
                })
            }
        }).catch(e => {
            console.log(e)
        })
        // console.log(dataBattle);
    }

    useEffect(() => {
        console.log(sizes);
        setSqSize(sizes.width / 7.24)
        setStrokeWidth(sizes.width / 41)
    }, [sizes.width])

    return (
        <>
            <Modal modalCreateBattle={true} active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div class="form">
                    <div class="form__field">
                        <label class="form__label">Who can participate in the battle?</label>
                        <div class="form__radios">
                            <label onClick={() => setCheckedModal(1)} class="form__radio">
                                <input type="radio" class="form__radio-input" checked={checkedModal === 1 ? true : false} name="lvl" />
                                <div class="form__radio-body">only my level</div>
                            </label>
                            <label onClick={() => setCheckedModal(2)} class="form__radio">
                                <input type="radio" class="form__radio-input" checked={checkedModal === 2 ? true : false} name="lvl" />
                                <div class="form__radio-body">all levels</div>
                            </label>
                        </div>
                    </div>
                    <div class="form__field">
                        <label class="form__label">How many players can participate?</label>
                        <div class="form__inputs">
                            <div class="form___input">
                                <label class="form__input-label">
                                    <img src="../../../../../asset/userBlue.svg" class="form__input-label-icon" alt="" />
                                    max 10
                                </label>
                                <input value={maxPlayers} onChange={(e) => checkMaxPlayers(e.target.value)} type="text" class="form__input form__input-input small" />
                            </div>
                            <div class="form___input">
                                <label class="form__input-label">The prise battle</label>
                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" class="form__input form__input-input small" />
                                <span class="form__input-currency">xyz</span>
                            </div>
                        </div>
                    </div>
                    <div class="form__buttons">
                        <button onClick={() => createBattle({
                            level: checkedModal === 1 ? +item.parameters.filter(el => el.carParameter === 3)[0].value : null,
                            maxFighters: +maxPlayers,
                            betAmount: +price,
                            carId: item.carId
                        })} class="button button--success modal-close modal-toggle"
                            data-target="#modalStackingValue">Create</button>
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
                    }</div>
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
                    {hasJoinCar
                        ? <span onClick={() => joinBattle(item.carId)} className="card__button" type="submit">
                            Join battle
                        </span>
                        : <span onClick={() => setActiveModalSuccess(true)} className="card__button" type="submit">
                            Create battle
                    </span>}
                </div>
            </div>
        </>
    )
}

export default CardPvp
