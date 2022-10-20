import { TREE_CONFIG } from "./define";
export declare function treeIterationItem(tree: any[], filterCallBack?: (item: any) => boolean, config?: object, _ext?: any): void;
export declare function treeExpandHash(tree: any[], filterCallBack?: (item: any) => boolean, config?: object): {};
export declare function treeFindFirstItem(tree: any[], childrenField?: string | TREE_CONFIG): any;
