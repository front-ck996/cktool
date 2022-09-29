
import {TREE_CONFIG, treeConfigDefault} from "./define";

/**
 * 循环迭代 Tree 结构
 * @param tree:Array  tree 源数据
 * @param filterCallBack:Function 回调函数，返回 true 继续迭代
 * @param config:Object 配置参数
 */
export function treeIterationItem(tree: any[], filterCallBack?: (item:any) => boolean, config?: object ){
  const rConfig = Object.assign({}, treeConfigDefault, config)
  for (let index = 0; index < tree.length; index++) {
    const item = tree[index]
    if (!filterCallBack!(item)) {
      if (rConfig.notTrueRemove){
        tree.splice(index, 1)
        index--
      }
      continue
    }
    if (item[rConfig.children] && item[rConfig.children].length > 0) {
      treeIterationItem(item[rConfig.children], filterCallBack)
    }
  }
}

/**
 * 平铺 Tree 数据
 * @param tree tree 源数据
 * @param filterCallBack 回调函数，返回 true 继续迭代
 * @param config  配置参数
 */
export function treeExpandHash(tree: any[], filterCallBack?: (item:any) => boolean, config?: object ){
  const rConfig = Object.assign({}, treeConfigDefault, config)
  const lastResult = {}
  treeIterationItem(tree, function (item){
    item.$$_ext = item
    lastResult[rConfig.mainId] = item
    return true
  },rConfig)
  return lastResult
}

/**
 * 查找第一个 没有子集的数据
 * @param tree
 * @param childrenField
 */

export function treeFindFirstItem(tree: any[],childrenField:string | TREE_CONFIG = 'children'){
  if (typeof childrenField === 'object'){
    childrenField = childrenField.children
  }
  for(let index in tree){
    const item = tree[index]

    if (item[childrenField] === undefined){
      return  item
    }
    const isReturn = item[childrenField] && item[childrenField].length === 0

    if (isReturn){
      return item
    }
    const result =  treeFindFirstItem(item[childrenField], childrenField)
    if (result){
      return result
    }
  }
  return  null
}
