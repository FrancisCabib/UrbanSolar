(()=>{var e,t={60:(e,t,o)=>{"use strict";const a=window.wp.i18n,n=window.wp.hooks,r=window.wp.data,c=window.wp.element,l=window.wp.primitives,i=(0,c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(l.Path,{d:"m21.5 9.1-6.6-6.6-4.2 5.6c-1.2-.1-2.4.1-3.6.7-.1 0-.1.1-.2.1-.5.3-.9.6-1.2.9l3.7 3.7-5.7 5.7v1.1h1.1l5.7-5.7 3.7 3.7c.4-.4.7-.8.9-1.2.1-.1.1-.2.2-.3.6-1.1.8-2.4.6-3.6l5.6-4.1zm-7.3 3.5.1.9c.1.9 0 1.8-.4 2.6l-6-6c.8-.4 1.7-.5 2.6-.4l.9.1L15 4.9 19.1 9l-4.9 3.6z"})),s=window.wp.components;var p=o(184),u=o.n(p);const m=window.wp.blockEditor,_=(0,c.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,c.createElement)(l.Path,{d:"M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"})),y=function({icon:e,size:t=24,...o}){return(0,c.cloneElement)(e,{width:t,height:t,...o})},d=(0,c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(l.Path,{d:"M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"}));function h(e){var t=e.htmlTag,o=e.htmlAttrs,a=e.children;return(0,c.createElement)(t,o,a)}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},b.apply(this,arguments)}function v(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var a=o.call(e,"string");if("object"!==f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,n,_x,r,c=[],_n=!0,l=!1;try{if(_x=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;_n=!1}else for(;!(_n=(a=_x.call(o)).done)&&(c.push(a.value),c.length!==t);_n=!0);}catch(e){l=!0,n=e}finally{try{if(!_n&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(l)throw n}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}const E=function(e){var t=k((0,c.useState)(!1),2),o=t[0],n=t[1],l=k((0,c.useState)(!1),2),i=l[0],p=l[1],f=(0,r.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("meta")||{}})),g=(0,r.useDispatch)("core/editor"),E=function(){n(!0!==o)},R=React.createElement("div",{className:"ocean-component-color-picker__header--button"},!o&&React.createElement("div",{className:"components-color-palette__item-wrapper components-circular-option-picker__option-wrapper"},React.createElement(s.Tooltip,{text:(0,a.__)("Select Color","ocean-extra")},React.createElement("button",{type:"button",className:"components-color-palette__item components-circular-option-picker__option",onClick:E,"aria-expanded":o,"aria-label":(0,a.__)("Color picker","ocean-extra"),style:{color:f[e.colorKey]?f[e.colorKey]:"transparent"}},React.createElement("span",{className:"components-color-palette__custom-color-gradient"})))),o&&React.createElement("div",{className:"components-color-palette__item-wrapper components-circular-option-picker__option-wrapper"},React.createElement(s.Tooltip,{text:(0,a.__)("Select Color","ocean-extra")},React.createElement("button",{type:"button",className:"components-color-palette__item components-circular-option-picker__option",onClick:E,"aria-expanded":o,"aria-label":(0,a.__)("Color picker","ocean-extra"),style:{color:f[e.colorKey]?f[e.colorKey]:"transparent"}},React.createElement("span",{className:"components-color-palette__custom-color-gradient"}))))),w={className:u()({"ocean-component-color-picker--wrapper":!0,"ocean-component-color-picker__popover":"popup"===e.style,"ocean-component-color-picker__inline":"inline"===e.style}),position:"popup"===e.style?"top left":"",onClose:"popup"===e.style?E:""};return React.createElement(s.BaseControl,{className:u()("ocean-component-color-picker","popup"===e.style?"ocean-has-popup":"ocean-has-inline")},React.createElement("div",{className:"ocean-component-color-picker__header"},e.label&&React.createElement("div",{className:"ocean-component-color-picker__label ocean-component-label"},React.createElement("span",{className:"color-picker__label--text ocean-component-label--text"},e.label)),"inline"===e.style&&R),React.createElement("div",{className:"ocean-component-color-picker__container"},"popup"===e.style&&R,o&&React.createElement(React.Fragment,null,React.createElement(h,{htmlTag:"popup"===e.style?s.Popover:"div",htmlAttrs:w},React.createElement(s.BaseControl,{className:"ocean-component-color-picker__palette"},React.createElement(m.ColorPalette,{colors:[{name:"hot-pink",color:"#FB6B90"},{name:"fuchsia",color:"#FB4570"},{name:"teal",color:"#29A0B1"},{name:"spearmint",color:"#98D7C2"},{name:"yellow",color:"#FAD02C"},{name:"misty-blue",color:"#2F5061"},{name:"white",color:"#EFEBE0"}],value:f[e.colorKey],onChange:function(t){g.editPost({meta:v({},e.colorKey,t)}),p(t)},disableCustomColors:!0,clearable:!1})),React.createElement(s.BaseControl,{key:i},React.createElement(s.ColorPicker,b({key:i,color:f[e.colorKey]?f[e.colorKey]:"",onChangeComplete:function(t){g.editPost({meta:v({},e.colorKey,t.hex)})}},e.alphaColor))),e.alpha&&React.createElement("div",{className:"ocean-color-picker__alpha"},React.createElement("div",{className:"ocean-color-picker__alpha--label"},(0,a.__)("Opacity","ocean-extra")),React.createElement("div",{className:"ocean-color-picker__alpha--input"},React.createElement(s.Tooltip,{text:(0,a.__)("Opacity","ocean-extra")},React.createElement(s.Dashicon,{icon:_})),React.createElement(s.RangeControl,{value:f[e.opacity]?f[e.opacity]:0,onChange:function(t){g.editPost({meta:v({},e.opacity,t)})},min:0,max:1,step:.01,initialPosition:1}))),React.createElement("div",{className:"ocean-component-settings__reset"},React.createElement("div",{className:"ocean-component-settings__reset-label"},React.createElement("span",{className:"title-text"},(0,a.__)("Reset Color","ocean-extra"))),React.createElement("div",{className:"components-circular-option-reset__button"},React.createElement(s.Tooltip,{text:(0,a.__)("Reset Color","ocean-extra")},React.createElement(s.Button,{className:"components-circular-button-icon",onClick:function(){e.alpha&&g.editPost({meta:v({},e.opacity,1)}),g.editPost({meta:v({},e.colorKey,"")}),p(!1)},"aria-label":(0,a.__)("Reset color","ocean-extra")},React.createElement(y,{icon:d})))))))))};function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function w(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var a=o.call(e,"string");if("object"!==R(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===R(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const C=function(e){var t=(0,r.useSelect)((function(t){var o=t("core/editor").getEditedPostAttribute("meta")[e.metaKey],a="",n=t("core").getMedia(o);return n&&(a=n),{imageId:o,image:a}})),o=t.imageId,n=t.image,c=(0,r.useDispatch)("core/editor",[o]).editPost,l=function(){c({meta:w({},e.metaKey,0)})};return React.createElement(s.BaseControl,{label:e.label,className:"ocean-image-picker"},React.createElement(m.MediaUploadCheck,null,React.createElement(m.MediaUpload,{onSelect:function(t){c({meta:w({},e.metaKey,t.id)})},allowedTypes:["image"],value:o,render:function(e){var t=e.open;return React.createElement("div",null,!!n&&React.createElement("img",{src:n.source_url}),React.createElement(s.ButtonGroup,null,React.createElement(s.Button,{variant:"secondary",onClick:t},n?(0,a.__)("Replace","ocean-extra"):(0,a.__)("Add Image","ocean-extra")),!!n&&React.createElement(s.Button,{variant:"secondary",onClick:l,isDestructive:!0},(0,a.__)("Remove","ocean-extra"))))}})))};function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}var x=function(){var e=(0,r.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("meta")||{}})),t=(0,r.useDispatch)("core/editor"),o=[];return o=(0,n.applyFilters)("oceanwp.postSetting.stickyHeader.controls",o),React.createElement("div",{className:"ocean-post-settings-container"},React.createElement("div",{className:"settings-sticky-header"},React.createElement(s.BaseControl,null,React.createElement(s.ButtonGroup,{className:"ocean-component-button-group"},React.createElement("div",{className:"ocean-component-button-group--label ocean-component-label"},(0,a.__)("Sticky Top Bar","ocean-sticky-header")),React.createElement("div",{className:"ocean-component-button-group__buttons"},React.createElement(s.Button,{variant:"default"===e.osh_disable_topbar_sticky?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_disable_topbar_sticky:"default"}})}},(0,a.__)("Default","ocean-sticky-header")),React.createElement(s.Button,{variant:"off"===e.osh_disable_topbar_sticky?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_disable_topbar_sticky:"off"}})}},(0,a.__)("Disable","ocean-sticky-header"))))),React.createElement(s.BaseControl,null,React.createElement(s.ButtonGroup,{className:"ocean-component-button-group"},React.createElement("div",{className:"ocean-component-button-group--label ocean-component-label"},(0,a.__)("Sticky Header","ocean-sticky-header")),React.createElement("div",{className:"ocean-component-button-group__buttons"},React.createElement(s.Button,{variant:"default"===e.osh_disable_header_sticky?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_disable_header_sticky:"default"}})}},(0,a.__)("Default","ocean-sticky-header")),React.createElement(s.Button,{variant:"off"===e.osh_disable_header_sticky?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_disable_header_sticky:"off"}})}},(0,a.__)("Disable","ocean-sticky-header"))))),React.createElement(s.BaseControl,null,React.createElement(s.ButtonGroup,{className:"ocean-component-button-group"},React.createElement("div",{className:"ocean-component-button-group--label ocean-component-label"},(0,a.__)("Sticky Style","ocean-sticky-header")),React.createElement("div",{className:"ocean-component-button-group__buttons"},React.createElement(s.Button,{variant:"default"===e.osh_sticky_header_style?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_sticky_header_style:"default"}})}},(0,a.__)("Default","ocean-sticky-header")),React.createElement(s.Button,{variant:"shrink"===e.osh_sticky_header_style?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_sticky_header_style:"shrink"}})}},(0,a.__)("Shrink","ocean-sticky-header")),React.createElement(s.Button,{variant:"fixed"===e.osh_sticky_header_style?"primary":"secondary",onClick:function(){t.editPost({meta:{osh_sticky_header_style:"fixed"}})}},(0,a.__)("Fixed","ocean-sticky-header"))))),React.createElement(s.SelectControl,{key:"osh_sticky_header_effect",label:(0,a.__)("Sticky Effect","ocean-sticky-header"),value:e.osh_sticky_header_effect,onChange:function(e){t.editPost({meta:{osh_sticky_header_effect:e}})},options:[{value:"",label:(0,a.__)("No Effect","ocean-sticky-header")},{value:"slide",label:(0,a.__)("Slide","ocean-sticky-header")},{value:"up",label:(0,a.__)("Show Up/Hide Down","ocean-sticky-header")}]}),React.createElement(C,{metaKey:"osh_custom_sticky_logo",label:(0,a.__)("Logo","ocean-sticky-header")}),React.createElement(C,{metaKey:"osh_custom_retina_sticky_logo",label:(0,a.__)("Retina Logo","ocean-sticky-header")}),React.createElement(s.RangeControl,{key:"osh_custom_sticky_logo_height",label:(0,a.__)("Logo Height On Sticky (px)","ocean-sticky-header"),value:e.osh_custom_sticky_logo_height,onChange:function(e){t.editPost({meta:{osh_custom_sticky_logo_height:e}})},min:0,max:600,step:1}),React.createElement(E,{label:(0,a.__)("Background Color","ocean-sticky-header"),style:"popup",colorKey:"osh_background_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Links Color","ocean-sticky-header"),style:"popup",colorKey:"osh_links_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Links Color: Hover","ocean-sticky-header"),style:"popup",colorKey:"osh_links_hover_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Links Color: Active","ocean-sticky-header"),style:"popup",colorKey:"osh_links_active_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Links Background Color","ocean-sticky-header"),style:"popup",colorKey:"osh_links_bg_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Links Background Color: Hover","ocean-sticky-header"),style:"popup",colorKey:"osh_links_hover_bg_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Links Background Color: Active","ocean-sticky-header"),style:"popup",colorKey:"osh_links_active_bg_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Simple Social Links Color","ocean-sticky-header"),style:"popup",colorKey:"osh_menu_social_links_color",alpha:!1,alphaColor:"enableAlpha"}),React.createElement(E,{label:(0,a.__)("Simple Social Links Color: Hover","ocean-sticky-header"),style:"popup",colorKey:"osh_menu_social_hover_links_color",alpha:!1,alphaColor:"enableAlpha"})),o&&Object.entries(o).map((function(e){var t,o,a=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,n,_x,r,c=[],_n=!0,l=!1;try{if(_x=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;_n=!1}else for(;!(_n=(a=_x.call(o)).done)&&(c.push(a.value),c.length!==t);_n=!0);}catch(e){l=!0,n=e}finally{try{if(!_n&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(l)throw n}}return c}}(t,o)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?S(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=a[0],r=a[1];return React.createElement("div",{key:n,className:r.class},r.content)})),(0,n.doAction)("oceanwp.postSetting.stickyHeader.registeredControls",o))};(0,n.addFilter)("oceanwp.postSetting.registerModule","oceanwp.postSetting.module",(function(e){return e.stickyHeader={title:"Sticky Header",class:"ocean-setting-sticky-header",panelClass:"ocean-setting-panel is-addon",initialOpen:!1,icon:i,priority:110,category:"addon",postType:"all",content:React.createElement(x,null)},e}))},184:(e,t)=>{var o;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var c=n.apply(null,o);c&&e.push(c)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var l in o)a.call(o,l)&&o[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,o,n,r)=>{if(!o){var c=1/0;for(p=0;p<e.length;p++){o=e[p][0],n=e[p][1],r=e[p][2];for(var l=!0,i=0;i<o.length;i++)(!1&r||c>=r)&&Object.keys(a.O).every((e=>a.O[e](o[i])))?o.splice(i--,1):(l=!1,r<c&&(c=r));if(l){e.splice(p--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={665:0,101:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,c=o[0],l=o[1],i=o[2],s=0;if(c.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var p=i(a)}for(t&&t(o);s<c.length;s++)r=c[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(p)},o=self.webpackChunkocean_sticky_header=self.webpackChunkocean_sticky_header||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=a.O(void 0,[101],(()=>a(60)));n=a.O(n)})();