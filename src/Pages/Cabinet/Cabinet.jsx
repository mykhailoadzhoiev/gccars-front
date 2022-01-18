import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { useSelector } from 'react-redux'
import Information from './Information/Information'
import NFTCardCabinet from './NFTCardCabinet/NFTCardCabinet'

const Cabinet = () => {

    const [contentTag, setContentTag] = useState('Information')

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

    return (
        <>
            <div class="page-content__tabs nav-tabs">
                <div
                    onClick={() => setContentTag('Information')} className={contentTag === 'Information' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}
                >Information</div>
                <div
                    onClick={() => setContentTag('My NFT Card')} className={contentTag === 'My NFT Card' ? "page-content__tabs-toggle active" : "page-content__tabs-toggle"}
                >My NFT cards </div>
            </div>
            <div className="tab-content">

                {contentTag === 'Information' && <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>
                    <Information />
                </Scrollbars>}

                {contentTag === 'My NFT Card' && <NFTCardCabinet />}

            </div>
        </>
    )
}

export default Cabinet
