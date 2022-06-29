$(window).load(function(){  
  $(".loading").fadeOut()
 })  

/****/
$(document).ready(function(){
var whei=$(window).width()
$("html").css({fontSize:whei/20})
$(window).resize(function(){
var whei=$(window).width()
$("html").css({fontSize:whei/20})
});
});


$(window).load(function(){$(".loading").fadeOut()})  
$(function () {








// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('echarts2'));
/** */
option2 = {
tooltip: {
trigger: 'axis',
axisPointer: {type: 'shadow'},
// formatter:'{c}' ,
},
grid: {
left: '0',
top: '0',
right: '10',
bottom: '-20',
containLabel: true
},
legend: {
data: ['自制内容净资产占比', '版权内容净资产占比'],
right: 'top',
top:0,
textStyle: {
 color: "#fff"
},
itemWidth: 8,
itemHeight: 6,
// itemGap: 35
},

xAxis: [{
type: 'category',
boundaryGap: false,
axisLabel:  {
rotate: -90,
     textStyle: {
color: "rgba(255,255,255,.6)",
fontSize:8,

     },
 },
axisLine: {
lineStyle: { 
color: 'rgba(255,255,255,.1)'
}

},

data: ['2019年1月', '2019年2月', '2019年3月', '2019年4月', '2020年1月', '2020年2月', '2020年3月', '2020年4月', '2021年1月']

}, {

axisPointer: {show: false},
axisLine: {  show: false},
position: 'bottom',
offset: 0,



}],

yAxis: [{
type: 'value',
axisTick: {show: false},
// splitNumber: 6,
axisLine: {
 lineStyle: {
     color: 'rgba(255,255,255,.1)'
 }
},
axisLabel:  {
formatter: "{value} %",
     textStyle: {
color: "rgba(255,255,255,.6)",
fontSize:10,
     },
 },

splitLine: {
 lineStyle: {
      color: 'rgba(255,255,255,.1)'
 }
}
}],
series: [
{
name: '自制内容净资产占比',
type: 'line',
smooth: true,
symbol: 'circle',
symbolSize: 5,
showSymbol: false,
lineStyle: {
 normal: {
color: 'rgba(228, 228, 126, 1)',
     width: 2
 }
},
areaStyle: {
 normal: {
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
         offset: 0,
         color: 'rgba(228, 228, 126, .2)'
     }, {
         offset: 1,
         color: 'rgba(228, 228, 126, 0)'
     }], false),
     shadowColor: 'rgba(0, 0, 0, 0.1)',
 }
},
itemStyle: {
normal: {
color: 'rgba(228, 228, 126, 1)',
borderColor: 'rgba(228, 228, 126, .1)',
borderWidth: 12
}
},
data: [64.3,61.7, 62.0,63.3, 62.1, 61.1,57.0,53.3,46.7]

}, {
name: '版权内容净资产占比',
type: 'line',
smooth: true,
symbol: 'circle',
symbolSize: 5,
showSymbol: false,
lineStyle: {

 normal: {
color: 'rgba(255, 128, 128, 1)',
     width: 2
 }
},
areaStyle: {
 normal: {
     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
         offset: 0,
         color: 'rgba(255, 128, 128,.2)'
     }, {
         offset:1,
         color: 'rgba(255, 128, 128, 0)'
     }], false),
     shadowColor: 'rgba(0, 0, 0, 0.1)',
 }
},
itemStyle: {
normal: {
color: 'rgba(255, 128, 128, 1)',
borderColor: 'rgba(255, 128, 128, .1)',
borderWidth: 12
}
},
data: [35.7,38.3,38.0,36.7,37.9, 38.9,43.0,46.7,53.3]
}, 
]
};

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);
window.addEventListener("resize",function(){
 myChart2.resize();
});





