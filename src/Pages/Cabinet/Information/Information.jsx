import React, { useState, useEffect } from 'react'

import coins from '../../../asset/coins.png'
import cards from '../../../asset/cards.png'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL, moneyAddress, privateKey, publicKey } from '../../../constants'
import Loader from '../../../components/Loader/Loader'
import abi from '../../../abi'
import { actionPlusCoin } from '../../../redux/reducers/userReduser'
import Modal from '../../../components/Modal/Modal'
import web3 from '../../../web3'

import BigNumber from 'bignumber.js'
import { toast } from 'react-toastify'

const Information = () => {

    const { dataUser } = useSelector(state => state.user)
    let token = localStorage.getItem('token')
    let address = localStorage.getItem('account');

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        address: '',
        balance: 0,
        cardBalance: 0
    })

    const [loading, setLoading] = useState(true)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [depositAmount, setDepositAmount] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [activeModalSuccess, setActiveModalSuccess] = useState(false)
    const [activeModalSuccessWithdraw, setActiveModalSuccessWithdraw] = useState(false)


    async function deposit() {
        const dep = new BigNumber(+depositAmount * 10 ** 18)
        console.log(dep.toFixed());

        if (depositAmount.trim().length > 0) {
            let transaction = abi.methods.transfer(moneyAddress, dep.toFixed());
            let options = {
                to: transaction._parent._address,
                data: transaction.encodeABI(),
                gas: await transaction.estimateGas({ from: '0x68569F86473D0A686f40E94B79FD9a1e3254b8FE' }),
            };
            let signedTransaction = await web3.eth.accounts.signTransaction(options, 'c0b6aff2bdee546c9cc6cf54506025fd125fce1896059d7f46bd3e36eb034dc8');
            console.log('signedTransaction', signedTransaction);
            const date = Date.now()
            const date1 = new Date(date + 15000)
            if (Object.keys(signedTransaction).length > 0) {
                console.log('date1', date1);
                axios.post(`${BASE_URL}/transactions/start`, {
                    address: address,
                    startTime: date1
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'accept': 'text/plain'
                    }
                }).then(res => {
                    console.log('transactions/start', res);
                })
            }

            await abi.methods.transfer(moneyAddress, dep.toFixed()).send(
                { from: address })
                .on('confirmation', (confirmationNumber) => {
                    if (confirmationNumber === 5) {
                        // const bodyFormData = new FormData();
                        // bodyFormData.append('amount', +depositAmount)

                        axios.post(`${BASE_URL}/Account/top-up`, {
                            amount: +depositAmount
                        }, {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json; charset=UTF-8',
                                'accept': 'text/plain'
                            }
                        })
                            .then(res => {
                                console.log(res)
                                dispatch(actionPlusCoin(res.data.data))
                                setDepositAmount(0)
                                setLoadingBtn(false)
                                setActiveModalSuccess(false)
                                toast('Transaction succeeded')
                            }).then(() => {

                            })
                    }
                })
                .on('error', (error) => {
                    setLoadingBtn(false)
                });
        } else {
            setLoadingBtn(false)
        }
    }

    async function withdraw() {
        const withdraw = new BigNumber(+withdrawAmount * 10 ** 18)
        console.log(withdraw.toNumber());
        // console.log(+withdrawAmount * 10 ** 18);
        if (+withdrawAmount > dataUser.balance) {
            toast.error('Сумма вывода превышает количество коинов')
            setLoadingBtn(false)
        } else {
            if (withdrawAmount.trim().length > 0) {
                console.log(address);
                let transaction = abi.methods.withdraw(address, withdraw.toString());
                let options = {
                    to: transaction._parent._address,
                    data: transaction.encodeABI(),
                    gas: await transaction.estimateGas({ from: '0x68569F86473D0A686f40E94B79FD9a1e3254b8FE' }),
                };


                let signedTransaction = await web3.eth.accounts.signTransaction(options, 'c0b6aff2bdee546c9cc6cf54506025fd125fce1896059d7f46bd3e36eb034dc8');
                console.log('signedTransaction', signedTransaction);
                await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).on('confirmation', (confirmationNumber) => {
                    if (confirmationNumber === 5) {
                        console.log(options.to, options.data)
                        // const bodyFormData = new FormData();
                        // bodyFormData.append('amount', withdrawAmount)

                        axios.post(`${BASE_URL}/Account/withdraw`, {
                            amount: withdrawAmount
                        }, {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json; charset=UTF-8',
                                'accept': 'text/plain'
                            }
                        })
                            .then(res => {
                                console.log(res)
                                dispatch(actionPlusCoin(res.data.data))
                                setWithdrawAmount(0)
                                setLoadingBtn(false)
                                setActiveModalSuccessWithdraw(false)
                                toast('Transaction succeeded')
                            }).then(() => {
                            })
                    }
                }).on('error', (error) => {
                    setLoadingBtn(false)
                });
            }
        }

    }

    useEffect(() => {
        axios.get(`${BASE_URL}/account/userInfo`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json; charset=UTF-8',
                'accept': 'text/plain'
            }
        })
            .then(res => {
                console.log('DATAUSET', res)
                setUser({ ...res.data.data })
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setUser({ ...dataUser })
    }, [dataUser])

    return (
        <>
            <Modal active={activeModalSuccess} setActive={setActiveModalSuccess}>
                <div className="form text-center">
                    <div className="form__text small">Enter the deposit</div>
                    <div className="form__text small">(wait until transaction finished)</div>
                    <div className="form__field">
                        <div className="form__inputs">
                            <div className="form___input center">
                                <input value={depositAmount} onChange={(e) => {
                                    if (/^[\d.]*$/.test(e.target.value)) {
                                        setDepositAmount(e.target.value)
                                    }
                                }
                                } type="text" className="form__input form__input-input bigInput" />
                            </div>
                        </div>
                    </div>
                    <div className="form__buttons">
                        {loadingBtn ? <Loader min={true} /> : <button disabled={loadingBtn} onClick={() => {
                            setLoadingBtn(true)
                            deposit()
                        }} className="button button--success modal-close modal-toggle"
                            data-target="#modalStackingValue">Confirm</button>}
                    </div>
                </div>
            </Modal>
            <Modal active={activeModalSuccessWithdraw} setActive={setActiveModalSuccessWithdraw}>
                <div className="form text-center">
                    <div className="form__text small">Enter the withdraw</div>
                    <div className="form__text small">(wait until transaction finished)</div>
                    <div className="form__field">
                        <div className="form__inputs">
                            <div className="form___input center">
                                <input value={withdrawAmount} onChange={(e) => {
                                    if (/^[\d.]*$/.test(e.target.value)) {
                                        setWithdrawAmount(e.target.value)
                                    }
                                }
                                } type="text" className="form__input form__input-input bigInput" />
                            </div>
                        </div>
                    </div>
                    <div className="form__buttons">
                        {loadingBtn ? <Loader min={true} /> : <button onClick={() => {
                            setLoadingBtn(true)
                            withdraw()
                        }} className="button button--success modal-close modal-toggle"
                            data-target="#modalStackingValue">Confirm</button>}
                    </div>
                </div>
            </Modal>
            {loading ? <div className='loader'><Loader /></div>
                : <div className="tab-pane fade show active p" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="tab-pane__header justify-content-start flex-direction-column">
                        <div className="infoEl">
                            <span className="infoEl__type">Username:</span> <span className="infoEl__value">user1<a href="#" className="infoEl__edit"></a></span>
                        </div>
                        <div className="infoEl">
                            <span className="infoEl__type">BSC Address:</span> <span className="infoEl__value">{`${user?.address.slice(0, 4)}...${user?.address.slice(Math.max(user?.address.length - 4, 0))}`}</span>
                        </div>
                    </div>
                    <div className="balances">
                        <div className="balances__el">
                            <div className="balances__el-title">Token Balance</div>
                            <div className="balances__el-body">
                                <div className="balances__el-imgContainer">
                                    <img src={coins} alt="#" className="balances__el-img" />
                                </div>
                                <div className="balances__el-value">{user.balance} coins</div>
                                <div className="buttonsTwo">
                                    <div onClick={() => setActiveModalSuccessWithdraw(true)} className="button button--join">Withdraw</div>
                                    <div onClick={() => { setActiveModalSuccess(true) }} className="button button--join">Deposit</div>
                                </div>
                            </div>
                        </div>
                        <div className="balances__el">
                            <div className="balances__el-title">Card Balance </div>
                            <div className="balances__el-body">
                                <div className="balances__el-imgContainer">
                                    <img src={cards} alt="#" className="balances__el-img" />
                                </div>
                                <div className="balances__el-value">{user.cardBalance} cards</div>
                            </div>
                        </div>
                    </div>
                    <div className="transactions">
                        <p className="text big">Transactions:</p>
                        <div className="transactions__table">
                            <div className="transactions__table-header">
                                <span className="transactions__table-header-el">TYPE</span>
                                <span className="transactions__table-header-el">STATUS</span>
                                <span className="transactions__table-header-el">Valute</span>
                                <span className="transactions__table-header-el">Note</span>
                                <span className="transactions__table-header-el">Data</span>
                            </div>
                            <div className="transactions__table-body customScroll">
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                                <div className="transactions__table-body-row">
                                    <span className="transactions__table-body-el">+20 xyz</span>
                                    <span className="transactions__table-body-el">passed</span>
                                    <span className="transactions__table-body-el">token</span>
                                    <span className="transactions__table-body-el">balance : 100</span>
                                    <span className="transactions__table-body-el">21.10.2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Information
