// import { HubConnection } from '@microsoft/signalr'
import { HubConnectionBuilder } from '@microsoft/signalr';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import Loader from '../../../../components/Loader/Loader'
import Modal from '../../../../components/Modal/Modal';
import { BASE_URL } from '../../../../constants'

// import Hub

const Battle = ({ setContent, setBattleId }) => {

  const token = localStorage.getItem('token')
  const address = localStorage.getItem('account')

  const [battles, setBattles] = useState([])
  const [loading, setLoading] = useState(true)
  const [direction, setDirection] = useState({
    lvl: 1,
    player: 1,
    bet: 1
  })
  const [connection, setConnection] = useState(null)
  const [activeModalSuccess, setActiveModalSuccess] = useState(false)
  const [pvpBattleId, setPvpBattleId] = useState(null)
  const [price, setPrice] = useState(0)

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
      height: '100%',
      borderRadius: 10
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }

  const leaveBattle = (pvpBattleId) => {
    setLoading(true)
    axios.post(`${BASE_URL}/PvpBattles/${pvpBattleId}/leave`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': 'text/plain'
      }
    }).then(res => {
      console.log('leave', res);
      getBattles()
    })
  }

  const joinBattle = (pvpBattleId) => {
    setContent()
    setBattleId(pvpBattleId)
  }

  const getBattles = () => {
    setLoading(true)
    setBattles([])
    axios.post(`${BASE_URL}/PvpBattles`, {
      // axios.post(`http://54fe-176-125-44-180.ngrok.io/PvpBattles`, {
      sorting: [
        {
          "propertyName": "level",
          "direction": 1,
          "sortOrder": 0
        },
        {
          "propertyName": "fightersCount",
          "direction": 1,
          "sortOrder": 1
        },
        {
          "propertyName": "betAmount",
          "direction": 1,
          "sortOrder": 2
        },

      ],
      skip: 0,
      take: 100
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    }).then(res => {
      console.log(res.data.data.data);

      setBattles(res.data.data.data)
      setLoading(false)
    })
  }
  const getLvl = () => {
    setLoading(true)
    setBattles([])
    axios.post(`${BASE_URL}/PvpBattles`, {
      skip: 0,
      take: 100
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    }).then(res => {
      console.log(res.data.data.data);
      setBattles(res.data.data.data)
      setLoading(false)
    })
  }

  const getBet = () => {
    setLoading(true)
    setBattles([])
    axios.post(`${BASE_URL}/PvpBattles`, {
      skip: 0,
      take: 100
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    }).then(res => {
      console.log(res.data.data.data);
      setBattles(res.data.data.data)
      setLoading(false)
    })
  }

  //   useEffect(() => {
  // battles.forEach(el => {
  //   if(el.fightersCount === el.maxFighters) {
  //     axios.post(`${BASE_URL}/`)
  //   }
  // })
  //   }, [battles])

  useEffect(() => {
    let newConnection = new HubConnectionBuilder()
      .withUrl(`${BASE_URL}/pvp`, { accessTokenFactory: () => token })
      .build();

    setConnection(newConnection)

  }, [])

  useEffect(() => {
    console.log('direction', direction);
    setLoading(true)
    setBattles([])
    // axios.post(`http://54fe-176-125-44-180.ngrok.io/PvpBattles`, {
    axios.post(`${BASE_URL}/PvpBattles`, {
      sorting: [
        {
          "propertyName": "level",
          "direction": direction.lvl,
          "sortOrder": 0
        },
        {
          "propertyName": "fightersCount",
          "direction": direction.player,
          "sortOrder": 1
        },
        {
          "propertyName": "betAmount",
          "direction": direction.bet,
          "sortOrder": 2
        },

      ],
      skip: 0,
      take: 100
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'text/plain'
      }
    }).then(res => {
      console.log(res.data.data.data);

      setBattles(res.data.data.data)
      setLoading(false)
    })
  }, [direction])

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          console.log('Connected!');

          connection.on('PvpListChanged', message => {
            // console.log('PvpListChanged', message);
            getBattles()
          });
          connection.on('PvpBattleChanged', message => {
            console.log('PvpBattleChanged', message);
            axios.get(`${BASE_URL}/PvpBattles/${message}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json; charset=UTF-8',
                'accept': 'text/plain'
              }
            }).then(res => {
              setBattles(prev => prev.filter(el => el.pvpBattleId !== res.data.data.pvpBattleId))
              setBattles(prev => [...prev, res.data.data])
            })
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection])

  // useEffect(() => {
  //   getBattles()
  // }, [])

  //   useEffect(() => {
  // console.log('battles', battles);
  //   }, [battles])

  return (
    <>
      <Modal active={activeModalSuccess} setActive={setActiveModalSuccess}>
        <div class="form text-center">
          <div class="form__text small">
            Are you sure you want to join this battle?<br />
              If you lose, you lose {price}$
          </div>
          <div class="form__buttons">
            <button onClick={() => {
              setActiveModalSuccess(false)
              joinBattle(pvpBattleId)
            }} class="button button--success modal-close modal-toggle" data-target="#modalStackingValue">Yes</button>
          </div>
        </div>
      </Modal>
      <div class="tab-pane fade show active p" id="pools">
        <div class="rulesBlock">
          <div class="rulesBlock__title">RULES AND CONDITION</div>
          <div class="rulesBlock__text">Text, a lot of test Text, a lot Text, a lot of test Text, a lot Text, a lot
          of Text,a lot of test Text, a lot Text, a lot of test Text, a lot Text, a lot Text, a lot of test Text,
          a lot of

              </div>
        </div>
        <div class="results__titles">
          <div class="results__el-title w-100 text-center">Avalaible battles</div>
        </div>
        <div class="results customScroll h50vh">

          <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>
            <div class="results__el w-100">

              <div className='results__el-table els-pt'>
                <div className="results__el-table-header">
                  <div className="results__el-table-row">
                    <div className="results__el-table-el">USERNAME</div>
                    <div className="results__el-table-el">ADDRESS</div>
                    <div className="results__el-table-el"><span onClick={() => {
                      if (direction.lvl === 1) {
                        setDirection(prev => ({
                          ...prev, lvl: 2
                        }))
                      } else {
                        setDirection(prev => ({
                          ...prev, lvl: 1
                        }))
                      }
                    }} class={direction.lvl === 1 ? "filter up" : "filter"}>LVL</span></div>
                    <div className="results__el-table-el"><span onClick={() => {
                      if (direction.player === 1) {
                        setDirection(prev => ({
                          ...prev, player: 2
                        }))
                      } else {
                        setDirection(prev => ({
                          ...prev, player: 1
                        }))
                      }
                    }} class={direction.player === 1 ? "filter up" : "filter"}>PLAYERS</span></div>
                    <div className="results__el-table-el"><div onClick={() => {
                      if (direction.bet === 1) {
                        setDirection(prev => ({
                          ...prev, bet: 2
                        }))
                      } else {
                        setDirection(prev => ({
                          ...prev, bet: 1
                        }))
                      }
                    }} class={direction.bet === 1 ? "filter filterW100 up" : "filter filterW100"}>BET</div></div>
                  </div>
                </div>

                {
                  loading ? <div className='loader withoutHeight'><Loader /></div> :
                    <div className="results__el-table-body">
                      {battles.map((el, i) => {
                        return (
                          <div key={i} className="results__el-table-row">
                            <div className="results__el-table-el">
                              <div class="addressValue">{el.ownerName}</div>
                            </div>
                            <div className="results__el-table-el">
                              <div class="addressValue">{`${el.ownerAddress.slice(0, 4)}...${el.ownerAddress.slice(Math.max(el.ownerAddress.length - 4, 0))}`}</div>
                            </div>
                            <div className="results__el-table-el">
                              <div class="addressValue">{el.level ? `${el.level} only` : 'All levels'}</div>
                            </div>
                            <div className="results__el-table-el">
                              <div class="addressValue">{el.fightersCount}/{el.maxFighters}</div>
                            </div>
                            <div className="results__el-table-el">
                              <div class="d-flex">
                                <div class="addressValue">{el.betAmount}</div>
                                {address === el.ownerAddress
                                  ? <span onClick={() => leaveBattle(el.pvpBattleId)} class="button button--cancel small">Cancel</span>
                                  : <span onClick={() => {
                                    setPrice(el.betAmount)
                                    setActiveModalSuccess(true)
                                    setPvpBattleId(el.pvpBattleId)
                                  }} class="button button--join small modal-toggle" data-target="#modalJoin">Join</span>}
                              </div>
                            </div>

                          </div>
                        )
                      })}
                    </div>
                }
              </div>

              {/* <table class="results__el-table els-pt">
                <thead class="results__el-table-header">
                  <tr class="results__el-table-row">
                    <th class="results__el-table-el">USERNAME</th>
                    <th class="results__el-table-el">ADDRESS</th>
                    <th class="results__el-table-el"><span onClick={() => {
                      if (direction.lvl === 1) {
                        setDirection(prev => ({
                          ...prev, lvl: 2
                        }))
                      } else {
                        setDirection(prev => ({
                          ...prev, lvl: 1
                        }))
                      }
                    }} class={direction.lvl === 1 ? "filter up" : "filter"}>LVL</span> </th>
                    
                    <th class="results__el-table-el"><span onClick={() => {
                      if (direction.player === 1) {
                        setDirection(prev => ({
                          ...prev, player: 2
                        }))
                      } else {
                        setDirection(prev => ({
                          ...prev, player: 1
                        }))
                      }
                    }} class={direction.player === 1 ? "filter up" : "filter"}>PLAYERS</span> </th>

                    <th class="results__el-table-el"><div onClick={() => {
                      if (direction.bet === 1) {
                        setDirection(prev => ({
                          ...prev, bet: 2
                        }))
                      } else {
                        setDirection(prev => ({
                          ...prev, bet: 1
                        }))
                      }
                    }} class={direction.bet === 1 ? "filter filterW100 up" : "filter filterW100"}>BET</div> </th>
                  </tr>
                </thead>
                {
                  loading ? <div className='loader withoutHeight'><Loader /></div> :
                    <tbody class="results__el-table-body">
                      {battles.map((el, i) => {
                        return (
                          <tr key={i} class="results__el-table-row">
                            <td class="results__el-table-el">{el.ownerName}</td>
                            <td class="results__el-table-el">
                              <div class="addressValue">{`${el.ownerAddress.slice(0, 4)}...${el.ownerAddress.slice(Math.max(el.ownerAddress.length - 4, 0))}`}</div>
                            </td>
                            <td class="results__el-table-el text-center">{el.level ? `${el.level} only` : 'All levels'}</td>
                            <td class="results__el-table-el text-center">{el.fightersCount}/{el.maxFighters}</td>
                            <td class="results__el-table-el">
                              <div class="d-flex">
                                <span>{el.betAmount}</span>
                                {address === el.ownerAddress
                                  ? <span onClick={() => leaveBattle(el.pvpBattleId)} class="button button--cancel small">Cancel</span>
                                  : <span onClick={() => {
                                    setPrice(el.betAmount)
                                    setActiveModalSuccess(true)
                                    setPvpBattleId(el.pvpBattleId)
                                  }} class="button button--join small modal-toggle" data-target="#modalJoin">Join</span>}
                              </div>
                            </td>
                          </tr>
                        )
                      })}


                    </tbody>
                }
              </table> */}
            </div>
          </Scrollbars>

        </div>
      </div>
    </>
  )
}

export default Battle
