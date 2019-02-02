var mobilelayer=layer;
layui.use(['form','jquery'],function(){
    var form = layui.form,
        //layer = parent.layer === undefined ? layui.layer : top.layer
        $ = layui.jquery;

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    
    $(document).ready(function(){
    	var pxid=getUrlParam("id");
        var code=getUrlParam("code");
        
        if(!pxid){
        	mobilelayer.open({
    		  content: '课程信息读取失败，请重试',
    		  btn: '我知道了',
    		  shadeClose: false,
    		  yes: function(){
    			  window.location.href="signfail.html";
    		  }
    		});
        }else if(!code){
        	mobilelayer.open({
      		  content: '授权信息读取失败，请重试',
      		  btn: '我知道了',
      		  shadeClose: false,
      		  yes: function(){
      			  window.location.href="signfail.html";
      		  }
      		});
        }else{
        	$.ajax({
                url: "../../SignWeb/SignValid/" + pxid,
                dataType: 'json',
                success: function (result) {
                	if(!result){
                		mobilelayer.open({
            			  content: '当前时间不在该课程签到时间内，不可签到',
            			  btn: '我知道了',
            			  shadeClose: false,
            			  yes: function(){
            				  window.location.href="signtime.html";
            			  }
            			});
                	}else{
                		$.ajax({
                            url: "../../SignWeb/LoginWX?pxID="+pxid+"&sCode="+code,
                            dataType: 'json',
                            success: function (result) {
                            	if(result.code=="0"){
                                	mobilelayer.open({
                          			  content: '签到成功！',
                          			  btn: '确定',
                          			  shadeClose: false,
                          			  yes: function(){
                          				window.location.href="signsuccess.html";
                          			  }
                          			});
                                }
                                else if (result.code=="1"){
                                	mobilelayer.open({
                          			  content: '已签到过，不可重复签到',
                          			  btn: '确定',
                          			  shadeClose: false,
                          			  yes: function(){
                          				window.location.href="signsuccess.html";
                          			  }
                          			});
                                }
                                else{
                                	mobilelayer.open({
                          			  content: '签到出错，请扫码重试',
                          			  btn: '我知道了',
                          			  shadeClose: false,
                          			  yes: function(index){
                          				window.location.href="signfail.html";
                	      			  }
                          			});
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert(jqXHR.responseText);
                            }
                        });
                	}
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText);
                }
            });
        }
    })

})
