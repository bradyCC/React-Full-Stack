/**
 * Created by brady on 2019-06-24.
 */
// 模板字符串
let name = 'Brady';
let statement = `Hello, ${name}`;

// 箭头函数
let hello = () => statement;

// 默认参数
let say = (name = 'Brady') => {
  return `Hello, ${name}`;
}

// 展开运算符
let call = (a, b) => {
  return `${a}, ${b}`;
}
let names = ['Brady', 'Lucy'];
call(...names);

// Object - keys所有键、values所有值、entries对象转数组
let obj = {name: 'Brady', age: 32}
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// 计算属性
let name1 = 'name'
let obj1 = {[name1]: 'Lily'};

// 解构
let [arg1, arg2] = ['Brady', 'Lucy'];

// 数组遍历
[1, 2, 3].forEach((value, index) => { return `${index}-${value}`});

// 映射新数组
let arr = [1, 2, 3].map(item => item * 2);

// 数组中所有元素是否都满足条件
[1, 2, 3, 4].every(item => item > 3);

// 数组中是否有元素满足条件
[1, 2, 3, 4].some(item => item > 3);

// 数组过滤
[1, 2, 3, 4, 5].filter(item => item > 3);

// 数组连接
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, arr2];

// 数组去重
let arr4 = [1, 2, 3, 4, 3, 2, 1];
let arr5 = [...new Set(arr4)];
