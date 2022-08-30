const waitBuildFile = ['web_getFileSource']
export default waitBuildFile.map(item => {
  return {
    input: `${item}.ts`,
    output: {
      file: `test_dist/${item}/index.js`,
      format: 'es',
    }
  }
})
