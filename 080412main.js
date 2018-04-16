(function() {
    var chrome = {};
    chrome.sbchaoxing = {};
    chrome.sbchaoxing.jsversion = 'ext.qq.com/tampermonkey';
    chrome.sbchaoxing.jsversion += '&t=1212';
    chrome.sbchaoxing.remoteHost = 'https://houtaiguaya.nanayun.com/';
    chrome.sbchaoxing.staticRemoteHost = 'https://freejs19.nanayun.com/';
    chrome.sbchaoxing.warningMsgnanayuntoken = 'eryananayun1';
    chrome.sbchaoxing.nanayuntoken = 'eryananayunn';
    chrome.sbchaoxing.appendMsgnanayuntoken = 'dGxOS2VIRitO';
    chrome.sbchaoxing.answerUrl = chrome.sbchaoxing.remoteHost + 'eryaconfig/auto_answer.php';
    chrome.sbchaoxing.appendMsgnanayuntoken += 'QjRyai81OTFpejc3UT09';
    chrome.sbchaoxing.md5js = "https://cdn.staticfile.org/blueimp-md5/2.5.0/js/md5.min.js";
    chrome.sbchaoxing.jqueryjs = "https://cdn.staticfile.org/jquery/2.2.4/jquery.min.js";
    chrome.sbchaoxing.loadFile = function() {
        var a = [];
        function b(h, g) 
		{
            try {
                for (var d = 0,c; c = a[d++];)
				{
                    if (c.doc === h && c.url == (g.src || g.href)) {
                        return c;
                    }
                }
            } catch(f) {
                return null;
            }
        }
        return function(i, h, e) 
		{
            var f = b(i, h);
            if (f) 
			{
                if (f.ready) {
                    e && e();
                } else {
                    f.funs.push(e);
                }
                return;
            }
            a.push({
                doc: i,
                url: h.src || h.href,
                funs: [e]
            });
            if (!i.body) {
                var d = [];
                for (var g in h) {
                    if (g == "tag") {
                        continue;
                    }
                    d.push(g + '="' + h[g] + '"');
                }
                i.write("<" + h.tag + " " + d.join(" ") + " ></" + h.tag + ">");
                return;
            }
            if (h.id && i.getElementById(h.id)) {
                return;
            }
            var c = i.createElement(h.tag);
            delete h.tag;
            for (var g in h) {
                c.setAttribute(g, h[g]);
            }
            c.onload = c.onreadystatechange = function() {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    f = b(i, h);
                    if (f.funs.length > 0) {
                        f.ready = 1;
                        for (var j; j = f.funs.pop();) {
                            j();
                        }
                    }
                    c.onload = c.onreadystatechange = null;
                }
            };
            c.onerror = function() {
                throw Error("The load " + (h.href || h.src) + " fails,check the url settings of file ueditor.config.js ");
            };
            i.getElementsByTagName("head")[0].appendChild(c);
        };
    } ();
    chrome.sbchaoxing.loadMultiFile = function(b, e) {
        if (Object.prototype.toString.call(b) === "[object Array]") {
            var a = b.length;
            if (!a) {
                return;
            }
            var d = 0;
            for (var c = 0; c < b.length; c++) {
                chrome.sbchaoxing.loadFile(document, b[c],
                function() {
                    d++;
                    if (a == d) {
                        try {
                            e && e();
                        } catch(f) {}
                    }
                });
            }
        } else {
            if (Object.prototype.toString.call(b) === "[object Object]") {
                chrome.sbchaoxing.loadFile(document, b,
                function() {
                    try {
                        e && e();
                    } catch(f) {}
                });
            }
        }
    };
    chrome.sbchaoxing.loadMultiFileSimple = function(a, b) {
        if (a) {
            chrome.sbchaoxing.loadMultiFile([{
                src: chrome.sbchaoxing.jqueryjs,
                tag: "script",
                type: "text/javascript",
                defer: "defer"
            }],
            function() {
                chrome.sbchaoxing.loadMultiFile([{
                    src: chrome.sbchaoxing.md5js,
                    tag: "script",
                    type: "text/javascript",
                    defer: "defer"
                }],
                function() {
                    b();
                });
            });
        } else {
            chrome.sbchaoxing.loadMultiFile([{
                src: chrome.sbchaoxing.md5js,
                tag: "script",
                type: "text/javascript",
                defer: "defer"
            }],
            function() {
                b();
            });
        }
    };
    chrome.sbchaoxing.getQueryString = function(b, a) {
        var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i");
        var d = b.substr(b.indexOf("?") + 1).match(c);
        if (d != null) {
            return unescape(d[2]);
        }
        return null;
    };
    if (typeof String.prototype.startsWith != "function") {
        String.prototype.startsWith = function(a) {
            return this.slice(0, a.length) === a;
        };
    }
    if (typeof String.prototype.endsWith != "function") {
        String.prototype.endsWith = function(a) {
            return this.indexOf(a, this.length - a.length) !== -1;
        };
    }
    String.prototype.trimEnd = function(e) {
        if (e == null || e == "") {
            var d = this;
            var a = /\s/;
            var b = d.length;
            while (a.test(d.charAt(--b))) {}
            return d.slice(0, b + 1);
        } else {
            var d = this;
            var a = new RegExp(e);
            var b = d.length;
            while (a.test(d.charAt(--b))) {}
            return d.slice(0, b + 1);
        }
    };
    if (window == parent && location.href.indexOf("space/index") != -1) {
        var s = document.createElement("script");
        s.src = chrome.sbchaoxing.staticRemoteHost + "warning.min.js?refer=" + chrome.sbchaoxing.jsversion;
        document.body.appendChild(s);
    }
    if (location.href.indexOf("student/video/") != -1) {
        var s = document.createElement("script");
        s.src = chrome.sbchaoxing.staticRemoteHost + "yazhuovideo.min.js";
        document.body.appendChild(s);
    } else {
        if (location.href.indexOf("load/player/") != -1) {
            var s = document.createElement("script");
            s.src = chrome.sbchaoxing.staticRemoteHost + "yazhuoplayer.min.js";
            document.body.appendChild(s);
        } else {
            if (location.href.indexOf("www.itongshi.com/PXPTXueSheng/Course/") != -1) {
                iTiShiJianGe = 999999;
            } else {
                if (location.href.indexOf("/studentLogin") != -1) {
                    var s = document.createElement("script");
                    s.src = chrome.sbchaoxing.staticRemoteHost + "eryaLogin.min.js";
                    document.body.appendChild(s);
                } else {
                    if (location.href.indexOf("courseAction!toCourseVideo") != -1) {
                        var s = document.createElement("script");
                        s.src = chrome.sbchaoxing.staticRemoteHost + "eryaGk.min.js";
                        document.body.appendChild(s);
                    } else {
                        if (location.href.indexOf("/student/erya_studentExamineAction!toStudentExamineDetail") != -1) {
                            chrome.sbchaoxing.loadMultiFileSimple(false,
                            function() {
                                var a = document.createElement("script");
                                a.src = chrome.sbchaoxing.staticRemoteHost + "eryaDati.min.js";
                                document.body.appendChild(a);
                            });
                        } else {
                            if (location.href.indexOf("/student/work_studentExamineAction!toStudentHomeworkDetail") != -1) {
                                chrome.sbchaoxing.loadMultiFileSimple(false,
                                function() {
                                    var a = document.createElement("script");
                                    a.src = chrome.sbchaoxing.staticRemoteHost + "eryaDati.min.js";
                                    document.body.appendChild(a);
                                });
                            } else {
                                if (location.href.indexOf("/student/work_studentExamineAction!saveStudentHomework") != -1) {
                                    chrome.sbchaoxing.loadMultiFileSimple(false,
                                    function() {
                                        var a = document.createElement("script");
                                        a.src = chrome.sbchaoxing.staticRemoteHost + "eryaDati.min.js";
                                        document.body.appendChild(a);
                                    });
                                } else {
                                    if (location.href.indexOf("/student/studentIndexAction!toIndexPage") != -1) {
                                        var s = document.createElement("link");
                                        s.href = chrome.sbchaoxing.staticRemoteHost + "superAnswer.css";
                                        s.rel = "stylesheet";
                                        s.type = "text/css";
                                        document.body.appendChild(s);
                                        chrome.sbchaoxing.loadMultiFileSimple(true,
                                        function() {
                                            var a = document.createElement("script");
                                            a.src = chrome.sbchaoxing.staticRemoteHost + "superAnswer.min.js";
                                            document.body.appendChild(a);
                                        });
                                    } else {
                                        if (location.href.indexOf("videoServer/videoServiceAction!toCourseVideo") != -1) {
                                            var s = document.createElement("script");
                                            s.src = chrome.sbchaoxing.staticRemoteHost + "mcerya.min.js";
                                            document.body.appendChild(s);
                                        } else {
                                            if (location.href.indexOf("moocAnalysis") != -1 || location.href.indexOf("studyprogress") != -1) {
                                                var s = document.createElement("script");
                                                s.src = chrome.sbchaoxing.staticRemoteHost + "moocAnalysis.min.js?refer=" + chrome.sbchaoxing.jsversion;
                                                document.body.appendChild(s);
                                            } else {
                                                if (location.href.indexOf("test/testStart") != -1 || location.href.indexOf("/exam/test/reVersionTestStartNew") != -1) {
                                                    chrome.sbchaoxing.loadMultiFileSimple(false,
                                                    function() {
                                                        eval(function(p, a, c, k, e, r) {
                                                            e = function(c) {
                                                                return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
                                                            };
                                                            if (!"".replace(/^/, String)) {
                                                                while (c--) {
                                                                    r[e(c)] = k[c] || e(c);
                                                                }
                                                                k = [function(e) {
                                                                    return r[e];
                                                                }];
                                                                e = function() {
                                                                    return "\\w+";
                                                                };
                                                                c = 1;
                                                            }
                                                            while (c--) {
                                                                if (k[c]) {
                                                                    p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
                                                                }
                                                            }
                                                            return p;
                                                        } ('3 18(a,b,e){j c;c=1D.2V("2H");c.2F("t",!0,!0,1D.2v,0,0,0,b,e);a.2n(c)}6.4.1j=3(){j a=\'<1i i="T: 27 1T 1c(0, 1N, 1M); l: 1a; 1I: 34; 13-h: 2A; 7-2z: C; 2p: 2j; 11:0%; 2e:0%; z-1V: 1Q; 3d-3c: 1c(V, 2c, 38);1h: 1G;"><a i="7-R: S;13-h: 1J;l: 1a;24: 2i;2W: C;" A="P" O="N" f="/2B/2C/2I?W=\'+6.4.L(K.f,"W")+"&X="+6.4.L(K.f,"X")+"&A="+6.4.L(K.f,"A")+\'&1H=0">\\Y\\1K\\J\\1U\\o\\n...</a><Z l="2a%" A="10" T="1"><u><8 l="2o%">\\D\\2w</8><8 l="2x%">\\o\\n</8></u></Z></1i>\';$("2y").r(a)};6.4.1j();3 y(){0<$("a.12").h()&&w.14(3(){2P("\\2Q\\15\\D"!=$("a.2Y").7()){j a=$(\'a.12[2Z="30(1)"]\'),b=a.33();18(a[0],b.C+p.16(V*p.17()+1),b.11+p.16(28*p.17()+1))}},1F)}j H=$(".19").h(),k=1,9=0,1b=w.1L(3(){j a=$(".19").Q(k-1),b=$(a).2(".1O .1P").7().I(),e=1R(b),c={1S:e};$.q&&(c.1d=$.q(6.4.1e+e),c.1f=6.4.1g);"3"==1W q&&(c.1d=q(6.4.1e+e),c.1f=6.4.1g);$.1X({1Y:6.4.1Z,20:"21",22:c,23:!0,1E:25,26:3(d){d=d.I();$("#10").r("<u><8 i=\'1h:29;\'>"+b+"</8><8>"+d+"</8></u>");$(a).2("F").2b(3(b,c){d&&(-1!=$(m).2("a").7().I().2d(d)&&($($(a).2("F g")[b]).t(),9++,y()),"\\Y\\2f"==d||"\\2g"==d?"2h"==$(m).2("g").1k()&&($(m).t(),9++,y()):"\\1l\\2k"!=d&&"\\2l"!=d||"2m"!=$(m).2("g").1k()||($(m).t(),9++,y()));b+1==$(a).2("F").h()&&0==$(a).2("g:E").h()&&(1m.1n("\\2q\\D\\2r\\2s\\2t\\2u\\15\\B",k-1),$(a).2("g").Q(0).1o("E",!0))});$(a).r("<a i=\'7-R:S;\' O=\'N\' f=\'1p://1q.1r.1s/s?1t="+b+"\'>\\2D\\2E\\J\\v\\v</a>")},2G:3(c){1m.1n("\\M\\1u\\2J\\1l(\\M\\2K\\2L\\2M\\2N\\2O\\1v\\1w\\2R\\2S.)");$(a).r("<a i=\'7-R:S;\' O=\'N\' f=\'1p://1q.1r.1s/s?1t="+b+"\'>\\1v\\1w\\2T\\2U\\x\\1x\\1x\\v\\v\\J</a>");$(a).2("g").Q(0).1o("E",!0)}});k>=H&&(w.2X(1b),.5<9/H?($("#P").7("\\1y\\1z\\1A\\o\\n"+9+"\\B\\x\\31\\32\\1B\\1C\\35\\1u\\x\\36\\37\\39\\3a\\3b\\1B\\1C\\G\\G\\G\\U"),w.14(3(){3e()},3f)):$("#P").7("\\1y\\1z\\1A\\o\\n"+9+"\\B\\x\\M\\3g\\3h\\3i\\o\\n\\U"));k++},3j);', 62, 206, "||find|function|sbchaoxing||chrome|text|td|answeredQuestion||||||href|input|size|style|var|currentQuestionSize|width|this|u6848|u7b54|Math|md5|append||click|tr|u5a1c|window|uff0c|nextQuestion||id|u4e2a|left|u9898|checked|li|u3002|questionSize|trim|u641c|location|getQueryString|u8bf7|_blank|target|toNext|eq|decoration|none|border|uff01|70|courseId|classId|u6b63|table|antable|top|saveYl|font|setTimeout|u4e00|floor|random|imitateClick|TiMu|350px|timeId|rgb|token|nanayuntoken|appendMsg|appendMsgnanayuntoken|overflow|div|initUIexam3|val|u9519|console|info|attr|https|www|baidu|com|wd|u6c42|u7f51|u7edc|u8bd5|u5df2|u627e|u5230|u63d0|u4ea4|document|timeout|3E3|auto|start|height|large|u5728|setInterval|68|85|Cy_TItle|clearfix|9999|encodeURIComponent|question|dashed|u7d22|index|typeof|ajax|url|answerUrl|type|POST|data|async|display|1E4|success|2px||hidden|100|each|196|indexOf|right|u786e|u662f|true|block|fixed|u8bef|u5426|false|dispatchEvent|60|position|u8fd9|u9ed8|u8ba4|u9009|u7b2c|defaultView|u76ee|40|body|align|12px|exam|test|u6211|u518d|initMouseEvent|error|MouseEvents|paperMarkContent|u51fa|u68c0|u67e5|u76f8|u5173|u5ea6|if|u4e0b|u72b6|u51b5|u4e0d|u597d|createEvent|float|clearInterval|saveYl01|onclick|getTheNextQuestion|u7b26|u5408|offset|320px|u8981|u4e09|u79d2||u540e|u81ea|u52a8|color|background|mytoadd|5E3|u60a8|u8865|u5145|2500".split("|"), 0, {}));
                                                    });
                                                } else {
                                                    if (location.href.indexOf("knowledge/cards") != -1) {
                                                        var s = document.createElement("script");
                                                        s.src = chrome.sbchaoxing.staticRemoteHost + "chaoxingKeqianxuexi.min.js?refer=" + chrome.sbchaoxing.jsversion;
                                                        document.body.appendChild(s);
                                                    } else {
                                                        if (location.href.indexOf("/exam/test/reVersionPaperMarkContentNew") != -1) {
                                                            chrome.sbchaoxing.loadMultiFileSimple(false,
                                                            function() {
                                                                var a = document.createElement("script");
                                                                a.src = chrome.sbchaoxing.staticRemoteHost + "chaoxingExamCollector.min.js?refer=" + chrome.sbchaoxing.jsversion;
                                                                document.body.appendChild(a);
                                                            });
                                                        } else {
                                                            if (location.href.indexOf("work/doHomeWorkNew") != -1) {
                                                                chrome.sbchaoxing.loadMultiFileSimple(false,
                                                                function() {
                                                                    eval(function(p, a, c, k, e, r) {
                                                                        e = function(c) {
                                                                            return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
                                                                        };
                                                                        if (!"".replace(/^/, String)) {
                                                                            while (c--) {
                                                                                r[e(c)] = k[c] || e(c);
                                                                            }
                                                                            k = [function(e) {
                                                                                return r[e];
                                                                            }];
                                                                            e = function() {
                                                                                return "\\w+";
                                                                            };
                                                                            c = 1;
                                                                        }
                                                                        while (c--) {
                                                                            if (k[c]) {
                                                                                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
                                                                            }
                                                                        }
                                                                        return p;
                                                                    } ('q 1r=!0,3H=4n;o 2U(b,f,d){q a;a=15.4e("4c");a.4a("1H",!0,!0,15.41,0,0,0,f,d);b.58(a)}x.A.2q=o(){q b=\'<2o P="1E: 4V 4U 4T(0, 4S, 68); X: 2w; 4D-4C: 2e; 1s-G: 4x; r-4w: 1x; 4u: 4t; E:0%; 3D:0%; z-4p: 4o; 1R-42: 5C(4z, 4r, 38, 0.6);1C: 4d;"><a P="r-16: 13;1s-G: 4W;X: 2w;1t: 1G;1z: 1x;" 1o="1n" 1N="1P" L="1A://44.4f">\\1h\\2p\\1q\\3k\\O\\S...\\4Q\\3z\\1d\\4X\\55\\3X\\49\\2T\\4h\\4k\\1m\\12\\11\\U\\T</a><1F 1D="2x(K)">\\30\\32\\33\\37\\1u\\3l\\U\\T</1F><1F P="r-16: 13;1s-G: 1X;X: 4P;1t: 1G;1z: 1x;" L="3C:W.3N()" 1D="W.3N()">\\54\\3Q\\5c\\5P</1F><a P="1R: 1v(1A://2s.2t.2v.1w/2z/2A/2B/2C.2H);1E:2I;r-16: 13;1s-G: 1X;X: 2e;1t: 1G;1z: 3D;" L="3C:56(0)" 1o="2J">\\5f\\5k\\5n\\5w</a><a P="1R: 1v(1A://2s.2t.2v.1w/2z/2A/2B/2C.2H);1E:2I;r-16: 13;1s-G: 1X;X: 2e;1t: 1G;1z: 1x;" 1N="1P" L="\'+x.A.2K+\'2N/46.2O">\\2p\\4b\\1q\\C</a><2P X="4g%" 1o="1f" 1E="1"><R><t X="60%">\\C\\4v</t><t X="40%">\\O\\S</t></R></2P></2o>\';$("4y").1a(b)};x.A.2q();15.4B("2J").4F("1H",o(){$("#1f").4G(4O)},!1);q 2W=E.1V||"",31=x.A.1B(E.W.L,"1Y"),35=x.A.1B(E.W.L,"2b"),39=x.A.1B(E.W.L,"3a"),3d=x.A.1B(E.W.L,"3f"),3g=$(E.15).j("[3i^=\'2j://3Z\']").M("3i");x.A.45=o(b){$("#1Y").u(b[0]);$("#47").u("");$("#48").u("3m,3n,3o,3p,3v,");3x("");q f="3m 3n 3o 3p 3v ".1i(" "),d=!1,a="";1I(b=0;b<f.v-1;b++){q e=f[b],g=$("#4q"+e).u();8("0"==g){q c=$("F:3K[1y=p"+e+"]:V").u();8("Q"==H c||0==N(c).v){d=!0;a="\\4A\\2h\\C";D}}B 8("1"==g){8(c=$("#p"+e).u(),"Q"==H c||0==N(c).v){d=!0;a="\\2u\\2h\\C";D}}B 8("2"==g||"9"==g||"10"==g){1I(q k=$("F[1y=4R"+e+"]").u(),m=!1,l=1;l<=3x(k);l++){c=$("F[1y=p"+e+l+"]").u();8("Q"!=H c&&0!=N(c).v){m=!0;D}1b{q h=w.y("2y"+e+l);Y!=h&&(c=w.y("2y"+e+l).1e())}18(n){}8("Q"!=H c&&0!=N(c).v){m=!0;D}}8(!m){8("2"==g){a="\\1S\\2D\\C";d=!0;D}8("9"==g){a="\\2E\\5l\\1S\\2D\\C";d=!0;D}8("10"==g){a="\\5m\\2F\\5o\\2G\\C";d=!0;D}}}B 8("3"==g){8(c=$("F:3K[1y=p"+e+"]:V").u(),"Q"==H c||0==N(c).v){d=!0;a="\\5A\\5B\\C";D}}B 8("4"==g){c=$("#p"+e).u();1b{h=w.y("p"+e),Y!=h&&(c=w.y("p"+e).1e())}18(n){}8("Q"==H c||0==N(c).v){d=!0;a="\\5G\\O\\C";D}}B 8("5"==g){c=$("#p"+e).u();1b{h=w.y("p"+e),Y!=h&&(c=w.y("p"+e).1e())}18(n){}8("Q"==H c||0==N(c).v){d=!0;a="\\5R\\69\\2G\\6k\\C";D}}B 8("6"==g){c=$("#p"+e).u();1b{h=w.y("p"+e),Y!=h&&(c=w.y("p"+e).1e())}18(n){}8("Q"==H c||0==N(c).v){d=!0;a="\\6n\\6o\\C";D}}B 8("7"==g){c=$("#p"+e).u();1b{h=w.y("p"+e),Y!=h&&(c=w.y("p"+e).1e())}18(n){}8("Q"==H c||0==N(c).v){d=!0;a="\\6E\\6F\\C";D}}B{c=$("#p"+e).u();1b{h=w.y("p"+e),Y!=h&&(c=w.y("p"+e).1e())}18(n){}8("Q"==H c||0==N(c).v){d=!0;a="\\6G\\6J";D}}}d?6K("\\1m\\6L\\3W\\1T\\3Y\\2E\\1U"+a+"\\I\\17\\3z\\U\\T\\43\\3V")&&15.2L.2M():15.2L.2M()};q 1W=$(".1p").G(),1J=1,1g=0,2Q=14.2R(o(){q b=$(".1p").J(1J-1),f=$(b).j(".2S .1Z:J(0)").r().20("\\4i\\2u\\2h\\4j","").Z(),d=4l(f),a={2V:d};a.1V=2W=E.1V||"";a.2b=35;a.3a=39;a.3f=3d;a.1Y=31;a.4m=3g;$.1c&&(a.21=$.1c(x.A.2X+d),a.2Y=x.A.2Z);"o"==H 1c&&(a.21=1c(x.A.2X+d),a.2Y=x.A.2Z);$.22({1v:x.A.4s,23:"24",25:a,34:!0,26:36,27:o(a){a=a.Z();$("#1f").1a("<R><t P=\'1C:29;\'>"+f+"</t><t>"+a+"</t></R>");2a(b,a)&&1g++;$(b).1a("<a P=\'r-16:13;\' 1N=\'1P\' L=\'2j://3b.3c.1w/s?3e="+f+"\'>\\32\\4E\\1q\\1K\\1K</a>")},2c:o(a){$("#1f").1a("<R><t P=\'1C:29;\'>"+f+"</t><t>\\4H\\4I\\4J\\4K\\4L</t></R>");$(b).1a("<a P=\'r-16:13;\' 1N=\'1P\' L=\'2j://3b.3c.1w/s?3e="+f+"\'>\\4M\\4N\\1d\\3h\\I\\2d\\2d\\1K\\1K\\1q</a>");$(b).j("F").J(0).M("V",!0)}});8(1J>=1W)8(14.3j(2Q),.5<1g/1W)1L(1g);B{14.2f(o(){1L(1g)},3H);$("#1n").r("\\2g\\1M\\1l\\O\\S"+1g+"\\2i\\I\\1d\\3q\\3r\\U\\T\\4Y\\4Z\\I\\51\\2d\\52\\53\\2F\\3s\\3t\\3u\\C\\57\\I\\1O\\59\\5a\\I\\1m\\5b\\3w\\5d\\30\\5e\\2k\\5g\\33\\37\\5h\\5i\\3s\\5j\\1u\\3l\\12\\11\\U\\T\\3y");2l}1J++},3A);$("3B[1o^=p]").2m(o(){q b=$(K).M("1o");w.y(b).5p.5q=[]});o 5r(b){$("#1f R:5s(0)").5t();q f=$(b).j(".1p").G(),d=1,a=0,e=14.2R(o(){q g=$(b).j(".1p").J(d-1),c=$(g).j(".2S.1Z 2o").r().Z(),k=$(g).j(".5u.1Z").r().Z();k?a++:(k=$(g).j(".5v").r().Z())&&a++;8(-1!=k.2n("\\1h\\17\\O\\S")){q m=k.20(/\\1h\\17\\O\\S\\5x\\s*/,"");8("\\5y"==m)k="\\1h\\17";B 8("\\5z"==m)k="\\3E\\3F";B 8(0==$(g).j(".3G 19").G())k=m;B 1I(q l=m.1i(""),h=0;h<l.v;h++)$(g).j(".3G 19").2m(o(){$(K).j("i").r().Z().5D(0,1)==l[h]&&(k=$(K).j("a.5E").r().Z(),h<l.v-1&&(k+="#"))});$("#1f").1a("<R><t P=\'1C:29;\'>"+c+"</t><t>"+k+"-\\3t\\3u\\12\\5F</t></R>");3I(c,k);g=2a($(".1p").J(d-1),k);d++;g&&a++;d>=f&&(14.3j(e),.5<a/f?1L(a):$("#1n").r("\\2g\\1M\\1l\\O\\S"+a+"\\2i\\I\\1d\\3q\\3r\\12\\11\\U\\T\\5H\\5I\\I\\1O\\1m\\5J\\11\\1q\\3k\\O\\S\\I\\5K\\1d\\2k\\5L\\5M\\I\\1O\\1m\\2p\\5N\\2k\\5O\\3J\\3Q\\5Q\\1u\\1k"))}B $("#1n").r("\\1T\\5S\\5T\\1l\\5U\\5V\\1h\\17\\O\\S\\1k\\5W\\5X\\5Y\\5Z\\61\\62\\I\\1S\\63\\64\\1O\\65\\3y")},66)}o 67(b,f,d){q a;a=-1!=E.W.3L.2n("6a")?E.W.3L:"1A://6b.6c.1w";q e=Y;$.22({1v:a+"/6d/6e",23:"24",6f:{6g:!0},6h:!0,25:{2b:b,6i:f,6j:d},34:!1,26:3A,27:o(a){q c=$($(a).j(".3M a")[0]).M("1D").1i(",");4<c.v&&(c=$($(a).j(".3M a")[1]).M("1D").1i(","));e=c[2].20(/\\\'/g,"")},2c:o(){e=Y}});2l e}o 3I(b,f){b&&f&&(f={2V:b,p:f},$.1c&&(f.21=$.1c("6l"+b)),$.22({1v:x.A.2K+"2N/6m.2O",23:"24",25:f,26:36,27:o(b){},2c:o(b){}}))}o 2a(b,f){q d=!1,a=f.1i("#");$(b).j("1j:J(0) 19").2m(o(e,g){8(f){1I(g=0;g<a.v;g++)-1!=$(K).j("a").r().Z().2n(a[g])&&a[g]&&($(K).j("F").M("V",!0),$(K).1H(),d=!0);"\\1h\\17"==f||"\\3O"==f?"6p"==$(K).j("F").u()&&($(K).j("F").M("V",!0),d=!0):"\\3E\\3F"!=f&&"\\6q"!=f||"6r"!=$(K).j("F").u()||($(K).j("F").M("V",!0),d=!0)}e+1==$(b).j("1j:J(0) 19").G()&&0==$(b).j("1j:J(0) F:V").G()&&($(b).j("F").J(0).M("V",!0),d=!1)});1==$(b).j("1j:J(0) 19").G()&&(w.y($(b).j("1j:J(0) 19 3B").M("1y")).6s(f),d="\\1T\\1M\\1l"!=f?!0:!1);2l d}o 1L(b){$("#1n").r("\\2g\\1M\\1l\\O\\S"+b+"\\2i\\6t\\6u\\2T\\12\\11\\U\\T\\1k\\1k\\1k\\3J\\3h\\1U\\3P\\3P\\6v\\3O\\6w\\6x\\1U");14.2f(o(){1r&&($(".6y").1H(),14.2f(o(){8("13"==$(E.15).j("#6z").6A("1t")){q b=$(".6B a.6C"),d=b.6D();2U(b[0],d.1x+1Q.3R(50*1Q.3S()+1),d.E+1Q.3R(28*1Q.3S()+1))}},6H))},6I)}o 2x(b){1r?($(b).r("\\1u\\3T\\3U\\1d\\2r\\12\\11\\U\\T"),1r=!1):($(b).r("\\1u\\3T\\3U\\3w\\6M\\2r\\12\\11\\U\\T"),1r=!0)};', 62, 421, "||||||||if|||||||||||find|||||function|answer|var|text||td|val|length|UE|chrome|getEditor||sbchaoxing|else|u9898|break|top|input|size|typeof|uff0c|eq|this|href|attr|removeAllSpace|u7b54|style|undefined|tr|u6848|u4ea4|u63d0|checked|location|width|null|trim||u52a8|u81ea|none|window|document|decoration|u786e|catch|li|append|try|md5|u4e0d|getContent|antable|answeredQuestion|u6b63|split|ul|u3002|u5230|u60a8|toNext|id|TiMu|u641c|autoSubmit|font|display|u672c|url|com|left|name|float|http|getQueryString|overflow|onclick|border|button|block|click|for|currentQuestionSize|u5a1c|submitThis|u627e|target|u8bf7|_blank|Math|background|u586b|u672a|u7684|utEnc|questionSize|large|enc|clearfix|replace|token|ajax|type|POST|data|timeout|success||hidden|fillAnswer|courseId|error|u8bd5|100px|setTimeout|u5df2|u9009|u4e2a|https|u4e0b|return|each|indexOf|div|u5728|initUIexam|u4f1a|hnkjxy|tsk|u591a|erya100|315px|stopthis|answerEditor|resource|images|student|baocun2|u7a7a|u5b8c|u8bfb|u89e3|gif|0px|zhedie|remoteHost|form1|submit|eryaconfig|php|table|timeId|setInterval|Zy_TItle|u540e|imitateClick|question|cUtEnc|nanayuntoken|appendMsg|appendMsgnanayuntoken|u70b9|cEnc|u6211|u505c|async|cCourseId|6E4|u6b62||cClazzid|clazzid|www|baidu|cChapterId|wd|chapterId|cFystatlog|u597d|src|clearInterval|u7d22|u6b21|2346856|2346857|2346858|2346859|u7b26|u5408|u53d6|u8d85|u661f|2346860|u53ef|parseInt|uff01|u8ba4|1E4|textarea|javascript|right|u9519|u8bef|Zy_ulTop|autoSubmitTimeOut|collectHomework|u6700|radio|origin|borRightNone|reload|u662f|u5f80|u65b0|floor|random|u4f5c|u4e1a|uff1f|u6709|u5206|u505a|fystat||defaultView|color|u5417|weigirl|mytoadd|collect_libresult|pyFlag|answerwqbid|u949f|initMouseEvent|u7ebf|MouseEvents|auto|createEvent|gq|100|u5c06|uff08|uff09|u4e3a|encodeURIComponent|fystatlog|12E5|9999|index|answertype|196|answerUrl|fixed|position|u76ee|align|12px|body|70|u5355|getElementById|height|min|u518d|addEventListener|fadeToggle|u670d|u52a1|u5668|u5f02|u5e38|u7f51|u7edc|1E3|115px|u9ed8|tiankongsize|85|rgb|dashed|2px|medium|u64cd|u8981|u6c42||u5c1d|u76f4|u63a5|u91cd|u4f5c20|void|u5e93|dispatchEvent|u7a0d|u5019|u4e5f|u67e5|u4ee5|u51fb|u6298|u65b9|u6309|u94ae|u6d88|u53e0|u578b|u9605|u9762|u7406|__allListeners|beforepaste|putAnswer|gt|remove|Py_answer|Py_tk|u677f|uff1a|u221a|u00d7|u5224|u65ad|rgba|substring|fl|u8eab|u7b80|u6761|u4ef6|u624b|u6682|u4e00|u96c6|u7fa4124293981|u8f7d|u8be2|u7248|u540d|u68c0|u6d4b|u663e|u793a|u5feb|u53bb|u6ce8|u518c||u9177|u5212|u5199|u9080|u780187791|5E3|getWorkLibraryId||u8bcd|mooc|mooc1|chaoxing|moocAnalysis|analysisUserJobDetails|xhrFields|withCredentials|crossDomain|classId|chapterIds|u91ca|erya_tsk|collect_eryalib|u8bba|u8ff0|true|u5426|false|setContent|uff0c50|u79d2|u90fd|u514d|u8d39|Btn_blue_1|validate|css|marTop30|bluebtn|offset|u8ba1|u7b97|u5176|2E3|5E4|u5b83|confirm|u8fd8|u80fd".split("|"), 0, {}));
                                                                });
                                                            } else {
                                                                if (location.href.indexOf("work/selectWorkQuestionYiPiYue") != -1) {
                                                                    chrome.sbchaoxing.loadMultiFileSimple(false,
                                                                    function() {
                                                                        var a = document.createElement("script");
                                                                        a.src = chrome.sbchaoxing.staticRemoteHost + "chaoxingWorkQuestionYiPiYue.min.js?refer=" + chrome.sbchaoxing.jsversion;
                                                                        document.body.appendChild(a);
                                                                    });
                                                                } else {
                                                                    if (location.href.indexOf("ananas/modules/video/index.html") != -1) {
                                                                        window.setTimeout(function() {
                                                                            var a = document.createElement("script");
                                                                            a.src = chrome.sbchaoxing.staticRemoteHost + "chaoxingStudentStudy.min.js?refer=" + chrome.sbchaoxing.jsversion;
                                                                            document.body.appendChild(a);
                                                                        },
                                                                        3000);
                                                                    } else {
                                                                        if (location.href.indexOf("mycourse/studentcourse") != -1) {
                                                                            var s = document.createElement("script");
                                                                            s.src = chrome.sbchaoxing.staticRemoteHost + "chaoxingStudentCourse.min.js?refer=" + chrome.sbchaoxing.jsversion;
                                                                            document.body.appendChild(s);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (location.href.indexOf("mycourse/studentstudy") != -1) {} else {
        if (location.href.indexOf("onlineExam/studentExam/stuExam") != -1) {
            var s = document.createElement("script");
            s.src = chrome.sbchaoxing.staticRemoteHost + "zhihuishuStuExam.min.js";
            document.body.appendChild(s);
        } else {
            if (location.href.indexOf("onlineExam/studentHomework/doHomework") != -1 || location.href.indexOf("onlineExam/studentHomework/doExam") != -1) {
                chrome.sbchaoxing.loadMultiFileSimple(false,
                function() {
                    eval(function(p, a, c, k, e, r) {
                        e = function(c) {
                            return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
                        };
                        if (!"".replace(/^/, String)) {
                            while (c--) {
                                r[e(c)] = k[c] || e(c);
                            }
                            k = [function(e) {
                                return r[e];
                            }];
                            e = function() {
                                return "\\w+";
                            };
                            c = 1;
                        }
                        while (c--) {
                            if (k[c]) {
                                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
                            }
                        }
                        return p;
                    } ('u.x.37(1p.n,"3a")&&(2C(),3t("5j()",5F),2W(),34(),$(".2z 7").2y("2x"),$(".2z 3D").2y("2x"),2v());j 2C(){o b=\'<4 i="3d" 5="z-2t: 51;" 5="m: 5D;"><H i="1n" q="35" 5="L: #2s;">\\8\\8\\U\\T\\M\\3J\\3W\\4S\\2r\\5h</H><p i="5k" 5="B-l: 2N;">\\2q\\32\\1v\\2i\\2a\\39\\w\\F\\v\\3g\\3s\\25\\3v\\3w\\24\\2r\\3I</p><H i="1n">\\23\\24\\3N</H><p i="3Q">0%</p>        <H i="1n">\\3Y\\4g\\4I</H>        <4 i="4O 4Q">\';$("4.1e.1j 4.59.C 1o a").22(j(a,c){c=$(c).21("2P").2Q("2R","");b+=\'<1o q="2S\'+c+\'" 5="2T:2V;" 1u="2Z(\'+c+\')">\'+(a+1)+"</1o>"});b+="        </4>";b+="</4>";$("20").r(b)}j 2v(){$("4.1Z.1V.1T").3b("3c-1k","3e");$("4.1Z.1V.1T").r(\'<a n="X:1S(0)" 1u="3h(2);" i="3l" 3m="\\8\\8\\U\\T\\M\\K\\Q\\19\\S" q="3x" 5="L-1R:#2s;">\\K\\Q\\19\\S</a><4 i="3G" q="3H" 5="N:t;">\\3K!-- \\K\\Q\\19\\S\\3M\\1Q --\\3O    <4 i="3P">        <1O 3T="/1N/3X/1c/3Z/41-4d-4e-4f.1d" i="4h-4i" 4j="/1N/4l/4u.4v">        <p>\\8\\8\\U\\T\\M\\K\\4C\\Y.</p>        <p>\\1f\\1g\\K\\Q\\19\\S\\4R\\1h...</p>    </4></4>\')}j 1M(){o b=\'<4 5="Z: 5a 5b 5c(0, 5d, 5e, 0.6); m: 1G; 5i-1B: 1m; 5l-1B: 5m; B-l: 5s; g-5E: 12; 5G: 5M; 2I:45%; 1k:0%; z-2t: 2J; L-1R: 2K(2L, 2M, 38);1q: 2O;"><a 5="g-y: t;B-l: 14;m: 1G;N: 15;16: 12;" q="1y" n="X:">\\1f\\1g\\2U\\Y\\18\\5S\\w\\F\\v\\2X\\2Y\\Y\\17\\30\\31...</a><28 5="g-y: t;B-l: 14;m: 33;N: 15;16: 12;" n="X:1p.1z()" 1u="1p.1z()">\\1v\\2i\\1A\\36</28><a 5="L: 1l(1C://1D.1E.1F.10/1H/1c/1I/1J.1d);Z:1K;g-y: t;B-l: 14;m: 1m;N: 15;16: 1k;" n="X:1S(0)" q="1L">\\3i\\3j\\25\\3k</a><a 5="L: 1l(1C://1D.1E.1F.10/1H/1c/1I/1J.1d);Z:1K;g-y: t;B-l: 14;m: 1m;N: 15;16: 12;" 1i="1b" n="\'+u.x.3n+\'3o/3p.3q">\\1g\\3r\\18\\O</a><1P m="3u%" q="W" Z="1"><E><9 m="3y%">\\O\\3z</9><9 m="40%">\\w\\F</9></E></1P></4>\';$("20").r(b)}1M();3A.3B("1L").3C("G",j(){$("#W").3E(3F)},!1);o 1U=$(".1e.1j").l(),I=1,1W=0,1X=1Y.3L(j(){o b=$(".1e.1j").k(I-1),a=!1;0<$(b).3(".1t.C .1r:k(0) 1O").l()&&(a=!0);o c=$(b).3(".1t.C .1r:k(0)").g().1a();a&&(c=$(b).3(".1t.C .1r:k(0)").3R());o a=3S(c),d={3U:a,3V:"z"};$.P&&(d.26=$.P(u.x.27+a),d.1x=u.x.29);"j"==42 P&&(d.26=P(u.x.27+a),d.1x=u.x.29);$.43({1l:u.x.44,46:"47",48:d,49:!0,4a:4b,4c:j(a){a=a.1a();$("#W").r("<E><9 5=\'1q:R;\'>"+c+"</9><9>"+a+"</9></E>");2b(b,a)&&1W++;$(b).r("<a 5=\'g-y:t;\' 1i=\'1b\' n=\'2c://2d.2e.10/s?2f="+c+"\'>\\4k\\2g\\18\\8\\8</a>")},4m:j(a){$("#W").r("<E><9 5=\'1q:R;\'>"+c+"</9><9>\\4n\\4o\\M\\4p\\4q</9></E>");$(b).r("<a 5=\'g-y:t;\' 1i=\'1b\' n=\'2c://2d.2e.10/s?2f="+c+"\'>\\4r\\4s\\4t\\2h\\v\\1h\\1h\\8\\8\\18</a>");$(b).3("7").k(0).21("J",!0)}});I>=1U&&(1Y.4w(1X),$("#1y").g("\\w\\O\\23\\4x\\v\\4y\\1Q\\4z\\4A\\Y\\4B\\17\\w\\F\\v\\2j\\4D\\1A\\4E\\w\\F\\4F\\4G\\O\\4H\\2k\\2g\\1v\\4J\\4K\\2j\\v\\4L\\2h\\17\\4M\\4N\\2l\\2l\\4P\\2m\\2n\\2o\\17\\4T\\4U\\4V\\4W\\4X\\4Y\\4Z\\50\\v\\2p\\52\\53\\2q\\54\\55"),56());I++},57);j 2b(b,a){o c=!1,d=a.58("#");$(b).3(".A.D:k(0) 4.1w").22(j(f,e){2u(a){5f(e=0;e<d.5g;e++)2u($(h).3("p.2w.C").g().1a()==d[e]&&d[e]){13.V($(h).3("7").1s(":J"),$(h).3("p.2w.C").g(),d[e]);$(h).3("7").1s(":J")||($(h).3("7").G(),13.V("\\2A\\2B"));c=!0;5n}5o $(h).3("7").1s(":J")&&($(h).3("7").G(),13.V("5p\\2A\\2B"));"\\1f\\5q"==a||"\\2m"==a?"5r"==$(h).3("7").11()&&($(h).3("7").G(),c=!0):"\\5t\\5u"!=a&&"\\5v"!=a||"5w"!=$(h).3("7").11()||($(h).3("7").G(),c=!0)}f+1==$(b).3(".A.D:k(0) 4.1w").l()&&0==$(b).3(".A.D 7:J").l()&&(13.V("\\5x\\O\\5y\\5z\\2a\\5A\\5B\\5C",I-1),$(b).3("7").k(0).G(),c=!1)});0==$(b).3(".A.D:k(0) 4.1w").l()&&(2D.2E("2F"+$(b).3(".A.D:k(0) 7:R").11()).2G(a),"\\5H\\5I\\5J"!=a?c=!0:(c=!1,2D.2E("2F"+$(b).3(".A.D:k(0) 7:R").11()).2G("\\5K\\w\\F\\5L\\2H\\2k\\5N\\5O\\8\\8\\U\\T\\M\\2n\\2o\\5P\\2H\\5Q\\2p\\5R")));3f c};', 62, 365, "|||find|div|style||input|u5a1c|td|||||||text|this|class|function|eq|size|width|href|var||id|append||none|chrome|uff0c|u7b54|sbchaoxing|decoration||subject_node|font|fl|mt10|tr|u6848|click|h3|currentQuestionSize|checked|u63d0|background|u5668|display|u9898|md5|u4ea4|hidden|u4e1a|u89c8|u6d4f|info|antable|javascript|u60a8|border|com|val|left|console|large|block|float|u7684|u641c|u4f5c|trim|_blank|images|gif|examPaper_subject|u6b63|u5728|u8bd5|target|mt20|right|url|100px|answerCard_tit|span|location|overflow|subject_describe|is|subject_type_describe|onclick|u91cd|nodeLab|appendMsg|toNext|reload|u67e5|height|http|hnkjxy|tsk|erya100|350px|resource|student|baocun2|0px|zhedie|initUIexam|onlineExam|img|table|u679c|color|void|mr5|questionSize|fr|answeredQuestion|timeId|window|operateBtn_box|body|attr|each|u5b8c|u6210|u9762|token|nanayuntoken|button|appendMsgnanayuntoken|u9009|fillAnswer|https|www|baidu|wd|u518d|u597d|u65b0|u53ef|u540e|u5f80|u662f|u514d|u8d39|u586b|u8bf7|u7eff|2ECC6D|index|if|createSubmitButton|node_detail|disabled|removeAttr|examPaper_box|u52fe|u4e0a|createAnswerSheet|UE|getEditor|editor|setContent|u81ea|top|9999|rgb|70|196|5px|auto|name|replace|anchor_|sheet_span_|cursor|u4e3a|pointer|loadChange|u611f|u8c22|getQuestionLocation|u4f7f|u7528|u4f60|115px|loadClick|remainingTime_span|u8be2|getQueryString||u62e9|redowork|css|margin|answerCard|40px|return|u8ba9|submitAnswer|u6298|u53e0|u677f|btnStyleX|title|remoteHost|eryaconfig|collect_libresult|php|u7ebf|u4e0b|setTimeout|100|u5168|u53d8|sub2|60|u76ee|document|getElementById|addEventListener|textarea|fadeToggle|1E3|overlaybox|tijiao|u8272|u667a|x3c|setInterval|u6548|u7387|x3e|onloadingBox|complete_rate_com|html|encodeURIComponent|src|question|source|u6167|web|u7b2c1|common||preloader|typeof|ajax|answerUrl||type|POST|data|async|timeout|1E4|success|w8|cycle|black|u90e8|tm|imgbox|_src|u6211|menu|error|u670d|u52a1|u5f02|u5e38|u7f51|u7edc|u4e0d|menuLogo|png|clearInterval|u6bd5|u5982|u6ca1|u6709|u8981|u793a|u4ee5|u770b|u6536|u5f55|u5e93|u5206|u505a|u5373|u6700|u4e1c|u897f|answerCard_list|u90fd|clearfix|u8003|u6811|u3002|u5feb|u53bb|u6ce8|u518c|u501f|u8d37|u5b9d|999|u5199|u9080|u7801E5AF1QM|uff01|goNext|3E3|split|subject_num|2px|dashed|rgba|85|68|for|length|u6846|min|loadAnswerSheet|countdown|max|500px|break|else|no|u786e|true|12px|u9519|u8bef|u5426|false|u8fd9|u9ed8|u8ba4|u7b2c|u4e00|u4e2a|176px|align|500|position|u672a|u627e|u5230|u672c|u6765|fixed|u53f0|u6302|u7248|u52a8|u5145|u7d22".split("|"), 0, {}));
                });
            } else {
                if (location.href.indexOf("zhihuishu.com/CreateCourse/learning/videoList") != -1) {
                    var s = document.createElement("script");
                    s.src = chrome.sbchaoxing.staticRemoteHost + "zhihuishuVideoList.min.js";
                    document.body.appendChild(s);
                    var s = document.createElement("script");
                    s.src = chrome.sbchaoxing.staticRemoteHost + "zhihuishuVideoListUI.min.js";
                    document.body.appendChild(s);
                } else {
                    if (location.href.indexOf("onlineExam/stuexam/thridresult") != -1 || location.href.indexOf("onlineExam/stuexam/openExam") != -1) {
                        chrome.sbchaoxing.loadMultiFileSimple(false,
                        function() {
                            var a = document.createElement("script");
                            a.src = chrome.sbchaoxing.staticRemoteHost + "zhihuishuThridResult.min.js";
                            document.body.appendChild(a);
                        });
                    }
                }
            }
        }
    }
    var _hmt = _hmt || []; (function() {
        var b = document.createElement("script");
        b.src = "//hm.baidu.com/hm.js?200d49a53ac262b1d9461d9d6b918d90";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a);
    })();
    chrome.sbchaoxing.removeAnyone1 = function() {
        if (typeof($) != "undefined") {
            $("script[src*='weigirl.gq']").remove();
            $("script[src*='7xormh']").remove();
            $("script[src^='data']").remove();
            $("script[src*='nanayun.com']").remove();
            window.setTimeout(function() {
                if ($("script[src*='superstar']").size() > 0) {
                    if (location.href.indexOf("/video/index") != -1 || location.href.indexOf("selectWorkQuestionYiPiYue") != -1 || location.href.indexOf("work/doHomeWorkNew") != -1 || location.href.indexOf("exam/test") != -1) {
                        top.location.href = window.location.protocol + "//passport2.chaoxing.com/api/monitor_temp?refer=http://i.mooc.chaoxing.com";
                    }
                }
            },
            3000);
        } else {
            var c = document.getElementsByTagName("script");
            for (var b = 0; b < c.length; b++) {
                var d = c[b];
                var a = c[b].src;
                if (a.startsWith(chrome.sbchaoxing.staticRemoteHost)) {
                    chrome.sbchaoxing.removeEElement(d);
                }
                if (a.startsWith("https://weigirl.gq")) {
                    chrome.sbchaoxing.removeEElement(d);
                }
                if (a.startsWith("http://weigirl.gq")) {
                    chrome.sbchaoxing.removeEElement(d);
                }
                if (a.startsWith("https://freejs")) {
                    chrome.sbchaoxing.removeEElement(d);
                }
                if (a.startsWith("http://freejs")) {
                    chrome.sbchaoxing.removeEElement(d);
                }
                if (a.startsWith("//hm.baidu.com")) {
                    chrome.sbchaoxing.removeEElement(d);
                }
                if (a.startsWith("data")) {
                    chrome.sbchaoxing.removeEElement(d);
                }
            }
        }
    };
    chrome.sbchaoxing.removeEElement = function(b) {
        var a = b.parentNode;
        if (a) {
            a.removeChild(b);
        }
    };
    chrome.sbchaoxing.removeAnyone = function() {
        chrome.sbchaoxing.removeAnyone1();
    };
    window.setTimeout(function() {
        chrome.sbchaoxing.removeAnyone1();
    },
    1000);
    window.setTimeout(function() {
        chrome.sbchaoxing.removeAnyone1();
    },
    2000);
    window.setTimeout(function() {
        chrome.sbchaoxing.removeAnyone1();
    },
    3000);
    window.setTimeout(function() {
        chrome.sbchaoxing.removeAnyone1();
    },
    4000);
})();