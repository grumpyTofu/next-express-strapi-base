webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./query */ "./src/components/query.js");
/* harmony import */ var _apollo_queries_sections_sections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../apollo/queries/sections/sections */ "./src/apollo/queries/sections/sections.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
    var _toolBar;

    return {
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      },
      appBar: {
        //Not clipped
        //width: `calc(100% - ${drawerWidth}px)`,
        //marginLeft: drawerWidth,
        //Clipped
        width: '100vw',
        zIndex: theme.zIndex.drawer + 1,
        //backgroundColor: '#442360',
        //Roche Blue
        //backgroundColor: '#0066C9',
        //Tableau Roche Blue
        //backgroundColor: '#004d99',
        backgroundColor: '#3785F3',
        background: 'linear-gradient(90deg, rgba(22,36,63,1) 0%, rgba(55,133,243,1) 50%, rgba(0,102,201,1) 90%)',
        border: 'none'
      },
      toolBar: (_toolBar = {
        display: 'flex'
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_toolBar, "display", 'flexbox'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_toolBar, "display", 'box'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_toolBar, "alignItems", 'flex-end'), _toolBar),
      tabContainer: {
        height: 'inherit',
        minHeight: 'inherit'
      },
      tabContainerIE: {
        height: '100%',
        minHeight: '100%'
      }
    };
  });
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "fixed"
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.toolBar
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null)), __jsx(_query__WEBPACK_IMPORTED_MODULE_15__["default"], {
    query: _apollo_queries_sections_sections__WEBPACK_IMPORTED_MODULE_16__["default"]
  }, function (_ref) {
    var sections = _ref.data.sections;
    return __jsx(TabSection, {
      data: sections
    });
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit"
  }, "Login"))));
});

var TabSection = function TabSection(props) {
  // Internet Explorer 6-11
  var isIE =
  /*@cc_on!@*/
   false || !!document.documentMode;
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
    return {
      link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
          color: 'white',
          textDecoration: 'none'
        }
      }
    };
  });
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return __jsx(AntTabs, {
    value: value,
    onChange: handleChange,
    "aria-label": "tabs"
  }, props.data.map(function (section, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/section/?section=" + section.id,
      as: "/" + section.title.toLowerCase(),
      key: section.title + "NextLink"
    }, __jsx("a", {
      className: classes.link,
      key: section.title + "Link"
    }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: section.title
    }, a11yProps(index)))));
  }));
};

var AntTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])({
  indicator: {
    height: '3px',
    backgroundColor: '#c2b6b6' //backgroundImage: 'linear-gradient(315deg, #c2b6b6 0%, #576574 74%)',        
    //borderRadius: '8px'
    // display: 'none'

  }
})(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"]);

/***/ })

})
//# sourceMappingURL=_app.js.5193d15f0267031f80d7.hot-update.js.map