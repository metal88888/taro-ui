(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"171":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=(_interopRequireDefault(r(1)),_interopRequireDefault(r(0))),o=r(45),i=_interopRequireDefault(r(46)),l=_interopRequireDefault(r(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(172);var u={"large":"large","normal":"normal","small":"small"},c=function(e){function AtAvatar(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtAvatar);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtAvatar.__proto__||Object.getPrototypeOf(AtAvatar)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtAvatar,l.default),n(AtAvatar,[{"key":"onClick","value":function onClick(){}},{"key":"render","value":function render(){var e=this.props,t=e.size,r=e.circle,n=e.image,i=e.text,l=["at-avatar"],c=u[t]||"",s=r?"at-avatar--circle":"";l.push("at-avatar--"+c,s),l=l.filter(function(e){return""!==e});var f=void 0;return i&&(f=i[0]),a.default.createElement(o.View,{"className":l},n?a.default.createElement(o.Image,{"className":"at-avatar__img","src":n}):a.default.createElement(o.Text,{"className":"at-avatar__text"},f))}}]),AtAvatar}();t.default=c,c.defaultProps={"size":"normal","circle":!1,"image":""},c.propTypes={"size":i.default.oneOf(["large","normal","small"]),"circle":i.default.bool,"image":i.default.string}},"172":function(e,t,r){},"174":function(e,t,r){},"19":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=(_interopRequireDefault(r(1)),_interopRequireDefault(r(0))),o=r(45),i=_interopRequireDefault(r(171)),l=_interopRequireDefault(r(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(174);var u=function(e){function AvatarPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AvatarPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AvatarPage.__proto__||Object.getPrototypeOf(AvatarPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AvatarPage,a.default.Component),n(AvatarPage,[{"key":"onClick","value":function onClick(){console.log(arguments)}},{"key":"render","value":function render(){var e="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg";return a.default.createElement(o.View,{"className":"page"},a.default.createElement(l.default,{"title":"Avatar 头像"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"圆形头像"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"circle":!0,"size":"small","image":e})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"circle":!0,"image":e})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"circle":!0,"size":"large","image":e}))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"圆角矩形头像"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"size":"small","image":e})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"image":e})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"size":"large","image":e}))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"圆形头像（支持文本）"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"circle":!0,"size":"small","text":"凹"})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"circle":!0,"text":"凹"})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"circle":!0,"size":"large","text":"凹"}))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"圆角矩形头像（支持文本）"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"size":"small","text":"凹"})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"text":"凹"})),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"size":"large","text":"凹"})))))))}}]),AvatarPage}();t.default=u},"46":function(e,t,r){e.exports=r(51)()},"47":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(1),o=(_interopRequireDefault(a),_interopRequireDefault(r(0)),_interopRequireDefault(r(50)));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a.Component),n(AtComponent,[{"key":"isFunction","value":function isFunction(){return o.default.apply(void 0,arguments)}}]),AtComponent}();i.options={"addGlobalClass":!0},t.default=i},"48":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(1),o=(_interopRequireDefault(a),_interopRequireDefault(r(0))),i=_interopRequireDefault(r(46)),l=r(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(53);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"49":function(e,t,r){var n=r(57).Symbol;e.exports=n},"50":function(e,t,r){var n=r(55),a=r(56),o="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=function isFunction(e){if(!a(e))return!1;var t=n(e);return t==i||t==l||t==o||t==u}},"51":function(e,t,r){"use strict";var n=r(52);function emptyFunction(){}e.exports=function(){function shim(e,t,r,a,o,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"52":function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,r){},"55":function(e,t,r){var n=r(49),a=r(59),o=r(60),i="[object Null]",l="[object Undefined]",u=n?n.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?l:i:u&&u in Object(e)?a(e):o(e)}},"56":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"57":function(e,t,r){var n=r(58),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},"58":function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(2))},"59":function(e,t,r){var n=r(49),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=n?n.toStringTag:void 0;e.exports=function getRawTag(e){var t=o.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(e){}var a=i.call(e);return n&&(t?e[l]=r:delete e[l]),a}},"60":function(e,t){var r=Object.prototype.toString;e.exports=function objectToString(e){return r.call(e)}}}]);