//判断是否是移动或是web
 var browser={  
    versions:function(){   
       var u = navigator.userAgent;
       //var app = navigator.appVersion;
       return {
               //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad    
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
        };  
     }(),  
    language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   
  
if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||   
  browser.versions.iPhone || browser.versions.iPad){
      console.log("mobile application")
      window.location = "#";      
}else{
    console.log("web application");
}

// input文字获取焦点消失,离开显示
$('.form-input-text').focusin(function() {
    $(this).attr("data-empty", function() {
        return $(this).attr("value");
    })
    $(this).removeAttr("value");
});
$('.form-input-text').focusout(function() {
    $(this).attr("value", function() {
        return $(this).attr("data-empty");
    })
});

// URL解析
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (i;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}
// myURL.file;     // = 'index.html'
// myURL.hash;     // = 'top'
// myURL.host;     // = 'abc.com'
// myURL.query;    // = '?id=255&m=hello'
// myURL.params;   // = Object = { id: 255, m: hello }
// myURL.path;     // = '/dir/index.html'
// myURL.segments; // = Array = ['dir', 'index.html']
// myURL.port;     // = '8080'
// myURL.protocol; // = 'http'
// myURL.source;   // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'
