module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_arc_text__ = __webpack_require__(3);
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-arc-text',
  props: {
    direction: {
      type: Number,
      required: false,
      default: function _default() {
        return 1;
      }
    },
    arc: {
      type: Number,
      required: false,
      default: function _default() {
        return 150;
      }
    },
    text: {
      type: String,
      required: true,
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      textCyrcle: null
    };
  },

  watch: {
    text: function text(newVal, oldVal) {
      this.update();
    },
    arc: function arc(newVal, oldVal) {
      this.update();
    },
    direction: function direction(newVal, oldVal) {
      this.direction = parseInt(newVal);
      this.update();
    }

  },
  methods: {
    update: function update() {
      var container = this.$el;
      if (this.textCyrcle) {
        this.textCyrcle.destroy();
      }
      this.$el.innerHTML = this.text;
      this.textCyrcle = new __WEBPACK_IMPORTED_MODULE_0_arc_text__["a" /* default */](this.$el);
      this.textCyrcle.arc(this.arc);
      this.textCyrcle.direction(this.direction);
    }
  },
  mounted: function mounted() {
    this.update();
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var splitNode = function (node, splitter) {
    var wrapperElement = document.createElement('span');
    var text = node.innerText.trim();
    var chars = splitter ? splitter(text) : text.split('').slice();
    return chars.map(function (char) {
        var parent = wrapperElement.cloneNode();
        parent.insertAdjacentHTML('afterbegin', char === ' ' ? '&nbsp;' : char);
        return parent;
    });
};
var getRect = function (element) {
    var rect = element.getBoundingClientRect();
    return {
        height: rect.height,
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width
    };
};
var radiansPerDegree = Math.PI / 180;
var degreesPerRadian = 180 / Math.PI;
var chord = function (r, θ) { return 2 * r * Math.sin(degreesToRadians(θ / 2)); };
var radiansToDegrees = function (angleInDegrees) { return angleInDegrees * degreesPerRadian; };
var degreesToRadians = function (angleInDegrees) { return angleInDegrees * radiansPerDegree; };
var sagitta = function (r, θ) { return r * (1 - Math.cos(degreesToRadians(θ / 2))); };
var getLetterRotations = function (metrics, r) {
    return metrics.reduce(function (data, _a) {
        var width = _a.width;
        var rotation = radiansToDegrees(width / r);
        return {
            θ: data.θ + rotation,
            rotations: data.rotations.concat([data.θ + rotation / 2])
        };
    }, { θ: 0, rotations: [] });
};

var PI = Math.PI, max = Math.max, min = Math.min;
var ArcText = /** @class */ (function () {
    function ArcText(elm, splitter) {
        if (splitter === void 0) { splitter = undefined; }
        this.element = elm;
        this.originalHTML = this.element.innerHTML;
        var container = document.createElement('div');
        var fragment = document.createDocumentFragment();
        container.setAttribute('aria-label', this.element.innerText);
        container.style.position = 'relative';
        this.container = container;
        this.letters = splitNode(this.element, splitter);
        this.letters.forEach(function (letter) { return fragment.appendChild(letter); });
        container.appendChild(fragment);
        this.element.innerHTML = '';
        this.element.appendChild(container);
        var _a = window.getComputedStyle(this.element), fontSize = _a.fontSize, lineHeight = _a.lineHeight;
        this.fontSize = parseFloat(fontSize);
        this.lineHeight = parseFloat(lineHeight) || this.fontSize;
        this.metrics = this.letters.map(getRect);
        var totalWidth = this.metrics.reduce(function (sum, _a) {
            var width = _a.width;
            return sum + width;
        }, 0);
        this.minRadius = totalWidth / PI / 2 + this.lineHeight;
        this.dir = 1;
        this.isForceWidth = false;
        this.isForceHeight = true;
        this.radius = this.minRadius;
        this.invalidate();
    }
    ArcText.prototype.forceWidth = function (value) {
        if (value) {
            this.isForceWidth = value;
            this.invalidate();
            return this;
        }
        return this.isForceWidth;
    };
    ArcText.prototype.forceHeight = function (value) {
        if (value) {
            this.isForceHeight = value;
            this.invalidate();
            return this;
        }
        return this.isForceHeight;
    };
    /**
     * Sets the text direction. `1` is clockwise, `-1` is counter-clockwise.
     *
     * @name dir
     * @function
     * @instance
     * @memberof ArcText
     * @param  {number} value A new text direction.
     * @return {ArcText}   The current instance.
     *
     * @example
     * const arcText = new ArcText(document.getElementById('myElement'));
     *
     * // Set the direction to counter-clockwise.
     * arcText.dir(-1);
     *
     * // Set the direction to clockwise.
     * arcText.dir(1);
     */
    ArcText.prototype.direction = function (value) {
        if (value) {
            this.dir = value;
            this.invalidate();
            return this;
        }
        return this.dir;
    };
    /**
     * Gets the text radius in pixels. The default radius is the radius required
     * for the text to form a complete circle.
     *
     * @name radius
     * @function
     * @instance
     * @memberof ArcText
     * @return {number} The current text radius.
     *
     * @example
     * const arcText = new ArcText(document.getElementById('myElement'));
     *
     * arcText.radius();
     * //=> 150
     */
    ArcText.prototype.arc = function (value) {
        if (value) {
            this.radius = max(this.minRadius, value);
            this.invalidate();
            return this;
        }
        return this.radius;
    };
    /**
     * Removes the ArcText effect from the element, restoring it to its
     * original state.
     *
     * @return {ArcText} This instance.
     *
     * @example
     * const arcText = new ArcText(document.getElementById('myElement'));
     *
     * // Restore `myElement` to its original state.
     * arcText.destroy();
     */
    ArcText.prototype.destroy = function () {
        this.element.innerHTML = this.originalHTML;
        return this;
    };
    /**
     * Removes the ArcText effect from the element, restoring it to its
     * original state.
     *
     * @return {ArcText} This instance.
     *
     * @example
     * const arcText = new ArcText(document.getElementById('myElement'));
     *
     * // Restore `myElement` to its original state.
     * arcText.destroy();
     */
    ArcText.prototype.refresh = function () {
        return this.invalidate();
    };
    /**
     * Invalidates the current state and schedules a task to refresh the layout
     * in the next animation frame.
     *
     * @private
     *
     * @return {ArcText} This instance.
     */
    ArcText.prototype.invalidate = function () {
        var _this = this;
        // if(this.raf) {
        cancelAnimationFrame(this.raf);
        // }
        this.raf = requestAnimationFrame(function () {
            _this.render();
        });
        return this;
    };
    /**
     * Rotates and positions the letters.
     *
     * @private
     *
     * @return {ArcText} This instance.
     */
    ArcText.prototype.render = function () {
        var _this = this;
        this.fontSize = 40;
        var originY = this.dir === -1 ? -this.radius + this.lineHeight : this.radius;
        var origin = "center " + originY / this.fontSize + "em";
        var innerRadius = this.radius - this.lineHeight;
        var _a = getLetterRotations(this.metrics, innerRadius), rotations = _a.rotations, θ = _a.θ;
        this.letters.forEach(function (letter, index) {
            var style = letter.style;
            var rotate = (θ * -0.5 + rotations[index]) * _this.dir;
            var translateX = (_this.metrics[index].width * -0.5) / _this.fontSize;
            var transform = "translateX(" + translateX + "em) rotate(" + rotate + "deg)";
            style.position = 'absolute';
            style.bottom = _this.dir === -1 ? '0' : 'auto';
            style.left = '50%';
            style.transform = transform;
            style.transformOrigin = origin;
            // style.webkitTransform = transform;
            // style.webkitTransformOrigin = origin;
        });
        if (this.isForceHeight) {
            var height = θ > 180 ? sagitta(this.radius, θ) : sagitta(innerRadius, θ) + this.lineHeight;
            this.container.style.height = height / this.fontSize + "em";
        }
        if (this.isForceWidth) {
            var width = chord(this.radius, min(180, θ));
            this.container.style.width = width / this.fontSize + "em";
        }
        return this;
    };
    return ArcText;
}());

/* harmony default export */ __webpack_exports__["a"] = (ArcText);
//# sourceMappingURL=arc-text.es5.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(0),
  /* template */
  __webpack_require__(2),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map