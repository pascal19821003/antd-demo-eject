import { forEach } from "./forEach";
import foo from './components/foo'


const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});


// const myMock1 = jest.fn();
// const a = new myMock1();
// console.log(myMock1.mock.instances);
// const myMock2 = jest.fn();
// const b = {};
// const bound = myMock2.bind(b);
// bound();
// console.log(myMock2.mock.contexts);


// const myMock = jest.fn();
// console.log(myMock());
// // > undefined
// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
// console.log(myMock(), myMock(), myMock(), myMock());


// const filterTestFn = jest.fn();
// // Make the mock return `true` for the first call,
// // and `false` for the second call
// filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
// const result = [11, 12].filter(num => filterTestFn(num));
// console.log(result);
// // > [11]
// console.log(filterTestFn.mock.calls[0][0]); // 11
// console.log(filterTestFn.mock.calls[1][0]); // 12
// console.log( filterTestFn.mock.results[0].value);
// console.log( filterTestFn.mock.results[1].value);

const myMockFn = jest.fn(cb=>cb(null, true))
myMockFn((err, value)=>console.log( value ))


jest.mock('./components/foo'); // this happens automatically with automocking

foo.mockImplementation(()=>48)
console.log( "foo()", foo() );;


const myMockFn2 = jest.fn(()=>'default')
.mockImplementationOnce(()=>'first call')
.mockImplementationOnce(()=>'second call')

console.log( myMockFn2(), myMockFn2(), myMockFn2(), myMockFn2(), );