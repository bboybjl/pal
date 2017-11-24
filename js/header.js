




// 下载
var u = navigator.userAgent;

var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

var a_down=document.getElementById('loadingAppGo');

a_down.onclick=function(){

    if(isAndroid){

        this.href="http://mobileapp.jiazi-it.com/index.php?m=home&c=version&a=uploadLatestApk&aid=2";

        //alert('Android')

    }

    else if(isiOS){

        this.href="itms-apps://itunes.apple.com/app/id1182185340";

        //alert('ios')

    }

    else{

        this.href="http://mobileapp.jiazi-it.com/index.php?m=home&c=version&a=uploadLatestApk&aid=2";

        //alert(89)

    }

};

$(function () {
    $('.navShow').click(function () {

        $('nav').fadeToggle(500)


    });



})