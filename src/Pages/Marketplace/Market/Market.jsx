import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loader from '../../../components/Loader/Loader'

import { BASE_URL } from '../../../constants'
import Card from './Card/Card'

import SimpleBar from "simplebar-react";
import Scrollbars from 'react-custom-scrollbars'
// import "simplebar/src/simplebar.css";

const Market = () => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [selectDropdown, setSelrctDropdown] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([1, 2, 3])
    const [totalCount, setTotalCount] = useState(0)
    const [searchName, setSearchName] = useState('')

    // const [pageNum, setPageNum] = useState(1)

    const [arrCars, setArrCars] = useState([])

    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('token')

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

    const buyItem = () => {
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', 0)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/on-sale`, {
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
                setTotalCount(res.data.data.totalCount)
            }).then(() => {
                setLoading(false)
            }).catch(e => {
                console.log(e);
                toast.error('Server error')
                setLoading(false)
            })
    }

    // const searchNameFunc = (e) => {
    // console.log(searchName);
    //     setLoading(true)
    //     // const bodyFormData = new FormData();
    //     // bodyFormData.append('Skip', 0)
    //     // bodyFormData.append('Take', 9)
    //     axios.post(`${BASE_URL}/Cars/on-sale`, {
    //         sorting: [
    //             {
    //                 propertyName: searchName
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
    //             setTotalCount(res.data.data.totalCount)
    //         }).then(() => {
    //             setLoading(false)
    //         }).catch(e => {
    //             console.log(e);
    //             toast.error('Server error')
    //             setLoading(false)
    //         })
    // }

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

    const renderThumbH = ({style, ...props}) => {
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

    const searchNameFunc = () => {
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', 0)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/on-sale`, {
            skip: 0,
            take: 9,
            name: searchName.trim()
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
                setPageCount(Math.ceil(res.data.data.totalCount / 9))
            }).then(() => {
                setLoading(false)
            })
    }

    const highestLevel = () => {
        setLoading(true)
        axios.post(`${BASE_URL}/Cars/on-sale`, {
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
                setTotalCount(res.data.data.totalCount)
                setPageCount(Math.ceil(res.data.data.totalCount / 9))
            }).then(() => {
                setLoading(false)
            })
    }


    useEffect(() => {
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', 0)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/on-sale`, {
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
                setTotalCount(res.data.data.totalCount)
                setPageCount(Math.ceil(res.data.data.totalCount / 9))
            }).then(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (selectDropdown === 0) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/on-sale`, {
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
                    setTotalCount(res.data.data.totalCount)
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        } else if (selectDropdown === 1) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/on-sale`, {
                sorting: [
                    {
                        propertyName: "price",
                        direction: 2,
                        sortOrder: 0
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
                    setTotalCount(res.data.data.totalCount)
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        } else if (selectDropdown === 2) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/on-sale`, {
                sorting: [
                    {
                        propertyName: "price",
                        direction: 1,
                        sortOrder: 0
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
                    setTotalCount(res.data.data.totalCount)
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        } else if (selectDropdown === 3) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/on-sale`, {
                alphabetic: true,
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
                    setTotalCount(res.data.data.totalCount)
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        } else if (selectDropdown === 4 || selectDropdown === 5 || selectDropdown === 6 || selectDropdown === 7 || selectDropdown === 8) {
            setLoading(true)
            // const bodyFormData = new FormData();
            // bodyFormData.append('Skip', 0)
            // bodyFormData.append('Take', 9)
            axios.post(`${BASE_URL}/Cars/on-sale`, {
                level: `${selectDropdown - 3}`,
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
                    setTotalCount(res.data.data.totalCount)
                    setPageCount(Math.ceil(res.data.data.totalCount / 9))
                }).then(() => {
                    setLoading(false)
                })
        }
    }, [selectDropdown])

    useEffect(() => {
        console.log(pageCount)
    }, [pageCount])

    return (
        <>
            <div className="tab-pane fade show active">
                <div className="tab-pane__header">
                    <form onClick={(e) => e.preventDefault()} className="searchForm">
                        <input value={searchName} onChange={e => setSearchName(e.target.value)} type="text" className="searchForm__input" placeholder="search by name" />
                        <button onClick={() => searchNameFunc()} className="searchForm__submit"></button>
                    </form>
                    <div className={showDropdown ? "dropdown active" : "dropdown"}>
                        <div onClick={() => {
                            setShowDropdown(!showDropdown)
                            // setSelrctDropdown(0)
                        }} className="dropdown__toggle">Latest</div>
                        <div className="dropdown__body">
                            <span onClick={() => {
                                if (selectDropdown === 1) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(1)
                                }
                            }} className={selectDropdown === 1 ? "dropdown__body-el active" : "dropdown__body-el"}>highest price</span>
                            <span onClick={() => {
                                if (selectDropdown === 2) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(2)
                                }
                            }} className={selectDropdown === 2 ? "dropdown__body-el active" : "dropdown__body-el"}>lowest price</span>
                            <span onClick={() => {
                                if (selectDropdown === 3) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(3)
                                }
                            }} className={selectDropdown === 3 ? "dropdown__body-el active" : "dropdown__body-el"}>name</span>
                            <span onClick={() => {
                                if (selectDropdown === 4) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(4)
                                }
                            }} className={selectDropdown === 4 ? "dropdown__body-el active" : "dropdown__body-el"}>level 1</span>
                            <span onClick={() => {
                                if (selectDropdown === 5) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(5)
                                }
                            }} className={selectDropdown === 5 ? "dropdown__body-el active" : "dropdown__body-el"}>level 2</span>
                            <span onClick={() => {
                                if (selectDropdown === 6) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(6)
                                }
                            }} className={selectDropdown === 6 ? "dropdown__body-el active" : "dropdown__body-el"}>level 3</span>
                            <span onClick={() => {
                                if (selectDropdown === 7) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(7)
                                }
                            }} className={selectDropdown === 7 ? "dropdown__body-el active" : "dropdown__body-el"}>level 4</span>
                            <span onClick={() => {
                                if (selectDropdown === 8) {
                                    setSelrctDropdown(0)
                                } else {
                                    setSelrctDropdown(8)
                                }
                            }} className={selectDropdown === 8 ? "dropdown__body-el active" : "dropdown__body-el"}>level 5</span>
                        </div>
                    </div>
                </div>
                <div className="text big mt-3vw">{`${totalCount} Results`}</div>
                {loading ? <div className='loader'><Loader /></div> :
                    <div className="cards customScroll">
                        <Scrollbars renderThumbVertical={renderThumb} renderThumbHorizontal={renderThumbH} renderView={renderView} renderTrackVertical={renderTrack} style={{ height: '100%' }}>
                            {/* <SimpleBar className='scrollInSearchResultPage'> */}
                            <div className="arrCars">
                                {arrCars.map(el => <Card buyItem={buyItem} key={el.carId} item={el} />)}
                            </div>

                            {/* </SimpleBar> */}
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
        </>
    )
}

export default Market
