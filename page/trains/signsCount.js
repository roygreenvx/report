layui.config({
    base: '../../js/' //此处路径请自行处理, 可以使用绝对路径
}).extend({
    "cookie": 'cookie'
});
layui.use(['form', 'layer', 'laydate', 'table','cookie'], function () {
   var form = layui.form,
       //layer = parent.layer === undefined ? layui.layer : top.layer,
       layer = layui.layer,
       $ = layui.jquery,
       laydate = layui.laydate,
       table = layui.table;

   
    if((!$.cookie('signusername'))||(!$.cookie('signpassword'))){
        alert("请登录！");
        window.top.location.href="../../page/login/login.html";
    }

    laydate.render({
        elem: '#select-starttime'
    });

    laydate.render({
        elem: '#select-endtime'
    });

   //培训列表
   var tableIns = table.render({
       elem: '#newsList',
       cellMinWidth: 95,
       page : true,
       height : "full-80",
       limit : 20,
       limits: [10, 15, 20, 25],
       loading:true,
       id : "newsListTable",
       //url:'../../SignWeb/GetSignList',
       //url:'../../testdata/LoadSigns.json',
//        where:{
//        	iPxID:"-1",
//        	sSortField: "fdUpdateTime",
//            bIsDec:true,
//        },
       request: {
           pageName: 'iStartNum', //页码的参数名称，默认：page
           limitName: 'iPageSize' //每页数据量的参数名，默认：limit
       },
       done: function(res, curr, count){
		    if(res.code=="1"){
		    	alert("需要重新登录！");
		        window.top.location.href="../../page/login/login.html";
		    }
		    else if(res.code=="2"){
		    	alert("当前用户无此功能权限！");
		    }
		  },
       cols : [[
//           {field: 'name', title: '姓名', align:"center"},
//           {field: 'count', title: '培训次数', align:"center"},
//           { field: 'totalClassHours', title: '总学时', align: 'center'},
       ]]
   });
   
 //搜索
   $(".search_btn").on("click",function(){
       if($(".select-type").val() == ''){
    	   layer.msg("请选择统计类型！");
    	   return false;
       }
       
       if($(".select-type").val() =='1'){
    	   table.reload("newsListTable",{
               url: '../../StaticWeb/GetStuStatic',
               where:{
            	   sStartTime:$("#select-starttime").val(),
            	   sEndTime: $("#select-endtime").val(),
               },
               page: {
                   curr: 1 //重新从第 1 页开始
               },
               cols : [[
                   {field: 'name', title: '姓名', align:"center"},
                   {field: 'count', title: '培训次数', align:"center"},
                   { field: 'totalClassHours', title: '总学时', align: 'center'},
               ]]
           })
       }

       
   });

})