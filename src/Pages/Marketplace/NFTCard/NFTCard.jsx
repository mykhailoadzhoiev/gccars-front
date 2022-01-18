import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { toast } from 'react-toastify'


import car from '../../../asset/car.svg'
import CircleProgressbar from '../../../components/CircleProgressbar/CircleProgressbar'
import Loader from '../../../components/Loader/Loader'
import { BASE_URL } from '../../../constants'
import MyCard from './MyCard/MyCard'

const NFTCard = () => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [selectDropdown, setSelrctDropdown] = useState(0)
    const [arrCars, setArrCars] = useState([])

    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('token')

    const sellItem = () => {
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', 0)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/user`, {
            skip: 0,
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
                if (res.data.messages != null && res.data.messages.length > 0) {
                    res.data.messages.forEach(el => {
                        toast.error(el)
                    })
                }

                setArrCars([...res.data.data.data])
            }).then(() => {
                setLoading(false)


            }).catch(e => {
                toast.error('Server error')
                setLoading(false)
            })
    }

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

    // const highestLevel = () => {
    //     setLoading(true)
    //     // const bodyFormData = new FormData();
    //     // bodyFormData.append('Skip', 0)
    //     // bodyFormData.append('Take', 9)
    //     axios.post(`${BASE_URL}/Cars/user`, {
    //         sorting: [
    //             {
    //                 propertyName: "level",
    //                 direction: 1,
    //                 sortOrder: 2
    //             }
    //         ],
    //         skip: 0,
    //         take: 9
    //     }, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json',
    //             'accept': 'text/plain'
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)

    //             setArrCars([...res.data.data.data])
    //         }).then(() => {
    //             setLoading(false)
    //         })
    // }

    useEffect(() => {
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', 0)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/user`, {
            skip: 0,
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
            }).then(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        console.log(selectDropdown);
        if (selectDropdown === 1) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/user`, {
                sorting: [
                    {
                        propertyName: "level",
                        direction: 2,
                        sortOrder: 2
                    }
                ],
                skip: 0,
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
                }).then(() => {
                    setLoading(false)
                })
        } else if (selectDropdown === 2) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/user`, {
                sorting: [
                    {
                        propertyName: "level",
                        direction: 1,
                        sortOrder: 2
                    }
                ],
                skip: 0,
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
                }).then(() => {
                    setLoading(false)
                })
        } else if (selectDropdown === 0) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/user`, {
                skip: 0,
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
                }).then(() => {
                    setLoading(false)
                })
        }
    }, [selectDropdown])

    return (
        <>
            <div className="tab-pane fade show active" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="tab-pane__header">
                    <div className={showDropdown ? "dropdown active" : "dropdown"}>
                        <div onClick={() => {
                            // setSelrctDropdown(0)
                            setShowDropdown(!showDropdown)
                        }} className="dropdown__toggle">Name</div>
                        <div className="dropdown__body">
                            <span onClick={() => {
                                if (selectDropdown === 1) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(1)
                                }
                            }} className={selectDropdown === 1 ? "dropdown__body-el active" : "dropdown__body-el"}>highest level</span>
                            <span onClick={() => {
                                if (selectDropdown === 2) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(2)
                                }
                            }} className={selectDropdown === 2 ? "dropdown__body-el active" : "dropdown__body-el"}>lowest level</span>
                        </div>
                    </div>
                </div>
                {loading ? <div className='loader'><Loader /></div> : <div className="cards customScroll withOutPag">
                    <Scrollbars
                        renderThumbVertical={renderThumb}
                        renderThumbHorizontal={renderThumbH}
                        renderView={renderView}
                        renderTrackVertical={renderTrack}
                        style={{ height: '100%' }}>
                        <div className="arrCars">
                            {arrCars.map(el => <MyCard sellItem={sellItem} key={el.carId} item={el} />)}
                        </div>
                    </Scrollbars>
                </div>}
            </div>
        </>
    )
}

export default NFTCard
