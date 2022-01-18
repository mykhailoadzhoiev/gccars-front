import React, { useState, useEffect } from 'react'

import car from '../../../../asset/car.svg'
import CircleProgressbar from '../../../../components/CircleProgressbar/CircleProgressbar'
import axios from "axios";
import { BASE_URL, privateKey, publicKey } from "../../../../constants";
import Modal from '../../../../components/Modal/Modal';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import nftAbi from '../../../../nftAbi';
import web3 from '../../../../web3'
import Loader from '../../../../components/Loader/Loader';
import BigNumber from 'bignumber.js'
import useResizeAware from 'react-resize-aware';

const MyCard = ({ item, sellItem, dopFunc }) => {

    const token = localStorage.getItem('token')
    const address = localStorage.getItem('account')

    const [mintIdArr, setMintIdArr] = useState([])
    const [lastId, setLastId] = useState()
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [activeModalSuccessWithdraw, setActiveModalSuccessWithdraw] = useState(false)
    const expectedBlockTime = 1000;

    const [resizeListener, sizes] = useResizeAware();

    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)

    const history = useNavigate()

    const balanceOfAlls = async () => {
        setMintIdArr([])
        let lastId
        const balanceOf = await nftAbi.methods.balanceOfAll(address).call()
        console.log('balanceOf', balanceOf);
        balanceOf.forEach((el, i) => {
            if (i === balanceOf.length - 1) {
                lastId = el.tokenId
            }
            setMintIdArr(prev => [...prev, el.tokenId])
        })
        return lastId
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const pushIn = async (carId, mintId, fileUrl) => {
        nftAbi.methods.deposit(carId).send({ from: address }).on('confirmation', (confirmationNumber) => {
            if (confirmationNumber === 5) {
                axios.post(`${BASE_URL}/Cars/${carId}/put-into`, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'accept': 'text/plain'
                    }
                }).then(res => {
                    dopFunc()
                    setActiveModalSuccess(false)
                    setLoadingBtn(false)
                    toast('Transaction succeeded')
                }).catch(e => {
                    setActiveModalSuccess(false)
                    setLoadingBtn(false)
                    toast.error('Transaction failed!')
                })
            }
        })
    }



    const pushOut = async (carId, mintId, fileUrl) => {
        const car = new BigNumber(carId)
        // console.log(car.toString(), mintId, fileUrl, address);

        if (!mintId) {
            // debugger
            const transaction = nftAbi.methods.safeMint(address, fileUrl, carId)
            console.log('carIdcarId', carId, fileUrl, address);

            // console.log('transaction', transaction.estimateGas({ from: publicKey }));

            const options = {
                to: transaction._parent._address,
                data: transaction.encodeABI(),
                gas: await transaction.estimateGas({ from: publicKey }),
            }

            let signedTransaction = await web3.eth.accounts.signTransaction(options, privateKey);
            console.log('signedTransaction', signedTransaction);
            await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction, async function (error, transactonHash) {
                console.log("Submitted transaction with hash: ", transactonHash)
                let transactionReceipt = null
                while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
                    transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash);
                    await sleep(expectedBlockTime)
                }
                balanceOfAlls().then(res => {
                    axios.post(`${BASE_URL}/Cars/${carId}/push-out`, {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'accept': 'text/plain'
                        }
                    }).then(response => {
                        console.log('pushOut', response);
                        setActiveModalSuccessWithdraw(false)
                        setLoadingBtn(false)
                        dopFunc()
                        toast('Transaction succeeded')
                    }).catch(e => {
                        setActiveModalSuccessWithdraw(false)
                        setLoadingBtn(false)
                        toast.error('Transaction failed!')
                    })
                })

            })

        } else {
            let transaction = nftAbi.methods.withdraw(address, carId)
            let options = {
                to: transaction._parent._address,
                data: transaction.encodeABI(),
                gas: await transaction.estimateGas({ from: publicKey }),
            };
            let signedTransaction = await web3.eth.accounts.signTransaction(options, privateKey);
            await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).on('confirmation', (confirmationNumber) => {
                if (confirmationNumber === 5) {
                    axios.post(`${BASE_URL}/Cars/${carId}/push-out/`, {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'accept': 'text/plain'
                        }
                    }).then(res => {
                        console.log('pushOut', res);
                        setLoadingBtn(false)
                        setActiveModalSuccessWithdraw(false)
                        dopFunc()
                        toast('Transaction succeeded')
                    }).catch(e => toast.error('Transaction failed!'))
                }
            })
        }
    }

    useEffect(() => {
        console.log(sizes);
        setSqSize(sizes.width / 7.24)
        setStrokeWidth(sizes.width / 41)
    }, [sizes.width])

    useEffect(() => {
        balanceOfAlls().then(res => console.log('res', res))
    }, [])

    useEffect(() => {
        console.log('mintIdArr!!!', mintIdArr.some(el => +el === item.carId));
        // console.log('mintIdArr!!!', item.carId);
    }, [mintIdArr])

    return (
        <>
            <Modal active={activeModalSuccessWithdraw} setActive={setActiveModalSuccessWithdraw}>
                <div className="form text-center">
                    <div className="form__text">Do you want to withdraw <span>{item.name}?</span></div>
                    {/* <div className="form__text small">(wait until transaction finished)</div> */}
                    {loadingBtn ? <Loader min={true} /> : <div className="form__buttons">
                        <button onClick={() => {
                            setLoadingBtn(true)
                            pushOut(item.carId, item.isMinted, item.fileUrl)
                        }}
                            className="button button--success modal-close modal-toggle" >Yes</button>
                        <button onClick={() => setActiveModalSuccessWithdraw(false)} className="btnCloseModal">No</button>
                    </div>}
                </div>
            </Modal>
            <Modal active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div className="form text-center">
                    <div className="form__text">Do you want to deposit <span>{item.name}?</span></div>
                    {/* <div className="form__text small">(wait until transaction finished)</div> */}
                    {loadingBtn ? <Loader min={true} /> : <div className="form__buttons">
                        <button onClick={() => {
                            setLoadingBtn(true)
                            pushIn(item.carId, item.isMinted, item.fileUrl)
                        }}
                            className="button button--success modal-close modal-toggle" >Yes</button>
                        <button onClick={() => setActiveModalSuccess(false)} className="btnCloseModal">No</button>
                    </div>}
                </div>
            </Modal>
            <div className="card">
                {resizeListener}
                <div className="card__inner">
                    <div className="card__id">id {item.carId}</div>
                    <div className="card__top">
                        <div className="card__top-el lvl"><span className="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                        <div className="card__top-el hash">{item.parameters[4].value} Hash</div>
                    </div>
                    <div className="card__imgContainer">
                        <img src={item.imageUrl} alt="#" className="card__img" />
                    </div>
                    <div className="card__title">[{item.parameters.filter(el => el.carParameter === 5)[0].value}] {item.name.length >= 10
                        ? `${item.name.slice(0, 10)}...`
                        : item.name
                    }</div>
                    <div className="card__stats">
                        <ul className="card__statsList">
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Speed</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 0)[0].value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 0)[0].value}%` }}></span>
                                </span>
                            </li>

                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Armor</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 1)[0].value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 1)[0].value}%` }}></span>
                                </span>
                            </li>
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Attack</span>
                                    <span className="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 2)[0].value}</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 2)[0].value}%` }}></span>
                                </span>
                            </li>
                            <li className="card__statsList-el">
                                <span className="card__statsList-el-header">
                                    <span className="card__statsList-el-type">Hp</span>
                                    <span className="card__statsList-el-numbers">70</span>
                                </span>
                                <span className="card__statsList-el-value">
                                    <span className="active" style={{ "width": "70%" }}></span>
                                </span>
                            </li>
                        </ul>
                        <div className="card__health" data-percent="60">
                            <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={60} />
                            <div>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card__coins hidden">50coin</div> */}
                    <div class="card__buttons">
                        <span onClick={() => history({ pathname: `/marketplace/${item.carId}` })} class="card__button">View</span>
                        <span onClick={() => {
                            mintIdArr.some(el => +el === item.carId) && item.isDeleted
                                ? setActiveModalSuccess(true)
                                : setActiveModalSuccessWithdraw(true)
                        }} data-target="#modalDeposit" class="card__button modal-toggle">
                            {mintIdArr.some(el => +el === item.carId) && item.isDeleted
                                ? 'Deposit'
                                : 'Witdraw'
                            }
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCard
