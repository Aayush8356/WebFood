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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJGb29kL3ppbmdlci8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwid2VicGFjazovL1dlYkZvb2QvemluZ2VyLy4vc3JjL3V0aWwvbW9uZ29kYi5qcyIsIndlYnBhY2s6Ly9XZWJGb29kL3ppbmdlci9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly9XZWJGb29kL3ppbmdlci9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovL1dlYkZvb2QvemluZ2VyL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsImFkbWluIiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwidXNlciIsImVtYWlsIiwiZGF0YWJhc2UiLCJNT05HT19VUkkiLCJ0aGVtZSIsIk1PTkdPREJfVVJJIiwiTU9OR09EQl9EQiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwibW9uZ28iLCJjb25uIiwicHJvbWlzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJNb25nb0NsaWVudCIsInRoZW4iLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSwrREFBZUEsZ0RBQVEsQ0FBQztBQUN0QkMsV0FBUyxFQUFFLENBQ1RDLGlFQUFBLENBQWlCO0FBQ2ZDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBRFA7QUFFZkMsZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRlgsR0FBakIsQ0FEUyxDQURXO0FBUXRCQyxXQUFTLEVBQUU7QUFDVCxVQUFNQyxPQUFOLENBQWNBLE9BQWQsRUFBdUJDLEtBQXZCLEVBQThCO0FBQzVCRCxhQUFPLENBQUNFLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxZQUFNO0FBQUVDO0FBQUYsVUFBUyxNQUFNQyxnRUFBaUIsRUFBdEM7QUFDQSxZQUFNQyxNQUFNLEdBQUcsTUFBTUYsRUFBRSxDQUNwQkcsVUFEa0IsQ0FDUCxRQURPLEVBRWxCQyxPQUZrQixDQUVWO0FBQUVDLFlBQUksRUFBRVIsT0FBTyxDQUFDUSxJQUFSLENBQWFDO0FBQXJCLE9BRlUsQ0FBckI7O0FBR0EsVUFBSUosTUFBSixFQUFZO0FBQ1ZMLGVBQU8sQ0FBQ0UsS0FBUixHQUFnQixJQUFoQjtBQUNEOztBQUNELGFBQU9GLE9BQVA7QUFDRDs7QUFYUSxHQVJXO0FBcUJ0QjtBQUNBVSxVQUFRLEVBQUcsR0FBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsU0FBVSxFQXRCYjtBQXVCdEJDLE9BQUssRUFBRTtBQXZCZSxDQUFELENBQXZCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQSxNQUFNQyxXQUFXLEdBQUduQixPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLFdBQWhDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHcEIsT0FBTyxDQUFDQyxHQUFSLENBQVltQixVQUEvQjs7QUFFQSxJQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDaEIsUUFBTSxJQUFJRSxLQUFKLENBQ0osc0VBREksQ0FBTjtBQUdEOztBQUVELElBQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUNmLFFBQU0sSUFBSUMsS0FBSixDQUNKLHFFQURJLENBQU47QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxLQUFwQjs7QUFFQSxJQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNYQSxRQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlO0FBQUVDLFFBQUksRUFBRSxJQUFSO0FBQWNDLFdBQU8sRUFBRTtBQUF2QixHQUF4QjtBQUNEOztBQUVNLGVBQWVoQixpQkFBZixHQUFtQztBQUN4QyxNQUFJWSxNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDZixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNQyxJQUFJLEdBQUc7QUFDWEMscUJBQWUsRUFBRSxJQUROO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUtBUCxVQUFNLENBQUNJLE9BQVAsR0FBaUJJLHdEQUFBLENBQW9CWCxXQUFwQixFQUFpQ1EsSUFBakMsRUFBdUNJLElBQXZDLENBQTZDQyxNQUFELElBQVk7QUFDdkUsYUFBTztBQUNMQSxjQURLO0FBRUx2QixVQUFFLEVBQUV1QixNQUFNLENBQUN2QixFQUFQLENBQVVXLFVBQVY7QUFGQyxPQUFQO0FBSUQsS0FMZ0IsQ0FBakI7QUFNRDs7QUFDREUsUUFBTSxDQUFDRyxJQUFQLEdBQWMsTUFBTUgsTUFBTSxDQUFDSSxPQUEzQjtBQUNBLFNBQU9KLE1BQU0sQ0FBQ0csSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7O0FDaERELHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9tb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkdvb2dsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgdG9rZW4pIHtcbiAgICAgIHNlc3Npb24uYWRtaW4gPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxuICAgICAgICAuY29sbGVjdGlvbihcImFkbWluc1wiKVxuICAgICAgICAuZmluZE9uZSh7IHVzZXI6IHNlc3Npb24udXNlci5lbWFpbCB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgc2Vzc2lvbi5hZG1pbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICAvLyBBIGRhdGFiYXNlIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgdG8gcGVyc2lzdCBhY2NvdW50cyBpbiBhIGRhdGFiYXNlXG4gIGRhdGFiYXNlOiBgJHtwcm9jZXNzLmVudi5NT05HT19VUkl9YCxcbiAgdGhlbWU6IFwiZGFya1wiLFxufSk7XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQjtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmlmICghTU9OR09EQl9EQikge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX0RCIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgKTtcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ287XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nbyA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKGNsaWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBkYjogY2xpZW50LmRiKE1PTkdPREJfREIpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=