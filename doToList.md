# predefined eventHandlers for ...

1. appending string on expression
1. DEL deleting last character
1. AC clearing screen
1. = evaluating expression
  1. GET api.mathjs.org
  1. POST api.mathjs.org
  1. some inhouse solution

general outline: define any handler function and give it as prop down to button.

# nice to haves

1. some input syntax checking:
  * no two ..
  * no such things like 2(()).2
  * etc.
