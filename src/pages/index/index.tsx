import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  async componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        你还
        <View className='at-icon at-icon-settings'></View>
        {/* 底部栏目 */}
        {/* <AtTabBar
          fixed
          tabList={[
            { title: '记账', iconType: 'bullet-list', text: 'new' },
            { title: '计算器', iconType: 'camera' },
            { title: '报表', iconType: 'folder', text: '100', max: 99 },
            { title: '设置', iconType: 'folder', text: '100', max: 99 }
          ]}
          onClick={() => {}}
          current={1}
        /> */}
      </View>
    )
  }
}
