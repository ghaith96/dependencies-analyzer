(window["webpackJsonppkg-depends-analyzer"]=window["webpackJsonppkg-depends-analyzer"]||[]).push([[0],{64:function(e,t,n){e.exports=n(85)},69:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(32),o=n.n(c),i=(n(69),n(63)),s=n(12),l=n.n(s),u=n(18),p=n(5),h=n(7),m=n(10),g=n(9),f=n(11),d=n(3),b=n(4),y=n(89),O=n(94),k=(r.a.Component,n(90)),j=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleTextChange=function(e){return n.setState({url:e})},n.handleAnalyzeClick=function(){return n.state.url&&n.props.handleAnalyzeClick(n.state.url)},n.state={url:""},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:E.content},r.a.createElement(k.a,{style:E.textInput,textContentType:"URL",value:this.state.url,onChangeText:this.handleTextChange,onSubmitEditing:this.handleAnalyzeClick,placeholder:"Example: https://github.com/ghaith96/dependencies-analyzer"}),r.a.createElement(O.a,{style:E.button,disabled:!this.state.url.trim(),onPress:this.handleAnalyzeClick},r.a.createElement(y.a,{style:E.buttonText},"Analyze")))}}]),t}(r.a.Component),E=b.a.create({content:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",padding:4,margin:12},textInput:{flex:.8,padding:8,fontSize:18,lineHeight:4,borderRadius:5,borderColor:"#32908F",borderWidth:1},button:{marginStart:8,padding:10,borderRadius:5,backgroundColor:"#4ECDC4"},buttonText:{color:"#F1F7EE",fontSize:18}}),w=n(91),v=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).openHomePage=function(){return n.props.pkg.homePage&&window.open(n.props.pkg.homePage,"_blank")},n.copyNameToClipboard=function(){return w.a.setString(n.props.pkg.name)},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.pkg,t=e.name,n=e.description,a=e.latestVersion;return r.a.createElement(d.a,{style:x.content},r.a.createElement(d.a,{style:x.cardHeader},r.a.createElement(O.a,{onPress:this.openHomePage,onLongPress:this.copyNameToClipboard},r.a.createElement(y.a,{style:x.pkgName},t)),r.a.createElement(y.a,{style:x.latestVersion},a)),r.a.createElement(d.a,{style:x.descriptionContent},r.a.createElement(y.a,{style:x.description},n)))}}]),t}(r.a.PureComponent),x=b.a.create({content:{justifyContent:"space-between",padding:12,margin:8,borderRadius:5,minHeight:150,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},spinnerDims:{height:150,width:300,justifyContent:"center",alignItems:"center"},cardHeader:{flexDirection:"row",justifyContent:"center",alignItems:"baseline"},pkgName:{fontSize:24,color:"#47BBB3"},latestVersion:{marginHorizontal:4,fontSize:12},descriptionContent:{flex:1,flexGrow:1,width:300,paddingTop:8,paddingStart:8},description:{fontSize:20}}),C=n(93),P=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{data:this.props.packages,contentContainerStyle:S.content,bounces:!0,renderItem:function(e){var t=e.item;return r.a.createElement(v,{key:t.name,pkg:t})}})}}]),t}(r.a.PureComponent),S=b.a.create({content:{flex:.5,flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap"}}),z=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).goToMyGithub=function(){return window.open("https://github.com/ghaith96","_blank")},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:I.content},r.a.createElement(y.a,{style:I.madeWith},"Made with ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc96")," by "),r.a.createElement(O.a,{onPress:this.goToMyGithub},r.a.createElement(y.a,{style:I.myName},"ghaith")))}}]),t}(r.a.PureComponent),I=b.a.create({content:{flexDirection:"row",justifyContent:"center",alignItems:"baseline",marginTop:8},madeWith:{fontSize:18},myName:{color:"#5475AB",fontSize:18,fontWeight:"600"}}),_=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:N.content},r.a.createElement(y.a,{style:N.header},"Dependencies Analyzer"),r.a.createElement(y.a,{style:N.description},"get fast insight into any NodeJs project on GitHub by peeking at its dependencies"))}}]),t}(r.a.PureComponent),N=b.a.create({content:{alignItems:"center"},header:{fontSize:25,color:"#47BBB3"},description:{fontSize:20,marginVertical:4,marginStart:8,color:"#1A535C"}}),T=n(92),R=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:B.content},r.a.createElement(T.a,{size:55,color:"#47BBB3"}),r.a.createElement(y.a,{style:B.percentage},this.props.percentage,"%"))}}]),t}(r.a.PureComponent),B=b.a.create({content:{flexDirection:"row",justifyContent:"center",alignItems:"center"},percentage:{fontSize:25,marginHorizontal:16}}),A=n(62),F=function(){function e(t){Object(p.a)(this,e);var n=t.name,a=t.description,r=t.homepage,c=t.keywords,o=t.license;this.name=n,this.authorName=t.author?t.author.name:"",this.description=a,this.latestVersion=t["dist-tags"].latest,this.homePage=r,this.keywords=c,this.license=o}return Object(h.a)(e,null,[{key:"fromResponse",value:function(t){return new e(t)}}]),e}(),G={GITHUB_REPO:/github\.com\/(.*?)\/(.*?)\//i,GITHUB_PACKAGE_FILE:/github\.com\/(.*)\/(.*)\/blob\/(.*)\/package.json/i,GITHUB_RAW:/raw.githubusercontent\.com\/(?:.*){4}\/package.json/i},H={WRONG_URL:"wrong url",NOT_FOUND:404,BAD_REQUEST:400},D={SOMETHING_WENT_WRONG:"if you are seeing this please feel free to open an issue in https://github.com/ghaith96/dependencies-analyzer\nthe following info might help \nerror:"},U=function(e){var t;return(t=e.match(G.GITHUB_RAW))?e:(t="".concat(e,"/").match(G.GITHUB_PACKAGE_FILE))?W(t):(t="".concat(e,"/").match(G.GITHUB_REPO))?J(t):H.WRONG_URL},W=function(e){return e.shift(),"https://raw.githubusercontent.com/".concat(e.join("/"),"/package.json")},J=function(e){return e.shift(),"https://raw.githubusercontent.com/".concat(e.join("/"),"/master/package.json")},L={getPackageInfo:function(){var e=Object(u.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/".concat(t),a={headers:{"Sec-Fetch-Mode":"cors"}},e.next=4,V(n,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getPackageFile:function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:return n=e.sent,e.abrupt("return",200===n.status?n.data:n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:return c=e.sent,a=c.status,e.next=7,c.json();case 7:r=e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a=c.status,r=e.t0;case 14:return e.abrupt("return",{status:a,data:r});case 15:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t,n){return e.apply(this,arguments)}}();function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){Object(A.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Q=function e(t){var n=this;Object(p.a)(this,e),this.getPackageInfo=function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,!(a=n._cache.getItem(t))){e.next=3;break}return e.abrupt("return",n.fromJson(a));case 3:return e.next=5,n.getPackageInfoFromApi(t);case 5:return a=e.sent,n._cache.setItem(t,n.toJson(a)),e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPackageInfoFromApi=function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._api.getPackageInfo(t);case 2:return a=e.sent,e.abrupt("return",200===a.status?F.fromResponse(a.data):K({},a,{package:t}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPackages=function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,!(a=n._cache.getItem(t))){e.next=3;break}return e.abrupt("return",n.fromJson(a));case 3:return e.next=5,n.getPackagesFromApi(t);case 5:return a=e.sent,n._cache.setItem(t,n.toJson(a)),e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPackagesFromApi=function(){var e=Object(u.a)(l.a.mark(function e(t){var a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=U(t))!==H.WRONG_URL){e.next=3;break}return e.abrupt("return",{status:a});case 3:return e.next=5,n._api.getPackageFile(a);case 5:return r=e.sent,e.abrupt("return",r.status?r:Object.keys(r.dependencies||{}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.toJson=function(e){return JSON.stringify(e)},this.fromJson=function(e){return JSON.parse(e)},this._cache=window.sessionStorage,this._api=t};Q.getInstance=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return Q._instance||(Q._instance=new Q(e))};var Y=function(e,t){return e.description?t.description?e.description.length-t.description.length:1:-1},q=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:X.content},r.a.createElement(y.a,{style:X.header},"Wrong URL format ",r.a.createElement("span",{role:"img","aria-label":"dont-know"},"\ud83e\udd37\u200d\u2642")),r.a.createElement(y.a,{style:X.description},"Check the following valid examples ",r.a.createElement("span",{role:"img","aria-label":"look-down"},"\ud83d\udc47")),r.a.createElement(d.a,{style:X.examplesContainer},r.a.createElement(y.a,{style:X.example},"\u2022 https://github.com/ghaith96/dependencies-analyzer (",r.a.createElement("em",null,"given the repository has package.json in the base folder"),")"),r.a.createElement(y.a,{style:X.example},"\u2022 https://github.com/ghaith96/dependencies-analyzer/blob/master/package.json"),r.a.createElement(y.a,{style:X.example},"\u2022 https://raw.githubusercontent.com/ghaith96/dependencies-analyzer/master/package.json")))}}]),t}(r.a.PureComponent),X=b.a.create({content:{margin:8,marginHorizontal:16},header:{fontSize:35,color:"#FF6B6B"},description:{fontSize:20,margin:4},examplesContainer:{marginStart:12,margin:4},example:{fontSize:20,marginVertical:8}}),Z=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:$.content},r.a.createElement(d.a,{style:$.headerContent},r.a.createElement(y.a,{style:$.header},"GitHub responded with "),r.a.createElement(y.a,{style:$.error},"404 NOT FOUND")),r.a.createElement(y.a,{style:$.description},"Take note of the following ",r.a.createElement("span",{role:"img","aria-label":"look-down"},"\ud83d\udc47")," while investigating ",r.a.createElement("span",{role:"img","aria-label":"investigate"},"\ud83e\uddd0")),r.a.createElement(d.a,{style:$.examplesContainer},r.a.createElement(y.a,{style:$.example},"\u2022 Make sure the repository is NodeJs project. (i.e: has ",r.a.createElement("code",null,"package.json")," file)"),r.a.createElement(y.a,{style:$.example},"\u2022 Try to submit an absolute url to the ",r.a.createElement("code",null,"package.json")," file in the repository."),r.a.createElement(y.a,{style:$.example},"\u2022 Double check the submitted URL ",r.a.createElement("span",{role:"img","aria-label":"luck"},"\ud83e\udd1e"),"."),r.a.createElement(y.a,{style:$.example},"\u2022 Private repositories are ",r.a.createElement("em",null,"NOT")," supported.")))}}]),t}(r.a.PureComponent),$=b.a.create({content:{margin:8,marginHorizontal:16},headerContent:{flexDirection:"row"},header:{fontSize:35},error:{color:"#FF6B6B",fontSize:35},description:{fontSize:20,margin:4},examplesContainer:{marginStart:12,margin:4},example:{fontSize:20,marginVertical:8}}),ee=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:te.content},r.a.createElement(y.a,{style:te.header},r.a.createElement("span",{role:"img","aria-label":"sorry"},"\ud83d\ude13")," Something went wrong somewhere.."),r.a.createElement(y.a,{style:te.description},"SORRY! This shouldn't be happening."))}}]),t}(r.a.PureComponent),te=b.a.create({content:{alignItems:"center",marginVertical:16},header:{fontSize:35,color:"#FF6B6B"},description:{marginHorizontal:8,fontSize:20,marginVertical:8}}),ne=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).getPackages=function(){var e=Object(u.a)(l.a.mark(function e(t){var a,r,c,o,i,s,u,p;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0,packages:[],error:!1}),a=Q.getInstance(),e.next=4,a.getPackages(t);case 4:if(!(r=e.sent).status){e.next=9;break}n.setState({loading:!1,error:r}),e.next=29;break;case 9:for(n.setState({packagesCount:r.length}),c=!0,o=!1,i=void 0,e.prev=13,s=r[Symbol.iterator]();!(c=(u=s.next()).done);c=!0)p=u.value,a.getPackageInfo(p).then(n.handleNewPackage,console.error);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(13),o=!0,i=e.t0;case 21:e.prev=21,e.prev=22,c||null==s.return||s.return();case 24:if(e.prev=24,!o){e.next=27;break}throw i;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}},e,null,[[13,17,21,29],[22,,24,28]])}));return function(t){return e.apply(this,arguments)}}(),n.handleNewPackage=function(e){var t=n.state.packages.length+1<n.state.packagesCount,a=[].concat(Object(i.a)(n.state.packages),[e]);a=t?a:a.sort(Y),n.setState({packages:a,loading:t})},n.state={loading:!1,error:!1,packages:[],packagesCount:0},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:ae.content},r.a.createElement(_,null),r.a.createElement(j,{handleAnalyzeClick:this.getPackages}),this.state.error?function(e){switch(e.status){case H.WRONG_URL:return r.a.createElement(q,null);case H.NOT_FOUND:return r.a.createElement(Z,null);case H.BAD_REQUEST:default:return console.log("".concat(D.SOMETHING_WENT_WRONG," ").concat(JSON.stringify(e))),r.a.createElement(ee,null)}}(this.state.error):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{packages:this.state.packages,loading:this.state.loading}),this.state.loading&&r.a.createElement(R,{percentage:Math.floor(this.state.packages.length/this.state.packagesCount*100)||0})),r.a.createElement(z,null))}}]),t}(r.a.Component),ae=b.a.create({content:{margin:8,justifyContent:"space-between"}});o.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.2d2e10f0.chunk.js.map