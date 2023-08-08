import Taro, { Cloud } from '@tarojs/taro'

class Request {
  private server: Cloud
  // TODO：补充类型
  private baseParams

  constructor() {
    this.server = Taro.cloud
    this.baseParams = {
      header: {
        "X-WX-SERVICE": "express-inrh"
      },
      timeout: 5000
    }
  }

  init(env?: string) {
    this.server.init({
      env: env || "prod-2gp98swmdaa155c3"
    })
  }

  async callContainer(params) {
    /** header、cookies 暂不处理 */
    const { data, statusCode, header, cookies } = await this.server.callContainer(params)
    if (statusCode === 200) {
      if (!data.data) {
        console.warn('请求的结果为 null，可能出现异常，请关注～')
      }
      return { ...data }
    } else {
      /** TODO：接入埋点 */
      console.error('请求异常')
      throw new Error('服务器异常，稍等访问')
    }
  }

  async get<T extends string | Record<string, any> | ArrayBuffer, R>(url: string, params?: T): Promise<R> {
    const requestParams = {
      path: url,
      method: 'GET',
      ...this.baseParams
    }
    if (params) {
      requestParams.data = params
    }
    return await this.callContainer(requestParams)
  }

  async post<T extends string | Record<string, any> | ArrayBuffer, R>(url: string, body?: T): Promise<R> {
    const requestParams = {
      path: url,
      method: 'POST',
      data: body,
      ...this.baseParams
    }
    return await this.callContainer(requestParams)
  }

  async delete<T extends string | Record<string, any> | ArrayBuffer, R>(url: string, body?: T): Promise<R> {
    const requestParams = {
      path: url,
      method: 'DELETE',
      data: body,
      ...this.baseParams
    }
    return await this.callContainer(requestParams)
  }


}

const request = new Request()

export default request
