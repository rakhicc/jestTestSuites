# calc library API

## **sum(a,b)**

function returns the sum of two numbers.Numbers are passed to the function

returns the sum of given numbers or

- if parameter is missing ,throws an excepion: `'parameter missing'``
- if parameters are not numbers ,throws an exception:`'only numbers allowed'`

### test csases

#### sums

#### integers

- sum(1,1) returns 2
- sum(2,3) returns 5
- sum(-2,-4) returns -6
- sum(-2,4) returns 2
  a,b, expected
  [2,-4, -2],
  [0,0, 0],
  [0,3, 3],
  [3,0, 3],
  [0,-3, -3],
  [-3,0, -3]

#### floats

[10,11.5,21.5],
[2.5,3,5.5],
[-2.5,3,0.5],
[-2.5,2.5,0],
[2.4,-2.5,-0.1]

#### mising parameters

sum() throws an exception 'parameter missing'
sum(1) throws an exception 'parameter missing'
sum('a') throws an exception 'parameter missing'
sum('') throws an exception 'parameter missing'

#### parameters are not numbers

- sum('a',1) throws an exception 'only numbers allowed'
- sum(1,'a')throws an exception 'only numbers allowed'
- sum('a','b')throws an exception 'only numbers allowed'
  -sum('','')throws an exception 'only numbers allowed'
  -sum(null,1)throws an exception 'only numbers allowed'
  -sum('1','2'')throws an exception 'only numbers allowed'

## **subtract(a,b)**

Function returns the difference a-b of two numbers. Numbers are passed to the function as paramters.
return the difference of given numbers

- if the parameter is missing , throws an exception:`'parameter missing'`
- if parameters are not numbers , throws an exception:`'only numbers allowed'`
