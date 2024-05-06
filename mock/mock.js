import Mock from "mockjs";

const data = Mock.mock({
  "list|3": [
    {
      "id|+1": 1,
      name: "@string",
      price: "@float",
      status: "@boolean",
      "token|20-30": "@character('lower')",
      date: "@date('yyyy/MM/dd')",
      time: "@time",
      time1: "@time('HH-mm-ss')",
      //   datetime: "@datetime",
      datetime1: "@datetime('yyyy/MM/dd HH:mm:ss')",
      current: "@now",
      //   url: "@image('300x250', 'red',  '#ccc' , 'png', 'hello')",
      text: "@paragraph(2)",
      ctext: "@cparagraph(2)",
      username: "@cname",
      url1: "@url('https','baidu.com')",
      emial: "@email('163.com')",
      dimain: "@domain",
      ip: "@ip",
      area: "@region",
      address: "@county(true)",
      province: "@province",
      zipcode: "@zip",
      "idcard|18": "@id()",
    },
  ],
});

console.log(JSON.stringify(data, null, 2));
