import { DEFAULT_EXTENSIONS } from '@babel/core';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import nodePolyfills from 'rollup-plugin-polyfill-node';
const basePlugins = [
  // nodePolyfills(),
  json(),
  resolve({
    module: true,
    jsnext: true,
    main: true
  }),
  typescript({}),
  commonjs(),

  //handle ES2015+
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
      '.tsx'
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
      'file': 'dist/index.js'
    },
    plugins: basePlugins
  }
]