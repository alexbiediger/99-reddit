(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/components/Post/images/chatbox.svg":function(e,t,o){e.exports=o.p+"43dd36a9a35596ba9c06f25dce8edb75.svg"},"./app/components/Post/index.js":function(e,t,o){"use strict";var s;o("./node_modules/react/index.js"),o("./node_modules/prop-types/index.js"),o("./app/components/Post/style.scss");function n(e,t,o,n){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var l=new Array(i),p=0;p<i;p++)l[p]=arguments[p+3];t.children=l}return{$$typeof:s,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var r=n("div",{className:"post__posted-by"}),i=function(e){var t,o,s=e.post,i=new Date(1e3*s.data.created_utc).toString().split("(")[0],a=function(e){return e>1e3?"".concat((e/1e3).toFixed(0),"k"):e};if(s.data.thumbnail.includes("http")&&(t=n("img",{className:"post__thumbnail",src:s.data.thumbnail,alt:"Post thumbnail"})),s.data.preview&&"image"===s.data.post_hint){var l=s.data.preview.images[0].resolutions.slice(-1)[0].url;o=n("img",{className:"post__preview",src:l=l.replace(/&amp;/g,"&"),alt:"Post preview"})}s.data.media&&"hosted:video"===s.data.post_hint&&(o=n("video",{controls:!0,className:"post__preview"},void 0,n("source",{src:s.data.media.reddit_video.fallback_url}),"Sorry, your browser doesn't support embedded videos."));var p=(s.data.post_hint||"").replace(":","-"),c=s.data.url.replace(/https?:\/\/(www.)?/,"");return n("div",{className:"post post_hint-".concat(p||"default")},void 0,n("aside",{className:"post__aside"},void 0,n("b",{className:"post__subreddit"},void 0,"r/",s.data.subreddit)," • Posted by"," ",s.data.author," • ",n("span",{className:"post__date"},void 0,i)),r,t,n("div",{className:"post__title"},void 0,s.data.title),n("div",{className:"post__body"},void 0,s.data.selftext),n("a",{className:"post__link",onClick:function(e){return e.stopPropagation()},href:s.data.url},void 0,c),o,n("div",{className:"post__upvotes"},void 0,n("span",{},void 0,a(s.data.score))),n("div",{className:"post__num-comments"},void 0,a(s.data.num_comments)))};o.d(t,"a",function(){return i})},"./app/components/Post/style.scss":function(e,t,o){var s=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/Post/style.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./app/components/PostItem/style.scss":function(e,t,o){var s=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/PostItem/style.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./app/components/PostsList/style.scss":function(e,t,o){var s=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/PostsList/style.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./app/containers/ListPage/index.js":function(e,t,o){"use strict";o.r(t);var s=o("./node_modules/react-redux/lib/index.js"),n=o("./node_modules/redux/lib/redux.js"),r=o("./node_modules/reselect/es/index.js"),i=o("./app/utils/injectSaga.js"),a=o("./app/containers/App/selectors.js"),l=o("./app/containers/App/actions.js"),p=o("./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.cjs.js"),c=o("./app/containers/App/constants.js"),d=o("./app/utils/request.js"),u=regeneratorRuntime.mark(f),m=regeneratorRuntime.mark(h);function f(e){var t,o,s,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e&&e.sort||"",r.next=3,Object(p.select)(Object(a.a)());case 3:return o=r.sent,s="/reddit-api/".concat(t,"/").concat(o&&"?after=".concat(o)),r.prev=5,r.next=8,Object(p.call)(d.a,s);case 8:return n=r.sent,r.next=11,Object(p.put)(Object(l.f)(n.data.children,n.data.after));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(5),r.next=17,Object(p.put)(Object(l.g)(r.t0));case 17:case"end":return r.stop()}},u,null,[[5,13]])}function h(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.takeLatest)(c.c,f);case 2:case"end":return e.stop()}},m)}var v,b=o("./node_modules/react/index.js"),g=o.n(b),_=(o("./node_modules/prop-types/index.js"),o("./node_modules/react-helmet/lib/Helmet.js")),y=o("./node_modules/react-infinite-scroller/index.js"),j=o.n(y),x=o("./app/components/LoadingIndicator/index.js"),w=o("./node_modules/react-router-dom/index.js"),S=o("./app/components/Post/index.js");o("./app/components/PostItem/style.scss");function P(e,t,o,s){v||(v="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===r)t.children=s;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:v,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var k,O=function(e){var t=e.post;return P("li",{className:"post-item"},void 0,P(w.Link,{className:"posts-list-item",to:t.data.permalink},void 0,P(S.a,{post:t})))};o("./app/components/PostsList/style.scss");function L(e,t,o,s){k||(k="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===r)t.children=s;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:k,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var E,C=L(x.a,{}),N=L("div",{className:"error"},void 0,"Something went wrong, please try again!"),R=function(e){var t,o=e.loading,s=e.error,n=e.posts;return o?C:!1!==s?N:(n&&n.length&&(t=n.map(function(e){return L(O,{post:e},"post-".concat(e.data.name))})),L("div",{className:"list-wrapper"},void 0,L("ul",{},void 0,t)))};o("./app/containers/ListPage/style.scss");function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t,o,s){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===r)t.children=s;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];t.children=a}return{$$typeof:E,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function z(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function I(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=M(_.Helmet,{},void 0,M("title",{},void 0,"Frontpage"),M("meta",{name:"description",content:"A reddit clone ListPage"})),$=M("section",{className:"centered"},void 0,M("h2",{},void 0,"Popular posts")),D=M(x.a,{},0),q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,W(t).apply(this,arguments))}var o,s,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,g.a.PureComponent),o=t,(s=[{key:"render",value:function(){var e=this.props,t=e.error,o=e.mode,s=e.posts,n=e.match,r=e.fetchPosts,i=function(){return r(n.params.sort)},a={error:t,posts:s,loadMore:i};return M("div",{},void 0,A,M("div",{className:"list-page mode-".concat(o)},void 0,$,M("section",{className:"centered"},void 0,M(j.a,{loadMore:i,pageStart:0,hasMore:!0,loader:D},void 0,g.a.createElement(R,a)))))}}])&&z(o.prototype,s),n&&z(o,n),t}();o.d(t,"mapDispatchToProps",function(){return U});var U=function(e){return{fetchPosts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log(t),e(Object(l.c)(t))}}},F=Object(r.b)({mode:Object(a.e)(),posts:Object(a.g)(),error:Object(a.c)()}),Y=Object(s.connect)(F,U),J=Object(i.a)({key:"list-page",saga:h});t.default=Object(n.compose)(J,Y)(q)},"./app/containers/ListPage/style.scss":function(e,t,o){var s=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/ListPage/style.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./app/utils/injectSaga.js":function(e,t,o){"use strict";var s=o("./node_modules/react/index.js"),n=o.n(s),r=o("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),i=o.n(r),a=o("./node_modules/react-redux/lib/index.js"),l=o("./node_modules/lodash/isEmpty.js"),p=o.n(l),c=o("./node_modules/lodash/isFunction.js"),d=o.n(c),u=o("./node_modules/lodash/isString.js"),m=o.n(u),f=o("./node_modules/invariant/browser.js"),h=o.n(f),v=o("./node_modules/lodash/conformsTo.js"),b=o.n(v),g=o("./node_modules/lodash/isObject.js"),_=o.n(g);function y(e){var t={dispatch:d.a,subscribe:d.a,getState:d.a,replaceReducer:d.a,runSaga:d.a,injectedReducers:_.a,injectedSagas:_.a};h()(b()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var j="@@saga-injector/restart-on-remount",x="@@saga-injector/daemon",w="@@saga-injector/once-till-unmount";function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){P(e,t,o[t])})}return e}function P(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var k=[j,x,w],O=function(e){return h()(m()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},L=function(e){var t={saga:d.a,mode:function(e){return m()(e)&&k.includes(e)}};h()(b()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function E(e,t){return function(o){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;t||y(e);var r=S({},s,{mode:s.mode||j}),i=r.saga,a=r.mode;O(o),L(r);var l=Reflect.has(e.injectedSagas,o);(!l||l&&a!==x&&a!==w)&&(e.injectedSagas[o]=S({},r,{task:e.runSaga(i,n)}))}}function C(e,t){return function(o){if(t||y(e),O(o),Reflect.has(e.injectedSagas,o)){var s=e.injectedSagas[o];s.mode!==x&&(s.task.cancel(),e.injectedSagas[o]="done")}}}function N(e){return y(e),{injectSaga:E(e,!0),ejectSaga:C(e,!0)}}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}t.a=function(e){var t=e.key,o=e.saga,s=e.mode;return function(e){var r=function(r){function i(e,n){var r,a,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a=this,r=!(l=M(i).call(this,e,n))||"object"!==R(l)&&"function"!=typeof l?z(a):l,W(z(r),"injectors",N(r.context.store)),r.injectors=N(n.store),r.injectors.injectSaga(t,{saga:o,mode:s},r.props),r}var a,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(i,n.a.Component),a=i,(l=[{key:"componentWillUnmount",value:function(){this.injectors.ejectSaga(t)}},{key:"render",value:function(){return n.a.createElement(e,this.props)}}])&&T(a.prototype,l),p&&T(a,p),i}();return W(r,"WrappedComponent",e),W(r,"contextType",a.ReactReduxContext),W(r,"displayName","withSaga(".concat(e.displayName||e.name||"Component",")")),i()(r,e)}}},"./app/utils/request.js":function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return r});o("./node_modules/whatwg-fetch/dist/fetch.umd.js");function s(e){return 204===e.status||205===e.status?null:e.json()}function n(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function r(t,o){return e(t,o).then(n).then(s)}}).call(this,o("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/dist/fetch.umd.js"))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/Post/style.scss":function(e,t,o){t=e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1);var s=o("./node_modules/css-loader/dist/runtime/getUrl.js")(o("./app/components/Post/images/chatbox.svg"));t.push([e.i,".post{position:relative;border-radius:4px;padding:10px 15px 10px 40px;background:var(--base-alt-bg-color);display:block;border:1px solid var(--base-border-color);text-transform:none;margin:20px 15px}.post-item .post{margin:20px 0}.post-item .post:hover{border-color:var(--base-alt-border-color)}.post__upvotes{position:absolute;top:0;left:0;font-size:14px;text-align:right;width:30px;padding-top:25px}.post__title{font-weight:bold}.post__link{display:none;color:var(--base-link-color);font-size:14px;width:40%;overflow:hidden;height:1.6em;text-overflow:ellipsis;white-space:nowrap}.post__link:hover{text-decoration:underline}.post__link:before{content:'🔗'}.post_hint-link .post__link{display:block}.post__aside{padding-left:2px;font-size:12px;color:var(--base-alt-border-color)}.post__aside b{color:var(--base-font-color)}.post__body{white-space:pre-line;font-size:13.5px;margin:7px 0}.list-wrapper .post__body{display:none}.post__num-comments{background:url("+s+") no-repeat -1px 2px;padding-left:20px;font-size:14px;color:var(--base-alt-border-color);clear:both}.post__thumbnail{border-radius:5px;border:2px solid var(--base-alt-border-color);max-height:80px}.post__preview{border-radius:6px;display:none;max-width:100%}.post__thumbnail{display:none;float:right;margin:-11px 7px 0 14px}.post_hint-link .post__thumbnail{display:block}.post_hint-image .post__preview,.post_hint-hosted-video .post__preview{max-height:400px;margin:7px auto;display:block}.list-page.mode-classic .post,.list-page.mode-compact .post{margin:0;border-radius:0px;border-bottom-width:0;font-size:12px}.list-page.mode-classic .post .post__preview,.list-page.mode-compact .post .post__preview{display:none}.list-page.mode-classic .post .post__link,.list-page.mode-compact .post .post__link{font-size:11px}.list-page.mode-classic .post .post__num-comments,.list-page.mode-compact .post .post__num-comments{font-size:11px;background-position:1px -1px}.list-page.mode-classic .post.post_hint-default .post__num-comments,.list-page.mode-compact .post.post_hint-default .post__num-comments{margin-left:-4px}.list-page.mode-classic .post-item:hover .post,.list-page.mode-compact .post-item:hover .post{border-bottom-width:1px}.list-page.mode-classic .post-item:first-child .post,.list-page.mode-compact .post-item:first-child .post{border-radius:4px 4px 0 0}.list-page.mode-classic .post{min-height:100px}.list-page.mode-classic .post__thumbnail{display:block;float:left;height:60px;width:80px;border:0;object-fit:cover;margin:3px 10px 0 2px}.list-page.mode-classic .post__num-comments{clear:none;margin-left:89px}.list-page.mode-compact .post{display:flex;flex-wrap:wrap;padding-left:60px;border-color:black}.list-page.mode-compact .post:hover{border-color:var(--base-alt-border-color)}.list-page.mode-compact .post-item:hover+.post-item .post{border-top-width:0}.list-page.mode-compact .post__upvotes{display:flex;padding:0 10px 0 0;height:100%;width:50px;justify-content:flex-end;align-items:center;background:rgba(0,0,0,0.3);border-right:1px solid var(--separator-color)}.list-page.mode-compact .post__aside{order:1;flex-basis:100%;font-size:10px}.list-page.mode-compact .post__subreddit{font-weight:normal}.list-page.mode-compact .post__thumbnail{display:none}.list-page.mode-compact .post__title{font-size:14px}.list-page.mode-compact .post__link,.list-page.mode-compact .post__title,.list-page.mode-compact .post__num-comments{display:inline-block}.list-page.mode-compact .post__link{padding-left:5px;vertical-align:bottom;width:auto;max-width:200px}@media (max-width: 576px){.post_hint-image .post__preview{margin-left:-10px}.post__date{display:block}.post__thumbnail{margin-top:10px}.list-page.mode-classic .post .post__num-comments,.list-page.mode-compact .post .post__num-comments{clear:both;margin:0 -3px;padding-top:2px;background-position:0 1px}}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/PostItem/style.scss":function(e,t,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/PostsList/style.scss":function(e,t,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".list-wrapper ul{list-style:none;margin:0;padding:0}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/ListPage/style.scss":function(e,t,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"h2{font-size:14px}.list-page{max-width:800px;margin:0 auto}.list-page.mode-classic,.list-page.mode-compact{margin:0 20px;max-width:unset}@media (max-width: 576px){.list-page{margin:0 10px}}\n",""])},"./node_modules/react-infinite-scroller/dist/InfiniteScroll.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,o,s){return o&&e(t.prototype,o),s&&e(t,s),t}}(),n=o("./node_modules/react/index.js"),r=a(n),i=a(o("./node_modules/prop-types/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.scrollListener=o.scrollListener.bind(o),o.eventListenerOptions=o.eventListenerOptions.bind(o),o.mousewheelListener=o.mousewheelListener.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),s(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(e){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,o=this.getParentElement(e),s=void 0;if(this.props.useWindow){var n=document.documentElement||document.body.parentNode||document.body,r=void 0!==t.pageYOffset?t.pageYOffset:n.scrollTop;s=this.props.isReverse?r:this.calculateOffset(e,r)}else s=this.props.isReverse?o.scrollTop:e.scrollHeight-o.scrollTop-o.clientHeight;s<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=o.scrollHeight,this.beforeScrollTop=o.scrollTop,"function"==typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),o=t.children,s=t.element,n=t.hasMore,i=(t.initialLoad,t.isReverse),a=t.loader,l=(t.loadMore,t.pageStart,t.ref),p=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var o={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s]);return o}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));p.ref=function(t){e.scrollComponent=t,l&&l(t)};var c=[o];return n&&(a?i?c.unshift(a):c.push(a):this.defaultLoader&&(i?c.unshift(this.defaultLoader):c.push(this.defaultLoader))),r.default.createElement(s,p,c)}}]),t}();l.propTypes={children:i.default.node.isRequired,element:i.default.node,hasMore:i.default.bool,initialLoad:i.default.bool,isReverse:i.default.bool,loader:i.default.node,loadMore:i.default.func.isRequired,pageStart:i.default.number,ref:i.default.func,getScrollParent:i.default.func,threshold:i.default.number,useCapture:i.default.bool,useWindow:i.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default},"./node_modules/react-infinite-scroller/index.js":function(e,t,o){e.exports=o("./node_modules/react-infinite-scroller/dist/InfiniteScroll.js")}}]);