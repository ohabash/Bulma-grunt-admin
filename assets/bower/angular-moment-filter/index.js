angular.module("moment-filter", [])
.filter("moment", function(){ 
return function(input, fun /*, valist: funVar */) {
  var m;

  // Input is already a moment instance
  if(moment.isMoment(input))
    m = input;

  // Input could be a list of params as in
  // moment('2012-05-25', 'YYYY-MM-DD', true).isValid();
  else if(input instanceof Array)
    m = moment.apply(null, input);
  // String or other things
  else
    m = moment(input);
  
  // Return if no fun is specified
  if (!fun)
    return m;
  
  // If fun is a method, call this method with the rest of the arguments
  if (typeof(m[fun]) == "function")
    return m[fun].apply(m, Array.prototype.splice.call(arguments, 2));
  else 
    return m[fun];
}
});
