import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { useNavigate } from 'react-router'
import cup from "../../asset/cup.png"
import messageCoin from "../../asset/messageCoin.png"

const Rewards = () => {

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
            right: '0px',
            height: '50%',
            borderRadius: 10
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    return (
        <div class="tab-content br garage2-height">
            <div class="tab-pane fade show active p" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                <div onClick={() => history({pathname: '/garage'})} class="closeButton"></div>
                <div class="balances">
                    <div class="balances__el">
                        <div class="balances__el-title">All rewards</div>
                        <div class="balances__el-body">
                            <div class="balances__el-imgContainer">
                                <img src={cup} alt="#" class="balances__el-img" />
                            </div>
                            <div class="balances__el-value">200</div>
                        </div>
                    </div>
                    <div class="balances__el">
                        <div class="balances__el-title">Avialable for claim</div>
                        <div class="balances__el-body">
                            <div class="balances__el-imgContainer">
                                <img src={messageCoin} alt="#" class="balances__el-img" />
                            </div>
                            <div class="balances__el-value">100</div>
                        </div>
                    </div>
                </div>
                <div class="transactions">
                    <div class="transactions__table">
                        <div class="transactions__table-header">
                            <span class="transactions__table-header-el text-left">Date</span>
                            <span class="transactions__table-header-el">Position</span>
                            <span class="transactions__table-header-el">Xp</span>
                            <span class="transactions__table-header-el">Rewards</span>
                            <span class="transactions__table-header-el"></span>
                        </div>
                        <div class="transactions__table-body-row">
                            <span class="transactions__table-body-el"></span>
                            <span class="transactions__table-body-el"></span>
                            <span class="transactions__table-body-el"></span>
                            <span class="transactions__table-body-el"></span>
                            <span class="transactions__table-body-el"><a href="#" class="button button--join">Claim All</a></span>
                        </div>
                        <div class="transactions__table-body customScroll">
                            <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '70%' }}>
                                {/* <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div> */}
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle disabled">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07!!!!</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                                <div class="transactions__table-body-row">
                                    <span class="transactions__table-body-el">19 Jan 2038 03:14.07</span>
                                    <span class="transactions__table-body-el">1ST</span>
                                    <span class="transactions__table-body-el">25</span>
                                    <span class="transactions__table-body-el">30</span>
                                    <span class="transactions__table-body-el"><span data-target="#modalClaim" class="button button--join modal-toggle">Claim</span></span>
                                </div>
                            </Scrollbars>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards
