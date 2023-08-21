import { IconList } from './constant';

export const formatIconList = () => {
  const iconList: string[] = []
    for (const key in IconList) {
      iconList.push(`icon-${IconList[key]}`)
    }
    return iconList
}
