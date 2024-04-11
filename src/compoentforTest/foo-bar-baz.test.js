//test.js
import defaultExport, {bar, foo} from './foo-bar-baz';

jest.mock('./foo-bar-baz', () => {
  const originalModule = jest.requireActual('./foo-bar-baz');

  console.log( "------------" , originalModule);
  //Mock the default export and named export 'foo'
  let res = {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => {return 'mocked baz';}),
    foo: 'mocked foo',
  };
  console.log( "------------" , res);


  return res;
});

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});


test('测试jest.fn()内部实现', () => {
  let mockFn = jest.fn((num1, num2) => {
    return num1 * num2;
  })
  // 断言mockFn执行后返回100
  expect(mockFn(10, 10)).toBe(100);
})