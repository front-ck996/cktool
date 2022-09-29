export type TREE_CONFIG = {
  mainId: string, // 主键ID
  children: string // 子集字段名
  notTrueRemove: boolean, // 如果没有返回 true 是否删除当前数据中的结构
}
export const treeConfigDefault: TREE_CONFIG = {
  mainId: 'id',
  children: 'children',
  notTrueRemove: false,
}