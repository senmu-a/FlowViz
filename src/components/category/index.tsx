import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'


type Type = 'expense' | 'income'

interface CategoryProps {
  icon: string | React.ReactNode
  name?: string
  type?: Type
}

export default class Category extends Component<PropsWithChildren<CategoryProps>> {
  async componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { icon, name, type } = this.props

    const Icon = () => {
      if (typeof icon === 'string') {
        return <View className={`iconfont ${icon}`}></View>
      } else {
        return <>{icon}</>
      }
    }

    return (
      <View className={`category-wrapper ${type && `category-type category-${type}`}`}>
        {icon && <Icon />}
        {name && <View className='category-name'>{name}</View>}
      </View>
    )
  }
}