// 基于准备好的dom，初始化echarts实例
var myChart3= echarts.init(document.getElementById('echarts3'));
option3= {
  tooltip: {
    trigger: 'item',
  },

  legend: {
    data: ['腾讯控股', '阿里巴巴', '哔哩哔哩', '芒果TV', '爱奇艺']
  },
  series: [
    {
      color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5','#d0a00e'],
      name: '利润',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 10,
      width: '80%',
      min: 0,
      max: 2000,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {    // 标签的视觉引导线样式
        length: 10,    // 视觉引导线第一段的长度。
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {             // 图形样式
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 16
        }
      },
      data: [
        { value:43509.8, name: '腾讯控股' },
        { value: 3253.4, name: '阿里巴巴' },
        { value: 1127.9, name: '哔哩哔哩' },
        { value: 854.5, name: '芒果TV' },
        { value: 32.1, name: '爱奇艺' }
      ]
    }
  ]
};
 // 使用刚指定的配置项和数据显示图表。
 myChart3.setOption(option3);
 // 处理点击事件并且弹出数据名称
 myChart3.on('click', function (params) {
     alert(params.name);
     window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
 });
// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3);
window.addEventListener("resize",function(){
 myChart3.resize();
});



// 基于准备好的dom，初始化echarts实例
var myChart4= echarts.init(document.getElementById('echarts4'));
option4 = {
  tooltip: {},
  legend: {
  data: ['APP营收', '会员营收'],
  color: '#fff',
  right:'0%',
  top:'0%',
  },
  radar: {
  // shape: 'circle',
  center:['50%','60%'],
    
  name: {
  textStyle: {
  color: '#fff',
  borderRadius: 3,
  padding: [3, 5]
  }
  },
  indicator: [
  { name: '爱奇艺', max: 500},
  { name: '芒果TV', max:500},
  { name: '哔哩哔哩', max: 500},
  { name: '腾讯数字内容', max: 500},
  { name: '阿里数字媒体娱乐', max: 500}
  ]
  },

  series: [{
  name: '预算 vs 开销（Budget vs spending）',
  type: 'radar',
  color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5','#FBFE56'],
  // areaStyle: {normal: {}},
  data: [
  {
  value: [297,140,120,480,290],
  name: 'APP营收'
  },
  {
  value: [164.9,32.55,38.46,241.78,152.2],
  name: '会员营收'
  }
  ]
  }]
  };

  myChart4.setOption(option4);
  myChart3.group='group1';
  myChart4.group='group1';
  echarts.connect('group1');

// 使用刚指定的配置项和数据显示图表。
myChart4.setOption(option4);
window.addEventListener("resize",function(){
myChart4.resize();
});







// 基于准备好的dom，初始化echarts实例
var myChart5 = echarts.init(document.getElementById('echarts5'));

option5= {

  tooltip: {
   trigger: 'axis',
   axisPointer: { // 坐标轴指示器，坐标轴触发有效
     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
   }
  },
  legend: {
    icon: 'circle', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
    orient :'horizontal', // 'horizontal',''.
    top:'0', 
    left:'20', 
    textStyle:{
      color:'#FFF',
      fontSize: 8,
      // fontWeight: 'bold',
    },
    data: ['广告收入', '用户付费', '版权分销'],
  },
  grid: {
   left: '0',
   right: '20',
   bottom: '0',
   top:'8%',
   containLabel: true
  },
  xAxis: {
   type: 'category',
   data: ['2015','2016','2017','2018','2019','2020','2021'],
   axisLine: {
     lineStyle: {
       color: 'white'
  
     }
   },
   axisLabel: {
     //rotate:-90,
     formatter:function(value){return value.split("").join("\n");},
  textStyle: {
     color: "rgba(255,255,255,.6)",
    fontSize:10,
          }
  },
   axisLine: {
      lineStyle: {
          color: 'rgba(255,255,255,0.3)'
      }
  },
  },
  
  yAxis: {
   type: 'value',
   splitNumber: 4,
   axisTick: {show: false},
   splitLine: {
     show: true,
     lineStyle: {
       color: 'rgba(255,255,255,0.1)'
     }
   },
   axisLabel: {textStyle: {
     color: "rgba(255,255,255,.6)",
    fontSize:10,
          }},
   axisLine: {show:false},
  },
  
  series: [{
   name: '广告收入',
   type: 'bar',
   stack: 'a',
   barWidth: '30',barGap: 0,
   itemStyle: {
      normal: {
       color: '#8bd46e', }
   },
   data: [57.7,50.9, 49.1, 43.9, 45.6, 45.6, 41.3, 39.4,]
  },
  {
   name: '用户付费',
   type: 'bar',
   stack: 'a',
   barWidth: '30',barGap: 0,
   itemStyle: {
      normal: {
       color: '#f5804d',
      barBorderRadius:0, }
   },
   data: [12.7,18.8,28.3,29.0, 30.2,31.1,34.8, 37.7,]
  },
  {
   name: '版权分销',
   type: 'bar',
   stack: 'a',
   barWidth: '30',barGap: 0,
   itemStyle: {
      normal: {
       color: '#248ff7',
      barBorderRadius:0, }
   },
   data: [ 3.8,3.8,3.0,2.7,2.7,2.5,2.5,2.4,]
  }
  ]
  };
