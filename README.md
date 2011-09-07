Functional Arrays
=================

Functional Arrays provides a set of prototype extensions to Javascript's
Array object that help facilitate functional programming.

The prototype extensions consist of six methods that allow for different
iterations over an Array. Three of the methods will modify the contents
of the Array while the other three methods are non-modifying. 

Any additional arguments passed into the prototype extensions other than
what is specified for them will be passed along to action.

###Modifying Methods

###Non-modifying Methods

The three non-modifying methods are for_Each, for_each_range, and
for_each_index.

#####for_each:
Runs action for each element of the Array. for_each is similar to
Javascript's native forEach Array method. It is here for naming
consistency and to allow extra arguments to be passed to action.

```javascript
Array.prototype.for_each = function (action)
```

#####example:
```javascript
//The following shows an alert for each element in a.
function foo (ele) {
  console.log (ele);
}
var a = [1, 2, 3, 4, 5];
a.for_each (foo);
```

outputs:
  1
  2
  3
  4
  5


#####for_each_range:
Runs action for each element in the specified range of the Array.

```javascript
Array.prototype.for_each_range = function (begin, end, action)
```

  example:
```javascript
//The following shows an alert for the second through the last elements in a.
function foo (ele) {
  console.log (ele);
}
var a = [1, 2, 3, 4, 5];
a.for_each_range (1, a.length, foo);
```

outputs:
  2
  3
  4
  5


#####for_each_index:
runs action for each of the elements specified in the
indices array.

```javascript
Array.prototype.for_each_index = function (indices, action)
```

  example:
```javascript
//The following shows an alert for the second and the fourth elements in a.
function foo (ele) {
  console.log (ele);
}
var a = [1, 2, 3, 4, 5];
a.for_eachi_index ([1, 3], foo);
```

outputs:
  2
  4


The action method passed into the prototype extension will take the form:

```javascript
    function action (element) {};
```


###Extra Methods

#####slice_args: 
  provides a slice of the arguments back as an Array. This method is
necessary since the arguments object does not provide a slice operation.

```javascript
function sliceArguments (args, begin, end)
```

#####examples:  

```javascript
//The following will slice all of the arguments into args.  
function foo () {  
  var args = Array.prototype.slice_args (arguments);  
  console.log (args);  
}  
foo (1, 2, 3, 4, 5);  
```

outputs:
  1, 2, 3, 4, 5

```javascript
//The following will slice the second through the end of arguments 
//the into args.
function foo () {
  var args = Array.prototype.slice_args (arguments, 1);
  console.log (args);
}
foo (1, 2, 3, 4, 5);
```

outputs:
  2, 3, 4, 5

```javascript
//The following will slice the second through the fourth arguments
//into args.
function foo () {
  var args = Array.prototype.slice_args (arguments, 1, 3);
  console.log (args);
}
foo (1, 2, 3, 4, 5);
```

outputs:
  2, 3, 4


####Copyright (C) 2011 Thomas P. Lahoda

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  
02110-1301  USA

