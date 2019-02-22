layui.use(['form', 'layer', 'laydate', 'table', 'laytpl', 'element',], function () {
    var form = layui.form,
        //layer = parent.layer === undefined ? layui.layer : top.layer,
        layer = layui.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        table = layui.table,
        laytpl = layui.laytpl,
        element = layui.element;

    $(document).ready(function(){
        
    })

    //新闻列表
    var tableIns = table.render({
        elem: '#reportList',
        page : true,
        height : "full-145",
        limit : 10,
        limits: [10, 15, 20, 25],
        loading:true,
        id : "reportListTable",
        //url:"../../testdata/LoadSchedule.json",
        data:[
            {
                "fdReportID": "1",
                "fdType": "1",
                "fdHYName": "农业",
                "fdGHID": "1",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:11.030",
                "fdNote": ""
            },
            {
                "fdReportID": "2",
                "fdType": "1",
                "fdHYName": "建筑",
                "fdGHID": "2",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.763",
                "fdNote": ""
            },
            {
                "fdReportID": "3",
                "fdType": "1",
                "fdHYName": "房地产",
                "fdGHID": "3",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.767",
                "fdNote": ""
            },
            {
                "fdReportID": "4",
                "fdType": "1",
                "fdHYName": "外贸",
                "fdGHID": "4",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.770",
                "fdNote": ""
            },
            {
                "fdReportID": "5",
                "fdType": "1",
                "fdHYName": "科技金融",
                "fdGHID": "5",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.770",
                "fdNote": ""
            },
            {
                "fdReportID": "6",
                "fdType": "1",
                "fdHYName": "融资租赁",
                "fdGHID": "6",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.773",
                "fdNote": ""
            },
            {
                "fdReportID": "7",
                "fdType": "1",
                "fdHYName": "港口",
                "fdGHID": "7",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.777",
                "fdNote": ""
            },
            {
                "fdReportID": "8",
                "fdType": "1",
                "fdHYName": "高速铁路",
                "fdGHID": "8",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.780",
                "fdNote": ""
            },
            {
                "fdReportID": "9",
                "fdType": "1",
                "fdHYName": "公路运输",
                "fdGHID": "9",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.787",
                "fdNote": ""
            },
            {
                "fdReportID": "10",
                "fdType": "1",
                "fdHYName": "航空运输",
                "fdGHID": "7",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.790",
                "fdNote": ""
            },
            {
                "fdReportID": "11",
                "fdType": "1",
                "fdHYName": "石油天然气",
                "fdGHID": "10",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.793",
                "fdNote": ""
            },
            {
                "fdReportID": "12",
                "fdType": "1",
                "fdHYName": "煤炭",
                "fdGHID": "11",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.797",
                "fdNote": ""
            },
            {
                "fdReportID": "13",
                "fdType": "1",
                "fdHYName": "电力",
                "fdGHID": "12",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.797",
                "fdNote": ""
            },
            {
                "fdReportID": "14",
                "fdType": "1",
                "fdHYName": "新能源",
                "fdGHID": "13",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.803",
                "fdNote": ""
            },
            {
                "fdReportID": "15",
                "fdType": "1",
                "fdHYName": "核电",
                "fdGHID": "13",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.807",
                "fdNote": ""
            },
            {
                "fdReportID": "16",
                "fdType": "1",
                "fdHYName": "建材",
                "fdGHID": "14",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.807",
                "fdNote": ""
            },
            {
                "fdReportID": "17",
                "fdType": "1",
                "fdHYName": "钢铁",
                "fdGHID": "15",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.810",
                "fdNote": ""
            },
            {
                "fdReportID": "18",
                "fdType": "1",
                "fdHYName": "有色",
                "fdGHID": "16",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.817",
                "fdNote": ""
            },
            {
                "fdReportID": "19",
                "fdType": "1",
                "fdHYName": "石化",
                "fdGHID": "17",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.820",
                "fdNote": ""
            },
            {
                "fdReportID": "20",
                "fdType": "1",
                "fdHYName": "化工",
                "fdGHID": "17",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.823",
                "fdNote": ""
            },
            {
                "fdReportID": "21",
                "fdType": "1",
                "fdHYName": "船舶",
                "fdGHID": "18",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.827",
                "fdNote": ""
            },
            {
                "fdReportID": "22",
                "fdType": "1",
                "fdHYName": "机械",
                "fdGHID": "19",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.830",
                "fdNote": ""
            },
            {
                "fdReportID": "23",
                "fdType": "1",
                "fdHYName": "工程机械",
                "fdGHID": "19",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.833",
                "fdNote": ""
            },
            {
                "fdReportID": "24",
                "fdType": "1",
                "fdHYName": "电力设备",
                "fdGHID": "20",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.837",
                "fdNote": ""
            },
            {
                "fdReportID": "25",
                "fdType": "1",
                "fdHYName": "通信设备",
                "fdGHID": "21",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.840",
                "fdNote": ""
            },
            {
                "fdReportID": "26",
                "fdType": "1",
                "fdHYName": "电子信息",
                "fdGHID": "22",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.840",
                "fdNote": ""
            },
            {
                "fdReportID": "27",
                "fdType": "1",
                "fdHYName": "人工智能",
                "fdGHID": "22",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.843",
                "fdNote": ""
            },
            {
                "fdReportID": "28",
                "fdType": "1",
                "fdHYName": "新型显示",
                "fdGHID": "23",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.850",
                "fdNote": ""
            },
            {
                "fdReportID": "29",
                "fdType": "1",
                "fdHYName": "汽车",
                "fdGHID": "24",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.850",
                "fdNote": ""
            },
            {
                "fdReportID": "30",
                "fdType": "1",
                "fdHYName": "轻工",
                "fdGHID": "25",
                "fdCount": "1",
                "fdState": "1",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-01-22 15:06:13.853",
                "fdNote": ""
            }
        ],
        cols : [[
            {field: 'fdReportID', title: 'ID', align:"center"},
            {field: 'fdType', title: '报告类型',  align:'center' ,templet:function(d){
                var flag="";
                if(d.fdType=='1'){
                    flag="日报";
                }else if(d.fdType=='2'){
                    flag="周报";
                }else {
                    flag="未设置";
                }
                return flag;
            }},
            //{field: 'fdReportIndex', title: '索引号'},
            {field: 'fdHYName', title: '行业名称'},
            //{field: 'fdGHID', title: '工行栏目ID'},
            {field: 'fdCount', title: '报告最大使用稿件数量',width:180,toolbar: '<div><div lay-event="change-fdCount">{{d.fdCount}}</span></div></div>'},
            {field: 'fdState', title: '状态',align:'center' ,templet:function(d){
                var flag="";
                if(d.fdState=='1'){
                    flag="正常";
                }else if(d.fdState=='2'){
                    flag="停用";
                }else if(d.fdState=='3'){
                    flag="删除";
                }else {
                    flag="未设置";
                }
                return flag;
            }},
            {field: 'fdUpdateTime', title: '最后修改时间'},
            {field: 'fdNote', title: '备注'},
        ]]
    });

     //列表操作
     table.on('tool(reportList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if(layEvent === 'change-fdCount'){ //编辑
            layer.prompt({
                value: data.fdCount,
                title: '请输入报告最大使用稿件数量',
            },function(value, indexprompt, elem){
                layer.confirm('确定将ID='+data.fdReportID+'的报告的<br>最大使用稿件数量改为 '+value+' ?', 
                {
                    icon: 3, 
                    title:'请确认'
                }, 
                function(indexcomfirm){
                    //do something
                    
                    layer.close(indexcomfirm);
                    layer.close(indexprompt);
                }); 
            });
        }  
    });

    
    
    // laydate.render({
    //     elem: '#select-tfdpublishtimebegin'
    // });

    // laydate.render({
    //     elem: '#select-tfdpublishtimeend'
    // });

    

    //搜索
    $(".search_btn").on("click",function(){
        // if($(".searchVal").val() != ''){
        
        //地区选项
        var CityCode = '';
        var codesheng = $(".select-sheng").val();
        var codeshi = $(".select-shi").val();
        var codequxian = $(".select-quxian").val();
        if (codequxian != null && codequxian != "") {
            CityCode = codequxian;
        }
        else {
            if (codeshi != null && codeshi != "") {
                if(codeshi=="0")
                {
                    CityCode=codesheng+"|0";
                }
                else
                {
                    CityCode = codeshi;
                }
            }
            else {
                if (codesheng != null && codesheng != "") {
                    CityCode = codesheng;
                }
            }
        }

        table.reload("newsListTable",{
            url: '../../DataServer/TreeData.aspx?method=SearchNews',
            loading: true,
            //url:'../../testdata/LoadNews.json',
            where:{
                //fdnodeid: 'f729396dac5a48e9bf289d4d1a85eab3',
                key: $(".searchVal").val(),
                fdnodeid:$("#select-tree").attr('fdnodeid'),
                CityCode:CityCode,
                ZHongYao:$(".select-zhengfumian").val(),
                fdaproveflag_slt:$(".select-fdapproveflag").val(),
                selectInChannel:$(".select-inchannel").val(),
                SelectInSubProject:$(".select-insubproject").val(),
                SelectType:$(".select-type").val(),
                infosource:$("#select-infosource").val(),
                editor:$(".select-editor").val(),
                approver: $(".select-approver").val(),
                timetype: $(".select-timetype").val(),
                tfdpublishtimebegin:$("#select-tfdpublishtimebegin").val(),
                tfdpublishtimeend:$("#select-tfdpublishtimeend").val(),
                sortOrder:'',
                isPriorityQueryInfoSources:true,
            },
            page: {
                curr: 1 //重新从第 1 页开始
            },
        })
        // }else{
        //     layer.msg("请输入搜索的内容");
        // }
    });

})