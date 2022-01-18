import React, { useState } from 'react'
import HeaderArena from '../HeaderArena'
import Participants from './Participants/Participants'
import TournamentContent from './TournamentContent/TournamentContent'

const Tournament = () => {

    const [contenTag, setContentTag] = useState('Participants')

    return (
        <>
            <HeaderArena />
            <div class="page-content__tabs nav-tabs">
                <div onClick={() => setContentTag('Participants')} className={contenTag === 'Participants' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}>Participants</div>
                <div onClick={() => setContentTag('Tournament')} className={contenTag === 'Tournament' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}>Tournament bracket</div>
            </div>
            <div className={contenTag === 'Tournament' ? "tab-content tournament-height" : 'tab-content'}>
                {contenTag === 'Participants' && <div><Participants /></div>}
                {contenTag === 'Tournament' && <div><TournamentContent /></div>}
            </div>
        </>
    )
}

export default Tournament