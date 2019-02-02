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
       url:'../../SignWeb/GetSignList',
       //url:'../../testdata/LoadSigns.json',
        where:{
        	iPxID:"-1",
        	sSortField: "fdUpdateTime",
            bIsDec:true,
        },
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
           {field: 'fdID', title: 'ID', width:60, align:"center"},
           {field: 'pxinfos.fdPXName', title: '培训', minWidth:500,templet:'<div>{{ d.pxinfos.fdPXName }}</div>'},
           { field: 'students.fdStudentName', title: '学员', align: 'center',templet:'<div>{{ d.students.fdStudentName }}</div>'},
           {field: 'fdState', title: '签到状态',  align:'center' ,templet:function(d){
               var flag="";
               if(d.fdPXType==1){
                   flag="正常";
               }else if(d.fdPXType==3){
                   flag="审核删除";
               }else {
                   flag="正常";
               }
               return flag;
           }},
           {field: 'fdUpdateTime', title: '签到结束时间', align:'center', minWidth:120},
       ]]
   });
   
 //搜索
   $(".search_btn").on("click",function(){
       if($(".searchVal").val() == ''){
    	   layer.msg("请填写需要搜索的培训ID！");
    	   return false;
       }
       else if(!/^[0-9]*$/.test($(".searchVal").val())){
    	   layer.msg("只可用数字进行查询！");
    	   return false;
       }

       table.reload("newsListTable",{
           url: '../../SignWeb/GetSignList',
           where:{
        	   iPxID:$(".searchVal").val(),
        	   sSortField: "fdUpdateTime",
               bIsDec:true,
           },
           page: {
               curr: 1 //重新从第 1 页开始
           },
       })
   });

})