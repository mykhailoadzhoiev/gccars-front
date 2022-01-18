import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants'
import abi from "../../abi";
import { useDispatch } from 'react-redux';
import { actionPlusCoin } from '../../redux/reducers/userReduser';


const Deposit = () => {

    const [contentTag, setContentTag] = useState('Deposit')
    const [depositAmount, setDepositAmount] = useState(0);

    const dispatch = useDispatch()

    const token = localStorage.getItem('token')
    const address = localStorage.getItem('account')

    useEffect(() => {
    }, [])

    async function deposit() {
        await abi.methods.transfer('0xCCB07E97e79817BF9eA0712A4Eb3c159AEF3Fe48', depositAmount).send(
            { from: address })
            .on('confirmation', (confirmationNumber) => {
                if (confirmationNumber === 5) {
                    const bodyFormData = new FormData();
                    bodyFormData.append('amount', depositAmount)

                    axios.post(`${BASE_URL}/Account/top-up`, bodyFormData, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data',
                            'accept': 'text/plain'
                        }
                    })
                        .then(res => {
                            console.log(res)
                            dispatch(actionPlusCoin(res.data.data))
                        }).then(() => {
                        })
                }
            })
            .on('error', (error) => {
            });
    }

    function changeDepositAmount(event) {
        setDepositAmount(event.target.value);
    }

    return (
        <>
            <div className="page-content__tabs nav-tabs">
                <div
                    onClick={() => setContentTag('Deposit')}
                    className={contentTag === 'Deposit' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}
                >
                    Deposit
                </div>
            </div>

            <div className="tab-content">
                {contentTag === 'Deposit' && <>
                    <div className="tab-pane fade show active">
                        <div className="tab-pane__header">
                            <input type="number" value={depositAmount} onChange={changeDepositAmount} className="searchForm__input" placeholder="Enter amount to deposit" />
                            <button className="" type="submit" onClick={deposit}>Deposit</button>
                        </div>
                    </div>
                </>}
            </div>
        </>
    )
}

export default Deposit