// 使用刚指定的配置项和数据显示图表。
myChart5.setOption(option5);
window.addEventListener("resize",function(){
myChart5.resize();
});


$.getJSON("js/data.json", "", function(data) {
var myChart7 = echarts.init(document.getElementById('echarts7'));
// 显示标题，图例和空的坐标轴
var option7= {  
  color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5','#d0a00e','#3059F7'],
  backgroundColor: 'rgba(128, 128, 128, 0.1)',  //配置背景色，rgba设置透明度0.1
  tooltip: { trigger: "item", formatter: "{a}<br/>{b}:{c}({d}%)" },
  legend: {
    orient: 'vertical', x: 15, y: 15,
    data: data.product
  },
  series: [{  //配置第1个图表的数据系列
    name: '会员参透率:', type: 'pie',
    radius: '80%', center: [280, '50%'],
    data: data.data
  }]
};
myChart7.on('click', function (params) {
  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});

// 使用刚指定的配置项和数据显示图表。
myChart7.setOption(option7);
window.addEventListener("resize",function(){
myChart7.resize();
});




  
// 基于准备好的dom，初始化echarts实例
var myChart6 = echarts.init(document.getElementById('echarts6'));
option6 = {
  grid: {
    left: '0',
    top: 0,
    right: '0',
    bottom: 0,
    x:0 },
  itemStyle: {
    color: 'rgba(255,255,255,0)',
  },
  tooltip: {
    show: true,
    trigger: 'item',
  },
  series: [
    {
      type: 'graph',
      layout: 'force', //引导布局
      label: {
        show: true,
        color: 'auto',
      },
      data: [{ name: '向往的生活', size: 18, color: 'rgb(131,249,103)', x: 60, y: 32 },
      { name: '甄嬛传', size: 16, color:  '#FBFE27',  x: 30, y: 50 },
      { name: '乘风破浪的姐姐', size: 18, color: '#3059F7', x: 50, y: 80 },
      { name: '欢乐喜剧人', size: 14, color: '#559399', x: 104, y: 86 },
      { name: '隐秘的角落', size: 22, color: '#FE5050',  x: 90, y: 54 },
      { name: '密室逃脱', size: 17, color: '#C36D6D', x: 200, y: 70 },
      { name: '奇葩说', size: 16, color: '#77BFFF', x: 164, y: 48 },
      { name: '快乐大本营', size: 16, color: '#3059F7', x: 174, y: 75 },
      { name: '奔跑吧', size: 20, color: '#FCD67A', x: 156, y: 30 },
      { name: '老九门', size: 15, color: '#3059F7', x: 112, y: 24 }].map((item) => ({
        name: item.name,
        //   draggable: false,
        itemStyle: {
          color: 'rgba(255,255,255,0)',
        },
        value: item.val,
        x: item.x,
        y: item.y,
        fixed: true,
        label: {
          color: item.color,
          fontSize: item.size,
        },
      })),
    },
  ],
};
myChart6.on('click', function (params) {
  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});

// 使用刚指定的配置项和数据显示图表。
myChart6.setOption(option6);
window.addEventListener("resize",function(){
myChart6.resize();
});


})})