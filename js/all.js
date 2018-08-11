 $(function() {
 	/*去掉微信浏览器前进、后退和刷新底部按钮*/
 	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideToolbar');
    WeixinJSBridge.call('hideOptionMenu');
});
 	/*去掉微信浏览器前进、后退和刷新底部按钮end*/
			/*顶部广告*/
			var top_bann_left = parseInt($(".top_banner p").css("left"))
			var vw = parseInt($(".top_banner p").width()) 
			var fonew = parseInt($(window).width()) 
			setInterval(function() {
				//console.log(top_bann_left)
				$(".top_banner p").css("left", top_bann_left--)
				if(top_bann_left < -vw) {
					top_bann_left = fonew
				}
			}, 10)
			
			/*顶部广告end*/
			/*回到顶部*/
 	 var backButton=$('.back_to_top');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    }
    backButton.on('click', backToTop);
 
    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height()){
        	 backButton.fadeIn();
        }else{
        	   backButton.fadeOut();
        	   if ($(window).scrollTop()>100) {
        	   	$('.kefu').css("top","0.2rem")
        	   }else {
        	   	$('.kefu').css("top","0.8rem")
        	   }
        }
         
    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
			/*回到顶部end*/
			/*点击客服跳转*/
			$('.kefu').on("click",function(){
				window.location.href = "complain.html"
			})
			/*点击客服跳转end*/
			
/*点击音频停止播放*/
var playing = true
if($("#alert_sound").length>0){
	$("#alert_sound").off("click");
	$("#alert_sound").children().eq(0).addClass("rotates")
	$("#alert_sound").on("click",function () {
		if(playing){
			$("#alert_sound").children()[0].pause();
			$("#alert_sound").css("animationPlayState","paused")
			playing = false
		}else {
			$("#alert_sound").children()[0].play();
			$("#alert_sound").css("animationPlayState","running")
			playing = true
		}
		
	});
}
/*点击音频停止播放end*/
			
			
			
			
			/*存放ajax请求地址*/
  function routeURL() {}
  routeURL.fn = routeURL.prototype = {
    constructor: routeURL,
    author: 'Lokie'
  };
  /* 可扩展功能 */
  routeURL.extend = routeURL.fn.extend = function( obj ) {
    for ( var k in obj ) {
      // 一般还会进行一个判断 if obj.hasOwnProperty( k )
      // 这里只是简单的 工具类，先简单来写
      this[ k ] = obj[ k ];
    }
  };
  /* 提出 URL 以备 提取接口 可以集中管理 */
  routeURL.extend( {
    baseUrl : 'http://192.168.0.104'
  });
  /* 登录等地址管理 */
  routeURL.extend( {
    // 获取验证码   mobile	 验证手机号
    captchaphone: routeURL.baseUrl +'/jnetcms/jilv/captchaphone',

  });
  window.routeURL = routeURL; /* 向外暴露 routeURL */
			/*存放ajax请求地址end*/
			
			

 })