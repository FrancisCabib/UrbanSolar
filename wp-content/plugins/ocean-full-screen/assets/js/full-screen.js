(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _settings = /*#__PURE__*/new WeakMap();
var OW_Base = /*#__PURE__*/function () {
  function OW_Base() {
    _classCallCheck(this, OW_Base);
    _classPrivateFieldInitSpec(this, _settings, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "elements", void 0);
    this.onInit();
    this.bindEvents();
  }
  _createClass(OW_Base, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {};
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      return {};
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _classPrivateFieldSet(this, _settings, this.getDefaultSettings());
      this.elements = this.getDefaultElements();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "getSettings",
    value: function getSettings() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!!key) {
        return _classPrivateFieldGet(this, _settings)[key];
      }
      return _classPrivateFieldGet(this, _settings);
    }
  }, {
    key: "setSettings",
    value: function setSettings() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!settings) {
        return;
      }
      _classPrivateFieldSet(this, _settings, Object.assign(_classPrivateFieldGet(this, _settings), settings));
    }
  }]);
  return OW_Base;
}();
var _default = OW_Base;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _base = _interopRequireDefault(require("./base/base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var OW_FullScreen = /*#__PURE__*/function (_OW_Base) {
  _inherits(OW_FullScreen, _OW_Base);
  var _super = _createSuper(OW_FullScreen);
  function OW_FullScreen() {
    _classCallCheck(this, OW_FullScreen);
    return _super.apply(this, arguments);
  }
  _createClass(OW_FullScreen, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          sectionsWrapper: elementorFrontend.config.experimentalFeatures.e_dom_optimization ? "#oceanwp-fullpage .elementor" : "#oceanwp-fullpage .elementor-section-wrap",
          sections: elementorFrontend.config.experimentalFeatures.e_dom_optimization ? "#oceanwp-fullpage .elementor > .elementor-section" : "#oceanwp-fullpage .elementor-section-wrap > .elementor-section",
          topSections: "#oceanwp-fullpage .elementor-top-section"
        },
        options: oceanwpLocalize
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings("selectors");
      return {
        sectionsWrapper: document.querySelector(selectors.sectionsWrapper),
        sections: document.querySelectorAll(selectors.sections),
        topSections: document.querySelectorAll(selectors.topSections),
        body: document.body
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _get(_getPrototypeOf(OW_FullScreen.prototype), "onInit", this).call(this);
      if (this.isElementorEditorPage()) {
        return;
      }
      this.wrapSections();
      this.initFullPage();
    }
  }, {
    key: "wrapSections",
    value: function wrapSections() {
      this.elements.sections.forEach(function (section) {
        var sectionWrapperId = "#".concat(section.id);
        section.removeAttribute("id");
        section.outerHTML = "<div id=\"".concat(sectionWrapperId, "\" class=\"wrap-section\">").concat(section.outerHTML, "</div>");
      });
    }
  }, {
    key: "initFullPage",
    value: function initFullPage() {
      var selectors = this.getSettings("selectors");
      new fullpage(selectors.sectionsWrapper, this.getFullPageOptions());
    }
  }, {
    key: "getFullPageOptions",
    value: function getFullPageOptions() {
      var self = this;
      var options = this.getSettings("options");
      var selectors = this.getSettings("selectors");
      var sections = document.querySelectorAll("".concat(selectors.sectionsWrapper, " > .wrap-section"));
      var fullPageOptions = {
        licenseKey: "2802F989-785845A8-B0E376B6-EA1BD751",
        sectionSelector: ".wrap-section",
        scrollOverflow: true,
        v2compatible: true,
        onLeave: function onLeave(index, nextIndex, direction) {
          var nextSection = sections[nextIndex - 1];
          if (direction === "down" || direction === "up") {
            self.setFullPageNavColor(nextSection);
          }
        },
        afterLoad: function afterLoad(anchorLink, index) {
          var nextSection = this;
          if (nextSection.classList.contains("active")) {
            self.setFullPageNavColor(nextSection);
          }
        }
      };

      // Scrolling speed
      if (("0" != options.ofcSpeed || "700" != options.ofcSpeed) && "" != options.ofcSpeed) {
        fullPageOptions.scrollingSpeed = options.ofcSpeed;
      }

      // Responsive
      if ("0" != options.ofcRes && "" != options.ofcRes) {
        fullPageOptions.responsiveWidth = options.ofcRes;
      }

      // If navigation
      if ("enable" == options.ofcNav) {
        // Tooltip
        var navTooltips = [];
        sections.forEach(function (topSection) {
          var sectionID = topSection.id.replace("#", "");
          if (sectionID) {
            sectionID = sectionID.replace(/[\-_]/g, " ");
            navTooltips.push(sectionID);
          } else {
            navTooltips.push(" ");
          }
        });

        // Anchors
        var anchors = [];
        document.querySelectorAll('.menu-item a[href*="#"]:not([href="#"])').forEach(function (navLink) {
          var href = navLink.getAttribute("href").replace("#", "");
          if (anchors.indexOf(href) < 0) {
            anchors.push(href);
          }
        });

        // Settings
        fullPageOptions.menu = "#fp-nav";
        fullPageOptions.anchors = anchors;
        fullPageOptions.navigation = true;
        fullPageOptions.navigationPosition = options.ofcNavPos;
        fullPageOptions.navigationTooltips = navTooltips;
      }
      return fullPageOptions;
    }
  }, {
    key: "setFullPageNavColor",
    value: function setFullPageNavColor(section) {
      var _iterator = _createForOfIteratorHelper(section.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sectionChild = _step.value;
          this.elements.body.classList.remove("ofc-light-nav");
          this.elements.body.classList.remove("ofc-dark-nav");
          var children = sectionChild.children;
          var lightSection = Array.from(children).some(function (_ref) {
            var classList = _ref.classList;
            return classList.contains("elementor-top-section") && classList.contains("light");
          });
          if (lightSection) {
            this.elements.body.classList.add("ofc-light-nav");
            break;
          }
          var darkSection = Array.from(children).some(function (_ref2) {
            var classList = _ref2.classList;
            return classList.contains("elementor-top-section") && classList.contains("dark");
          });
          if (darkSection) {
            this.elements.body.classList.add("ofc-dark-nav");
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "isElementorEditorPage",
    value: function isElementorEditorPage() {
      return this.elements.body.classList.contains("elementor-editor-active");
    }
  }]);
  return OW_FullScreen;
}(_base["default"]);
"use script";
window.addEventListener("DOMContentLoaded", function () {
  new OW_FullScreen();
});

},{"./base/base":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvZnVsbC1zY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTSxPQUFPO0VBSVQsU0FBQSxRQUFBLEVBQWM7SUFBQSxlQUFBLE9BQUEsT0FBQTtJQUFBLDBCQUFBLE9BQUEsU0FBQTtNQUFBLFFBQUE7TUFBQSxLQUFBO0lBQUE7SUFBQSxlQUFBO0lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCO0VBQUMsWUFBQSxDQUFBLE9BQUE7SUFBQSxHQUFBO0lBQUEsS0FBQSxFQUVELFNBQUEsbUJBQUEsRUFBcUI7TUFDakIsT0FBTyxDQUFDLENBQUM7SUFDYjtFQUFDO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFFRCxTQUFBLG1CQUFBLEVBQXFCO01BQ2pCLE9BQU8sQ0FBQyxDQUFDO0lBQ2I7RUFBQztJQUFBLEdBQUE7SUFBQSxLQUFBLEVBRUQsU0FBQSxPQUFBLEVBQVM7TUFDTCxxQkFBQSxLQUFJLEVBQUEsU0FBQSxFQUFhLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO01BQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0M7RUFBQztJQUFBLEdBQUE7SUFBQSxLQUFBLEVBRUQsU0FBQSxXQUFBLEVBQWEsQ0FBQztFQUFDO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFFZixTQUFBLFlBQUEsRUFBd0I7TUFBQSxJQUFaLEdBQUcsR0FBQSxTQUFBLENBQUEsTUFBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxNQUFHLElBQUk7TUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ1AsT0FBTyxxQkFBQSxLQUFJLEVBQUEsU0FB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QSxJQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsSUFBQTtBQUFBLFNBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsVUFBQSxRQUFBLFlBQUEsV0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLE1BQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLFdBQUEsVUFBQSxDQUFBLFlBQUEsd0JBQUEsVUFBQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLEdBQUEsVUFBQTtBQUFBLFNBQUEsYUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsUUFBQSxVQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEsT0FBQSxXQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsV0FBQSxpQkFBQSxRQUFBLG1CQUFBLFdBQUE7QUFBQSxTQUFBLGVBQUEsR0FBQSxRQUFBLEdBQUEsR0FBQSxZQUFBLENBQUEsR0FBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUE7QUFBQSxTQUFBLGFBQUEsS0FBQSxFQUFBLElBQUEsUUFBQSxPQUFBLENBQUEsS0FBQSxrQkFBQSxLQUFBLGtCQUFBLEtBQUEsTUFBQSxJQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLE9BQUEsSUFBQSxLQUFBLFNBQUEsUUFBQSxHQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSx1QkFBQSxHQUFBLFlBQUEsU0FBQSw0REFBQSxJQUFBLGdCQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsS0FBQTtBQUFBLFNBQUEsS0FBQSxlQUFBLE9BQUEsb0JBQUEsT0FBQSxDQUFBLEdBQUEsSUFBQSxJQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLGFBQUEsSUFBQSxZQUFBLEtBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLFFBQUEsSUFBQSxHQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxRQUFBLElBQUEsY0FBQSxJQUFBLEdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsSUFBQSxFQUFBLFFBQUEsT0FBQSxJQUFBLENBQUEsR0FBQSxXQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLE9BQUEsTUFBQSxHQUFBLFFBQUEsWUFBQSxJQUFBLENBQUEsS0FBQSxjQUFBLElBQUEsQ0FBQSxLQUFBLE9BQUEsU0FBQTtBQUFBLFNBQUEsZUFBQSxNQUFBLEVBQUEsUUFBQSxZQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxLQUFBLE1BQUEsR0FBQSxlQUFBLENBQUEsTUFBQSxPQUFBLE1BQUEsMkJBQUEsTUFBQTtBQUFBLFNBQUEsVUFBQSxRQUFBLEVBQUEsVUFBQSxlQUFBLFVBQUEsbUJBQUEsVUFBQSx1QkFBQSxTQUFBLDBEQUFBLFFBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLElBQUEsVUFBQSxDQUFBLFNBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLFFBQUEsWUFBQSxhQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsUUFBQSxpQkFBQSxRQUFBLGdCQUFBLFVBQUEsRUFBQSxlQUFBLENBQUEsUUFBQSxFQUFBLFVBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGNBQUEsZ0JBQUEsQ0FB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QUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUM7SUFDekU7RUFBQztFQUFBLE9BQUEsYUFBQTtBQUFBLEVBakt5QixnQkFBTztBQW9LbEMsWUFBWTtBQUNiLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQUksYUFBYSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgT1dfQmFzZSB7XG4gICAgI3NldHRpbmdzO1xuICAgIGVsZW1lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRTZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MgPSB0aGlzLmdldERlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5nZXREZWZhdWx0RWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge31cblxuICAgIGdldFNldHRpbmdzKGtleSA9IG51bGwpIHtcbiAgICAgICAgaWYgKCEha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3Nba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiNzZXR0aW5ncztcbiAgICB9XG5cbiAgICBzZXRTZXR0aW5ncyhzZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLiNzZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dfQmFzZTtcbiIsImltcG9ydCBPV19CYXNlIGZyb20gXCIuL2Jhc2UvYmFzZVwiO1xuXG5jbGFzcyBPV19GdWxsU2NyZWVuIGV4dGVuZHMgT1dfQmFzZSB7XG4gIGdldERlZmF1bHRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIHNlY3Rpb25zV3JhcHBlcjogZWxlbWVudG9yRnJvbnRlbmQuY29uZmlnLmV4cGVyaW1lbnRhbEZlYXR1cmVzLmVfZG9tX29wdGltaXphdGlvbiA/IFwiI29jZWFud3AtZnVsbHBhZ2UgLmVsZW1lbnRvclwiIDogIFwiI29jZWFud3AtZnVsbHBhZ2UgLmVsZW1lbnRvci1zZWN0aW9uLXdyYXBcIixcbiAgICAgICAgc2VjdGlvbnM6IGVsZW1lbnRvckZyb250ZW5kLmNvbmZpZy5leHBlcmltZW50YWxGZWF0dXJlcy5lX2RvbV9vcHRpbWl6YXRpb24gPyBcIiNvY2VhbndwLWZ1bGxwYWdlIC5lbGVtZW50b3IgPiAuZWxlbWVudG9yLXNlY3Rpb25cIiA6IFwiI29jZWFud3AtZnVsbHBhZ2UgLmVsZW1lbnRvci1zZWN0aW9uLXdyYXAgPiAuZWxlbWVudG9yLXNlY3Rpb25cIixcbiAgICAgICAgdG9wU2VjdGlvbnM6IFwiI29jZWFud3AtZnVsbHBhZ2UgLmVsZW1lbnRvci10b3Atc2VjdGlvblwiLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IG9jZWFud3BMb2NhbGl6ZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJzZWxlY3RvcnNcIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbnNXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5zZWN0aW9uc1dyYXBwZXIpLFxuICAgICAgc2VjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnNlY3Rpb25zKSxcbiAgICAgIHRvcFNlY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy50b3BTZWN0aW9ucyksXG4gICAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxuICAgIH07XG4gIH1cblxuICBvbkluaXQoKSB7XG4gICAgc3VwZXIub25Jbml0KCk7XG5cbiAgICBpZiAodGhpcy5pc0VsZW1lbnRvckVkaXRvclBhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMud3JhcFNlY3Rpb25zKCk7XG4gICAgdGhpcy5pbml0RnVsbFBhZ2UoKTtcbiAgfVxuXG4gIHdyYXBTZWN0aW9ucygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLnNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uV3JhcHBlcklkID0gYCMke3NlY3Rpb24uaWR9YDtcbiAgICAgIHNlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICBzZWN0aW9uLm91dGVySFRNTCA9IGA8ZGl2IGlkPVwiJHtzZWN0aW9uV3JhcHBlcklkfVwiIGNsYXNzPVwid3JhcC1zZWN0aW9uXCI+JHtzZWN0aW9uLm91dGVySFRNTH08L2Rpdj5gO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEZ1bGxQYWdlKCkge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJzZWxlY3RvcnNcIik7XG5cbiAgICBuZXcgZnVsbHBhZ2Uoc2VsZWN0b3JzLnNlY3Rpb25zV3JhcHBlciwgdGhpcy5nZXRGdWxsUGFnZU9wdGlvbnMoKSk7XG4gIH1cblxuICBnZXRGdWxsUGFnZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJvcHRpb25zXCIpO1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJzZWxlY3RvcnNcIik7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYCR7c2VsZWN0b3JzLnNlY3Rpb25zV3JhcHBlcn0gPiAud3JhcC1zZWN0aW9uYFxuICAgICk7XG5cbiAgICBjb25zdCBmdWxsUGFnZU9wdGlvbnMgPSB7XG4gICAgICBsaWNlbnNlS2V5OiBcIjI4MDJGOTg5LTc4NTg0NUE4LUIwRTM3NkI2LUVBMUJENzUxXCIsXG4gICAgICBzZWN0aW9uU2VsZWN0b3I6IFwiLndyYXAtc2VjdGlvblwiLFxuICAgICAgc2Nyb2xsT3ZlcmZsb3c6IHRydWUsXG4gICAgICB2MmNvbXBhdGlibGU6IHRydWUsXG4gICAgICBvbkxlYXZlOiAoaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRTZWN0aW9uID0gc2VjdGlvbnNbbmV4dEluZGV4IC0gMV07XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgfHwgZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgICBzZWxmLnNldEZ1bGxQYWdlTmF2Q29sb3IobmV4dFNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbiAoYW5jaG9yTGluaywgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgbmV4dFNlY3Rpb24gPSB0aGlzO1xuXG4gICAgICAgIGlmIChuZXh0U2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICBzZWxmLnNldEZ1bGxQYWdlTmF2Q29sb3IobmV4dFNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyBTY3JvbGxpbmcgc3BlZWRcbiAgICBpZiAoXG4gICAgICAoXCIwXCIgIT0gb3B0aW9ucy5vZmNTcGVlZCB8fCBcIjcwMFwiICE9IG9wdGlvbnMub2ZjU3BlZWQpICYmXG4gICAgICBcIlwiICE9IG9wdGlvbnMub2ZjU3BlZWRcbiAgICApIHtcbiAgICAgIGZ1bGxQYWdlT3B0aW9ucy5zY3JvbGxpbmdTcGVlZCA9IG9wdGlvbnMub2ZjU3BlZWQ7XG4gICAgfVxuXG4gICAgLy8gUmVzcG9uc2l2ZVxuICAgIGlmIChcIjBcIiAhPSBvcHRpb25zLm9mY1JlcyAmJiBcIlwiICE9IG9wdGlvbnMub2ZjUmVzKSB7XG4gICAgICBmdWxsUGFnZU9wdGlvbnMucmVzcG9uc2l2ZVdpZHRoID0gb3B0aW9ucy5vZmNSZXM7XG4gICAgfVxuXG4gICAgLy8gSWYgbmF2aWdhdGlvblxuICAgIGlmIChcImVuYWJsZVwiID09IG9wdGlvbnMub2ZjTmF2KSB7XG4gICAgICAvLyBUb29sdGlwXG4gICAgICB2YXIgbmF2VG9vbHRpcHMgPSBbXTtcblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCh0b3BTZWN0aW9uID0+IHtcbiAgICAgICAgbGV0IHNlY3Rpb25JRCA9IHRvcFNlY3Rpb24uaWQucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgICAgICAgaWYgKHNlY3Rpb25JRCkge1xuICAgICAgICAgIHNlY3Rpb25JRCA9IHNlY3Rpb25JRC5yZXBsYWNlKC9bXFwtX10vZywgXCIgXCIpO1xuICAgICAgICAgIG5hdlRvb2x0aXBzLnB1c2goc2VjdGlvbklEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYXZUb29sdGlwcy5wdXNoKFwiIFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFuY2hvcnNcbiAgICAgIGNvbnN0IGFuY2hvcnMgPSBbXTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJylcbiAgICAgICAgLmZvckVhY2gobmF2TGluayA9PiB7XG4gICAgICAgICAgY29uc3QgaHJlZiA9IG5hdkxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICAgICAgICBpZiAoYW5jaG9ycy5pbmRleE9mKGhyZWYpIDwgMCkge1xuICAgICAgICAgICAgYW5jaG9ycy5wdXNoKGhyZWYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIFNldHRpbmdzXG4gICAgICBmdWxsUGFnZU9wdGlvbnMubWVudSA9IFwiI2ZwLW5hdlwiO1xuICAgICAgZnVsbFBhZ2VPcHRpb25zLmFuY2hvcnMgPSBhbmNob3JzO1xuICAgICAgZnVsbFBhZ2VPcHRpb25zLm5hdmlnYXRpb24gPSB0cnVlO1xuICAgICAgZnVsbFBhZ2VPcHRpb25zLm5hdmlnYXRpb25Qb3NpdGlvbiA9IG9wdGlvbnMub2ZjTmF2UG9zO1xuICAgICAgZnVsbFBhZ2VPcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwcyA9IG5hdlRvb2x0aXBzO1xuICAgIH1cblxuICAgIHJldHVybiBmdWxsUGFnZU9wdGlvbnM7XG4gIH1cblxuICBzZXRGdWxsUGFnZU5hdkNvbG9yKHNlY3Rpb24pIHtcbiAgICBmb3IgKGNvbnN0IHNlY3Rpb25DaGlsZCBvZiBzZWN0aW9uLmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm9mYy1saWdodC1uYXZcIik7XG4gICAgICB0aGlzLmVsZW1lbnRzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm9mYy1kYXJrLW5hdlwiKTtcblxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWN0aW9uQ2hpbGQuY2hpbGRyZW47XG5cbiAgICAgIGNvbnN0IGxpZ2h0U2VjdGlvbiA9IEFycmF5LmZyb20oY2hpbGRyZW4pLnNvbWUoXG4gICAgICAgICh7IGNsYXNzTGlzdCB9KSA9PlxuICAgICAgICAgIGNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRvci10b3Atc2VjdGlvblwiKSAmJlxuICAgICAgICAgIGNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0XCIpXG4gICAgICApO1xuXG4gICAgICBpZiAobGlnaHRTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuYm9keS5jbGFzc0xpc3QuYWRkKFwib2ZjLWxpZ2h0LW5hdlwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhcmtTZWN0aW9uID0gQXJyYXkuZnJvbShjaGlsZHJlbikuc29tZShcbiAgICAgICAgKHsgY2xhc3NMaXN0IH0pID0+XG4gICAgICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWxlbWVudG9yLXRvcC1zZWN0aW9uXCIpICYmXG4gICAgICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKVxuICAgICAgKTtcblxuICAgICAgaWYgKGRhcmtTZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuYm9keS5jbGFzc0xpc3QuYWRkKFwib2ZjLWRhcmstbmF2XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0VsZW1lbnRvckVkaXRvclBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50b3ItZWRpdG9yLWFjdGl2ZVwiKTtcbiAgfVxufVxuXG4oXCJ1c2Ugc2NyaXB0XCIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IE9XX0Z1bGxTY3JlZW4oKTtcbn0pO1xuIl19
