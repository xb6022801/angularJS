function matchExpressions(str) {
  var exps = str.match(/{{([^}]+)}}/g);

  // if there isn't any, get out of here
  if (exps === null) return;

  exps = exps.map(function(exp) {
    var prop = exp.match(/[^{}]+/);
    return prop === null ? null : prop[0];
  })
  return exps
}

var str = '/products/{{ id + 5 }}/view'

console.log(matchExpressions(str))