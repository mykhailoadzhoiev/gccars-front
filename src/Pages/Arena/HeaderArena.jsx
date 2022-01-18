import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderArena = () => {
    return (
        <div className="bigTabs">
            <NavLink to='/arena/pvp' className="bigTabs__el">PVP</NavLink>
            <NavLink to='/arena/pve' className="bigTabs__el">PVE</NavLink>
            <NavLink to='/arena/tournament' className="bigTabs__el">Tournament</NavLink>
        </div>
    )
}

export default HeaderArena
