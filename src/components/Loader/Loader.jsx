import React from 'react'

import './Loader.scss'

const Loader = ({min}) => {
    return (
        <div class={min ? "lds-spinner min" : "lds-spinner"}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader
