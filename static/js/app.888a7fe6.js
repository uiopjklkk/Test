(function(t){function e(e){for(var i,a,o=e[0],r=e[1],l=e[2],f=0,h=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);c&&c(e);while(h.length)h.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(i=!1)}i&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},u=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=r;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0db9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},s=[]},"184b":function(t,e,n){"use strict";n("79d8")},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var i=n("199c"),s=n.n(i);e["default"]=s.a},"23e5":function(t,e,n){"use strict";n("9036")},"3dfd":function(t,e,n){"use strict";var i=n("0db9"),s=n("23be"),u=(n("5c0b"),n("2877")),a=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),s=n("3dfd"),u=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divFather"},[n("div",{staticClass:"listLogStyle"},[t._v(" "+t._s(t.listLog)+" ")]),n("div",{staticClass:"inputNumDiv"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.num1,expression:"num1"}],staticClass:"inputTextStyle",attrs:{id:"text1",type:"text"},domProps:{value:t.num1},on:{input:function(e){e.target.composing||(t.num1=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num2,expression:"num2"}],staticClass:"inputTextStyle",attrs:{id:"text2",type:"text"},domProps:{value:t.num2},on:{input:function(e){e.target.composing||(t.num2=e.target.value)}}})]),n("div",{staticClass:"inputNumDiv"},[n("button",{staticClass:"buttonStyle",attrs:{type:"button"},on:{click:function(e){return t.randomList()}}},[t._v("随机生成100个整数")])]),n("ListTable",{ref:"listtable",attrs:{num1:this.num1,num2:this.num2,numList:this.numList,pageMaxNum:this.pageMaxNum}}),this.numList.length>0?n("div",{staticClass:"inputNumDiv2"},[n("button",{class:[this.$refs.listtable.four?"buttonStyleOn":"buttonStyle"],attrs:{type:"button"},on:{click:function(e){return t.fourMul()}}},[t._v("4的倍数")]),n("button",{class:[this.$refs.listtable.five?"buttonStyleOn":"buttonStyle"],attrs:{type:"button"},on:{click:function(e){return t.fiveMul()}}},[t._v("5的倍数")])]):t._e()],1)},o=[],r=(n("fb6a"),n("2f62"));i["a"].use(r["a"]);var l=new r["a"].Store({state:{},mutations:{},actions:{},modules:{}}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[this.isFlag?n("div",[this.numList.length>0?n("table",{attrs:{id:"tab",border:"1px"}},t._l(t.tableNumList,(function(e,i){return n("tr",{key:i,class:{firstRow:0===i}},t._l(e,(function(e,s){return n("td",{key:s,class:{isFive:t.five&&e%5===0&&""!=e}},[n("a",{class:{isFour:t.four&&e%4===0},attrs:{id:e},on:{click:function(n){return t.$refs.inputtable.openTable(e,i,s)}}},[t._v(t._s(e))])])})),0)})),0):t._e(),this.numList.length>0?n("div",{staticClass:"pageNumber"},[n("a",{class:[this.nowPage>0?"pageNeLs":"noPageNels"],on:{click:function(e){return t.lastPage()}}},[t._v("[上一页]")]),t._v(" 当前页数: "+t._s(t.nowPage+1)+" / "+t._s(this.$parent.pageList)+" "),n("a",{class:[this.$parent.pageList>this.nowPage+1?"pageNeLs":"noPageNels"],on:{click:function(e){return t.nextPage()}}},[t._v("[下一页]")]),n("br"),t._v("输入跳转: ")]):t._e(),n("InputTable",{ref:"inputtable"})],1):t._e()])},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog"},[this.isShow?n("div",{staticClass:"dialog-cover back",on:{click:function(e){return t.closeInput()}}}):t._e(),n("transition",{attrs:{name:"drop"}},[this.isShow?n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"dialog_head_back"},[t._t("header",[t._v("您当前正在修改数字为"+t._s(t.baseNum)+"的值")])],2),n("div",{staticClass:"dialog_main"},[t._v(" 请在此处输入一个整数数字(回车确认,点空白取消)"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newNum,expression:"newNum"}],attrs:{type:"text",id:"inputText"},domProps:{value:t.newNum},on:{input:function(e){e.target.composing||(t.newNum=e.target.value)}}})]),n("div",{staticClass:"foot_close"},[n("button",{attrs:{id:"dialogYes"},on:{click:function(e){return t.enterInput()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterClick()}}},[t._v("确定")]),n("button",{attrs:{id:"dialogNo"},on:{click:function(e){return t.closeInput()}}},[t._v("取消")])])]):t._e()])],1)},m=[],d={name:"InputTable",props:{},data:function(){return{isShow:!1,newNum:"",baseNum:0,rowKey:0,numKey:0}},created:function(){this.enterClick()},methods:{openTable:function(t,e,n){this.baseNum=t,this.rowKey=e,this.numKey=n,this.isShow=!0,setTimeout("document.getElementById('inputText').focus()",500)},closeInput:function(){this.isShow=!1},enterInput:function(){this.$parent.updateNum(this.newNum,this.baseNum,this.rowKey,this.numKey)},enterClick:function(){var t=this;document.onkeydown=function(e){13===e.keyCode&&t.enterInput()}}}},p=d,g=(n("23e5"),n("2877")),b=Object(g["a"])(p,h,m,!1,null,"bd23a432",null),v=b.exports,w={name:"ListTable",store:l,props:{num1:{default:0},num2:{default:0},numList:{type:Array},pageMaxNum:{default:100}},data:function(){return{isFlag:!0,four:!1,five:!1,nowPage:0}},computed:{tableNumList:function(){var t=[],e=0;if(0!==this.numList.length&&0!==this.numList[this.nowPage].length){while(e<this.numList[this.nowPage].length)t.push(this.numList[this.nowPage].slice(e,e+=10));while(t[t.length-1].length<10)t[t.length-1].push("");return t}}},methods:{updateNum:function(t,e,n,i){var s=t;this.number=e,""!==s?/^-?\d+$/.test(s)?(s=parseInt(s),this.isFlag=!1,this.checkTableNumList(e,s,n,i),this.$refs.inputtable.isShow=!1,this.$refs.inputtable.newNum="",this.$refs.inputtable.baseNum=0,this.$refs.inputtable.rowKey=0,this.$refs.inputtable.numKey=0):alert("您必须输入一个整数！"):alert("您输入的值不能为空！")},checkTableNumList:function(t,e,n,i){this.tableNumList[n][i]=e;var s=""+n+i;this.numList[this.nowPage][parseInt(s)]=e,this.isFlag=!0},chickFourMultiple:function(){!1===this.four?this.four=!0:this.four=!1},chickFiveMultiple:function(){!1===this.five?this.five=!0:this.five=!1},nextPage:function(){this.$parent.pageList>this.nowPage+1&&this.nowPage++},lastPage:function(){this.nowPage>0&&this.nowPage--}},components:{InputTable:v}},y=w,L=(n("184b"),Object(g["a"])(y,c,f,!1,null,"50de3496",null)),x=L.exports,N=n("bc3a"),k=n.n(N),P={name:"Home",store:l,data:function(){return{num1:"",num2:"",numList:[],listLog:"请在下列两个文本框中输入一对正确的正整数范围",buttonStyle:"",pageMaxNum:100,pageList:0}},watch:{num1:function(t,e){this.listLog="正在输入第一个数值中..",this.debouncedGetAnswer(),this.numList.length=0},num2:function(t,e){this.listLog="正在输入第二个数值中..",this.debouncedGetAnswer(),this.numList.length=0}},created:function(){this.debouncedGetAnswer=_.debounce(this.getAnswer,500)},methods:{getAnswer:function(){if(""===this.num1)return this.listLog="请填写第一个数值.(数值不能为空)",void document.getElementById("text1").focus();if(""===this.num2)return this.listLog="请填写第二个数值.(数值不能为空)",void document.getElementById("text2").focus();if(!/^[0-9]\d*$/.test(this.num1))return this.listLog="第一个数值未输入或输入不正确！(请输入一个正整数)",void document.getElementById("text1").focus();if(!/^[0-9]\d*$/.test(this.num2))return this.listLog="第二个数值未输入或输入不正确！(请输入一个正整数)",void document.getElementById("text2").focus();var t=parseInt(this.num1),e=parseInt(this.num2);if(this.num1=t,this.num2=e,t>=e)return this.listLog="不是一个正确的范围！(第一个数必须比第二个数小)",0==e?void document.getElementById("text2").focus():void document.getElementById("text1").focus();this.listLog="输入已完成，即将生成对应表格(每页最多生成"+this.pageMaxNum+"个数字)",this.createList()},createList:function(){this.$refs.listtable.nowPage=0,this.pageList=0;var t=parseInt(this.num1),e=parseInt(this.num2),n=parseInt((e-t+1)/this.pageMaxNum);(e-t+1)%this.pageMaxNum>0&&n++,this.pageList=n,this.numList=new Array;for(var i=0;i<=n;i++)for(this.numList[i]=new Array,this.numList.push([i]);t<=e;t++)if(this.numList[i].push(t),this.numList[i].length===this.pageMaxNum){t++;break}},fourMul:function(){this.$refs.listtable.chickFourMultiple()},fiveMul:function(){this.$refs.listtable.chickFiveMultiple()},randomList:function(){this.numList=[],this.pageList=1,this.$refs.listtable.nowPage=0;var t=this;k.a.get("/news/index").then((function(e){t.numList.push(e.data.randomList.slice(0,e.data.randomList.length)),t.listLog="已成功生成100个随机整数"}))}},components:{ListTable:x}},$=P,I=(n("8cbb"),Object(g["a"])($,a,o,!1,null,"7c9eaab2",null)),S=I.exports;i["a"].use(u["a"]);var C=[{path:"/",name:"Home",component:S}],M=new u["a"]({routes:C}),O=M,T=n("2ef0"),j=n.n(T);i["a"].config.productionTip=!1,n("df9d"),new i["a"]({router:O,store:l,_:j.a,axios:k.a,render:function(t){return t(s["default"])}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"79d8":function(t,e,n){},"8cbb":function(t,e,n){"use strict";n("f565")},9036:function(t,e,n){},"9c0c":function(t,e,n){},df9d:function(t,e,n){var i=n("96eb"),s=i.Random,u=function(){for(var t=[],e=0;e<100;e++)t.push(s.integer(-1e3,1e3));return{randomList:t}};i.mock("/news/index","get",u)},f565:function(t,e,n){}});