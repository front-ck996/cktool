import tsPlugin from '@rollup/plugin-typescript';
const waitBuildFile = [
  'web_getFileSource',
  './code_try/absolute.ts'
]
export default waitBuildFile.map(item => {
  return {
    input: `${item}.ts`,
    output: {
      file: `test_dist/${item}/index.js`,
      format: 'es',
    },
    plugins: [
      tsPlugin(),
    ],
  }
})
