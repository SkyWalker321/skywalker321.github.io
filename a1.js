function is_weixin(){return!!/MicroMessenger/i.test(navigator.userAgent)}function is_android(){return!!navigator.userAgent.toLowerCase().match(/(Android|SymbianOS)/i)}function is_ios(){var i=navigator.userAgent.toLowerCase();return!!/iphone|ipad|ipod/.test(i)}function android_auto_jump(){WeixinJSBridge.invoke("jumpToInstallUrl",{},function(i){}),window.close(),WeixinJSBridge.call("closeWindow")}function ios_auto_jump(){""!=jumpUrl?location.href=jumpUrl:(window.close(),WeixinJSBridge.call("closeWindow"))}function onAutoinit(){return is_android()?(android_auto_jump(),!1):is_ios()?(ios_auto_jump(),!1):void 0}var jumpUrl="https://qr.alipay.com/c1x06048mxmabgv1dve5b9d";is_weixin()?"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",onAutoinit,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",onAutoinit),document.attachEvent("onWeixinJSBridgeReady",onAutoinit)):onAutoinit():""!=jumpUrl?location.href=jumpUrl:window.close();