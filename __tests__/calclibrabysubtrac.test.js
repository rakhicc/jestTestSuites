'use strict';

const {subtract}=require('../calcLibrary');

describe('testing subtraction of numbers one by one',()=>{
  test('1-1=0',()=>{
      expect(subtract(1,1)).toBe(0);
  })
  test('1-1=0',()=>{
    expect(subtract(1,1)).toBe(0);
})
test(' test 1-(-1)=2',()=>{
    expect(subtract(1,-1)).toBe(2);
})
test('test -1-1=-2',()=>{
    expect(subtract(-1,1)).toBe(-2);
})  
})
describe('test subtract of integers using teast each',()=>{
    const testvalues=[
        [1,1,0],
        [1,-1,2],
        [-1,1,-2],
        [-3,-1,-2]

    ]
    test.each(testvalues)('subtract(%s,%s)=%s ',(a,b,expected)=>{
        expect(subtract(a,b)).toBe(expected);
    });
});

describe('test with float values',()=>{
    test('subtract(11.5,10)=1.5',()=>{
        expect(subtract(11.5,10)).toBe(1.5);
    })
    test('subtract(-11.5,10)=-21.5',()=>{
        expect(subtract(-11.5,10)).toBe(-21.5);
    })
    test('subtract(-11.5,-10)=-1.5',()=>{
        expect(subtract(-11.5,-10)).toBe(-1.5);
    })

    const testvalues=[
        [10,11.5,-1.5],
    [2.5,3,-0.5],
    [-2.5,3,-5.5],
    [-2.5,2.5,-5],
    [2.4,-2.5,4.9]
    ]
    test.each(testvalues)('subtract(%s,%s=%s',(a,b,expected)=>{
        expect(subtract(a,b)).toBe(expected);
    });
});