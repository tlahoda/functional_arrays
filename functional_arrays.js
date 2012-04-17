(function() {

  Array.prototype.slice_args = function(args, begin, end) {
    return Array.prototype.slice.call(args, begin, end);
  };

  Array.prototype.apply = function(action) {
    var args;
    args = Array.prototype.slice_args(arguments);
    args.unshift(this.length);
    args.unshift(0);
    return this.apply_range.apply(this, args);
  };

  Array.prototype.apply_range = function(begin, end, action) {
    var args, i;
    args = Array.prototype.slice_args(arguments, 3);
    for (i = begin; begin <= end ? i < end : i > end; begin <= end ? i++ : i--) {
      args.unshift(this[i]);
      this[i] = action.apply(null, args);
      args.shift();
    }
    return this;
  };

  Array.prototype.apply_index = function(indices, action) {
    var args, i, _i, _len;
    args = Array.prototype.slice_args(arguments, 2);
    for (_i = 0, _len = indices.length; _i < _len; _i++) {
      i = indices[_i];
      args.unshift(this[i]);
      this[i] = action.apply(null, args);
      args.shift();
    }
    return this;
  };

  Array.prototype.for_each = function(action) {
    var args;
    args = Array.prototype.slice_args(arguments);
    args.unshift(this.length);
    args.unshift(0);
    return this.for_each_range.apply(this, args);
  };

  Array.prototype.for_each_range = function(begin, end, action) {
    var args, i, res;
    args = Array.prototype.slice_args(arguments, 3);
    for (i = begin; begin <= end ? i < end : i > end; begin <= end ? i++ : i--) {
      args.unshift(this[i]);
      res = action.apply(null, args);
      if (typeof res !== 'undefined' && !res) break;
      args.shift();
    }
    return this;
  };

  Array.prototype.for_each_index = function(indices, action) {
    var args, i, res, _i, _len;
    args = Array.prototype.slice_args(arguments, 2);
    for (_i = 0, _len = indices.length; _i < _len; _i++) {
      i = indices[_i];
      args.unshift(this[i]);
      res = action.apply(null, args);
      if (typeof res !== 'undefined' && !res) break;
      args.shift();
    }
    return this;
  };

}).call(this);
