import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

const Leaders = () => {


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
      top: '30px',
      right: '0px',
      top: '0px',
      height: '90%',
      borderRadius: 10
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }

  return (
    <div class="leadersModal">
      <div class="leadersModal__title">Leaders</div>
      <div class="leadersModal__nav">
        <a href="#" class="leadersModal__nav-el">Daily</a>
        <a href="#" class="leadersModal__nav-el">Montly</a>
        <a href="#" class="leadersModal__nav-el">All time</a>
      </div>
      <div class="leadersModal__places">
        <div class="leadersModal__places-el leadersModal__places-el--2">
          <span class="leadersModal__places-el-name">user2</span>
          <span class="leadersModal__places-el-value">100000xp</span>
        </div>
        <div class="leadersModal__places-el leadersModal__places-el--1">
          <span class="leadersModal__places-el-name">user1</span>
          <span class="leadersModal__places-el-value">1000000xp</span>
        </div>
        <div class="leadersModal__places-el leadersModal__places-el--3">
          <span class="leadersModal__places-el-name">user3</span>
          <span class="leadersModal__places-el-value">10000xp</span>
        </div>
      </div>
      <div class="customScroll leadersModal__tableContainer">
      <Scrollbars renderThumbVertical={renderThumb} renderTrackVertical={renderTrack} style={{ height: '100%' }}>
        <table class="leadersModal__table">
          
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#1</td>
              <td class="leadersModal__table-el">user1</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#2</td>
              <td class="leadersModal__table-el">user2</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#3</td>
              <td class="leadersModal__table-el">user3</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#4</td>
              <td class="leadersModal__table-el">user4</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#5</td>
              <td class="leadersModal__table-el">user5</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#6</td>
              <td class="leadersModal__table-el">user6</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
            <tr class="leadersModal__table-row">
              <td class="leadersModal__table-el">#7</td>
              <td class="leadersModal__table-el">user7</td>
              <td class="leadersModal__table-el">xxxxxxp44</td>
            </tr>
          
        </table>
        </Scrollbars>
      </div>
    </div>
  )
}

export default Leaders
