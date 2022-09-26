
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
      tree.splice(index, 1)
      index--
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
export function treeExpandItem(tree: any[], filterCallBack?: (item:any) => boolean, config?: object ){
  const rConfig = Object.assign({}, treeConfigDefault, config)
  const lastResult = {}
  treeIterationItem(tree, function (item){
    item.$$_ext = {}
    lastResult[rConfig.mainId] = item
    return true
  },rConfig)
  return lastResult
}