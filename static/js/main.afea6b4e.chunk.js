(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,function(_,e,t){"use strict";t(12),t(13);var a=t(0),l=function(_){var e="";return Object(a.jsx)("input",{type:"button",value:_.value,className:"box",onClick:function(t){e=t.target.value,_.getVal(e)}})};e.a=function(_){function e(e){_.getClick(e)}return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(l,{value:_.value1,getVal:e}),Object(a.jsx)(l,{value:_.value2,getVal:e}),Object(a.jsx)(l,{value:_.value3,getVal:e}),Object(a.jsx)(l,{value:_.value4,getVal:e})]})}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var F_internship_js_React_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Components_row__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_calculator_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_calculator_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_calculator_css__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function Calculator(){var textField="",_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(F_internship_js_React_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),output=_useState2[0],setOutput=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(textField),_useState4=Object(F_internship_js_React_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),fieldValue=_useState4[0],setfieldValue=_useState4[1];function getClickVal(clickVal){"="===clickVal?(fieldValue=eval(fieldValue),setOutput(fieldValue)):"c"===clickVal?(fieldValue=fieldValue.slice(0,-1),setfieldValue(fieldValue)):"CE"===clickVal?(setfieldValue(""),setOutput("")):setfieldValue(fieldValue+clickVal)}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"text",value:output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"text",value:fieldValue}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_row__WEBPACK_IMPORTED_MODULE_2__.a,{value1:"CE",value2:"c",value3:"=",value4:"/",getClick:getClickVal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_row__WEBPACK_IMPORTED_MODULE_2__.a,{value1:"7",value2:"8",value3:"9",value4:"*",getClick:getClickVal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_row__WEBPACK_IMPORTED_MODULE_2__.a,{value1:"4",value2:"5",value3:"6",value4:"-",getClick:getClickVal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_row__WEBPACK_IMPORTED_MODULE_2__.a,{value1:"1",value2:"2",value3:"3",value4:"+",getClick:getClickVal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_row__WEBPACK_IMPORTED_MODULE_2__.a,{value1:"00",value2:"0",value3:".",value4:"%",getClick:getClickVal})]})}__webpack_exports__.a=Calculator},function(_,e,t){"use strict";t.r(e);t(1);var a=t(5),l=t.n(a),u=t(6),c=(t(16),t(0));function r(){return Object(c.jsx)(u.a,{})}l.a.render(Object(c.jsx)(r,{}),document.querySelector("#root"))},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){},function(_,e,t){}],[[7,1,2]]]);
//# sourceMappingURL=main.afea6b4e.chunk.js.map