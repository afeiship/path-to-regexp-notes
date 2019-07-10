var pathToRegexp = require('path-to-regexp');
var reg = pathToRegexp('/admin/:ws_id/person/chart-draft/:batch_id');

var res = reg.test('/admin/-1/person/chart-draft/123');

console.log('res:->', res);
