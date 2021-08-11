(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=(n(200),n(26)),i=n.n(c),l=n(51),u=n(23),h=n(31),d=n(24),f=n(25),m=n(3),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h1",{className:"event-summary",children:t.summary}),Object(m.jsx)("h2",{className:"event-locations",children:t.location}),Object(m.jsxs)("h3",{className:"Event-date",children:["start: ",t.start.dateTime]}),Object(m.jsx)("h3",{children:"About event:"}),!0===this.state.show&&Object(m.jsx)("p",{className:"event-details",children:t.description}),!1===this.state.show&&Object(m.jsx)("button",{className:"showMore",onClick:function(){return e.handleButton()},children:"Show details"}),!0===this.state.show&&Object(m.jsx)("button",{className:"showLess",onClick:function(){return e.handleButton()},children:"Hide details"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:t.htmlLink,children:"See Details on Google Calendar"})]})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert",children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a.position="relative",a}return n}(b),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handledIputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"This is not the city you're looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsx)(j,{text:this.state.infoText}),Object(m.jsx)("label",{children:"Filter by City"}),Object(m.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handledIputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{className:"matchSuggestions",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{className:"seeAll",onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handelInputChanged=function(t){var n=t.target.value;if(n<1||n>32)return e.setState({infoText:"Please choose a number between 1 and 32",numberOfEvents:n});e.setState({numberOfEvents:n,infoText:""}),e.props.updateNumberOfEvents(t.target.value)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.numberOfEvents;return Object(m.jsxs)("div",{className:"NumberOfEvents",children:[Object(m.jsx)(g,{text:this.state.infoText,ClassName:"ErrorAlert"}),Object(m.jsx)("label",{children:" Number of Events"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:"EventsNumber",value:t,onChange:function(t){return e.handelInputChanged(t)}})]})}}]),n}(a.Component),x=n(18),k=n(357),S=n(364),T=n(180),E=n(93);function C(e){var t=e.events,n=Object(a.useState)([]),r=Object(x.a)(n,2),o=r[0],s=r[1],c=["#65A498","#3D314A","#684756","#96705B","#AB8476"];Object(a.useEffect)((function(){s((function(){return i()}))}),[t]);var i=function(){var e=["React","JavaScript","Node","jQuery","Angular"].map((function(e,n){var a=t.filter((function(t){return t.summary.includes(e)})).length;return{genre:e,number:a}}));return console.log(e),e};return Object(m.jsx)(k.a,{height:400,children:Object(m.jsx)(S.a,{width:300,height:300,children:Object(m.jsx)(T.a,{data:o,cx:"50%",cy:"50%",labelLine:!1,innerRadius:50,outerRadius:100,fill:"#D0ABA0",dataKey:"number",label:function(e){var t=e.genre,n=e.percent;if(n>0)return"".concat((100*n).toFixed(0),"% ").concat(t)},children:o.map((function(e,t){return Object(m.jsx)(E.a,{fill:c[t]},"cell-".concat(t))}))})})})}var N=n(189),Z=n(120),A=n.n(Z),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],I=n(77),M=n.n(I),B=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ilnvmcqam3.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,A.a.get("https://ilnvmcqam3.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&B(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return M.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),M.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return n=function(){if(window.history.pushState&&window.location.pathname)var e=window.location.protocol+"//"+window.location.host+window.history.pushState("","",e);else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},e.next=11,L();case 11:if(!(a=e.sent)){e.next=21;break}return n(),r="https://ilnvmcqam3.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+a,e.next=17,A.a.get(r);case 17:return(o=e.sent).data&&(s=q(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(s))),M.a.done(),e.abrupt("return",o.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){var t=e.map((function(e){return e.location}));return Object(N.a)(new Set(t))},R=n(361),U=n(362),F=n(185),H=n(186),_=n(78),G=n(190);n(354);var z=function(e){return e.showWelcomeScreen?Object(m.jsxs)("div",{className:"WelcomeScreen",children:[Object(m.jsx)("h1",{children:"Welcome to the Meet app"}),Object(m.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{class:"google-btn",children:[Object(m.jsx)("div",{class:"google-icon-wrapper",children:Object(m.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})}),Object(m.jsx)("a",{href:"https://tynasaur.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},P=(n(355),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentCity:"all",infoText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){D().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,J(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&D().then((function(e){o.mounted&&o.setState({events:e,locations:q(e)})})),navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"Internet connection not detected, displaying previously loaded events"});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return this.state.showWelcomeScreen?Object(m.jsx)(z,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){L()}}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Meet App"}),Object(m.jsx)("h4",{children:"Choose your nearest city"}),Object(m.jsx)(O,{updateEvents:this.updateEvents,locations:t}),Object(m.jsx)(y,{updateEvents:this.updateEvents,numberOfEvents:n}),Object(m.jsx)("h4",{children:"Events in each city"}),Object(m.jsx)(w,{text:this.state.infoText,className:"InfoAlert"}),Object(m.jsxs)("div",{className:"data-vis-wrapper",children:[Object(m.jsx)(C,{events:a}),Object(m.jsx)(k.a,{height:400,children:Object(m.jsxs)(R.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(m.jsx)(U.a,{}),Object(m.jsx)(F.a,{type:"category",dataKey:"city",name:"city"}),Object(m.jsx)(H.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(m.jsx)(_.a,{cursor:{strokeDasharray:"3 3"}}),Object(m.jsx)(G.a,{name:"Events",data:this.getData(),fill:"#8884d8"})]})})]}),Object(m.jsx)(v,{events:a})]})}}]),n}(a.Component)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))},X=n(187);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}(),K(),X.config("6867bc2838b04fcab8f243ed9917150a").install()}},[[356,1,2]]]);
//# sourceMappingURL=main.dd2c0b12.chunk.js.map