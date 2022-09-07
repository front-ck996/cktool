// function routeFilter(tree, callback) {
//   for (let index = 0; index < tree.length; index++) {
//     const item = tree[index]
//     if (callback(item)) {
//       tree.splice(index, 1)
//       index--
//       continue
//     }
//
//     if (item.children && item.children.length > 0) {
//       routeFilter(item.children, callback)
//     }
//   }
// }
import {TREE_CONFIG, treeConfigDefault} from "./define";

export function treeIterationItem(tree: any[], filterCallBack?: (item:any) => boolean, config?: object | TREE_CONFIG){
  // const rConfig = Object.assign({}, treeConfigDefault, config)
  for (let index = 0; index < tree.length; index++) {
    const item = tree[index]
    if (!filterCallBack!(item)) {
      tree.splice(index, 1)
      index--
      continue
    }

    if (item.children && item.children.length > 0) {
      treeIterationItem(item.children, filterCallBack)
    }
  }
}