'use strict';
const { TestWatcher } = require('jest');
const {sum}=require('../calcLibrary');
describe('test sum with integers one by one',()=>{
    test('test 1+1=2',()=>{
        expect(sum(1,1)).toBe(2);
    });
    test('test 2+3=5',()=>{
        expect(sum(2,3)).toBe(5);
    });
    test('test -2+-4=-6',()=>{
        expect(sum(-2,-4)).toBe(-6);
    });
    test('test -2+4=2',()=>{
        expect(sum(-2,4)).toBe(2);
    });
})

describe('test sum with integers using test.each',()=>{
    const testvalues=[
  [2,-4, -2],
  [0,0, 0],
  [0,3, 3],
  [3,0, 3],
  [0,-3, -3],
  [-3,0, -3]
    ]
    test.each(testvalues)('sum(%s,%s)=%s',(a,b,expected)=>{
        expect(sum(a,b)).toBe(expected)
    })
})


describe('test sum with floats',()=>{
const testvalues=[
    [10,11.5,21.5],
[2.5,3,5.5],
[-2.5,3,0.5],
[-2.5,2.5,0],
[2.4,-2.5,-0.1]
]
test.each(testvalues)('sum(%s,%s)=%s',(a,b,expected)=>{
    expect(sum(a,b)).toBeCloseTo(expected)
});
});
describe('test missing parameters throw an exception',()=>{
    test('sum() throws an exception "parameter missing"',()=>{
        expect(()=>sum()).toThrow('parameter missing');

    });
    const testvalues=[
        [null,'parameter missing'],
        [1,'parameter missing'],
        ['a','parameter missing'],
        ['','parameter missing']
    ];
    test.each(testvalues)('sum(%s) throws an exception: %s',(a,expected )=>{
       expect(()=>sum(a)).toThrow(expected) ;
    });
    const testvaluesversion2=[
        [null],
        [1],
        ['a'],
        ['']
    ];
    test.each(testvalues)('sum(%s) throws an exception:parameter missing',(a,expected )=>{
        expect(()=>sum(a)).toThrow('parameter missing') ;
     });
});

describe('test parameters are not numbers',()=>{
    const testvalues=[
        ['a',1],
        [1,'a'],
        ['a','b'],
        ['',''],
        ['1','2']
    ]
    test.each(testvalues)('sum(%s,%s) throws exception "only numbers allowed"',(a,b)=>{
        expect(()=>sum(a,b)).toThrow('only numbers allowed');
    })
})


