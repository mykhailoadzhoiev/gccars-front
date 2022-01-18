import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import car from '../../../asset/car.png'

const MyStakes = () => {

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
        top: '30px',
        right: '0px',
        height: '90%',
        borderRadius: 10
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props} />
    );
}

    return (
        <div class="tab-pane fade show active" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="cards customScroll ">
              <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>

              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              <div class="card">
                <div class="card__inner">
                <div class="card__topText">ARP 200%</div>
                <div class="card__imgContainer">
                  <img src={car} alt="#" class="card__img" />
                </div>
                <div class="card__title">[Gold] ice-cream car</div>
                <div class="card__price">150 coin</div>
                <ul class="card__infoList">
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">State date</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Locked to</span>
                    <span class="card__infoList-el-value">1.01.2022  23:45:11</span>
                  </li>
                  <li class="card__infoList-el">
                    <span class="card__infoList-el-type">Profit</span>
                    <span class="card__infoList-el-value">50 coin</span>
                  </li>
                </ul>
                <span data-target="#modalUnstake" class="card__button modal-toggle">UNSTAKE NOW</span>
                </div>
              </div>
              </Scrollbars>
            </div>
          </div>
    )
}

export default MyStakes
