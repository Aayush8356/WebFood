(function() {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "./src/pages/api/categories.js":
/*!*************************************!*\
  !*** ./src/pages/api/categories.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ "./src/util/mongodb.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      db
    } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();
    let categories = await db.collection("categories").find({}).toArray();
    categories = JSON.parse(JSON.stringify(categories));
    return res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
});

/***/ }),

/***/ "./src/util/mongodb.js":
/*!*****************************!*\
  !*** ./src/util/mongodb.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectToDatabase": function() { return /* binding */ connectToDatabase; }
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!MONGODB_DB) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */


let cached = global.mongo;

if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI, opts).then(client => {
      return {
        client,
        db: client.db(MONGODB_DB)
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/categories.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJGb29kL3ppbmdlci8uL3NyYy9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9XZWJGb29kL3ppbmdlci8uL3NyYy91dGlsL21vbmdvZGIuanMiLCJ3ZWJwYWNrOi8vV2ViRm9vZC96aW5nZXIvZXh0ZXJuYWwgXCJtb25nb2RiXCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNhdGVnb3JpZXMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREIiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubiIsInByb21pc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiTW9uZ29DbGllbnQiLCJ0aGVuIiwiY2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVMsTUFBTUMsZ0VBQWlCLEVBQXRDO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLFlBQWQsRUFBNEJDLElBQTVCLENBQWlDLEVBQWpDLEVBQXFDQyxPQUFyQyxFQUF2QjtBQUNBSCxjQUFVLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZU4sVUFBZixDQUFYLENBQWI7QUFDQSxXQUFPSCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlIsVUFBckIsQ0FBUDtBQUNILEdBTEQsQ0FLRSxPQUFPUyxHQUFQLEVBQVk7QUFDVkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxXQUFPWixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSSxhQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQVZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQS9COztBQUVBLElBQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlJLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQXBCOztBQUVBLElBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1hBLFFBQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFQLEdBQWU7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsV0FBTyxFQUFFO0FBQXZCLEdBQXhCO0FBQ0Q7O0FBRU0sZUFBZXZCLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUltQixNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDZixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNQyxJQUFJLEdBQUc7QUFDWEMscUJBQWUsRUFBRSxJQUROO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUtBUCxVQUFNLENBQUNJLE9BQVAsR0FBaUJJLHdEQUFBLENBQW9CYixXQUFwQixFQUFpQ1UsSUFBakMsRUFBdUNJLElBQXZDLENBQTZDQyxNQUFELElBQVk7QUFDdkUsYUFBTztBQUNMQSxjQURLO0FBRUw5QixVQUFFLEVBQUU4QixNQUFNLENBQUM5QixFQUFQLENBQVVrQixVQUFWO0FBRkMsT0FBUDtBQUlELEtBTGdCLENBQWpCO0FBTUQ7O0FBQ0RFLFFBQU0sQ0FBQ0csSUFBUCxHQUFjLE1BQU1ILE1BQU0sQ0FBQ0ksT0FBM0I7QUFDQSxTQUFPSixNQUFNLENBQUNHLElBQWQ7QUFDRCxDOzs7Ozs7Ozs7OztBQ2hERCxxQyIsImZpbGUiOiJwYWdlcy9hcGkvY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL3V0aWwvbW9uZ29kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJjYXRlZ29yaWVzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcbiAgICAgICAgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oY2F0ZWdvcmllcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9KTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3QgTU9OR09EQl9EQiA9IHByb2Nlc3MuZW52Lk1PTkdPREJfREI7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG5pZiAoIU1PTkdPREJfREIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChjbGllbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgZGI6IGNsaWVudC5kYihNT05HT0RCX0RCKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==