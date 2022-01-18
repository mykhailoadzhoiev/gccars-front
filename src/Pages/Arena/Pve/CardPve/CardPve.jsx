import React, { useEffect, useState } from 'react'
import useResizeAware from 'react-resize-aware';
import CircleProgressbar from '../../../../components/CircleProgressbar/CircleProgressbar'


const CardPve = ({ item, startToBattle }) => {

    const [resizeListener, sizes] = useResizeAware();

    const [sqSize, setSqSize] = useState(0)
    const [strokeWidth, setStrokeWidth] = useState(0)

    useEffect(() => {
        console.log(sizes);
        setSqSize(sizes.width / 7.24)
        setStrokeWidth(sizes.width / 41)
    }, [sizes.width])

    return (
        <div class="card">
            {resizeListener}
            <div class="card__inner">
                <div class="card__id">id {item.carId}</div>
                <div class="card__top">
                    <div class="card__top-el lvl"><span class="value">{item.parameters.filter(el => el.carParameter === 3)[0].value}</span> Level</div>
                    <div class="card__top-el hash">{item.parameters[4].value} Hash</div>
                </div>
                <div class="card__imgContainer">
                    <img src={item.imageUrl} alt="#" class="card__img" />
                </div>
                <div class="card__title">[{item.parameters.filter(el => el.carParameter === 5)[0].value}] {item.name.length >= 10
                        ? `${item.name.slice(0, 10)}...`
                        : item.name
                    }</div>
                <div class="card__stats">
                    <ul class="card__statsList">
                        <li class="card__statsList-el">
                            <span class="card__statsList-el-header">
                                <span class="card__statsList-el-type">Speed</span>
                                <span class="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 0)[0].value}</span>
                            </span>
                            <span class="card__statsList-el-value">
                                <span class="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 0)[0].value}%` }}></span>
                            </span>
                        </li>
                        <li class="card__statsList-el">
                            <span class="card__statsList-el-header">
                                <span class="card__statsList-el-type">Armor</span>
                                <span class="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 1)[0].value}</span>
                            </span>
                            <span class="card__statsList-el-value">
                                <span class="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 1)[0].value}%` }}></span>
                            </span>
                        </li>
                        <li class="card__statsList-el">
                            <span class="card__statsList-el-header">
                                <span class="card__statsList-el-type">Attack</span>
                                <span class="card__statsList-el-numbers">{item.parameters.filter(el => el.carParameter === 2)[0].value}</span>
                            </span>
                            <span class="card__statsList-el-value">
                                <span class="active" style={{ "width": `${item.parameters.filter(el => el.carParameter === 2)[0].value}%` }}></span>
                            </span>
                        </li>
                        <li class="card__statsList-el">
                            <span class="card__statsList-el-header">
                                <span class="card__statsList-el-type">Hp</span>
                                <span class="card__statsList-el-numbers">70</span>
                            </span>
                            <span class="card__statsList-el-value">
                                <span class="active" style={{ "width": "70%" }}></span>
                            </span>
                        </li>
                    </ul>
                    <div class="card__health" data-percent="60">
                        <CircleProgressbar sqSize={sqSize} strokeWidth={`${strokeWidth}`} percentage={100} />
                        <div>
                            <span>100%</span>
                        </div>
                    </div>
                </div>

                <span onClick={() => startToBattle(item)} data-target="#modalCreateBattle" class="card__button modal-toggle">Battle</span>
            </div>
        </div>
    )
}

export default CardPve
