import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { NavLink, useNavigate } from 'react-router-dom'

import car from '../../asset/car.png'
import Modal from '../../components/Modal/Modal'

const Garage = () => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [selectDropdown, setSelrctDropdown] = useState(0)

    const [activeModalSuccess, setActiveModalSuccess] = useState(false)

    const history = useNavigate()

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
            top: '0px',
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

    return (
        <>
            <Modal active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div class="form text-center">
                    <div class="form__text">Are you sure you want to fix this car?</div>
                    <div class="form__buttons">
                        <button onClick={() => setActiveModalSuccess(false)} class="button button--success modal-close modal-toggle" data-target="#modalStackingValue">Yes</button>
                    </div>
                </div>
            </Modal>
            <div class="tab-content br garage-height">
                <div class="tab-pane fade show active" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="tab-pane__header-header">
                        <div class="tab-pane__header justify-content-start withoutMarginBottom">
                            <div class={showDropdown ? "dropdown active" : "dropdown"}>
                                <div onClick={() => {
                                    setShowDropdown(!showDropdown)
                                    setSelrctDropdown(0)
                                }} class="dropdown__toggle">By repair</div>
                                <div class="dropdown__body leftBody">
                                    <span onClick={() => setSelrctDropdown(1)} className={selectDropdown === 1 ? "dropdown__body-el active" : "dropdown__body-el"}>highest level</span>
                                    <span onClick={() => setSelrctDropdown(2)} className={selectDropdown === 2 ? "dropdown__body-el active" : "dropdown__body-el"}>lowest level</span>
                                    <span onClick={() => setSelrctDropdown(3)} className={selectDropdown === 3 ? "dropdown__body-el active" : "dropdown__body-el"}>name</span>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="button-weapon">
                            <span class="button-weapon__icon"></span>
                            <span class="button-weapon__text">
                                2 left available
                </span>
                        </a>
                    </div>
                    <div class="cards customScroll ">
                        <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span onClick={() => history({pathname: '/rewards'})} class="card__button card__button--rewards">Rewards</span>
                                        <span onClick={() => setActiveModalSuccess(true)} data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--player">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--player">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__inner">
                                    <div class="card__type card__type--bot">Merge</div>
                                    <div class="card__id">id 0tgdg1</div>
                                    <div class="card__top">
                                        <div class="card__top-el lvl"><span class="value">1</span> Level</div>
                                        <div class="card__top-el hash">4 Hash</div>
                                    </div>
                                    <div class="card__imgContainer">
                                        <img src={car} alt="#" class="card__img" />
                                    </div>
                                    <div class="card__title">[Gold] ice-cream car</div>
                                    <div class="card__stats">
                                        <ul class="card__statsList">
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Speed</span>
                                                    <span class="card__statsList-el-numbers">40</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "40%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Armor</span>
                                                    <span class="card__statsList-el-numbers">50</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "50%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Attack</span>
                                                    <span class="card__statsList-el-numbers">60</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "60%" }}></span>
                                                </span>
                                            </li>
                                            <li class="card__statsList-el">
                                                <span class="card__statsList-el-header">
                                                    <span class="card__statsList-el-type">Hp</span>
                                                    <span class="card__statsList-el-numbers">70</span>
                                                </span>
                                                <span class="card__statsList-el-value">
                                                    <span class="active" style={{ width: "70%" }}></span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div class="card__health" data-percent="60">

                                        </div>
                                    </div>
                                    <div class="card__buttons">
                                        <span class="card__button card__button--rewards">Rewards</span>
                                        <span data-target="#modalDeposit" class="card__button modal-toggle card__button--settings"></span>
                                    </div>
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garage
