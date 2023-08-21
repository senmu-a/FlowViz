import React from "react"
import { View, CommonEvent } from "@tarojs/components"
import CategoryComp from "../category"
import type { CategoryType } from "../../lib/types"

import { useCategoryList } from "./hook"

import "./index.scss"

interface CategoryListCompProps {
  title: string
  data: CategoryType[]
  selected: number
  onAdd?: (event: CommonEvent) => void
  onSelect?: (selected: number) => void
}

export const CategoryList: React.FC<CategoryListCompProps> = ({
  title,
  data,
  selected,
  onAdd,
  onSelect,
}) => {
  return (
    <>
      <View className='at-article__h3'>{title}</View>
      <View className='category-list'>
        {data.map((item) => (
          <CategoryComp
            key={item.id}
            icon={item.icon}
            name={item.name}
            isSelected={selected === item.id}
            onClick={() => {
              const select = selected === item.id ? -1 : (item.id || -1)
              onSelect && onSelect(select)
            }}
          />
        ))}
        <CategoryComp icon='at-icon-add' name='添加' onClick={onAdd} />
      </View>
    </>
  )
}
