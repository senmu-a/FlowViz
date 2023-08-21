
/** 通用请求类型 start */
export enum CodeEnum {
  ERROR = -1,
  SUCCESS = 0,
  OTHER = 1
}

export type IResponse<T> = IResponseSuccess<T> | IResponseError

export interface IResponseSuccess<T> {
  data: T
  code: CodeEnum.SUCCESS
  state: true
}

export interface IResponseError {
  code: CodeEnum.ERROR
  state: false
  error: string
}

/** 通用请求类型 end */

/** 账目分类相关类型 start */
export enum TypeEnum {
  // 1为支出，2为收入
  expense = 1,
  income = 2
}
export type Type = 'expense' | 'income'
export interface CategoryType {
  id?: number
  icon?: string
  name?: string
  type?: TypeEnum
}
export type CategoryParams = Pick<CategoryType, 'name' | 'icon' | 'type'>
/** 账目分类相关类型 end */

/** 记账相关类型 start */
export interface BookkeepingType {
  id?: number
  currentDate?: Date
  balance?: number
  note?: string
  type?: TypeEnum
  categoryId?: number
}
export interface BookkeepingDateType {
  startTime: string
  endTime: string
}
export type BookkeepingCategoryParams = Pick<BookkeepingType, 'categoryId'> & BookkeepingDateType
/** 记账相关类型 end */
