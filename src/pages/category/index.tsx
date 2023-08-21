import { Component } from "react"
import Taro from "@tarojs/taro"
import { View, PageContainer } from "@tarojs/components"
import { AtNavBar, AtMessage, AtButton } from "taro-ui"

import { queryAllCategorys, addCategory, removeCategory } from "../../service/api"
import { formatIconList } from "../../lib/utils"

import { CategoryList } from "../../components/category-list"
import SenmuInput from "../../components/senmu-input"
import CategoryComp from "../../components/category"

import { CategoryType, Type, CodeEnum, TypeEnum } from "../../lib/types"

import "./index.scss"

interface IconListType {
  value: string
  key: string
  isSelected: boolean
}

interface StateType {
  addVisible: boolean
  categoryType: Type
  categoryList: CategoryType[]
  addCategoryValue: string
  iconList: IconListType[]
  selectedCategory: number
  selectedIcon: number
}

const iconList = formatIconList()

export default class Category extends Component<any, StateType> {
  constructor(...args) {
    super(args)
    this.state = {
      addVisible: false,
      categoryType: "expense",
      categoryList: [],
      addCategoryValue: "",
      iconList: [],
      selectedCategory: -1,
      selectedIcon: -1,
    }
  }

  async componentDidMount() {
    this.setState({ iconList: this.formatIconList() })
    await this.getAllCategoryList()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  get expenseList() {
    return this.state.categoryList.filter(
      (item) => item.type === TypeEnum.expense
    )
  }

  get incomeList() {
    return this.state.categoryList.filter(
      (item) => item.type === TypeEnum.income
    )
  }

  /**
   * 格式化 iconList 列表
   * @returns IconListType[]
   */
  formatIconList(): IconListType[] {
    return iconList.map((item) => ({
      value: item,
      key: item,
      isSelected: false,
    }))
  }

  async getAllCategoryList() {
    Taro.showLoading({
      title: "加载中",
    })
    const result = await queryAllCategorys()
    Taro.hideLoading()
    if (result.code === CodeEnum.ERROR) {
      Taro.atMessage({
        message: result.error,
        type: "error",
      })
    } else {
      this.setState({ categoryList: result.data })
    }
  }

  /**
   * 新增账目分类提交
   */
  async handleSubmit() {
    const params = {
      name: this.state.addCategoryValue,
      icon: this.state.iconList.find((item) => item.isSelected)?.value || "",
      type: TypeEnum[this.state.categoryType],
    }

    if (!params.name) {
      Taro.atMessage({
        message: "分类名称必填",
        type: "error",
      })
      return false
    } else if (params.name.length > 6) {
      Taro.atMessage({
        message: "分类名称最多6个字",
        type: "error",
      })
      return false
    }

    Taro.showLoading({
      title: "提交中",
    })
    const result = await addCategory(params)
    Taro.hideLoading()
    if (result.code === CodeEnum.ERROR) {
      Taro.atMessage({
        message: result.error,
        type: "error",
      })
      return false
    }
    return true
  }

  /**
   * 删除账目分类
   * @returns
   */
  async handleDelete() {
    if (!this.state.selectedCategory) {
      Taro.atMessage({
        message: '请选择要删除的账目类型',
        type: "error",
      })
      return false
    }
    const result = await removeCategory(this.state.selectedCategory)
    if (result.code === CodeEnum.ERROR) {
      Taro.atMessage({
        message: result.error,
        type: "error",
      })
      return false
    }
    return true
  }

  render() {
    return (
      <View className='category-container'>
        <AtMessage />
        <View className='at-row at-row__justify--end category-remove-container'>
          {/* 暂时先这样，后续考虑增加动画 */}
          {this.state.selectedCategory !== -1 && (
            <AtButton
              className='category-remove-button'
              type='primary'
              size='small'
              onClick={async () => {
                const result = await this.handleDelete()
                if (result) {
                  this.getAllCategoryList()
                }
              }}
            >
              删除
            </AtButton>
          )}
        </View>
        <CategoryList
          title='支出'
          data={this.expenseList}
          selected={this.state.selectedCategory}
          onAdd={() => {
            this.setState({ addVisible: true, categoryType: "expense" })
          }}
          onSelect={(selected) =>
            this.setState({
              selectedCategory: selected,
              categoryType: "expense",
            })
          }
        />
        <CategoryList
          title='收入'
          data={this.incomeList}
          selected={this.state.selectedCategory}
          onAdd={() => {
            this.setState({ addVisible: true, categoryType: "income" })
          }}
          onSelect={(selected) =>
            this.setState({
              selectedCategory: selected,
              categoryType: "income",
            })
          }
        />
        {/* 添加账目分类 */}
        <PageContainer
          show={this.state.addVisible}
          onAfterLeave={() => {
            this.setState({ addVisible: false })
          }}
        >
          <View className='category-add-modal'>
            <AtNavBar
              leftIconType='chevron-left'
              title='添加账目分类'
              rightFirstIconType='check'
              onClickLeftIcon={() => {
                Taro.navigateBack()
              }}
              onClickRgIconSt={async () => {
                const res = await this.handleSubmit()
                if (res) {
                  Taro.navigateBack()
                  await this.getAllCategoryList()
                }
              }}
            />
            <View className='category-add-form'>
              <View className='at-article__h3' style={{ margin: 0 }}>
                分类名称
              </View>
              <SenmuInput
                name='value'
                type='text'
                placeholder='请输入要添加的分类名称'
                value={this.state.addCategoryValue}
                onInput={(e) =>
                  this.setState({ addCategoryValue: e.detail.value })
                }
              />
              <View className='at-article__h3' style={{ margin: 0 }}>
                Icon
              </View>
              <View className='category-add-icon-list'>
                {this.state.iconList.map((item, index) => (
                  <CategoryComp
                    key={item.key}
                    icon={item.value}
                    isSelected={this.state.selectedIcon === index}
                    onClick={() => {
                      const selected =
                        this.state.selectedIcon === index ? -1 : index
                      this.setState({ selectedIcon: selected })
                    }}
                  />
                ))}
              </View>
            </View>
          </View>
        </PageContainer>
      </View>
    )
  }
}
