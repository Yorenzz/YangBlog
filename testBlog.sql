/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 50009
 Source Host           : localhost:27017
 Source Schema         : testBlog

 Target Server Type    : MongoDB
 Target Server Version : 50009
 File Encoding         : 65001

 Date: 28/06/2022 21:48:53
*/


// ----------------------------
// Collection structure for article
// ----------------------------
db.getCollection("article").drop();
db.createCollection("article");

// ----------------------------
// Documents of article
// ----------------------------
db.getCollection("article").insert([ {
    _id: ObjectId("624fe72783630000190010d2"),
    text: "testText",
    time: "2022/4/8",
    title: "testTitle",
    img: "imgurl",
    num: 200,
    readtime: "5",
    top: "1",
    category: "study",
    label: null,
    describe: "<p>这是一个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n"
} ]);
db.getCollection("article").insert([ {
    _id: ObjectId("624feadc83630000190010d3"),
    text: "testText2",
    time: "2",
    title: "testTitle2",
    img: "imgurl",
    num: 200,
    readtime: "5",
    top: "1",
    category: "study",
    label: null,
    describe: "<p>这是2个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n"
} ]);
db.getCollection("article").insert([ {
    _id: ObjectId("625e79047294ba66d88f30a7"),
    text: "<h1>正文</h1>\n<p><strong>单独的</strong></p>\n<table>\n<thead>\n<tr>\n<th>Head</th>\n<th>Head</th>\n<th>Head</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n</tbody>\n</table>\n",
    title: "第一个文章标题",
    time: "2022 April 19 Tuesday, 16:55:32",
    img: "imgurl",
    num: NumberInt("200"),
    category: "生活随笔",
    label: {
        0: "react",
        1: "blog"
    },
    readtime: NumberInt("0"),
    top: NumberInt("0"),
    describe: "<p>这是3个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n"
} ]);
db.getCollection("article").insert([ {
    _id: ObjectId("6266c7f2aa6a073ec90b13bf"),
    text: "<h1>这是标题1</h1>\n<p><img src=\"https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/1594543316486.jpg\" alt=\"\"></p>\n<p>怎么说</p>\n<p>换行</p>\n<hr>\n<ul>\n<li>111</li>\n<li>222</li>\n<li>333</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Head</th>\n<th>Head</th>\n<th>Head</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n</tbody>\n</table>\n<pre><code>javascript\nconst a=1234\nconsole.log('aaaaa',a)\n</code></pre>\n",
    title: "这是一个标题",
    time: "2022 April 26 Tuesday, 0:10:23",
    img: "https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/1591531793064.jpg",
    num: NumberInt("200"),
    category: "学习笔记",
    label: {
        0: "testLabel",
        1: "picture"
    },
    readtime: NumberInt("0"),
    top: NumberInt("0"),
    describe: "<p>这是4个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n"
} ]);
db.getCollection("article").insert([ {
    _id: ObjectId("6266c9b7aa6a073ec90b13c0"),
    text: "<p><code>const a='sssssss'</code></p>\n<p><s>删除</s></p>\n<blockquote>\n<p>引用一段话</p>\n</blockquote>\n<ol>\n<li>js为什么要设计成单线程</li>\n<li>耗时比较久的操作怎么分离出js线程</li>\n<li>webworker能操作dom吗</li>\n<li>webworker怎么和主进程通信（不了解没继续问了）</li>\n<li>如何判断空对象，如何判断是否是对象，判断数组有哪些方法</li>\n<li>vue有一个很深的子组件，父组件怎么给它传值（想问inject，没学）</li>\n<li>vue中怎么拦截路由</li>\n<li>vue3和vue2的区别</li>\n<li>webpack怎样设置多入口模式</li>\n<li>相同引用的js代码打包成一个单独的文件要怎么配置</li>\n<li>怎么启动混淆模式</li>\n<li>webpack的构建原理（流程）</li>\n<li>import引入和require引入在webpack中有什么区别</li>\n<li>一个flex父元素，一个子元素flex设为1，一个设为0，有什么效果，如果溢出了有什么效果</li>\n<li>html中meta标签有什么作用</li>\n<li>如何关掉浏览器还能记住用户登录状态</li>\n<li>图片标签中如何进行xss攻击，input呢，如何进行防范</li>\n<li>学习前端看过哪些书</li>\n<li>垃圾回收有什么方法</li>\n<li>有哪些内存泄露的例子，dom中有没有</li>\n<li>12个砝码，有一个较轻，一个天秤，怎么找出？如果重量不同的那个不知道是轻还是重怎么找出？</li>\n<li>有没有写过博客或笔记</li>\n</ol>\n<p><a href=\"https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/1594543316486.jpg\">图片链接</a></p>\n",
    title: "4399面经",
    time: "2022 April 26 Tuesday, 0:17:59",
    img: "https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/1594543316486.jpg",
    num: NumberInt("200"),
    category: "面经",
    label: {
        0: "4399",
        1: "面经",
        2: "前端"
    },
    readtime: NumberInt("0"),
    top: NumberInt("0"),
    describe: "<p>这是5个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n"
} ]);
db.getCollection("article").insert([ {
    _id: ObjectId("626d8da8ba6d7ec1d6dea0a1"),
    text: "<table>\n<thead>\n<tr>\n<th>第一</th>\n<th>第二</th>\n<th>第三</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>单独的</td>\n<td>哒哒哒哒哒哒多多多多</td>\n<td>地方东风发</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n</tbody>\n</table>\n<p>test</p>\n<hr>\n<p>gggg</p>\n<hr>\n<p>ghhhhhh</p>\n<h2>wwwwwwww</h2>\n",
    title: "des测试",
    time: "2022 May 1 Sunday, 3:27:35",
    img: "https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/1bdee7a7241a4e8f.jpg",
    num: NumberInt("200"),
    category: "测试分类",
    label: {
        0: "test",
        1: "blog"
    },
    readtime: NumberInt("0"),
    top: NumberInt("0"),
    describe: "<p>这是6个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n"
} ]);
db.getCollection("article").insert([ {
    _id: ObjectId("626d8ec8295e2a72f8eb3be5"),
    text: "<table>\n<thead>\n<tr>\n<th>第一</th>\n<th>第二</th>\n<th>第三</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>单独的</td>\n<td>哒哒哒哒哒哒多多多多</td>\n<td>地方东风发</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n<tr>\n<td>Data</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n</tbody>\n</table>\n<p>test</p>\n<hr>\n<p>gggg</p>\n<hr>\n<p>ghhhhhh</p>\n<h2>wwwwwwww</h2>\n",
    describe: "<p>这是7个文章描述</p>\n<pre><code>const toTop=()=&gt;{\n  window.scrollTo({\n    top:0,\n    behavior: 'smooth'\n  })\n}\n</code></pre>\n",
    title: "des测试",
    time: "2022 May 1 Sunday, 3:32:21",
    img: "https://pic-1305446179.cos.ap-guangzhou.myqcloud.com/1bdee7a7241a4e8f.jpg",
    num: NumberInt("200"),
    category: "测试分类",
    label: {
        0: "test",
        1: "blog"
    },
    readtime: NumberInt("0"),
    top: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for label
// ----------------------------
db.getCollection("label").drop();
db.createCollection("label");

// ----------------------------
// Documents of label
// ----------------------------

// ----------------------------
// Collection structure for site
// ----------------------------
db.getCollection("site").drop();
db.createCollection("site");

// ----------------------------
// Documents of site
// ----------------------------
db.getCollection("site").insert([ {
    _id: ObjectId("61ef7a533297d693b879ca7b"),
    site: "test.com"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("61ef91310a58caef4b38c3db"),
    username: "123"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("61efae60adfeadaf6a04f54e"),
    username: "123"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("61efb249adfeadaf6a04f54f"),
    username: "123"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("624f19dd026a00009d007695"),
    yourname: "??"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("624f1ae1026a00009d007696"),
    label: {
        thelabel: "react"
    }
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("624f239c026a00009d007697"),
    name: "1"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("624f239c026a00009d007698"),
    name: "2"
} ]);
db.getCollection("site").insert([ {
    _id: ObjectId("624f23b8026a00009d007699"),
    name: "3"
} ]);

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------
db.getCollection("user").insert([ {
    _id: ObjectId("61eac233964e000044001733"),
    uname: "yang",
    password: 123456
} ]);
