import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import car from '../../asset/car.png'
import back from '../../asset/back.svg'
import CircleProgressbar from '../../components/CircleProgressbar/CircleProgressbar';
import { BASE_URL } from '../../constants';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import { actionCar } from '../../redux/reducers/carReducer';
import { actionDataUser, actionMinusCoin } from '../../redux/reducers/userReduser';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

import useResizeAware from 'react-resize-aware';

const CardCArd = () => {

    // const { carItem } = useSelector(state => state.car)
    const [carItem, setCarItem] = useState({})
    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [loading, setLoading] = useState(true)
    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)

    const [resizeListener, sizes] = useResizeAware();

    const { dataUser } = useSelector(state => state.user)


    const token = localStorage.getItem('token')
    const account = localStorage.getItem('account')
    const { pathname } = useLocation()

    const dispatch = useDispatch()

    const history = useNavigate()

    async function buyCar(carId) {
        if (carItem.price <= dataUser.balance) {
            console.log(carId)
            const bodyFormData = new FormData();
            axios.post(`${BASE_URL}/cars/${carId}/buy`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(res => {
                    console.log(res)
                    if (res.data.messages != null && res.data.messages.length > 0) {
                        res.data.messages.forEach(el => {
                            toast.error(el)
                        })

                    }
                    else {
                        dispatch(actionMinusCoin(carItem.price))
                    }
                    setActiveModalSuccess(false)
                    history({ pathname: '/marketplace' })

                }).then(() => {
                })
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/Cars/${pathname.split('/')[2]}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'text/plain'
            }
        }).then(res => {
            console.log(res);
            setCarItem({ ...res.data.data })
            setLoading(false)
        })
        // console.log('lllll', '12.5');
    }, [])

    useEffect(() => {
        console.log(sizes);
        setSqSize(sizes.width / 4.3)
        setStrokeWidth(sizes.width / 28)
    }, [sizes.width])

    return (
        <>
            {loading ? <div className='loader'><Loader /></div>
                : <>
                    <Modal active={activeModalSuccess} setActive={setActiveModalSuccess}>
                        <div className="form text-center">
                            <div className="form__text">Do you want to buy <span>{carItem.name}?</span></div>
                            <div className="form__buttons">
                                <button onClick={() => buyCar(carItem.carId)} className="button button--success modal-close modal-toggle" data-target="#modalStackingValue">Yes</button>
                                <button onClick={() => setActiveModalSuccess(false)} className="button button--cancel modal-close">No</button>
                            </div>
                        </div>
                    </Modal>
                    <div className="page-content__tabs nav-tabs">
                        <a className="page-content__tabs-toggle active" data-toggle="tab" href="#myStakes" role="tab" aria-selected="false">Название</a>
                    </div>
                    <div className='tab-content'>
                        <div className="tab-pane fade show active" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="productCard">
                                <div onClick={() => history({ pathname: '/marketplace' })} className="button button--back"><img src={back} alt="#" /></div>
                                <div className="card buyCard">
                                    {resizeListener}
                                    <div className="card__inner">
                                        <div className="card__id">id {carItem.carId}</div>
                                        <div className="card__top">
                                            <div className="card__top-el lvl"><span className="value">{carItem?.parameters?.filter(el => el.carParameter === 3)[0]?.value}</span> Level</div>
                                            <div className="card__top-el hash">{carItem?.parameters[4]?.value} Hash</div>
                                        </div>
                                        <div className="card__imgContainer">
                                            <img src={carItem?.imageUrl} alt="#" className="card__img" />
                                        </div>
                                        <div className="card__title">[{carItem?.parameters?.filter(el => el.carParameter === 5)[0]?.value}] {carItem?.name}</div>
                                        <div className="card__stats">
                                            <ul className="card__statsList">
                                                <li className="card__statsList-el">
                                                    <span className="card__statsList-el-header">
                                                        <span className="card__statsList-el-type">Speed</span>
                                                        <span className="card__statsList-el-numbers">{carItem?.parameters?.filter(el => el.carParameter === 0)[0]?.value}</span>
                                                    </span>
                                                    <span className="card__statsList-el-value">
                                                        <span className="active" style={{ "width": `${carItem?.parameters?.filter(el => el.carParameter === 0)[0]?.value}%` }}></span>
                                                    </span>
                                                </li>
                                                <li className="card__statsList-el">
                                                    <span className="card__statsList-el-header">
                                                        <span className="card__statsList-el-type">Armor</span>
                                                        <span className="card__statsList-el-numbers">{carItem?.parameters?.filter(el => el.carParameter === 1)[0]?.value}</span>
                                                    </span>
                                                    <span className="card__statsList-el-value">
                                                        <span className="active" style={{ "width": `${carItem?.parameters?.filter(el => el.carParameter === 1)[0]?.value}%` }}></span>
                                                    </span>
                                                </li>
                                                <li className="card__statsList-el">
                                                    <span className="card__statsList-el-header">
                                                        <span className="card__statsList-el-type">Attack</span>
                                                        <span className="card__statsList-el-numbers">{carItem?.parameters?.filter(el => el.carParameter === 2)[0]?.value}</span>
                                                    </span>
                                                    <span className="card__statsList-el-value">
                                                        <span className="active" style={{ "width": `${carItem?.parameters?.filter(el => el.carParameter === 1)[0]?.value}%` }}></span>
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
                                                <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={80} />
                                                <div className='healthProc'>
                                                    <span>60%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <span className="card__coins-bottom">{carItem?.price}coin</span>
                                    </div>
                                </div>
                                <div className="productCard__body">
                                    <div className="productCard__about">
                                        <div className="productCard__about-el">
                                            <span className="productCard__about-el-type">Owner:</span>
                                            <span className="productCard__about-el-value">{carItem.address ? `${carItem?.address?.slice(0, 4)}...${carItem?.address?.slice(Math.max(carItem?.address?.length - 4, 0))}` : '0xCC...Fe48'}</span>
                                        </div>
                                        <div className="productCard__about-el">
                                            <span className="productCard__about-el-type">Price:</span>
                                            <span className="productCard__about-el-value">{carItem.price} coin</span>
                                        </div>
                                    </div>
                                    {carItem.address !== account && <button onClick={() => setActiveModalSuccess(true)} type="button" data-target="#modalBuy" className="button button--join modal-toggle">Buy</button>}
                                    <div className="results customScroll">
                                        <div className="results__el w-100">

                                            <table className="results__el-table els-pt">
                                                <thead className="results__el-table-header">
                                                    <tr className="results__el-table-row">
                                                        <th className="results__el-table-el">Date</th>
                                                        <th className="results__el-table-el">Owner</th>
                                                        <th className="results__el-table-el">Buyer</th>
                                                        <th className="results__el-table-el">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="results__el-table-body">
                                                    {carItem.salesHistory.map((el, idx) => {
                                                        return (
                                                            <tr key={idx} className="results__el-table-row">
                                                                <td className="results__el-table-el">{el.soldAt.split('T')[0]} {el.soldAt.split('T')[1]}</td>
                                                                <td className="results__el-table-el">{el.seller ? `${el.seller.slice(0, 4)}...${el.seller.slice(Math.max(el.seller.length - 4, 0))}` : '0x00000'}</td>
                                                                <td className="results__el-table-el">{el.buyer ? `${el.buyer.slice(0, 4)}...${el.buyer.slice(Math.max(el.buyer.length - 4, 0))}` : '0x00000'}</td>
                                                                <td className="results__el-table-el text-center">{el.price}</td>
                                                            </tr>
                                                        )
                                                    })}

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }
        </>

    )
}

export default CardCArd
