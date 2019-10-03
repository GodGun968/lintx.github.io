/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/Buff.js":
/*!************************!*\
  !*** ./src/js/Buff.js ***!
  \************************/
/*! exports provided: Buff, Buffs, BuffRange, BuffSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buff", function() { return Buff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffs", function() { return Buffs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuffRange", function() { return BuffRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuffSource", function() { return BuffSource; });
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/js/Building.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Buff = function Buff(range, target, buff) {
  _classCallCheck(this, Buff);

  this.range = range;
  this.target = target;
  this.buff = buff;
};

var BuffRange = {
  Global: "所有建筑",
  Online: "在线",
  Offline: "离线",
  Supply: "供货",
  Residence: "住宅建筑",
  Business: "商业建筑",
  Industrial: "工业建筑",
  Targets: "特定建筑物"
};
var BuffSource = {
  Building: "建筑加成",
  Policy: "政策加成",
  Photo: "游记加成",
  Quest: "任务加成"
};

var Buffs =
/*#__PURE__*/
function () {
  function Buffs() {
    _classCallCheck(this, Buffs);

    this.Building = []; //建筑加成

    this.Policy = []; //政策加成

    this.Photo = []; //游记加成

    this.Quest = []; //任务加成
  }

  _createClass(Buffs, [{
    key: "add",
    value: function add(source, buff) {
      var b = new Buff(buff.range, buff.target, buff.buff / 100);

      switch (source) {
        case BuffSource.Policy:
          this.Policy.push(b);
          break;

        case BuffSource.Photo:
          this.Photo.push(b);
          break;

        case BuffSource.Quest:
          this.Quest.push(b);
          break;
      }
    }
  }, {
    key: "addQuest",
    value: function addQuest(target) {
      var b = new Buff(BuffRange.Targets, target.BuildingName, target.quest / 100);
      this.Quest.push(b);
    }
  }, {
    key: "addBuilding",
    value: function addBuilding(building) {
      var _this = this;

      building.buffs.forEach(function (buff) {
        _this.Building.push(new Buff(buff.range, buff.target, building.getBuffValue(buff)));
      });
    }
  }, {
    key: "Calculation",
    value: function Calculation(source, building) {
      var result = {};
      result[BuffRange.Online] = 1;
      result[BuffRange.Offline] = 1;
      var buffs;

      switch (source) {
        case BuffSource.Building:
          buffs = this.Building;
          break;

        case BuffSource.Policy:
          buffs = this.Policy;
          break;

        case BuffSource.Photo:
          buffs = this.Photo;
          break;

        case BuffSource.Quest:
          buffs = this.Quest;
          break;

        default:
          return result;
      }

      buffs.forEach(function (buff) {
        switch (buff.range) {
          case BuffRange.Global:
            result[BuffRange.Online] += buff.buff;
            result[BuffRange.Offline] += buff.buff;
            break;

          case BuffRange.Online:
            result[BuffRange.Online] += buff.buff;
            break;

          case BuffRange.Offline:
            result[BuffRange.Offline] += buff.buff;
            break;

          case BuffRange.Business:
            if (building.BuildingType === _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

            break;

          case BuffRange.Residence:
            if (building.BuildingType === _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

            break;

          case BuffRange.Industrial:
            if (building.BuildingType === _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

            break;

          case BuffRange.Targets:
            if (buff.target === building.BuildingName) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

        }
      });
      return result;
    }
  }, {
    key: "supplyBuff",
    get: function get() {
      var b = 0;
      [this.Building, this.Policy, this.Photo, this.Quest].forEach(function (buffs) {
        buffs.forEach(function (buff) {
          if (buff.range === BuffRange.Supply) {
            b += buff.buff;
          }
        });
      });
      return b;
    }
  }]);

  return Buffs;
}();



/***/ }),

/***/ "./src/js/Building.js":
/*!****************************!*\
  !*** ./src/js/Building.js ***!
  \****************************/
/*! exports provided: Building, BuildingRarity, BuildingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRarity", function() { return BuildingRarity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingType", function() { return BuildingType; });
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buff */ "./src/js/Buff.js");
/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Level */ "./src/js/Level.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Building =
/*#__PURE__*/
function () {
  function Building(name, rarity, type, baseMoney) {
    _classCallCheck(this, Building);

    this.disabled = false;
    this.level = 1;
    this.star = 0;
    this.quest = 0;
    this.buffs = []; //建筑加成

    this.BuildingName = name;
    this.rarity = rarity;
    this.BuildingType = type;
    this.baseMoney = baseMoney;
  }

  _createClass(Building, [{
    key: "calculation",
    value: function calculation(buffs) {
      var _this = this;

      var addition = {};
      var money = this.money;
      addition[_Buff__WEBPACK_IMPORTED_MODULE_0__["BuffRange"].Online] = money;
      addition[_Buff__WEBPACK_IMPORTED_MODULE_0__["BuffRange"].Offline] = money / 2;
      [_Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Building, _Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Policy, _Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Photo, _Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Quest].forEach(function (source) {
        var buff = buffs.Calculation(source, _this);
        Object.keys(buff).forEach(function (range) {
          addition[range] *= buff[range];
        });
      });
      return addition;
    }
  }, {
    key: "getBuffValue",
    value: function getBuffValue(buff) {
      return buff.buff * this.star;
    }
  }, {
    key: "money",
    get: function get() {
      return this.baseMoney * this.multiple * Object(_Level__WEBPACK_IMPORTED_MODULE_1__["getIncome"])(this.level); //这里需要按等级计算，这是基础金钱收益
    }
  }, {
    key: "multiple",
    get: function get() {
      switch (this.star) {
        case 1:
          return 1;

        case 2:
          return 2;

        case 3:
          return 6;

        case 4:
          return 24;

        case 5:
          return 120;

        default:
          return 1;
      }
    }
  }]);

  return Building;
}();

var BuildingRarity = {
  Common: "普通",
  Rare: "稀有",
  Legendary: "史诗"
};
var BuildingType = {
  Residence: "住宅",
  Business: "商业",
  Industrial: "工业"
};


/***/ }),

/***/ "./src/js/Builds/BookCity.js":
/*!***********************************!*\
  !*** ./src/js/Builds/BookCity.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _School__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./School */ "./src/js/Builds/School.js");
/* harmony import */ var _PaperMill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaperMill */ "./src/js/Builds/PaperMill.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BookCity =
/*#__PURE__*/
function (_Building) {
  _inherits(BookCity, _Building);

  function BookCity() {
    _classCallCheck(this, BookCity);

    return _possibleConstructorReturn(this, _getPrototypeOf(BookCity).call(this, "图书城", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(BookCity, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_3__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_3__["BuffRange"].Targets, new _School__WEBPACK_IMPORTED_MODULE_1__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_3__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_3__["BuffRange"].Targets, new _PaperMill__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return BookCity;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCity);

/***/ }),

/***/ "./src/js/Builds/Bungalow.js":
/*!***********************************!*\
  !*** ./src/js/Builds/Bungalow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Bungalow =
/*#__PURE__*/
function (_Building) {
  _inherits(Bungalow, _Building);

  function Bungalow() {
    _classCallCheck(this, Bungalow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bungalow).call(this, "平房", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.1));
  }

  _createClass(Bungalow, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, 0.2));
    }
  }]);

  return Bungalow;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (Bungalow);

/***/ }),

/***/ "./src/js/Builds/BusinessCenter.js":
/*!*****************************************!*\
  !*** ./src/js/Builds/BusinessCenter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _GardenHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GardenHouse */ "./src/js/Builds/GardenHouse.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BusinessCenter =
/*#__PURE__*/
function (_Building) {
  _inherits(BusinessCenter, _Building);

  function BusinessCenter() {
    _classCallCheck(this, BusinessCenter);

    return _possibleConstructorReturn(this, _getPrototypeOf(BusinessCenter).call(this, "商贸中心", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.022));
  }

  _createClass(BusinessCenter, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _GardenHouse__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.1));
    }
  }]);

  return BusinessCenter;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (BusinessCenter);

/***/ }),

/***/ "./src/js/Builds/Chalet.js":
/*!*********************************!*\
  !*** ./src/js/Builds/Chalet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _WoodFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WoodFactory */ "./src/js/Builds/WoodFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Chalet =
/*#__PURE__*/
function (_Building) {
  _inherits(Chalet, _Building);

  function Chalet() {
    _classCallCheck(this, Chalet);

    return _possibleConstructorReturn(this, _getPrototypeOf(Chalet).call(this, "木屋", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1));
  }

  _createClass(Chalet, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _WoodFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return Chalet;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (Chalet);

/***/ }),

/***/ "./src/js/Builds/ChineseSmallBuilding.js":
/*!***********************************************!*\
  !*** ./src/js/Builds/ChineseSmallBuilding.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ChineseSmallBuilding =
/*#__PURE__*/
function (_Building) {
  _inherits(ChineseSmallBuilding, _Building);

  function ChineseSmallBuilding() {
    _classCallCheck(this, ChineseSmallBuilding);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChineseSmallBuilding).call(this, "中式小楼", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.4));
  }

  _createClass(ChineseSmallBuilding, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, 0.15));
    }
  }]);

  return ChineseSmallBuilding;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (ChineseSmallBuilding);

/***/ }),

/***/ "./src/js/Builds/ClothingStore.js":
/*!****************************************!*\
  !*** ./src/js/Builds/ClothingStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _TextileMill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextileMill */ "./src/js/Builds/TextileMill.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ClothingStore =
/*#__PURE__*/
function (_Building) {
  _inherits(ClothingStore, _Building);

  function ClothingStore() {
    _classCallCheck(this, ClothingStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClothingStore).call(this, "服装店", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(ClothingStore, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _TextileMill__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return ClothingStore;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (ClothingStore);

/***/ }),

/***/ "./src/js/Builds/ConvenienceStore.js":
/*!*******************************************!*\
  !*** ./src/js/Builds/ConvenienceStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _Residential__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Residential */ "./src/js/Builds/Residential.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ConvenienceStore =
/*#__PURE__*/
function (_Building) {
  _inherits(ConvenienceStore, _Building);

  function ConvenienceStore() {
    _classCallCheck(this, ConvenienceStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConvenienceStore).call(this, "便利店", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(ConvenienceStore, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _Residential__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return ConvenienceStore;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (ConvenienceStore);

/***/ }),

/***/ "./src/js/Builds/FolkFood.js":
/*!***********************************!*\
  !*** ./src/js/Builds/FolkFood.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _SkyVilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkyVilla */ "./src/js/Builds/SkyVilla.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FolkFood =
/*#__PURE__*/
function (_Building) {
  _inherits(FolkFood, _Building);

  function FolkFood() {
    _classCallCheck(this, FolkFood);

    return _possibleConstructorReturn(this, _getPrototypeOf(FolkFood).call(this, "民食斋", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.52));
  }

  _createClass(FolkFood, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _SkyVilla__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
    }
  }]);

  return FolkFood;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (FolkFood);

/***/ }),

/***/ "./src/js/Builds/FoodFactory.js":
/*!**************************************!*\
  !*** ./src/js/Builds/FoodFactory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VegetableMarket */ "./src/js/Builds/VegetableMarket.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FoodFactory =
/*#__PURE__*/
function (_Building) {
  _inherits(FoodFactory, _Building);

  function FoodFactory() {
    _classCallCheck(this, FoodFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(FoodFactory).call(this, "食品厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(FoodFactory, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return FoodFactory;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (FoodFactory);

/***/ }),

/***/ "./src/js/Builds/GardenHouse.js":
/*!**************************************!*\
  !*** ./src/js/Builds/GardenHouse.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _BusinessCenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BusinessCenter */ "./src/js/Builds/BusinessCenter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GardenHouse =
/*#__PURE__*/
function (_Building) {
  _inherits(GardenHouse, _Building);

  function GardenHouse() {
    _classCallCheck(this, GardenHouse);

    return _possibleConstructorReturn(this, _getPrototypeOf(GardenHouse).call(this, "花园洋房", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.022));
  }

  _createClass(GardenHouse, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _BusinessCenter__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.1));
    }
  }]);

  return GardenHouse;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (GardenHouse);

/***/ }),

/***/ "./src/js/Builds/GasStation.js":
/*!*************************************!*\
  !*** ./src/js/Builds/GasStation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _PeoplesOil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeoplesOil */ "./src/js/Builds/PeoplesOil.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GasStation =
/*#__PURE__*/
function (_Building) {
  _inherits(GasStation, _Building);

  function GasStation() {
    _classCallCheck(this, GasStation);

    return _possibleConstructorReturn(this, _getPrototypeOf(GasStation).call(this, "加油站", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.204));
  }

  _createClass(GasStation, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _PeoplesOil__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 0.5));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
    }
  }]);

  return GasStation;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (GasStation);

/***/ }),

/***/ "./src/js/Builds/HardwareStore.js":
/*!****************************************!*\
  !*** ./src/js/Builds/HardwareStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _PartsFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartsFactory */ "./src/js/Builds/PartsFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HardwareStore =
/*#__PURE__*/
function (_Building) {
  _inherits(HardwareStore, _Building);

  function HardwareStore() {
    _classCallCheck(this, HardwareStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(HardwareStore).call(this, "五金店", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(HardwareStore, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _PartsFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return HardwareStore;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (HardwareStore);

/***/ }),

/***/ "./src/js/Builds/MediaVoice.js":
/*!*************************************!*\
  !*** ./src/js/Builds/MediaVoice.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MediaVoice =
/*#__PURE__*/
function (_Building) {
  _inherits(MediaVoice, _Building);

  function MediaVoice() {
    _classCallCheck(this, MediaVoice);

    return _possibleConstructorReturn(this, _getPrototypeOf(MediaVoice).call(this, "媒体之声", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.615));
  }

  _createClass(MediaVoice, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, 0.05));
    }
  }]);

  return MediaVoice;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (MediaVoice);

/***/ }),

/***/ "./src/js/Builds/PaperMill.js":
/*!************************************!*\
  !*** ./src/js/Builds/PaperMill.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _BookCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCity */ "./src/js/Builds/BookCity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PaperMill =
/*#__PURE__*/
function (_Building) {
  _inherits(PaperMill, _Building);

  function PaperMill() {
    _classCallCheck(this, PaperMill);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaperMill).call(this, "造纸厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(PaperMill, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _BookCity__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return PaperMill;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PaperMill);

/***/ }),

/***/ "./src/js/Builds/PartsFactory.js":
/*!***************************************!*\
  !*** ./src/js/Builds/PartsFactory.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _HardwareStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HardwareStore */ "./src/js/Builds/HardwareStore.js");
/* harmony import */ var _TencentMachinery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TencentMachinery */ "./src/js/Builds/TencentMachinery.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PartsFactory =
/*#__PURE__*/
function (_Building) {
  _inherits(PartsFactory, _Building);

  function PartsFactory() {
    _classCallCheck(this, PartsFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartsFactory).call(this, "零件厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(PartsFactory, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _HardwareStore__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _TencentMachinery__WEBPACK_IMPORTED_MODULE_3__["default"]().BuildingName, 0.5));
    }
  }]);

  return PartsFactory;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PartsFactory);

/***/ }),

/***/ "./src/js/Builds/PeoplesOil.js":
/*!*************************************!*\
  !*** ./src/js/Builds/PeoplesOil.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _GasStation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GasStation */ "./src/js/Builds/GasStation.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PeoplesOil =
/*#__PURE__*/
function (_Building) {
  _inherits(PeoplesOil, _Building);

  function PeoplesOil() {
    _classCallCheck(this, PeoplesOil);

    return _possibleConstructorReturn(this, _getPrototypeOf(PeoplesOil).call(this, "人民石油", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(PeoplesOil, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _GasStation__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
    }
  }]);

  return PeoplesOil;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PeoplesOil);

/***/ }),

/***/ "./src/js/Builds/PowerPlant.js":
/*!*************************************!*\
  !*** ./src/js/Builds/PowerPlant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PowerPlant =
/*#__PURE__*/
function (_Building) {
  _inherits(PowerPlant, _Building);

  function PowerPlant() {
    _classCallCheck(this, PowerPlant);

    return _possibleConstructorReturn(this, _getPrototypeOf(PowerPlant).call(this, "电厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1.18));
  }

  _createClass(PowerPlant, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.3)); //电厂buff比较特殊，是0.2/0.5/0.8/1.1/1.4
    }
  }, {
    key: "getBuffValue",
    value: function getBuffValue(buff) {
      return _get(_getPrototypeOf(PowerPlant.prototype), "getBuffValue", this).call(this, buff) - 0.1;
    }
  }]);

  return PowerPlant;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PowerPlant);

/***/ }),

/***/ "./src/js/Builds/Residential.js":
/*!**************************************!*\
  !*** ./src/js/Builds/Residential.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _ConvenienceStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConvenienceStore */ "./src/js/Builds/ConvenienceStore.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Residential =
/*#__PURE__*/
function (_Building) {
  _inherits(Residential, _Building);

  function Residential() {
    _classCallCheck(this, Residential);

    return _possibleConstructorReturn(this, _getPrototypeOf(Residential).call(this, "居民楼", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1));
  }

  _createClass(Residential, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _ConvenienceStore__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return Residential;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (Residential);

/***/ }),

/***/ "./src/js/Builds/RevivalMansion.js":
/*!*****************************************!*\
  !*** ./src/js/Builds/RevivalMansion.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RevivalMansion =
/*#__PURE__*/
function (_Building) {
  _inherits(RevivalMansion, _Building);

  function RevivalMansion() {
    _classCallCheck(this, RevivalMansion);

    return _possibleConstructorReturn(this, _getPrototypeOf(RevivalMansion).call(this, "复兴公馆", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.672));
  }

  _createClass(RevivalMansion, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.1));
    }
  }]);

  return RevivalMansion;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (RevivalMansion);

/***/ }),

/***/ "./src/js/Builds/School.js":
/*!*********************************!*\
  !*** ./src/js/Builds/School.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _BookCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCity */ "./src/js/Builds/BookCity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var School =
/*#__PURE__*/
function (_Building) {
  _inherits(School, _Building);

  function School() {
    _classCallCheck(this, School);

    return _possibleConstructorReturn(this, _getPrototypeOf(School).call(this, "学校", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(School, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _BookCity__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return School;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (School);

/***/ }),

/***/ "./src/js/Builds/SkyVilla.js":
/*!***********************************!*\
  !*** ./src/js/Builds/SkyVilla.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _FolkFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolkFood */ "./src/js/Builds/FolkFood.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SkyVilla =
/*#__PURE__*/
function (_Building) {
  _inherits(SkyVilla, _Building);

  function SkyVilla() {
    _classCallCheck(this, SkyVilla);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkyVilla).call(this, "空中别墅", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.52));
  }

  _createClass(SkyVilla, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _FolkFood__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
    }
  }]);

  return SkyVilla;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SkyVilla);

/***/ }),

/***/ "./src/js/Builds/SmallApartment.js":
/*!*****************************************!*\
  !*** ./src/js/Builds/SmallApartment.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SmallApartment =
/*#__PURE__*/
function (_Building) {
  _inherits(SmallApartment, _Building);

  function SmallApartment() {
    _classCallCheck(this, SmallApartment);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallApartment).call(this, "小型公寓", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.18));
  }

  _createClass(SmallApartment, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.15));
    }
  }, {
    key: "getBuffValue",
    value: function getBuffValue(buff) {
      //TODO:这里的公式可能有错误
      return _get(_getPrototypeOf(SmallApartment.prototype), "getBuffValue", this).call(this, buff) - 0.05;
    }
  }]);

  return SmallApartment;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SmallApartment);

/***/ }),

/***/ "./src/js/Builds/SteelPlant.js":
/*!*************************************!*\
  !*** ./src/js/Builds/SteelPlant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SteelStructureHouse */ "./src/js/Builds/SteelStructureHouse.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SteelPlant =
/*#__PURE__*/
function (_Building) {
  _inherits(SteelPlant, _Building);

  function SteelPlant() {
    _classCallCheck(this, SteelPlant);

    return _possibleConstructorReturn(this, _getPrototypeOf(SteelPlant).call(this, "钢铁厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(SteelPlant, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, 0.15));
    }
  }]);

  return SteelPlant;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SteelPlant);

/***/ }),

/***/ "./src/js/Builds/SteelStructureHouse.js":
/*!**********************************************!*\
  !*** ./src/js/Builds/SteelStructureHouse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _SteelPlant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SteelPlant */ "./src/js/Builds/SteelPlant.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SteelStructureHouse =
/*#__PURE__*/
function (_Building) {
  _inherits(SteelStructureHouse, _Building);

  function SteelStructureHouse() {
    _classCallCheck(this, SteelStructureHouse);

    return _possibleConstructorReturn(this, _getPrototypeOf(SteelStructureHouse).call(this, "钢结构房", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1));
  }

  _createClass(SteelStructureHouse, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _SteelPlant__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return SteelStructureHouse;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SteelStructureHouse);

/***/ }),

/***/ "./src/js/Builds/TalentApartment.js":
/*!******************************************!*\
  !*** ./src/js/Builds/TalentApartment.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TalentApartment =
/*#__PURE__*/
function (_Building) {
  _inherits(TalentApartment, _Building);

  function TalentApartment() {
    _classCallCheck(this, TalentApartment);

    return _possibleConstructorReturn(this, _getPrototypeOf(TalentApartment).call(this, "人才公寓", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.4));
  }

  _createClass(TalentApartment, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, 0.15));
    }
  }]);

  return TalentApartment;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (TalentApartment);

/***/ }),

/***/ "./src/js/Builds/TencentMachinery.js":
/*!*******************************************!*\
  !*** ./src/js/Builds/TencentMachinery.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _PartsFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartsFactory */ "./src/js/Builds/PartsFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TencentMachinery =
/*#__PURE__*/
function (_Building) {
  _inherits(TencentMachinery, _Building);

  function TencentMachinery() {
    _classCallCheck(this, TencentMachinery);

    return _possibleConstructorReturn(this, _getPrototypeOf(TencentMachinery).call(this, "企鹅机械", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1.33));
  }

  _createClass(TencentMachinery, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _PartsFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, 0.1));
    }
  }]);

  return TencentMachinery;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (TencentMachinery);

/***/ }),

/***/ "./src/js/Builds/TextileMill.js":
/*!**************************************!*\
  !*** ./src/js/Builds/TextileMill.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _ClothingStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClothingStore */ "./src/js/Builds/ClothingStore.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TextileMill =
/*#__PURE__*/
function (_Building) {
  _inherits(TextileMill, _Building);

  function TextileMill() {
    _classCallCheck(this, TextileMill);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextileMill).call(this, "纺织厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(TextileMill, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _ClothingStore__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Business, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Business, 0.15));
    }
  }]);

  return TextileMill;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (TextileMill);

/***/ }),

/***/ "./src/js/Builds/VegetableMarket.js":
/*!******************************************!*\
  !*** ./src/js/Builds/VegetableMarket.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _FoodFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoodFactory */ "./src/js/Builds/FoodFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VegetableMarket =
/*#__PURE__*/
function (_Building) {
  _inherits(VegetableMarket, _Building);

  function VegetableMarket() {
    _classCallCheck(this, VegetableMarket);

    return _possibleConstructorReturn(this, _getPrototypeOf(VegetableMarket).call(this, "菜市场", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(VegetableMarket, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _FoodFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return VegetableMarket;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (VegetableMarket);

/***/ }),

/***/ "./src/js/Builds/WaterPlant.js":
/*!*************************************!*\
  !*** ./src/js/Builds/WaterPlant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WaterPlant =
/*#__PURE__*/
function (_Building) {
  _inherits(WaterPlant, _Building);

  function WaterPlant() {
    _classCallCheck(this, WaterPlant);

    return _possibleConstructorReturn(this, _getPrototypeOf(WaterPlant).call(this, "水厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1.26));
  }

  _createClass(WaterPlant, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 1));
    }
  }]);

  return WaterPlant;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (WaterPlant);

/***/ }),

/***/ "./src/js/Builds/WoodFactory.js":
/*!**************************************!*\
  !*** ./src/js/Builds/WoodFactory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VegetableMarket */ "./src/js/Builds/VegetableMarket.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WoodFactory =
/*#__PURE__*/
function (_Building) {
  _inherits(WoodFactory, _Building);

  function WoodFactory() {
    _classCallCheck(this, WoodFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(WoodFactory).call(this, "木材厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(WoodFactory, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return WoodFactory;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (WoodFactory);

/***/ }),

/***/ "./src/js/Level.js":
/*!*************************!*\
  !*** ./src/js/Level.js ***!
  \*************************/
/*! exports provided: getIncome, getCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncome", function() { return getIncome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCost", function() { return getCost; });
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/js/Building.js");

var levelData = {
  1: {
    income: 1,
    commonCost: 3,
    rareCost: 7,
    legendaryCost: 10
  },
  2: {
    income: 2,
    commonCost: 6,
    rareCost: 16,
    legendaryCost: 21
  },
  3: {
    income: 3,
    commonCost: 11,
    rareCost: 25,
    legendaryCost: 34
  },
  4: {
    income: 4,
    commonCost: 17,
    rareCost: 36,
    legendaryCost: 49
  },
  5: {
    income: 5,
    commonCost: 24,
    rareCost: 48,
    legendaryCost: 65
  },
  6: {
    income: 6,
    commonCost: 32,
    rareCost: 61,
    legendaryCost: 82
  },
  7: {
    income: 7,
    commonCost: 43,
    rareCost: 75,
    legendaryCost: 101
  },
  8: {
    income: 8,
    commonCost: 54,
    rareCost: 90,
    legendaryCost: 122
  },
  9: {
    income: 9,
    commonCost: 68,
    rareCost: 106,
    legendaryCost: 144
  },
  10: {
    income: 10,
    commonCost: 140,
    rareCost: 207,
    legendaryCost: 280
  },
  11: {
    income: 12,
    commonCost: 243,
    rareCost: 340,
    legendaryCost: 462
  },
  12: {
    income: 14,
    commonCost: 361,
    rareCost: 505,
    legendaryCost: 686
  },
  13: {
    income: 16,
    commonCost: 501,
    rareCost: 701,
    legendaryCost: 952
  },
  14: {
    income: 18,
    commonCost: 663,
    rareCost: 928,
    legendaryCost: 1260
  },
  15: {
    income: 20,
    commonCost: 847,
    rareCost: 1186,
    legendaryCost: 1610
  },
  16: {
    income: 22,
    commonCost: 1054,
    rareCost: 1476,
    legendaryCost: 2003
  },
  17: {
    income: 24,
    commonCost: 1283,
    rareCost: 1797,
    legendaryCost: 2438
  },
  18: {
    income: 26,
    commonCost: 1535,
    rareCost: 2149,
    legendaryCost: 2917
  },
  19: {
    income: 28,
    commonCost: 1810,
    rareCost: 2533,
    legendaryCost: 3438
  },
  20: {
    income: 30,
    commonCost: 2134,
    rareCost: 2987,
    legendaryCost: 4053
  },
  21: {
    income: 33,
    commonCost: 2562,
    rareCost: 3586,
    legendaryCost: 4866
  },
  22: {
    income: 36,
    commonCost: 3030,
    rareCost: 4240,
    legendaryCost: 5755
  },
  23: {
    income: 39,
    commonCost: 3538,
    rareCost: 4951,
    legendaryCost: 6719
  },
  24: {
    income: 42,
    commonCost: 4086,
    rareCost: 5718,
    legendaryCost: 7760
  },
  25: {
    income: 45,
    commonCost: 4675,
    rareCost: 6542,
    legendaryCost: 8878
  },
  26: {
    income: 48,
    commonCost: 5305,
    rareCost: 7422,
    legendaryCost: 10073
  },
  27: {
    income: 51,
    commonCost: 5977,
    rareCost: 8361,
    legendaryCost: 11347
  },
  28: {
    income: 54,
    commonCost: 6690,
    rareCost: 9357,
    legendaryCost: 12699
  },
  29: {
    income: 57,
    commonCost: 7445,
    rareCost: 10412,
    legendaryCost: 14131
  },
  30: {
    income: 60,
    commonCost: 8972,
    rareCost: 12546,
    legendaryCost: 17027
  },
  31: {
    income: 64,
    commonCost: 10718,
    rareCost: 14985,
    legendaryCost: 20337
  },
  32: {
    income: 68,
    commonCost: 12539,
    rareCost: 17529,
    legendaryCost: 23789
  },
  33: {
    income: 72,
    commonCost: 14425,
    rareCost: 20162,
    legendaryCost: 27362
  },
  34: {
    income: 76,
    commonCost: 16365,
    rareCost: 22867,
    legendaryCost: 31034
  },
  35: {
    income: 80,
    commonCost: 18346,
    rareCost: 25630,
    legendaryCost: 34783
  },
  36: {
    income: 84,
    commonCost: 20357,
    rareCost: 28432,
    legendaryCost: 38586
  },
  37: {
    income: 88,
    commonCost: 22386,
    rareCost: 31258,
    legendaryCost: 42421
  },
  38: {
    income: 92,
    commonCost: 24421,
    rareCost: 34089,
    legendaryCost: 46264
  },
  39: {
    income: 96,
    commonCost: 26450,
    rareCost: 36910,
    legendaryCost: 50092
  },
  40: {
    income: 100,
    commonCost: 28460,
    rareCost: 39702,
    legendaryCost: 53882
  },
  41: {
    income: 105,
    commonCost: 30731,
    rareCost: 42856,
    legendaryCost: 58161
  },
  42: {
    income: 110,
    commonCost: 32971,
    rareCost: 45963,
    legendaryCost: 62378
  },
  43: {
    income: 115,
    commonCost: 35164,
    rareCost: 49000,
    legendaryCost: 66500
  },
  44: {
    income: 120,
    commonCost: 37291,
    rareCost: 51943,
    legendaryCost: 70495
  },
  45: {
    income: 125,
    commonCost: 41876,
    rareCost: 58304,
    legendaryCost: 79127
  },
  46: {
    income: 130,
    commonCost: 46399,
    rareCost: 64571,
    legendaryCost: 87631
  },
  47: {
    income: 135,
    commonCost: 50823,
    rareCost: 70689,
    legendaryCost: 95935
  },
  48: {
    income: 140,
    commonCost: 55107,
    rareCost: 76604,
    legendaryCost: 103963
  },
  49: {
    income: 145,
    commonCost: 59210,
    rareCost: 82257,
    legendaryCost: 111634
  },
  50: {
    income: 150,
    commonCost: 66407,
    rareCost: 92194,
    legendaryCost: 125120
  },
  51: {
    income: 156,
    commonCost: 74576,
    rareCost: 103463,
    legendaryCost: 140413
  },
  52: {
    income: 162,
    commonCost: 83340,
    rareCost: 115535,
    legendaryCost: 156797
  },
  53: {
    income: 168,
    commonCost: 92730,
    rareCost: 128451,
    legendaryCost: 174326
  },
  54: {
    income: 174,
    commonCost: 102780,
    rareCost: 142256,
    legendaryCost: 193061
  },
  55: {
    income: 180,
    commonCost: 113527,
    rareCost: 156995,
    legendaryCost: 213065
  },
  56: {
    income: 186,
    commonCost: 125011,
    rareCost: 172720,
    legendaryCost: 234406
  },
  57: {
    income: 192,
    commonCost: 137272,
    rareCost: 189483,
    legendaryCost: 257155
  },
  58: {
    income: 198,
    commonCost: 150356,
    rareCost: 207340,
    legendaryCost: 281390
  },
  59: {
    income: 204,
    commonCost: 164309,
    rareCost: 226353,
    legendaryCost: 307193
  },
  60: {
    income: 210,
    commonCost: 179181,
    rareCost: 246583,
    legendaryCost: 334648
  },
  61: {
    income: 217,
    commonCost: 195929,
    rareCost: 269340,
    legendaryCost: 365533
  },
  62: {
    income: 224,
    commonCost: 213810,
    rareCost: 293593,
    legendaryCost: 398448
  },
  63: {
    income: 231,
    commonCost: 232889,
    rareCost: 319426,
    legendaryCost: 433506
  },
  64: {
    income: 238,
    commonCost: 253236,
    rareCost: 346925,
    legendaryCost: 470827
  },
  65: {
    income: 245,
    commonCost: 274926,
    rareCost: 376185,
    legendaryCost: 510537
  },
  66: {
    income: 252,
    commonCost: 298037,
    rareCost: 407304,
    legendaryCost: 552770
  },
  67: {
    income: 259,
    commonCost: 322652,
    rareCost: 440386,
    legendaryCost: 597667
  },
  68: {
    income: 266,
    commonCost: 348859,
    rareCost: 475541,
    legendaryCost: 645377
  },
  69: {
    income: 273,
    commonCost: 376751,
    rareCost: 512884,
    legendaryCost: 696056
  },
  70: {
    income: 280,
    commonCost: 406426,
    rareCost: 552537,
    legendaryCost: 749872
  },
  71: {
    income: 288,
    commonCost: 439513,
    rareCost: 596701,
    legendaryCost: 809809
  },
  72: {
    income: 296,
    commonCost: 474752,
    rareCost: 643645,
    legendaryCost: 873518
  },
  73: {
    income: 304,
    commonCost: 512268,
    rareCost: 693524,
    legendaryCost: 941211
  },
  74: {
    income: 312,
    commonCost: 552194,
    rareCost: 746501,
    legendaryCost: 1013109
  },
  75: {
    income: 320,
    commonCost: 594668,
    rareCost: 802750,
    legendaryCost: 1089446
  },
  76: {
    income: 328,
    commonCost: 639840,
    rareCost: 862450,
    legendaryCost: 1170469
  },
  77: {
    income: 336,
    commonCost: 687863,
    rareCost: 925794,
    legendaryCost: 1256435
  },
  78: {
    income: 344,
    commonCost: 738902,
    rareCost: 992981,
    legendaryCost: 1347617
  },
  79: {
    income: 352,
    commonCost: 793130,
    rareCost: 1064222,
    legendaryCost: 1444301
  },
  80: {
    income: 360,
    commonCost: 850727,
    rareCost: 1139738,
    legendaryCost: 1546788
  },
  81: {
    income: 369,
    commonCost: 914363,
    rareCost: 1223078,
    legendaryCost: 1659891
  },
  82: {
    income: 378,
    commonCost: 982001,
    rareCost: 1311479,
    legendaryCost: 1779865
  },
  83: {
    income: 387,
    commonCost: 1053868,
    rareCost: 1405219,
    legendaryCost: 1907083
  },
  84: {
    income: 396,
    commonCost: 1130203,
    rareCost: 1504588,
    legendaryCost: 2041941
  },
  85: {
    income: 405,
    commonCost: 1211259,
    rareCost: 1609889,
    legendaryCost: 2184850
  },
  86: {
    income: 414,
    commonCost: 1297300,
    rareCost: 1721443,
    legendaryCost: 2336245
  },
  87: {
    income: 423,
    commonCost: 1388604,
    rareCost: 1839584,
    legendaryCost: 2496579
  },
  88: {
    income: 432,
    commonCost: 1485464,
    rareCost: 1964664,
    legendaryCost: 2666330
  },
  89: {
    income: 441,
    commonCost: 1588186,
    rareCost: 2097051,
    legendaryCost: 2845998
  },
  90: {
    income: 450,
    commonCost: 1666807,
    rareCost: 2197272,
    legendaryCost: 2982012
  },
  91: {
    income: 461,
    commonCost: 1755800,
    rareCost: 2310858,
    legendaryCost: 3136164
  },
  92: {
    income: 472,
    commonCost: 1848037,
    rareCost: 2428385,
    legendaryCost: 3295665
  },
  93: {
    income: 483,
    commonCost: 1943596,
    rareCost: 2549941,
    legendaryCost: 3460634
  },
  94: {
    income: 494,
    commonCost: 2042554,
    rareCost: 2675615,
    legendaryCost: 3631192
  },
  95: {
    income: 505,
    commonCost: 2144992,
    rareCost: 2805498,
    legendaryCost: 3807462
  },
  96: {
    income: 516,
    commonCost: 2250990,
    rareCost: 2939682,
    legendaryCost: 3989568
  },
  97: {
    income: 527,
    commonCost: 2360629,
    rareCost: 3078259,
    legendaryCost: 4177637
  },
  98: {
    income: 538,
    commonCost: 2473993,
    rareCost: 3221324,
    legendaryCost: 4371797
  },
  99: {
    income: 549,
    commonCost: 2591166,
    rareCost: 3368971,
    legendaryCost: 4572176
  },
  100: {
    income: 560,
    commonCost: 2958798,
    rareCost: 3841417,
    legendaryCost: 5213351
  },
  101: {
    income: 574,
    commonCost: 3111474,
    rareCost: 4033887,
    legendaryCost: 5474560
  },
  102: {
    income: 588,
    commonCost: 3269425,
    rareCost: 4232701,
    legendaryCost: 5744380
  },
  103: {
    income: 602,
    commonCost: 3432769,
    rareCost: 4437995,
    legendaryCost: 6022994
  },
  104: {
    income: 616,
    commonCost: 3601627,
    rareCost: 4649906,
    legendaryCost: 6310587
  },
  105: {
    income: 630,
    commonCost: 3776121,
    rareCost: 4868571,
    legendaryCost: 6607347
  },
  106: {
    income: 644,
    commonCost: 3956376,
    rareCost: 5094132,
    legendaryCost: 6913464
  },
  107: {
    income: 658,
    commonCost: 4142516,
    rareCost: 5326729,
    legendaryCost: 7229132
  },
  108: {
    income: 672,
    commonCost: 4334670,
    rareCost: 5566508,
    legendaryCost: 7554546
  },
  109: {
    income: 686,
    commonCost: 4532965,
    rareCost: 5813613,
    legendaryCost: 7889903
  },
  110: {
    income: 700,
    commonCost: 4737533,
    rareCost: 6068192,
    legendaryCost: 8235403
  },
  111: {
    income: 717,
    commonCost: 4969299,
    rareCost: 6356993,
    legendaryCost: 8627348
  },
  112: {
    income: 734,
    commonCost: 5208596,
    rareCost: 6654772,
    legendaryCost: 9031476
  },
  113: {
    income: 751,
    commonCost: 5455586,
    rareCost: 6961708,
    legendaryCost: 9448032
  },
  114: {
    income: 768,
    commonCost: 5710432,
    rareCost: 7277986,
    legendaryCost: 9877267
  },
  115: {
    income: 785,
    commonCost: 5973298,
    rareCost: 7603792,
    legendaryCost: 10319432
  },
  116: {
    income: 802,
    commonCost: 6244351,
    rareCost: 7939313,
    legendaryCost: 10774783
  },
  117: {
    income: 819,
    commonCost: 6523761,
    rareCost: 8284741,
    legendaryCost: 11243577
  },
  118: {
    income: 836,
    commonCost: 6811698,
    rareCost: 8640268,
    legendaryCost: 11726077
  },
  119: {
    income: 853,
    commonCost: 7108337,
    rareCost: 9006088,
    legendaryCost: 12222548
  },
  120: {
    income: 870,
    commonCost: 7413853,
    rareCost: 9382400,
    legendaryCost: 12733257
  },
  121: {
    income: 891,
    commonCost: 7763276,
    rareCost: 9813459,
    legendaryCost: 13318266
  },
  122: {
    income: 912,
    commonCost: 8123488,
    rareCost: 10257277,
    legendaryCost: 13920590
  },
  123: {
    income: 933,
    commonCost: 8494709,
    rareCost: 10714098,
    legendaryCost: 14540562
  },
  124: {
    income: 954,
    commonCost: 8877161,
    rareCost: 11184172,
    legendaryCost: 15178520
  },
  125: {
    income: 975,
    commonCost: 9271068,
    rareCost: 11667752,
    legendaryCost: 15834806
  },
  126: {
    income: 996,
    commonCost: 9676657,
    rareCost: 12165091,
    legendaryCost: 16509767
  },
  127: {
    income: 1017,
    commonCost: 10094159,
    rareCost: 12676449,
    legendaryCost: 17203752
  },
  128: {
    income: 1038,
    commonCost: 10523806,
    rareCost: 13202086,
    legendaryCost: 17917117
  },
  129: {
    income: 1059,
    commonCost: 10965835,
    rareCost: 13742267,
    legendaryCost: 18650219
  },
  130: {
    income: 1080,
    commonCost: 11420485,
    rareCost: 14297259,
    legendaryCost: 19403422
  },
  131: {
    income: 1107,
    commonCost: 11952781,
    rareCost: 14948352,
    legendaryCost: 20287050
  },
  132: {
    income: 1134,
    commonCost: 12500899,
    rareCost: 15618029,
    legendaryCost: 21195897
  },
  133: {
    income: 1161,
    commonCost: 13065147,
    rareCost: 16306635,
    legendaryCost: 22130433
  },
  134: {
    income: 1188,
    commonCost: 13645836,
    rareCost: 17014517,
    legendaryCost: 23091130
  },
  135: {
    income: 1215,
    commonCost: 14243284,
    rareCost: 17742029,
    legendaryCost: 24078469
  },
  136: {
    income: 1242,
    commonCost: 14857808,
    rareCost: 18489529,
    legendaryCost: 25092933
  },
  137: {
    income: 1269,
    commonCost: 15489733,
    rareCost: 19257378,
    legendaryCost: 26135013
  },
  138: {
    income: 1296,
    commonCost: 16139385,
    rareCost: 20045940,
    legendaryCost: 27205204
  },
  139: {
    income: 1323,
    commonCost: 16807096,
    rareCost: 20855586,
    legendaryCost: 28304009
  },
  140: {
    income: 1350,
    commonCost: 17493201,
    rareCost: 21686689,
    legendaryCost: 29431935
  },
  141: {
    income: 1383,
    commonCost: 18277332,
    rareCost: 22637839,
    legendaryCost: 30722781
  },
  142: {
    income: 1416,
    commonCost: 19083676,
    rareCost: 23614908,
    legendaryCost: 32048804
  },
  143: {
    income: 1449,
    commonCost: 19912647,
    rareCost: 24618359,
    legendaryCost: 33410631
  },
  144: {
    income: 1482,
    commonCost: 20764663,
    rareCost: 25648658,
    legendaryCost: 34808893
  },
  145: {
    income: 1515,
    commonCost: 21640148,
    rareCost: 26706276,
    legendaryCost: 36244231
  },
  146: {
    income: 1548,
    commonCost: 22539528,
    rareCost: 27791690,
    legendaryCost: 37717293
  },
  147: {
    income: 1581,
    commonCost: 23463239,
    rareCost: 28905383,
    legendaryCost: 39228733
  },
  148: {
    income: 1614,
    commonCost: 24411718,
    rareCost: 30047841,
    legendaryCost: 40779213
  },
  149: {
    income: 1647,
    commonCost: 25385407,
    rareCost: 31219559,
    legendaryCost: 42369402
  },
  150: {
    income: 1680,
    commonCost: 26380811,
    rareCost: 32416191,
    legendaryCost: 43993402
  },
  151: {
    income: 1722,
    commonCost: 27545926,
    rareCost: 33819398,
    legendaryCost: 45897755
  },
  152: {
    income: 1764,
    commonCost: 28742579,
    rareCost: 35259189,
    legendaryCost: 47851757
  },
  153: {
    income: 1806,
    commonCost: 29971322,
    rareCost: 36736176,
    legendaryCost: 49856238
  },
  154: {
    income: 1848,
    commonCost: 31232712,
    rareCost: 38250976,
    legendaryCost: 51912038
  },
  155: {
    income: 1890,
    commonCost: 32527313,
    rareCost: 39804214,
    legendaryCost: 54020005
  },
  156: {
    income: 1932,
    commonCost: 33855694,
    rareCost: 41396523,
    legendaryCost: 56180995
  },
  157: {
    income: 1974,
    commonCost: 35218429,
    rareCost: 43028538,
    legendaryCost: 58395874
  },
  158: {
    income: 2016,
    commonCost: 36616101,
    rareCost: 44700906,
    legendaryCost: 60665515
  },
  159: {
    income: 2058,
    commonCost: 38049297,
    rareCost: 46414275,
    legendaryCost: 62990802
  },
  160: {
    income: 2100,
    commonCost: 39518611,
    rareCost: 48169304,
    legendaryCost: 65372627
  },
  161: {
    income: 2153,
    commonCost: 41235319,
    rareCost: 50223254,
    legendaryCost: 68160130
  },
  162: {
    income: 2206,
    commonCost: 42996793,
    rareCost: 52328866,
    legendaryCost: 71017746
  },
  163: {
    income: 2259,
    commonCost: 44803788,
    rareCost: 54486974,
    legendaryCost: 73946607
  },
  164: {
    income: 2312,
    commonCost: 46657063,
    rareCost: 56698420,
    legendaryCost: 76947856
  },
  165: {
    income: 2365,
    commonCost: 48557388,
    rareCost: 58964055,
    legendaryCost: 80022646
  },
  166: {
    income: 2418,
    commonCost: 50505540,
    rareCost: 61284737,
    legendaryCost: 83172144
  },
  167: {
    income: 2471,
    commonCost: 52502303,
    rareCost: 63661335,
    legendaryCost: 86397526
  },
  168: {
    income: 2524,
    commonCost: 54548470,
    rareCost: 66094722,
    legendaryCost: 89699980
  },
  169: {
    income: 2577,
    commonCost: 56644842,
    rareCost: 68585785,
    legendaryCost: 93080709
  },
  170: {
    income: 2630,
    commonCost: 58792228,
    rareCost: 71135417,
    legendaryCost: 96540923
  },
  171: {
    income: 2696,
    commonCost: 61286967,
    rareCost: 74101834,
    legendaryCost: 100566775
  },
  172: {
    income: 2762,
    commonCost: 63844313,
    rareCost: 77140157,
    legendaryCost: 104690213
  },
  173: {
    income: 2828,
    commonCost: 66465278,
    rareCost: 80251505,
    legendaryCost: 108912757
  },
  174: {
    income: 2894,
    commonCost: 69150888,
    rareCost: 83437008,
    legendaryCost: 113235939
  },
  175: {
    income: 2960,
    commonCost: 71902178,
    rareCost: 86697807,
    legendaryCost: 117661310
  },
  176: {
    income: 3026,
    commonCost: 74720191,
    rareCost: 90035055,
    legendaryCost: 122190432
  },
  177: {
    income: 3092,
    commonCost: 77605983,
    rareCost: 93449916,
    legendaryCost: 126824886
  },
  178: {
    income: 3158,
    commonCost: 80560620,
    rareCost: 96943564,
    legendaryCost: 131566265
  },
  179: {
    income: 3224,
    commonCost: 83585179,
    rareCost: 100517184,
    legendaryCost: 136416178
  },
  180: {
    income: 3290,
    commonCost: 86680746,
    rareCost: 104171974,
    legendaryCost: 141376250
  },
  181: {
    income: 3373,
    commonCost: 90303550,
    rareCost: 108455761,
    legendaryCost: 147189962
  },
  182: {
    income: 3456,
    commonCost: 94014212,
    rareCost: 112840023,
    legendaryCost: 153140032
  },
  183: {
    income: 3539,
    commonCost: 97814106,
    rareCost: 117326273,
    legendaryCost: 159228514
  },
  184: {
    income: 3622,
    commonCost: 101704620,
    rareCost: 121916039,
    legendaryCost: 165457481
  },
  185: {
    income: 3705,
    commonCost: 105687155,
    rareCost: 126610862,
    legendaryCost: 171829027
  },
  186: {
    income: 3788,
    commonCost: 109763126,
    rareCost: 131412300,
    legendaryCost: 178345264
  },
  187: {
    income: 3871,
    commonCost: 113933962,
    rareCost: 136321923,
    legendaryCost: 185008324
  },
  188: {
    income: 3954,
    commonCost: 118201104,
    rareCost: 141341317,
    legendaryCost: 191820359
  },
  189: {
    income: 4037,
    commonCost: 122566008,
    rareCost: 146472084,
    legendaryCost: 198783542
  },
  190: {
    income: 4120,
    commonCost: 127030145,
    rareCost: 151715837,
    legendaryCost: 205900065
  },
  191: {
    income: 4224,
    commonCost: 132252504,
    rareCost: 157859018,
    legendaryCost: 214237239
  },
  192: {
    income: 4328,
    commonCost: 137597345,
    rareCost: 164141713,
    legendaryCost: 222763754
  },
  193: {
    income: 4432,
    commonCost: 143066522,
    rareCost: 170565957,
    legendaryCost: 231482371
  },
  194: {
    income: 4536,
    commonCost: 148661903,
    rareCost: 177133805,
    legendaryCost: 240395878
  },
  195: {
    income: 4640,
    commonCost: 154385378,
    rareCost: 183847329,
    legendaryCost: 249507089
  },
  196: {
    income: 4744,
    commonCost: 160238851,
    rareCost: 190708621,
    legendaryCost: 258818842
  },
  197: {
    income: 4848,
    commonCost: 166224246,
    rareCost: 197719792,
    legendaryCost: 268334003
  },
  198: {
    income: 4952,
    commonCost: 172343504,
    rareCost: 204882972,
    legendaryCost: 278055462
  },
  199: {
    income: 5056,
    commonCost: 178598584,
    rareCost: 212200311,
    legendaryCost: 287986136
  },
  200: {
    income: 5160,
    commonCost: 184991465,
    rareCost: 219673976,
    legendaryCost: 298128968
  },
  201: {
    income: 5291,
    commonCost: 192506504,
    rareCost: 228472052,
    legendaryCost: 310069213
  },
  202: {
    income: 5422,
    commonCost: 200192432,
    rareCost: 237464067,
    legendaryCost: 322272662
  },
  203: {
    income: 5553,
    commonCost: 208051751,
    rareCost: 246652768,
    legendaryCost: 334743042
  },
  204: {
    income: 5684,
    commonCost: 216086990,
    rareCost: 256040925,
    legendaryCost: 347484112
  },
  205: {
    income: 5815,
    commonCost: 224300699,
    rareCost: 265631332,
    legendaryCost: 360499665
  },
  206: {
    income: 5946,
    commonCost: 232695452,
    rareCost: 275426810,
    legendaryCost: 373793528
  },
  207: {
    income: 6077,
    commonCost: 241273845,
    rareCost: 285430204,
    legendaryCost: 387369562
  },
  208: {
    income: 6208,
    commonCost: 250038501,
    rareCost: 295644382,
    legendaryCost: 401231661
  },
  209: {
    income: 6339,
    commonCost: 258992063,
    rareCost: 306072241,
    legendaryCost: 415383755
  },
  210: {
    income: 6470,
    commonCost: 268137199,
    rareCost: 316716700,
    legendaryCost: 429829808
  },
  211: {
    income: 6635,
    commonCost: 278905812,
    rareCost: 329267989,
    legendaryCost: 446863699
  },
  212: {
    income: 6800,
    commonCost: 289912113,
    rareCost: 342088115,
    legendaryCost: 464262442
  },
  213: {
    income: 6965,
    commonCost: 301159481,
    rareCost: 355180776,
    legendaryCost: 482031053
  },
  214: {
    income: 7130,
    commonCost: 312651326,
    rareCost: 368549701,
    legendaryCost: 500174594
  },
  215: {
    income: 7295,
    commonCost: 324391086,
    rareCost: 382198652,
    legendaryCost: 518698171
  },
  216: {
    income: 7460,
    commonCost: 336382231,
    rareCost: 396131425,
    legendaryCost: 537606933
  },
  217: {
    income: 7625,
    commonCost: 348628263,
    rareCost: 410351846,
    legendaryCost: 556906076
  },
  218: {
    income: 7790,
    commonCost: 361132714,
    rareCost: 424863776,
    legendaryCost: 576600839
  },
  219: {
    income: 7955,
    commonCost: 373899148,
    rareCost: 439671109,
    legendaryCost: 596696505
  },
  220: {
    income: 8120,
    commonCost: 386931158,
    rareCost: 454777773,
    legendaryCost: 617198406
  },
  221: {
    income: 8328,
    commonCost: 402309619,
    rareCost: 472628051,
    legendaryCost: 641423783
  },
  222: {
    income: 8536,
    commonCost: 418017969,
    rareCost: 490850274,
    legendaryCost: 666153943
  },
  223: {
    income: 8744,
    commonCost: 434060762,
    rareCost: 509449418,
    legendaryCost: 691395639
  },
  224: {
    income: 8952,
    commonCost: 450442592,
    rareCost: 528430500,
    legendaryCost: 717155679
  },
  225: {
    income: 9160,
    commonCost: 467168094,
    rareCost: 547798581,
    legendaryCost: 743440931
  },
  226: {
    income: 9368,
    commonCost: 484241942,
    rareCost: 567558763,
    legendaryCost: 770258321
  },
  227: {
    income: 9576,
    commonCost: 501668854,
    rareCost: 587716192,
    legendaryCost: 797614832
  },
  228: {
    income: 9784,
    commonCost: 519453584,
    rareCost: 608276059,
    legendaryCost: 825517509
  },
  229: {
    income: 9992,
    commonCost: 537600930,
    rareCost: 629243598,
    legendaryCost: 853973454
  },
  230: {
    income: 10200,
    commonCost: 556115731,
    rareCost: 650624084,
    legendaryCost: 882989829
  },
  231: {
    income: 10462,
    commonCost: 577986165,
    rareCost: 675911583,
    legendaryCost: 917308577
  },
  232: {
    income: 10724,
    commonCost: 600312935,
    rareCost: 701712083,
    legendaryCost: 952323541
  },
  233: {
    income: 10986,
    commonCost: 623102167,
    rareCost: 728032263,
    legendaryCost: 988043786
  },
  234: {
    income: 11248,
    commonCost: 646360038,
    rareCost: 754878860,
    legendaryCost: 1024478452
  },
  235: {
    income: 11510,
    commonCost: 670092780,
    rareCost: 782258664,
    legendaryCost: 1061636758
  },
  236: {
    income: 11772,
    commonCost: 694306677,
    rareCost: 810178524,
    legendaryCost: 1099527998
  },
  237: {
    income: 12034,
    commonCost: 719008065,
    rareCost: 838645346,
    legendaryCost: 1138161541
  },
  238: {
    income: 12296,
    commonCost: 744203336,
    rareCost: 867666091,
    legendaryCost: 1177546837
  },
  239: {
    income: 12558,
    commonCost: 769898935,
    rareCost: 897247777,
    legendaryCost: 1217693412
  },
  240: {
    income: 12820,
    commonCost: 796101360,
    rareCost: 927397482,
    legendaryCost: 1258610868
  },
  241: {
    income: 13151,
    commonCost: 827157050,
    rareCost: 963175883,
    legendaryCost: 1307167269
  },
  242: {
    income: 13482,
    commonCost: 858843971,
    rareCost: 999661954,
    legendaryCost: 1356684081
  },
  243: {
    income: 13813,
    commonCost: 891170373,
    rareCost: 1036864678,
    legendaryCost: 1407173491
  },
  244: {
    income: 14144,
    commonCost: 924144574,
    rareCost: 1074793108,
    legendaryCost: 1458647790
  },
  245: {
    income: 14475,
    commonCost: 957774962,
    rareCost: 1113456374,
    legendaryCost: 1511119365
  },
  246: {
    income: 14806,
    commonCost: 992069993,
    rareCost: 1152863679,
    legendaryCost: 1564600707
  },
  247: {
    income: 15137,
    commonCost: 1027038196,
    rareCost: 1193024298,
    legendaryCost: 1619104405
  },
  248: {
    income: 15468,
    commonCost: 1062688168,
    rareCost: 1233947585,
    legendaryCost: 1674643152
  },
  249: {
    income: 15799,
    commonCost: 1099028580,
    rareCost: 1275642968,
    legendaryCost: 1731229742
  },
  250: {
    income: 16130,
    commonCost: 1136041259,
    rareCost: 1318119948,
    legendaryCost: 1788877073
  },
  251: {
    income: 16548,
    commonCost: 1184952374,
    rareCost: 1368583342,
    legendaryCost: 1857363107
  },
  252: {
    income: 16966,
    commonCost: 1235076195,
    rareCost: 1420020553,
    legendaryCost: 1927170751
  },
  253: {
    income: 17384,
    commonCost: 1286431382,
    rareCost: 1472443638,
    legendaryCost: 1998316366
  },
  254: {
    income: 17802,
    commonCost: 1339036769,
    rareCost: 1525864749,
    legendaryCost: 2070816446
  },
  255: {
    income: 18220,
    commonCost: 1392911363,
    rareCost: 1580296136,
    legendaryCost: 2144687613
  },
  256: {
    income: 18638,
    commonCost: 1448074352,
    rareCost: 1635750146,
    legendaryCost: 2219946626
  },
  257: {
    income: 19056,
    commonCost: 1504545096,
    rareCost: 1692239222,
    legendaryCost: 2296610373
  },
  258: {
    income: 19474,
    commonCost: 1562343136,
    rareCost: 1749775910,
    legendaryCost: 2374695878
  },
  259: {
    income: 19892,
    commonCost: 1621488191,
    rareCost: 1808372850,
    legendaryCost: 2454220297
  },
  260: {
    income: 20310,
    commonCost: 1682000160,
    rareCost: 1868042785,
    legendaryCost: 2535200922
  },
  261: {
    income: 20838,
    commonCost: 1753153702,
    rareCost: 1939034364,
    legendaryCost: 2631546637
  },
  262: {
    income: 21366,
    commonCost: 1826007252,
    rareCost: 2011363579,
    legendaryCost: 2729707714
  },
  263: {
    income: 21894,
    commonCost: 1900586079,
    rareCost: 2085046595,
    legendaryCost: 2829706093
  },
  264: {
    income: 22422,
    commonCost: 1976915682,
    rareCost: 2160099707,
    legendaryCost: 2931563888
  },
  265: {
    income: 22950,
    commonCost: 2055021790,
    rareCost: 2236539336,
    legendaryCost: 3035303385
  },
  266: {
    income: 23478,
    commonCost: 2134930363,
    rareCost: 2314382033,
    legendaryCost: 3140947044
  },
  267: {
    income: 24006,
    commonCost: 2216667598,
    rareCost: 2393644474,
    legendaryCost: 3248517501
  },
  268: {
    income: 24534,
    commonCost: 2300259923,
    rareCost: 2474343468,
    legendaryCost: 3358037564
  },
  269: {
    income: 25062,
    commonCost: 2385734003,
    rareCost: 2556495952,
    legendaryCost: 3469530220
  },
  270: {
    income: 25590,
    commonCost: 2473116740,
    rareCost: 2640118993,
    legendaryCost: 3583018633
  },
  271: {
    income: 26258,
    commonCost: 2576170665,
    rareCost: 2739837808,
    legendaryCost: 3718351311
  },
  272: {
    income: 26926,
    commonCost: 2681602625,
    rareCost: 2841392957,
    legendaryCost: 3856176155
  },
  273: {
    income: 27594,
    commonCost: 2789446827,
    rareCost: 2944806126,
    legendaryCost: 3996522600
  },
  274: {
    income: 28262,
    commonCost: 2899737782,
    rareCost: 3050099171,
    legendaryCost: 4139420304
  },
  275: {
    income: 28930,
    commonCost: 3012510304,
    rareCost: 3157294113,
    legendaryCost: 4284899153
  },
  276: {
    income: 29598,
    commonCost: 3127799515,
    rareCost: 3266413141,
    legendaryCost: 4432989263
  },
  277: {
    income: 30266,
    commonCost: 3245640842,
    rareCost: 3377478615,
    legendaryCost: 4583720978
  },
  278: {
    income: 30934,
    commonCost: 3366070024,
    rareCost: 3490513064,
    legendaryCost: 4737124873
  },
  279: {
    income: 31602,
    commonCost: 3489123109,
    rareCost: 3605539188,
    legendaryCost: 4893231755
  },
  280: {
    income: 32270,
    commonCost: 3614836458,
    rareCost: 3722579857,
    legendaryCost: 5052072664
  },
  281: {
    income: 33115,
    commonCost: 3763361953,
    rareCost: 3862302160,
    legendaryCost: 5241695789
  },
  282: {
    income: 33960,
    commonCost: 3915203152,
    rareCost: 4004540630,
    legendaryCost: 5434733712
  },
  283: {
    income: 34805,
    commonCost: 4070406282,
    rareCost: 4149324322,
    legendaryCost: 5631225866
  },
  284: {
    income: 35650,
    commonCost: 4229017966,
    rareCost: 4296682513,
    legendaryCost: 5831211982
  },
  285: {
    income: 36495,
    commonCost: 4391085232,
    rareCost: 4446644699,
    legendaryCost: 6034732091
  },
  286: {
    income: 37340,
    commonCost: 4556655508,
    rareCost: 4599240596,
    legendaryCost: 6241826523
  },
  287: {
    income: 38185,
    commonCost: 4725776629,
    rareCost: 4754500145,
    legendaryCost: 6452535911
  },
  288: {
    income: 39030,
    commonCost: 4898496838,
    rareCost: 4912453508,
    legendaryCost: 6666901190
  },
  289: {
    income: 39875,
    commonCost: 5074864785,
    rareCost: 5073131073,
    legendaryCost: 6884963600
  },
  290: {
    income: 40720,
    commonCost: 5254929534,
    rareCost: 5236563453,
    legendaryCost: 7106764686
  },
  291: {
    income: 41791,
    commonCost: 5468312446,
    rareCost: 5432157852,
    legendaryCost: 7372214227
  },
  292: {
    income: 42862,
    commonCost: 5686312608,
    rareCost: 5631199899,
    legendaryCost: 7642342720
  },
  293: {
    income: 43933,
    commonCost: 5908992501,
    rareCost: 5833728556,
    legendaryCost: 7917203040
  },
  294: {
    income: 45004,
    commonCost: 6136415135,
    rareCost: 6039783071,
    legendaryCost: 8196848454
  },
  295: {
    income: 46075,
    commonCost: 6368644046,
    rareCost: 6249402984,
    legendaryCost: 8481332621
  },
  296: {
    income: 47146,
    commonCost: 6605743306,
    rareCost: 6462628124,
    legendaryCost: 8770709597
  },
  297: {
    income: 48217,
    commonCost: 6847777518,
    rareCost: 6679498615,
    legendaryCost: 9065033835
  },
  298: {
    income: 49288,
    commonCost: 7094811826,
    rareCost: 6900054873,
    legendaryCost: 9364360185
  },
  299: {
    income: 50359,
    commonCost: 7346911911,
    rareCost: 7124337610,
    legendaryCost: 9668743899
  },
  300: {
    income: 51430,
    commonCost: 7604143999,
    rareCost: 7352387834,
    legendaryCost: 9978240632
  },
  301: {
    income: 52788,
    commonCost: 7909577984,
    rareCost: 7625706612,
    legendaryCost: 10349173259
  },
  302: {
    income: 54146,
    commonCost: 8221426896,
    rareCost: 7903743601,
    legendaryCost: 10726509172
  },
  303: {
    income: 55504,
    commonCost: 8539775100,
    rareCost: 8186551011,
    legendaryCost: 11110319229
  },
  304: {
    income: 56862,
    commonCost: 8864707656,
    rareCost: 8474181432,
    legendaryCost: 11500674800
  },
  305: {
    income: 58220,
    commonCost: 9196310321,
    rareCost: 8766687834,
    legendaryCost: 11897647775
  },
  306: {
    income: 59578,
    commonCost: 9534669558,
    rareCost: 9064123572,
    legendaryCost: 12301310562
  },
  307: {
    income: 60936,
    commonCost: 9879872531,
    rareCost: 9366542385,
    legendaryCost: 12711736094
  },
  308: {
    income: 62294,
    commonCost: 10232007115,
    rareCost: 9673998398,
    legendaryCost: 13128997825
  },
  309: {
    income: 63652,
    commonCost: 10591161899,
    rareCost: 9986546125,
    legendaryCost: 13553169741
  },
  310: {
    income: 65010,
    commonCost: 10957426184,
    rareCost: 10304240471,
    legendaryCost: 13984326353
  },
  311: {
    income: 66733,
    commonCost: 11393205791,
    rareCost: 10676076867,
    legendaryCost: 14473255183
  },
  312: {
    income: 68456,
    commonCost: 11837880675,
    rareCost: 11053724837,
    legendaryCost: 14969014799
  },
  313: {
    income: 70179,
    commonCost: 12291564662,
    rareCost: 11437241930,
    legendaryCost: 15471662834
  },
  314: {
    income: 71902,
    commonCost: 12754372491,
    rareCost: 11826686076,
    legendaryCost: 15981257231
  },
  315: {
    income: 73625,
    commonCost: 13226419827,
    rareCost: 12222115584,
    legendaryCost: 16497856252
  },
  316: {
    income: 75348,
    commonCost: 13707823259,
    rareCost: 12623589145,
    legendaryCost: 17021518471
  },
  317: {
    income: 77071,
    commonCost: 14198700306,
    rareCost: 13031165834,
    legendaryCost: 17552302780
  },
  318: {
    income: 78794,
    commonCost: 14699169424,
    rareCost: 13444905112,
    legendaryCost: 18090268390
  },
  319: {
    income: 80517,
    commonCost: 15209350006,
    rareCost: 13864866823,
    legendaryCost: 18635474832
  },
  320: {
    income: 82240,
    commonCost: 15729362393,
    rareCost: 14291111204,
    legendaryCost: 19187981954
  },
  321: {
    income: 84428,
    commonCost: 16349374528,
    rareCost: 14805240986,
    legendaryCost: 19857216559
  },
  322: {
    income: 86616,
    commonCost: 16981702001,
    rareCost: 15327260369,
    legendaryCost: 20535631278
  },
  323: {
    income: 88804,
    commonCost: 17626498310,
    rareCost: 15857246116,
    legendaryCost: 21223302337
  },
  324: {
    income: 90992,
    commonCost: 18283918162,
    rareCost: 16395275493,
    legendaryCost: 21920306370
  },
  325: {
    income: 93180,
    commonCost: 18954117481,
    rareCost: 16941426262,
    legendaryCost: 22626720422
  },
  326: {
    income: 95368,
    commonCost: 19637253413,
    rareCost: 17495776687,
    legendaryCost: 23342621954
  },
  327: {
    income: 97556,
    commonCost: 20333484333,
    rareCost: 18058405538,
    legendaryCost: 24068088838
  },
  328: {
    income: 99744,
    commonCost: 21042969848,
    rareCost: 18629392090,
    legendaryCost: 24803199364
  },
  329: {
    income: 101932,
    commonCost: 21765870807,
    rareCost: 19208816125,
    legendaryCost: 25548032240
  },
  330: {
    income: 104120,
    commonCost: 22502349304,
    rareCost: 19796757937,
    legendaryCost: 26302666592
  },
  331: {
    income: 106900,
    commonCost: 23382055840,
    rareCost: 20506862998,
    legendaryCost: 27217911657
  },
  332: {
    income: 109680,
    commonCost: 24278783996,
    rareCost: 21227672203,
    legendaryCost: 28145490033
  },
  333: {
    income: 112460,
    commonCost: 25192740621,
    rareCost: 21959287930,
    legendaryCost: 29085502547
  },
  334: {
    income: 115240,
    commonCost: 26124134167,
    rareCost: 22701813215,
    legendaryCost: 30038050561
  },
  335: {
    income: 118020,
    commonCost: 27073174687,
    rareCost: 23455351749,
    legendaryCost: 31003235977
  },
  336: {
    income: 120800,
    commonCost: 28040073850,
    rareCost: 24220007882,
    legendaryCost: 31981161239
  },
  337: {
    income: 123580,
    commonCost: 29025044942,
    rareCost: 24995886628,
    legendaryCost: 32971929330
  },
  338: {
    income: 126360,
    commonCost: 30028302882,
    rareCost: 25783093664,
    legendaryCost: 33975643779
  },
  339: {
    income: 129140,
    commonCost: 31050064221,
    rareCost: 26581735337,
    legendaryCost: 34992408664
  },
  340: {
    income: 131920,
    commonCost: 32090547155,
    rareCost: 27391918664,
    legendaryCost: 36022328606
  },
  341: {
    income: 135455,
    commonCost: 33335778721,
    rareCost: 28371890773,
    legendaryCost: 37273262748
  },
  342: {
    income: 138990,
    commonCost: 34604505347,
    rareCost: 29366380750,
    legendaryCost: 38540765298
  },
  343: {
    income: 142525,
    commonCost: 35897005673,
    rareCost: 30375525149,
    legendaryCost: 39824969676
  },
  344: {
    income: 146060,
    commonCost: 37213560446,
    rareCost: 31399461388,
    legendaryCost: 41126010001
  },
  345: {
    income: 149595,
    commonCost: 38554452536,
    rareCost: 32438327746,
    legendaryCost: 42444021100
  },
  346: {
    income: 153130,
    commonCost: 39919966939,
    rareCost: 33492263369,
    legendaryCost: 43779138506
  },
  347: {
    income: 156665,
    commonCost: 41310390791,
    rareCost: 34561408277,
    legendaryCost: 45131498462
  },
  348: {
    income: 160200,
    commonCost: 42726013378,
    rareCost: 35645903362,
    legendaryCost: 46501237926
  },
  349: {
    income: 163735,
    commonCost: 44167126143,
    rareCost: 36745890395,
    legendaryCost: 47888494569
  },
  350: {
    income: 167270,
    commonCost: 45634022702,
    rareCost: 37861512029,
    legendaryCost: 49293406781
  },
  351: {
    income: 171770,
    commonCost: 47393253075,
    rareCost: 39213210740,
    legendaryCost: 51002645387
  },
  352: {
    income: 176270,
    commonCost: 49184883358,
    rareCost: 40584599475,
    legendaryCost: 52734147165
  },
  353: {
    income: 180770,
    commonCost: 51009288867,
    rareCost: 41975860452,
    legendaryCost: 54488088779
  },
  354: {
    income: 185270,
    commonCost: 52866847708,
    rareCost: 43387177016,
    legendaryCost: 56264647810
  },
  355: {
    income: 189770,
    commonCost: 54757940786,
    rareCost: 44818733654,
    legendaryCost: 58064002766
  },
  356: {
    income: 194270,
    commonCost: 56682951817,
    rareCost: 46270715989,
    legendaryCost: 59886333081
  },
  357: {
    income: 198770,
    commonCost: 58642267344,
    rareCost: 47743310794,
    legendaryCost: 61731819118
  },
  358: {
    income: 203270,
    commonCost: 60636276747,
    rareCost: 49236705992,
    legendaryCost: 63600642177
  },
  359: {
    income: 207770,
    commonCost: 62665372258,
    rareCost: 50751090660,
    legendaryCost: 65492984492
  },
  360: {
    income: 212270,
    commonCost: 64729948973,
    rareCost: 52286655038,
    legendaryCost: 67409029241
  },
  361: {
    income: 218001,
    commonCost: 67209923379,
    rareCost: 54149359132,
    legendaryCost: 69742781506
  },
  362: {
    income: 223732,
    commonCost: 69734515952,
    rareCost: 56038753444,
    legendaryCost: 72106439832
  },
  363: {
    income: 229463,
    commonCost: 72304231927,
    rareCost: 57955081074,
    legendaryCost: 74500238154
  },
  364: {
    income: 235194,
    commonCost: 74919580221,
    rareCost: 59898586612,
    legendaryCost: 76924411616
  },
  365: {
    income: 240925,
    commonCost: 77581073450,
    rareCost: 61869516144,
    legendaryCost: 79379196570
  },
  366: {
    income: 246656,
    commonCost: 80289227942,
    rareCost: 63868117258,
    legendaryCost: 81864830586
  },
  367: {
    income: 252387,
    commonCost: 83044563759,
    rareCost: 65894639051,
    legendaryCost: 84381552452
  },
  368: {
    income: 258118,
    commonCost: 85847604710,
    rareCost: 67949332133,
    legendaryCost: 86929602180
  },
  369: {
    income: 263849,
    commonCost: 88698878370,
    rareCost: 70032448637,
    legendaryCost: 89509221011
  },
  370: {
    income: 269580,
    commonCost: 91598916096,
    rareCost: 72144242222,
    legendaryCost: 92120651416
  },
  371: {
    income: 276886,
    commonCost: 95089144975,
    rareCost: 74709937749,
    legendaryCost: 95306264068
  },
  372: {
    income: 284192,
    commonCost: 98640767966,
    rareCost: 77311811375,
    legendaryCost: 98532057864
  },
  373: {
    income: 291498,
    commonCost: 1.02E+11,
    rareCost: 79950187546,
    legendaryCost: 1.02E+11
  },
  374: {
    income: 298804,
    commonCost: 1.06E+11,
    rareCost: 82625392666,
    legendaryCost: 1.05E+11
  },
  375: {
    income: 306110,
    commonCost: 1.10E+11,
    rareCost: 85337755113,
    legendaryCost: 1.08E+11
  },
  376: {
    income: 313416,
    commonCost: 1.13E+11,
    rareCost: 88087605242,
    legendaryCost: 1.12E+11
  },
  377: {
    income: 320722,
    commonCost: 1.17E+11,
    rareCost: 90875275395,
    legendaryCost: 1.15E+11
  },
  378: {
    income: 328028,
    commonCost: 1.21E+11,
    rareCost: 93701099908,
    legendaryCost: 1.19E+11
  },
  379: {
    income: 335334,
    commonCost: 1.25E+11,
    rareCost: 96565415119,
    legendaryCost: 1.22E+11
  },
  380: {
    income: 342640,
    commonCost: 1.29E+11,
    rareCost: 99468559377,
    legendaryCost: 1.26E+11
  },
  381: {
    income: 351960,
    commonCost: 1.34E+11,
    rareCost: 1.03E+11,
    legendaryCost: 1.30E+11
  },
  382: {
    income: 361280,
    commonCost: 1.39E+11,
    rareCost: 1.07E+11,
    legendaryCost: 1.35E+11
  },
  383: {
    income: 370600,
    commonCost: 1.44E+11,
    rareCost: 1.10E+11,
    legendaryCost: 1.39E+11
  },
  384: {
    income: 379920,
    commonCost: 1.49E+11,
    rareCost: 1.14E+11,
    legendaryCost: 1.44E+11
  },
  385: {
    income: 389240,
    commonCost: 1.55E+11,
    rareCost: 1.18E+11,
    legendaryCost: 1.48E+11
  },
  386: {
    income: 398560,
    commonCost: 1.60E+11,
    rareCost: 1.21E+11,
    legendaryCost: 1.53E+11
  },
  387: {
    income: 407880,
    commonCost: 1.65E+11,
    rareCost: 1.25E+11,
    legendaryCost: 1.57E+11
  },
  388: {
    income: 417200,
    commonCost: 1.71E+11,
    rareCost: 1.29E+11,
    legendaryCost: 1.62E+11
  },
  389: {
    income: 426520,
    commonCost: 1.77E+11,
    rareCost: 1.33E+11,
    legendaryCost: 1.67E+11
  },
  390: {
    income: 435840,
    commonCost: 1.82E+11,
    rareCost: 1.37E+11,
    legendaryCost: 1.72E+11
  },
  391: {
    income: 447738,
    commonCost: 1.89E+11,
    rareCost: 1.42E+11,
    legendaryCost: 1.78E+11
  },
  392: {
    income: 459636,
    commonCost: 1.96E+11,
    rareCost: 1.47E+11,
    legendaryCost: 1.84E+11
  },
  393: {
    income: 471534,
    commonCost: 2.03E+11,
    rareCost: 1.52E+11,
    legendaryCost: 1.90E+11
  },
  394: {
    income: 483432,
    commonCost: 2.11E+11,
    rareCost: 1.57E+11,
    legendaryCost: 1.96E+11
  },
  395: {
    income: 495330,
    commonCost: 2.18E+11,
    rareCost: 1.62E+11,
    legendaryCost: 2.02E+11
  },
  396: {
    income: 507228,
    commonCost: 2.25E+11,
    rareCost: 1.67E+11,
    legendaryCost: 2.08E+11
  },
  397: {
    income: 519126,
    commonCost: 2.33E+11,
    rareCost: 1.72E+11,
    legendaryCost: 2.15E+11
  },
  398: {
    income: 531024,
    commonCost: 2.41E+11,
    rareCost: 1.78E+11,
    legendaryCost: 2.21E+11
  },
  399: {
    income: 542922,
    commonCost: 2.48E+11,
    rareCost: 1.83E+11,
    legendaryCost: 2.28E+11
  },
  400: {
    income: 554820,
    commonCost: 2.56E+11,
    rareCost: 1.89E+11,
    legendaryCost: 2.34E+11
  },
  401: {
    income: 570022,
    commonCost: 2.66E+11,
    rareCost: 1.95E+11,
    legendaryCost: 2.42E+11
  },
  402: {
    income: 585224,
    commonCost: 2.76E+11,
    rareCost: 2.02E+11,
    legendaryCost: 2.51E+11
  },
  403: {
    income: 600426,
    commonCost: 2.86E+11,
    rareCost: 2.09E+11,
    legendaryCost: 2.59E+11
  },
  404: {
    income: 615628,
    commonCost: 2.96E+11,
    rareCost: 2.16E+11,
    legendaryCost: 2.67E+11
  },
  405: {
    income: 630830,
    commonCost: 3.06E+11,
    rareCost: 2.23E+11,
    legendaryCost: 2.76E+11
  },
  406: {
    income: 646032,
    commonCost: 3.17E+11,
    rareCost: 2.30E+11,
    legendaryCost: 2.84E+11
  },
  407: {
    income: 661234,
    commonCost: 3.27E+11,
    rareCost: 2.37E+11,
    legendaryCost: 2.93E+11
  },
  408: {
    income: 676436,
    commonCost: 3.38E+11,
    rareCost: 2.45E+11,
    legendaryCost: 3.02E+11
  },
  409: {
    income: 691638,
    commonCost: 3.49E+11,
    rareCost: 2.52E+11,
    legendaryCost: 3.11E+11
  },
  410: {
    income: 706840,
    commonCost: 3.60E+11,
    rareCost: 2.60E+11,
    legendaryCost: 3.20E+11
  },
  411: {
    income: 726278,
    commonCost: 3.74E+11,
    rareCost: 2.69E+11,
    legendaryCost: 3.31E+11
  },
  412: {
    income: 745716,
    commonCost: 3.87E+11,
    rareCost: 2.78E+11,
    legendaryCost: 3.42E+11
  },
  413: {
    income: 765154,
    commonCost: 4.01E+11,
    rareCost: 2.88E+11,
    legendaryCost: 3.53E+11
  },
  414: {
    income: 784592,
    commonCost: 4.15E+11,
    rareCost: 2.97E+11,
    legendaryCost: 3.65E+11
  },
  415: {
    income: 804030,
    commonCost: 4.30E+11,
    rareCost: 3.07E+11,
    legendaryCost: 3.76E+11
  },
  416: {
    income: 823468,
    commonCost: 4.44E+11,
    rareCost: 3.17E+11,
    legendaryCost: 3.88E+11
  },
  417: {
    income: 842906,
    commonCost: 4.59E+11,
    rareCost: 3.27E+11,
    legendaryCost: 4.00E+11
  },
  418: {
    income: 862344,
    commonCost: 4.74E+11,
    rareCost: 3.37E+11,
    legendaryCost: 4.12E+11
  },
  419: {
    income: 881782,
    commonCost: 4.90E+11,
    rareCost: 3.47E+11,
    legendaryCost: 4.24E+11
  },
  420: {
    income: 901220,
    commonCost: 5.06E+11,
    rareCost: 3.58E+11,
    legendaryCost: 4.37E+11
  },
  421: {
    income: 926094,
    commonCost: 5.26E+11,
    rareCost: 3.71E+11,
    legendaryCost: 4.53E+11
  },
  422: {
    income: 950968,
    commonCost: 5.46E+11,
    rareCost: 3.85E+11,
    legendaryCost: 4.69E+11
  },
  423: {
    income: 975842,
    commonCost: 5.66E+11,
    rareCost: 3.98E+11,
    legendaryCost: 4.85E+11
  },
  424: {
    income: 1000716,
    commonCost: 5.87E+11,
    rareCost: 4.12E+11,
    legendaryCost: 5.01E+11
  },
  425: {
    income: 1025590,
    commonCost: 6.08E+11,
    rareCost: 4.26E+11,
    legendaryCost: 5.17E+11
  },
  426: {
    income: 1050464,
    commonCost: 6.29E+11,
    rareCost: 4.40E+11,
    legendaryCost: 5.34E+11
  },
  427: {
    income: 1075338,
    commonCost: 6.51E+11,
    rareCost: 4.54E+11,
    legendaryCost: 5.51E+11
  },
  428: {
    income: 1100212,
    commonCost: 6.73E+11,
    rareCost: 4.69E+11,
    legendaryCost: 5.68E+11
  },
  429: {
    income: 1125086,
    commonCost: 6.95E+11,
    rareCost: 4.83E+11,
    legendaryCost: 5.85E+11
  },
  430: {
    income: 1149960,
    commonCost: 7.18E+11,
    rareCost: 4.98E+11,
    legendaryCost: 6.03E+11
  },
  431: {
    income: 1181814,
    commonCost: 7.46E+11,
    rareCost: 5.16E+11,
    legendaryCost: 6.25E+11
  },
  432: {
    income: 1213668,
    commonCost: 7.74E+11,
    rareCost: 5.35E+11,
    legendaryCost: 6.46E+11
  },
  433: {
    income: 1245522,
    commonCost: 8.02E+11,
    rareCost: 5.54E+11,
    legendaryCost: 6.68E+11
  },
  434: {
    income: 1277376,
    commonCost: 8.31E+11,
    rareCost: 5.73E+11,
    legendaryCost: 6.91E+11
  },
  435: {
    income: 1309230,
    commonCost: 8.61E+11,
    rareCost: 5.92E+11,
    legendaryCost: 7.14E+11
  },
  436: {
    income: 1341084,
    commonCost: 8.91E+11,
    rareCost: 6.12E+11,
    legendaryCost: 7.36E+11
  },
  437: {
    income: 1372938,
    commonCost: 9.21E+11,
    rareCost: 6.31E+11,
    legendaryCost: 7.60E+11
  },
  438: {
    income: 1404792,
    commonCost: 9.52E+11,
    rareCost: 6.52E+11,
    legendaryCost: 7.83E+11
  },
  439: {
    income: 1436646,
    commonCost: 9.84E+11,
    rareCost: 6.72E+11,
    legendaryCost: 8.07E+11
  },
  440: {
    income: 1468500,
    commonCost: 1.02E+12,
    rareCost: 6.93E+11,
    legendaryCost: 8.31E+11
  },
  441: {
    income: 1509324,
    commonCost: 1.05E+12,
    rareCost: 7.18E+11,
    legendaryCost: 8.61E+11
  },
  442: {
    income: 1550148,
    commonCost: 1.09E+12,
    rareCost: 7.43E+11,
    legendaryCost: 8.91E+11
  },
  443: {
    income: 1590972,
    commonCost: 1.13E+12,
    rareCost: 7.69E+11,
    legendaryCost: 9.21E+11
  },
  444: {
    income: 1631796,
    commonCost: 1.18E+12,
    rareCost: 7.96E+11,
    legendaryCost: 9.52E+11
  },
  445: {
    income: 1672620,
    commonCost: 1.22E+12,
    rareCost: 8.22E+11,
    legendaryCost: 9.83E+11
  },
  446: {
    income: 1713444,
    commonCost: 1.26E+12,
    rareCost: 8.50E+11,
    legendaryCost: 1.01E+12
  },
  447: {
    income: 1754268,
    commonCost: 1.30E+12,
    rareCost: 8.77E+11,
    legendaryCost: 1.05E+12
  },
  448: {
    income: 1795092,
    commonCost: 1.35E+12,
    rareCost: 9.05E+11,
    legendaryCost: 1.08E+12
  },
  449: {
    income: 1835916,
    commonCost: 1.39E+12,
    rareCost: 9.33E+11,
    legendaryCost: 1.11E+12
  },
  450: {
    income: 1876740,
    commonCost: 1.43E+12,
    rareCost: 9.62E+11,
    legendaryCost: 1.14E+12
  },
  451: {
    income: 1929101,
    commonCost: 1.49E+12,
    rareCost: 9.97E+11,
    legendaryCost: 1.19E+12
  },
  452: {
    income: 1981462,
    commonCost: 1.54E+12,
    rareCost: 1.03E+12,
    legendaryCost: 1.23E+12
  },
  453: {
    income: 2033823,
    commonCost: 1.60E+12,
    rareCost: 1.07E+12,
    legendaryCost: 1.27E+12
  },
  454: {
    income: 2086184,
    commonCost: 1.66E+12,
    rareCost: 1.10E+12,
    legendaryCost: 1.31E+12
  },
  455: {
    income: 2138545,
    commonCost: 1.72E+12,
    rareCost: 1.14E+12,
    legendaryCost: 1.35E+12
  },
  456: {
    income: 2190906,
    commonCost: 1.78E+12,
    rareCost: 1.18E+12,
    legendaryCost: 1.40E+12
  },
  457: {
    income: 2243267,
    commonCost: 1.84E+12,
    rareCost: 1.22E+12,
    legendaryCost: 1.44E+12
  },
  458: {
    income: 2295628,
    commonCost: 1.90E+12,
    rareCost: 1.26E+12,
    legendaryCost: 1.49E+12
  },
  459: {
    income: 2347989,
    commonCost: 1.96E+12,
    rareCost: 1.29E+12,
    legendaryCost: 1.53E+12
  },
  460: {
    income: 2400350,
    commonCost: 2.02E+12,
    rareCost: 1.33E+12,
    legendaryCost: 1.58E+12
  },
  461: {
    income: 2467560,
    commonCost: 2.10E+12,
    rareCost: 1.38E+12,
    legendaryCost: 1.63E+12
  },
  462: {
    income: 2534770,
    commonCost: 2.18E+12,
    rareCost: 1.43E+12,
    legendaryCost: 1.69E+12
  },
  463: {
    income: 2601980,
    commonCost: 2.26E+12,
    rareCost: 1.48E+12,
    legendaryCost: 1.75E+12
  },
  464: {
    income: 2669190,
    commonCost: 2.34E+12,
    rareCost: 1.53E+12,
    legendaryCost: 1.80E+12
  },
  465: {
    income: 2736400,
    commonCost: 2.42E+12,
    rareCost: 1.58E+12,
    legendaryCost: 1.86E+12
  },
  466: {
    income: 2803610,
    commonCost: 2.50E+12,
    rareCost: 1.63E+12,
    legendaryCost: 1.92E+12
  },
  467: {
    income: 2870820,
    commonCost: 2.59E+12,
    rareCost: 1.69E+12,
    legendaryCost: 1.98E+12
  },
  468: {
    income: 2938030,
    commonCost: 2.67E+12,
    rareCost: 1.74E+12,
    legendaryCost: 2.04E+12
  },
  469: {
    income: 3005240,
    commonCost: 2.76E+12,
    rareCost: 1.79E+12,
    legendaryCost: 2.10E+12
  },
  470: {
    income: 3072450,
    commonCost: 2.85E+12,
    rareCost: 1.85E+12,
    legendaryCost: 2.17E+12
  },
  471: {
    income: 3158786,
    commonCost: 2.95E+12,
    rareCost: 1.92E+12,
    legendaryCost: 2.24E+12
  },
  472: {
    income: 3245122,
    commonCost: 3.06E+12,
    rareCost: 1.98E+12,
    legendaryCost: 2.32E+12
  },
  473: {
    income: 3331458,
    commonCost: 3.17E+12,
    rareCost: 2.05E+12,
    legendaryCost: 2.40E+12
  },
  474: {
    income: 3417794,
    commonCost: 3.29E+12,
    rareCost: 2.12E+12,
    legendaryCost: 2.48E+12
  },
  475: {
    income: 3504130,
    commonCost: 3.40E+12,
    rareCost: 2.19E+12,
    legendaryCost: 2.56E+12
  },
  476: {
    income: 3590466,
    commonCost: 3.52E+12,
    rareCost: 2.26E+12,
    legendaryCost: 2.64E+12
  },
  477: {
    income: 3676802,
    commonCost: 3.64E+12,
    rareCost: 2.34E+12,
    legendaryCost: 2.72E+12
  },
  478: {
    income: 3763138,
    commonCost: 3.76E+12,
    rareCost: 2.41E+12,
    legendaryCost: 2.81E+12
  },
  479: {
    income: 3849474,
    commonCost: 3.88E+12,
    rareCost: 2.49E+12,
    legendaryCost: 2.89E+12
  },
  480: {
    income: 3935810,
    commonCost: 4.00E+12,
    rareCost: 2.56E+12,
    legendaryCost: 2.98E+12
  },
  481: {
    income: 4046800,
    commonCost: 4.15E+12,
    rareCost: 2.65E+12,
    legendaryCost: 3.08E+12
  },
  482: {
    income: 4157790,
    commonCost: 4.31E+12,
    rareCost: 2.75E+12,
    legendaryCost: 3.19E+12
  },
  483: {
    income: 4268780,
    commonCost: 4.46E+12,
    rareCost: 2.84E+12,
    legendaryCost: 3.30E+12
  },
  484: {
    income: 4379770,
    commonCost: 4.62E+12,
    rareCost: 2.94E+12,
    legendaryCost: 3.41E+12
  },
  485: {
    income: 4490760,
    commonCost: 4.78E+12,
    rareCost: 3.04E+12,
    legendaryCost: 3.52E+12
  },
  486: {
    income: 4601750,
    commonCost: 4.94E+12,
    rareCost: 3.14E+12,
    legendaryCost: 3.63E+12
  },
  487: {
    income: 4712740,
    commonCost: 5.11E+12,
    rareCost: 3.24E+12,
    legendaryCost: 3.74E+12
  },
  488: {
    income: 4823730,
    commonCost: 5.27E+12,
    rareCost: 3.34E+12,
    legendaryCost: 3.86E+12
  },
  489: {
    income: 4934720,
    commonCost: 5.44E+12,
    rareCost: 3.44E+12,
    legendaryCost: 3.97E+12
  },
  490: {
    income: 5045710,
    commonCost: 5.62E+12,
    rareCost: 3.54E+12,
    legendaryCost: 4.09E+12
  },
  491: {
    income: 5188504,
    commonCost: 5.83E+12,
    rareCost: 3.67E+12,
    legendaryCost: 4.24E+12
  },
  492: {
    income: 5331298,
    commonCost: 6.04E+12,
    rareCost: 3.80E+12,
    legendaryCost: 4.38E+12
  },
  493: {
    income: 5474092,
    commonCost: 6.26E+12,
    rareCost: 3.93E+12,
    legendaryCost: 4.53E+12
  },
  494: {
    income: 5616886,
    commonCost: 6.48E+12,
    rareCost: 4.07E+12,
    legendaryCost: 4.68E+12
  },
  495: {
    income: 5759680,
    commonCost: 6.70E+12,
    rareCost: 4.20E+12,
    legendaryCost: 4.83E+12
  },
  496: {
    income: 5902474,
    commonCost: 6.93E+12,
    rareCost: 4.34E+12,
    legendaryCost: 4.99E+12
  },
  497: {
    income: 6045268,
    commonCost: 7.16E+12,
    rareCost: 4.48E+12,
    legendaryCost: 5.14E+12
  },
  498: {
    income: 6188062,
    commonCost: 7.40E+12,
    rareCost: 4.62E+12,
    legendaryCost: 5.30E+12
  },
  499: {
    income: 6330856,
    commonCost: 7.63E+12,
    rareCost: 4.76E+12,
    legendaryCost: 5.46E+12
  },
  500: {
    income: 6473650,
    commonCost: 7.88E+12,
    rareCost: 4.90E+12,
    legendaryCost: 5.62E+12
  },
  501: {
    income: 6657502,
    commonCost: 8.17E+12,
    rareCost: 5.08E+12,
    legendaryCost: 5.82E+12
  },
  502: {
    income: 6841354,
    commonCost: 8.47E+12,
    rareCost: 5.26E+12,
    legendaryCost: 6.02E+12
  },
  503: {
    income: 7025206,
    commonCost: 8.77E+12,
    rareCost: 5.44E+12,
    legendaryCost: 6.22E+12
  },
  504: {
    income: 7209058,
    commonCost: 9.08E+12,
    rareCost: 5.62E+12,
    legendaryCost: 6.43E+12
  },
  505: {
    income: 7392910,
    commonCost: 9.40E+12,
    rareCost: 5.81E+12,
    legendaryCost: 6.63E+12
  },
  506: {
    income: 7576762,
    commonCost: 9.71E+12,
    rareCost: 6.00E+12,
    legendaryCost: 6.84E+12
  },
  507: {
    income: 7760614,
    commonCost: 1.00E+13,
    rareCost: 6.19E+12,
    legendaryCost: 7.06E+12
  },
  508: {
    income: 7944466,
    commonCost: 1.04E+13,
    rareCost: 6.38E+12,
    legendaryCost: 7.27E+12
  },
  509: {
    income: 8128318,
    commonCost: 1.07E+13,
    rareCost: 6.58E+12,
    legendaryCost: 7.49E+12
  },
  510: {
    income: 8312170,
    commonCost: 1.10E+13,
    rareCost: 6.78E+12,
    legendaryCost: 7.71E+12
  },
  511: {
    income: 8549067,
    commonCost: 1.14E+13,
    rareCost: 7.02E+12,
    legendaryCost: 7.98E+12
  },
  512: {
    income: 8785964,
    commonCost: 1.19E+13,
    rareCost: 7.27E+12,
    legendaryCost: 8.26E+12
  },
  513: {
    income: 9022861,
    commonCost: 1.23E+13,
    rareCost: 7.52E+12,
    legendaryCost: 8.54E+12
  },
  514: {
    income: 9259758,
    commonCost: 1.27E+13,
    rareCost: 7.77E+12,
    legendaryCost: 8.82E+12
  },
  515: {
    income: 9496655,
    commonCost: 1.32E+13,
    rareCost: 8.03E+12,
    legendaryCost: 9.10E+12
  },
  516: {
    income: 9733552,
    commonCost: 1.36E+13,
    rareCost: 8.29E+12,
    legendaryCost: 9.39E+12
  },
  517: {
    income: 9970449,
    commonCost: 1.40E+13,
    rareCost: 8.55E+12,
    legendaryCost: 9.68E+12
  },
  518: {
    income: 10207346,
    commonCost: 1.45E+13,
    rareCost: 8.82E+12,
    legendaryCost: 9.98E+12
  },
  519: {
    income: 10444243,
    commonCost: 1.50E+13,
    rareCost: 9.09E+12,
    legendaryCost: 1.03E+13
  },
  520: {
    income: 10681140,
    commonCost: 1.54E+13,
    rareCost: 9.36E+12,
    legendaryCost: 1.06E+13
  },
  521: {
    income: 10986621,
    commonCost: 1.60E+13,
    rareCost: 9.70E+12,
    legendaryCost: 1.09E+13
  },
  522: {
    income: 11292102,
    commonCost: 1.66E+13,
    rareCost: 1.00E+13,
    legendaryCost: 1.13E+13
  },
  523: {
    income: 11597583,
    commonCost: 1.72E+13,
    rareCost: 1.04E+13,
    legendaryCost: 1.17E+13
  },
  524: {
    income: 11903064,
    commonCost: 1.78E+13,
    rareCost: 1.07E+13,
    legendaryCost: 1.21E+13
  },
  525: {
    income: 12208545,
    commonCost: 1.84E+13,
    rareCost: 1.11E+13,
    legendaryCost: 1.25E+13
  },
  526: {
    income: 12514026,
    commonCost: 1.90E+13,
    rareCost: 1.15E+13,
    legendaryCost: 1.29E+13
  },
  527: {
    income: 12819507,
    commonCost: 1.96E+13,
    rareCost: 1.18E+13,
    legendaryCost: 1.33E+13
  },
  528: {
    income: 13124988,
    commonCost: 2.03E+13,
    rareCost: 1.22E+13,
    legendaryCost: 1.37E+13
  },
  529: {
    income: 13430469,
    commonCost: 2.09E+13,
    rareCost: 1.26E+13,
    legendaryCost: 1.41E+13
  },
  530: {
    income: 13735950,
    commonCost: 2.16E+13,
    rareCost: 1.29E+13,
    legendaryCost: 1.45E+13
  },
  531: {
    income: 14130172,
    commonCost: 2.24E+13,
    rareCost: 1.34E+13,
    legendaryCost: 1.50E+13
  },
  532: {
    income: 14524394,
    commonCost: 2.32E+13,
    rareCost: 1.39E+13,
    legendaryCost: 1.55E+13
  },
  533: {
    income: 14918616,
    commonCost: 2.40E+13,
    rareCost: 1.43E+13,
    legendaryCost: 1.61E+13
  },
  534: {
    income: 15312838,
    commonCost: 2.49E+13,
    rareCost: 1.48E+13,
    legendaryCost: 1.66E+13
  },
  535: {
    income: 15707060,
    commonCost: 2.57E+13,
    rareCost: 1.53E+13,
    legendaryCost: 1.71E+13
  },
  536: {
    income: 16101282,
    commonCost: 2.66E+13,
    rareCost: 1.58E+13,
    legendaryCost: 1.77E+13
  },
  537: {
    income: 16495504,
    commonCost: 2.74E+13,
    rareCost: 1.63E+13,
    legendaryCost: 1.82E+13
  },
  538: {
    income: 16889726,
    commonCost: 2.83E+13,
    rareCost: 1.68E+13,
    legendaryCost: 1.88E+13
  },
  539: {
    income: 17283948,
    commonCost: 2.92E+13,
    rareCost: 1.73E+13,
    legendaryCost: 1.93E+13
  },
  540: {
    income: 17678170,
    commonCost: 3.01E+13,
    rareCost: 1.79E+13,
    legendaryCost: 1.99E+13
  },
  541: {
    income: 18187301,
    commonCost: 3.13E+13,
    rareCost: 1.85E+13,
    legendaryCost: 2.06E+13
  },
  542: {
    income: 18696432,
    commonCost: 3.24E+13,
    rareCost: 1.91E+13,
    legendaryCost: 2.13E+13
  },
  543: {
    income: 19205563,
    commonCost: 3.35E+13,
    rareCost: 1.98E+13,
    legendaryCost: 2.20E+13
  },
  544: {
    income: 19714694,
    commonCost: 3.47E+13,
    rareCost: 2.05E+13,
    legendaryCost: 2.27E+13
  },
  545: {
    income: 20223825,
    commonCost: 3.59E+13,
    rareCost: 2.11E+13,
    legendaryCost: 2.35E+13
  },
  546: {
    income: 20732956,
    commonCost: 3.71E+13,
    rareCost: 2.18E+13,
    legendaryCost: 2.42E+13
  },
  547: {
    income: 21242087,
    commonCost: 3.83E+13,
    rareCost: 2.25E+13,
    legendaryCost: 2.50E+13
  },
  548: {
    income: 21751218,
    commonCost: 3.95E+13,
    rareCost: 2.32E+13,
    legendaryCost: 2.57E+13
  },
  549: {
    income: 22260349,
    commonCost: 4.08E+13,
    rareCost: 2.39E+13,
    legendaryCost: 2.65E+13
  },
  550: {
    income: 22769480,
    commonCost: 4.21E+13,
    rareCost: 2.46E+13,
    legendaryCost: 2.73E+13
  },
  551: {
    income: 23427518,
    commonCost: 4.36E+13,
    rareCost: 2.55E+13,
    legendaryCost: 2.82E+13
  },
  552: {
    income: 24085556,
    commonCost: 4.52E+13,
    rareCost: 2.64E+13,
    legendaryCost: 2.92E+13
  },
  553: {
    income: 24743594,
    commonCost: 4.68E+13,
    rareCost: 2.73E+13,
    legendaryCost: 3.02E+13
  },
  554: {
    income: 25401632,
    commonCost: 4.84E+13,
    rareCost: 2.82E+13,
    legendaryCost: 3.12E+13
  },
  555: {
    income: 26059670,
    commonCost: 5.01E+13,
    rareCost: 2.92E+13,
    legendaryCost: 3.22E+13
  },
  556: {
    income: 26717708,
    commonCost: 5.18E+13,
    rareCost: 3.01E+13,
    legendaryCost: 3.32E+13
  },
  557: {
    income: 27375746,
    commonCost: 5.35E+13,
    rareCost: 3.11E+13,
    legendaryCost: 3.42E+13
  },
  558: {
    income: 28033784,
    commonCost: 5.52E+13,
    rareCost: 3.20E+13,
    legendaryCost: 3.53E+13
  },
  559: {
    income: 28691822,
    commonCost: 5.69E+13,
    rareCost: 3.30E+13,
    legendaryCost: 3.63E+13
  },
  560: {
    income: 29349860,
    commonCost: 5.87E+13,
    rareCost: 3.40E+13,
    legendaryCost: 3.74E+13
  },
  561: {
    income: 30201006,
    commonCost: 6.08E+13,
    rareCost: 3.52E+13,
    legendaryCost: 3.87E+13
  },
  562: {
    income: 31052152,
    commonCost: 6.30E+13,
    rareCost: 3.64E+13,
    legendaryCost: 4.00E+13
  },
  563: {
    income: 31903298,
    commonCost: 6.53E+13,
    rareCost: 3.77E+13,
    legendaryCost: 4.14E+13
  },
  564: {
    income: 32754444,
    commonCost: 6.75E+13,
    rareCost: 3.90E+13,
    legendaryCost: 4.27E+13
  },
  565: {
    income: 33605590,
    commonCost: 6.98E+13,
    rareCost: 4.02E+13,
    legendaryCost: 4.41E+13
  },
  566: {
    income: 34456736,
    commonCost: 7.22E+13,
    rareCost: 4.15E+13,
    legendaryCost: 4.55E+13
  },
  567: {
    income: 35307882,
    commonCost: 7.45E+13,
    rareCost: 4.29E+13,
    legendaryCost: 4.69E+13
  },
  568: {
    income: 36159028,
    commonCost: 7.69E+13,
    rareCost: 4.42E+13,
    legendaryCost: 4.83E+13
  },
  569: {
    income: 37010174,
    commonCost: 7.93E+13,
    rareCost: 4.55E+13,
    legendaryCost: 4.98E+13
  },
  570: {
    income: 37861320,
    commonCost: 8.18E+13,
    rareCost: 4.69E+13,
    legendaryCost: 5.12E+13
  },
  571: {
    income: 38963084,
    commonCost: 8.48E+13,
    rareCost: 4.86E+13,
    legendaryCost: 5.30E+13
  },
  572: {
    income: 40064848,
    commonCost: 8.79E+13,
    rareCost: 5.03E+13,
    legendaryCost: 5.48E+13
  },
  573: {
    income: 41166612,
    commonCost: 9.10E+13,
    rareCost: 5.20E+13,
    legendaryCost: 5.67E+13
  },
  574: {
    income: 42268376,
    commonCost: 9.41E+13,
    rareCost: 5.37E+13,
    legendaryCost: 5.85E+13
  },
  575: {
    income: 43370140,
    commonCost: 9.73E+13,
    rareCost: 5.55E+13,
    legendaryCost: 6.04E+13
  },
  576: {
    income: 44471904,
    commonCost: 1.01E+14,
    rareCost: 5.73E+13,
    legendaryCost: 6.23E+13
  },
  577: {
    income: 45573668,
    commonCost: 1.04E+14,
    rareCost: 5.91E+13,
    legendaryCost: 6.43E+13
  },
  578: {
    income: 46675432,
    commonCost: 1.07E+14,
    rareCost: 6.09E+13,
    legendaryCost: 6.62E+13
  },
  579: {
    income: 47777196,
    commonCost: 1.11E+14,
    rareCost: 6.28E+13,
    legendaryCost: 6.82E+13
  },
  580: {
    income: 48878960,
    commonCost: 1.14E+14,
    rareCost: 6.46E+13,
    legendaryCost: 7.02E+13
  },
  581: {
    income: 50306226,
    commonCost: 1.18E+14,
    rareCost: 6.70E+13,
    legendaryCost: 7.26E+13
  },
  582: {
    income: 51733492,
    commonCost: 1.22E+14,
    rareCost: 6.93E+13,
    legendaryCost: 7.51E+13
  },
  583: {
    income: 53160758,
    commonCost: 1.27E+14,
    rareCost: 7.17E+13,
    legendaryCost: 7.77E+13
  },
  584: {
    income: 54588024,
    commonCost: 1.31E+14,
    rareCost: 7.41E+13,
    legendaryCost: 8.02E+13
  },
  585: {
    income: 56015290,
    commonCost: 1.36E+14,
    rareCost: 7.65E+13,
    legendaryCost: 8.28E+13
  },
  586: {
    income: 57442556,
    commonCost: 1.40E+14,
    rareCost: 7.90E+13,
    legendaryCost: 8.54E+13
  },
  587: {
    income: 58869822,
    commonCost: 1.45E+14,
    rareCost: 8.15E+13,
    legendaryCost: 8.81E+13
  },
  588: {
    income: 60297088,
    commonCost: 1.50E+14,
    rareCost: 8.40E+13,
    legendaryCost: 9.07E+13
  },
  589: {
    income: 61724354,
    commonCost: 1.56E+14,
    rareCost: 8.66E+13,
    legendaryCost: 9.34E+13
  },
  590: {
    income: 63151620,
    commonCost: 1.62E+14,
    rareCost: 8.91E+13,
    legendaryCost: 9.61E+13
  },
  591: {
    income: 65001962,
    commonCost: 1.69E+14,
    rareCost: 9.23E+13,
    legendaryCost: 9.95E+13
  },
  592: {
    income: 66852304,
    commonCost: 1.76E+14,
    rareCost: 9.56E+13,
    legendaryCost: 1.03E+14
  },
  593: {
    income: 68702646,
    commonCost: 1.83E+14,
    rareCost: 9.89E+13,
    legendaryCost: 1.06E+14
  },
  594: {
    income: 70552988,
    commonCost: 1.91E+14,
    rareCost: 1.02E+14,
    legendaryCost: 1.10E+14
  },
  595: {
    income: 72403330,
    commonCost: 1.98E+14,
    rareCost: 1.06E+14,
    legendaryCost: 1.13E+14
  },
  596: {
    income: 74253672,
    commonCost: 2.06E+14,
    rareCost: 1.09E+14,
    legendaryCost: 1.17E+14
  },
  597: {
    income: 76104014,
    commonCost: 2.14E+14,
    rareCost: 1.12E+14,
    legendaryCost: 1.21E+14
  },
  598: {
    income: 77954356,
    commonCost: 2.22E+14,
    rareCost: 1.16E+14,
    legendaryCost: 1.24E+14
  },
  599: {
    income: 79804698,
    commonCost: 2.30E+14,
    rareCost: 1.19E+14,
    legendaryCost: 1.28E+14
  },
  600: {
    income: 81655040,
    commonCost: 2.39E+14,
    rareCost: 1.23E+14,
    legendaryCost: 1.32E+14
  },
  601: {
    income: 84055698,
    commonCost: 2.49E+14,
    rareCost: 1.27E+14,
    legendaryCost: 1.36E+14
  },
  602: {
    income: 86456356,
    commonCost: 2.59E+14,
    rareCost: 1.32E+14,
    legendaryCost: 1.41E+14
  },
  603: {
    income: 88857014,
    commonCost: 2.70E+14,
    rareCost: 1.36E+14,
    legendaryCost: 1.46E+14
  },
  604: {
    income: 91257672,
    commonCost: 2.81E+14,
    rareCost: 1.41E+14,
    legendaryCost: 1.51E+14
  },
  605: {
    income: 93658330,
    commonCost: 2.92E+14,
    rareCost: 1.45E+14,
    legendaryCost: 1.55E+14
  },
  606: {
    income: 96058988,
    commonCost: 3.03E+14,
    rareCost: 1.50E+14,
    legendaryCost: 1.60E+14
  },
  607: {
    income: 98459646,
    commonCost: 3.15E+14,
    rareCost: 1.55E+14,
    legendaryCost: 1.65E+14
  },
  608: {
    income: 100860304,
    commonCost: 3.26E+14,
    rareCost: 1.60E+14,
    legendaryCost: 1.70E+14
  },
  609: {
    income: 103260962,
    commonCost: 3.38E+14,
    rareCost: 1.64E+14,
    legendaryCost: 1.75E+14
  },
  610: {
    income: 105661620,
    commonCost: 3.50E+14,
    rareCost: 1.69E+14,
    legendaryCost: 1.80E+14
  },
  611: {
    income: 108778638,
    commonCost: 3.65E+14,
    rareCost: 1.75E+14,
    legendaryCost: 1.87E+14
  },
  612: {
    income: 111895656,
    commonCost: 3.80E+14,
    rareCost: 1.82E+14,
    legendaryCost: 1.93E+14
  },
  613: {
    income: 115012674,
    commonCost: 3.96E+14,
    rareCost: 1.88E+14,
    legendaryCost: 2.00E+14
  },
  614: {
    income: 118129692,
    commonCost: 4.11E+14,
    rareCost: 1.94E+14,
    legendaryCost: 2.06E+14
  },
  615: {
    income: 121246710,
    commonCost: 4.27E+14,
    rareCost: 2.00E+14,
    legendaryCost: 2.13E+14
  },
  616: {
    income: 124363728,
    commonCost: 4.43E+14,
    rareCost: 2.07E+14,
    legendaryCost: 2.20E+14
  },
  617: {
    income: 127480746,
    commonCost: 4.60E+14,
    rareCost: 2.13E+14,
    legendaryCost: 2.26E+14
  },
  618: {
    income: 130597764,
    commonCost: 4.77E+14,
    rareCost: 2.20E+14,
    legendaryCost: 2.33E+14
  },
  619: {
    income: 133714782,
    commonCost: 4.94E+14,
    rareCost: 2.27E+14,
    legendaryCost: 2.40E+14
  },
  620: {
    income: 136831800,
    commonCost: 5.12E+14,
    rareCost: 2.33E+14,
    legendaryCost: 2.47E+14
  },
  621: {
    income: 140882021,
    commonCost: 5.33E+14,
    rareCost: 2.42E+14,
    legendaryCost: 2.56E+14
  },
  622: {
    income: 144932242,
    commonCost: 5.55E+14,
    rareCost: 2.50E+14,
    legendaryCost: 2.65E+14
  },
  623: {
    income: 148982463,
    commonCost: 5.77E+14,
    rareCost: 2.59E+14,
    legendaryCost: 2.74E+14
  },
  624: {
    income: 153032684,
    commonCost: 5.99E+14,
    rareCost: 2.68E+14,
    legendaryCost: 2.83E+14
  },
  625: {
    income: 157082905,
    commonCost: 6.22E+14,
    rareCost: 2.76E+14,
    legendaryCost: 2.92E+14
  },
  626: {
    income: 161133126,
    commonCost: 6.46E+14,
    rareCost: 2.85E+14,
    legendaryCost: 3.01E+14
  },
  627: {
    income: 165183347,
    commonCost: 6.70E+14,
    rareCost: 2.94E+14,
    legendaryCost: 3.10E+14
  },
  628: {
    income: 169233568,
    commonCost: 6.94E+14,
    rareCost: 3.03E+14,
    legendaryCost: 3.20E+14
  },
  629: {
    income: 173283789,
    commonCost: 7.19E+14,
    rareCost: 3.12E+14,
    legendaryCost: 3.29E+14
  },
  630: {
    income: 177334010,
    commonCost: 7.44E+14,
    rareCost: 3.22E+14,
    legendaryCost: 3.39E+14
  },
  631: {
    income: 182600830,
    commonCost: 7.74E+14,
    rareCost: 3.33E+14,
    legendaryCost: 3.51E+14
  },
  632: {
    income: 187867650,
    commonCost: 8.06E+14,
    rareCost: 3.45E+14,
    legendaryCost: 3.63E+14
  },
  633: {
    income: 193134470,
    commonCost: 8.38E+14,
    rareCost: 3.57E+14,
    legendaryCost: 3.75E+14
  },
  634: {
    income: 198401290,
    commonCost: 8.70E+14,
    rareCost: 3.69E+14,
    legendaryCost: 3.87E+14
  },
  635: {
    income: 203668110,
    commonCost: 9.03E+14,
    rareCost: 3.81E+14,
    legendaryCost: 4.00E+14
  },
  636: {
    income: 208934930,
    commonCost: 9.37E+14,
    rareCost: 3.93E+14,
    legendaryCost: 4.12E+14
  },
  637: {
    income: 214201750,
    commonCost: 9.71E+14,
    rareCost: 4.05E+14,
    legendaryCost: 4.25E+14
  },
  638: {
    income: 219468570,
    commonCost: 1.01E+15,
    rareCost: 4.18E+14,
    legendaryCost: 4.38E+14
  },
  639: {
    income: 224735390,
    commonCost: 1.04E+15,
    rareCost: 4.30E+14,
    legendaryCost: 4.51E+14
  },
  640: {
    income: 230002210,
    commonCost: 1.08E+15,
    rareCost: 4.43E+14,
    legendaryCost: 4.64E+14
  },
  641: {
    income: 236856276,
    commonCost: 1.12E+15,
    rareCost: 4.59E+14,
    legendaryCost: 4.81E+14
  },
  642: {
    income: 243710342,
    commonCost: 1.17E+15,
    rareCost: 4.75E+14,
    legendaryCost: 4.97E+14
  },
  643: {
    income: 250564408,
    commonCost: 1.21E+15,
    rareCost: 4.92E+14,
    legendaryCost: 5.14E+14
  },
  644: {
    income: 257418474,
    commonCost: 1.26E+15,
    rareCost: 5.08E+14,
    legendaryCost: 5.31E+14
  },
  645: {
    income: 264272540,
    commonCost: 1.31E+15,
    rareCost: 5.25E+14,
    legendaryCost: 5.48E+14
  },
  646: {
    income: 271126606,
    commonCost: 1.35E+15,
    rareCost: 5.42E+14,
    legendaryCost: 5.65E+14
  },
  647: {
    income: 277980672,
    commonCost: 1.40E+15,
    rareCost: 5.59E+14,
    legendaryCost: 5.83E+14
  },
  648: {
    income: 284834738,
    commonCost: 1.45E+15,
    rareCost: 5.76E+14,
    legendaryCost: 6.00E+14
  },
  649: {
    income: 291688804,
    commonCost: 1.50E+15,
    rareCost: 5.93E+14,
    legendaryCost: 6.18E+14
  },
  650: {
    income: 298542870,
    commonCost: 1.55E+15,
    rareCost: 6.11E+14,
    legendaryCost: 6.36E+14
  },
  651: {
    income: 307469302,
    commonCost: 1.62E+15,
    rareCost: 6.33E+14,
    legendaryCost: 6.58E+14
  },
  652: {
    income: 316395734,
    commonCost: 1.68E+15,
    rareCost: 6.55E+14,
    legendaryCost: 6.81E+14
  },
  653: {
    income: 325322166,
    commonCost: 1.75E+15,
    rareCost: 6.77E+14,
    legendaryCost: 7.04E+14
  },
  654: {
    income: 334248598,
    commonCost: 1.81E+15,
    rareCost: 7.00E+14,
    legendaryCost: 7.27E+14
  },
  655: {
    income: 343175030,
    commonCost: 1.88E+15,
    rareCost: 7.23E+14,
    legendaryCost: 7.51E+14
  },
  656: {
    income: 352101462,
    commonCost: 1.95E+15,
    rareCost: 7.46E+14,
    legendaryCost: 7.75E+14
  },
  657: {
    income: 361027894,
    commonCost: 2.02E+15,
    rareCost: 7.70E+14,
    legendaryCost: 7.98E+14
  },
  658: {
    income: 369954326,
    commonCost: 2.09E+15,
    rareCost: 7.94E+14,
    legendaryCost: 8.23E+14
  },
  659: {
    income: 378880758,
    commonCost: 2.16E+15,
    rareCost: 8.17E+14,
    legendaryCost: 8.47E+14
  },
  660: {
    income: 387807190,
    commonCost: 2.24E+15,
    rareCost: 8.42E+14,
    legendaryCost: 8.72E+14
  },
  661: {
    income: 399441406,
    commonCost: 2.33E+15,
    rareCost: 8.72E+14,
    legendaryCost: 9.02E+14
  },
  662: {
    income: 411075622,
    commonCost: 2.42E+15,
    rareCost: 9.03E+14,
    legendaryCost: 9.34E+14
  },
  663: {
    income: 422709838,
    commonCost: 2.51E+15,
    rareCost: 9.34E+14,
    legendaryCost: 9.65E+14
  },
  664: {
    income: 434344054,
    commonCost: 2.61E+15,
    rareCost: 9.65E+14,
    legendaryCost: 9.97E+14
  },
  665: {
    income: 445978270,
    commonCost: 2.70E+15,
    rareCost: 9.97E+14,
    legendaryCost: 1.03E+15
  },
  666: {
    income: 457612486,
    commonCost: 2.80E+15,
    rareCost: 1.03E+15,
    legendaryCost: 1.06E+15
  },
  667: {
    income: 469246702,
    commonCost: 2.90E+15,
    rareCost: 1.06E+15,
    legendaryCost: 1.09E+15
  },
  668: {
    income: 480880918,
    commonCost: 3.00E+15,
    rareCost: 1.09E+15,
    legendaryCost: 1.13E+15
  },
  669: {
    income: 492515134,
    commonCost: 3.11E+15,
    rareCost: 1.13E+15,
    legendaryCost: 1.16E+15
  },
  670: {
    income: 504149350,
    commonCost: 3.21E+15,
    rareCost: 1.16E+15,
    legendaryCost: 1.19E+15
  },
  671: {
    income: 519324245,
    commonCost: 3.34E+15,
    rareCost: 1.20E+15,
    legendaryCost: 1.24E+15
  },
  672: {
    income: 534499140,
    commonCost: 3.47E+15,
    rareCost: 1.24E+15,
    legendaryCost: 1.28E+15
  },
  673: {
    income: 549674035,
    commonCost: 3.60E+15,
    rareCost: 1.29E+15,
    legendaryCost: 1.32E+15
  },
  674: {
    income: 564848930,
    commonCost: 3.74E+15,
    rareCost: 1.33E+15,
    legendaryCost: 1.37E+15
  },
  675: {
    income: 580023825,
    commonCost: 3.87E+15,
    rareCost: 1.37E+15,
    legendaryCost: 1.41E+15
  },
  676: {
    income: 595198720,
    commonCost: 4.01E+15,
    rareCost: 1.42E+15,
    legendaryCost: 1.46E+15
  },
  677: {
    income: 610373615,
    commonCost: 4.16E+15,
    rareCost: 1.46E+15,
    legendaryCost: 1.50E+15
  },
  678: {
    income: 625548510,
    commonCost: 4.30E+15,
    rareCost: 1.51E+15,
    legendaryCost: 1.55E+15
  },
  679: {
    income: 640723405,
    commonCost: 4.45E+15,
    rareCost: 1.55E+15,
    legendaryCost: 1.59E+15
  },
  680: {
    income: 655898300,
    commonCost: 4.59E+15,
    rareCost: 1.60E+15,
    legendaryCost: 1.64E+15
  },
  681: {
    income: 675706429,
    commonCost: 4.78E+15,
    rareCost: 1.66E+15,
    legendaryCost: 1.70E+15
  },
  682: {
    income: 695514558,
    commonCost: 4.96E+15,
    rareCost: 1.71E+15,
    legendaryCost: 1.75E+15
  },
  683: {
    income: 715322687,
    commonCost: 5.15E+15,
    rareCost: 1.77E+15,
    legendaryCost: 1.81E+15
  },
  684: {
    income: 735130816,
    commonCost: 5.35E+15,
    rareCost: 1.83E+15,
    legendaryCost: 1.87E+15
  },
  685: {
    income: 754938945,
    commonCost: 5.54E+15,
    rareCost: 1.89E+15,
    legendaryCost: 1.93E+15
  },
  686: {
    income: 774747074,
    commonCost: 5.74E+15,
    rareCost: 1.95E+15,
    legendaryCost: 2.00E+15
  },
  687: {
    income: 794555203,
    commonCost: 5.94E+15,
    rareCost: 2.02E+15,
    legendaryCost: 2.06E+15
  },
  688: {
    income: 814363332,
    commonCost: 6.15E+15,
    rareCost: 2.08E+15,
    legendaryCost: 2.12E+15
  },
  689: {
    income: 834171461,
    commonCost: 6.35E+15,
    rareCost: 2.14E+15,
    legendaryCost: 2.18E+15
  },
  690: {
    income: 853979590,
    commonCost: 6.56E+15,
    rareCost: 2.20E+15,
    legendaryCost: 2.25E+15
  },
  691: {
    income: 879855172,
    commonCost: 6.83E+15,
    rareCost: 2.28E+15,
    legendaryCost: 2.33E+15
  },
  692: {
    income: 905730754,
    commonCost: 7.09E+15,
    rareCost: 2.36E+15,
    legendaryCost: 2.41E+15
  },
  693: {
    income: 931606336,
    commonCost: 7.36E+15,
    rareCost: 2.44E+15,
    legendaryCost: 2.49E+15
  },
  694: {
    income: 957481918,
    commonCost: 7.63E+15,
    rareCost: 2.53E+15,
    legendaryCost: 2.57E+15
  },
  695: {
    income: 983357500,
    commonCost: 7.91E+15,
    rareCost: 2.61E+15,
    legendaryCost: 2.65E+15
  },
  696: {
    income: 1009233082,
    commonCost: 8.19E+15,
    rareCost: 2.69E+15,
    legendaryCost: 2.74E+15
  },
  697: {
    income: 1035108664,
    commonCost: 8.48E+15,
    rareCost: 2.78E+15,
    legendaryCost: 2.82E+15
  },
  698: {
    income: 1060984246,
    commonCost: 8.77E+15,
    rareCost: 2.86E+15,
    legendaryCost: 2.91E+15
  },
  699: {
    income: 1086859828,
    commonCost: 9.06E+15,
    rareCost: 2.95E+15,
    legendaryCost: 2.99E+15
  },
  700: {
    income: 1112735410,
    commonCost: 9.36E+15,
    rareCost: 3.04E+15,
    legendaryCost: 3.08E+15
  },
  701: {
    income: 1146562566,
    commonCost: 9.73E+15,
    rareCost: 3.15E+15,
    legendaryCost: 3.19E+15
  },
  702: {
    income: 1180389722,
    commonCost: 1.01E+16,
    rareCost: 3.26E+15,
    legendaryCost: 3.30E+15
  },
  703: {
    income: 1214216878,
    commonCost: 1.05E+16,
    rareCost: 3.37E+15,
    legendaryCost: 3.41E+15
  },
  704: {
    income: 1248044034,
    commonCost: 1.09E+16,
    rareCost: 3.48E+15,
    legendaryCost: 3.52E+15
  },
  705: {
    income: 1281871190,
    commonCost: 1.13E+16,
    rareCost: 3.60E+15,
    legendaryCost: 3.64E+15
  },
  706: {
    income: 1315698346,
    commonCost: 1.17E+16,
    rareCost: 3.71E+15,
    legendaryCost: 3.75E+15
  },
  707: {
    income: 1349525502,
    commonCost: 1.21E+16,
    rareCost: 3.83E+15,
    legendaryCost: 3.87E+15
  },
  708: {
    income: 1383352658,
    commonCost: 1.25E+16,
    rareCost: 3.95E+15,
    legendaryCost: 3.99E+15
  },
  709: {
    income: 1417179814,
    commonCost: 1.29E+16,
    rareCost: 4.07E+15,
    legendaryCost: 4.10E+15
  },
  710: {
    income: 1451006970,
    commonCost: 1.33E+16,
    rareCost: 4.19E+15,
    legendaryCost: 4.22E+15
  },
  711: {
    income: 1495262683,
    commonCost: 1.39E+16,
    rareCost: 4.34E+15,
    legendaryCost: 4.38E+15
  },
  712: {
    income: 1539518396,
    commonCost: 1.44E+16,
    rareCost: 4.50E+15,
    legendaryCost: 4.53E+15
  },
  713: {
    income: 1583774109,
    commonCost: 1.50E+16,
    rareCost: 4.65E+15,
    legendaryCost: 4.69E+15
  },
  714: {
    income: 1628029822,
    commonCost: 1.55E+16,
    rareCost: 4.81E+15,
    legendaryCost: 4.85E+15
  },
  715: {
    income: 1672285535,
    commonCost: 1.61E+16,
    rareCost: 4.98E+15,
    legendaryCost: 5.01E+15
  },
  716: {
    income: 1716541248,
    commonCost: 1.67E+16,
    rareCost: 5.14E+15,
    legendaryCost: 5.17E+15
  },
  717: {
    income: 1760796961,
    commonCost: 1.72E+16,
    rareCost: 5.30E+15,
    legendaryCost: 5.33E+15
  },
  718: {
    income: 1805052674,
    commonCost: 1.78E+16,
    rareCost: 5.47E+15,
    legendaryCost: 5.49E+15
  },
  719: {
    income: 1849308387,
    commonCost: 1.84E+16,
    rareCost: 5.64E+15,
    legendaryCost: 5.66E+15
  },
  720: {
    income: 1893564100,
    commonCost: 1.91E+16,
    rareCost: 5.81E+15,
    legendaryCost: 5.83E+15
  },
  721: {
    income: 1951507161,
    commonCost: 1.98E+16,
    rareCost: 6.02E+15,
    legendaryCost: 6.04E+15
  },
  722: {
    income: 2009450222,
    commonCost: 2.06E+16,
    rareCost: 6.24E+15,
    legendaryCost: 6.25E+15
  },
  723: {
    income: 2067393283,
    commonCost: 2.14E+16,
    rareCost: 6.46E+15,
    legendaryCost: 6.47E+15
  },
  724: {
    income: 2125336344,
    commonCost: 2.22E+16,
    rareCost: 6.68E+15,
    legendaryCost: 6.69E+15
  },
  725: {
    income: 2183279405,
    commonCost: 2.30E+16,
    rareCost: 6.90E+15,
    legendaryCost: 6.91E+15
  },
  726: {
    income: 2241222466,
    commonCost: 2.38E+16,
    rareCost: 7.13E+15,
    legendaryCost: 7.13E+15
  },
  727: {
    income: 2299165527,
    commonCost: 2.46E+16,
    rareCost: 7.35E+15,
    legendaryCost: 7.36E+15
  },
  728: {
    income: 2357108588,
    commonCost: 2.55E+16,
    rareCost: 7.58E+15,
    legendaryCost: 7.58E+15
  },
  729: {
    income: 2415051649,
    commonCost: 2.63E+16,
    rareCost: 7.82E+15,
    legendaryCost: 7.81E+15
  },
  730: {
    income: 2472994710,
    commonCost: 2.72E+16,
    rareCost: 8.05E+15,
    legendaryCost: 8.04E+15
  },
  731: {
    income: 2548915648,
    commonCost: 2.83E+16,
    rareCost: 8.35E+15,
    legendaryCost: 8.34E+15
  },
  732: {
    income: 2624836586,
    commonCost: 2.94E+16,
    rareCost: 8.65E+15,
    legendaryCost: 8.63E+15
  },
  733: {
    income: 2700757524,
    commonCost: 3.05E+16,
    rareCost: 8.95E+15,
    legendaryCost: 8.93E+15
  },
  734: {
    income: 2776678462,
    commonCost: 3.16E+16,
    rareCost: 9.26E+15,
    legendaryCost: 9.23E+15
  },
  735: {
    income: 2852599400,
    commonCost: 3.28E+16,
    rareCost: 9.57E+15,
    legendaryCost: 9.53E+15
  },
  736: {
    income: 2928520338,
    commonCost: 3.39E+16,
    rareCost: 9.88E+15,
    legendaryCost: 9.84E+15
  },
  737: {
    income: 3004441276,
    commonCost: 3.51E+16,
    rareCost: 1.02E+16,
    legendaryCost: 1.02E+16
  },
  738: {
    income: 3080362214,
    commonCost: 3.63E+16,
    rareCost: 1.05E+16,
    legendaryCost: 1.05E+16
  },
  739: {
    income: 3156283152,
    commonCost: 3.75E+16,
    rareCost: 1.08E+16,
    legendaryCost: 1.08E+16
  },
  740: {
    income: 3232204090,
    commonCost: 3.88E+16,
    rareCost: 1.12E+16,
    legendaryCost: 1.11E+16
  },
  741: {
    income: 3331755976,
    commonCost: 4.03E+16,
    rareCost: 1.16E+16,
    legendaryCost: 1.15E+16
  },
  742: {
    income: 3431307862,
    commonCost: 4.19E+16,
    rareCost: 1.20E+16,
    legendaryCost: 1.19E+16
  },
  743: {
    income: 3530859748,
    commonCost: 4.35E+16,
    rareCost: 1.24E+16,
    legendaryCost: 1.23E+16
  },
  744: {
    income: 3630411634,
    commonCost: 4.51E+16,
    rareCost: 1.28E+16,
    legendaryCost: 1.27E+16
  },
  745: {
    income: 3729963520,
    commonCost: 4.67E+16,
    rareCost: 1.33E+16,
    legendaryCost: 1.32E+16
  },
  746: {
    income: 3829515406,
    commonCost: 4.84E+16,
    rareCost: 1.37E+16,
    legendaryCost: 1.36E+16
  },
  747: {
    income: 3929067292,
    commonCost: 5.00E+16,
    rareCost: 1.41E+16,
    legendaryCost: 1.40E+16
  },
  748: {
    income: 4028619178,
    commonCost: 5.17E+16,
    rareCost: 1.46E+16,
    legendaryCost: 1.44E+16
  },
  749: {
    income: 4128171064,
    commonCost: 5.35E+16,
    rareCost: 1.50E+16,
    legendaryCost: 1.49E+16
  },
  750: {
    income: 4227722950,
    commonCost: 5.52E+16,
    rareCost: 1.55E+16,
    legendaryCost: 1.53E+16
  },
  751: {
    income: 4358359589,
    commonCost: 5.74E+16,
    rareCost: 1.61E+16,
    legendaryCost: 1.59E+16
  },
  752: {
    income: 4488996228,
    commonCost: 5.96E+16,
    rareCost: 1.66E+16,
    legendaryCost: 1.64E+16
  },
  753: {
    income: 4619632867,
    commonCost: 6.18E+16,
    rareCost: 1.72E+16,
    legendaryCost: 1.70E+16
  },
  754: {
    income: 4750269506,
    commonCost: 6.41E+16,
    rareCost: 1.78E+16,
    legendaryCost: 1.76E+16
  },
  755: {
    income: 4880906145,
    commonCost: 6.64E+16,
    rareCost: 1.84E+16,
    legendaryCost: 1.82E+16
  },
  756: {
    income: 5011542784,
    commonCost: 6.88E+16,
    rareCost: 1.90E+16,
    legendaryCost: 1.87E+16
  },
  757: {
    income: 5142179423,
    commonCost: 7.12E+16,
    rareCost: 1.96E+16,
    legendaryCost: 1.93E+16
  },
  758: {
    income: 5272816062,
    commonCost: 7.36E+16,
    rareCost: 2.02E+16,
    legendaryCost: 1.99E+16
  },
  759: {
    income: 5403452701,
    commonCost: 7.60E+16,
    rareCost: 2.08E+16,
    legendaryCost: 2.05E+16
  },
  760: {
    income: 5534089340,
    commonCost: 7.85E+16,
    rareCost: 2.15E+16,
    legendaryCost: 2.11E+16
  },
  761: {
    income: 5705646110,
    commonCost: 8.16E+16,
    rareCost: 2.23E+16,
    legendaryCost: 2.19E+16
  },
  762: {
    income: 5877202880,
    commonCost: 8.47E+16,
    rareCost: 2.31E+16,
    legendaryCost: 2.27E+16
  },
  763: {
    income: 6048759650,
    commonCost: 8.79E+16,
    rareCost: 2.39E+16,
    legendaryCost: 2.35E+16
  },
  764: {
    income: 6220316420,
    commonCost: 9.11E+16,
    rareCost: 2.47E+16,
    legendaryCost: 2.43E+16
  },
  765: {
    income: 6391873190,
    commonCost: 9.44E+16,
    rareCost: 2.55E+16,
    legendaryCost: 2.51E+16
  },
  766: {
    income: 6563429960,
    commonCost: 9.77E+16,
    rareCost: 2.64E+16,
    legendaryCost: 2.59E+16
  },
  767: {
    income: 6734986730,
    commonCost: 1.01E+17,
    rareCost: 2.72E+16,
    legendaryCost: 2.67E+16
  },
  768: {
    income: 6906543500,
    commonCost: 1.05E+17,
    rareCost: 2.80E+16,
    legendaryCost: 2.75E+16
  },
  769: {
    income: 7078100270,
    commonCost: 1.08E+17,
    rareCost: 2.89E+16,
    legendaryCost: 2.83E+16
  },
  770: {
    income: 7249657040,
    commonCost: 1.11E+17,
    rareCost: 2.98E+16,
    legendaryCost: 2.92E+16
  },
  771: {
    income: 7475121374,
    commonCost: 1.16E+17,
    rareCost: 3.09E+16,
    legendaryCost: 3.02E+16
  },
  772: {
    income: 7700585708,
    commonCost: 1.20E+17,
    rareCost: 3.20E+16,
    legendaryCost: 3.13E+16
  },
  773: {
    income: 7926050042,
    commonCost: 1.25E+17,
    rareCost: 3.31E+16,
    legendaryCost: 3.24E+16
  },
  774: {
    income: 8151514376,
    commonCost: 1.29E+17,
    rareCost: 3.42E+16,
    legendaryCost: 3.35E+16
  },
  775: {
    income: 8376978710,
    commonCost: 1.34E+17,
    rareCost: 3.54E+16,
    legendaryCost: 3.46E+16
  },
  776: {
    income: 8602443044,
    commonCost: 1.39E+17,
    rareCost: 3.65E+16,
    legendaryCost: 3.57E+16
  },
  777: {
    income: 8827907378,
    commonCost: 1.44E+17,
    rareCost: 3.77E+16,
    legendaryCost: 3.68E+16
  },
  778: {
    income: 9053371712,
    commonCost: 1.48E+17,
    rareCost: 3.89E+16,
    legendaryCost: 3.80E+16
  },
  779: {
    income: 9278836046,
    commonCost: 1.53E+17,
    rareCost: 4.01E+16,
    legendaryCost: 3.91E+16
  },
  780: {
    income: 9504300380,
    commonCost: 1.58E+17,
    rareCost: 4.13E+16,
    legendaryCost: 4.03E+16
  },
  781: {
    income: 9800834552,
    commonCost: 1.64E+17,
    rareCost: 4.28E+16,
    legendaryCost: 4.18E+16
  },
  782: {
    income: 10097368724,
    commonCost: 1.71E+17,
    rareCost: 4.44E+16,
    legendaryCost: 4.32E+16
  },
  783: {
    income: 10393902896,
    commonCost: 1.77E+17,
    rareCost: 4.59E+16,
    legendaryCost: 4.47E+16
  },
  784: {
    income: 10690437068,
    commonCost: 1.84E+17,
    rareCost: 4.75E+16,
    legendaryCost: 4.62E+16
  },
  785: {
    income: 10986971240,
    commonCost: 1.90E+17,
    rareCost: 4.91E+16,
    legendaryCost: 4.78E+16
  },
  786: {
    income: 11283505412,
    commonCost: 1.97E+17,
    rareCost: 5.07E+16,
    legendaryCost: 4.93E+16
  },
  787: {
    income: 11580039584,
    commonCost: 2.04E+17,
    rareCost: 5.23E+16,
    legendaryCost: 5.09E+16
  },
  788: {
    income: 11876573756,
    commonCost: 2.10E+17,
    rareCost: 5.39E+16,
    legendaryCost: 5.24E+16
  },
  789: {
    income: 12173107928,
    commonCost: 2.17E+17,
    rareCost: 5.56E+16,
    legendaryCost: 5.40E+16
  },
  790: {
    income: 12469642100,
    commonCost: 2.24E+17,
    rareCost: 5.73E+16,
    legendaryCost: 5.56E+16
  },
  791: {
    income: 12859941898,
    commonCost: 2.33E+17,
    rareCost: 5.94E+16,
    legendaryCost: 5.77E+16
  },
  792: {
    income: 13250241696,
    commonCost: 2.42E+17,
    rareCost: 6.15E+16,
    legendaryCost: 5.97E+16
  },
  793: {
    income: 13640541494,
    commonCost: 2.51E+17,
    rareCost: 6.37E+16,
    legendaryCost: 6.18E+16
  },
  794: {
    income: 14030841292,
    commonCost: 2.60E+17,
    rareCost: 6.59E+16,
    legendaryCost: 6.39E+16
  },
  795: {
    income: 14421141090,
    commonCost: 2.69E+17,
    rareCost: 6.81E+16,
    legendaryCost: 6.60E+16
  },
  796: {
    income: 14811440888,
    commonCost: 2.79E+17,
    rareCost: 7.03E+16,
    legendaryCost: 6.81E+16
  },
  797: {
    income: 15201740686,
    commonCost: 2.88E+17,
    rareCost: 7.25E+16,
    legendaryCost: 7.02E+16
  },
  798: {
    income: 15592040484,
    commonCost: 2.98E+17,
    rareCost: 7.48E+16,
    legendaryCost: 7.24E+16
  },
  799: {
    income: 15982340282,
    commonCost: 3.08E+17,
    rareCost: 7.71E+16,
    legendaryCost: 7.46E+16
  },
  800: {
    income: 16372640080,
    commonCost: 3.18E+17,
    rareCost: 7.94E+16,
    legendaryCost: 7.68E+16
  },
  801: {
    income: 16886740979,
    commonCost: 3.30E+17,
    rareCost: 8.24E+16,
    legendaryCost: 7.96E+16
  },
  802: {
    income: 17400841878,
    commonCost: 3.43E+17,
    rareCost: 8.53E+16,
    legendaryCost: 8.24E+16
  },
  803: {
    income: 17914942777,
    commonCost: 3.55E+17,
    rareCost: 8.83E+16,
    legendaryCost: 8.53E+16
  },
  804: {
    income: 18429043676,
    commonCost: 3.68E+17,
    rareCost: 9.14E+16,
    legendaryCost: 8.82E+16
  },
  805: {
    income: 18943144575,
    commonCost: 3.82E+17,
    rareCost: 9.44E+16,
    legendaryCost: 9.11E+16
  },
  806: {
    income: 19457245474,
    commonCost: 3.95E+17,
    rareCost: 9.75E+16,
    legendaryCost: 9.40E+16
  },
  807: {
    income: 19971346373,
    commonCost: 4.08E+17,
    rareCost: 1.01E+17,
    legendaryCost: 9.70E+16
  },
  808: {
    income: 20485447272,
    commonCost: 4.22E+17,
    rareCost: 1.04E+17,
    legendaryCost: 1.00E+17
  },
  809: {
    income: 20999548171,
    commonCost: 4.36E+17,
    rareCost: 1.07E+17,
    legendaryCost: 1.03E+17
  },
  810: {
    income: 21513649070,
    commonCost: 4.50E+17,
    rareCost: 1.10E+17,
    legendaryCost: 1.06E+17
  },
  811: {
    income: 22191329016,
    commonCost: 4.67E+17,
    rareCost: 1.14E+17,
    legendaryCost: 1.10E+17
  },
  812: {
    income: 22869008962,
    commonCost: 4.85E+17,
    rareCost: 1.18E+17,
    legendaryCost: 1.14E+17
  },
  813: {
    income: 23546688908,
    commonCost: 5.03E+17,
    rareCost: 1.23E+17,
    legendaryCost: 1.18E+17
  },
  814: {
    income: 24224368854,
    commonCost: 5.21E+17,
    rareCost: 1.27E+17,
    legendaryCost: 1.22E+17
  },
  815: {
    income: 24902048800,
    commonCost: 5.40E+17,
    rareCost: 1.31E+17,
    legendaryCost: 1.26E+17
  },
  816: {
    income: 25579728746,
    commonCost: 5.59E+17,
    rareCost: 1.35E+17,
    legendaryCost: 1.30E+17
  },
  817: {
    income: 26257408692,
    commonCost: 5.78E+17,
    rareCost: 1.40E+17,
    legendaryCost: 1.34E+17
  },
  818: {
    income: 26935088638,
    commonCost: 5.97E+17,
    rareCost: 1.44E+17,
    legendaryCost: 1.38E+17
  },
  819: {
    income: 27612768584,
    commonCost: 6.16E+17,
    rareCost: 1.48E+17,
    legendaryCost: 1.42E+17
  },
  820: {
    income: 28290448530,
    commonCost: 6.36E+17,
    rareCost: 1.53E+17,
    legendaryCost: 1.47E+17
  },
  821: {
    income: 29184426704,
    commonCost: 6.61E+17,
    rareCost: 1.59E+17,
    legendaryCost: 1.52E+17
  },
  822: {
    income: 30078404878,
    commonCost: 6.86E+17,
    rareCost: 1.64E+17,
    legendaryCost: 1.57E+17
  },
  823: {
    income: 30972383052,
    commonCost: 7.12E+17,
    rareCost: 1.70E+17,
    legendaryCost: 1.63E+17
  },
  824: {
    income: 31866361226,
    commonCost: 7.37E+17,
    rareCost: 1.76E+17,
    legendaryCost: 1.68E+17
  },
  825: {
    income: 32760339400,
    commonCost: 7.64E+17,
    rareCost: 1.82E+17,
    legendaryCost: 1.74E+17
  },
  826: {
    income: 33654317574,
    commonCost: 7.90E+17,
    rareCost: 1.88E+17,
    legendaryCost: 1.79E+17
  },
  827: {
    income: 34548295748,
    commonCost: 8.17E+17,
    rareCost: 1.94E+17,
    legendaryCost: 1.85E+17
  },
  828: {
    income: 35442273922,
    commonCost: 8.44E+17,
    rareCost: 2.00E+17,
    legendaryCost: 1.91E+17
  },
  829: {
    income: 36336252096,
    commonCost: 8.71E+17,
    rareCost: 2.06E+17,
    legendaryCost: 1.97E+17
  },
  830: {
    income: 37230230270,
    commonCost: 8.99E+17,
    rareCost: 2.12E+17,
    legendaryCost: 2.02E+17
  },
  831: {
    income: 38410428570,
    commonCost: 9.34E+17,
    rareCost: 2.20E+17,
    legendaryCost: 2.10E+17
  },
  832: {
    income: 39590626870,
    commonCost: 9.70E+17,
    rareCost: 2.28E+17,
    legendaryCost: 2.17E+17
  },
  833: {
    income: 40770825170,
    commonCost: 1.01E+18,
    rareCost: 2.36E+17,
    legendaryCost: 2.25E+17
  },
  834: {
    income: 41951023470,
    commonCost: 1.04E+18,
    rareCost: 2.44E+17,
    legendaryCost: 2.33E+17
  },
  835: {
    income: 43131221770,
    commonCost: 1.08E+18,
    rareCost: 2.52E+17,
    legendaryCost: 2.40E+17
  },
  836: {
    income: 44311420070,
    commonCost: 1.12E+18,
    rareCost: 2.60E+17,
    legendaryCost: 2.48E+17
  },
  837: {
    income: 45491618370,
    commonCost: 1.15E+18,
    rareCost: 2.69E+17,
    legendaryCost: 2.56E+17
  },
  838: {
    income: 46671816670,
    commonCost: 1.19E+18,
    rareCost: 2.77E+17,
    legendaryCost: 2.64E+17
  },
  839: {
    income: 47852014970,
    commonCost: 1.23E+18,
    rareCost: 2.86E+17,
    legendaryCost: 2.72E+17
  },
  840: {
    income: 49032213270,
    commonCost: 1.27E+18,
    rareCost: 2.94E+17,
    legendaryCost: 2.80E+17
  },
  841: {
    income: 50591437652,
    commonCost: 1.32E+18,
    rareCost: 3.05E+17,
    legendaryCost: 2.90E+17
  },
  842: {
    income: 52150662034,
    commonCost: 1.37E+18,
    rareCost: 3.16E+17,
    legendaryCost: 3.00E+17
  },
  843: {
    income: 53709886416,
    commonCost: 1.42E+18,
    rareCost: 3.27E+17,
    legendaryCost: 3.11E+17
  },
  844: {
    income: 55269110798,
    commonCost: 1.47E+18,
    rareCost: 3.39E+17,
    legendaryCost: 3.21E+17
  },
  845: {
    income: 56828335180,
    commonCost: 1.52E+18,
    rareCost: 3.50E+17,
    legendaryCost: 3.32E+17
  },
  846: {
    income: 58387559562,
    commonCost: 1.58E+18,
    rareCost: 3.61E+17,
    legendaryCost: 3.43E+17
  },
  847: {
    income: 59946783944,
    commonCost: 1.63E+18,
    rareCost: 3.73E+17,
    legendaryCost: 3.54E+17
  },
  848: {
    income: 61506008326,
    commonCost: 1.68E+18,
    rareCost: 3.85E+17,
    legendaryCost: 3.65E+17
  },
  849: {
    income: 63065232708,
    commonCost: 1.74E+18,
    rareCost: 3.97E+17,
    legendaryCost: 3.76E+17
  },
  850: {
    income: 64624457090,
    commonCost: 1.79E+18,
    rareCost: 4.08E+17,
    legendaryCost: 3.87E+17
  },
  851: {
    income: 66685977271,
    commonCost: 1.86E+18,
    rareCost: 4.24E+17,
    legendaryCost: 4.01E+17
  },
  852: {
    income: 68747497452,
    commonCost: 1.94E+18,
    rareCost: 4.39E+17,
    legendaryCost: 4.15E+17
  },
  853: {
    income: 70809017633,
    commonCost: 2.01E+18,
    rareCost: 4.54E+17,
    legendaryCost: 4.30E+17
  },
  854: {
    income: 72870537814,
    commonCost: 2.08E+18,
    rareCost: 4.70E+17,
    legendaryCost: 4.44E+17
  },
  855: {
    income: 74932057995,
    commonCost: 2.15E+18,
    rareCost: 4.86E+17,
    legendaryCost: 4.59E+17
  },
  856: {
    income: 76993578176,
    commonCost: 2.23E+18,
    rareCost: 5.02E+17,
    legendaryCost: 4.74E+17
  },
  857: {
    income: 79055098357,
    commonCost: 2.30E+18,
    rareCost: 5.18E+17,
    legendaryCost: 4.89E+17
  },
  858: {
    income: 81116618538,
    commonCost: 2.38E+18,
    rareCost: 5.34E+17,
    legendaryCost: 5.04E+17
  },
  859: {
    income: 83178138719,
    commonCost: 2.46E+18,
    rareCost: 5.50E+17,
    legendaryCost: 5.19E+17
  },
  860: {
    income: 85239658900,
    commonCost: 2.53E+18,
    rareCost: 5.67E+17,
    legendaryCost: 5.35E+17
  },
  861: {
    income: 87967327985,
    commonCost: 2.63E+18,
    rareCost: 5.88E+17,
    legendaryCost: 5.54E+17
  },
  862: {
    income: 90694997070,
    commonCost: 2.73E+18,
    rareCost: 6.09E+17,
    legendaryCost: 5.74E+17
  },
  863: {
    income: 93422666155,
    commonCost: 2.83E+18,
    rareCost: 6.31E+17,
    legendaryCost: 5.94E+17
  },
  864: {
    income: 96150335240,
    commonCost: 2.94E+18,
    rareCost: 6.53E+17,
    legendaryCost: 6.15E+17
  },
  865: {
    income: 98878004325,
    commonCost: 3.04E+18,
    rareCost: 6.75E+17,
    legendaryCost: 6.35E+17
  },
  866: {
    income: 1.02E+11,
    commonCost: 3.14E+18,
    rareCost: 6.97E+17,
    legendaryCost: 6.56E+17
  },
  867: {
    income: 1.04E+11,
    commonCost: 3.25E+18,
    rareCost: 7.19E+17,
    legendaryCost: 6.76E+17
  },
  868: {
    income: 1.07E+11,
    commonCost: 3.36E+18,
    rareCost: 7.42E+17,
    legendaryCost: 6.97E+17
  },
  869: {
    income: 1.10E+11,
    commonCost: 3.46E+18,
    rareCost: 7.64E+17,
    legendaryCost: 7.18E+17
  },
  870: {
    income: 1.13E+11,
    commonCost: 3.57E+18,
    rareCost: 7.87E+17,
    legendaryCost: 7.40E+17
  },
  871: {
    income: 1.16E+11,
    commonCost: 3.71E+18,
    rareCost: 8.17E+17,
    legendaryCost: 7.67E+17
  },
  872: {
    income: 1.20E+11,
    commonCost: 3.85E+18,
    rareCost: 8.46E+17,
    legendaryCost: 7.94E+17
  },
  873: {
    income: 1.23E+11,
    commonCost: 4.00E+18,
    rareCost: 8.76E+17,
    legendaryCost: 8.22E+17
  },
  874: {
    income: 1.27E+11,
    commonCost: 4.14E+18,
    rareCost: 9.06E+17,
    legendaryCost: 8.50E+17
  },
  875: {
    income: 1.31E+11,
    commonCost: 4.29E+18,
    rareCost: 9.37E+17,
    legendaryCost: 8.78E+17
  },
  876: {
    income: 1.34E+11,
    commonCost: 4.44E+18,
    rareCost: 9.68E+17,
    legendaryCost: 9.07E+17
  },
  877: {
    income: 1.38E+11,
    commonCost: 4.58E+18,
    rareCost: 9.99E+17,
    legendaryCost: 9.35E+17
  },
  878: {
    income: 1.41E+11,
    commonCost: 4.74E+18,
    rareCost: 1.03E+18,
    legendaryCost: 9.64E+17
  },
  879: {
    income: 1.45E+11,
    commonCost: 4.89E+18,
    rareCost: 1.06E+18,
    legendaryCost: 9.94E+17
  },
  880: {
    income: 1.49E+11,
    commonCost: 5.04E+18,
    rareCost: 1.09E+18,
    legendaryCost: 1.02E+18
  },
  881: {
    income: 1.53E+11,
    commonCost: 5.24E+18,
    rareCost: 1.13E+18,
    legendaryCost: 1.06E+18
  },
  882: {
    income: 1.58E+11,
    commonCost: 5.44E+18,
    rareCost: 1.18E+18,
    legendaryCost: 1.10E+18
  },
  883: {
    income: 1.63E+11,
    commonCost: 5.64E+18,
    rareCost: 1.22E+18,
    legendaryCost: 1.14E+18
  },
  884: {
    income: 1.68E+11,
    commonCost: 5.84E+18,
    rareCost: 1.26E+18,
    legendaryCost: 1.18E+18
  },
  885: {
    income: 1.73E+11,
    commonCost: 6.05E+18,
    rareCost: 1.30E+18,
    legendaryCost: 1.22E+18
  },
  886: {
    income: 1.77E+11,
    commonCost: 6.26E+18,
    rareCost: 1.34E+18,
    legendaryCost: 1.25E+18
  },
  887: {
    income: 1.82E+11,
    commonCost: 6.47E+18,
    rareCost: 1.39E+18,
    legendaryCost: 1.29E+18
  },
  888: {
    income: 1.87E+11,
    commonCost: 6.68E+18,
    rareCost: 1.43E+18,
    legendaryCost: 1.33E+18
  },
  889: {
    income: 1.92E+11,
    commonCost: 6.89E+18,
    rareCost: 1.47E+18,
    legendaryCost: 1.38E+18
  },
  890: {
    income: 1.96E+11,
    commonCost: 7.11E+18,
    rareCost: 1.52E+18,
    legendaryCost: 1.42E+18
  },
  891: {
    income: 2.03E+11,
    commonCost: 7.39E+18,
    rareCost: 1.58E+18,
    legendaryCost: 1.47E+18
  },
  892: {
    income: 2.09E+11,
    commonCost: 7.67E+18,
    rareCost: 1.63E+18,
    legendaryCost: 1.52E+18
  },
  893: {
    income: 2.16E+11,
    commonCost: 7.95E+18,
    rareCost: 1.69E+18,
    legendaryCost: 1.57E+18
  },
  894: {
    income: 2.22E+11,
    commonCost: 8.24E+18,
    rareCost: 1.75E+18,
    legendaryCost: 1.63E+18
  },
  895: {
    income: 2.28E+11,
    commonCost: 8.53E+18,
    rareCost: 1.81E+18,
    legendaryCost: 1.68E+18
  },
  896: {
    income: 2.35E+11,
    commonCost: 8.82E+18,
    rareCost: 1.87E+18,
    legendaryCost: 1.74E+18
  },
  897: {
    income: 2.41E+11,
    commonCost: 9.12E+18,
    rareCost: 1.93E+18,
    legendaryCost: 1.79E+18
  },
  898: {
    income: 2.47E+11,
    commonCost: 9.42E+18,
    rareCost: 1.99E+18,
    legendaryCost: 1.85E+18
  },
  899: {
    income: 2.54E+11,
    commonCost: 9.72E+18,
    rareCost: 2.05E+18,
    legendaryCost: 1.90E+18
  },
  900: {
    income: 2.60E+11,
    commonCost: 1.00E+19,
    rareCost: 2.11E+18,
    legendaryCost: 1.96E+18
  },
  901: {
    income: 2.68E+11,
    commonCost: 1.04E+19,
    rareCost: 2.19E+18,
    legendaryCost: 2.03E+18
  },
  902: {
    income: 2.77E+11,
    commonCost: 1.08E+19,
    rareCost: 2.27E+18,
    legendaryCost: 2.11E+18
  },
  903: {
    income: 2.85E+11,
    commonCost: 1.12E+19,
    rareCost: 2.35E+18,
    legendaryCost: 2.18E+18
  },
  904: {
    income: 2.94E+11,
    commonCost: 1.16E+19,
    rareCost: 2.43E+18,
    legendaryCost: 2.25E+18
  },
  905: {
    income: 3.02E+11,
    commonCost: 1.20E+19,
    rareCost: 2.51E+18,
    legendaryCost: 2.33E+18
  },
  906: {
    income: 3.10E+11,
    commonCost: 1.24E+19,
    rareCost: 2.60E+18,
    legendaryCost: 2.40E+18
  },
  907: {
    income: 3.19E+11,
    commonCost: 1.29E+19,
    rareCost: 2.68E+18,
    legendaryCost: 2.48E+18
  },
  908: {
    income: 3.27E+11,
    commonCost: 1.33E+19,
    rareCost: 2.76E+18,
    legendaryCost: 2.56E+18
  },
  909: {
    income: 3.36E+11,
    commonCost: 1.37E+19,
    rareCost: 2.85E+18,
    legendaryCost: 2.64E+18
  },
  910: {
    income: 3.44E+11,
    commonCost: 1.41E+19,
    rareCost: 2.93E+18,
    legendaryCost: 2.71E+18
  },
  911: {
    income: 3.55E+11,
    commonCost: 1.47E+19,
    rareCost: 3.04E+18,
    legendaryCost: 2.81E+18
  },
  912: {
    income: 3.67E+11,
    commonCost: 1.52E+19,
    rareCost: 3.15E+18,
    legendaryCost: 2.92E+18
  },
  913: {
    income: 3.78E+11,
    commonCost: 1.58E+19,
    rareCost: 3.27E+18,
    legendaryCost: 3.02E+18
  },
  914: {
    income: 3.89E+11,
    commonCost: 1.64E+19,
    rareCost: 3.38E+18,
    legendaryCost: 3.12E+18
  },
  915: {
    income: 4.00E+11,
    commonCost: 1.69E+19,
    rareCost: 3.49E+18,
    legendaryCost: 3.23E+18
  },
  916: {
    income: 4.11E+11,
    commonCost: 1.75E+19,
    rareCost: 3.61E+18,
    legendaryCost: 3.33E+18
  },
  917: {
    income: 4.22E+11,
    commonCost: 1.81E+19,
    rareCost: 3.72E+18,
    legendaryCost: 3.44E+18
  },
  918: {
    income: 4.34E+11,
    commonCost: 1.87E+19,
    rareCost: 3.84E+18,
    legendaryCost: 3.54E+18
  },
  919: {
    income: 4.45E+11,
    commonCost: 1.93E+19,
    rareCost: 3.96E+18,
    legendaryCost: 3.65E+18
  },
  920: {
    income: 4.56E+11,
    commonCost: 1.99E+19,
    rareCost: 4.08E+18,
    legendaryCost: 3.76E+18
  },
  921: {
    income: 4.71E+11,
    commonCost: 2.07E+19,
    rareCost: 4.23E+18,
    legendaryCost: 3.90E+18
  },
  922: {
    income: 4.86E+11,
    commonCost: 2.15E+19,
    rareCost: 4.39E+18,
    legendaryCost: 4.04E+18
  },
  923: {
    income: 5.01E+11,
    commonCost: 2.23E+19,
    rareCost: 4.54E+18,
    legendaryCost: 4.18E+18
  },
  924: {
    income: 5.16E+11,
    commonCost: 2.31E+19,
    rareCost: 4.70E+18,
    legendaryCost: 4.32E+18
  },
  925: {
    income: 5.30E+11,
    commonCost: 2.39E+19,
    rareCost: 4.86E+18,
    legendaryCost: 4.47E+18
  },
  926: {
    income: 5.45E+11,
    commonCost: 2.47E+19,
    rareCost: 5.02E+18,
    legendaryCost: 4.61E+18
  },
  927: {
    income: 5.60E+11,
    commonCost: 2.55E+19,
    rareCost: 5.18E+18,
    legendaryCost: 4.76E+18
  },
  928: {
    income: 5.75E+11,
    commonCost: 2.64E+19,
    rareCost: 5.34E+18,
    legendaryCost: 4.91E+18
  },
  929: {
    income: 5.90E+11,
    commonCost: 2.72E+19,
    rareCost: 5.51E+18,
    legendaryCost: 5.06E+18
  },
  930: {
    income: 6.05E+11,
    commonCost: 2.81E+19,
    rareCost: 5.67E+18,
    legendaryCost: 5.21E+18
  },
  931: {
    income: 6.24E+11,
    commonCost: 2.92E+19,
    rareCost: 5.88E+18,
    legendaryCost: 5.40E+18
  },
  932: {
    income: 6.44E+11,
    commonCost: 3.03E+19,
    rareCost: 6.10E+18,
    legendaryCost: 5.60E+18
  },
  933: {
    income: 6.64E+11,
    commonCost: 3.14E+19,
    rareCost: 6.32E+18,
    legendaryCost: 5.79E+18
  },
  934: {
    income: 6.84E+11,
    commonCost: 3.25E+19,
    rareCost: 6.53E+18,
    legendaryCost: 5.99E+18
  },
  935: {
    income: 7.04E+11,
    commonCost: 3.37E+19,
    rareCost: 6.76E+18,
    legendaryCost: 6.19E+18
  },
  936: {
    income: 7.23E+11,
    commonCost: 3.48E+19,
    rareCost: 6.98E+18,
    legendaryCost: 6.40E+18
  },
  937: {
    income: 7.43E+11,
    commonCost: 3.60E+19,
    rareCost: 7.20E+18,
    legendaryCost: 6.60E+18
  },
  938: {
    income: 7.63E+11,
    commonCost: 3.72E+19,
    rareCost: 7.43E+18,
    legendaryCost: 6.80E+18
  },
  939: {
    income: 7.83E+11,
    commonCost: 3.84E+19,
    rareCost: 7.66E+18,
    legendaryCost: 7.01E+18
  },
  940: {
    income: 8.02E+11,
    commonCost: 3.96E+19,
    rareCost: 7.89E+18,
    legendaryCost: 7.22E+18
  },
  941: {
    income: 8.29E+11,
    commonCost: 4.11E+19,
    rareCost: 8.19E+18,
    legendaryCost: 7.49E+18
  },
  942: {
    income: 8.55E+11,
    commonCost: 4.27E+19,
    rareCost: 8.48E+18,
    legendaryCost: 7.76E+18
  },
  943: {
    income: 8.81E+11,
    commonCost: 4.42E+19,
    rareCost: 8.79E+18,
    legendaryCost: 8.03E+18
  },
  944: {
    income: 9.08E+11,
    commonCost: 4.58E+19,
    rareCost: 9.09E+18,
    legendaryCost: 8.31E+18
  },
  945: {
    income: 9.34E+11,
    commonCost: 4.74E+19,
    rareCost: 9.40E+18,
    legendaryCost: 8.59E+18
  },
  946: {
    income: 9.60E+11,
    commonCost: 4.91E+19,
    rareCost: 9.71E+18,
    legendaryCost: 8.87E+18
  },
  947: {
    income: 9.87E+11,
    commonCost: 5.07E+19,
    rareCost: 1.00E+19,
    legendaryCost: 9.15E+18
  },
  948: {
    income: 1.01E+12,
    commonCost: 5.24E+19,
    rareCost: 1.03E+19,
    legendaryCost: 9.43E+18
  },
  949: {
    income: 1.04E+12,
    commonCost: 5.40E+19,
    rareCost: 1.07E+19,
    legendaryCost: 9.72E+18
  },
  950: {
    income: 1.07E+12,
    commonCost: 5.57E+19,
    rareCost: 1.10E+19,
    legendaryCost: 1.00E+19
  },
  951: {
    income: 1.10E+12,
    commonCost: 5.79E+19,
    rareCost: 1.14E+19,
    legendaryCost: 1.04E+19
  },
  952: {
    income: 1.14E+12,
    commonCost: 6.01E+19,
    rareCost: 1.18E+19,
    legendaryCost: 1.08E+19
  },
  953: {
    income: 1.17E+12,
    commonCost: 6.23E+19,
    rareCost: 1.22E+19,
    legendaryCost: 1.11E+19
  },
  954: {
    income: 1.21E+12,
    commonCost: 6.46E+19,
    rareCost: 1.27E+19,
    legendaryCost: 1.15E+19
  },
  955: {
    income: 1.24E+12,
    commonCost: 6.68E+19,
    rareCost: 1.31E+19,
    legendaryCost: 1.19E+19
  },
  956: {
    income: 1.28E+12,
    commonCost: 6.91E+19,
    rareCost: 1.35E+19,
    legendaryCost: 1.23E+19
  },
  957: {
    income: 1.31E+12,
    commonCost: 7.14E+19,
    rareCost: 1.39E+19,
    legendaryCost: 1.27E+19
  },
  958: {
    income: 1.35E+12,
    commonCost: 7.38E+19,
    rareCost: 1.44E+19,
    legendaryCost: 1.31E+19
  },
  959: {
    income: 1.38E+12,
    commonCost: 7.61E+19,
    rareCost: 1.48E+19,
    legendaryCost: 1.35E+19
  },
  960: {
    income: 1.42E+12,
    commonCost: 7.85E+19,
    rareCost: 1.53E+19,
    legendaryCost: 1.39E+19
  },
  961: {
    income: 1.46E+12,
    commonCost: 8.16E+19,
    rareCost: 1.59E+19,
    legendaryCost: 1.44E+19
  },
  962: {
    income: 1.51E+12,
    commonCost: 8.47E+19,
    rareCost: 1.64E+19,
    legendaryCost: 1.49E+19
  },
  963: {
    income: 1.56E+12,
    commonCost: 8.78E+19,
    rareCost: 1.70E+19,
    legendaryCost: 1.55E+19
  },
  964: {
    income: 1.60E+12,
    commonCost: 9.10E+19,
    rareCost: 1.76E+19,
    legendaryCost: 1.60E+19
  },
  965: {
    income: 1.65E+12,
    commonCost: 9.42E+19,
    rareCost: 1.82E+19,
    legendaryCost: 1.65E+19
  },
  966: {
    income: 1.70E+12,
    commonCost: 9.74E+19,
    rareCost: 1.88E+19,
    legendaryCost: 1.71E+19
  },
  967: {
    income: 1.74E+12,
    commonCost: 1.01E+20,
    rareCost: 1.94E+19,
    legendaryCost: 1.76E+19
  },
  968: {
    income: 1.79E+12,
    commonCost: 1.04E+20,
    rareCost: 2.00E+19,
    legendaryCost: 1.82E+19
  },
  969: {
    income: 1.84E+12,
    commonCost: 1.07E+20,
    rareCost: 2.06E+19,
    legendaryCost: 1.87E+19
  },
  970: {
    income: 1.88E+12,
    commonCost: 1.11E+20,
    rareCost: 2.13E+19,
    legendaryCost: 1.93E+19
  },
  971: {
    income: 1.95E+12,
    commonCost: 1.15E+20,
    rareCost: 2.21E+19,
    legendaryCost: 2.00E+19
  },
  972: {
    income: 2.01E+12,
    commonCost: 1.19E+20,
    rareCost: 2.29E+19,
    legendaryCost: 2.07E+19
  },
  973: {
    income: 2.07E+12,
    commonCost: 1.24E+20,
    rareCost: 2.37E+19,
    legendaryCost: 2.14E+19
  },
  974: {
    income: 2.13E+12,
    commonCost: 1.28E+20,
    rareCost: 2.45E+19,
    legendaryCost: 2.22E+19
  },
  975: {
    income: 2.20E+12,
    commonCost: 1.33E+20,
    rareCost: 2.54E+19,
    legendaryCost: 2.29E+19
  },
  976: {
    income: 2.26E+12,
    commonCost: 1.37E+20,
    rareCost: 2.62E+19,
    legendaryCost: 2.37E+19
  },
  977: {
    income: 2.32E+12,
    commonCost: 1.42E+20,
    rareCost: 2.70E+19,
    legendaryCost: 2.44E+19
  },
  978: {
    income: 2.38E+12,
    commonCost: 1.46E+20,
    rareCost: 2.79E+19,
    legendaryCost: 2.52E+19
  },
  979: {
    income: 2.44E+12,
    commonCost: 1.51E+20,
    rareCost: 2.88E+19,
    legendaryCost: 2.60E+19
  },
  980: {
    income: 2.51E+12,
    commonCost: 1.56E+20,
    rareCost: 2.96E+19,
    legendaryCost: 2.67E+19
  },
  981: {
    income: 2.59E+12,
    commonCost: 1.62E+20,
    rareCost: 3.07E+19,
    legendaryCost: 2.77E+19
  },
  982: {
    income: 2.67E+12,
    commonCost: 1.68E+20,
    rareCost: 3.19E+19,
    legendaryCost: 2.88E+19
  },
  983: {
    income: 2.76E+12,
    commonCost: 1.74E+20,
    rareCost: 3.30E+19,
    legendaryCost: 2.98E+19
  },
  984: {
    income: 2.84E+12,
    commonCost: 1.81E+20,
    rareCost: 3.42E+19,
    legendaryCost: 3.08E+19
  },
  985: {
    income: 2.92E+12,
    commonCost: 1.87E+20,
    rareCost: 3.53E+19,
    legendaryCost: 3.18E+19
  },
  986: {
    income: 3.01E+12,
    commonCost: 1.93E+20,
    rareCost: 3.65E+19,
    legendaryCost: 3.29E+19
  },
  987: {
    income: 3.09E+12,
    commonCost: 2.00E+20,
    rareCost: 3.77E+19,
    legendaryCost: 3.39E+19
  },
  988: {
    income: 3.17E+12,
    commonCost: 2.06E+20,
    rareCost: 3.89E+19,
    legendaryCost: 3.50E+19
  },
  989: {
    income: 3.26E+12,
    commonCost: 2.13E+20,
    rareCost: 4.01E+19,
    legendaryCost: 3.61E+19
  },
  990: {
    income: 3.34E+12,
    commonCost: 2.20E+20,
    rareCost: 4.13E+19,
    legendaryCost: 3.71E+19
  },
  991: {
    income: 3.45E+12,
    commonCost: 2.28E+20,
    rareCost: 4.28E+19,
    legendaryCost: 3.85E+19
  },
  992: {
    income: 3.56E+12,
    commonCost: 2.38E+20,
    rareCost: 4.44E+19,
    legendaryCost: 3.99E+19
  },
  993: {
    income: 3.67E+12,
    commonCost: 2.48E+20,
    rareCost: 4.60E+19,
    legendaryCost: 4.14E+19
  },
  994: {
    income: 3.78E+12,
    commonCost: 2.58E+20,
    rareCost: 4.76E+19,
    legendaryCost: 4.28E+19
  },
  995: {
    income: 3.90E+12,
    commonCost: 2.68E+20,
    rareCost: 4.92E+19,
    legendaryCost: 4.42E+19
  },
  996: {
    income: 4.01E+12,
    commonCost: 2.79E+20,
    rareCost: 5.09E+19,
    legendaryCost: 4.57E+19
  },
  997: {
    income: 4.12E+12,
    commonCost: 2.89E+20,
    rareCost: 5.25E+19,
    legendaryCost: 4.71E+19
  },
  998: {
    income: 4.23E+12,
    commonCost: 3.00E+20,
    rareCost: 5.42E+19,
    legendaryCost: 4.86E+19
  },
  999: {
    income: 4.34E+12,
    commonCost: 3.11E+20,
    rareCost: 5.59E+19,
    legendaryCost: 5.01E+19
  },
  1000: {
    income: 4.45E+12,
    commonCost: 3.22E+20,
    rareCost: 5.75E+19,
    legendaryCost: 5.16E+19
  },
  1001: {
    income: 4.60E+12,
    commonCost: 3.36E+20,
    rareCost: 5.97E+19,
    legendaryCost: 5.36E+19
  },
  1002: {
    income: 4.75E+12,
    commonCost: 3.51E+20,
    rareCost: 6.20E+19,
    legendaryCost: 5.55E+19
  },
  1003: {
    income: 4.90E+12,
    commonCost: 3.65E+20,
    rareCost: 6.42E+19,
    legendaryCost: 5.75E+19
  },
  1004: {
    income: 5.05E+12,
    commonCost: 3.80E+20,
    rareCost: 6.65E+19,
    legendaryCost: 5.96E+19
  },
  1005: {
    income: 5.20E+12,
    commonCost: 3.95E+20,
    rareCost: 6.88E+19,
    legendaryCost: 6.16E+19
  },
  1006: {
    income: 5.34E+12,
    commonCost: 4.11E+20,
    rareCost: 7.12E+19,
    legendaryCost: 6.37E+19
  },
  1007: {
    income: 5.49E+12,
    commonCost: 4.27E+20,
    rareCost: 7.35E+19,
    legendaryCost: 6.58E+19
  },
  1008: {
    income: 5.64E+12,
    commonCost: 4.43E+20,
    rareCost: 7.59E+19,
    legendaryCost: 6.79E+19
  },
  1009: {
    income: 5.79E+12,
    commonCost: 4.59E+20,
    rareCost: 7.83E+19,
    legendaryCost: 7.00E+19
  },
  1010: {
    income: 5.94E+12,
    commonCost: 4.76E+20,
    rareCost: 8.08E+19,
    legendaryCost: 7.22E+19
  },
  1011: {
    income: 6.14E+12,
    commonCost: 4.97E+20,
    rareCost: 8.40E+19,
    legendaryCost: 7.50E+19
  },
  1012: {
    income: 6.34E+12,
    commonCost: 5.19E+20,
    rareCost: 8.72E+19,
    legendaryCost: 7.79E+19
  },
  1013: {
    income: 6.54E+12,
    commonCost: 5.41E+20,
    rareCost: 9.04E+19,
    legendaryCost: 8.08E+19
  },
  1014: {
    income: 6.73E+12,
    commonCost: 5.64E+20,
    rareCost: 9.37E+19,
    legendaryCost: 8.37E+19
  },
  1015: {
    income: 6.93E+12,
    commonCost: 5.86E+20,
    rareCost: 9.71E+19,
    legendaryCost: 8.66E+19
  },
  1016: {
    income: 7.13E+12,
    commonCost: 6.10E+20,
    rareCost: 1.00E+20,
    legendaryCost: 8.96E+19
  },
  1017: {
    income: 7.33E+12,
    commonCost: 6.34E+20,
    rareCost: 1.04E+20,
    legendaryCost: 9.27E+19
  },
  1018: {
    income: 7.53E+12,
    commonCost: 6.58E+20,
    rareCost: 1.07E+20,
    legendaryCost: 9.57E+19
  },
  1019: {
    income: 7.73E+12,
    commonCost: 6.83E+20,
    rareCost: 1.11E+20,
    legendaryCost: 9.89E+19
  },
  1020: {
    income: 7.93E+12,
    commonCost: 7.09E+20,
    rareCost: 1.15E+20,
    legendaryCost: 1.02E+20
  },
  1021: {
    income: 8.19E+12,
    commonCost: 7.41E+20,
    rareCost: 1.19E+20,
    legendaryCost: 1.06E+20
  },
  1022: {
    income: 8.46E+12,
    commonCost: 7.74E+20,
    rareCost: 1.24E+20,
    legendaryCost: 1.10E+20
  },
  1023: {
    income: 8.73E+12,
    commonCost: 8.07E+20,
    rareCost: 1.29E+20,
    legendaryCost: 1.14E+20
  },
  1024: {
    income: 8.99E+12,
    commonCost: 8.41E+20,
    rareCost: 1.33E+20,
    legendaryCost: 1.19E+20
  },
  1025: {
    income: 9.26E+12,
    commonCost: 8.76E+20,
    rareCost: 1.38E+20,
    legendaryCost: 1.23E+20
  },
  1026: {
    income: 9.53E+12,
    commonCost: 9.12E+20,
    rareCost: 1.43E+20,
    legendaryCost: 1.27E+20
  },
  1027: {
    income: 9.79E+12,
    commonCost: 9.48E+20,
    rareCost: 1.48E+20,
    legendaryCost: 1.32E+20
  },
  1028: {
    income: 1.01E+13,
    commonCost: 9.86E+20,
    rareCost: 1.53E+20,
    legendaryCost: 1.36E+20
  },
  1029: {
    income: 1.03E+13,
    commonCost: 1.02E+21,
    rareCost: 1.59E+20,
    legendaryCost: 1.41E+20
  },
  1030: {
    income: 1.06E+13,
    commonCost: 1.06E+21,
    rareCost: 1.64E+20,
    legendaryCost: 1.45E+20
  },
  1031: {
    income: 1.09E+13,
    commonCost: 1.11E+21,
    rareCost: 1.71E+20,
    legendaryCost: 1.51E+20
  },
  1032: {
    income: 1.13E+13,
    commonCost: 1.16E+21,
    rareCost: 1.77E+20,
    legendaryCost: 1.57E+20
  },
  1033: {
    income: 1.17E+13,
    commonCost: 1.21E+21,
    rareCost: 1.84E+20,
    legendaryCost: 1.64E+20
  },
  1034: {
    income: 1.20E+13,
    commonCost: 1.26E+21,
    rareCost: 1.91E+20,
    legendaryCost: 1.70E+20
  },
  1035: {
    income: 1.24E+13,
    commonCost: 1.32E+21,
    rareCost: 1.99E+20,
    legendaryCost: 1.76E+20
  },
  1036: {
    income: 1.27E+13,
    commonCost: 1.37E+21,
    rareCost: 2.06E+20,
    legendaryCost: 1.83E+20
  },
  1037: {
    income: 1.31E+13,
    commonCost: 1.43E+21,
    rareCost: 2.13E+20,
    legendaryCost: 1.89E+20
  },
  1038: {
    income: 1.34E+13,
    commonCost: 1.49E+21,
    rareCost: 2.21E+20,
    legendaryCost: 1.96E+20
  },
  1039: {
    income: 1.38E+13,
    commonCost: 1.54E+21,
    rareCost: 2.29E+20,
    legendaryCost: 2.02E+20
  },
  1040: {
    income: 1.42E+13,
    commonCost: 1.60E+21,
    rareCost: 2.36E+20,
    legendaryCost: 2.09E+20
  },
  1041: {
    income: 1.46E+13,
    commonCost: 1.68E+21,
    rareCost: 2.46E+20,
    legendaryCost: 2.18E+20
  },
  1042: {
    income: 1.51E+13,
    commonCost: 1.76E+21,
    rareCost: 2.57E+20,
    legendaryCost: 2.27E+20
  },
  1043: {
    income: 1.56E+13,
    commonCost: 1.84E+21,
    rareCost: 2.67E+20,
    legendaryCost: 2.36E+20
  },
  1044: {
    income: 1.61E+13,
    commonCost: 1.92E+21,
    rareCost: 2.77E+20,
    legendaryCost: 2.45E+20
  },
  1045: {
    income: 1.66E+13,
    commonCost: 2.00E+21,
    rareCost: 2.88E+20,
    legendaryCost: 2.55E+20
  },
  1046: {
    income: 1.70E+13,
    commonCost: 2.08E+21,
    rareCost: 2.99E+20,
    legendaryCost: 2.64E+20
  },
  1047: {
    income: 1.75E+13,
    commonCost: 2.17E+21,
    rareCost: 3.10E+20,
    legendaryCost: 2.74E+20
  },
  1048: {
    income: 1.80E+13,
    commonCost: 2.26E+21,
    rareCost: 3.21E+20,
    legendaryCost: 2.84E+20
  },
  1049: {
    income: 1.85E+13,
    commonCost: 2.35E+21,
    rareCost: 3.33E+20,
    legendaryCost: 2.94E+20
  },
  1050: {
    income: 1.89E+13,
    commonCost: 2.44E+21,
    rareCost: 3.44E+20,
    legendaryCost: 3.04E+20
  },
  1051: {
    income: 1.96E+13,
    commonCost: 2.56E+21,
    rareCost: 3.59E+20,
    legendaryCost: 3.17E+20
  },
  1052: {
    income: 2.02E+13,
    commonCost: 2.68E+21,
    rareCost: 3.74E+20,
    legendaryCost: 3.30E+20
  },
  1053: {
    income: 2.09E+13,
    commonCost: 2.80E+21,
    rareCost: 3.90E+20,
    legendaryCost: 3.43E+20
  },
  1054: {
    income: 2.15E+13,
    commonCost: 2.92E+21,
    rareCost: 4.05E+20,
    legendaryCost: 3.57E+20
  },
  1055: {
    income: 2.22E+13,
    commonCost: 3.05E+21,
    rareCost: 4.21E+20,
    legendaryCost: 3.71E+20
  },
  1056: {
    income: 2.28E+13,
    commonCost: 3.18E+21,
    rareCost: 4.37E+20,
    legendaryCost: 3.85E+20
  },
  1057: {
    income: 2.34E+13,
    commonCost: 3.32E+21,
    rareCost: 4.54E+20,
    legendaryCost: 3.99E+20
  },
  1058: {
    income: 2.41E+13,
    commonCost: 3.45E+21,
    rareCost: 4.71E+20,
    legendaryCost: 4.14E+20
  },
  1059: {
    income: 2.47E+13,
    commonCost: 3.59E+21,
    rareCost: 4.88E+20,
    legendaryCost: 4.29E+20
  },
  1060: {
    income: 2.54E+13,
    commonCost: 3.74E+21,
    rareCost: 5.05E+20,
    legendaryCost: 4.44E+20
  },
  1061: {
    income: 2.62E+13,
    commonCost: 3.92E+21,
    rareCost: 5.27E+20,
    legendaryCost: 4.63E+20
  },
  1062: {
    income: 2.71E+13,
    commonCost: 4.10E+21,
    rareCost: 5.50E+20,
    legendaryCost: 4.83E+20
  },
  1063: {
    income: 2.80E+13,
    commonCost: 4.29E+21,
    rareCost: 5.73E+20,
    legendaryCost: 5.03E+20
  },
  1064: {
    income: 2.88E+13,
    commonCost: 4.49E+21,
    rareCost: 5.96E+20,
    legendaryCost: 5.24E+20
  },
  1065: {
    income: 2.97E+13,
    commonCost: 4.69E+21,
    rareCost: 6.20E+20,
    legendaryCost: 5.44E+20
  },
  1066: {
    income: 3.05E+13,
    commonCost: 4.89E+21,
    rareCost: 6.45E+20,
    legendaryCost: 5.65E+20
  },
  1067: {
    income: 3.14E+13,
    commonCost: 5.10E+21,
    rareCost: 6.69E+20,
    legendaryCost: 5.87E+20
  },
  1068: {
    income: 3.23E+13,
    commonCost: 5.32E+21,
    rareCost: 6.95E+20,
    legendaryCost: 6.09E+20
  },
  1069: {
    income: 3.31E+13,
    commonCost: 5.54E+21,
    rareCost: 7.20E+20,
    legendaryCost: 6.31E+20
  },
  1070: {
    income: 3.40E+13,
    commonCost: 5.76E+21,
    rareCost: 7.47E+20,
    legendaryCost: 6.54E+20
  },
  1071: {
    income: 3.52E+13,
    commonCost: 6.05E+21,
    rareCost: 7.80E+20,
    legendaryCost: 6.83E+20
  },
  1072: {
    income: 3.63E+13,
    commonCost: 6.34E+21,
    rareCost: 8.14E+20,
    legendaryCost: 7.13E+20
  },
  1073: {
    income: 3.75E+13,
    commonCost: 6.64E+21,
    rareCost: 8.49E+20,
    legendaryCost: 7.43E+20
  },
  1074: {
    income: 3.86E+13,
    commonCost: 6.95E+21,
    rareCost: 8.85E+20,
    legendaryCost: 7.74E+20
  },
  1075: {
    income: 3.98E+13,
    commonCost: 7.27E+21,
    rareCost: 9.22E+20,
    legendaryCost: 8.06E+20
  },
  1076: {
    income: 4.10E+13,
    commonCost: 7.59E+21,
    rareCost: 9.59E+20,
    legendaryCost: 8.38E+20
  },
  1077: {
    income: 4.21E+13,
    commonCost: 7.93E+21,
    rareCost: 9.97E+20,
    legendaryCost: 8.71E+20
  },
  1078: {
    income: 4.33E+13,
    commonCost: 8.27E+21,
    rareCost: 1.04E+21,
    legendaryCost: 9.05E+20
  },
  1079: {
    income: 4.44E+13,
    commonCost: 8.63E+21,
    rareCost: 1.08E+21,
    legendaryCost: 9.40E+20
  },
  1080: {
    income: 4.56E+13,
    commonCost: 8.99E+21,
    rareCost: 1.12E+21,
    legendaryCost: 9.75E+20
  },
  1081: {
    income: 4.71E+13,
    commonCost: 9.45E+21,
    rareCost: 1.17E+21,
    legendaryCost: 1.02E+21
  },
  1082: {
    income: 4.87E+13,
    commonCost: 9.91E+21,
    rareCost: 1.22E+21,
    legendaryCost: 1.07E+21
  },
  1083: {
    income: 5.03E+13,
    commonCost: 1.04E+22,
    rareCost: 1.28E+21,
    legendaryCost: 1.11E+21
  },
  1084: {
    income: 5.18E+13,
    commonCost: 1.09E+22,
    rareCost: 1.33E+21,
    legendaryCost: 1.16E+21
  },
  1085: {
    income: 5.34E+13,
    commonCost: 1.14E+22,
    rareCost: 1.39E+21,
    legendaryCost: 1.21E+21
  },
  1086: {
    income: 5.49E+13,
    commonCost: 1.19E+22,
    rareCost: 1.44E+21,
    legendaryCost: 1.26E+21
  },
  1087: {
    income: 5.65E+13,
    commonCost: 1.24E+22,
    rareCost: 1.50E+21,
    legendaryCost: 1.31E+21
  },
  1088: {
    income: 5.81E+13,
    commonCost: 1.30E+22,
    rareCost: 1.56E+21,
    legendaryCost: 1.36E+21
  },
  1089: {
    income: 5.96E+13,
    commonCost: 1.36E+22,
    rareCost: 1.62E+21,
    legendaryCost: 1.41E+21
  },
  1090: {
    income: 6.12E+13,
    commonCost: 1.41E+22,
    rareCost: 1.69E+21,
    legendaryCost: 1.47E+21
  },
  1091: {
    income: 6.33E+13,
    commonCost: 1.49E+22,
    rareCost: 1.76E+21,
    legendaryCost: 1.53E+21
  },
  1092: {
    income: 6.54E+13,
    commonCost: 1.56E+22,
    rareCost: 1.84E+21,
    legendaryCost: 1.60E+21
  },
  1093: {
    income: 6.75E+13,
    commonCost: 1.64E+22,
    rareCost: 1.93E+21,
    legendaryCost: 1.67E+21
  },
  1094: {
    income: 6.96E+13,
    commonCost: 1.72E+22,
    rareCost: 2.01E+21,
    legendaryCost: 1.75E+21
  },
  1095: {
    income: 7.17E+13,
    commonCost: 1.80E+22,
    rareCost: 2.10E+21,
    legendaryCost: 1.82E+21
  },
  1096: {
    income: 7.38E+13,
    commonCost: 1.88E+22,
    rareCost: 2.19E+21,
    legendaryCost: 1.90E+21
  },
  1097: {
    income: 7.59E+13,
    commonCost: 1.96E+22,
    rareCost: 2.28E+21,
    legendaryCost: 1.97E+21
  },
  1098: {
    income: 7.80E+13,
    commonCost: 2.05E+22,
    rareCost: 2.37E+21,
    legendaryCost: 2.05E+21
  },
  1099: {
    income: 8.01E+13,
    commonCost: 2.14E+22,
    rareCost: 2.46E+21,
    legendaryCost: 2.13E+21
  },
  1100: {
    income: 8.22E+13,
    commonCost: 2.24E+22,
    rareCost: 2.56E+21,
    legendaryCost: 2.21E+21
  },
  1101: {
    income: 8.50E+13,
    commonCost: 2.35E+22,
    rareCost: 2.68E+21,
    legendaryCost: 2.32E+21
  },
  1102: {
    income: 8.78E+13,
    commonCost: 2.47E+22,
    rareCost: 2.80E+21,
    legendaryCost: 2.42E+21
  },
  1103: {
    income: 9.06E+13,
    commonCost: 2.59E+22,
    rareCost: 2.93E+21,
    legendaryCost: 2.53E+21
  },
  1104: {
    income: 9.35E+13,
    commonCost: 2.72E+22,
    rareCost: 3.06E+21,
    legendaryCost: 2.64E+21
  },
  1105: {
    income: 9.63E+13,
    commonCost: 2.85E+22,
    rareCost: 3.19E+21,
    legendaryCost: 2.76E+21
  },
  1106: {
    income: 9.91E+13,
    commonCost: 2.98E+22,
    rareCost: 3.33E+21,
    legendaryCost: 2.87E+21
  },
  1107: {
    income: 1.02E+14,
    commonCost: 3.12E+22,
    rareCost: 3.46E+21,
    legendaryCost: 2.99E+21
  },
  1108: {
    income: 1.05E+14,
    commonCost: 3.26E+22,
    rareCost: 3.61E+21,
    legendaryCost: 3.11E+21
  },
  1109: {
    income: 1.08E+14,
    commonCost: 3.40E+22,
    rareCost: 3.75E+21,
    legendaryCost: 3.24E+21
  },
  1110: {
    income: 1.10E+14,
    commonCost: 3.55E+22,
    rareCost: 3.90E+21,
    legendaryCost: 3.36E+21
  },
  1111: {
    income: 1.14E+14,
    commonCost: 3.74E+22,
    rareCost: 4.09E+21,
    legendaryCost: 3.52E+21
  },
  1112: {
    income: 1.18E+14,
    commonCost: 3.93E+22,
    rareCost: 4.28E+21,
    legendaryCost: 3.69E+21
  },
  1113: {
    income: 1.22E+14,
    commonCost: 4.12E+22,
    rareCost: 4.47E+21,
    legendaryCost: 3.85E+21
  },
  1114: {
    income: 1.26E+14,
    commonCost: 4.33E+22,
    rareCost: 4.67E+21,
    legendaryCost: 4.02E+21
  },
  1115: {
    income: 1.29E+14,
    commonCost: 4.53E+22,
    rareCost: 4.88E+21,
    legendaryCost: 4.20E+21
  },
  1116: {
    income: 1.33E+14,
    commonCost: 4.75E+22,
    rareCost: 5.09E+21,
    legendaryCost: 4.38E+21
  },
  1117: {
    income: 1.37E+14,
    commonCost: 4.97E+22,
    rareCost: 5.30E+21,
    legendaryCost: 4.56E+21
  },
  1118: {
    income: 1.41E+14,
    commonCost: 5.19E+22,
    rareCost: 5.52E+21,
    legendaryCost: 4.75E+21
  },
  1119: {
    income: 1.45E+14,
    commonCost: 5.43E+22,
    rareCost: 5.74E+21,
    legendaryCost: 4.94E+21
  },
  1120: {
    income: 1.49E+14,
    commonCost: 5.67E+22,
    rareCost: 5.97E+21,
    legendaryCost: 5.13E+21
  },
  1121: {
    income: 1.54E+14,
    commonCost: 5.96E+22,
    rareCost: 6.26E+21,
    legendaryCost: 5.38E+21
  },
  1122: {
    income: 1.59E+14,
    commonCost: 6.27E+22,
    rareCost: 6.56E+21,
    legendaryCost: 5.63E+21
  },
  1123: {
    income: 1.64E+14,
    commonCost: 6.59E+22,
    rareCost: 6.86E+21,
    legendaryCost: 5.89E+21
  },
  1124: {
    income: 1.69E+14,
    commonCost: 6.91E+22,
    rareCost: 7.17E+21,
    legendaryCost: 6.15E+21
  },
  1125: {
    income: 1.74E+14,
    commonCost: 7.25E+22,
    rareCost: 7.49E+21,
    legendaryCost: 6.42E+21
  },
  1126: {
    income: 1.79E+14,
    commonCost: 7.59E+22,
    rareCost: 7.81E+21,
    legendaryCost: 6.69E+21
  },
  1127: {
    income: 1.85E+14,
    commonCost: 7.95E+22,
    rareCost: 8.15E+21,
    legendaryCost: 6.98E+21
  },
  1128: {
    income: 1.90E+14,
    commonCost: 8.31E+22,
    rareCost: 8.49E+21,
    legendaryCost: 7.26E+21
  },
  1129: {
    income: 1.95E+14,
    commonCost: 8.69E+22,
    rareCost: 8.84E+21,
    legendaryCost: 7.56E+21
  },
  1130: {
    income: 2.00E+14,
    commonCost: 9.08E+22,
    rareCost: 9.19E+21,
    legendaryCost: 7.86E+21
  },
  1131: {
    income: 2.07E+14,
    commonCost: 9.56E+22,
    rareCost: 9.64E+21,
    legendaryCost: 8.24E+21
  },
  1132: {
    income: 2.14E+14,
    commonCost: 1.01E+23,
    rareCost: 1.01E+22,
    legendaryCost: 8.63E+21
  },
  1133: {
    income: 2.21E+14,
    commonCost: 1.06E+23,
    rareCost: 1.06E+22,
    legendaryCost: 9.03E+21
  },
  1134: {
    income: 2.28E+14,
    commonCost: 1.11E+23,
    rareCost: 1.11E+22,
    legendaryCost: 9.43E+21
  },
  1135: {
    income: 2.35E+14,
    commonCost: 1.16E+23,
    rareCost: 1.15E+22,
    legendaryCost: 9.85E+21
  },
  1136: {
    income: 2.42E+14,
    commonCost: 1.22E+23,
    rareCost: 1.21E+22,
    legendaryCost: 1.03E+22
  },
  1137: {
    income: 2.48E+14,
    commonCost: 1.28E+23,
    rareCost: 1.26E+22,
    legendaryCost: 1.07E+22
  },
  1138: {
    income: 2.55E+14,
    commonCost: 1.34E+23,
    rareCost: 1.31E+22,
    legendaryCost: 1.12E+22
  },
  1139: {
    income: 2.62E+14,
    commonCost: 1.40E+23,
    rareCost: 1.36E+22,
    legendaryCost: 1.16E+22
  },
  1140: {
    income: 2.69E+14,
    commonCost: 1.46E+23,
    rareCost: 1.42E+22,
    legendaryCost: 1.21E+22
  },
  1141: {
    income: 2.79E+14,
    commonCost: 1.54E+23,
    rareCost: 1.49E+22,
    legendaryCost: 1.27E+22
  },
  1142: {
    income: 2.88E+14,
    commonCost: 1.62E+23,
    rareCost: 1.56E+22,
    legendaryCost: 1.33E+22
  },
  1143: {
    income: 2.97E+14,
    commonCost: 1.70E+23,
    rareCost: 1.64E+22,
    legendaryCost: 1.39E+22
  },
  1144: {
    income: 3.07E+14,
    commonCost: 1.79E+23,
    rareCost: 1.71E+22,
    legendaryCost: 1.45E+22
  },
  1145: {
    income: 3.16E+14,
    commonCost: 1.87E+23,
    rareCost: 1.79E+22,
    legendaryCost: 1.52E+22
  },
  1146: {
    income: 3.26E+14,
    commonCost: 1.97E+23,
    rareCost: 1.87E+22,
    legendaryCost: 1.58E+22
  },
  1147: {
    income: 3.35E+14,
    commonCost: 2.06E+23,
    rareCost: 1.95E+22,
    legendaryCost: 1.65E+22
  },
  1148: {
    income: 3.44E+14,
    commonCost: 2.15E+23,
    rareCost: 2.03E+22,
    legendaryCost: 1.72E+22
  },
  1149: {
    income: 3.54E+14,
    commonCost: 2.25E+23,
    rareCost: 2.12E+22,
    legendaryCost: 1.79E+22
  },
  1150: {
    income: 3.63E+14,
    commonCost: 2.36E+23,
    rareCost: 2.20E+22,
    legendaryCost: 1.87E+22
  },
  1151: {
    income: 3.76E+14,
    commonCost: 2.48E+23,
    rareCost: 2.31E+22,
    legendaryCost: 1.96E+22
  },
  1152: {
    income: 3.88E+14,
    commonCost: 2.61E+23,
    rareCost: 2.42E+22,
    legendaryCost: 2.05E+22
  },
  1153: {
    income: 4.01E+14,
    commonCost: 2.75E+23,
    rareCost: 2.54E+22,
    legendaryCost: 2.15E+22
  },
  1154: {
    income: 4.14E+14,
    commonCost: 2.89E+23,
    rareCost: 2.66E+22,
    legendaryCost: 2.25E+22
  },
  1155: {
    income: 4.26E+14,
    commonCost: 3.03E+23,
    rareCost: 2.78E+22,
    legendaryCost: 2.35E+22
  },
  1156: {
    income: 4.39E+14,
    commonCost: 3.18E+23,
    rareCost: 2.90E+22,
    legendaryCost: 2.45E+22
  },
  1157: {
    income: 4.52E+14,
    commonCost: 3.33E+23,
    rareCost: 3.03E+22,
    legendaryCost: 2.56E+22
  },
  1158: {
    income: 4.64E+14,
    commonCost: 3.49E+23,
    rareCost: 3.16E+22,
    legendaryCost: 2.66E+22
  },
  1159: {
    income: 4.77E+14,
    commonCost: 3.65E+23,
    rareCost: 3.29E+22,
    legendaryCost: 2.78E+22
  },
  1160: {
    income: 4.90E+14,
    commonCost: 3.81E+23,
    rareCost: 3.43E+22,
    legendaryCost: 2.89E+22
  },
  1161: {
    income: 5.07E+14,
    commonCost: 4.02E+23,
    rareCost: 3.60E+22,
    legendaryCost: 3.03E+22
  },
  1162: {
    income: 5.24E+14,
    commonCost: 4.23E+23,
    rareCost: 3.77E+22,
    legendaryCost: 3.18E+22
  },
  1163: {
    income: 5.41E+14,
    commonCost: 4.45E+23,
    rareCost: 3.95E+22,
    legendaryCost: 3.33E+22
  },
  1164: {
    income: 5.58E+14,
    commonCost: 4.68E+23,
    rareCost: 4.14E+22,
    legendaryCost: 3.48E+22
  },
  1165: {
    income: 5.75E+14,
    commonCost: 4.91E+23,
    rareCost: 4.33E+22,
    legendaryCost: 3.64E+22
  },
  1166: {
    income: 5.93E+14,
    commonCost: 5.15E+23,
    rareCost: 4.52E+22,
    legendaryCost: 3.80E+22
  },
  1167: {
    income: 6.10E+14,
    commonCost: 5.40E+23,
    rareCost: 4.72E+22,
    legendaryCost: 3.97E+22
  },
  1168: {
    income: 6.27E+14,
    commonCost: 5.65E+23,
    rareCost: 4.93E+22,
    legendaryCost: 4.14E+22
  },
  1169: {
    income: 6.44E+14,
    commonCost: 5.92E+23,
    rareCost: 5.14E+22,
    legendaryCost: 4.31E+22
  },
  1170: {
    income: 6.61E+14,
    commonCost: 6.19E+23,
    rareCost: 5.35E+22,
    legendaryCost: 4.49E+22
  },
  1171: {
    income: 6.84E+14,
    commonCost: 6.53E+23,
    rareCost: 5.62E+22,
    legendaryCost: 4.71E+22
  },
  1172: {
    income: 7.07E+14,
    commonCost: 6.87E+23,
    rareCost: 5.90E+22,
    legendaryCost: 4.94E+22
  },
  1173: {
    income: 7.31E+14,
    commonCost: 7.23E+23,
    rareCost: 6.18E+22,
    legendaryCost: 5.17E+22
  },
  1174: {
    income: 7.54E+14,
    commonCost: 7.60E+23,
    rareCost: 6.47E+22,
    legendaryCost: 5.42E+22
  },
  1175: {
    income: 7.77E+14,
    commonCost: 7.98E+23,
    rareCost: 6.77E+22,
    legendaryCost: 5.66E+22
  },
  1176: {
    income: 8.00E+14,
    commonCost: 8.37E+23,
    rareCost: 7.08E+22,
    legendaryCost: 5.92E+22
  },
  1177: {
    income: 8.24E+14,
    commonCost: 8.78E+23,
    rareCost: 7.39E+22,
    legendaryCost: 6.17E+22
  },
  1178: {
    income: 8.47E+14,
    commonCost: 9.20E+23,
    rareCost: 7.71E+22,
    legendaryCost: 6.44E+22
  },
  1179: {
    income: 8.70E+14,
    commonCost: 9.63E+23,
    rareCost: 8.04E+22,
    legendaryCost: 6.71E+22
  },
  1180: {
    income: 8.93E+14,
    commonCost: 1.01E+24,
    rareCost: 8.38E+22,
    legendaryCost: 6.99E+22
  },
  1181: {
    income: 9.25E+14,
    commonCost: 1.06E+24,
    rareCost: 8.81E+22,
    legendaryCost: 7.34E+22
  },
  1182: {
    income: 9.56E+14,
    commonCost: 1.12E+24,
    rareCost: 9.24E+22,
    legendaryCost: 7.70E+22
  },
  1183: {
    income: 9.87E+14,
    commonCost: 1.18E+24,
    rareCost: 9.69E+22,
    legendaryCost: 8.07E+22
  },
  1184: {
    income: 1.02E+15,
    commonCost: 1.24E+24,
    rareCost: 1.01E+23,
    legendaryCost: 8.45E+22
  },
  1185: {
    income: 1.05E+15,
    commonCost: 1.30E+24,
    rareCost: 1.06E+23,
    legendaryCost: 8.83E+22
  },
  1186: {
    income: 1.08E+15,
    commonCost: 1.36E+24,
    rareCost: 1.11E+23,
    legendaryCost: 9.23E+22
  },
  1187: {
    income: 1.11E+15,
    commonCost: 1.43E+24,
    rareCost: 1.16E+23,
    legendaryCost: 9.64E+22
  },
  1188: {
    income: 1.14E+15,
    commonCost: 1.50E+24,
    rareCost: 1.21E+23,
    legendaryCost: 1.01E+23
  },
  1189: {
    income: 1.18E+15,
    commonCost: 1.57E+24,
    rareCost: 1.26E+23,
    legendaryCost: 1.05E+23
  },
  1190: {
    income: 1.21E+15,
    commonCost: 1.64E+24,
    rareCost: 1.32E+23,
    legendaryCost: 1.09E+23
  },
  1191: {
    income: 1.25E+15,
    commonCost: 1.73E+24,
    rareCost: 1.38E+23,
    legendaryCost: 1.15E+23
  },
  1192: {
    income: 1.29E+15,
    commonCost: 1.83E+24,
    rareCost: 1.45E+23,
    legendaryCost: 1.20E+23
  },
  1193: {
    income: 1.34E+15,
    commonCost: 1.92E+24,
    rareCost: 1.52E+23,
    legendaryCost: 1.26E+23
  },
  1194: {
    income: 1.38E+15,
    commonCost: 2.02E+24,
    rareCost: 1.60E+23,
    legendaryCost: 1.32E+23
  },
  1195: {
    income: 1.42E+15,
    commonCost: 2.12E+24,
    rareCost: 1.67E+23,
    legendaryCost: 1.38E+23
  },
  1196: {
    income: 1.46E+15,
    commonCost: 2.23E+24,
    rareCost: 1.75E+23,
    legendaryCost: 1.44E+23
  },
  1197: {
    income: 1.51E+15,
    commonCost: 2.34E+24,
    rareCost: 1.83E+23,
    legendaryCost: 1.51E+23
  },
  1198: {
    income: 1.55E+15,
    commonCost: 2.45E+24,
    rareCost: 1.91E+23,
    legendaryCost: 1.57E+23
  },
  1199: {
    income: 1.59E+15,
    commonCost: 2.57E+24,
    rareCost: 1.99E+23,
    legendaryCost: 1.64E+23
  },
  1200: {
    income: 1.63E+15,
    commonCost: 2.68E+24,
    rareCost: 2.07E+23,
    legendaryCost: 1.71E+23
  },
  1201: {
    income: 1.69E+15,
    commonCost: 2.83E+24,
    rareCost: 2.18E+23,
    legendaryCost: 1.80E+23
  },
  1202: {
    income: 1.75E+15,
    commonCost: 2.99E+24,
    rareCost: 2.29E+23,
    legendaryCost: 1.89E+23
  },
  1203: {
    income: 1.81E+15,
    commonCost: 3.14E+24,
    rareCost: 2.40E+23,
    legendaryCost: 1.98E+23
  },
  1204: {
    income: 1.87E+15,
    commonCost: 3.31E+24,
    rareCost: 2.52E+23,
    legendaryCost: 2.07E+23
  },
  1205: {
    income: 1.92E+15,
    commonCost: 3.47E+24,
    rareCost: 2.63E+23,
    legendaryCost: 2.17E+23
  },
  1206: {
    income: 1.98E+15,
    commonCost: 3.65E+24,
    rareCost: 2.76E+23,
    legendaryCost: 2.27E+23
  },
  1207: {
    income: 2.04E+15,
    commonCost: 3.83E+24,
    rareCost: 2.88E+23,
    legendaryCost: 2.37E+23
  },
  1208: {
    income: 2.10E+15,
    commonCost: 4.01E+24,
    rareCost: 3.01E+23,
    legendaryCost: 2.47E+23
  },
  1209: {
    income: 2.15E+15,
    commonCost: 4.20E+24,
    rareCost: 3.14E+23,
    legendaryCost: 2.58E+23
  },
  1210: {
    income: 2.21E+15,
    commonCost: 4.40E+24,
    rareCost: 3.27E+23,
    legendaryCost: 2.69E+23
  },
  1211: {
    income: 2.29E+15,
    commonCost: 4.64E+24,
    rareCost: 3.44E+23,
    legendaryCost: 2.82E+23
  },
  1212: {
    income: 2.37E+15,
    commonCost: 4.89E+24,
    rareCost: 3.62E+23,
    legendaryCost: 2.96E+23
  },
  1213: {
    income: 2.45E+15,
    commonCost: 5.15E+24,
    rareCost: 3.79E+23,
    legendaryCost: 3.11E+23
  },
  1214: {
    income: 2.53E+15,
    commonCost: 5.42E+24,
    rareCost: 3.98E+23,
    legendaryCost: 3.26E+23
  },
  1215: {
    income: 2.60E+15,
    commonCost: 5.70E+24,
    rareCost: 4.17E+23,
    legendaryCost: 3.41E+23
  },
  1216: {
    income: 2.68E+15,
    commonCost: 5.98E+24,
    rareCost: 4.36E+23,
    legendaryCost: 3.56E+23
  },
  1217: {
    income: 2.76E+15,
    commonCost: 6.27E+24,
    rareCost: 4.56E+23,
    legendaryCost: 3.72E+23
  },
  1218: {
    income: 2.84E+15,
    commonCost: 6.58E+24,
    rareCost: 4.76E+23,
    legendaryCost: 3.89E+23
  },
  1219: {
    income: 2.92E+15,
    commonCost: 6.89E+24,
    rareCost: 4.97E+23,
    legendaryCost: 4.05E+23
  },
  1220: {
    income: 3.00E+15,
    commonCost: 7.21E+24,
    rareCost: 5.18E+23,
    legendaryCost: 4.23E+23
  },
  1221: {
    income: 3.10E+15,
    commonCost: 7.61E+24,
    rareCost: 5.45E+23,
    legendaryCost: 4.44E+23
  },
  1222: {
    income: 3.21E+15,
    commonCost: 8.03E+24,
    rareCost: 5.73E+23,
    legendaryCost: 4.67E+23
  },
  1223: {
    income: 3.32E+15,
    commonCost: 8.45E+24,
    rareCost: 6.01E+23,
    legendaryCost: 4.89E+23
  },
  1224: {
    income: 3.42E+15,
    commonCost: 8.89E+24,
    rareCost: 6.30E+23,
    legendaryCost: 5.13E+23
  },
  1225: {
    income: 3.53E+15,
    commonCost: 9.35E+24,
    rareCost: 6.60E+23,
    legendaryCost: 5.37E+23
  },
  1226: {
    income: 3.64E+15,
    commonCost: 9.82E+24,
    rareCost: 6.91E+23,
    legendaryCost: 5.62E+23
  },
  1227: {
    income: 3.74E+15,
    commonCost: 1.03E+25,
    rareCost: 7.23E+23,
    legendaryCost: 5.87E+23
  },
  1228: {
    income: 3.85E+15,
    commonCost: 1.08E+25,
    rareCost: 7.55E+23,
    legendaryCost: 6.13E+23
  },
  1229: {
    income: 3.96E+15,
    commonCost: 1.13E+25,
    rareCost: 7.88E+23,
    legendaryCost: 6.39E+23
  },
  1230: {
    income: 4.06E+15,
    commonCost: 1.18E+25,
    rareCost: 8.22E+23,
    legendaryCost: 6.67E+23
  },
  1231: {
    income: 4.21E+15,
    commonCost: 1.25E+25,
    rareCost: 8.65E+23,
    legendaryCost: 7.01E+23
  },
  1232: {
    income: 4.35E+15,
    commonCost: 1.32E+25,
    rareCost: 9.09E+23,
    legendaryCost: 7.36E+23
  },
  1233: {
    income: 4.50E+15,
    commonCost: 1.39E+25,
    rareCost: 9.64E+23,
    legendaryCost: 7.73E+23
  },
  1234: {
    income: 4.64E+15,
    commonCost: 1.46E+25,
    rareCost: 1.02E+24,
    legendaryCost: 8.10E+23
  },
  1235: {
    income: 4.79E+15,
    commonCost: 1.54E+25,
    rareCost: 1.08E+24,
    legendaryCost: 8.48E+23
  },
  1236: {
    income: 4.94E+15,
    commonCost: 1.61E+25,
    rareCost: 1.14E+24,
    legendaryCost: 8.87E+23
  },
  1237: {
    income: 5.08E+15,
    commonCost: 1.69E+25,
    rareCost: 1.20E+24,
    legendaryCost: 9.27E+23
  },
  1238: {
    income: 5.23E+15,
    commonCost: 1.78E+25,
    rareCost: 1.27E+24,
    legendaryCost: 9.68E+23
  },
  1239: {
    income: 5.37E+15,
    commonCost: 1.86E+25,
    rareCost: 1.34E+24,
    legendaryCost: 1.01E+24
  },
  1240: {
    income: 5.52E+15,
    commonCost: 1.95E+25,
    rareCost: 1.41E+24,
    legendaryCost: 1.05E+24
  },
  1241: {
    income: 5.71E+15,
    commonCost: 2.06E+25,
    rareCost: 1.50E+24,
    legendaryCost: 1.11E+24
  },
  1242: {
    income: 5.91E+15,
    commonCost: 2.17E+25,
    rareCost: 1.59E+24,
    legendaryCost: 1.16E+24
  },
  1243: {
    income: 6.11E+15,
    commonCost: 2.29E+25,
    rareCost: 1.68E+24,
    legendaryCost: 1.22E+24
  },
  1244: {
    income: 6.31E+15,
    commonCost: 2.41E+25,
    rareCost: 1.78E+24,
    legendaryCost: 1.28E+24
  },
  1245: {
    income: 6.50E+15,
    commonCost: 2.53E+25,
    rareCost: 1.88E+24,
    legendaryCost: 1.34E+24
  },
  1246: {
    income: 6.70E+15,
    commonCost: 2.66E+25,
    rareCost: 1.98E+24,
    legendaryCost: 1.40E+24
  },
  1247: {
    income: 6.90E+15,
    commonCost: 2.79E+25,
    rareCost: 2.09E+24,
    legendaryCost: 1.47E+24
  },
  1248: {
    income: 7.10E+15,
    commonCost: 2.92E+25,
    rareCost: 2.21E+24,
    legendaryCost: 1.53E+24
  },
  1249: {
    income: 7.29E+15,
    commonCost: 3.06E+25,
    rareCost: 2.32E+24,
    legendaryCost: 1.60E+24
  },
  1250: {
    income: 7.49E+15,
    commonCost: 3.21E+25,
    rareCost: 2.44E+24,
    legendaryCost: 1.67E+24
  },
  1251: {
    income: 7.76E+15,
    commonCost: 3.39E+25,
    rareCost: 2.59E+24,
    legendaryCost: 1.76E+24
  },
  1252: {
    income: 8.03E+15,
    commonCost: 3.57E+25,
    rareCost: 2.75E+24,
    legendaryCost: 1.85E+24
  },
  1253: {
    income: 8.30E+15,
    commonCost: 3.77E+25,
    rareCost: 2.91E+24,
    legendaryCost: 1.94E+24
  },
  1254: {
    income: 8.57E+15,
    commonCost: 3.96E+25,
    rareCost: 3.08E+24,
    legendaryCost: 2.03E+24
  },
  1255: {
    income: 8.83E+15,
    commonCost: 4.17E+25,
    rareCost: 3.25E+24,
    legendaryCost: 2.13E+24
  },
  1256: {
    income: 9.10E+15,
    commonCost: 4.38E+25,
    rareCost: 3.43E+24,
    legendaryCost: 2.23E+24
  },
  1257: {
    income: 9.37E+15,
    commonCost: 4.60E+25,
    rareCost: 3.62E+24,
    legendaryCost: 2.33E+24
  },
  1258: {
    income: 9.64E+15,
    commonCost: 4.82E+25,
    rareCost: 3.81E+24,
    legendaryCost: 2.43E+24
  },
  1259: {
    income: 9.91E+15,
    commonCost: 5.05E+25,
    rareCost: 4.02E+24,
    legendaryCost: 2.54E+24
  },
  1260: {
    income: 1.02E+16,
    commonCost: 5.29E+25,
    rareCost: 4.22E+24,
    legendaryCost: 2.65E+24
  },
  1261: {
    income: 1.05E+16,
    commonCost: 5.59E+25,
    rareCost: 4.48E+24,
    legendaryCost: 2.79E+24
  },
  1262: {
    income: 1.09E+16,
    commonCost: 5.89E+25,
    rareCost: 4.75E+24,
    legendaryCost: 2.93E+24
  },
  1263: {
    income: 1.13E+16,
    commonCost: 6.21E+25,
    rareCost: 5.03E+24,
    legendaryCost: 3.08E+24
  },
  1264: {
    income: 1.16E+16,
    commonCost: 6.54E+25,
    rareCost: 5.31E+24,
    legendaryCost: 3.22E+24
  },
  1265: {
    income: 1.20E+16,
    commonCost: 6.87E+25,
    rareCost: 5.61E+24,
    legendaryCost: 3.38E+24
  },
  1266: {
    income: 1.24E+16,
    commonCost: 7.22E+25,
    rareCost: 5.92E+24,
    legendaryCost: 3.54E+24
  },
  1267: {
    income: 1.27E+16,
    commonCost: 7.58E+25,
    rareCost: 6.24E+24,
    legendaryCost: 3.70E+24
  },
  1268: {
    income: 1.31E+16,
    commonCost: 7.95E+25,
    rareCost: 6.57E+24,
    legendaryCost: 3.86E+24
  },
  1269: {
    income: 1.35E+16,
    commonCost: 8.33E+25,
    rareCost: 6.91E+24,
    legendaryCost: 4.04E+24
  },
  1270: {
    income: 1.38E+16,
    commonCost: 8.72E+25,
    rareCost: 7.27E+24,
    legendaryCost: 4.21E+24
  },
  1271: {
    income: 1.43E+16,
    commonCost: 9.22E+25,
    rareCost: 7.71E+24,
    legendaryCost: 4.43E+24
  },
  1272: {
    income: 1.48E+16,
    commonCost: 9.72E+25,
    rareCost: 8.17E+24,
    legendaryCost: 4.66E+24
  },
  1273: {
    income: 1.53E+16,
    commonCost: 1.02E+26,
    rareCost: 8.64E+24,
    legendaryCost: 4.89E+24
  },
  1274: {
    income: 1.58E+16,
    commonCost: 1.08E+26,
    rareCost: 9.13E+24,
    legendaryCost: 5.13E+24
  },
  1275: {
    income: 1.63E+16,
    commonCost: 1.13E+26,
    rareCost: 9.64E+24,
    legendaryCost: 5.38E+24
  },
  1276: {
    income: 1.68E+16,
    commonCost: 1.19E+26,
    rareCost: 1.02E+25,
    legendaryCost: 5.63E+24
  },
  1277: {
    income: 1.73E+16,
    commonCost: 1.25E+26,
    rareCost: 1.07E+25,
    legendaryCost: 5.89E+24
  },
  1278: {
    income: 1.78E+16,
    commonCost: 1.31E+26,
    rareCost: 1.13E+25,
    legendaryCost: 6.15E+24
  },
  1279: {
    income: 1.83E+16,
    commonCost: 1.38E+26,
    rareCost: 1.19E+25,
    legendaryCost: 6.42E+24
  },
  1280: {
    income: 1.88E+16,
    commonCost: 1.44E+26,
    rareCost: 1.25E+25,
    legendaryCost: 6.70E+24
  },
  1281: {
    income: 1.95E+16,
    commonCost: 1.52E+26,
    rareCost: 1.32E+25,
    legendaryCost: 7.06E+24
  },
  1282: {
    income: 2.02E+16,
    commonCost: 1.60E+26,
    rareCost: 1.40E+25,
    legendaryCost: 7.42E+24
  },
  1283: {
    income: 2.09E+16,
    commonCost: 1.69E+26,
    rareCost: 1.48E+25,
    legendaryCost: 7.79E+24
  },
  1284: {
    income: 2.16E+16,
    commonCost: 1.78E+26,
    rareCost: 1.56E+25,
    legendaryCost: 8.17E+24
  },
  1285: {
    income: 2.23E+16,
    commonCost: 1.87E+26,
    rareCost: 1.65E+25,
    legendaryCost: 8.57E+24
  },
  1286: {
    income: 2.29E+16,
    commonCost: 1.97E+26,
    rareCost: 1.74E+25,
    legendaryCost: 8.97E+24
  },
  1287: {
    income: 2.36E+16,
    commonCost: 2.07E+26,
    rareCost: 1.84E+25,
    legendaryCost: 9.40E+24
  },
  1288: {
    income: 2.43E+16,
    commonCost: 2.17E+26,
    rareCost: 1.93E+25,
    legendaryCost: 9.83E+24
  },
  1289: {
    income: 2.50E+16,
    commonCost: 2.28E+26,
    rareCost: 2.03E+25,
    legendaryCost: 1.03E+25
  },
  1290: {
    income: 2.57E+16,
    commonCost: 2.39E+26,
    rareCost: 2.14E+25,
    legendaryCost: 1.07E+25
  },
  1291: {
    income: 2.66E+16,
    commonCost: 2.53E+26,
    rareCost: 2.27E+25,
    legendaryCost: 1.13E+25
  },
  1292: {
    income: 2.75E+16,
    commonCost: 2.67E+26,
    rareCost: 2.41E+25,
    legendaryCost: 1.19E+25
  },
  1293: {
    income: 2.85E+16,
    commonCost: 2.81E+26,
    rareCost: 2.55E+25,
    legendaryCost: 1.25E+25
  },
  1294: {
    income: 2.94E+16,
    commonCost: 2.96E+26,
    rareCost: 2.69E+25,
    legendaryCost: 1.31E+25
  },
  1295: {
    income: 3.03E+16,
    commonCost: 3.12E+26,
    rareCost: 2.84E+25,
    legendaryCost: 1.38E+25
  },
  1296: {
    income: 3.13E+16,
    commonCost: 3.28E+26,
    rareCost: 3.00E+25,
    legendaryCost: 1.45E+25
  },
  1297: {
    income: 3.22E+16,
    commonCost: 3.45E+26,
    rareCost: 3.16E+25,
    legendaryCost: 1.51E+25
  },
  1298: {
    income: 3.31E+16,
    commonCost: 3.60E+26,
    rareCost: 3.33E+25,
    legendaryCost: 1.58E+25
  },
  1299: {
    income: 3.40E+16,
    commonCost: 3.75E+26,
    rareCost: 3.50E+25,
    legendaryCost: 1.66E+25
  },
  1300: {
    income: 3.50E+16,
    commonCost: 3.91E+26,
    rareCost: 3.68E+25,
    legendaryCost: 1.73E+25
  },
  1301: {
    income: 3.62E+16,
    commonCost: 4.11E+26,
    rareCost: 3.90E+25,
    legendaryCost: 1.82E+25
  },
  1302: {
    income: 3.75E+16,
    commonCost: 4.32E+26,
    rareCost: 4.14E+25,
    legendaryCost: 1.92E+25
  },
  1303: {
    income: 3.88E+16,
    commonCost: 4.53E+26,
    rareCost: 4.38E+25,
    legendaryCost: 2.02E+25
  },
  1304: {
    income: 4.01E+16,
    commonCost: 4.74E+26,
    rareCost: 4.62E+25,
    legendaryCost: 2.12E+25
  },
  1305: {
    income: 4.13E+16,
    commonCost: 4.96E+26,
    rareCost: 4.88E+25,
    legendaryCost: 2.22E+25
  },
  1306: {
    income: 4.26E+16,
    commonCost: 5.19E+26,
    rareCost: 5.15E+25,
    legendaryCost: 2.33E+25
  },
  1307: {
    income: 4.39E+16,
    commonCost: 5.42E+26,
    rareCost: 5.42E+25,
    legendaryCost: 2.44E+25
  },
  1308: {
    income: 4.52E+16,
    commonCost: 5.66E+26,
    rareCost: 5.71E+25,
    legendaryCost: 2.55E+25
  },
  1309: {
    income: 4.64E+16,
    commonCost: 5.90E+26,
    rareCost: 6.01E+25,
    legendaryCost: 2.67E+25
  },
  1310: {
    income: 4.77E+16,
    commonCost: 6.15E+26,
    rareCost: 6.31E+25,
    legendaryCost: 2.79E+25
  },
  1311: {
    income: 4.94E+16,
    commonCost: 6.46E+26,
    rareCost: 6.69E+25,
    legendaryCost: 2.94E+25
  },
  1312: {
    income: 5.12E+16,
    commonCost: 6.78E+26,
    rareCost: 7.09E+25,
    legendaryCost: 3.10E+25
  },
  1313: {
    income: 5.29E+16,
    commonCost: 7.11E+26,
    rareCost: 7.50E+25,
    legendaryCost: 3.26E+25
  },
  1314: {
    income: 5.47E+16,
    commonCost: 7.45E+26,
    rareCost: 7.92E+25,
    legendaryCost: 3.42E+25
  },
  1315: {
    income: 5.64E+16,
    commonCost: 7.80E+26,
    rareCost: 8.36E+25,
    legendaryCost: 3.59E+25
  },
  1316: {
    income: 5.82E+16,
    commonCost: 8.15E+26,
    rareCost: 8.81E+25,
    legendaryCost: 3.76E+25
  },
  1317: {
    income: 5.99E+16,
    commonCost: 8.52E+26,
    rareCost: 9.28E+25,
    legendaryCost: 3.94E+25
  },
  1318: {
    income: 6.16E+16,
    commonCost: 8.89E+26,
    rareCost: 9.77E+25,
    legendaryCost: 4.12E+25
  },
  1319: {
    income: 6.34E+16,
    commonCost: 9.27E+26,
    rareCost: 1.03E+26,
    legendaryCost: 4.31E+25
  },
  1320: {
    income: 6.51E+16,
    commonCost: 9.66E+26,
    rareCost: 1.08E+26,
    legendaryCost: 4.50E+25
  },
  1321: {
    income: 6.75E+16,
    commonCost: 1.02E+27,
    rareCost: 1.14E+26,
    legendaryCost: 4.75E+25
  },
  1322: {
    income: 6.99E+16,
    commonCost: 1.07E+27,
    rareCost: 1.21E+26,
    legendaryCost: 5.00E+25
  },
  1323: {
    income: 7.23E+16,
    commonCost: 1.12E+27,
    rareCost: 1.28E+26,
    legendaryCost: 5.26E+25
  },
  1324: {
    income: 7.47E+16,
    commonCost: 1.17E+27,
    rareCost: 1.35E+26,
    legendaryCost: 5.52E+25
  },
  1325: {
    income: 7.70E+16,
    commonCost: 1.23E+27,
    rareCost: 1.43E+26,
    legendaryCost: 5.79E+25
  },
  1326: {
    income: 7.94E+16,
    commonCost: 1.28E+27,
    rareCost: 1.50E+26,
    legendaryCost: 6.07E+25
  },
  1327: {
    income: 8.18E+16,
    commonCost: 1.34E+27,
    rareCost: 1.58E+26,
    legendaryCost: 6.36E+25
  },
  1328: {
    income: 8.42E+16,
    commonCost: 1.40E+27,
    rareCost: 1.67E+26,
    legendaryCost: 6.66E+25
  },
  1329: {
    income: 8.66E+16,
    commonCost: 1.46E+27,
    rareCost: 1.75E+26,
    legendaryCost: 6.96E+25
  },
  1330: {
    income: 8.90E+16,
    commonCost: 1.52E+27,
    rareCost: 1.84E+26,
    legendaryCost: 7.28E+25
  },
  1331: {
    income: 9.22E+16,
    commonCost: 1.60E+27,
    rareCost: 1.95E+26,
    legendaryCost: 7.67E+25
  },
  1332: {
    income: 9.55E+16,
    commonCost: 1.68E+27,
    rareCost: 2.07E+26,
    legendaryCost: 8.08E+25
  },
  1333: {
    income: 9.87E+16,
    commonCost: 1.76E+27,
    rareCost: 2.18E+26,
    legendaryCost: 8.49E+25
  },
  1334: {
    income: 1.02E+17,
    commonCost: 1.84E+27,
    rareCost: 2.31E+26,
    legendaryCost: 8.92E+25
  },
  1335: {
    income: 1.05E+17,
    commonCost: 1.93E+27,
    rareCost: 2.43E+26,
    legendaryCost: 9.36E+25
  },
  1336: {
    income: 1.09E+17,
    commonCost: 2.01E+27,
    rareCost: 2.56E+26,
    legendaryCost: 9.82E+25
  },
  1337: {
    income: 1.12E+17,
    commonCost: 2.10E+27,
    rareCost: 2.70E+26,
    legendaryCost: 1.03E+26
  },
  1338: {
    income: 1.15E+17,
    commonCost: 2.20E+27,
    rareCost: 2.84E+26,
    legendaryCost: 1.08E+26
  },
  1339: {
    income: 1.18E+17,
    commonCost: 2.29E+27,
    rareCost: 2.98E+26,
    legendaryCost: 1.13E+26
  },
  1340: {
    income: 1.22E+17,
    commonCost: 2.39E+27,
    rareCost: 3.13E+26,
    legendaryCost: 1.18E+26
  },
  1341: {
    income: 1.26E+17,
    commonCost: 2.51E+27,
    rareCost: 3.32E+26,
    legendaryCost: 1.24E+26
  },
  1342: {
    income: 1.31E+17,
    commonCost: 2.63E+27,
    rareCost: 3.51E+26,
    legendaryCost: 1.31E+26
  },
  1343: {
    income: 1.35E+17,
    commonCost: 2.76E+27,
    rareCost: 3.71E+26,
    legendaryCost: 1.37E+26
  },
  1344: {
    income: 1.40E+17,
    commonCost: 2.89E+27,
    rareCost: 3.92E+26,
    legendaryCost: 1.44E+26
  },
  1345: {
    income: 1.44E+17,
    commonCost: 3.03E+27,
    rareCost: 4.13E+26,
    legendaryCost: 1.51E+26
  },
  1346: {
    income: 1.48E+17,
    commonCost: 3.17E+27,
    rareCost: 4.35E+26,
    legendaryCost: 1.59E+26
  },
  1347: {
    income: 1.53E+17,
    commonCost: 3.31E+27,
    rareCost: 4.58E+26,
    legendaryCost: 1.66E+26
  },
  1348: {
    income: 1.57E+17,
    commonCost: 3.45E+27,
    rareCost: 4.82E+26,
    legendaryCost: 1.74E+26
  },
  1349: {
    income: 1.62E+17,
    commonCost: 3.60E+27,
    rareCost: 5.06E+26,
    legendaryCost: 1.82E+26
  },
  1350: {
    income: 1.66E+17,
    commonCost: 3.75E+27,
    rareCost: 5.32E+26,
    legendaryCost: 1.90E+26
  },
  1351: {
    income: 1.72E+17,
    commonCost: 3.94E+27,
    rareCost: 5.63E+26,
    legendaryCost: 2.00E+26
  },
  1352: {
    income: 1.79E+17,
    commonCost: 4.14E+27,
    rareCost: 5.96E+26,
    legendaryCost: 2.11E+26
  },
  1353: {
    income: 1.85E+17,
    commonCost: 4.34E+27,
    rareCost: 6.30E+26,
    legendaryCost: 2.22E+26
  },
  1354: {
    income: 1.91E+17,
    commonCost: 4.55E+27,
    rareCost: 6.64E+26,
    legendaryCost: 2.33E+26
  },
  1355: {
    income: 1.97E+17,
    commonCost: 4.76E+27,
    rareCost: 7.01E+26,
    legendaryCost: 2.45E+26
  },
  1356: {
    income: 2.03E+17,
    commonCost: 4.98E+27,
    rareCost: 7.38E+26,
    legendaryCost: 2.57E+26
  },
  1357: {
    income: 2.09E+17,
    commonCost: 5.20E+27,
    rareCost: 7.76E+26,
    legendaryCost: 2.69E+26
  },
  1358: {
    income: 2.15E+17,
    commonCost: 5.42E+27,
    rareCost: 8.16E+26,
    legendaryCost: 2.81E+26
  },
  1359: {
    income: 2.22E+17,
    commonCost: 5.66E+27,
    rareCost: 8.58E+26,
    legendaryCost: 2.94E+26
  },
  1360: {
    income: 2.28E+17,
    commonCost: 5.89E+27,
    rareCost: 9.00E+26,
    legendaryCost: 3.08E+26
  },
  1361: {
    income: 2.36E+17,
    commonCost: 6.19E+27,
    rareCost: 9.53E+26,
    legendaryCost: 3.24E+26
  },
  1362: {
    income: 2.45E+17,
    commonCost: 6.50E+27,
    rareCost: 1.01E+27,
    legendaryCost: 3.41E+26
  },
  1363: {
    income: 2.53E+17,
    commonCost: 6.82E+27,
    rareCost: 1.07E+27,
    legendaryCost: 3.59E+26
  },
  1364: {
    income: 2.61E+17,
    commonCost: 7.15E+27,
    rareCost: 1.12E+27,
    legendaryCost: 3.77E+26
  },
  1365: {
    income: 2.70E+17,
    commonCost: 7.48E+27,
    rareCost: 1.19E+27,
    legendaryCost: 3.96E+26
  },
  1366: {
    income: 2.78E+17,
    commonCost: 7.82E+27,
    rareCost: 1.25E+27,
    legendaryCost: 4.15E+26
  },
  1367: {
    income: 2.87E+17,
    commonCost: 8.16E+27,
    rareCost: 1.31E+27,
    legendaryCost: 4.35E+26
  },
  1368: {
    income: 2.95E+17,
    commonCost: 8.52E+27,
    rareCost: 1.38E+27,
    legendaryCost: 4.55E+26
  },
  1369: {
    income: 3.04E+17,
    commonCost: 8.88E+27,
    rareCost: 1.45E+27,
    legendaryCost: 4.76E+26
  },
  1370: {
    income: 3.12E+17,
    commonCost: 9.26E+27,
    rareCost: 1.52E+27,
    legendaryCost: 4.98E+26
  },
  1371: {
    income: 3.24E+17,
    commonCost: 9.73E+27,
    rareCost: 1.61E+27,
    legendaryCost: 5.25E+26
  },
  1372: {
    income: 3.35E+17,
    commonCost: 1.02E+28,
    rareCost: 1.70E+27,
    legendaryCost: 5.53E+26
  },
  1373: {
    income: 3.47E+17,
    commonCost: 1.07E+28,
    rareCost: 1.80E+27,
    legendaryCost: 5.81E+26
  },
  1374: {
    income: 3.58E+17,
    commonCost: 1.12E+28,
    rareCost: 1.90E+27,
    legendaryCost: 6.11E+26
  },
  1375: {
    income: 3.70E+17,
    commonCost: 1.17E+28,
    rareCost: 2.00E+27,
    legendaryCost: 6.41E+26
  },
  1376: {
    income: 3.81E+17,
    commonCost: 1.23E+28,
    rareCost: 2.11E+27,
    legendaryCost: 6.72E+26
  },
  1377: {
    income: 3.93E+17,
    commonCost: 1.28E+28,
    rareCost: 2.21E+27,
    legendaryCost: 7.04E+26
  },
  1378: {
    income: 4.05E+17,
    commonCost: 1.34E+28,
    rareCost: 2.33E+27,
    legendaryCost: 7.37E+26
  },
  1379: {
    income: 4.16E+17,
    commonCost: 1.40E+28,
    rareCost: 2.44E+27,
    legendaryCost: 7.71E+26
  },
  1380: {
    income: 4.28E+17,
    commonCost: 1.45E+28,
    rareCost: 2.56E+27,
    legendaryCost: 8.05E+26
  },
  1381: {
    income: 4.44E+17,
    commonCost: 1.53E+28,
    rareCost: 2.71E+27,
    legendaryCost: 8.49E+26
  },
  1382: {
    income: 4.60E+17,
    commonCost: 1.60E+28,
    rareCost: 2.87E+27,
    legendaryCost: 8.94E+26
  },
  1383: {
    income: 4.75E+17,
    commonCost: 1.68E+28,
    rareCost: 3.03E+27,
    legendaryCost: 9.41E+26
  },
  1384: {
    income: 4.91E+17,
    commonCost: 1.76E+28,
    rareCost: 3.20E+27,
    legendaryCost: 9.89E+26
  },
  1385: {
    income: 5.07E+17,
    commonCost: 1.84E+28,
    rareCost: 3.37E+27,
    legendaryCost: 1.04E+27
  },
  1386: {
    income: 5.23E+17,
    commonCost: 1.93E+28,
    rareCost: 3.55E+27,
    legendaryCost: 1.09E+27
  },
  1387: {
    income: 5.39E+17,
    commonCost: 2.01E+28,
    rareCost: 3.73E+27,
    legendaryCost: 1.14E+27
  },
  1388: {
    income: 5.55E+17,
    commonCost: 2.10E+28,
    rareCost: 3.92E+27,
    legendaryCost: 1.19E+27
  },
  1389: {
    income: 5.71E+17,
    commonCost: 2.19E+28,
    rareCost: 4.11E+27,
    legendaryCost: 1.25E+27
  },
  1390: {
    income: 5.87E+17,
    commonCost: 2.28E+28,
    rareCost: 4.31E+27,
    legendaryCost: 1.30E+27
  },
  1391: {
    income: 6.09E+17,
    commonCost: 2.40E+28,
    rareCost: 4.57E+27,
    legendaryCost: 1.37E+27
  },
  1392: {
    income: 6.31E+17,
    commonCost: 2.52E+28,
    rareCost: 4.83E+27,
    legendaryCost: 1.45E+27
  },
  1393: {
    income: 6.53E+17,
    commonCost: 2.64E+28,
    rareCost: 5.10E+27,
    legendaryCost: 1.52E+27
  },
  1394: {
    income: 6.74E+17,
    commonCost: 2.77E+28,
    rareCost: 5.38E+27,
    legendaryCost: 1.60E+27
  },
  1395: {
    income: 6.96E+17,
    commonCost: 2.90E+28,
    rareCost: 5.66E+27,
    legendaryCost: 1.68E+27
  },
  1396: {
    income: 7.18E+17,
    commonCost: 3.03E+28,
    rareCost: 5.96E+27,
    legendaryCost: 1.76E+27
  },
  1397: {
    income: 7.40E+17,
    commonCost: 3.16E+28,
    rareCost: 6.27E+27,
    legendaryCost: 1.85E+27
  },
  1398: {
    income: 7.62E+17,
    commonCost: 3.30E+28,
    rareCost: 6.58E+27,
    legendaryCost: 1.93E+27
  },
  1399: {
    income: 7.84E+17,
    commonCost: 3.44E+28,
    rareCost: 6.91E+27,
    legendaryCost: 2.02E+27
  },
  1400: {
    income: 8.06E+17,
    commonCost: 3.58E+28,
    rareCost: 7.25E+27,
    legendaryCost: 2.11E+27
  },
  1401: {
    income: 8.36E+17,
    commonCost: 3.77E+28,
    rareCost: 7.67E+27,
    legendaryCost: 2.23E+27
  },
  1402: {
    income: 8.66E+17,
    commonCost: 3.95E+28,
    rareCost: 8.10E+27,
    legendaryCost: 2.34E+27
  },
  1403: {
    income: 8.96E+17,
    commonCost: 4.15E+28,
    rareCost: 8.56E+27,
    legendaryCost: 2.47E+27
  },
  1404: {
    income: 9.26E+17,
    commonCost: 4.34E+28,
    rareCost: 9.02E+27,
    legendaryCost: 2.59E+27
  },
  1405: {
    income: 9.56E+17,
    commonCost: 4.55E+28,
    rareCost: 9.50E+27,
    legendaryCost: 2.72E+27
  },
  1406: {
    income: 9.87E+17,
    commonCost: 4.75E+28,
    rareCost: 1.00E+28,
    legendaryCost: 2.85E+27
  },
  1407: {
    income: 1.02E+18,
    commonCost: 4.96E+28,
    rareCost: 1.05E+28,
    legendaryCost: 2.99E+27
  },
  1408: {
    income: 1.05E+18,
    commonCost: 5.18E+28,
    rareCost: 1.10E+28,
    legendaryCost: 3.13E+27
  },
  1409: {
    income: 1.08E+18,
    commonCost: 5.40E+28,
    rareCost: 1.16E+28,
    legendaryCost: 3.27E+27
  },
  1410: {
    income: 1.11E+18,
    commonCost: 5.62E+28,
    rareCost: 1.21E+28,
    legendaryCost: 3.42E+27
  },
  1411: {
    income: 1.15E+18,
    commonCost: 5.91E+28,
    rareCost: 1.29E+28,
    legendaryCost: 3.60E+27
  },
  1412: {
    income: 1.19E+18,
    commonCost: 6.21E+28,
    rareCost: 1.36E+28,
    legendaryCost: 3.80E+27
  },
  1413: {
    income: 1.23E+18,
    commonCost: 6.51E+28,
    rareCost: 1.43E+28,
    legendaryCost: 3.99E+27
  },
  1414: {
    income: 1.27E+18,
    commonCost: 6.82E+28,
    rareCost: 1.51E+28,
    legendaryCost: 4.20E+27
  },
  1415: {
    income: 1.31E+18,
    commonCost: 7.13E+28,
    rareCost: 1.59E+28,
    legendaryCost: 4.40E+27
  },
  1416: {
    income: 1.36E+18,
    commonCost: 7.45E+28,
    rareCost: 1.67E+28,
    legendaryCost: 4.62E+27
  },
  1417: {
    income: 1.40E+18,
    commonCost: 7.78E+28,
    rareCost: 1.76E+28,
    legendaryCost: 4.84E+27
  },
  1418: {
    income: 1.44E+18,
    commonCost: 8.12E+28,
    rareCost: 1.85E+28,
    legendaryCost: 5.06E+27
  },
  1419: {
    income: 1.48E+18,
    commonCost: 8.47E+28,
    rareCost: 1.94E+28,
    legendaryCost: 5.29E+27
  },
  1420: {
    income: 1.52E+18,
    commonCost: 8.82E+28,
    rareCost: 2.03E+28,
    legendaryCost: 5.53E+27
  },
  1421: {
    income: 1.58E+18,
    commonCost: 9.25E+28,
    rareCost: 2.15E+28,
    legendaryCost: 5.82E+27
  },
  1422: {
    income: 1.64E+18,
    commonCost: 9.69E+28,
    rareCost: 2.26E+28,
    legendaryCost: 6.12E+27
  },
  1423: {
    income: 1.69E+18,
    commonCost: 1.01E+29,
    rareCost: 2.41E+28,
    legendaryCost: 6.42E+27
  },
  1424: {
    income: 1.75E+18,
    commonCost: 1.06E+29,
    rareCost: 2.57E+28,
    legendaryCost: 6.81E+27
  },
  1425: {
    income: 1.81E+18,
    commonCost: 1.10E+29,
    rareCost: 2.73E+28,
    legendaryCost: 7.22E+27
  },
  1426: {
    income: 1.87E+18,
    commonCost: 1.15E+29,
    rareCost: 2.90E+28,
    legendaryCost: 7.64E+27
  },
  1427: {
    income: 1.92E+18,
    commonCost: 1.20E+29,
    rareCost: 3.08E+28,
    legendaryCost: 8.08E+27
  },
  1428: {
    income: 1.98E+18,
    commonCost: 1.25E+29,
    rareCost: 3.26E+28,
    legendaryCost: 8.53E+27
  },
  1429: {
    income: 2.04E+18,
    commonCost: 1.30E+29,
    rareCost: 3.45E+28,
    legendaryCost: 9.00E+27
  },
  1430: {
    income: 2.09E+18,
    commonCost: 1.35E+29,
    rareCost: 3.65E+28,
    legendaryCost: 9.49E+27
  },
  1431: {
    income: 2.17E+18,
    commonCost: 1.41E+29,
    rareCost: 3.89E+28,
    legendaryCost: 1.01E+28
  },
  1432: {
    income: 2.25E+18,
    commonCost: 1.48E+29,
    rareCost: 4.15E+28,
    legendaryCost: 1.07E+28
  },
  1433: {
    income: 2.33E+18,
    commonCost: 1.54E+29,
    rareCost: 4.41E+28,
    legendaryCost: 1.14E+28
  },
  1434: {
    income: 2.41E+18,
    commonCost: 1.61E+29,
    rareCost: 4.69E+28,
    legendaryCost: 1.20E+28
  },
  1435: {
    income: 2.49E+18,
    commonCost: 1.68E+29,
    rareCost: 4.97E+28,
    legendaryCost: 1.27E+28
  },
  1436: {
    income: 2.57E+18,
    commonCost: 1.75E+29,
    rareCost: 5.27E+28,
    legendaryCost: 1.35E+28
  },
  1437: {
    income: 2.65E+18,
    commonCost: 1.83E+29,
    rareCost: 5.57E+28,
    legendaryCost: 1.42E+28
  },
  1438: {
    income: 2.73E+18,
    commonCost: 1.90E+29,
    rareCost: 5.89E+28,
    legendaryCost: 1.50E+28
  },
  1439: {
    income: 2.81E+18,
    commonCost: 1.97E+29,
    rareCost: 6.22E+28,
    legendaryCost: 1.58E+28
  },
  1440: {
    income: 2.88E+18,
    commonCost: 2.05E+29,
    rareCost: 6.56E+28,
    legendaryCost: 1.66E+28
  },
  1441: {
    income: 2.99E+18,
    commonCost: 2.15E+29,
    rareCost: 6.99E+28,
    legendaryCost: 1.77E+28
  },
  1442: {
    income: 3.10E+18,
    commonCost: 2.25E+29,
    rareCost: 7.43E+28,
    legendaryCost: 1.87E+28
  },
  1443: {
    income: 3.21E+18,
    commonCost: 2.35E+29,
    rareCost: 7.88E+28,
    legendaryCost: 1.98E+28
  },
  1444: {
    income: 3.32E+18,
    commonCost: 2.45E+29,
    rareCost: 8.36E+28,
    legendaryCost: 2.10E+28
  },
  1445: {
    income: 3.43E+18,
    commonCost: 2.56E+29,
    rareCost: 8.85E+28,
    legendaryCost: 2.22E+28
  },
  1446: {
    income: 3.54E+18,
    commonCost: 2.67E+29,
    rareCost: 9.35E+28,
    legendaryCost: 2.34E+28
  },
  1447: {
    income: 3.65E+18,
    commonCost: 2.78E+29,
    rareCost: 9.88E+28,
    legendaryCost: 2.47E+28
  },
  1448: {
    income: 3.76E+18,
    commonCost: 2.89E+29,
    rareCost: 1.04E+29,
    legendaryCost: 2.60E+28
  },
  1449: {
    income: 3.87E+18,
    commonCost: 3.00E+29,
    rareCost: 1.10E+29,
    legendaryCost: 2.73E+28
  },
  1450: {
    income: 3.97E+18,
    commonCost: 3.12E+29,
    rareCost: 1.16E+29,
    legendaryCost: 2.87E+28
  },
  1451: {
    income: 4.13E+18,
    commonCost: 3.27E+29,
    rareCost: 1.23E+29,
    legendaryCost: 3.05E+28
  },
  1452: {
    income: 4.28E+18,
    commonCost: 3.42E+29,
    rareCost: 1.31E+29,
    legendaryCost: 3.23E+28
  },
  1453: {
    income: 4.43E+18,
    commonCost: 3.57E+29,
    rareCost: 1.38E+29,
    legendaryCost: 3.42E+28
  },
  1454: {
    income: 4.58E+18,
    commonCost: 3.73E+29,
    rareCost: 1.46E+29,
    legendaryCost: 3.61E+28
  },
  1455: {
    income: 4.73E+18,
    commonCost: 3.89E+29,
    rareCost: 1.55E+29,
    legendaryCost: 3.81E+28
  },
  1456: {
    income: 4.88E+18,
    commonCost: 4.06E+29,
    rareCost: 1.63E+29,
    legendaryCost: 4.02E+28
  },
  1457: {
    income: 5.03E+18,
    commonCost: 4.22E+29,
    rareCost: 1.72E+29,
    legendaryCost: 4.23E+28
  },
  1458: {
    income: 5.18E+18,
    commonCost: 4.39E+29,
    rareCost: 1.82E+29,
    legendaryCost: 4.45E+28
  },
  1459: {
    income: 5.33E+18,
    commonCost: 4.56E+29,
    rareCost: 1.91E+29,
    legendaryCost: 4.68E+28
  },
  1460: {
    income: 5.48E+18,
    commonCost: 4.74E+29,
    rareCost: 2.01E+29,
    legendaryCost: 4.91E+28
  },
  1461: {
    income: 5.69E+18,
    commonCost: 4.96E+29,
    rareCost: 2.13E+29,
    legendaryCost: 5.20E+28
  },
  1462: {
    income: 5.90E+18,
    commonCost: 5.20E+29,
    rareCost: 2.26E+29,
    legendaryCost: 5.51E+28
  },
  1463: {
    income: 6.11E+18,
    commonCost: 5.43E+29,
    rareCost: 2.39E+29,
    legendaryCost: 5.82E+28
  },
  1464: {
    income: 6.31E+18,
    commonCost: 5.67E+29,
    rareCost: 2.53E+29,
    legendaryCost: 6.14E+28
  },
  1465: {
    income: 6.52E+18,
    commonCost: 5.91E+29,
    rareCost: 2.67E+29,
    legendaryCost: 6.48E+28
  },
  1466: {
    income: 6.73E+18,
    commonCost: 6.16E+29,
    rareCost: 2.82E+29,
    legendaryCost: 6.82E+28
  },
  1467: {
    income: 6.94E+18,
    commonCost: 6.41E+29,
    rareCost: 2.97E+29,
    legendaryCost: 7.18E+28
  },
  1468: {
    income: 7.15E+18,
    commonCost: 6.67E+29,
    rareCost: 3.12E+29,
    legendaryCost: 7.54E+28
  },
  1469: {
    income: 7.36E+18,
    commonCost: 6.93E+29,
    rareCost: 3.28E+29,
    legendaryCost: 7.92E+28
  },
  1470: {
    income: 7.56E+18,
    commonCost: 7.19E+29,
    rareCost: 3.45E+29,
    legendaryCost: 8.31E+28
  },
  1471: {
    income: 7.85E+18,
    commonCost: 7.53E+29,
    rareCost: 3.66E+29,
    legendaryCost: 8.80E+28
  },
  1472: {
    income: 8.14E+18,
    commonCost: 7.88E+29,
    rareCost: 3.87E+29,
    legendaryCost: 9.31E+28
  },
  1473: {
    income: 8.43E+18,
    commonCost: 8.24E+29,
    rareCost: 4.09E+29,
    legendaryCost: 9.83E+28
  },
  1474: {
    income: 8.72E+18,
    commonCost: 8.60E+29,
    rareCost: 4.32E+29,
    legendaryCost: 1.04E+29
  },
  1475: {
    income: 9.00E+18,
    commonCost: 8.97E+29,
    rareCost: 4.56E+29,
    legendaryCost: 1.09E+29
  },
  1476: {
    income: 9.29E+18,
    commonCost: 9.35E+29,
    rareCost: 4.80E+29,
    legendaryCost: 1.15E+29
  },
  1477: {
    income: 9.58E+18,
    commonCost: 9.73E+29,
    rareCost: 5.05E+29,
    legendaryCost: 1.21E+29
  },
  1478: {
    income: 9.87E+18,
    commonCost: 1.01E+30,
    rareCost: 5.31E+29,
    legendaryCost: 1.27E+29
  },
  1479: {
    income: 1.02E+19,
    commonCost: 1.05E+30,
    rareCost: 5.58E+29,
    legendaryCost: 1.33E+29
  },
  1480: {
    income: 1.04E+19,
    commonCost: 1.09E+30,
    rareCost: 5.85E+29,
    legendaryCost: 1.40E+29
  },
  1481: {
    income: 1.08E+19,
    commonCost: 1.14E+30,
    rareCost: 6.20E+29,
    legendaryCost: 1.48E+29
  },
  1482: {
    income: 1.12E+19,
    commonCost: 1.20E+30,
    rareCost: 6.56E+29,
    legendaryCost: 1.56E+29
  },
  1483: {
    income: 1.16E+19,
    commonCost: 1.25E+30,
    rareCost: 6.93E+29,
    legendaryCost: 1.65E+29
  },
  1484: {
    income: 1.20E+19,
    commonCost: 1.30E+30,
    rareCost: 7.31E+29,
    legendaryCost: 1.74E+29
  },
  1485: {
    income: 1.24E+19,
    commonCost: 1.36E+30,
    rareCost: 7.70E+29,
    legendaryCost: 1.83E+29
  },
  1486: {
    income: 1.28E+19,
    commonCost: 1.42E+30,
    rareCost: 8.11E+29,
    legendaryCost: 1.92E+29
  },
  1487: {
    income: 1.32E+19,
    commonCost: 1.47E+30,
    rareCost: 8.52E+29,
    legendaryCost: 2.02E+29
  },
  1488: {
    income: 1.36E+19,
    commonCost: 1.53E+30,
    rareCost: 8.95E+29,
    legendaryCost: 2.12E+29
  },
  1489: {
    income: 1.40E+19,
    commonCost: 1.59E+30,
    rareCost: 9.40E+29,
    legendaryCost: 2.22E+29
  },
  1490: {
    income: 1.44E+19,
    commonCost: 1.65E+30,
    rareCost: 9.85E+29,
    legendaryCost: 2.33E+29
  },
  1491: {
    income: 1.50E+19,
    commonCost: 1.73E+30,
    rareCost: 1.04E+30,
    legendaryCost: 2.46E+29
  },
  1492: {
    income: 1.55E+19,
    commonCost: 1.81E+30,
    rareCost: 1.10E+30,
    legendaryCost: 2.60E+29
  },
  1493: {
    income: 1.61E+19,
    commonCost: 1.89E+30,
    rareCost: 1.16E+30,
    legendaryCost: 2.74E+29
  },
  1494: {
    income: 1.66E+19,
    commonCost: 1.98E+30,
    rareCost: 1.23E+30,
    legendaryCost: 2.89E+29
  },
  1495: {
    income: 1.72E+19,
    commonCost: 2.06E+30,
    rareCost: 1.29E+30,
    legendaryCost: 3.04E+29
  },
  1496: {
    income: 1.78E+19,
    commonCost: 2.15E+30,
    rareCost: 1.36E+30,
    legendaryCost: 3.19E+29
  },
  1497: {
    income: 1.83E+19,
    commonCost: 2.23E+30,
    rareCost: 1.43E+30,
    legendaryCost: 3.35E+29
  },
  1498: {
    income: 1.89E+19,
    commonCost: 2.32E+30,
    rareCost: 1.50E+30,
    legendaryCost: 3.52E+29
  },
  1499: {
    income: 1.94E+19,
    commonCost: 2.41E+30,
    rareCost: 1.57E+30,
    legendaryCost: 3.68E+29
  },
  1500: {
    income: 2.00E+19,
    commonCost: 2.50E+30,
    rareCost: 1.65E+30,
    legendaryCost: 3.86E+29
  },
  1501: {
    income: 2.07E+19,
    commonCost: 2.62E+30,
    rareCost: 1.74E+30,
    legendaryCost: 4.08E+29
  },
  1502: {
    income: 2.15E+19,
    commonCost: 2.74E+30,
    rareCost: 1.84E+30,
    legendaryCost: 4.30E+29
  },
  1503: {
    income: 2.23E+19,
    commonCost: 2.86E+30,
    rareCost: 1.94E+30,
    legendaryCost: 4.54E+29
  },
  1504: {
    income: 2.30E+19,
    commonCost: 2.99E+30,
    rareCost: 2.04E+30,
    legendaryCost: 4.78E+29
  },
  1505: {
    income: 2.38E+19,
    commonCost: 3.12E+30,
    rareCost: 2.15E+30,
    legendaryCost: 5.02E+29
  },
  1506: {
    income: 2.46E+19,
    commonCost: 3.25E+30,
    rareCost: 2.26E+30,
    legendaryCost: 5.27E+29
  },
  1507: {
    income: 2.53E+19,
    commonCost: 3.38E+30,
    rareCost: 2.37E+30,
    legendaryCost: 5.53E+29
  },
  1508: {
    income: 2.61E+19,
    commonCost: 3.51E+30,
    rareCost: 2.49E+30,
    legendaryCost: 5.80E+29
  },
  1509: {
    income: 2.69E+19,
    commonCost: 3.65E+30,
    rareCost: 2.61E+30,
    legendaryCost: 6.08E+29
  },
  1510: {
    income: 2.76E+19,
    commonCost: 3.78E+30,
    rareCost: 2.73E+30,
    legendaryCost: 6.36E+29
  },
  1511: {
    income: 2.87E+19,
    commonCost: 3.96E+30,
    rareCost: 2.89E+30,
    legendaryCost: 6.72E+29
  },
  1512: {
    income: 2.98E+19,
    commonCost: 4.15E+30,
    rareCost: 3.05E+30,
    legendaryCost: 7.09E+29
  },
  1513: {
    income: 3.08E+19,
    commonCost: 4.33E+30,
    rareCost: 3.21E+30,
    legendaryCost: 7.47E+29
  },
  1514: {
    income: 3.19E+19,
    commonCost: 4.52E+30,
    rareCost: 3.38E+30,
    legendaryCost: 7.86E+29
  },
  1515: {
    income: 3.30E+19,
    commonCost: 4.71E+30,
    rareCost: 3.56E+30,
    legendaryCost: 8.26E+29
  },
  1516: {
    income: 3.40E+19,
    commonCost: 4.91E+30,
    rareCost: 3.74E+30,
    legendaryCost: 8.67E+29
  },
  1517: {
    income: 3.51E+19,
    commonCost: 5.11E+30,
    rareCost: 3.92E+30,
    legendaryCost: 9.09E+29
  },
  1518: {
    income: 3.61E+19,
    commonCost: 5.31E+30,
    rareCost: 4.11E+30,
    legendaryCost: 9.53E+29
  },
  1519: {
    income: 3.72E+19,
    commonCost: 5.51E+30,
    rareCost: 4.31E+30,
    legendaryCost: 9.97E+29
  },
  1520: {
    income: 3.83E+19,
    commonCost: 5.72E+30,
    rareCost: 4.51E+30,
    legendaryCost: 1.04E+30
  },
  1521: {
    income: 3.97E+19,
    commonCost: 5.99E+30,
    rareCost: 4.76E+30,
    legendaryCost: 1.10E+30
  },
  1522: {
    income: 4.12E+19,
    commonCost: 6.27E+30,
    rareCost: 5.03E+30,
    legendaryCost: 1.16E+30
  },
  1523: {
    income: 4.27E+19,
    commonCost: 6.55E+30,
    rareCost: 5.30E+30,
    legendaryCost: 1.22E+30
  },
  1524: {
    income: 4.42E+19,
    commonCost: 6.83E+30,
    rareCost: 5.57E+30,
    legendaryCost: 1.29E+30
  },
  1525: {
    income: 4.57E+19,
    commonCost: 7.12E+30,
    rareCost: 5.86E+30,
    legendaryCost: 1.35E+30
  },
  1526: {
    income: 4.71E+19,
    commonCost: 7.42E+30,
    rareCost: 6.15E+30,
    legendaryCost: 1.42E+30
  },
  1527: {
    income: 4.86E+19,
    commonCost: 7.71E+30,
    rareCost: 6.45E+30,
    legendaryCost: 1.49E+30
  },
  1528: {
    income: 5.01E+19,
    commonCost: 8.02E+30,
    rareCost: 6.76E+30,
    legendaryCost: 1.56E+30
  },
  1529: {
    income: 5.16E+19,
    commonCost: 8.32E+30,
    rareCost: 7.08E+30,
    legendaryCost: 1.63E+30
  },
  1530: {
    income: 5.30E+19,
    commonCost: 8.64E+30,
    rareCost: 7.40E+30,
    legendaryCost: 1.70E+30
  },
  1531: {
    income: 5.51E+19,
    commonCost: 9.05E+30,
    rareCost: 7.82E+30,
    legendaryCost: 1.80E+30
  },
  1532: {
    income: 5.71E+19,
    commonCost: 9.46E+30,
    rareCost: 8.25E+30,
    legendaryCost: 1.90E+30
  },
  1533: {
    income: 5.92E+19,
    commonCost: 9.89E+30,
    rareCost: 8.69E+30,
    legendaryCost: 2.00E+30
  },
  1534: {
    income: 6.13E+19,
    commonCost: 1.03E+31,
    rareCost: 9.14E+30,
    legendaryCost: 2.10E+30
  },
  1535: {
    income: 6.33E+19,
    commonCost: 1.08E+31,
    rareCost: 9.60E+30,
    legendaryCost: 2.20E+30
  },
  1536: {
    income: 6.54E+19,
    commonCost: 1.12E+31,
    rareCost: 1.01E+31,
    legendaryCost: 2.31E+30
  },
  1537: {
    income: 6.74E+19,
    commonCost: 1.16E+31,
    rareCost: 1.06E+31,
    legendaryCost: 2.42E+30
  },
  1538: {
    income: 6.95E+19,
    commonCost: 1.21E+31,
    rareCost: 1.11E+31,
    legendaryCost: 2.54E+30
  },
  1539: {
    income: 7.15E+19,
    commonCost: 1.26E+31,
    rareCost: 1.16E+31,
    legendaryCost: 2.65E+30
  },
  1540: {
    income: 7.36E+19,
    commonCost: 1.30E+31,
    rareCost: 1.21E+31,
    legendaryCost: 2.77E+30
  },
  1541: {
    income: 7.64E+19,
    commonCost: 1.37E+31,
    rareCost: 1.28E+31,
    legendaryCost: 2.93E+30
  },
  1542: {
    income: 7.93E+19,
    commonCost: 1.43E+31,
    rareCost: 1.35E+31,
    legendaryCost: 3.08E+30
  },
  1543: {
    income: 8.21E+19,
    commonCost: 1.49E+31,
    rareCost: 1.42E+31,
    legendaryCost: 3.25E+30
  },
  1544: {
    income: 8.50E+19,
    commonCost: 1.56E+31,
    rareCost: 1.49E+31,
    legendaryCost: 3.41E+30
  },
  1545: {
    income: 8.78E+19,
    commonCost: 1.62E+31,
    rareCost: 1.57E+31,
    legendaryCost: 3.58E+30
  },
  1546: {
    income: 9.07E+19,
    commonCost: 1.69E+31,
    rareCost: 1.64E+31,
    legendaryCost: 3.76E+30
  },
  1547: {
    income: 9.36E+19,
    commonCost: 1.76E+31,
    rareCost: 1.72E+31,
    legendaryCost: 3.93E+30
  },
  1548: {
    income: 9.64E+19,
    commonCost: 1.83E+31,
    rareCost: 1.80E+31,
    legendaryCost: 4.12E+30
  },
  1549: {
    income: 9.93E+19,
    commonCost: 1.90E+31,
    rareCost: 1.89E+31,
    legendaryCost: 4.30E+30
  },
  1550: {
    income: 1.02E+20,
    commonCost: 1.97E+31,
    rareCost: 1.97E+31,
    legendaryCost: 4.50E+30
  },
  1551: {
    income: 1.06E+20,
    commonCost: 2.06E+31,
    rareCost: 2.08E+31,
    legendaryCost: 4.74E+30
  },
  1552: {
    income: 1.10E+20,
    commonCost: 2.15E+31,
    rareCost: 2.19E+31,
    legendaryCost: 5.00E+30
  },
  1553: {
    income: 1.14E+20,
    commonCost: 2.25E+31,
    rareCost: 2.31E+31,
    legendaryCost: 5.26E+30
  },
  1554: {
    income: 1.18E+20,
    commonCost: 2.35E+31,
    rareCost: 2.42E+31,
    legendaryCost: 5.52E+30
  },
  1555: {
    income: 1.22E+20,
    commonCost: 2.45E+31,
    rareCost: 2.55E+31,
    legendaryCost: 5.80E+30
  },
  1556: {
    income: 1.26E+20,
    commonCost: 2.55E+31,
    rareCost: 2.67E+31,
    legendaryCost: 6.08E+30
  },
  1557: {
    income: 1.30E+20,
    commonCost: 2.65E+31,
    rareCost: 2.80E+31,
    legendaryCost: 6.36E+30
  },
  1558: {
    income: 1.34E+20,
    commonCost: 2.75E+31,
    rareCost: 2.93E+31,
    legendaryCost: 6.66E+30
  },
  1559: {
    income: 1.38E+20,
    commonCost: 2.86E+31,
    rareCost: 3.06E+31,
    legendaryCost: 6.96E+30
  },
  1560: {
    income: 1.42E+20,
    commonCost: 2.97E+31,
    rareCost: 3.20E+31,
    legendaryCost: 7.27E+30
  },
  1561: {
    income: 1.47E+20,
    commonCost: 3.11E+31,
    rareCost: 3.37E+31,
    legendaryCost: 7.67E+30
  },
  1562: {
    income: 1.53E+20,
    commonCost: 3.25E+31,
    rareCost: 3.55E+31,
    legendaryCost: 8.07E+30
  },
  1563: {
    income: 1.58E+20,
    commonCost: 3.40E+31,
    rareCost: 3.74E+31,
    legendaryCost: 8.50E+30
  },
  1564: {
    income: 1.64E+20,
    commonCost: 3.55E+31,
    rareCost: 3.94E+31,
    legendaryCost: 8.95E+30
  },
  1565: {
    income: 1.69E+20,
    commonCost: 3.71E+31,
    rareCost: 4.15E+31,
    legendaryCost: 9.41E+30
  },
  1566: {
    income: 1.75E+20,
    commonCost: 3.87E+31,
    rareCost: 4.36E+31,
    legendaryCost: 9.88E+30
  },
  1567: {
    income: 1.81E+20,
    commonCost: 4.04E+31,
    rareCost: 4.57E+31,
    legendaryCost: 1.04E+31
  },
  1568: {
    income: 1.86E+20,
    commonCost: 4.20E+31,
    rareCost: 4.79E+31,
    legendaryCost: 1.09E+31
  },
  1569: {
    income: 1.92E+20,
    commonCost: 4.37E+31,
    rareCost: 5.02E+31,
    legendaryCost: 1.14E+31
  },
  1570: {
    income: 1.97E+20,
    commonCost: 4.54E+31,
    rareCost: 5.26E+31,
    legendaryCost: 1.19E+31
  },
  1571: {
    income: 2.05E+20,
    commonCost: 4.77E+31,
    rareCost: 5.56E+31,
    legendaryCost: 1.26E+31
  },
  1572: {
    income: 2.13E+20,
    commonCost: 5.00E+31,
    rareCost: 5.87E+31,
    legendaryCost: 1.33E+31
  },
  1573: {
    income: 2.20E+20,
    commonCost: 5.23E+31,
    rareCost: 6.18E+31,
    legendaryCost: 1.40E+31
  },
  1574: {
    income: 2.28E+20,
    commonCost: 5.47E+31,
    rareCost: 6.51E+31,
    legendaryCost: 1.47E+31
  },
  1575: {
    income: 2.36E+20,
    commonCost: 5.72E+31,
    rareCost: 6.84E+31,
    legendaryCost: 1.55E+31
  },
  1576: {
    income: 2.43E+20,
    commonCost: 5.96E+31,
    rareCost: 7.19E+31,
    legendaryCost: 1.63E+31
  },
  1577: {
    income: 2.51E+20,
    commonCost: 6.21E+31,
    rareCost: 7.54E+31,
    legendaryCost: 1.71E+31
  },
  1578: {
    income: 2.59E+20,
    commonCost: 6.47E+31,
    rareCost: 7.90E+31,
    legendaryCost: 1.79E+31
  },
  1579: {
    income: 2.67E+20,
    commonCost: 6.73E+31,
    rareCost: 8.28E+31,
    legendaryCost: 1.87E+31
  },
  1580: {
    income: 2.74E+20,
    commonCost: 6.99E+31,
    rareCost: 8.66E+31,
    legendaryCost: 1.96E+31
  },
  1581: {
    income: 2.85E+20,
    commonCost: 7.34E+31,
    rareCost: 9.15E+31,
    legendaryCost: 2.07E+31
  },
  1582: {
    income: 2.96E+20,
    commonCost: 7.69E+31,
    rareCost: 9.65E+31,
    legendaryCost: 2.18E+31
  },
  1583: {
    income: 3.06E+20,
    commonCost: 8.05E+31,
    rareCost: 1.02E+32,
    legendaryCost: 2.30E+31
  },
  1584: {
    income: 3.17E+20,
    commonCost: 8.41E+31,
    rareCost: 1.07E+32,
    legendaryCost: 2.41E+31
  },
  1585: {
    income: 3.28E+20,
    commonCost: 8.79E+31,
    rareCost: 1.12E+32,
    legendaryCost: 2.54E+31
  },
  1586: {
    income: 3.39E+20,
    commonCost: 9.16E+31,
    rareCost: 1.18E+32,
    legendaryCost: 2.66E+31
  },
  1587: {
    income: 3.49E+20,
    commonCost: 9.55E+31,
    rareCost: 1.24E+32,
    legendaryCost: 2.79E+31
  },
  1588: {
    income: 3.60E+20,
    commonCost: 9.94E+31,
    rareCost: 1.30E+32,
    legendaryCost: 2.92E+31
  },
  1589: {
    income: 3.71E+20,
    commonCost: 1.03E+32,
    rareCost: 1.36E+32,
    legendaryCost: 3.06E+31
  },
  1590: {
    income: 3.82E+20,
    commonCost: 1.07E+32,
    rareCost: 1.42E+32,
    legendaryCost: 3.20E+31
  },
  1591: {
    income: 3.97E+20,
    commonCost: 1.13E+32,
    rareCost: 1.50E+32,
    legendaryCost: 3.38E+31
  },
  1592: {
    income: 4.12E+20,
    commonCost: 1.18E+32,
    rareCost: 1.58E+32,
    legendaryCost: 3.56E+31
  },
  1593: {
    income: 4.27E+20,
    commonCost: 1.24E+32,
    rareCost: 1.66E+32,
    legendaryCost: 3.75E+31
  },
  1594: {
    income: 4.42E+20,
    commonCost: 1.29E+32,
    rareCost: 1.75E+32,
    legendaryCost: 3.94E+31
  },
  1595: {
    income: 4.57E+20,
    commonCost: 1.35E+32,
    rareCost: 1.84E+32,
    legendaryCost: 4.14E+31
  },
  1596: {
    income: 4.72E+20,
    commonCost: 1.41E+32,
    rareCost: 1.93E+32,
    legendaryCost: 4.34E+31
  },
  1597: {
    income: 4.87E+20,
    commonCost: 1.46E+32,
    rareCost: 2.02E+32,
    legendaryCost: 4.55E+31
  },
  1598: {
    income: 5.02E+20,
    commonCost: 1.52E+32,
    rareCost: 2.12E+32,
    legendaryCost: 4.77E+31
  },
  1599: {
    income: 5.17E+20,
    commonCost: 1.58E+32,
    rareCost: 2.22E+32,
    legendaryCost: 4.98E+31
  },
  1600: {
    income: 5.32E+20,
    commonCost: 1.64E+32,
    rareCost: 2.30E+32,
    legendaryCost: 5.21E+31
  },
  1601: {
    income: 5.53E+20,
    commonCost: 1.73E+32,
    rareCost: 2.42E+32,
    legendaryCost: 5.57E+31
  },
  1602: {
    income: 5.74E+20,
    commonCost: 1.81E+32,
    rareCost: 2.53E+32,
    legendaryCost: 5.94E+31
  },
  1603: {
    income: 5.95E+20,
    commonCost: 1.89E+32,
    rareCost: 2.65E+32,
    legendaryCost: 6.33E+31
  },
  1604: {
    income: 6.16E+20,
    commonCost: 1.98E+32,
    rareCost: 2.77E+32,
    legendaryCost: 6.73E+31
  },
  1605: {
    income: 6.37E+20,
    commonCost: 2.06E+32,
    rareCost: 2.89E+32,
    legendaryCost: 7.15E+31
  },
  1606: {
    income: 6.57E+20,
    commonCost: 2.15E+32,
    rareCost: 3.01E+32,
    legendaryCost: 7.58E+31
  },
  1607: {
    income: 6.78E+20,
    commonCost: 2.24E+32,
    rareCost: 3.14E+32,
    legendaryCost: 8.03E+31
  },
  1608: {
    income: 6.99E+20,
    commonCost: 2.33E+32,
    rareCost: 3.26E+32,
    legendaryCost: 8.50E+31
  },
  1609: {
    income: 7.20E+20,
    commonCost: 2.42E+32,
    rareCost: 3.39E+32,
    legendaryCost: 8.98E+31
  },
  1610: {
    income: 7.41E+20,
    commonCost: 2.52E+32,
    rareCost: 3.52E+32,
    legendaryCost: 9.48E+31
  },
  1611: {
    income: 7.71E+20,
    commonCost: 2.64E+32,
    rareCost: 3.70E+32,
    legendaryCost: 1.01E+32
  },
  1612: {
    income: 8.00E+20,
    commonCost: 2.77E+32,
    rareCost: 3.87E+32,
    legendaryCost: 1.08E+32
  },
  1613: {
    income: 8.29E+20,
    commonCost: 2.89E+32,
    rareCost: 4.05E+32,
    legendaryCost: 1.14E+32
  },
  1614: {
    income: 8.58E+20,
    commonCost: 3.02E+32,
    rareCost: 4.23E+32,
    legendaryCost: 1.21E+32
  },
  1615: {
    income: 8.88E+20,
    commonCost: 3.15E+32,
    rareCost: 4.42E+32,
    legendaryCost: 1.29E+32
  },
  1616: {
    income: 9.17E+20,
    commonCost: 3.29E+32,
    rareCost: 4.60E+32,
    legendaryCost: 1.36E+32
  },
  1617: {
    income: 9.46E+20,
    commonCost: 3.42E+32,
    rareCost: 4.79E+32,
    legendaryCost: 1.44E+32
  },
  1618: {
    income: 9.76E+20,
    commonCost: 3.56E+32,
    rareCost: 4.99E+32,
    legendaryCost: 1.52E+32
  },
  1619: {
    income: 1.00E+21,
    commonCost: 3.70E+32,
    rareCost: 5.18E+32,
    legendaryCost: 1.60E+32
  },
  1620: {
    income: 1.03E+21,
    commonCost: 3.84E+32,
    rareCost: 5.38E+32,
    legendaryCost: 1.69E+32
  },
  1621: {
    income: 1.08E+21,
    commonCost: 4.03E+32,
    rareCost: 5.64E+32,
    legendaryCost: 1.79E+32
  },
  1622: {
    income: 1.12E+21,
    commonCost: 4.22E+32,
    rareCost: 5.91E+32,
    legendaryCost: 1.91E+32
  },
  1623: {
    income: 1.16E+21,
    commonCost: 4.42E+32,
    rareCost: 6.18E+32,
    legendaryCost: 2.02E+32
  },
  1624: {
    income: 1.20E+21,
    commonCost: 4.61E+32,
    rareCost: 6.46E+32,
    legendaryCost: 2.14E+32
  },
  1625: {
    income: 1.24E+21,
    commonCost: 4.81E+32,
    rareCost: 6.74E+32,
    legendaryCost: 2.27E+32
  },
  1626: {
    income: 1.28E+21,
    commonCost: 5.02E+32,
    rareCost: 7.02E+32,
    legendaryCost: 2.39E+32
  },
  1627: {
    income: 1.32E+21,
    commonCost: 5.22E+32,
    rareCost: 7.31E+32,
    legendaryCost: 2.53E+32
  },
  1628: {
    income: 1.36E+21,
    commonCost: 5.43E+32,
    rareCost: 7.61E+32,
    legendaryCost: 2.66E+32
  },
  1629: {
    income: 1.40E+21,
    commonCost: 5.65E+32,
    rareCost: 7.90E+32,
    legendaryCost: 2.80E+32
  },
  1630: {
    income: 1.44E+21,
    commonCost: 5.86E+32,
    rareCost: 8.21E+32,
    legendaryCost: 2.95E+32
  },
  1631: {
    income: 1.50E+21,
    commonCost: 6.15E+32,
    rareCost: 8.61E+32,
    legendaryCost: 3.13E+32
  },
  1632: {
    income: 1.56E+21,
    commonCost: 6.44E+32,
    rareCost: 9.01E+32,
    legendaryCost: 3.32E+32
  },
  1633: {
    income: 1.62E+21,
    commonCost: 6.73E+32,
    rareCost: 9.43E+32,
    legendaryCost: 3.52E+32
  },
  1634: {
    income: 1.67E+21,
    commonCost: 7.03E+32,
    rareCost: 9.84E+32,
    legendaryCost: 3.72E+32
  },
  1635: {
    income: 1.73E+21,
    commonCost: 7.34E+32,
    rareCost: 1.03E+33,
    legendaryCost: 3.93E+32
  },
  1636: {
    income: 1.79E+21,
    commonCost: 7.64E+32,
    rareCost: 1.07E+33,
    legendaryCost: 4.14E+32
  },
  1637: {
    income: 1.84E+21,
    commonCost: 7.96E+32,
    rareCost: 1.11E+33,
    legendaryCost: 4.37E+32
  },
  1638: {
    income: 1.90E+21,
    commonCost: 8.28E+32,
    rareCost: 1.16E+33,
    legendaryCost: 4.60E+32
  },
  1639: {
    income: 1.96E+21,
    commonCost: 8.60E+32,
    rareCost: 1.20E+33,
    legendaryCost: 4.83E+32
  },
  1640: {
    income: 2.02E+21,
    commonCost: 8.93E+32,
    rareCost: 1.25E+33,
    legendaryCost: 5.08E+32
  },
  1641: {
    income: 2.10E+21,
    commonCost: 9.36E+32,
    rareCost: 1.31E+33,
    legendaryCost: 5.39E+32
  },
  1642: {
    income: 2.18E+21,
    commonCost: 9.80E+32,
    rareCost: 1.37E+33,
    legendaryCost: 5.71E+32
  },
  1643: {
    income: 2.26E+21,
    commonCost: 1.03E+33,
    rareCost: 1.44E+33,
    legendaryCost: 6.04E+32
  },
  1644: {
    income: 2.34E+21,
    commonCost: 1.07E+33,
    rareCost: 1.50E+33,
    legendaryCost: 6.38E+32
  },
  1645: {
    income: 2.42E+21,
    commonCost: 1.12E+33,
    rareCost: 1.56E+33,
    legendaryCost: 6.73E+32
  },
  1646: {
    income: 2.50E+21,
    commonCost: 1.16E+33,
    rareCost: 1.63E+33,
    legendaryCost: 7.09E+32
  },
  1647: {
    income: 2.58E+21,
    commonCost: 1.21E+33,
    rareCost: 1.70E+33,
    legendaryCost: 7.46E+32
  },
  1648: {
    income: 2.66E+21,
    commonCost: 1.26E+33,
    rareCost: 1.76E+33,
    legendaryCost: 7.84E+32
  },
  1649: {
    income: 2.74E+21,
    commonCost: 1.31E+33,
    rareCost: 1.83E+33,
    legendaryCost: 8.24E+32
  },
  1650: {
    income: 2.82E+21,
    commonCost: 1.36E+33,
    rareCost: 1.90E+33,
    legendaryCost: 8.64E+32
  },
  1651: {
    income: 2.93E+21,
    commonCost: 1.42E+33,
    rareCost: 1.99E+33,
    legendaryCost: 9.16E+32
  },
  1652: {
    income: 3.04E+21,
    commonCost: 1.49E+33,
    rareCost: 2.09E+33,
    legendaryCost: 9.70E+32
  },
  1653: {
    income: 3.16E+21,
    commonCost: 1.56E+33,
    rareCost: 2.18E+33,
    legendaryCost: 1.02E+33
  },
  1654: {
    income: 3.27E+21,
    commonCost: 1.63E+33,
    rareCost: 2.28E+33,
    legendaryCost: 1.08E+33
  },
  1655: {
    income: 3.38E+21,
    commonCost: 1.70E+33,
    rareCost: 2.38E+33,
    legendaryCost: 1.14E+33
  },
  1656: {
    income: 3.49E+21,
    commonCost: 1.77E+33,
    rareCost: 2.48E+33,
    legendaryCost: 1.20E+33
  },
  1657: {
    income: 3.61E+21,
    commonCost: 1.84E+33,
    rareCost: 2.58E+33,
    legendaryCost: 1.26E+33
  },
  1658: {
    income: 3.72E+21,
    commonCost: 1.91E+33,
    rareCost: 2.68E+33,
    legendaryCost: 1.33E+33
  },
  1659: {
    income: 3.83E+21,
    commonCost: 1.99E+33,
    rareCost: 2.78E+33,
    legendaryCost: 1.39E+33
  },
  1660: {
    income: 3.94E+21,
    commonCost: 2.06E+33,
    rareCost: 2.89E+33,
    legendaryCost: 1.46E+33
  },
  1661: {
    income: 4.10E+21,
    commonCost: 2.16E+33,
    rareCost: 3.03E+33,
    legendaryCost: 1.54E+33
  },
  1662: {
    income: 4.26E+21,
    commonCost: 2.27E+33,
    rareCost: 3.17E+33,
    legendaryCost: 1.63E+33
  },
  1663: {
    income: 4.42E+21,
    commonCost: 2.37E+33,
    rareCost: 3.32E+33,
    legendaryCost: 1.72E+33
  },
  1664: {
    income: 4.58E+21,
    commonCost: 2.47E+33,
    rareCost: 3.46E+33,
    legendaryCost: 1.82E+33
  },
  1665: {
    income: 4.73E+21,
    commonCost: 2.58E+33,
    rareCost: 3.61E+33,
    legendaryCost: 1.91E+33
  },
  1666: {
    income: 4.89E+21,
    commonCost: 2.69E+33,
    rareCost: 3.76E+33,
    legendaryCost: 2.01E+33
  },
  1667: {
    income: 5.05E+21,
    commonCost: 2.80E+33,
    rareCost: 3.91E+33,
    legendaryCost: 2.12E+33
  },
  1668: {
    income: 5.21E+21,
    commonCost: 2.91E+33,
    rareCost: 4.07E+33,
    legendaryCost: 2.22E+33
  },
  1669: {
    income: 5.36E+21,
    commonCost: 3.02E+33,
    rareCost: 4.23E+33,
    legendaryCost: 2.33E+33
  },
  1670: {
    income: 5.52E+21,
    commonCost: 3.13E+33,
    rareCost: 4.39E+33,
    legendaryCost: 2.44E+33
  },
  1671: {
    income: 5.74E+21,
    commonCost: 3.28E+33,
    rareCost: 4.60E+33,
    legendaryCost: 2.58E+33
  },
  1672: {
    income: 5.96E+21,
    commonCost: 3.44E+33,
    rareCost: 4.81E+33,
    legendaryCost: 2.73E+33
  },
  1673: {
    income: 6.19E+21,
    commonCost: 3.59E+33,
    rareCost: 5.03E+33,
    legendaryCost: 2.88E+33
  },
  1674: {
    income: 6.41E+21,
    commonCost: 3.75E+33,
    rareCost: 5.25E+33,
    legendaryCost: 3.03E+33
  },
  1675: {
    income: 6.63E+21,
    commonCost: 3.91E+33,
    rareCost: 5.48E+33,
    legendaryCost: 3.19E+33
  },
  1676: {
    income: 6.85E+21,
    commonCost: 4.08E+33,
    rareCost: 5.71E+33,
    legendaryCost: 3.35E+33
  },
  1677: {
    income: 7.07E+21,
    commonCost: 4.24E+33,
    rareCost: 5.94E+33,
    legendaryCost: 3.52E+33
  },
  1678: {
    income: 7.29E+21,
    commonCost: 4.41E+33,
    rareCost: 6.17E+33,
    legendaryCost: 3.69E+33
  },
  1679: {
    income: 7.51E+21,
    commonCost: 4.58E+33,
    rareCost: 6.41E+33,
    legendaryCost: 3.87E+33
  },
  1680: {
    income: 7.74E+21,
    commonCost: 4.75E+33,
    rareCost: 6.65E+33,
    legendaryCost: 4.05E+33
  },
  1681: {
    income: 8.05E+21,
    commonCost: 4.98E+33,
    rareCost: 6.97E+33,
    legendaryCost: 4.28E+33
  },
  1682: {
    income: 8.36E+21,
    commonCost: 5.21E+33,
    rareCost: 7.30E+33,
    legendaryCost: 4.52E+33
  },
  1683: {
    income: 8.67E+21,
    commonCost: 5.45E+33,
    rareCost: 7.63E+33,
    legendaryCost: 4.77E+33
  },
  1684: {
    income: 8.98E+21,
    commonCost: 5.69E+33,
    rareCost: 7.97E+33,
    legendaryCost: 5.02E+33
  },
  1685: {
    income: 9.29E+21,
    commonCost: 5.93E+33,
    rareCost: 8.31E+33,
    legendaryCost: 5.28E+33
  },
  1686: {
    income: 9.60E+21,
    commonCost: 6.20E+33,
    rareCost: 8.68E+33,
    legendaryCost: 5.56E+33
  },
  1687: {
    income: 9.91E+21,
    commonCost: 6.48E+33,
    rareCost: 9.07E+33,
    legendaryCost: 5.86E+33
  },
  1688: {
    income: 1.02E+22,
    commonCost: 6.76E+33,
    rareCost: 9.47E+33,
    legendaryCost: 6.17E+33
  },
  1689: {
    income: 1.05E+22,
    commonCost: 7.05E+33,
    rareCost: 9.87E+33,
    legendaryCost: 6.49E+33
  },
  1690: {
    income: 1.08E+22,
    commonCost: 7.34E+33,
    rareCost: 1.03E+34,
    legendaryCost: 6.82E+33
  },
  1691: {
    income: 1.13E+22,
    commonCost: 7.73E+33,
    rareCost: 1.08E+34,
    legendaryCost: 7.24E+33
  },
  1692: {
    income: 1.17E+22,
    commonCost: 8.13E+33,
    rareCost: 1.14E+34,
    legendaryCost: 7.67E+33
  },
  1693: {
    income: 1.22E+22,
    commonCost: 8.53E+33,
    rareCost: 1.19E+34,
    legendaryCost: 8.11E+33
  },
  1694: {
    income: 1.26E+22,
    commonCost: 8.94E+33,
    rareCost: 1.25E+34,
    legendaryCost: 8.57E+33
  },
  1695: {
    income: 1.30E+22,
    commonCost: 9.35E+33,
    rareCost: 1.31E+34,
    legendaryCost: 9.05E+33
  },
  1696: {
    income: 1.35E+22,
    commonCost: 9.78E+33,
    rareCost: 1.37E+34,
    legendaryCost: 9.53E+33
  },
  1697: {
    income: 1.39E+22,
    commonCost: 1.02E+34,
    rareCost: 1.43E+34,
    legendaryCost: 1.00E+34
  },
  1698: {
    income: 1.43E+22,
    commonCost: 1.07E+34,
    rareCost: 1.49E+34,
    legendaryCost: 1.06E+34
  },
  1699: {
    income: 1.48E+22,
    commonCost: 1.11E+34,
    rareCost: 1.55E+34,
    legendaryCost: 1.11E+34
  },
  1700: {
    income: 1.52E+22,
    commonCost: 1.16E+34,
    rareCost: 1.62E+34,
    legendaryCost: 1.16E+34
  },
  1701: {
    income: 1.58E+22,
    commonCost: 1.22E+34,
    rareCost: 1.70E+34,
    legendaryCost: 1.23E+34
  },
  1702: {
    income: 1.64E+22,
    commonCost: 1.28E+34,
    rareCost: 1.79E+34,
    legendaryCost: 1.31E+34
  },
  1703: {
    income: 1.71E+22,
    commonCost: 1.34E+34,
    rareCost: 1.88E+34,
    legendaryCost: 1.38E+34
  },
  1704: {
    income: 1.77E+22,
    commonCost: 1.40E+34,
    rareCost: 1.97E+34,
    legendaryCost: 1.46E+34
  },
  1705: {
    income: 1.83E+22,
    commonCost: 1.47E+34,
    rareCost: 2.06E+34,
    legendaryCost: 1.54E+34
  },
  1706: {
    income: 1.89E+22,
    commonCost: 1.54E+34,
    rareCost: 2.15E+34,
    legendaryCost: 1.62E+34
  },
  1707: {
    income: 1.95E+22,
    commonCost: 1.60E+34,
    rareCost: 2.24E+34,
    legendaryCost: 1.70E+34
  },
  1708: {
    income: 2.01E+22,
    commonCost: 1.67E+34,
    rareCost: 2.34E+34,
    legendaryCost: 1.79E+34
  },
  1709: {
    income: 2.08E+22,
    commonCost: 1.74E+34,
    rareCost: 2.44E+34,
    legendaryCost: 1.88E+34
  },
  1710: {
    income: 2.14E+22,
    commonCost: 1.81E+34,
    rareCost: 2.54E+34,
    legendaryCost: 1.97E+34
  },
  1711: {
    income: 2.22E+22,
    commonCost: 1.91E+34,
    rareCost: 2.67E+34,
    legendaryCost: 2.09E+34
  },
  1712: {
    income: 2.31E+22,
    commonCost: 2.00E+34,
    rareCost: 2.80E+34,
    legendaryCost: 2.21E+34
  },
  1713: {
    income: 2.40E+22,
    commonCost: 2.10E+34,
    rareCost: 2.94E+34,
    legendaryCost: 2.33E+34
  },
  1714: {
    income: 2.48E+22,
    commonCost: 2.20E+34,
    rareCost: 3.08E+34,
    legendaryCost: 2.46E+34
  },
  1715: {
    income: 2.57E+22,
    commonCost: 2.30E+34,
    rareCost: 3.22E+34,
    legendaryCost: 2.59E+34
  },
  1716: {
    income: 2.66E+22,
    commonCost: 2.40E+34,
    rareCost: 3.36E+34,
    legendaryCost: 2.73E+34
  },
  1717: {
    income: 2.74E+22,
    commonCost: 2.50E+34,
    rareCost: 3.51E+34,
    legendaryCost: 2.86E+34
  },
  1718: {
    income: 2.83E+22,
    commonCost: 2.61E+34,
    rareCost: 3.65E+34,
    legendaryCost: 3.01E+34
  },
  1719: {
    income: 2.92E+22,
    commonCost: 2.72E+34,
    rareCost: 3.81E+34,
    legendaryCost: 3.15E+34
  },
  1720: {
    income: 3.00E+22,
    commonCost: 2.83E+34,
    rareCost: 3.96E+34,
    legendaryCost: 3.31E+34
  },
  1721: {
    income: 3.12E+22,
    commonCost: 2.97E+34,
    rareCost: 4.16E+34,
    legendaryCost: 3.50E+34
  },
  1722: {
    income: 3.25E+22,
    commonCost: 3.12E+34,
    rareCost: 4.37E+34,
    legendaryCost: 3.70E+34
  },
  1723: {
    income: 3.37E+22,
    commonCost: 3.27E+34,
    rareCost: 4.58E+34,
    legendaryCost: 3.91E+34
  },
  1724: {
    income: 3.49E+22,
    commonCost: 3.42E+34,
    rareCost: 4.79E+34,
    legendaryCost: 4.12E+34
  },
  1725: {
    income: 3.61E+22,
    commonCost: 3.58E+34,
    rareCost: 5.01E+34,
    legendaryCost: 4.34E+34
  },
  1726: {
    income: 3.73E+22,
    commonCost: 3.74E+34,
    rareCost: 5.23E+34,
    legendaryCost: 4.56E+34
  },
  1727: {
    income: 3.85E+22,
    commonCost: 3.90E+34,
    rareCost: 5.46E+34,
    legendaryCost: 4.79E+34
  },
  1728: {
    income: 3.98E+22,
    commonCost: 4.06E+34,
    rareCost: 5.69E+34,
    legendaryCost: 5.02E+34
  },
  1729: {
    income: 4.10E+22,
    commonCost: 4.23E+34,
    rareCost: 5.92E+34,
    legendaryCost: 5.27E+34
  },
  1730: {
    income: 4.22E+22,
    commonCost: 4.40E+34,
    rareCost: 6.16E+34,
    legendaryCost: 5.51E+34
  },
  1731: {
    income: 4.39E+22,
    commonCost: 4.62E+34,
    rareCost: 6.47E+34,
    legendaryCost: 5.83E+34
  },
  1732: {
    income: 4.56E+22,
    commonCost: 4.85E+34,
    rareCost: 6.79E+34,
    legendaryCost: 6.16E+34
  },
  1733: {
    income: 4.74E+22,
    commonCost: 5.08E+34,
    rareCost: 7.12E+34,
    legendaryCost: 6.50E+34
  },
  1734: {
    income: 4.91E+22,
    commonCost: 5.32E+34,
    rareCost: 7.45E+34,
    legendaryCost: 6.85E+34
  },
  1735: {
    income: 5.08E+22,
    commonCost: 5.56E+34,
    rareCost: 7.78E+34,
    legendaryCost: 7.21E+34
  },
  1736: {
    income: 5.25E+22,
    commonCost: 5.80E+34,
    rareCost: 8.12E+34,
    legendaryCost: 7.58E+34
  },
  1737: {
    income: 5.42E+22,
    commonCost: 6.05E+34,
    rareCost: 8.47E+34,
    legendaryCost: 7.95E+34
  },
  1738: {
    income: 5.59E+22,
    commonCost: 6.30E+34,
    rareCost: 8.82E+34,
    legendaryCost: 8.34E+34
  },
  1739: {
    income: 5.77E+22,
    commonCost: 6.56E+34,
    rareCost: 9.18E+34,
    legendaryCost: 8.74E+34
  },
  1740: {
    income: 5.94E+22,
    commonCost: 6.82E+34,
    rareCost: 9.55E+34,
    legendaryCost: 9.14E+34
  },
  1741: {
    income: 6.18E+22,
    commonCost: 7.17E+34,
    rareCost: 1.00E+35,
    legendaryCost: 9.67E+34
  },
  1742: {
    income: 6.42E+22,
    commonCost: 7.52E+34,
    rareCost: 1.05E+35,
    legendaryCost: 1.02E+35
  },
  1743: {
    income: 6.67E+22,
    commonCost: 7.88E+34,
    rareCost: 1.10E+35,
    legendaryCost: 1.08E+35
  },
  1744: {
    income: 6.91E+22,
    commonCost: 8.24E+34,
    rareCost: 1.15E+35,
    legendaryCost: 1.13E+35
  },
  1745: {
    income: 7.15E+22,
    commonCost: 8.61E+34,
    rareCost: 1.21E+35,
    legendaryCost: 1.19E+35
  },
  1746: {
    income: 7.39E+22,
    commonCost: 8.98E+34,
    rareCost: 1.26E+35,
    legendaryCost: 1.25E+35
  },
  1747: {
    income: 7.63E+22,
    commonCost: 9.37E+34,
    rareCost: 1.31E+35,
    legendaryCost: 1.31E+35
  },
  1748: {
    income: 7.88E+22,
    commonCost: 9.75E+34,
    rareCost: 1.37E+35,
    legendaryCost: 1.38E+35
  },
  1749: {
    income: 8.12E+22,
    commonCost: 1.01E+35,
    rareCost: 1.42E+35,
    legendaryCost: 1.44E+35
  },
  1750: {
    income: 8.36E+22,
    commonCost: 1.05E+35,
    rareCost: 1.48E+35,
    legendaryCost: 1.51E+35
  },
  1751: {
    income: 8.70E+22,
    commonCost: 1.11E+35,
    rareCost: 1.55E+35,
    legendaryCost: 1.59E+35
  },
  1752: {
    income: 9.05E+22,
    commonCost: 1.16E+35,
    rareCost: 1.63E+35,
    legendaryCost: 1.68E+35
  },
  1753: {
    income: 9.39E+22,
    commonCost: 1.22E+35,
    rareCost: 1.70E+35,
    legendaryCost: 1.77E+35
  },
  1754: {
    income: 9.73E+22,
    commonCost: 1.27E+35,
    rareCost: 1.78E+35,
    legendaryCost: 1.87E+35
  },
  1755: {
    income: 1.01E+23,
    commonCost: 1.33E+35,
    rareCost: 1.86E+35,
    legendaryCost: 1.96E+35
  },
  1756: {
    income: 1.04E+23,
    commonCost: 1.39E+35,
    rareCost: 1.94E+35,
    legendaryCost: 2.06E+35
  },
  1757: {
    income: 1.08E+23,
    commonCost: 1.45E+35,
    rareCost: 2.02E+35,
    legendaryCost: 2.16E+35
  },
  1758: {
    income: 1.11E+23,
    commonCost: 1.51E+35,
    rareCost: 2.11E+35,
    legendaryCost: 2.26E+35
  },
  1759: {
    income: 1.14E+23,
    commonCost: 1.57E+35,
    rareCost: 2.19E+35,
    legendaryCost: 2.37E+35
  },
  1760: {
    income: 1.18E+23,
    commonCost: 1.63E+35,
    rareCost: 2.28E+35,
    legendaryCost: 2.48E+35
  },
  1761: {
    income: 1.23E+23,
    commonCost: 1.71E+35,
    rareCost: 2.39E+35,
    legendaryCost: 2.62E+35
  },
  1762: {
    income: 1.27E+23,
    commonCost: 1.79E+35,
    rareCost: 2.51E+35,
    legendaryCost: 2.76E+35
  },
  1763: {
    income: 1.32E+23,
    commonCost: 1.88E+35,
    rareCost: 2.63E+35,
    legendaryCost: 2.91E+35
  },
  1764: {
    income: 1.37E+23,
    commonCost: 1.96E+35,
    rareCost: 2.75E+35,
    legendaryCost: 3.06E+35
  },
  1765: {
    income: 1.42E+23,
    commonCost: 2.05E+35,
    rareCost: 2.87E+35,
    legendaryCost: 3.21E+35
  },
  1766: {
    income: 1.47E+23,
    commonCost: 2.14E+35,
    rareCost: 2.99E+35,
    legendaryCost: 3.37E+35
  },
  1767: {
    income: 1.52E+23,
    commonCost: 2.23E+35,
    rareCost: 3.12E+35,
    legendaryCost: 3.53E+35
  },
  1768: {
    income: 1.56E+23,
    commonCost: 2.32E+35,
    rareCost: 3.25E+35,
    legendaryCost: 3.70E+35
  },
  1769: {
    income: 1.61E+23,
    commonCost: 2.41E+35,
    rareCost: 3.38E+35,
    legendaryCost: 3.87E+35
  },
  1770: {
    income: 1.66E+23,
    commonCost: 2.51E+35,
    rareCost: 3.51E+35,
    legendaryCost: 4.05E+35
  },
  1771: {
    income: 1.73E+23,
    commonCost: 2.63E+35,
    rareCost: 3.68E+35,
    legendaryCost: 4.27E+35
  },
  1772: {
    income: 1.80E+23,
    commonCost: 2.76E+35,
    rareCost: 3.86E+35,
    legendaryCost: 4.51E+35
  },
  1773: {
    income: 1.87E+23,
    commonCost: 2.89E+35,
    rareCost: 4.04E+35,
    legendaryCost: 4.75E+35
  },
  1774: {
    income: 1.93E+23,
    commonCost: 3.02E+35,
    rareCost: 4.23E+35,
    legendaryCost: 4.99E+35
  },
  1775: {
    income: 2.00E+23,
    commonCost: 3.15E+35,
    rareCost: 4.41E+35,
    legendaryCost: 5.24E+35
  },
  1776: {
    income: 2.07E+23,
    commonCost: 3.29E+35,
    rareCost: 4.60E+35,
    legendaryCost: 5.50E+35
  },
  1777: {
    income: 2.14E+23,
    commonCost: 3.43E+35,
    rareCost: 4.80E+35,
    legendaryCost: 5.76E+35
  },
  1778: {
    income: 2.21E+23,
    commonCost: 3.56E+35,
    rareCost: 4.99E+35,
    legendaryCost: 6.03E+35
  },
  1779: {
    income: 2.28E+23,
    commonCost: 3.71E+35,
    rareCost: 5.19E+35,
    legendaryCost: 6.30E+35
  },
  1780: {
    income: 2.34E+23,
    commonCost: 3.85E+35,
    rareCost: 5.39E+35,
    legendaryCost: 6.59E+35
  },
  1781: {
    income: 2.44E+23,
    commonCost: 4.04E+35,
    rareCost: 5.66E+35,
    legendaryCost: 6.95E+35
  },
  1782: {
    income: 2.54E+23,
    commonCost: 4.24E+35,
    rareCost: 5.93E+35,
    legendaryCost: 7.33E+35
  },
  1783: {
    income: 2.63E+23,
    commonCost: 4.44E+35,
    rareCost: 6.21E+35,
    legendaryCost: 7.72E+35
  },
  1784: {
    income: 2.73E+23,
    commonCost: 4.64E+35,
    rareCost: 6.49E+35,
    legendaryCost: 8.11E+35
  },
  1785: {
    income: 2.83E+23,
    commonCost: 4.84E+35,
    rareCost: 6.78E+35,
    legendaryCost: 8.52E+35
  },
  1786: {
    income: 2.92E+23,
    commonCost: 5.05E+35,
    rareCost: 7.07E+35,
    legendaryCost: 8.93E+35
  },
  1787: {
    income: 3.02E+23,
    commonCost: 5.26E+35,
    rareCost: 7.36E+35,
    legendaryCost: 9.36E+35
  },
  1788: {
    income: 3.12E+23,
    commonCost: 5.47E+35,
    rareCost: 7.66E+35,
    legendaryCost: 9.79E+35
  },
  1789: {
    income: 3.21E+23,
    commonCost: 5.69E+35,
    rareCost: 7.96E+35,
    legendaryCost: 1.02E+36
  },
  1790: {
    income: 3.31E+23,
    commonCost: 5.91E+35,
    rareCost: 8.27E+35,
    legendaryCost: 1.07E+36
  },
  1791: {
    income: 3.45E+23,
    commonCost: 6.20E+35,
    rareCost: 8.68E+35,
    legendaryCost: 1.13E+36
  },
  1792: {
    income: 3.58E+23,
    commonCost: 6.50E+35,
    rareCost: 9.10E+35,
    legendaryCost: 1.19E+36
  },
  1793: {
    income: 3.72E+23,
    commonCost: 6.80E+35,
    rareCost: 9.52E+35,
    legendaryCost: 1.25E+36
  },
  1794: {
    income: 3.86E+23,
    commonCost: 7.11E+35,
    rareCost: 9.95E+35,
    legendaryCost: 1.31E+36
  },
  1795: {
    income: 3.99E+23,
    commonCost: 7.42E+35,
    rareCost: 1.04E+36,
    legendaryCost: 1.38E+36
  },
  1796: {
    income: 4.13E+23,
    commonCost: 7.74E+35,
    rareCost: 1.08E+36,
    legendaryCost: 1.45E+36
  },
  1797: {
    income: 4.27E+23,
    commonCost: 8.08E+35,
    rareCost: 1.13E+36,
    legendaryCost: 1.52E+36
  },
  1798: {
    income: 4.40E+23,
    commonCost: 8.44E+35,
    rareCost: 1.18E+36,
    legendaryCost: 1.60E+36
  },
  1799: {
    income: 4.54E+23,
    commonCost: 8.81E+35,
    rareCost: 1.23E+36,
    legendaryCost: 1.67E+36
  },
  1800: {
    income: 4.68E+23,
    commonCost: 9.19E+35,
    rareCost: 1.29E+36,
    legendaryCost: 1.75E+36
  },
  1801: {
    income: 4.87E+23,
    commonCost: 9.69E+35,
    rareCost: 1.36E+36,
    legendaryCost: 1.84E+36
  },
  1802: {
    income: 5.06E+23,
    commonCost: 1.02E+36,
    rareCost: 1.43E+36,
    legendaryCost: 1.94E+36
  },
  1803: {
    income: 5.26E+23,
    commonCost: 1.07E+36,
    rareCost: 1.50E+36,
    legendaryCost: 2.03E+36
  },
  1804: {
    income: 5.45E+23,
    commonCost: 1.12E+36,
    rareCost: 1.57E+36,
    legendaryCost: 2.13E+36
  },
  1805: {
    income: 5.64E+23,
    commonCost: 1.18E+36,
    rareCost: 1.65E+36,
    legendaryCost: 2.24E+36
  },
  1806: {
    income: 5.84E+23,
    commonCost: 1.23E+36,
    rareCost: 1.72E+36,
    legendaryCost: 2.34E+36
  },
  1807: {
    income: 6.03E+23,
    commonCost: 1.29E+36,
    rareCost: 1.80E+36,
    legendaryCost: 2.45E+36
  },
  1808: {
    income: 6.23E+23,
    commonCost: 1.34E+36,
    rareCost: 1.88E+36,
    legendaryCost: 2.55E+36
  },
  1809: {
    income: 6.42E+23,
    commonCost: 1.40E+36,
    rareCost: 1.96E+36,
    legendaryCost: 2.66E+36
  },
  1810: {
    income: 6.61E+23,
    commonCost: 1.46E+36,
    rareCost: 2.05E+36,
    legendaryCost: 2.78E+36
  },
  1811: {
    income: 6.89E+23,
    commonCost: 1.54E+36,
    rareCost: 2.15E+36,
    legendaryCost: 2.92E+36
  },
  1812: {
    income: 7.16E+23,
    commonCost: 1.62E+36,
    rareCost: 2.27E+36,
    legendaryCost: 3.08E+36
  },
  1813: {
    income: 7.44E+23,
    commonCost: 1.70E+36,
    rareCost: 2.38E+36,
    legendaryCost: 3.23E+36
  },
  1814: {
    income: 7.71E+23,
    commonCost: 1.78E+36,
    rareCost: 2.50E+36,
    legendaryCost: 3.39E+36
  },
  1815: {
    income: 7.98E+23,
    commonCost: 1.87E+36,
    rareCost: 2.61E+36,
    legendaryCost: 3.55E+36
  },
  1816: {
    income: 8.26E+23,
    commonCost: 1.95E+36,
    rareCost: 2.73E+36,
    legendaryCost: 3.71E+36
  },
  1817: {
    income: 8.53E+23,
    commonCost: 2.04E+36,
    rareCost: 2.85E+36,
    legendaryCost: 3.87E+36
  },
  1818: {
    income: 8.81E+23,
    commonCost: 2.13E+36,
    rareCost: 2.98E+36,
    legendaryCost: 4.04E+36
  },
  1819: {
    income: 9.08E+23,
    commonCost: 2.22E+36,
    rareCost: 3.11E+36,
    legendaryCost: 4.21E+36
  },
  1820: {
    income: 9.36E+23,
    commonCost: 2.31E+36,
    rareCost: 3.23E+36,
    legendaryCost: 4.39E+36
  },
  1821: {
    income: 9.75E+23,
    commonCost: 2.43E+36,
    rareCost: 3.41E+36,
    legendaryCost: 4.62E+36
  },
  1822: {
    income: 1.01E+24,
    commonCost: 2.56E+36,
    rareCost: 3.58E+36,
    legendaryCost: 4.86E+36
  },
  1823: {
    income: 1.05E+24,
    commonCost: 2.68E+36,
    rareCost: 3.76E+36,
    legendaryCost: 5.10E+36
  },
  1824: {
    income: 1.09E+24,
    commonCost: 2.81E+36,
    rareCost: 3.94E+36,
    legendaryCost: 5.34E+36
  },
  1825: {
    income: 1.13E+24,
    commonCost: 2.94E+36,
    rareCost: 4.12E+36,
    legendaryCost: 5.59E+36
  },
  1826: {
    income: 1.17E+24,
    commonCost: 3.08E+36,
    rareCost: 4.31E+36,
    legendaryCost: 5.85E+36
  },
  1827: {
    income: 1.21E+24,
    commonCost: 3.21E+36,
    rareCost: 4.50E+36,
    legendaryCost: 6.10E+36
  },
  1828: {
    income: 1.25E+24,
    commonCost: 3.35E+36,
    rareCost: 4.69E+36,
    legendaryCost: 6.37E+36
  },
  1829: {
    income: 1.29E+24,
    commonCost: 3.49E+36,
    rareCost: 4.89E+36,
    legendaryCost: 6.63E+36
  },
  1830: {
    income: 1.32E+24,
    commonCost: 3.64E+36,
    rareCost: 5.09E+36,
    legendaryCost: 6.91E+36
  },
  1831: {
    income: 1.38E+24,
    commonCost: 3.83E+36,
    rareCost: 5.36E+36,
    legendaryCost: 7.27E+36
  },
  1832: {
    income: 1.44E+24,
    commonCost: 4.02E+36,
    rareCost: 5.63E+36,
    legendaryCost: 7.64E+36
  },
  1833: {
    income: 1.49E+24,
    commonCost: 4.22E+36,
    rareCost: 5.90E+36,
    legendaryCost: 8.01E+36
  },
  1834: {
    income: 1.55E+24,
    commonCost: 4.42E+36,
    rareCost: 6.19E+36,
    legendaryCost: 8.39E+36
  },
  1835: {
    income: 1.60E+24,
    commonCost: 4.62E+36,
    rareCost: 6.47E+36,
    legendaryCost: 8.78E+36
  },
  1836: {
    income: 1.66E+24,
    commonCost: 4.83E+36,
    rareCost: 6.76E+36,
    legendaryCost: 9.18E+36
  },
  1837: {
    income: 1.71E+24,
    commonCost: 5.04E+36,
    rareCost: 7.06E+36,
    legendaryCost: 9.58E+36
  },
  1838: {
    income: 1.77E+24,
    commonCost: 5.26E+36,
    rareCost: 7.36E+36,
    legendaryCost: 9.99E+36
  },
  1839: {
    income: 1.82E+24,
    commonCost: 5.47E+36,
    rareCost: 7.66E+36,
    legendaryCost: 1.04E+37
  },
  1840: {
    income: 1.88E+24,
    commonCost: 5.70E+36,
    rareCost: 7.98E+36,
    legendaryCost: 1.08E+37
  },
  1841: {
    income: 1.96E+24,
    commonCost: 5.99E+36,
    rareCost: 8.39E+36,
    legendaryCost: 1.14E+37
  },
  1842: {
    income: 2.03E+24,
    commonCost: 6.30E+36,
    rareCost: 8.81E+36,
    legendaryCost: 1.20E+37
  },
  1843: {
    income: 2.11E+24,
    commonCost: 6.60E+36,
    rareCost: 9.24E+36,
    legendaryCost: 1.25E+37
  },
  1844: {
    income: 2.19E+24,
    commonCost: 6.91E+36,
    rareCost: 9.68E+36,
    legendaryCost: 1.31E+37
  },
  1845: {
    income: 2.27E+24,
    commonCost: 7.23E+36,
    rareCost: 1.01E+37,
    legendaryCost: 1.37E+37
  },
  1846: {
    income: 2.35E+24,
    commonCost: 7.55E+36,
    rareCost: 1.06E+37,
    legendaryCost: 1.44E+37
  },
  1847: {
    income: 2.43E+24,
    commonCost: 7.88E+36,
    rareCost: 1.10E+37,
    legendaryCost: 1.50E+37
  },
  1848: {
    income: 2.51E+24,
    commonCost: 8.21E+36,
    rareCost: 1.15E+37,
    legendaryCost: 1.56E+37
  },
  1849: {
    income: 2.58E+24,
    commonCost: 8.55E+36,
    rareCost: 1.20E+37,
    legendaryCost: 1.62E+37
  },
  1850: {
    income: 2.66E+24,
    commonCost: 8.90E+36,
    rareCost: 1.25E+37,
    legendaryCost: 1.69E+37
  },
  1851: {
    income: 2.77E+24,
    commonCost: 9.36E+36,
    rareCost: 1.31E+37,
    legendaryCost: 1.78E+37
  },
  1852: {
    income: 2.89E+24,
    commonCost: 9.82E+36,
    rareCost: 1.38E+37,
    legendaryCost: 1.87E+37
  },
  1853: {
    income: 3.00E+24,
    commonCost: 1.03E+37,
    rareCost: 1.44E+37,
    legendaryCost: 1.96E+37
  },
  1854: {
    income: 3.11E+24,
    commonCost: 1.08E+37,
    rareCost: 1.51E+37,
    legendaryCost: 2.05E+37
  },
  1855: {
    income: 3.22E+24,
    commonCost: 1.13E+37,
    rareCost: 1.58E+37,
    legendaryCost: 2.14E+37
  },
  1856: {
    income: 3.33E+24,
    commonCost: 1.18E+37,
    rareCost: 1.65E+37,
    legendaryCost: 2.24E+37
  },
  1857: {
    income: 3.44E+24,
    commonCost: 1.23E+37,
    rareCost: 1.72E+37,
    legendaryCost: 2.33E+37
  },
  1858: {
    income: 3.55E+24,
    commonCost: 1.28E+37,
    rareCost: 1.79E+37,
    legendaryCost: 2.43E+37
  },
  1859: {
    income: 3.67E+24,
    commonCost: 1.33E+37,
    rareCost: 1.86E+37,
    legendaryCost: 2.53E+37
  },
  1860: {
    income: 3.78E+24,
    commonCost: 1.38E+37,
    rareCost: 1.94E+37,
    legendaryCost: 2.63E+37
  },
  1861: {
    income: 3.94E+24,
    commonCost: 1.46E+37,
    rareCost: 2.04E+37,
    legendaryCost: 2.77E+37
  },
  1862: {
    income: 4.09E+24,
    commonCost: 1.53E+37,
    rareCost: 2.14E+37,
    legendaryCost: 2.90E+37
  },
  1863: {
    income: 4.25E+24,
    commonCost: 1.60E+37,
    rareCost: 2.24E+37,
    legendaryCost: 3.04E+37
  },
  1864: {
    income: 4.41E+24,
    commonCost: 1.68E+37,
    rareCost: 2.35E+37,
    legendaryCost: 3.19E+37
  },
  1865: {
    income: 4.57E+24,
    commonCost: 1.75E+37,
    rareCost: 2.45E+37,
    legendaryCost: 3.33E+37
  },
  1866: {
    income: 4.73E+24,
    commonCost: 1.83E+37,
    rareCost: 2.56E+37,
    legendaryCost: 3.48E+37
  },
  1867: {
    income: 4.89E+24,
    commonCost: 1.91E+37,
    rareCost: 2.67E+37,
    legendaryCost: 3.63E+37
  },
  1868: {
    income: 5.05E+24,
    commonCost: 1.99E+37,
    rareCost: 2.78E+37,
    legendaryCost: 3.78E+37
  },
  1869: {
    income: 5.21E+24,
    commonCost: 2.07E+37,
    rareCost: 2.90E+37,
    legendaryCost: 3.93E+37
  },
  1870: {
    income: 5.36E+24,
    commonCost: 2.15E+37,
    rareCost: 3.01E+37,
    legendaryCost: 4.09E+37
  },
  1871: {
    income: 5.59E+24,
    commonCost: 2.26E+37,
    rareCost: 3.16E+37,
    legendaryCost: 4.29E+37
  },
  1872: {
    income: 5.82E+24,
    commonCost: 2.37E+37,
    rareCost: 3.32E+37,
    legendaryCost: 4.51E+37
  },
  1873: {
    income: 6.04E+24,
    commonCost: 2.49E+37,
    rareCost: 3.48E+37,
    legendaryCost: 4.72E+37
  },
  1874: {
    income: 6.27E+24,
    commonCost: 2.60E+37,
    rareCost: 3.64E+37,
    legendaryCost: 4.94E+37
  },
  1875: {
    income: 6.49E+24,
    commonCost: 2.72E+37,
    rareCost: 3.81E+37,
    legendaryCost: 5.16E+37
  },
  1876: {
    income: 6.72E+24,
    commonCost: 2.84E+37,
    rareCost: 3.97E+37,
    legendaryCost: 5.39E+37
  },
  1877: {
    income: 6.94E+24,
    commonCost: 2.96E+37,
    rareCost: 4.14E+37,
    legendaryCost: 5.62E+37
  },
  1878: {
    income: 7.17E+24,
    commonCost: 3.08E+37,
    rareCost: 4.31E+37,
    legendaryCost: 5.85E+37
  },
  1879: {
    income: 7.40E+24,
    commonCost: 3.20E+37,
    rareCost: 4.49E+37,
    legendaryCost: 6.09E+37
  },
  1880: {
    income: 7.62E+24,
    commonCost: 3.33E+37,
    rareCost: 4.66E+37,
    legendaryCost: 6.33E+37
  },
  1881: {
    income: 7.94E+24,
    commonCost: 3.50E+37,
    rareCost: 4.90E+37,
    legendaryCost: 6.65E+37
  },
  1882: {
    income: 8.27E+24,
    commonCost: 3.67E+37,
    rareCost: 5.14E+37,
    legendaryCost: 6.98E+37
  },
  1883: {
    income: 8.59E+24,
    commonCost: 3.85E+37,
    rareCost: 5.39E+37,
    legendaryCost: 7.31E+37
  },
  1884: {
    income: 8.91E+24,
    commonCost: 4.03E+37,
    rareCost: 5.64E+37,
    legendaryCost: 7.65E+37
  },
  1885: {
    income: 9.23E+24,
    commonCost: 4.21E+37,
    rareCost: 5.89E+37,
    legendaryCost: 7.99E+37
  },
  1886: {
    income: 9.55E+24,
    commonCost: 4.39E+37,
    rareCost: 6.14E+37,
    legendaryCost: 8.34E+37
  },
  1887: {
    income: 9.87E+24,
    commonCost: 4.57E+37,
    rareCost: 6.40E+37,
    legendaryCost: 8.69E+37
  },
  1888: {
    income: 1.02E+25,
    commonCost: 4.76E+37,
    rareCost: 6.67E+37,
    legendaryCost: 9.05E+37
  },
  1889: {
    income: 1.05E+25,
    commonCost: 4.95E+37,
    rareCost: 6.94E+37,
    legendaryCost: 9.41E+37
  },
  1890: {
    income: 1.08E+25,
    commonCost: 5.15E+37,
    rareCost: 7.21E+37,
    legendaryCost: 9.78E+37
  },
  1891: {
    income: 1.13E+25,
    commonCost: 5.41E+37,
    rareCost: 7.57E+37,
    legendaryCost: 1.03E+38
  },
  1892: {
    income: 1.18E+25,
    commonCost: 5.68E+37,
    rareCost: 7.95E+37,
    legendaryCost: 1.08E+38
  },
  1893: {
    income: 1.22E+25,
    commonCost: 5.94E+37,
    rareCost: 8.32E+37,
    legendaryCost: 1.13E+38
  },
  1894: {
    income: 1.27E+25,
    commonCost: 6.22E+37,
    rareCost: 8.71E+37,
    legendaryCost: 1.18E+38
  },
  1895: {
    income: 1.31E+25,
    commonCost: 6.50E+37,
    rareCost: 9.09E+37,
    legendaryCost: 1.23E+38
  },
  1896: {
    income: 1.36E+25,
    commonCost: 6.78E+37,
    rareCost: 9.49E+37,
    legendaryCost: 1.29E+38
  },
  1897: {
    income: 1.40E+25,
    commonCost: 7.06E+37,
    rareCost: 9.89E+37,
    legendaryCost: 1.34E+38
  },
  1898: {
    income: 1.45E+25,
    commonCost: 7.35E+37,
    rareCost: 1.03E+38,
    legendaryCost: 1.40E+38
  },
  1899: {
    income: 1.50E+25,
    commonCost: 7.64E+37,
    rareCost: 1.07E+38,
    legendaryCost: 1.45E+38
  },
  1900: {
    income: 1.54E+25,
    commonCost: 7.91E+37,
    rareCost: 1.11E+38,
    legendaryCost: 1.50E+38
  },
  1901: {
    income: 1.61E+25,
    commonCost: 8.26E+37,
    rareCost: 1.16E+38,
    legendaryCost: 1.57E+38
  },
  1902: {
    income: 1.67E+25,
    commonCost: 8.61E+37,
    rareCost: 1.21E+38,
    legendaryCost: 1.64E+38
  },
  1903: {
    income: 1.74E+25,
    commonCost: 8.97E+37,
    rareCost: 1.26E+38,
    legendaryCost: 1.70E+38
  },
  1904: {
    income: 1.80E+25,
    commonCost: 9.33E+37,
    rareCost: 1.31E+38,
    legendaryCost: 1.77E+38
  },
  1905: {
    income: 1.87E+25,
    commonCost: 9.69E+37,
    rareCost: 1.36E+38,
    legendaryCost: 1.84E+38
  },
  1906: {
    income: 1.93E+25,
    commonCost: 1.00E+38,
    rareCost: 1.41E+38,
    legendaryCost: 1.91E+38
  },
  1907: {
    income: 2.00E+25,
    commonCost: 1.04E+38,
    rareCost: 1.46E+38,
    legendaryCost: 1.98E+38
  },
  1908: {
    income: 2.07E+25,
    commonCost: 1.08E+38,
    rareCost: 1.51E+38,
    legendaryCost: 2.05E+38
  },
  1909: {
    income: 2.13E+25,
    commonCost: 1.11E+38,
    rareCost: 1.56E+38,
    legendaryCost: 2.12E+38
  },
  1910: {
    income: 2.20E+25,
    commonCost: 1.15E+38,
    rareCost: 1.61E+38,
    legendaryCost: 2.19E+38
  },
  1911: {
    income: 2.29E+25,
    commonCost: 1.20E+38,
    rareCost: 1.68E+38,
    legendaryCost: 2.28E+38
  },
  1912: {
    income: 2.38E+25,
    commonCost: 1.25E+38,
    rareCost: 1.75E+38,
    legendaryCost: 2.38E+38
  },
  1913: {
    income: 2.48E+25,
    commonCost: 1.31E+38,
    rareCost: 1.83E+38,
    legendaryCost: 2.48E+38
  },
  1914: {
    income: 2.57E+25,
    commonCost: 1.36E+38,
    rareCost: 1.90E+38,
    legendaryCost: 2.58E+38
  },
  1915: {
    income: 2.66E+25,
    commonCost: 1.41E+38,
    rareCost: 1.97E+38,
    legendaryCost: 2.68E+38
  },
  1916: {
    income: 2.76E+25,
    commonCost: 1.46E+38,
    rareCost: 2.05E+38,
    legendaryCost: 2.78E+38
  },
  1917: {
    income: 2.85E+25,
    commonCost: 1.51E+38,
    rareCost: 2.12E+38,
    legendaryCost: 2.88E+38
  },
  1918: {
    income: 2.94E+25,
    commonCost: 1.57E+38,
    rareCost: 2.19E+38,
    legendaryCost: 2.98E+38
  },
  1919: {
    income: 3.04E+25,
    commonCost: 1.62E+38,
    rareCost: 2.27E+38,
    legendaryCost: 3.08E+38
  },
  1920: {
    income: 3.13E+25,
    commonCost: 1.67E+38,
    rareCost: 2.34E+38,
    legendaryCost: 3.18E+38
  },
  1921: {
    income: 3.26E+25,
    commonCost: 1.75E+38,
    rareCost: 2.45E+38,
    legendaryCost: 3.32E+38
  },
  1922: {
    income: 3.40E+25,
    commonCost: 1.82E+38,
    rareCost: 2.55E+38,
    legendaryCost: 3.47E+38
  },
  1923: {
    income: 3.53E+25,
    commonCost: 1.90E+38,
    rareCost: 2.66E+38,
    legendaryCost: 3.61E+38
  },
  1924: {
    income: 3.66E+25,
    commonCost: 1.98E+38,
    rareCost: 2.77E+38,
    legendaryCost: 3.75E+38
  },
  1925: {
    income: 3.80E+25,
    commonCost: 2.05E+38,
    rareCost: 2.87E+38,
    legendaryCost: 3.90E+38
  },
  1926: {
    income: 3.93E+25,
    commonCost: 2.13E+38,
    rareCost: 2.98E+38,
    legendaryCost: 4.04E+38
  },
  1927: {
    income: 4.06E+25,
    commonCost: 2.21E+38,
    rareCost: 3.09E+38,
    legendaryCost: 4.19E+38
  },
  1928: {
    income: 4.20E+25,
    commonCost: 2.28E+38,
    rareCost: 3.20E+38,
    legendaryCost: 4.34E+38
  },
  1929: {
    income: 4.33E+25,
    commonCost: 2.36E+38,
    rareCost: 3.30E+38,
    legendaryCost: 4.48E+38
  },
  1930: {
    income: 4.46E+25,
    commonCost: 2.44E+38,
    rareCost: 3.41E+38,
    legendaryCost: 4.63E+38
  },
  1931: {
    income: 4.65E+25,
    commonCost: 2.55E+38,
    rareCost: 3.57E+38,
    legendaryCost: 4.84E+38
  },
  1932: {
    income: 4.84E+25,
    commonCost: 2.66E+38,
    rareCost: 3.72E+38,
    legendaryCost: 5.05E+38
  },
  1933: {
    income: 5.03E+25,
    commonCost: 2.77E+38,
    rareCost: 3.87E+38,
    legendaryCost: 5.26E+38
  },
  1934: {
    income: 5.23E+25,
    commonCost: 2.88E+38,
    rareCost: 4.03E+38,
    legendaryCost: 5.47E+38
  },
  1935: {
    income: 5.42E+25,
    commonCost: 2.99E+38,
    rareCost: 4.18E+38,
    legendaryCost: 5.68E+38
  },
  1936: {
    income: 5.61E+25,
    commonCost: 3.10E+38,
    rareCost: 4.34E+38,
    legendaryCost: 5.89E+38
  },
  1937: {
    income: 5.80E+25,
    commonCost: 3.21E+38,
    rareCost: 4.50E+38,
    legendaryCost: 6.10E+38
  },
  1938: {
    income: 5.99E+25,
    commonCost: 3.33E+38,
    rareCost: 4.66E+38,
    legendaryCost: 6.32E+38
  },
  1939: {
    income: 6.18E+25,
    commonCost: 3.44E+38,
    rareCost: 4.81E+38,
    legendaryCost: 6.53E+38
  },
  1940: {
    income: 6.37E+25,
    commonCost: 3.55E+38,
    rareCost: 4.97E+38,
    legendaryCost: 6.75E+38
  },
  1941: {
    income: 6.64E+25,
    commonCost: 3.71E+38,
    rareCost: 5.20E+38,
    legendaryCost: 7.05E+38
  },
  1942: {
    income: 6.91E+25,
    commonCost: 3.87E+38,
    rareCost: 5.42E+38,
    legendaryCost: 7.36E+38
  },
  1943: {
    income: 7.19E+25,
    commonCost: 4.03E+38,
    rareCost: 5.65E+38,
    legendaryCost: 7.66E+38
  },
  1944: {
    income: 7.46E+25,
    commonCost: 4.19E+38,
    rareCost: 5.87E+38,
    legendaryCost: 7.97E+38
  },
  1945: {
    income: 7.73E+25,
    commonCost: 4.36E+38,
    rareCost: 6.10E+38,
    legendaryCost: 8.28E+38
  },
  1946: {
    income: 8.00E+25,
    commonCost: 4.52E+38,
    rareCost: 6.33E+38,
    legendaryCost: 8.59E+38
  },
  1947: {
    income: 8.28E+25,
    commonCost: 4.68E+38,
    rareCost: 6.56E+38,
    legendaryCost: 8.90E+38
  },
  1948: {
    income: 8.55E+25,
    commonCost: 4.85E+38,
    rareCost: 6.78E+38,
    legendaryCost: 9.21E+38
  },
  1949: {
    income: 8.82E+25,
    commonCost: 5.01E+38,
    rareCost: 7.02E+38,
    legendaryCost: 9.52E+38
  },
  1950: {
    income: 9.09E+25,
    commonCost: 5.18E+38,
    rareCost: 7.25E+38,
    legendaryCost: 9.84E+38
  },
  1951: {
    income: 9.48E+25,
    commonCost: 5.41E+38,
    rareCost: 7.57E+38,
    legendaryCost: 1.03E+39
  },
  1952: {
    income: 9.87E+25,
    commonCost: 5.64E+38,
    rareCost: 7.90E+38,
    legendaryCost: 1.07E+39
  },
  1953: {
    income: 1.03E+26,
    commonCost: 5.88E+38,
    rareCost: 8.23E+38,
    legendaryCost: 1.12E+39
  },
  1954: {
    income: 1.07E+26,
    commonCost: 6.11E+38,
    rareCost: 8.56E+38,
    legendaryCost: 1.16E+39
  },
  1955: {
    income: 1.10E+26,
    commonCost: 6.35E+38,
    rareCost: 8.89E+38,
    legendaryCost: 1.21E+39
  },
  1956: {
    income: 1.14E+26,
    commonCost: 6.59E+38,
    rareCost: 9.22E+38,
    legendaryCost: 1.25E+39
  },
  1957: {
    income: 1.18E+26,
    commonCost: 6.83E+38,
    rareCost: 9.56E+38,
    legendaryCost: 1.30E+39
  },
  1958: {
    income: 1.22E+26,
    commonCost: 7.07E+38,
    rareCost: 9.89E+38,
    legendaryCost: 1.34E+39
  },
  1959: {
    income: 1.26E+26,
    commonCost: 7.31E+38,
    rareCost: 1.02E+39,
    legendaryCost: 1.39E+39
  },
  1960: {
    income: 1.30E+26,
    commonCost: 7.55E+38,
    rareCost: 1.06E+39,
    legendaryCost: 1.43E+39
  },
  1961: {
    income: 1.36E+26,
    commonCost: 7.89E+38,
    rareCost: 1.10E+39,
    legendaryCost: 1.50E+39
  },
  1962: {
    income: 1.41E+26,
    commonCost: 8.23E+38,
    rareCost: 1.15E+39,
    legendaryCost: 1.56E+39
  },
  1963: {
    income: 1.47E+26,
    commonCost: 8.57E+38,
    rareCost: 1.20E+39,
    legendaryCost: 1.63E+39
  },
  1964: {
    income: 1.52E+26,
    commonCost: 8.92E+38,
    rareCost: 1.25E+39,
    legendaryCost: 1.69E+39
  },
  1965: {
    income: 1.58E+26,
    commonCost: 9.26E+38,
    rareCost: 1.30E+39,
    legendaryCost: 1.76E+39
  },
  1966: {
    income: 1.63E+26,
    commonCost: 9.61E+38,
    rareCost: 1.35E+39,
    legendaryCost: 1.83E+39
  },
  1967: {
    income: 1.69E+26,
    commonCost: 9.96E+38,
    rareCost: 1.39E+39,
    legendaryCost: 1.89E+39
  },
  1968: {
    income: 1.75E+26,
    commonCost: 1.03E+39,
    rareCost: 1.44E+39,
    legendaryCost: 1.96E+39
  },
  1969: {
    income: 1.80E+26,
    commonCost: 1.07E+39,
    rareCost: 1.49E+39,
    legendaryCost: 2.03E+39
  },
  1970: {
    income: 1.86E+26,
    commonCost: 1.10E+39,
    rareCost: 1.54E+39,
    legendaryCost: 2.09E+39
  },
  1971: {
    income: 1.94E+26,
    commonCost: 1.15E+39,
    rareCost: 1.61E+39,
    legendaryCost: 2.19E+39
  },
  1972: {
    income: 2.02E+26,
    commonCost: 1.20E+39,
    rareCost: 1.68E+39,
    legendaryCost: 2.28E+39
  },
  1973: {
    income: 2.10E+26,
    commonCost: 1.25E+39,
    rareCost: 1.75E+39,
    legendaryCost: 2.38E+39
  },
  1974: {
    income: 2.18E+26,
    commonCost: 1.30E+39,
    rareCost: 1.82E+39,
    legendaryCost: 2.47E+39
  },
  1975: {
    income: 2.26E+26,
    commonCost: 1.35E+39,
    rareCost: 1.89E+39,
    legendaryCost: 2.57E+39
  },
  1976: {
    income: 2.34E+26,
    commonCost: 1.40E+39,
    rareCost: 1.96E+39,
    legendaryCost: 2.67E+39
  },
  1977: {
    income: 2.42E+26,
    commonCost: 1.45E+39,
    rareCost: 2.04E+39,
    legendaryCost: 2.76E+39
  },
  1978: {
    income: 2.50E+26,
    commonCost: 1.50E+39,
    rareCost: 2.11E+39,
    legendaryCost: 2.86E+39
  },
  1979: {
    income: 2.58E+26,
    commonCost: 1.56E+39,
    rareCost: 2.18E+39,
    legendaryCost: 2.96E+39
  },
  1980: {
    income: 2.66E+26,
    commonCost: 1.61E+39,
    rareCost: 2.25E+39,
    legendaryCost: 3.05E+39
  },
  1981: {
    income: 2.77E+26,
    commonCost: 1.68E+39,
    rareCost: 2.35E+39,
    legendaryCost: 3.19E+39
  },
  1982: {
    income: 2.89E+26,
    commonCost: 1.75E+39,
    rareCost: 2.46E+39,
    legendaryCost: 3.33E+39
  },
  1983: {
    income: 3.00E+26,
    commonCost: 1.83E+39,
    rareCost: 2.56E+39,
    legendaryCost: 3.47E+39
  },
  1984: {
    income: 3.12E+26,
    commonCost: 1.90E+39,
    rareCost: 2.66E+39,
    legendaryCost: 3.61E+39
  },
  1985: {
    income: 3.23E+26,
    commonCost: 1.97E+39,
    rareCost: 2.76E+39,
    legendaryCost: 3.75E+39
  },
  1986: {
    income: 3.35E+26,
    commonCost: 2.05E+39,
    rareCost: 2.87E+39,
    legendaryCost: 3.89E+39
  },
  1987: {
    income: 3.46E+26,
    commonCost: 2.12E+39,
    rareCost: 2.97E+39,
    legendaryCost: 4.03E+39
  },
  1988: {
    income: 3.58E+26,
    commonCost: 2.20E+39,
    rareCost: 3.08E+39,
    legendaryCost: 4.18E+39
  },
  1989: {
    income: 3.69E+26,
    commonCost: 2.27E+39,
    rareCost: 3.18E+39,
    legendaryCost: 4.32E+39
  },
  1990: {
    income: 3.81E+26,
    commonCost: 2.35E+39,
    rareCost: 3.29E+39,
    legendaryCost: 4.46E+39
  },
  1991: {
    income: 3.97E+26,
    commonCost: 2.45E+39,
    rareCost: 3.44E+39,
    legendaryCost: 4.66E+39
  },
  1992: {
    income: 4.14E+26,
    commonCost: 2.56E+39,
    rareCost: 3.59E+39,
    legendaryCost: 4.87E+39
  },
  1993: {
    income: 4.30E+26,
    commonCost: 2.67E+39,
    rareCost: 3.74E+39,
    legendaryCost: 5.07E+39
  },
  1994: {
    income: 4.47E+26,
    commonCost: 2.78E+39,
    rareCost: 3.89E+39,
    legendaryCost: 5.28E+39
  },
  1995: {
    income: 4.63E+26,
    commonCost: 2.88E+39,
    rareCost: 4.04E+39,
    legendaryCost: 5.48E+39
  },
  1996: {
    income: 4.80E+26,
    commonCost: 2.99E+39,
    rareCost: 4.19E+39,
    legendaryCost: 5.69E+39
  },
  1997: {
    income: 4.96E+26,
    commonCost: 3.10E+39,
    rareCost: 4.34E+39,
    legendaryCost: 5.89E+39
  },
  1998: {
    income: 5.13E+26,
    commonCost: 3.21E+39,
    rareCost: 4.50E+39,
    legendaryCost: 6.10E+39
  },
  1999: {
    income: 5.29E+26,
    commonCost: 3.32E+39,
    rareCost: 4.65E+39,
    legendaryCost: 6.31E+39
  },
  2000: {
    income: 5.46E+26,
    commonCost: 3.43E+39,
    rareCost: 4.80E+39,
    legendaryCost: 6.52E+39
  }
};

function getIncome(level) {
  return levelData[level].income;
}

function getCost(levle, rarity) {
  switch (rarity) {
    case _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common:
      return levelData[levle].commonCost;

    case _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare:
      return levelData[levle].rareCost;

    case _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary:
      return levelData[levle].legendaryCost;
  }

  return 0;
}



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/js/Building.js");
/* harmony import */ var _Builds_Chalet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builds/Chalet */ "./src/js/Builds/Chalet.js");
/* harmony import */ var _Builds_SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builds/SteelStructureHouse */ "./src/js/Builds/SteelStructureHouse.js");
/* harmony import */ var _Builds_Bungalow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Builds/Bungalow */ "./src/js/Builds/Bungalow.js");
/* harmony import */ var _Builds_SmallApartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Builds/SmallApartment */ "./src/js/Builds/SmallApartment.js");
/* harmony import */ var _Builds_Residential__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Builds/Residential */ "./src/js/Builds/Residential.js");
/* harmony import */ var _Builds_TalentApartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Builds/TalentApartment */ "./src/js/Builds/TalentApartment.js");
/* harmony import */ var _Builds_GardenHouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Builds/GardenHouse */ "./src/js/Builds/GardenHouse.js");
/* harmony import */ var _Builds_ChineseSmallBuilding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Builds/ChineseSmallBuilding */ "./src/js/Builds/ChineseSmallBuilding.js");
/* harmony import */ var _Builds_SkyVilla__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Builds/SkyVilla */ "./src/js/Builds/SkyVilla.js");
/* harmony import */ var _Builds_RevivalMansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Builds/RevivalMansion */ "./src/js/Builds/RevivalMansion.js");
/* harmony import */ var _Builds_ConvenienceStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Builds/ConvenienceStore */ "./src/js/Builds/ConvenienceStore.js");
/* harmony import */ var _Builds_School__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Builds/School */ "./src/js/Builds/School.js");
/* harmony import */ var _Builds_ClothingStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Builds/ClothingStore */ "./src/js/Builds/ClothingStore.js");
/* harmony import */ var _Builds_HardwareStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Builds/HardwareStore */ "./src/js/Builds/HardwareStore.js");
/* harmony import */ var _Builds_VegetableMarket__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Builds/VegetableMarket */ "./src/js/Builds/VegetableMarket.js");
/* harmony import */ var _Builds_BookCity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Builds/BookCity */ "./src/js/Builds/BookCity.js");
/* harmony import */ var _Builds_BusinessCenter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Builds/BusinessCenter */ "./src/js/Builds/BusinessCenter.js");
/* harmony import */ var _Builds_GasStation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Builds/GasStation */ "./src/js/Builds/GasStation.js");
/* harmony import */ var _Builds_FolkFood__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Builds/FolkFood */ "./src/js/Builds/FolkFood.js");
/* harmony import */ var _Builds_MediaVoice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Builds/MediaVoice */ "./src/js/Builds/MediaVoice.js");
/* harmony import */ var _Builds_WoodFactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Builds/WoodFactory */ "./src/js/Builds/WoodFactory.js");
/* harmony import */ var _Builds_PaperMill__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Builds/PaperMill */ "./src/js/Builds/PaperMill.js");
/* harmony import */ var _Builds_WaterPlant__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Builds/WaterPlant */ "./src/js/Builds/WaterPlant.js");
/* harmony import */ var _Builds_PowerPlant__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Builds/PowerPlant */ "./src/js/Builds/PowerPlant.js");
/* harmony import */ var _Builds_FoodFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Builds/FoodFactory */ "./src/js/Builds/FoodFactory.js");
/* harmony import */ var _Builds_SteelPlant__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Builds/SteelPlant */ "./src/js/Builds/SteelPlant.js");
/* harmony import */ var _Builds_TextileMill__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Builds/TextileMill */ "./src/js/Builds/TextileMill.js");
/* harmony import */ var _Builds_PartsFactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Builds/PartsFactory */ "./src/js/Builds/PartsFactory.js");
/* harmony import */ var _Builds_TencentMachinery__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Builds/TencentMachinery */ "./src/js/Builds/TencentMachinery.js");
/* harmony import */ var _Builds_PeoplesOil__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Builds/PeoplesOil */ "./src/js/Builds/PeoplesOil.js");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


































var storage_key = "lintx-jgm-calculator-config";
var worker = undefined;
var app = new Vue({
  el: "#app",
  data: function data() {
    var config = null;
    var storage = localStorage.getItem(storage_key);

    if (storage !== null) {
      try {
        config = JSON.parse(storage);
      } catch (e) {}
    }

    var data = {
      version: "0.3",
      rarity: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"],
      buildings: [{
        type: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence,
        list: [new _Builds_Chalet__WEBPACK_IMPORTED_MODULE_1__["default"](), new _Builds_SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__["default"](), new _Builds_Bungalow__WEBPACK_IMPORTED_MODULE_3__["default"](), new _Builds_SmallApartment__WEBPACK_IMPORTED_MODULE_4__["default"](), new _Builds_Residential__WEBPACK_IMPORTED_MODULE_5__["default"](), new _Builds_TalentApartment__WEBPACK_IMPORTED_MODULE_6__["default"](), new _Builds_GardenHouse__WEBPACK_IMPORTED_MODULE_7__["default"](), new _Builds_ChineseSmallBuilding__WEBPACK_IMPORTED_MODULE_8__["default"](), new _Builds_SkyVilla__WEBPACK_IMPORTED_MODULE_9__["default"](), new _Builds_RevivalMansion__WEBPACK_IMPORTED_MODULE_10__["default"]()]
      }, {
        type: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business,
        list: [new _Builds_ConvenienceStore__WEBPACK_IMPORTED_MODULE_11__["default"](), new _Builds_School__WEBPACK_IMPORTED_MODULE_12__["default"](), new _Builds_ClothingStore__WEBPACK_IMPORTED_MODULE_13__["default"](), new _Builds_HardwareStore__WEBPACK_IMPORTED_MODULE_14__["default"](), new _Builds_VegetableMarket__WEBPACK_IMPORTED_MODULE_15__["default"](), new _Builds_BookCity__WEBPACK_IMPORTED_MODULE_16__["default"](), new _Builds_BusinessCenter__WEBPACK_IMPORTED_MODULE_17__["default"](), new _Builds_GasStation__WEBPACK_IMPORTED_MODULE_18__["default"](), new _Builds_FolkFood__WEBPACK_IMPORTED_MODULE_19__["default"](), new _Builds_MediaVoice__WEBPACK_IMPORTED_MODULE_20__["default"]()]
      }, {
        type: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial,
        list: [new _Builds_WoodFactory__WEBPACK_IMPORTED_MODULE_21__["default"](), new _Builds_PaperMill__WEBPACK_IMPORTED_MODULE_22__["default"](), new _Builds_WaterPlant__WEBPACK_IMPORTED_MODULE_23__["default"](), new _Builds_PowerPlant__WEBPACK_IMPORTED_MODULE_24__["default"](), new _Builds_FoodFactory__WEBPACK_IMPORTED_MODULE_25__["default"](), new _Builds_SteelPlant__WEBPACK_IMPORTED_MODULE_26__["default"](), new _Builds_TextileMill__WEBPACK_IMPORTED_MODULE_27__["default"](), new _Builds_PartsFactory__WEBPACK_IMPORTED_MODULE_28__["default"](), new _Builds_TencentMachinery__WEBPACK_IMPORTED_MODULE_29__["default"](), new _Builds_PeoplesOil__WEBPACK_IMPORTED_MODULE_30__["default"]()]
      }],
      buffs: [],
      programs: {
        onlineMoney: {},
        supplyMoney: {},
        supplyRarity: {},
        offlineMoney: {}
      },
      progress: 0,
      calculationing: false
    };
    Object.keys(_Buff__WEBPACK_IMPORTED_MODULE_32__["BuffSource"]).forEach(function (key) {
      var source = _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffSource"][key];

      if (source === _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffSource"].Building) {
        return;
      }

      var buff = {
        type: source,
        list: []
      };
      Object.keys(_Buff__WEBPACK_IMPORTED_MODULE_32__["BuffRange"]).forEach(function (rkey) {
        var range = _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffRange"][rkey];

        if (range === _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffRange"].Targets) {
          return;
        }

        buff.list.push(new _Buff__WEBPACK_IMPORTED_MODULE_32__["Buff"](range, range, 0));
      });
      data.buffs.push(buff);
    });
    data.buildings.forEach(function (building) {
      building.list.forEach(function (item) {
        item.initBuffs();
      });
    });

    if (config !== null && _typeof(config) === "object") {
      if (config.hasOwnProperty("building")) {
        var building = config.building;

        try {
          building.forEach(function (item) {
            data.buildings.forEach(function (dbs) {
              dbs.list.forEach(function (db) {
                if (db.BuildingName === item.building) {
                  db.star = item.star;
                  db.quest = item.quest;
                  db.disabled = item.disabled;
                  db.level = getValidLevel(item.level);
                }
              });
            });
          });
        } catch (e) {}
      }

      if (config.hasOwnProperty("buff")) {
        var buffs = config.buff;

        try {
          buffs.forEach(function (buffc) {
            buffc.list.forEach(function (b) {
              data.buffs.forEach(function (dbuffc) {
                if (dbuffc.type === buffc.type) {
                  dbuffc.list.forEach(function (db) {
                    if (db.range === b.range) {
                      db.buff = b.buff;
                    }
                  });
                }
              });
            });
          });
        } catch (e) {}
      }
    }

    return data;
  },
  methods: {
    calculation: function calculation() {
      this.calculationing = true; //拿出已有的建筑

      var list = [];
      this.buildings.forEach(function (cls) {
        var building = {
          type: cls.type,
          list: []
        };
        cls.list.forEach(function (item) {
          if (!item.disabled && Number(item.star) > 0) {
            building.list.push({
              star: Number(item.star),
              quest: item.quest,
              name: item.BuildingName,
              level: getValidLevel(item.level)
            });
          }
        });
        list.push(building);
      });

      if (typeof Worker !== "undefined") {
        worker = new Worker("static/worker.js?v=" + this.version);

        var _self = this;

        worker.onmessage = function (e) {
          var data = e.data;

          if (data === "done") {
            _self.calculationing = false;
            worker.terminate();
            worker = undefined;
          } else {
            var mode = data.mode;

            if (mode === "result") {
              _self.programs = data.result;
            } else if (mode === "progress") {
              _self.progress = data.progress;
            }
          }
        };

        worker.postMessage({
          list: list,
          buff: this.buffs
        });
      } else {//抱歉! Web Worker 不支持
      }
    },
    save: function save() {
      var config = {
        building: [],
        buff: []
      };
      this.buildings.forEach(function (cls) {
        cls.list.forEach(function (item) {
          if (Number(item.star) > 0) {
            config.building.push({
              building: item.BuildingName,
              star: Number(item.star),
              quest: item.quest,
              disabled: item.disabled,
              level: getValidLevel(item.level)
            });
          }
        });
      });
      this.buffs.forEach(function (source) {
        var b = {
          type: source.type,
          list: []
        };
        source.list.forEach(function (buff) {
          b.list.push({
            range: buff.range,
            buff: buff.buff
          });
        });
        config.buff.push(b);
      });
      localStorage.setItem(storage_key, JSON.stringify(config));
    },
    clear: function clear() {
      localStorage.removeItem(storage_key);
      Object.assign(this.$data, this.$options.data());
    },
    stop: function stop() {
      try {
        worker.terminate();
        worker = undefined;
        this.calculationing = false;
      } catch (e) {}
    }
  }
});

function getValidLevel(level) {
  if (typeof level !== "number") {
    if (isNaN(level)) {
      return 1;
    } else {
      level = Number(level);
    }
  }

  level = Math.floor(level);

  if (level < 1) {
    return 1;
  }

  if (level > 2000) {
    return 2000;
  }

  return level;
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map