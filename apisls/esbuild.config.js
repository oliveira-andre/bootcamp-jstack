module.exports = function(serverless) {
  return {
    minify: true,
    target: 'node20',
    format: 'esm',
    outExtension: {
      '.js': '.mjs'
    },
    bundle: true,
    platform: 'node',
    sourcemap: true,
  }
}
