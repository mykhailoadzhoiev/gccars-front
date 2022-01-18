import React, { useEffect, useRef } from 'react'

import car1 from "../../asset/car1.svg"
import car2 from "../../asset/car2.svg"
import car3 from "../../asset/car3.svg"
import car4 from "../../asset/car4.svg"

import './Conteiner.scss'

const Conteiner = () => {

    const refCard = useRef()

    const start = () => {
        let random = Math.floor(Math.random() * 50)
        refCard.current.style.left = -30 * 100 + 'px'

        // setTimeout(() => {
        //     refCard.current.style.left = '0px'
        // }, 12000)
    }

    // useEffect(() => {
    //     console.log(refCard.current.children)
    // }, [refCard])

    return (
        <>
            <div class="swiper roulette-carousel">
                <div ref={refCard} class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car4} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car4} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car4} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car1} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car2} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="roulette-carousel__el">
                            <img src={car3} alt="#" class="roulette-carousel__el-img" />
                            <div class="roulette-carousel__el-name">car name</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="roulette-carousel__nav">
                {/* <div class="roulette-carousel__prev"></div>
                <div class="roulette-carousel__next"></div> */}
            </div>

            <div class="spinNav">
                <div class="spinNav__info">
                    <div class="spinNav__info-text">Spin price</div>
                    <div class="spinNav__info-value">5 </div>
                    <div class="spinNav__info-text">XYZ</div>
                </div>
                <div onClick={() => start()} class="button button--join">Spin</div>
                <div class="spinNav__info">
                    <div class="spinNav__info-text">You have</div>
                    <div class="spinNav__info-value">5 </div>
                    <div class="spinNav__info-text">Free spins</div>
                </div>
            </div>
            <div class="tab-content roulette-height">
                <div class="tab-pane fade show active p" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                    {/* <div class="results__titles">
                        <div class="results__el-title">Last purchases :</div>
                        <div class="results__el-title">Rules:</div>
                    </div> */}
                    <div class="results customScroll results--dashboard">
                        <div class="results__el">
                        <div class="results__el-title">Last purchases :</div>
                            <table class="results__el-table">
                                <thead class="results__el-table-header">
                                    <tr class="results__el-table-row">
                                        <th class="results__el-table-el">Time</th>
                                        <th class="results__el-table-el">Wallet id</th>
                                        <th class="results__el-table-el">Car name</th>
                                    </tr>
                                </thead>
                                <tbody class="results__el-table-body">
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                    <tr class="results__el-table-row">
                                        <td class="results__el-table-el">5.10</td>
                                        <td class="results__el-table-el">0xfkhnfd</td>
                                        <td class="results__el-table-el">Car name</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="results__el">
                            <div class="results__el-title">Rules:</div>
                            <p class="text text-left">These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are texts are text</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conteiner
