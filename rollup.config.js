import { nodeResolve } from '@rollup/plugin-node-resolve';
// Parcel webpack parcel
let formats = ['iife', 'es', 'cjs']
export default formats.map(format => {
  return {
    input: 'main.ts',
    output: {
      file: `dist/main${format === 'iife' ? '.js' : `.${format}.js`}`,
      format,
    },
    plugins: [nodeResolve()]
  }
})
