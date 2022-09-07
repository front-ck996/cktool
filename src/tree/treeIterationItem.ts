
import {TREE_CONFIG, treeConfigDefault} from "./define";

/**
 * 测试注释
 * @param tree
 * @param filterCallBack
 * @param config
 */
export function treeIterationItem(tree: any[], filterCallBack?: (item:any) => boolean, config?: object | TREE_CONFIG){
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