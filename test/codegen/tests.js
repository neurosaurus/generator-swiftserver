'use strict'
const path = require('path')
const tests = require('common-codegen-tests')
const generatorLocation = path.join(__dirname, '../../app')
const platform = 'SWIFT'
const webOptions = { type: 'web', docker: true }
const bffOptions = { type: 'bff', docker: true }

tests.test('test-cli-config', generatorLocation, platform, webOptions)
tests.test('test-cli-config', generatorLocation, platform, bffOptions)

tests.test('test-docker', generatorLocation, platform, webOptions)
tests.test('test-docker', generatorLocation, platform, bffOptions)

tests.test('test-bluemix', generatorLocation, platform, webOptions)
tests.test('test-bluemix', generatorLocation, platform, bffOptions)

// TODO(tunniclm): The API to common-codegen-tests changed and now
// must be revised.
// The old code was:
// tests.test('test-manifest', generatorLocation, platform, webOptions);
// tests.test('test-manifest', generatorLocation, platform, bffOptions);
//
// tests.test('test-pipeline', generatorLocation, platform, webOptions);
// tests.test('test-pipeline', generatorLocation, platform, bffOptions);
// The new code is:
function runOneTest (file, generatorLocation, platform, options) {
  var test = tests.test(file, undefined, platform, options)
  test.generatorLocation = generatorLocation
  test.test()
}
runOneTest('test-manifest', generatorLocation, platform, webOptions)
runOneTest('test-manifest', generatorLocation, platform, bffOptions)

runOneTest('test-pipeline', generatorLocation, platform, webOptions)
runOneTest('test-pipeline', generatorLocation, platform, bffOptions)
