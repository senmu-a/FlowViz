import { Component } from 'react'
import { View } from '@tarojs/components'
import { queryAllCategorys } from '../../service/api'
import type { CategoryType } from '../../lib/types'
import CategoryComp from '../../components/category'

import './index.scss'

interface StateType {
  categoryList?: CategoryType[]
}

export default class Category extends Component<any, StateType> {

  constructor(...args) {
    super(args);
    this.state = {}
  }

  async componentDidMount() {
    const result = await queryAllCategorys()
    console.log(result, 'result')
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='category-container'>
        <View className='at-article__h3'>支出</View>
        <View className='category-list'>
          <CategoryComp icon='at-icon-add' name='添加' />
        </View>
      </View>
    )
  }
}
