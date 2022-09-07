import {treeConfig, treeDefaultConfig,} from "./config";

export function treeIterationItem(tree: any[], filterBackCall?: (item: object) => boolean, config?: object | treeConfig ){
  const _config = Object.assign({}, treeDefaultConfig, config)

  console.log(_config)
}


//node --loader ts-node/esm treeIterationItem.ts