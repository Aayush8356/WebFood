(function() {
var exports = {};
exports.id = "pages/api/dishes";
exports.ids = ["pages/api/dishes"];
exports.modules = {

/***/ "./src/pages/api/dishes.js":
/*!*********************************!*\
  !*** ./src/pages/api/dishes.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ "./src/util/mongodb.js");
 //import dis from  "../../../dishes.json"

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      db
    } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();
    let dishes = await db.collection("dishes").find({}).toArray();
    dishes = JSON.parse(JSON.stringify(dishes));
    return res.status(200).json(dishes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
});
/*dis.forEach(async(itm)=>{
        await db.collection("dishes").insertOne(itm)
    })*/
//await db.collection("dishes").deleteMany({})

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/dishes.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW5nZXIvLi9zcmMvcGFnZXMvYXBpL2Rpc2hlcy5qcyIsIndlYnBhY2s6Ly96aW5nZXIvLi9zcmMvdXRpbC9tb25nb2RiLmpzIiwid2VicGFjazovL3ppbmdlci9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiZGlzaGVzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RCIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsIk1vbmdvQ2xpZW50IiwidGhlbiIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBUyxNQUFNQyxnRUFBaUIsRUFBdEM7QUFDQSxRQUFJQyxNQUFNLEdBQUcsTUFBTUYsRUFBRSxDQUFDRyxVQUFILENBQWMsUUFBZCxFQUF3QkMsSUFBeEIsQ0FBNkIsRUFBN0IsRUFBaUNDLE9BQWpDLEVBQW5CO0FBQ0FILFVBQU0sR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlTixNQUFmLENBQVgsQ0FBVDtBQUNBLFdBQU9ILEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixNQUFyQixDQUFQO0FBQ0QsR0FMRCxDQUtFLE9BQU9TLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBLFdBQU9aLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVJLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDtBQUNGLENBVkQ7QUFhQTtBQUNBO0FBQ0E7QUFFQSw4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQS9COztBQUVBLElBQUksQ0FBQ0gsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlJLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQXBCOztBQUVBLElBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1hBLFFBQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFQLEdBQWU7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsV0FBTyxFQUFFO0FBQXZCLEdBQXhCO0FBQ0Q7O0FBRU0sZUFBZXZCLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUltQixNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDZixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNQyxJQUFJLEdBQUc7QUFDWEMscUJBQWUsRUFBRSxJQUROO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUtBUCxVQUFNLENBQUNJLE9BQVAsR0FBaUJJLHdEQUFBLENBQW9CYixXQUFwQixFQUFpQ1UsSUFBakMsRUFBdUNJLElBQXZDLENBQTZDQyxNQUFELElBQVk7QUFDdkUsYUFBTztBQUNMQSxjQURLO0FBRUw5QixVQUFFLEVBQUU4QixNQUFNLENBQUM5QixFQUFQLENBQVVrQixVQUFWO0FBRkMsT0FBUDtBQUlELEtBTGdCLENBQWpCO0FBTUQ7O0FBQ0RFLFFBQU0sQ0FBQ0csSUFBUCxHQUFjLE1BQU1ILE1BQU0sQ0FBQ0ksT0FBM0I7QUFDQSxTQUFPSixNQUFNLENBQUNHLElBQWQ7QUFDRCxDOzs7Ozs7Ozs7OztBQ2hERCxxQyIsImZpbGUiOiJwYWdlcy9hcGkvZGlzaGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vdXRpbC9tb25nb2RiXCI7XG4vL2ltcG9ydCBkaXMgZnJvbSAgXCIuLi8uLi8uLi9kaXNoZXMuanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgbGV0IGRpc2hlcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJkaXNoZXNcIikuZmluZCh7fSkudG9BcnJheSgpO1xuICAgIGRpc2hlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGlzaGVzKSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRpc2hlcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xuICB9XG59O1xuXG5cbi8qZGlzLmZvckVhY2goYXN5bmMoaXRtKT0+e1xuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZGlzaGVzXCIpLmluc2VydE9uZShpdG0pXG4gICAgfSkqL1xuXG4vL2F3YWl0IGRiLmNvbGxlY3Rpb24oXCJkaXNoZXNcIikuZGVsZXRlTWFueSh7fSlcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IE1PTkdPREJfREIgPSBwcm9jZXNzLmVudi5NT05HT0RCX0RCO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgKTtcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nbztcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQsXG4gICAgICAgIGRiOiBjbGllbnQuZGIoTU9OR09EQl9EQiksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=