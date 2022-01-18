import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../constants'
import CardPvp from './CardPvp/CardPvp'

import Loader from '../../../../components/Loader/Loader'
import { toast } from 'react-toastify'
import Scrollbars from 'react-custom-scrollbars'

const PvpNFRCard = ({ hasJoinCar, battleId, setContent }) => {

    const [arrCars, setArrCars] = useState([])

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [pages, setPages] = useState([1, 2, 3])
    const [totalCount, setTotalCount] = useState(0)
    const [searchName, setSearchName] = useState('')

    const token = localStorage.getItem('token')

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

    const renderView = ({ style, ...props }) => {
        const thumbStyle = {
            overflowX: 'hidden'
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
            height: '100%',
            borderRadius: 10
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    const renderThumbH = ({ style, ...props }) => {
        const thumbStyle = {
            display: 'flex',
            overflow: 'hisdden'
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    const changePage = (page) => {
        setCurrentPage(page)
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', (page - 1) * 9)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/on-sale`, {
            skip: (page - 1) * 9,
            take: 9
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        })
            .then(res => {
                console.log(res)

                setArrCars([...res.data.data.data])
                setTotalCount(res.data.data.totalCount)
            }).then(() => {
                setLoading(false)
            }).catch(e => {
                console.log(e);
                toast.error('Серверная ошибка')
                setLoading(false)
            })
    }

    const joinBattle = (carId) => {
        setLoading(true)
        axios.post(`${BASE_URL}/PvpBattles/${battleId}/join/${carId}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'text/plain'
            }
        }).then(res => {
            setContent()
            console.log('join', res);
            if (res.data.messages) {
                res.data.messages.forEach(el => {
                    toast(el)
                })
            }
        })
    }

    useEffect(() => {
        setLoading(true)

        if (hasJoinCar) {
            axios.post(`${BASE_URL}/PvpBattles/cars/${battleId}`, {
                skip: 0,
                take: 100
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'accept': 'text/plain'
                }
            })
                .then(res => {
                    console.log(res)
                    setTotalCount(res.data.data.totalCount)
                    setArrCars([...res.data.data.data])
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        } else {
            axios.post(`${BASE_URL}/Cars/user`, {
                skip: 0,
                take: 100
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'accept': 'text/plain'
                }
            })
                .then(res => {
                    console.log(res)
                    setTotalCount(res.data.data.totalCount)
                    setArrCars([...res.data.data.data])
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        }
    }, [])

    return (
        <div className="tab-pane fade show active">
            <div className="text big mt-3vw">All cars available for battle</div>
            {loading ? <div className='loader'><Loader /></div> :
                <div className="cards customScroll">
                    <Scrollbars
                        renderThumbVertical={renderThumb}
                        renderThumbHorizontal={renderThumbH}
                        renderView={renderView}
                        renderTrackVertical={renderTrack}
                        style={{ height: '100%' }}>
                    <div className="arrCars">
                        {arrCars.map(el => <CardPvp joinBattle={joinBattle} hasJoinCar={hasJoinCar} key={el.carId} item={el} />)}
                    </div>
                    </Scrollbars>
                </div>

            }


            <div className="pagination">
                <a href="#" className="pagination__prev"></a>
                <a
                    href="#"
                    className={currentPage === pages[0] ? "pagination__number active" : "pagination__number"}
                    onClick={() => changePage(pages[0])}
                >
                    {pages[0]}
                </a>
                {pages[1] <= pageCount && <a
                    href="#"
                    className={currentPage === pages[1] ? "pagination__number active" : "pagination__number"}
                    onClick={() => changePage(pages[1])}
                >
                    {pages[1]}
                </a>
                }
                {pages[2] <= pageCount && <a
                    href="#"
                    className={currentPage === pages[2] ? "pagination__number active" : "pagination__number"}
                    onClick={() => changePage(pages[2])}
                >
                    {pages[2]}
                </a>
                }
                <a href="#" className="pagination__next"></a>
            </div>
        </div>
    )
}

export default PvpNFRCard
