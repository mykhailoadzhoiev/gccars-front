import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import car from '../../../asset/car.png'

const Pools = () => {

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
      <div class="cards customScroll">
        <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>

          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
          <div class="card">
            <div class="card__inner">
              <div class="card__topText">ARP 200%</div>
              <div class="card__imgContainer">
                <img src={car} alt="#" class="card__img" />
              </div>
              <div class="card__title">[Gold] ice-cream car</div>
              <div class="card__price vertical">
                Join conditions
                    <span class="card__price-dark">Min XP 10</span>
              </div>
              <ul class="card__infoList">
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Min staking</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Lock days</span>

                </li>
                <li class="card__infoList-el">
                  <span class="card__infoList-el-type">Status</span>

                </li>
              </ul>
              <span data-target="#modalUnstake" class="card__button modal-toggle">Stake</span>
            </div>
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default Pools
