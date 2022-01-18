import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Loader from '../../../components/Loader/Loader'
import { BASE_URL } from '../../../constants'
import nftAbi from '../../../nftAbi'
import MyCardCabinet from './MyCardCabinet/MyCardCabinet'

const NFTCard = () => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [selectDropdown, setSelrctDropdown] = useState(0)
    const [arrCars, setArrCars] = useState([])
    const [mintIdArr, setMintIdArr] = useState([])
    const address = localStorage.getItem('account')

    const [loading, setLoading] = useState(true)
    const [loadingMint, setLoadingMint] = useState(false)

    const token = localStorage.getItem('token')

    const addMintIdArr = async () => {
        setMintIdArr([])
        const mIdArr = []
        console.log('address', address);
        const balanceOf = await nftAbi.methods.balanceOfAll(address).call()
        await balanceOf.forEach((el, i) => {
            console.log('balanceOfEl', el);
            mIdArr.push(+el.tokenId)
        })
        await setLoadingMint(false)
        setMintIdArr(mIdArr)
    }

    const rebootItem = () => {
        addMintIdArr()
        setLoading(true)
        // const bodyFormData = new FormData();
        // bodyFormData.append('Skip', 0)
        // bodyFormData.append('Take', 9)
        axios.post(`${BASE_URL}/Cars/user`, {
            mintIds: mintIdArr,
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

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         rebootItem()

    //         return () => clearInterval(intervalId); 
    //     }, 8000)
    // }, [])

    useEffect(() => {
        setLoading(true)
        console.log('loadingMint', loadingMint);
        if (!loadingMint) {
            axios.post(`${BASE_URL}/Cars/user`, {
                mintIds: mintIdArr,
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

                    setArrCars([...res.data.data.data])
                }).then(() => {
                    setLoading(false)
                })
        }

    }, [mintIdArr])

    useEffect(async () => {
        addMintIdArr()
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
                mintIds: mintIdArr,
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
                mintIds: mintIdArr,
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
                mintIds: mintIdArr,
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
                {loading || loadingMint ? <div className='loader'><Loader /></div> : <div className="cards customScroll">
                    {arrCars.map(el => <MyCardCabinet dopFunc={rebootItem} key={el.carId} item={el} />)}
                </div>}
            </div>
        </>
    )
}

export default NFTCard
