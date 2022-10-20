import {DEFAULT_EXTENSIONS} from '@babel/core';
import {nodeResolve as resolve} from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import * as fs from 'fs'

const tsConfig = fs.readFileSync('./tsconfig.json')
const reg = /("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n|$))|(\/\*(\n|.)*?\*\/)/g;
const tsConfigText = JSON.parse(tsConfig.toString().replace(reg, function (word) {
  // 去除注释后的文本
  return /^\/{2,}/.test(word) || /^\/\*/.test(word) ? '' : word;
}));
// console.log(tsConfigText.compilerOptions.declaration)
//
// let defaults = {
//   compilerOptions:
//     {
//       declaration: true,
//       'declarationDir': './dist/types',
//     },
// };


const basePlugins = [
  // nodePolyfills(),
  json(),
  resolve({
    module: true,
    jsnext: true,
    main: true,
  }),
  typescript({
    // useTsconfigDeclarationDir: true,
    // tsconfig: './tsconfig.json',
  }),
  commonjs(
    {
      include: 'node_modules/**',
    },
  ),

  //handle ES2015+
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
      '.tsx',
    ],
    presets: [
      // [
      //   '@babel/preset-env',
      //   {
      //     targets: '> 0.25%, not dead',
      //     useBuiltIns: 'usage',
      //     corejs: 3
      //   }
      // ]
    ],
  }),
]
module.exports = [
  {
    input: 'src/index.ts',
    output: {
      'sourcemap': true,
      // 'format': 'umd',
      'format': 'esm',
      // 'name': 'maptalks',
      // 'banner': banner,
      // 'outro': outro,
      'extend': true,
      // 'intro': intro,
      'globals': {
        // 'maptalks': 'maptalks',
        // 'three': 'THREE'
      },
      'file': 'dist/index.js',
    },
    plugins: basePlugins,
  },
]