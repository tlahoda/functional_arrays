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

###Extra Methods

slice_args:
  provides a slice of the arguments back as an Array. This method is
necessary since the arguments object does not provide a slice operation.

    function sliceArguments (args, begin, end)

  examples:

    //The following will slice all of the arguments into args.
    function foo () {
      var args = Array.prototype.slice_args (arguments);
      console.log (args);
    }
    foo (1, 2, 3, 4, 5);

    outputs:
      1, 2, 3, 4, 5

    //The following will slice the second through the end of arguments 
    //the into args.
    function foo () {
      var args = Array.prototype.slice_args (arguments, 1);
      console.log (args);
    }
    foo (1, 2, 3, 4, 5);

    outputs:
      2, 3, 4, 5

    //The following will slice the second through the fourth arguments
    //into args.
    function foo () {
      var args = Array.prototype.slice_args (arguments, 1, 3);
      console.log (args);
    }
    foo (1, 2, 3, 4, 5);

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

