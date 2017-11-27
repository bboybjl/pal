// $(document).ready(function () {
//
//
//     // 检测到微信就提醒
//     var btn1_remind = document.getElementById('loadingAppGo');//下载一
//     weixinTip(btn1_remind);
//
//
//
// });
//
// function weixinTip(ele){
//     var ua = navigator.userAgent;
//     var isWeixin = !!/MicroMessenger/i.test(ua);
//         if(isWeixin){
//             ele.onclick=function(e){
//                  e.preventDefault();
//                       e.stopPropagation();
//                 //alert(8)
//                 window.event? window.event.returnValue = false : e.preventDefault();
//                 document.getElementById('JweixinTip').style.display='block';
//             }
//                 document.getElementById('JweixinTip').onclick=function(){
//                     this.style.display='none';
//                 }
//         }
// }