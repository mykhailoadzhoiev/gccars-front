import React, { useEffect, useState } from 'react'
import HeaderArena from '../HeaderArena'
import Battle from './Battle/Battle'
import PvpNFRCard from './PvpNFTCard/PvpNFRCard'

const Pvp = () => {

    const [contenTag, setContentTag] = useState('PVP Battle')
    const [battleId, setBattleId] = useState(null)
    const [hasJoinCar, setHasJoinCar] = useState(false)

    useEffect(() => {
        if (contenTag === 'PVP Battle' && hasJoinCar) {
            setHasJoinCar(false)
        }
    }, [contenTag])

    useEffect(() => {
        console.log(battleId);
    }, [battleId])

    return (
        <>
            <HeaderArena />
            <div className="page-content__tabs nav-tabs">
                <div onClick={() => setContentTag('PVP Battle')} className={contenTag === 'PVP Battle' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}>PVP Battle</div>
                <div onClick={() => setContentTag('My NFT cards')} className={contenTag === 'My NFT cards' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}>My NFT cards</div>
            </div>
            <div className="tab-content height71">
                {contenTag === 'PVP Battle' && <div><Battle setBattleId={setBattleId} setContent={() => {
                    setContentTag('My NFT cards')
                    setHasJoinCar(true)
                }} /></div>}
                {contenTag === 'My NFT cards' && <div><PvpNFRCard setContent={() => {
                    setContentTag('PVP Battle')
                }} battleId={battleId} hasJoinCar={hasJoinCar} /></div>}
            </div>
        </>
    )
}

export default Pvp
