module.exports = {
  version: '1.0.0',
  init: (pluginContext) => {
     pluginContext.registerPolicy(require('./policies/print-node-verify.policy'))
  },
  policies: ['print-node-verify'],
  schema: {
    $id: 'N/A',
  }
}