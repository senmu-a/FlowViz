import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import type { Type } from '../../lib/types'

import './index.scss'

interface CategoryProps {
  icon?: string | React.ReactNode
  name?: string
  type?: Type
}

export default class CategoryComp extends Component<PropsWithChildren<CategoryProps>> {
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
