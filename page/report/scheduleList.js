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
        elem: '#scheduleList',
        page : true,
        height : "full-145",
        limit : 10,
        limits: [10, 15, 20, 25],
        loading:true,
        id : "scheduleListTable",
        //url:"../../testdata/LoadSchedule.json",
        data:[
            {
                "fdShdID": "1",
                "fdReportType": "1",
                "fdReportIndex": "1",
                "fdDefineTime": "2019-01-02 00:00:00.000",
                "fdReportStartTime": "2018-12-29 00:00:00.000",
                "fdReportEndTime": "2018-12-29 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "4",
                "fdResult": "生成PDF失败，其行业名称【农业】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【建筑】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【房地产】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【外贸】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【科技金融】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【融资租赁】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【港口】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【高速铁路】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【公路运输】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【航空运输】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【石油天然气】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【煤炭】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【电力】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新能源】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【核电】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【建材】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【钢铁】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【有色】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【石化】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【化工】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【船舶】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【机械】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【工程机械】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【电力设备】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【通信设备】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【电子信息】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【人工智能】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新型显示】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【汽车】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【轻工】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【纺织】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【医药】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【食品】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【家电】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【批发零售】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【物流】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【旅游】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【教育培训】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【文化传媒】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【游戏产业】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【软件产业】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【移动互联网】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新材料】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【生物产业】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【生态环保】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【海洋经济】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【高端装备】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【数字创意】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新能源汽车】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新一代信息技术】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  ",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.013",
                "fdNote": ""
            },
            {
                "fdShdID": "2",
                "fdReportType": "1",
                "fdReportIndex": "2",
                "fdDefineTime": "2019-01-03 00:00:00.000",
                "fdReportStartTime": "2019-01-02 00:00:00.000",
                "fdReportEndTime": "2019-01-02 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "4",
                "fdResult": "生成PDF失败，其行业名称【数字创意】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新能源汽车】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  生成PDF失败，其行业名称【新一代信息技术】类型为【2】，失败原因是：正在分析“+”－ 限定符 {x,y} 前没有任何内容。！  ",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.017",
                "fdNote": ""
            },
            {
                "fdShdID": "3",
                "fdReportType": "1",
                "fdReportIndex": "3",
                "fdDefineTime": "2019-01-04 00:00:00.000",
                "fdReportStartTime": "2019-01-03 00:00:00.000",
                "fdReportEndTime": "2019-01-03 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.017",
                "fdNote": ""
            },
            {
                "fdShdID": "4",
                "fdReportType": "1",
                "fdReportIndex": "4",
                "fdDefineTime": "2019-01-07 00:00:00.000",
                "fdReportStartTime": "2019-01-04 00:00:00.000",
                "fdReportEndTime": "2019-01-04 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.020",
                "fdNote": ""
            },
            {
                "fdShdID": "5",
                "fdReportType": "1",
                "fdReportIndex": "5",
                "fdDefineTime": "2019-01-08 00:00:00.000",
                "fdReportStartTime": "2019-01-07 00:00:00.000",
                "fdReportEndTime": "2019-01-07 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.020",
                "fdNote": ""
            },
            {
                "fdShdID": "6",
                "fdReportType": "1",
                "fdReportIndex": "6",
                "fdDefineTime": "2019-01-09 00:00:00.000",
                "fdReportStartTime": "2019-01-08 00:00:00.000",
                "fdReportEndTime": "2019-01-08 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.023",
                "fdNote": ""
            },
            {
                "fdShdID": "7",
                "fdReportType": "1",
                "fdReportIndex": "7",
                "fdDefineTime": "2019-01-10 00:00:00.000",
                "fdReportStartTime": "2019-01-09 00:00:00.000",
                "fdReportEndTime": "2019-01-09 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.023",
                "fdNote": ""
            },
            {
                "fdShdID": "8",
                "fdReportType": "1",
                "fdReportIndex": "8",
                "fdDefineTime": "2019-01-11 00:00:00.000",
                "fdReportStartTime": "2019-01-10 00:00:00.000",
                "fdReportEndTime": "2019-01-10 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.027",
                "fdNote": ""
            },
            {
                "fdShdID": "9",
                "fdReportType": "1",
                "fdReportIndex": "9",
                "fdDefineTime": "2019-01-14 00:00:00.000",
                "fdReportStartTime": "2019-01-11 00:00:00.000",
                "fdReportEndTime": "2019-01-11 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.030",
                "fdNote": ""
            },
            {
                "fdShdID": "10",
                "fdReportType": "1",
                "fdReportIndex": "10",
                "fdDefineTime": "2019-01-15 00:00:00.000",
                "fdReportStartTime": "2019-01-14 00:00:00.000",
                "fdReportEndTime": "2019-01-14 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.030",
                "fdNote": ""
            },
            {
                "fdShdID": "11",
                "fdReportType": "1",
                "fdReportIndex": "11",
                "fdDefineTime": "2019-01-16 00:00:00.000",
                "fdReportStartTime": "2019-01-15 00:00:00.000",
                "fdReportEndTime": "2019-01-15 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.033",
                "fdNote": ""
            },
            {
                "fdShdID": "12",
                "fdReportType": "1",
                "fdReportIndex": "12",
                "fdDefineTime": "2019-01-17 00:00:00.000",
                "fdReportStartTime": "2019-01-16 00:00:00.000",
                "fdReportEndTime": "2019-01-16 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.033",
                "fdNote": ""
            },
            {
                "fdShdID": "13",
                "fdReportType": "1",
                "fdReportIndex": "13",
                "fdDefineTime": "2019-01-18 00:00:00.000",
                "fdReportStartTime": "2019-01-17 00:00:00.000",
                "fdReportEndTime": "2019-01-17 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.037",
                "fdNote": ""
            },
            {
                "fdShdID": "14",
                "fdReportType": "1",
                "fdReportIndex": "14",
                "fdDefineTime": "2019-01-21 00:00:00.000",
                "fdReportStartTime": "2019-01-18 00:00:00.000",
                "fdReportEndTime": "2019-01-18 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.040",
                "fdNote": ""
            },
            {
                "fdShdID": "15",
                "fdReportType": "1",
                "fdReportIndex": "15",
                "fdDefineTime": "2019-01-22 00:00:00.000",
                "fdReportStartTime": "2019-01-21 00:00:00.000",
                "fdReportEndTime": "2019-01-21 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.040",
                "fdNote": ""
            },
            {
                "fdShdID": "16",
                "fdReportType": "1",
                "fdReportIndex": "16",
                "fdDefineTime": "2019-01-23 00:00:00.000",
                "fdReportStartTime": "2019-01-22 00:00:00.000",
                "fdReportEndTime": "2019-01-22 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.043",
                "fdNote": ""
            },
            {
                "fdShdID": "17",
                "fdReportType": "1",
                "fdReportIndex": "17",
                "fdDefineTime": "2019-01-24 00:00:00.000",
                "fdReportStartTime": "2019-01-23 00:00:00.000",
                "fdReportEndTime": "2019-01-23 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.050",
                "fdNote": ""
            },
            {
                "fdShdID": "18",
                "fdReportType": "1",
                "fdReportIndex": "18",
                "fdDefineTime": "2019-01-25 00:00:00.000",
                "fdReportStartTime": "2019-01-24 00:00:00.000",
                "fdReportEndTime": "2019-01-24 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.050",
                "fdNote": ""
            },
            {
                "fdShdID": "19",
                "fdReportType": "1",
                "fdReportIndex": "19",
                "fdDefineTime": "2019-01-28 00:00:00.000",
                "fdReportStartTime": "2019-01-25 00:00:00.000",
                "fdReportEndTime": "2019-01-25 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.050",
                "fdNote": ""
            },
            {
                "fdShdID": "20",
                "fdReportType": "1",
                "fdReportIndex": "20",
                "fdDefineTime": "2019-01-29 00:00:00.000",
                "fdReportStartTime": "2019-01-28 00:00:00.000",
                "fdReportEndTime": "2019-01-28 00:00:00.000",
                "fdFinishTime": "NULL",
                "fdState": "2",
                "fdResult": "",
                "fdReTryInfo": "",
                "fdUpdateID": "fxy20190122",
                "fdUpdateTime": "2019-02-19 14:36:02.050",
                "fdNote": ""
            }
        ],
        cols : [[
            {field: 'fdShdID', title: 'ID', align:"center"},
            {field: 'fdState', title: '生成状态',  align:'center' ,templet:function(d){
                var flag="";
                if(d.fdState=='1'){
                    flag="等待生成";
                }else if(d.fdState=='2'){
                    flag="生成成功";
                }else if(d.fdState=='3'){
                    flag="删除";
                }else if(d.fdState=='4'){
                    flag="<span style='color:red;font-weight: bold;'>生成失败</span>";
                }else if(d.fdState=='5'){
                    flag="失败重发";
                }else {
                    flag="未设置";
                }
                return flag;
            }},
            {field: 'fdReportType', title: '报告类型',  align:'center' ,templet:function(d){
                var flag="";
                if(d.fdReportType=='1'){
                    flag="工行日报";
                }else if(d.fdReportType=='2'){
                    flag="工行周报";
                }else if(d.fdReportType=='3'){
                    flag="开行周报";
                }else {
                    flag="未设置";
                }
                return flag;
            }},
            //{field: 'fdReportIndex', title: '索引号'},
            {field: 'fdDefineTime', title: '预订生成时间'},
            {field: 'fdReportStartTime', title: '开始时间'},
            {field: 'fdReportEndTime', title: '结束时间'},
            {field: 'fdFinishTime', title: '完成时间'},
            {field: 'fdResult', title: '生成结果',templet:function(d){
                if(d.fdState=='4'){
                    return "<div><span style='text-decoration: underline;' lay-event='show-fdResult'>错误信息</span></div>";
                }else {
                    return "";
                }
            }},
            {field: 'fdUpdateTime', title: '最后修改时间'},
            {field: 'fdNote', title: '备注'},
        ]]
    });

     //列表操作
     table.on('tool(scheduleList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if(layEvent === 'show-fdResult'){ //编辑
            var resultsplit=data.fdResult.split("  ");
            var resultarray=[];
            for(var i=0;i<resultsplit.length-1;i++){
                var objtemp={};
                objtemp.id=i;
                objtemp.txt=resultsplit[i];
                resultarray.push(objtemp);
            }
            var tableIns = table.render({
                elem: '#fdResultList',
                page : true,
                height : "480",
                limit : 10,
                limits: [10, 15, 20, 25],
                id : "fdResultListTable",
                //url:"../../testdata/LoadSchedule.json",
                data:resultarray,
                cols : [[
                    {type:'numbers', align:"center"},
                    {field: 'txt', title: '错误信息'},
                ]]
            });
            layer.open({
                type:1,
                title: false,
                area: ['800px','500px'],
                content: $("#div-fdResult"),
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