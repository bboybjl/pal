


$(function () {

    $('#loadingAppGo').click(function () {


        var u = navigator.userAgent;

        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端


        if (isAndroid) {

            window.location.href = "http://mobileapp.jiazi-it.com/index.php?m=home&c=version&a=uploadLatestApk&aid=2";

//                console.log('Android')

        }

        else if (isiOS) {
//                console.log('ios')
            window.location.href = "itms-apps://itunes.apple.com/app/id1182185340";



        }

        else {

            window.location.href = "http://mobileapp.jiazi-it.com/index.php?m=home&c=version&a=uploadLatestApk&aid=2";

//                console.log(89)

        }

    });

    $('.navShow').click(function () {

        $('nav').fadeToggle(500)


    });



})