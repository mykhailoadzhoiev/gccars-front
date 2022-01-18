import React from 'react'
import CircleProgressbar from '../../components/CircleProgressbar/CircleProgressbar'

import car from '../../asset/car.png'
import Scrollbars from 'react-custom-scrollbars'

const Farming = () => {

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
            bottom: '85px',
            width: '100%',
            borderRadius: 10
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    return (
        <div className="tab-content br lighten maining-height">
            <div className="tab-pane fade show active p" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="mining mining2">
                    <div className="mining__info">
                        <div className="mining__info-title">Info:</div>
                        <div className="mining__info-body">
                            <div className="mining__info-body-left">
                                <div className="mining__info-body-left-el">
                                    <span className="mining__info-body-left-el-value">100 hash</span>
                                    <span className="mining__info-body-left-el-symbol">=</span>
                                    <span className="mining__info-body-left-el-type">1 Free Spin / 24H</span>
                                </div>
                                <div className="mining__info-body-left-el">
                                    <span className="mining__info-body-left-el-value">10 hash</span>
                                    <span className="mining__info-body-left-el-symbol">=</span>
                                    <span className="mining__info-body-left-el-type">1% change to hit Repair Kit</span>
                                </div>
                            </div>
                            <div className="mining__info-body-right">
                                <a href="#" className="button-weapon">
                                    <span className="button-weapon__icon"></span>
                                    <span className="button-weapon__text">
                                        2 left available
                      </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="mining__subtitle">Your ALL Hashrate is: 40</div>
                        <div className="progressBar">
                            <span className="progressBar__active" style={{ width: "85%" }}>
                                <span className="progressBar__active-text"></span>

                            </span>
                        </div>
                        <div className="mining__subsubtitle">5% change to hit Repair kit</div>

                    </div>
                    <div className="cards cards--horizontal customScroll">

                        <Scrollbars className='scrollReact' renderThumbHorizontal={renderThumb} renderTrackHorizontal={renderTrack} style={{ width: '100%' }}> 

                        <div className="card minCard">
                            <div className="card__inner">
                                <div className="card__id">id 0tgdg1</div>
                                <div className="card__top">
                                    <div className="card__top-el lvl"><span className="value">1</span> Level</div>

                                </div>
                                <div className="card__imgContainer">
                                    <img src={car} alt="#" className="card__img minCar" />
                                </div>
                                <div className="card__title">[Gold] ice-cream car</div>
                                <div className="card__stats">
                                    <ul className="card__statsList">
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Speed</span>
                                                <span className="card__statsList-el-numbers">40</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "40%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Armor</span>
                                                <span className="card__statsList-el-numbers">50</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "50%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Attack</span>
                                                <span className="card__statsList-el-numbers">60</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "60%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Hp</span>
                                                <span className="card__statsList-el-numbers">70</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "70%" }}></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="card__health" data-percent="60">
                                        <CircleProgressbar sqSize={'35'} strokeWidth='6' percentage={60} />
                                        <div>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__bottom justify-content-between">
                                    <span className="card__coins-bottom">50$</span>
                                    <span className="hashs">4 Hash</span>
                                </div>
                            </div>
                        </div>
                        <div className="card minCard">
                            <div className="card__inner">
                                <div className="card__id">id 0tgdg1</div>
                                <div className="card__top">
                                    <div className="card__top-el lvl"><span className="value">1</span> Level</div>

                                </div>
                                <div className="card__imgContainer">
                                    <img src={car} alt="#" className="card__img minCar" />
                                </div>
                                <div className="card__title">[Gold] ice-cream car</div>
                                <div className="card__stats">
                                    <ul className="card__statsList">
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Speed</span>
                                                <span className="card__statsList-el-numbers">40</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "40%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Armor</span>
                                                <span className="card__statsList-el-numbers">50</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "50%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Attack</span>
                                                <span className="card__statsList-el-numbers">60</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "60%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Hp</span>
                                                <span className="card__statsList-el-numbers">70</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "70%" }}></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="card__health" data-percent="60">
                                        <CircleProgressbar sqSize={'35'} strokeWidth='6' percentage={60} />
                                        <div>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__bottom justify-content-between">
                                    <span className="card__coins-bottom">50$</span>
                                    <span className="hashs">4 Hash</span>
                                </div>
                            </div>
                        </div>
                        <div className="card minCard">
                            <div className="card__inner">
                                <div className="card__id">id 0tgdg1</div>
                                <div className="card__top">
                                    <div className="card__top-el lvl"><span className="value">1</span> Level</div>

                                </div>
                                <div className="card__imgContainer">
                                    <img src={car} alt="#" className="card__img minCar" />
                                </div>
                                <div className="card__title">[Gold] ice-cream car</div>
                                <div className="card__stats">
                                    <ul className="card__statsList">
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Speed</span>
                                                <span className="card__statsList-el-numbers">40</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "40%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Armor</span>
                                                <span className="card__statsList-el-numbers">50</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "50%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Attack</span>
                                                <span className="card__statsList-el-numbers">60</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "60%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Hp</span>
                                                <span className="card__statsList-el-numbers">70</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "70%" }}></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="card__health" data-percent="60">
                                        <CircleProgressbar sqSize={'35'} strokeWidth='6' percentage={60} />
                                        <div>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__bottom justify-content-between">
                                    <span className="card__coins-bottom">50$</span>
                                    <span className="hashs">4 Hash</span>
                                </div>
                            </div>
                        </div>
                        <div className="card minCard">
                            <div className="card__inner">
                                <div className="card__id">id 0tgdg1</div>
                                <div className="card__top">
                                    <div className="card__top-el lvl"><span className="value">1</span> Level</div>

                                </div>
                                <div className="card__imgContainer">
                                    <img src={car} alt="#" className="card__img minCar" />
                                </div>
                                <div className="card__title">[Gold] ice-cream car</div>
                                <div className="card__stats">
                                    <ul className="card__statsList">
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Speed</span>
                                                <span className="card__statsList-el-numbers">40</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "40%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Armor</span>
                                                <span className="card__statsList-el-numbers">50</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "50%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Attack</span>
                                                <span className="card__statsList-el-numbers">60</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "60%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Hp</span>
                                                <span className="card__statsList-el-numbers">70</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "70%" }}></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="card__health" data-percent="60">
                                        <CircleProgressbar sqSize={'35'} strokeWidth='6' percentage={60} />
                                        <div>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__bottom justify-content-between">
                                    <span className="card__coins-bottom">50$</span>
                                    <span className="hashs">4 Hash</span>
                                </div>
                            </div>
                        </div>
                        <div className="card minCard">
                            <div className="card__inner">
                                <div className="card__id">id 0tgdg1</div>
                                <div className="card__top">
                                    <div className="card__top-el lvl"><span className="value">1</span> Level</div>

                                </div>
                                <div className="card__imgContainer">
                                    <img src={car} alt="#" className="card__img minCar" />
                                </div>
                                <div className="card__title">[Gold] ice-cream car</div>
                                <div className="card__stats">
                                    <ul className="card__statsList">
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Speed</span>
                                                <span className="card__statsList-el-numbers">40</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "40%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Armor</span>
                                                <span className="card__statsList-el-numbers">50</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "50%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Attack</span>
                                                <span className="card__statsList-el-numbers">60</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "60%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Hp</span>
                                                <span className="card__statsList-el-numbers">70</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "70%" }}></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="card__health" data-percent="60">
                                        <CircleProgressbar sqSize={'35'} strokeWidth='6' percentage={60} />
                                        <div>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__bottom justify-content-between">
                                    <span className="card__coins-bottom">50$</span>
                                    <span className="hashs">4 Hash</span>
                                </div>
                            </div>
                        </div>
                        <div className="card minCard">
                            <div className="card__inner">
                                <div className="card__id">id 0tgdg1</div>
                                <div className="card__top">
                                    <div className="card__top-el lvl"><span className="value">1</span> Level</div>

                                </div>
                                <div className="card__imgContainer">
                                    <img src={car} alt="#" className="card__img minCar" />
                                </div>
                                <div className="card__title">[Gold] ice-cream car</div>
                                <div className="card__stats">
                                    <ul className="card__statsList">
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Speed</span>
                                                <span className="card__statsList-el-numbers">40</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "40%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Armor</span>
                                                <span className="card__statsList-el-numbers">50</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "50%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Attack</span>
                                                <span className="card__statsList-el-numbers">60</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "60%" }}></span>
                                            </span>
                                        </li>
                                        <li className="card__statsList-el">
                                            <span className="card__statsList-el-header">
                                                <span className="card__statsList-el-type">Hp</span>
                                                <span className="card__statsList-el-numbers">70</span>
                                            </span>
                                            <span className="card__statsList-el-value">
                                                <span className="active" style={{ width: "70%" }}></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="card__health" data-percent="60">
                                        <CircleProgressbar sqSize={'35'} strokeWidth='6' percentage={60} />
                                        <div>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__bottom justify-content-between">
                                    <span className="card__coins-bottom">50$</span>
                                    <span className="hashs">4 Hash</span>
                                </div>
                            </div>
                        </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Farming
