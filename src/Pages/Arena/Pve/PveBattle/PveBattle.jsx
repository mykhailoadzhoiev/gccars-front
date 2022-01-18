import React, { useEffect, useState } from 'react'
import CircleProgressbar from '../../../../components/CircleProgressbar/CircleProgressbar'

import { wobble, headShake, bounce, tada, fadeOut } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Modal from '../../../../components/Modal/Modal';

import heart from "../../../../asset/heart.png"
import coin from "../../../../asset/coin.png"
import star from "../../../../asset/star.png"
import axios from 'axios';
import { BASE_URL } from '../../../../constants';

import dirka1 from '../../../../asset/dirka1.svg'
import dirka2 from '../../../../asset/dirka2.svg'
import dirka3 from '../../../../asset/dirka3.svg'
import useResizeAware from 'react-resize-aware';


const PveBattle = ({ item, setContentTag }) => {
    const timeBattle = 3000
    const token = localStorage.getItem('token')

    const styles = {
        wobble: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(wobble, 'wobble')
        },
        wobble2: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(wobble, 'wobble2')
        },
        bounce: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(bounce, 'bounce')
        },
        headShake: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(headShake, 'headShake')
        },
        headShake2: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(headShake, 'headShake2')
        },
        headShake3: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(headShake, 'headShake3')
        },
        swing: {
            animation: 'x 1.7s',
            animationName: Radium.keyframes(tada, 'tada')
        },
        fadeOut: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeOut, 'fadeOut')
        },
        disNone: {
            display: 'none'
        }

    }

    const [phase, setPhase] = useState('')
    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [resBattle, setResBattle] = useState({})

    const [resizeListener, sizes] = useResizeAware();
    const [resizeListenerBlock, sizesBlock] = useResizeAware();

    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)



    const whatPhase = (player, id) => {
        if (player) {
            if (phase === 'first_1bot') {
                return styles.wobble
            } else if (phase === 'first_2bot') {
                return styles.wobble2
            } else if (phase === 'first_3bot') {
                return styles.bounce
            } else if (phase === 'second_1player') {
                return styles.headShake
            } else if (phase === 'second_2player') {
                return styles.headShake2
            } else if (phase === 'second_3player') {
                return styles.headShake3
            } else {
                return null
            }
        } else {
            if (phase === 'first_1bot' && id === 1) {
                return styles.headShake
            } else if (phase === 'first_2bot' && id === 2) {
                return styles.headShake
            } else if (phase === 'first_3bot' && id === 3) {
                return styles.headShake
            } else if (phase === 'second_1player' && id === 1) {
                return styles.swing
            } else if (phase === 'second_2player' && id === 2) {
                return styles.swing
            } else if (phase === 'second_3player' && id === 3) {
                return styles.swing
            } else {
                return null
            }
        }
    }

    const whatPhaseDirka = (player, id) => {
        if (player) {
            if (phase === 'second_1player' && id === 1) {
                return styles.fadeOut
            } else if (phase === 'second_2player' && id === 2) {
                return styles.fadeOut
            } else if (phase === 'second_3player' && id === 3) {
                return styles.fadeOut
            } else {
                return styles.disNone
            }
        } else {
            if (phase === 'first_1bot' && id === 4) {
                return styles.fadeOut
            } else if (phase === 'first_2bot' && id === 5) {
                return styles.fadeOut
            } else if (phase === 'first_3bot' && id === 6) {
                return styles.fadeOut
            } else {
                return styles.disNone
            }
        }
    }

    const finishBattle = (battleId) => {
        axios.post(`${BASE_URL}/PveBattles/complete/${battleId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log('finishRes', res);
            setContentTag('pveCards')
        })

    }



    useEffect(() => {
        // console.log(sizes);
        setSqSize(sizes.width / 7.24)
        setStrokeWidth(sizes.width / 41)
    }, [sizes.width])

    // useEffect(() => {
    //     console.log('sizesBlock', sizesBlock);
    // }, [sizesBlock.width])

    useEffect(() => {
        axios.post(`${BASE_URL}/PveBattles/start/${item.carId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log('RESBATTLE', res)
            setResBattle(res.data.data)
        })
        setTimeout(() => {
            setPhase('first_1bot')
        }, timeBattle)
        setTimeout(() => {
            setPhase('')
        }, timeBattle + 1500)
        setTimeout(() => {
            setPhase('first_2bot')
        }, timeBattle * 2)
        setTimeout(() => {
            setPhase('')
        }, timeBattle * 2 + 1500)
        setTimeout(() => {
            setPhase('first_3bot')
        }, timeBattle * 3)
        setTimeout(() => {
            setPhase('')
        }, timeBattle * 3 + 1500)
        setTimeout(() => {
            setPhase('second_1player')
        }, timeBattle * 4)
        setTimeout(() => {
            setPhase('')
        }, timeBattle * 4 + 1500)
        setTimeout(() => {
            setPhase('second_2player')
        }, timeBattle * 5)
        setTimeout(() => {
            setPhase('')
        }, timeBattle * 5 + 1500)
        setTimeout(() => {
            setPhase('second_3player')
        }, timeBattle * 6)
        setTimeout(() => {
            setPhase('')
        }, timeBattle * 6 + 1500)
        setTimeout(() => {
            setPhase('finish')
        }, timeBattle * 6.5)
    }, [item])

    useEffect(() => {
        console.log('phase', phase);
        if (phase === 'finish') {
            console.log('FIIIIINISHHH');
            setActiveModalSuccess(true)
        }
    }, [phase])

    return (
        <>
            <Modal dopFunc={() => finishBattle(resBattle.pveBattleId)} active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div class="form text-center">
                    <div class="modal__victoryTitle">Victory</div>
                    <div class="congratsEls">
                        <div class="congratsEls__title">{resBattle.position === 1 ? 'Congrats!' : 'Defeat!'}</div>
                        <ul class="congratsEls__list">
                            <li class="congratsEls__list-el">Car damage <span class="semibold">30%</span> <img class="congratsEls__list-el-img" src={heart} alt="#" /> </li>
                            <li class="congratsEls__list-el">You finished in <span class="semibold">{resBattle.position === 1 ? '1' : '4'}</span> placе </li>
                            <li class="congratsEls__list-el">Your reward is <span class="semibold">10</span> <img class="congratsEls__list-el-img" src={coin} alt="#" /> </li>
                            <li class="congratsEls__list-el">You get <span class="semibold">{resBattle.expiriencePoints}XP</span> <img class="congratsEls__list-el-img" src={star} alt="#" /> </li>
                        </ul>
                    </div>
                    <div class="form__buttons">
                        <button onClick={() => {
                            finishBattle(resBattle.pveBattleId)
                            // setContentTag('pveCards')
                            setActiveModalSuccess(false)
                        }} class="button button--success modal-close">Ok</button>
                    </div>
                </div>
            </Modal>
            <div class="cards customScroll cards--twoColumns pve-block">
                {resizeListenerBlock}
                <div class="card modal-toggle" data-target="#modalCongrats" >
                    {resizeListener}
                    <StyleRoot>
                        <div class={phase !== 'finish' && phase !== '' ? "card__inner anim" : "card__inner"} style={whatPhase(true)}>
                            <img className='dirka' src={dirka1} alt="" style={whatPhaseDirka(true, 1)} />
                            <img className='dirka2' src={dirka2} alt="" style={whatPhaseDirka(true, 2)} />
                            <img className='dirka3' src={dirka3} alt="" style={whatPhaseDirka(true, 3)} />
                            <div class="card__type card__type--player">Player1</div>
                            <div class="card__id">id {item.carId}</div>
                            <div class="card__top">
                                <div class="card__top-el lvl"><span class="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                                <div class="card__top-el hash">{item.parameters[4].value} Hash</div>
                            </div>
                            <div class="card__imgContainer">
                                <img src={item.imageUrl} alt="#" class="card__img" />
                            </div>
                            <div class="card__title">[{item.parameters.filter(el => el.carParameter === 5)[0].value}] {item.name.length >= 10
                                ? `${item.name.slice(0, 10)}...`
                                : item.name
                            }</div>
                            <div class="card__stats withoutMb">
                                <ul class="card__statsList">
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Speed</span>
                                            <span class="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 0)[0].value}</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 0)[0].value}%` }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Armor</span>
                                            <span class="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 1)[0].value}</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 1)[0].value}%` }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Attack</span>
                                            <span class="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 2)[0].value}</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 2)[0].value}%` }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Hp</span>
                                            <span class="card__statsList-el-numbers">100</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "100%" }}></span>
                                        </span>
                                    </li>
                                </ul>
                                <div class="card__health" data-percent="60">
                                    <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={100} />
                                    <div>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyleRoot>
                </div>
                <div class="card modal-toggle" data-target="#modalCongrats">
                    <StyleRoot>
                        <div class={phase !== 'finish' && phase !== '' && (phase === 'first_1bot' || phase === 'second_1player') ? "card__inner anim" : "card__inner"}
                            style={whatPhase(false, 1)}>
                            <img className='dirka' src={dirka1} alt="" style={whatPhaseDirka(false, 4)} />
                            <img className='dirka2' src={dirka2} alt="" style={whatPhaseDirka(false, 4)} />
                            <img className='dirka3' src={dirka3} alt="" style={whatPhaseDirka(false, 4)} />
                            <div class="card__type card__type--bot">Bot</div>
                            <div class="card__id">id 0tgdg1</div>
                            <div class="card__top">
                                <div class="card__top-el lvl"><span class="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                                <div class="card__top-el hash">4 Hash</div>
                            </div>
                            <div class="card__imgContainer">
                                <img src={item.imageUrl} alt="#" class="card__img" />
                            </div>
                            <div class="card__title">[Gold] ice-cream car</div>
                            <div class="card__stats withoutMb">
                                <ul class="card__statsList">
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Speed</span>
                                            <span class="card__statsList-el-numbers">40</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Armor</span>
                                            <span class="card__statsList-el-numbers">50</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Attack</span>
                                            <span class="card__statsList-el-numbers">60</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Hp</span>
                                            <span class="card__statsList-el-numbers">100</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "100%" }}></span>
                                        </span>
                                    </li>
                                </ul>
                                <div class="card__health" data-percent="60">
                                    <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={100} />
                                    <div>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyleRoot>
                </div>
                <div class="card modal-toggle" data-target="#modalCongrats">
                    <StyleRoot>
                        <div class={phase !== 'finish' && phase !== '' && (phase === 'first_3bot' || phase === 'second_3player') ? "card__inner anim" : "card__inner"} style={whatPhase(false, 3)}>
                            <img className='dirka' src={dirka1} alt="" style={whatPhaseDirka(false, 6)} />
                            <img className='dirka2' src={dirka2} alt="" style={whatPhaseDirka(false, 6)} />
                            <img className='dirka3' src={dirka3} alt="" style={whatPhaseDirka(false, 6)} />
                            <div class="card__type card__type--bot">Bot</div>
                            <div class="card__id">id 0tgdg1</div>
                            <div class="card__top">
                                <div class="card__top-el lvl"><span class="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                                <div class="card__top-el hash">4 Hash</div>
                            </div>
                            <div class="card__imgContainer">
                                <img src={item.imageUrl} alt="#" class="card__img" />
                            </div>
                            <div class="card__title">[Gold] ice-cream car</div>
                            <div class="card__stats withoutMb">
                                <ul class="card__statsList">
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Speed</span>
                                            <span class="card__statsList-el-numbers">40</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Armor</span>
                                            <span class="card__statsList-el-numbers">50</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Attack</span>
                                            <span class="card__statsList-el-numbers">60</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Hp</span>
                                            <span class="card__statsList-el-numbers">100</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "100%" }}></span>
                                        </span>
                                    </li>
                                </ul>
                                <div class="card__health" data-percent="60">
                                    <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={100} />
                                    <div>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </StyleRoot>
                </div>
                <div class="card modal-toggle" data-target="#modalCongrats">
                    <StyleRoot>
                        <div class={phase !== 'finish' && phase !== '' && (phase === 'first_2bot' || phase === 'second_2player') ? "card__inner anim" : "card__inner"} style={whatPhase(false, 2)}>
                            <img className='dirka' src={dirka1} alt="" style={whatPhaseDirka(false, 5)} />
                            <img className='dirka2' src={dirka2} alt="" style={whatPhaseDirka(false, 5)} />
                            <img className='dirka3' src={dirka3} alt="" style={whatPhaseDirka(false, 5)} />
                            <div class="card__type card__type--bot">Bot</div>
                            <div class="card__id">id 0tgdg1</div>
                            <div class="card__top">
                                <div class="card__top-el lvl"><span class="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                                <div class="card__top-el hash">4 Hash</div>
                            </div>
                            <div class="card__imgContainer">
                                <img src={item.imageUrl} alt="#" class="card__img" />
                            </div>
                            <div class="card__title">[Gold] ice-cream car</div>
                            <div class="card__stats withoutMb">
                                <ul class="card__statsList">
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Speed</span>
                                            <span class="card__statsList-el-numbers">40</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Armor</span>
                                            <span class="card__statsList-el-numbers">50</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Attack</span>
                                            <span class="card__statsList-el-numbers">60</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "40%" }}></span>
                                        </span>
                                    </li>
                                    <li class="card__statsList-el">
                                        <span class="card__statsList-el-header">
                                            <span class="card__statsList-el-type">Hp</span>
                                            <span class="card__statsList-el-numbers">100</span>
                                        </span>
                                        <span class="card__statsList-el-value">
                                            <span class="active" style={{ "width": "100%" }}></span>
                                        </span>
                                    </li>
                                </ul>
                                <div class="card__health" data-percent="60">
                                    <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={100} />
                                    <div>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyleRoot>
                </div>
            </div>
        </>
    )
}

export default PveBattle
