import request from "./request";
import type {
  IResponse,
  CategoryType,
  CategoryParams,
  BookkeepingType,
  BookkeepingDateType,
  BookkeepingCategoryParams,
} from "../lib/types";

request.init()

/** 账目分类接口 start */
// 查询全部账目分类
export const queryAllCategorys = async (): Promise<
  IResponse<Array<CategoryType>>
> => {
  return await request.get("/api/category/all/query");
};

// 查询支出账目分类
export const queryExpenses = async (): Promise<
  IResponse<Array<CategoryType>>
> => {
  return await request.get("/api/category/expenses/query?type=1");
};

// 查询收入账目分类
export const queryIncome = async (): Promise<
  IResponse<Array<CategoryType>>
> => {
  return await request.get("/api/category/expenses/query?type=2");
};

// 查询某个账目分类
export const queryCategory = async (
  id: number
): Promise<IResponse<Array<CategoryType>>> => {
  return await request.get("/api/category/expenses/query", {
    params: {
      id,
    },
  });
};

// 新增账目分类
export const addCategory = async (
  body: CategoryParams
): Promise<IResponse<boolean>> => {
  return await request.post("/api/category/add", body);
};

// 删除账目分类
export const removeCategory = async (
  id: number
): Promise<IResponse<boolean>> => {
  return await request.delete("/api/category/remove", { id });
};

// 修改账目分类
export const updateCategory = async (
  body: CategoryType
): Promise<IResponse<boolean>> => {
  return await request.post("/api/category/edit", body);
};

/** 账目分类接口 end */

/** 记账接口 start */
// 新增记账
export const addBookkeeping = async (
  id: number
): Promise<IResponse<boolean>> => {
  return await request.post("/api/bookkeeping/add", { id });
};

// 更新记账
export const updateBookkeeping = async (
  id: number
): Promise<IResponse<boolean>> => {
  return await request.post("/api/bookkeeping/add", { id });
};

// 删除记账
export const deleteBookkeeping = async (
  id: number
): Promise<IResponse<boolean>> => {
  return await request.delete("/api/bookkeeping/delete", { id });
};

// 按时间区间查询记账
export const queryBookkeepingByDate = async (
  params: BookkeepingDateType
): Promise<IResponse<Array<BookkeepingType>>> => {
  return await request.get("/api/bookkeeping/query", {
    params,
  });
};

// 按账目分类查询记账
export const queryBookkeepingByCategory = async (
  params: BookkeepingCategoryParams
): Promise<IResponse<Array<BookkeepingType>>> => {
  return await request.get("/api/bookkeeping/category/query", {
    params
  });
};
/** 记账接口 end */
