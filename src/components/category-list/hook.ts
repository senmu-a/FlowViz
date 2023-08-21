import { useState } from "react";

export const useCategoryList = () => {
  // 当前选择的分类
  const [selected, setSelected] = useState<number>(-1);

  return { selected, setSelected }
};
