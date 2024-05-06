// 需求, 通过mockjs生成4条数据 [ {} , {}]
import Mock from "mockjs";

const data = Mock.mock({
  "list|5": [
    {
      "id|+1": 1, // id + 1
      "name|3": "jack", // string 生成3条数据
      "username|1-10": "老王", // string  随机生成1-10条数据
      "phone|11": "8", // string 生成11个
      "age|1-100": 1, // number
      "age1|20": 1, // number
      "salary|4000-6000.1-3": 0, // number 随机生成小数的位数
      "salary1|4000-6000.2": 0, // number 随机生成小数的位数
      "status|1": true, // 1 true 1/2
      "status1|2-4": true, //  2 / ( 2 + 4) = 3 / 1 true false 3/2
      "order|2": { id: 1, name: "订单1", price: 68.8 },
      "order1|1-3": { id: 1, name: "订单1", price: 68.8 },
      idCard: /\d{15}|\d{18}/, // 随机身份证号
    },
  ],
});

console.log(JSON.stringify(data, null, 2));

// 流程:
// 1. 引入mockjs
// 2. 调用mock方法生成数据
// 3. 返回数据

// mockjs
// 数据模版定义规范  "list|10"
// 数据占位符定义规范 "@ctitle()",
