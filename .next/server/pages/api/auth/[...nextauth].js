(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/mongodb */ "./src/util/mongodb.js");



/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  })],
  callbacks: {
    async session(session, token) {
      session.admin = false;
      const {
        db
      } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();
      const result = await db.collection("admins").findOne({
        user: session.user.email
      });

      if (result) {
        session.admin = true;
      }

      return session;
    }

  },
  // A database is optional, but required to persist accounts in a database
  database: `${process.env.MONGO_URI}`,
  theme: "dark"
}));

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

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96aW5nZXIvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly96aW5nZXIvLi9zcmMvdXRpbC9tb25nb2RiLmpzIiwid2VicGFjazovL3ppbmdlci9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly96aW5nZXIvZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly96aW5nZXIvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwiYWRtaW4iLCJkYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJ1c2VyIiwiZW1haWwiLCJkYXRhYmFzZSIsIk1PTkdPX1VSSSIsInRoZW1lIiwiTU9OR09EQl9VUkkiLCJNT05HT0RCX0RCIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsIk1vbmdvQ2xpZW50IiwidGhlbiIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLCtEQUFlQSxnREFBUSxDQUFDO0FBQ3RCQyxXQUFTLEVBQUUsQ0FDVEMsaUVBQUEsQ0FBaUI7QUFDZkMsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEUDtBQUVmQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQURTLENBRFc7QUFRdEJDLFdBQVMsRUFBRTtBQUNULFVBQU1DLE9BQU4sQ0FBY0EsT0FBZCxFQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJELGFBQU8sQ0FBQ0UsS0FBUixHQUFnQixLQUFoQjtBQUNBLFlBQU07QUFBRUM7QUFBRixVQUFTLE1BQU1DLGdFQUFpQixFQUF0QztBQUNBLFlBQU1DLE1BQU0sR0FBRyxNQUFNRixFQUFFLENBQ3BCRyxVQURrQixDQUNQLFFBRE8sRUFFbEJDLE9BRmtCLENBRVY7QUFBRUMsWUFBSSxFQUFFUixPQUFPLENBQUNRLElBQVIsQ0FBYUM7QUFBckIsT0FGVSxDQUFyQjs7QUFHQSxVQUFJSixNQUFKLEVBQVk7QUFDVkwsZUFBTyxDQUFDRSxLQUFSLEdBQWdCLElBQWhCO0FBQ0Q7O0FBQ0QsYUFBT0YsT0FBUDtBQUNEOztBQVhRLEdBUlc7QUFxQnRCO0FBQ0FVLFVBQVEsRUFBRyxHQUFFaEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixTQUFVLEVBdEJiO0FBdUJ0QkMsT0FBSyxFQUFFO0FBdkJlLENBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBLE1BQU1DLFdBQVcsR0FBR25CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsV0FBaEM7QUFDQSxNQUFNQyxVQUFVLEdBQUdwQixPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLFVBQS9COztBQUVBLElBQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNoQixRQUFNLElBQUlFLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7O0FBRUQsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJQyxLQUFKLENBQ0oscUVBREksQ0FBTjtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQXBCOztBQUVBLElBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1hBLFFBQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFQLEdBQWU7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsV0FBTyxFQUFFO0FBQXZCLEdBQXhCO0FBQ0Q7O0FBRU0sZUFBZWhCLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUlZLE1BQU0sQ0FBQ0csSUFBWCxFQUFpQjtBQUNmLFdBQU9ILE1BQU0sQ0FBQ0csSUFBZDtBQUNEOztBQUVELE1BQUksQ0FBQ0gsTUFBTSxDQUFDSSxPQUFaLEVBQXFCO0FBQ25CLFVBQU1DLElBQUksR0FBRztBQUNYQyxxQkFBZSxFQUFFLElBRE47QUFFWEMsd0JBQWtCLEVBQUU7QUFGVCxLQUFiO0FBS0FQLFVBQU0sQ0FBQ0ksT0FBUCxHQUFpQkksd0RBQUEsQ0FBb0JYLFdBQXBCLEVBQWlDUSxJQUFqQyxFQUF1Q0ksSUFBdkMsQ0FBNkNDLE1BQUQsSUFBWTtBQUN2RSxhQUFPO0FBQ0xBLGNBREs7QUFFTHZCLFVBQUUsRUFBRXVCLE1BQU0sQ0FBQ3ZCLEVBQVAsQ0FBVVcsVUFBVjtBQUZDLE9BQVA7QUFJRCxLQUxnQixDQUFqQjtBQU1EOztBQUNERSxRQUFNLENBQUNHLElBQVAsR0FBYyxNQUFNSCxNQUFNLENBQUNJLE9BQTNCO0FBQ0EsU0FBT0osTUFBTSxDQUFDRyxJQUFkO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNoREQscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB0b2tlbikge1xuICAgICAgc2Vzc2lvbi5hZG1pbiA9IGZhbHNlO1xuICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiYWRtaW5zXCIpXG4gICAgICAgIC5maW5kT25lKHsgdXNlcjogc2Vzc2lvbi51c2VyLmVtYWlsIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBzZXNzaW9uLmFkbWluID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIC8vIEEgZGF0YWJhc2UgaXMgb3B0aW9uYWwsIGJ1dCByZXF1aXJlZCB0byBwZXJzaXN0IGFjY291bnRzIGluIGEgZGF0YWJhc2VcbiAgZGF0YWJhc2U6IGAke3Byb2Nlc3MuZW52Lk1PTkdPX1VSSX1gLFxuICB0aGVtZTogXCJkYXJrXCIsXG59KTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IE1PTkdPREJfREIgPSBwcm9jZXNzLmVudi5NT05HT0RCX0RCO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgKTtcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nbztcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQsXG4gICAgICAgIGRiOiBjbGllbnQuZGIoTU9OR09EQl9EQiksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==