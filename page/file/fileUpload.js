layui.config({
    base: '../../js/' //此处路径请自行处理, 可以使用绝对路径
}).extend({
    "cookie": 'cookie'
});
layui.use(['form', 'layer', 'upload', 'cookie'], function () {
    var form = layui.form
        layer = parent.layer === undefined ? layui.layer : top.layer,
        laypage = layui.laypage,
        upload = layui.upload,
        $ = layui.jquery;

        //if ((!$.cookie('signusername')) || (!$.cookie('signpassword'))) {
        //    alert("请登录！");
        //    window.top.location.href = "../../page/login/login.html";
        //}
    
        upload.render({ //允许上传的文件后缀
            elem: '#uploadPicAtt'
            , url: '../../service/UpLoadService.ashx?method=savefile'
            ,accept: 'file' //普通文件
            , exts: 'zip' //只允许上传压缩文件
            , before: function (obj) {
                layer.load(); //上传loading
            }
            , done: function (res) {
                layer.closeAll('loading');
                $("#resultTxt").html(JSON.stringify(res));
            }
            , error: function (index, upload) {
                layer.closeAll('loading'); //关闭loading
                $("#resultTxt").html("接口调用失败");
            }
        });

        
        upload.render({ //允许上传的文件后缀
            elem: '#uploadPicAtt_hangyedata'
        , url: '../../service/UpLoadService.ashx?method=savefileforexceldata'
        , accept: 'file' //普通文件
        , exts: 'zip' //只允许上传压缩文件
        , before: function (obj) {
            layer.load(); //上传loading
        }
        , done: function (res) {
            layer.closeAll('loading');
            $("#resultTxt_hangyedata").html(JSON.stringify(res));
        }
        , error: function (index, upload) {
            layer.closeAll('loading'); //关闭loading
            $("#resultTxt_hangyedata").html("接口调用失败");
        }
        });
    

})
