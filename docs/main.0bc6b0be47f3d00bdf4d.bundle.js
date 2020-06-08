(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{281:function(module,exports,__webpack_require__){__webpack_require__(282),__webpack_require__(428),__webpack_require__(429),module.exports=__webpack_require__(434)},346:function(module,exports){},429:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(430)},430:function(module,exports,__webpack_require__){var api=__webpack_require__(431),content=__webpack_require__(432);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},432:function(module,exports,__webpack_require__){(exports=__webpack_require__(433)(!1)).push([module.i,".demo-1__item{width:200px;height:100px;background:#ebebeb}.demo-1__item>div{line-height:100px;background:#884236;text-align:center;color:#fff}.demo-1__btn{margin-top:10px;width:200px;padding:10px 10px;border:0;background:#66a894;color:#fff}\n",""]),module.exports=exports},434:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(280);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(615)],module)}.call(this,__webpack_require__(435)(module))},615:function(module,exports,__webpack_require__){var map={"./stories.tsx":639};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=615},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"SetDurationDifferently",(function(){return SetDurationDifferently}));var react=__webpack_require__(7),react_default=__webpack_require__.n(react),dist=__webpack_require__(47),addon_knobs_dist=__webpack_require__(71);var src=function useFader(_a){var _b=void 0===_a?{}:_a,_c=_b.initialShow,initialShow=void 0===_c||_c,_d=_b.duration,duration=void 0===_d?{show:.3,hide:.3}:_d,_e=_b.onEnter,onEnter=void 0===_e?function(){}:_e,_f=_b.onEntered,onEntered=void 0===_f?function(){}:_f,_g=_b.onExit,onExit=void 0===_g?function(){}:_g,_h=_b.onExited,onExited=void 0===_h?function(){}:_h;duration="number"==typeof duration?{show:duration,hide:duration}:duration;var _j=Object(react.useState)(initialShow),show=_j[0],setShow=_j[1],ref=Object(react.useRef)(null),timer=Object(react.useRef)(0),handleTransitionEnd=Object(react.useCallback)((function(){"1"===ref.current.style.opacity?onEntered():(ref.current.style.display="none",onExited())}),[]);return Object(react.useLayoutEffect)((function(){return ref.current.style.display=show?"block":"none",ref.current.style.opacity=show?"1":"0",ref.current.addEventListener("transitionend",handleTransitionEnd),ref.current.addEventListener("webkitTransitionEnd",handleTransitionEnd),function(){ref.current.removeEventListener("transitionend",handleTransitionEnd),ref.current.removeEventListener("webkitTransitionEnd",handleTransitionEnd)}}),[]),Object(react.useEffect)((function(){clearTimeout(timer.current),show&&"0"===ref.current.style.opacity&&(onEnter(),ref.current.style.display="block",ref.current.style.transition="opacity "+duration.show+"s linear",timer.current=setTimeout((function(){return ref.current.style.opacity="1"}),0)),show||"1"!==ref.current.style.opacity||(onExit(),ref.current.style.transition="opacity "+duration.hide+"s linear",ref.current.style.opacity="0")}),[show]),[ref,show,setShow]},addSourceDecorator=(__webpack_require__(277).withSource,__webpack_require__(277).addSource),__SOURCE_PREFIX__="/Users/uyeong/WebstormProjects/react-hooks-fader/src",__STORY__="import React, { createElement } from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { withKnobs, boolean, number, object } from '@storybook/addon-knobs';\nimport useFader from './index';\n\nexport default {\n  title: 'useFader',\n  decorators: [withKnobs],\n};\n\nexport const Default = () =>\n  createElement(() => {\n    const [ref, show, setShow] = useFader<HTMLDivElement>({\n      initialShow: boolean('initialShow', true),\n      duration: number('duration', 0.3),\n      onEnter: action('enter'),\n      onEntered: action('entered'),\n      onExit: action('exit'),\n      onExited: action('exited'),\n    });\n    function handleClick() {\n      setShow(!show);\n    }\n    return (\n      <div className=\"demo-1\">\n        <div className=\"demo-1__item\">\n          <div ref={ref}>target</div>\n        </div>\n        <button className=\"demo-1__btn\" onClick={handleClick}>\n          Click Me!\n        </button>\n      </div>\n    );\n  });\n\nexport const SetDurationDifferently = () =>\n  createElement(() => {\n    const [ref, show, setShow] = useFader<HTMLDivElement>({\n      initialShow: boolean('initialShow', true),\n      duration: object('duration', {\n        show: 0.5,\n        hide: 0.3,\n      }),\n      onEnter: action('enter'),\n      onEntered: action('entered'),\n      onExit: action('exit'),\n      onExited: action('exited'),\n    });\n    function handleClick() {\n      setShow(!show);\n    }\n    return (\n      <div className=\"demo-1\">\n        <div className=\"demo-1__item\">\n          <div ref={ref}>target</div>\n        </div>\n        <button className=\"demo-1__btn\" onClick={handleClick}>\n          Click Me!\n        </button>\n      </div>\n    );\n  });\n",__ADDS_MAP__={"usefader--default":{startLoc:{col:23,line:11},endLoc:{col:4,line:34},startBody:{col:23,line:11},endBody:{col:4,line:34}},"usefader--set-duration-differently":{startLoc:{col:38,line:36},endLoc:{col:4,line:62},startBody:{col:38,line:36},endBody:{col:4,line:62}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},Default=(__webpack_exports__.default={parameters:{storySource:{source:"import React, { createElement } from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { withKnobs, boolean, number, object } from '@storybook/addon-knobs';\nimport useFader from './index';\n\nexport default {\n  title: 'useFader',\n  decorators: [withKnobs],\n};\n\nexport const Default = () =>\n  createElement(() => {\n    const [ref, show, setShow] = useFader<HTMLDivElement>({\n      initialShow: boolean('initialShow', true),\n      duration: number('duration', 0.3),\n      onEnter: action('enter'),\n      onEntered: action('entered'),\n      onExit: action('exit'),\n      onExited: action('exited'),\n    });\n    function handleClick() {\n      setShow(!show);\n    }\n    return (\n      <div className=\"demo-1\">\n        <div className=\"demo-1__item\">\n          <div ref={ref}>target</div>\n        </div>\n        <button className=\"demo-1__btn\" onClick={handleClick}>\n          Click Me!\n        </button>\n      </div>\n    );\n  });\n\nexport const SetDurationDifferently = () =>\n  createElement(() => {\n    const [ref, show, setShow] = useFader<HTMLDivElement>({\n      initialShow: boolean('initialShow', true),\n      duration: object('duration', {\n        show: 0.5,\n        hide: 0.3,\n      }),\n      onEnter: action('enter'),\n      onEntered: action('entered'),\n      onExit: action('exit'),\n      onExited: action('exited'),\n    });\n    function handleClick() {\n      setShow(!show);\n    }\n    return (\n      <div className=\"demo-1\">\n        <div className=\"demo-1__item\">\n          <div ref={ref}>target</div>\n        </div>\n        <button className=\"demo-1__btn\" onClick={handleClick}>\n          Click Me!\n        </button>\n      </div>\n    );\n  });\n",locationsMap:{"usefader--default":{startLoc:{col:23,line:11},endLoc:{col:4,line:34},startBody:{col:23,line:11},endBody:{col:4,line:34}},"usefader--set-duration-differently":{startLoc:{col:38,line:36},endLoc:{col:4,line:62},startBody:{col:38,line:36},endBody:{col:4,line:62}}}}},title:"useFader",decorators:[addon_knobs_dist.withKnobs]},addSourceDecorator((function(){return Object(react.createElement)((function(){var _a=src({initialShow:Object(addon_knobs_dist.boolean)("initialShow",!0),duration:Object(addon_knobs_dist.number)("duration",.3),onEnter:Object(dist.action)("enter"),onEntered:Object(dist.action)("entered"),onExit:Object(dist.action)("exit"),onExited:Object(dist.action)("exited")}),ref=_a[0],show=_a[1],setShow=_a[2];return react_default.a.createElement("div",{className:"demo-1"},react_default.a.createElement("div",{className:"demo-1__item"},react_default.a.createElement("div",{ref:ref},"target")),react_default.a.createElement("button",{className:"demo-1__btn",onClick:function handleClick(){setShow(!show)}},"Click Me!"))}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})),SetDurationDifferently=addSourceDecorator((function(){return Object(react.createElement)((function(){var _a=src({initialShow:Object(addon_knobs_dist.boolean)("initialShow",!0),duration:Object(addon_knobs_dist.object)("duration",{show:.5,hide:.3}),onEnter:Object(dist.action)("enter"),onEntered:Object(dist.action)("entered"),onExit:Object(dist.action)("exit"),onExited:Object(dist.action)("exited")}),ref=_a[0],show=_a[1],setShow=_a[2];return react_default.a.createElement("div",{className:"demo-1"},react_default.a.createElement("div",{className:"demo-1__item"},react_default.a.createElement("div",{ref:ref},"target")),react_default.a.createElement("button",{className:"demo-1__btn",onClick:function handleClick(){setShow(!show)}},"Click Me!"))}))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})}},[[281,1,2]]]);
//# sourceMappingURL=main.0bc6b0be47f3d00bdf4d.bundle.js.map