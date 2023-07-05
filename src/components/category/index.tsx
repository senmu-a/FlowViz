import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

interface CategoryProps {
  icon: string | React.ReactNode
  name?: string
}

export default class Category extends Component<PropsWithChildren<CategoryProps>> {
  async componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { icon, name } = this.props

    const Icon = () => {
      if (typeof icon === 'string') {
        return <View className={`iconfont ${icon}`} style={{ fontSize: '64rpx' }}></View>
      } else {
        return <>{icon}</>
      }
    }

    return (
      <View className='category-wrapper'>
        {icon && <Icon />}
        {name && <View className='category-name'>{name}</View>}
      </View>
    )
  }
}
