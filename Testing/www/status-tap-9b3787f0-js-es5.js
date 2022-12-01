(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-9b3787f0-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/status-tap-9b3787f0.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/status-tap-9b3787f0.js ***!
    \******************************************************************/

  /*! exports provided: startStatusTap */

  /***/
  function node_modulesIonicCoreDistEsmStatusTap9b3787f0Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startStatusTap", function () {
      return startStatusTap;
    });
    /* harmony import */


    var _index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-821f9ab1.js */
    "./node_modules/@ionic/core/dist/esm/index-821f9ab1.js");

    var startStatusTap = function startStatusTap() {
      var win = window;
      win.addEventListener('statusTap', function () {
        Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
          var width = win.innerWidth;
          var height = win.innerHeight;
          var el = document.elementFromPoint(width / 2, height / 2);

          if (!el) {
            return;
          }

          var contentEl = el.closest('ion-content');

          if (contentEl) {
            contentEl.componentOnReady().then(function () {
              Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                return contentEl.scrollToTop(300);
              });
            });
          }
        });
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=status-tap-9b3787f0-js-es5.js.map