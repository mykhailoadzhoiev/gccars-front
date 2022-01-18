import React, { useState, useEffect } from 'react'
import HeaderArena from '../HeaderArena'

import car from '../../../asset/car.png'
import axios from 'axios'
import { BASE_URL } from '../../../constants'
import CardPve from './CardPve/CardPve'
import Loader from '../../../components/Loader/Loader'
import PveBattle from './PveBattle/PveBattle'
import Scrollbars from 'react-custom-scrollbars'

const Pve = () => {

  const [loading, setLoading] = useState(true)
  const [arrCars, setArrCars] = useState([])
  const [contentTag, setContentTag] = useState('pveCards')
  const [itemForBattle, setItemForBattle] = useState({})
  const token = localStorage.getItem('token')

  const startToBattle = (item) => {
    // console.log('ready for battle item:', item);
    setContentTag('pveBattle')
    setItemForBattle(item)
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

  useEffect(() => {
    setLoading(true)

    axios.post(`${BASE_URL}/PveBattles/cars`, {
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
  }, [])

  return (

    <>
      <HeaderArena />
      <div class="page-content__tabs nav-tabs">
        <div class="page-content__tabs-toggle active" data-toggle="tab" href="#pools" role="tab" aria-selected="true">PVE Battle</div>
      </div>
      <div class="tab-content pve-battle-height height71">
        {
          loading ? <div className='loader'><Loader /></div> :
            <div class="tab-pane fade show active" id="pools" role="tabpanel" aria-labelledby="nav-home-tab">
              {contentTag === 'pveCards' ?
                <div class="cards customScroll pveMt">
                  <Scrollbars
                    renderThumbVertical={renderThumb}
                    renderThumbHorizontal={renderThumbH}
                    renderView={renderView}
                    renderTrackVertical={renderTrack}
                    style={{ height: '100%' }}>
                    <div className="arrCars">
                      {arrCars.map((el, i) => {
                        return (
                          <CardPve key={i} item={el} startToBattle={startToBattle} />
                        )
                      })}
                    </div>
                  </Scrollbars>
                </div>
                : <PveBattle setContentTag={setContentTag} item={itemForBattle} />
              }

            </div>
        }
      </div>
    </>

  )
}

export default Pve