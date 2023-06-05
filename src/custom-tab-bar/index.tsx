import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'


import './index.scss'

export default class Index extends Component {
  state = {
    selected: 0,
    color: '#EAEAEA',
    selectedColor: '#EAEAEA',
    list: [
      {
        pagePath: '/pages/index/index',
        selectedIconPath: '/images/edit-fill.png',
        iconPath: '/images/edit.png',
        text: '记账'
      },
      {
        pagePath: '/pages/report/index',
        selectedIconPath: '/images/sales-report-fill.png',
        iconPath: '/images/sales-report.png',
        text: '报表'
      },
      {
        pagePath: '/pages/settings/index',
        selectedIconPath: '/images/settings-fill.png',
        iconPath: '/images/settings.png',
        text: '设置'
      }
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected (idx: number) {
    this.setState({
      selected: idx
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath}></CoverImage>
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}
