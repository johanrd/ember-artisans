const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {})

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
}
