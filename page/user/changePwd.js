layui.config({
    base: '../../js/' //此处路径请自行处理, 可以使用绝对路径
}).extend({
    "cookie": 'cookie'
});
layui.use(['form','layer','laydate','table','laytpl','cookie'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery;

    if((!$.cookie('signusername'))||(!$.cookie('signpassword'))){
        alert("请登录！");
        window.top.location.href="../../page/login/login.html";
    }
    
    var username=$.cookie('signusername');
    var password=$.cookie('signpassword');
    
    $("#username").val(username);
    
    //添加验证规则
    form.verify({
        oldPwd : function(value, item){
            if(value != password){
                return "密码错误，请重新输入！";
            }
        },
//        newPwd : function(value, item){
//            if(value.length < 6){
//                return "密码长度不能小于6位";
//            }
//        },
        confirmPwd : function(value, item){
            if(!new RegExp($("#newPwd").val()).test(value)){
                return "两次输入密码不一致，请重新输入！";
            }
        }
    })
    
    form.on("submit(changepassword)",function(data){
    //$("#changepassword").click(function(data){
    	$.ajax({
       	 	url: "../../UserApi/ChangePassword",
       	 	//url: "../../DataServer/TreeData.aspx?method=UpdateArticle",
            type: 'post',
            dataType: 'json',
            //contentType:'application/json; charset=utf-8',
            data: {
            	userID:username,
            	pwd:$("#newPwd").val(),
            },
            success: function (result) {
				 if(result){
				     layer.msg("密码修改成功！");
				     $.cookie('signusername', username, { expires: 7 , path: '/QDcms'});
				     $.cookie('signpassword', $("#newPwd").val(), { expires: 7 , path: '/QDcms'});
				     location.reload();
				 }else{
				     layer.msg("修改失败，请重试！");
				 }
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }
        })
	});

})