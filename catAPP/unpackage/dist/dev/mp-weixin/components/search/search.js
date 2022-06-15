"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      urlimg: "https://7n.oripetlife.com/"
    };
  },
  props: {
    filPersons: {
      type: Array
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.filPersons, (p, index, i0) => {
      return {
        a: $data.urlimg + p.img,
        b: common_vendor.t(p.name),
        c: common_vendor.t(p.introduction),
        d: common_vendor.t(p.price),
        e: common_vendor.t(p.market_price),
        f: index
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb1fb978"], ["__file", "E:/\u684C\u9762/HBX/catAPP/components/search/search.vue"]]);
wx.createComponent(Component);
