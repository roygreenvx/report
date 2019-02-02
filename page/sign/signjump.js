//alert(navigator.userAgent);
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

    var pxid=getUrlParam("id");
    
    if(!pxid){
    	mobilelayer.open({
		  content: '课程信息读取失败，请重试',
		  btn: '我知道了',
		  shadeClose: false,
		  yes: function(){
			  window.location.href="signfail.html";
		  }
		});
    }else{
//    	mobilelayer.open({
//			  content: navigator.userAgent,
//			  btn: '我知道了',
//			  shadeClose: false,
//			  yes: function(index){
//				  mobilelayer.close(index);
//			  }
//		});
    	if(navigator.userAgent.indexOf('wxworklocal') > -1){
//        	mobilelayer.open({
//				  content: '正在使用政务微信扫码',
//				  btn: '我知道了',
//				  shadeClose: false,
//				  yes: function(index){
					  window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wl2d326d13ba&redirect_uri=http://203.207.118.15:8080/QDcms/page/sign/signbywx.html?id="+pxid+"&response_type=code&scope=snsapi_base&agentid=1000010&state=STATE#wechat_redirect";
//				  }
//			});
    		
    	}else{
//    		mobilelayer.open({
//				  content: '普通扫码',
//				  btn: '我知道了',
//				  shadeClose: false,
//				  yes: function(index){
					  window.location.href="sign.html?id="+pxid;
//				  }
//			});
    		
    	}
    }
})
