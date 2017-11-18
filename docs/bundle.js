webpackJsonp([0],{11:function(e,t){e.exports={fps:"fps__3_fry","server-uptime":"server-uptime__8O2D-",serverUptime:"server-uptime__8O2D-",days:"days__3GYW0","uptime-day":"uptime-day__2cWoC",uptimeDay:"uptime-day__2cWoC","uptime-day-status":"uptime-day-status__2yYQr",uptimeDayStatus:"uptime-day-status__2yYQr",hover:"hover__26_Yw","day-up":"day-up__3mKRO",dayUp:"day-up__3mKRO","day-down":"day-down__ltqXm",dayDown:"day-down__ltqXm"}},14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(7),a=r(4),i=r(6),p=r(11),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),Object.defineProperty(t.prototype,"up",{get:function(){return this.props.days.get(this.props.day)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"className",{get:function(){return p.uptimeDayStatus+" "+(this.up?p.dayUp:p.dayDown)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this.up?"Servers operational!":"Red alert!"},enumerable:!0,configurable:!0}),t.prototype.render=function(){return n.createElement("div",{className:p.uptimeDay},n.createElement("span",{className:this.className}),n.createElement("span",{className:p.hover},this.props.day,": ",this.title))},c([a.computed,u("design:type",Object),u("design:paramtypes",[])],t.prototype,"up",null),c([a.computed,u("design:type",Object),u("design:paramtypes",[])],t.prototype,"className",null),c([a.computed,u("design:type",Object),u("design:paramtypes",[])],t.prototype,"title",null),t=c([i.observer],t)}(n.Component),f=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.render=function(){var e=this;return n.createElement("div",{className:p.serverUptime},n.createElement("h1",null,this.props.name),n.createElement(_,{days:this.props.days}),n.createElement("div",{className:p.days},this.props.days.keys().map(function(t){return n.createElement(y,{key:t,days:e.props.days,day:t})})))},t=l([i.observer],t)}(n.Component),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),Object.defineProperty(t.prototype,"upDays",{get:function(){var e=0;return this.props.days.forEach(function(t){return e+=t?1:0}),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"biggestStreak",{get:function(){var e=0,t=0;return this.props.days.forEach(function(r){r?e++:(e>t&&(t=e),e=0)}),e>t&&(t=e),t},enumerable:!0,configurable:!0}),t.prototype.render=function(){return n.createElement("div",null,n.createElement("h2",null,this.upDays," Days Up"),n.createElement("h2",null,"Biggest Streak: ",this.biggestStreak))},l([a.computed,d("design:type",Object),d("design:paramtypes",[])],t.prototype,"upDays",null),l([a.computed,d("design:type",Object),d("design:paramtypes",[])],t.prototype,"biggestStreak",null),t=l([i.observer],t)}(n.Component),h=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},b=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=location.search.match(/max=(\d+)/);g=g&&g[1]||364;var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.servers=t.generateServers(),t.animationFrameRequestId=0,t.requestFrame=function(){t.animationFrameRequestId=requestAnimationFrame(t.onFrame)},t.onFrame=function(){t.generateServers(t.servers),t.requestFrame()},t}return h(t,e),t.prototype.generateServers=function(e){return e=e||a.observable.map(),this.generateServer(e,"Stefan's Server"),this.generateServer(e,"Godfrey's Server"),this.generateServer(e,"Yehuda's Server"),e},t.prototype.componentDidMount=function(){this.requestFrame()},t.prototype.componentWillUnmount=function(){cancelAnimationFrame(this.animationFrameRequestId)},t.prototype.generateServer=function(e,t){var r=e.get(t);r||(r=a.observable.map(),e.set(t,r));for(var n=0;n<=g;n++){var o=Math.random()>.2;r.set(n,o)}},t.prototype.render=function(){return n.createElement("div",null,this.servers.entries().map(function(e){var t=e[0],r=e[1];return n.createElement(m,{key:t,name:t,days:r})}))},v([a.observable,b("design:type",Object)],t.prototype,"servers",void 0),v([a.action,b("design:type",Function),b("design:paramtypes",[Object]),b("design:returntype",void 0)],t.prototype,"generateServers",null),t=v([i.observer],t)}(n.Component);o.render(n.createElement(O,null),document.getElementById("root"))}},[14]);