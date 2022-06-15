"use strict";
var common_vendor = require("../vendor.js");
const BaseURL = "https://ybmini.oripetlife.com";
function requestGet(url, params) {
  return new Promise((resolve, reject) => {
    url = BaseURL + url;
    common_vendor.index.request({
      url,
      method: "GET",
      data: params,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.requestGet = requestGet;
