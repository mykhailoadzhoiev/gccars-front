import React, { useState } from 'react'
import MyStakes from './MyStakes/MyStakes'
import Pools from './Pools/Pools'

const Staking = () => {

    const [contentTag, setContentTag] = useState('Pools')

    return (
        <>
            <div class="page-content__tabs nav-tabs">
                <div onClick={() => setContentTag('Pools')} className={contentTag === 'Pools' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}>Pools</div>
                <div onClick={() => setContentTag('My stakes')} className={contentTag === 'My stakes' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}>My stakes</div>
            </div>
            <div class={contentTag === 'My stakes' ? 'tab-content staking-height' : "tab-content"}>
                {contentTag === 'Pools' && <div><Pools /></div>}
                {contentTag === 'My stakes' && <div><MyStakes /></div>}
            </div>
        </>
    )
}

export default Staking
