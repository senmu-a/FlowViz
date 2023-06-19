import "taro-ui/dist/style/components/button.scss" // 按需引入
import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import SenmuInput from '../../components/senmu-input'

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
        <SenmuInput prefix='¥' />
      </View>
    )
  }
}
