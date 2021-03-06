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

    //$(document).ready(function(){
        //AreaCity_load();//加载地区选项
        //BackUserload();//加载编辑人员选项
    //})
    
    if((!$.cookie('signusername'))||(!$.cookie('signpassword'))){
		alert("请登录！");
		window.top.location.href="../../page/login/login.html";
	}

    var qrcodeinit = new QRCode("qrcodepic");

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
        url:'../../Pxinfo/GetPxList',
        //url:'../../testdata/LoadTrains.json',
        where:{
        	sSortField: "fdSignStartTime",
        	bIsDec:true,
        },
        request: {
            pageName: 'iStartNum', //页码的参数名称，默认：page
            limitName: 'iPageSize' //每页数据量的参数名，默认：limit
        },
        cols : [[
            {title: '操作',width:175, templet:'#newsListBar',fixed:"left",align:"center"},
            {field: 'fdID', title: 'ID', width:60, align:"center"},
            {field: 'fdPXName', title: '名称', width:200},
            { field: 'fdClassHours', title: '学时', align: 'center' },
            { field: 'fdPXCp', title: '举办单位', align: 'center' },
            {field: 'fdSignStartTime', title: '签到开始时间', align:'center', minWidth:120},
            {field: 'fdSignEndTime', title: '签到结束时间', align:'center', minWidth:120},
            {field: 'fdPXType', title: '培训类型',  align:'center' ,templet:function(d){
                var flag="";
                if(d.fdPXType==1){
                    flag="普通培训";
                }else if(d.fdPXType==2){
                    flag="委外培训";
                }else {
                    flag="未设置";
                }
                return flag;
            }},
            { field: 'fdNote', title: '备注', align: 'center'},
        ]]
    });

     //列表操作
     table.on('tool(newsList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if(layEvent === 'edit'){ //编辑
            addNews(data);
        } else if(layEvent === 'del'){ //删除
            layer.confirm('确定删除此培训？',{icon:3, title:'提示信息'},function(index){
                $.ajax({
       	        	 url: "../../Pxinfo/RemovePx/"+data.fdID,
       	             dataType: 'json',
       	             success: function (result) {
       	            	 if(result.code=="0"){
       	            		 layer.close(index);
       		                 top.layer.msg("培训删除成功！");
       		                 tableIns.reload();
       	            	 }else{
       		                 layer.msg("删除失败，请重试！");
       		                 tableIns.reload();
       	            	 }
       	                 
       	             },
       	             error: function (jqXHR, textStatus, errorThrown) {
       	            	 layer.close(index);
       	                 alert(jqXHR.responseText);
       	             }
       	         });
            });
        } else if(layEvent === 'look'){ //二维码
            qrcodeinit.makeCode("http://203.207.118.15:8080/QDcms/page/sign/sign.html?id="+data.fdID);
        	//qrcodeinit.makeCode("http://192.168.194.136:8088/QDcms/page/sign/sign.html?id="+data.fdID);

            layui.layer.open({
                type: 1,
                title: false,
                content: $("#div-qrcode")
            });
        }
    });
    
    laydate.render({
        elem: '#select-fdStartTime'
    });

    laydate.render({
        elem: '#select-fdEndTime'
    });

//    //搜索
//    $(".search_btn").on("click",function(){
//        // if($(".searchVal").val() != ''){
//        
//        //地区选项
//        var CityCode = '';
//        var codesheng = $(".select-sheng").val();
//        var codeshi = $(".select-shi").val();
//        var codequxian = $(".select-quxian").val();
//        if (codequxian != null && codequxian != "") {
//            CityCode = codequxian;
//        }
//        else {
//            if (codeshi != null && codeshi != "") {
//                if(codeshi=="0")
//                {
//                    CityCode=codesheng+"|0";
//                }
//                else
//                {
//                    CityCode = codeshi;
//                }
//            }
//            else {
//                if (codesheng != null && codesheng != "") {
//                    CityCode = codesheng;
//                }
//            }
//        }
//
//        table.reload("newsListTable",{
//            //url: '../../DataServer/TreeData.aspx?method=SearchNews',
//            loading: true,
//            url:'../../testdata/LoadTrains.json',
//            where:{
//                //fdnodeid: 'f729396dac5a48e9bf289d4d1a85eab3',
//                key: $(".searchVal").val(),
//                fdnodeid:$("#select-tree").attr('fdnodeid'),
//                CityCode:CityCode,
//                ZHongYao:$(".select-zhengfumian").val(),
//                fdaproveflag_slt:$(".select-fdapproveflag").val(),
//                selectInChannel:$(".select-inchannel").val(),
//                SelectInSubProject:$(".select-insubproject").val(),
//                SelectType:$(".select-type").val(),
//                infosource:$("#select-infosource").val(),
//                editor:$(".select-editor").val(),
//                approver: $(".select-approver").val(),
//                timetype: $(".select-timetype").val(),
//                tfdpublishtimebegin:$("#select-tfdpublishtimebegin").val(),
//                tfdpublishtimeend:$("#select-tfdpublishtimeend").val(),
//                sortOrder:'',
//                isPriorityQueryInfoSources:true,
//            },
//            page: {
//                curr: 1 //重新从第 1 页开始
//            },
//        })
//        // }else{
//        //     layer.msg("请输入搜索的内容");
//        // }
//    });


    //添加文章
    function addNews(edit) {
    	var title="添加培训";
    	if (edit){
    		title="修改培训";
    	}
        var index = layer.open({
            title: title,
            type: 2,
            content: "trainsAdd.html",
            success: function (layero, index) {
                var body = layer.getChildFrame('body', index);
                if (edit) {
                    body.find("#fdID").val(edit.fdID);
                    // body.find(".newsName").val(edit.newsName);
                    // body.find(".abstract").val(edit.abstract);
                    // body.find(".thumbImg").attr("src",edit.newsImg);
                    // body.find("#news_content").val(edit.content);
                    // body.find(".newsStatus select").val(edit.newsStatus);
                    // body.find(".openness input[name='openness'][title='"+edit.newsLook+"']").prop("checked","checked");
                    // body.find(".newsTop input[name='newsTop']").prop("checked",edit.newsTop);
                    // form.render();
                }
                setTimeout(function () {
                    layer.tips('点击此处返回培训列表', '.layui-layer-setwin .layui-layer-close', {
                        tips: 3
                    });
                }, 500)
            },

        })
        layer.full(index);
        //改变窗口大小时，重置弹窗的宽高，防止超出可视区域（如F12调出debug的操作）
        $(window).on("resize", function () {
            layer.full(index);
        })
    }
    $(".addNews_btn").click(function () {
        addNews();
    })

    
    

    

   

})