(this["webpackJsonpgatech-covid-chart"]=this["webpackJsonpgatech-covid-chart"]||[]).push([[0],{215:function(e,t,a){e.exports=a(356)},220:function(e,t,a){},221:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},222:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(165),i=a.n(c),r=(a(220),a(12)),l=(a(221),a(222),a(166)),s=a.n(l),d=a(167);a(355);var m=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){s.a.parse("https://gatech-covid-19-data.s3.amazonaws.com/gatech_covid_data.csv",{download:!0,header:!0,dynamicTyping:!0,complete:function(e,t){console.log(e),a=(a=e.data.filter((function(e){return e.date&&e.cases}))).reverse(),console.log("Found ".concat(a.length," valid rows from ").concat(a[0].date," to ").concat(a[a.length-1].date)),a=a.map((function(e){return{x:new Date(e.date),y:e.cases}})),console.log(a),c([{id:0,data:a}])}})}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Georgia Tech COVID Cases over Time"),a?o.a.createElement(d.a,{data:a,width:.8*window.innerWidth,height:.8*window.innerHeight,useMesh:!0,tooltip:function(e){var t=e.point;return console.log(t),o.a.createElement("div",null,o.a.createElement("p",{class:"tooltip-row"},t.data.xFormatted),o.a.createElement("p",{class:"tooltip-row"},t.data.y+"cases"))},enableSlices:!1,yScale:{type:"linear"},yFormat:function(e){return"a"},xFormat:"time:%Y-%m-%d",xScale:{type:"time",format:"native"},axisBottom:{legend:"Date",legendOffset:40,format:"%Y %b %d",tickValues:8,legendPosition:"middle"},axisLeft:{legend:"Cases",legendOffset:-40,legendPosition:"middle"},axisTop:null,axisRight:null,enableGridX:!1,enableGridY:!1,theme:{textColor:"#ffffff"},margin:{bottom:50,top:50,left:50,right:50}}):"Loading"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[215,1,2]]]);
//# sourceMappingURL=main.ab499c8a.chunk.js.map