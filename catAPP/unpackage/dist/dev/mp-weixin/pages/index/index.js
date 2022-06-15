"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_http = require("../../common/js/http.js");
const search = () => "../../components/search/search.js";
const _sfc_main = {
  components: {
    search
  },
  data() {
    return {
      keyWord: "",
      fals: "0",
      alllist: [],
      filPersons: [],
      record: []
    };
  },
  created() {
    this.getLunbo();
    this.getSearchStorage();
  },
  computed: {},
  onLoad() {
  },
  methods: {
    async getLunbo() {
      let result = await common_js_http.requestGet("/user_skus");
      result.code == 200 ? this.alllist = result.lists : "";
    },
    doSearch(val) {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
      setTimeout(() => {
        common_vendor.index.showToast({
          title: "\u52A0\u8F7D\u6210\u529F",
          icon: "none",
          position: "bottom",
          duration: 100
        });
        this.fals = 1;
        let searchArr = common_vendor.index.getStorageSync("userInfo") || [];
        searchArr.unshift(val);
        common_vendor.index.setStorageSync("userInfo", searchArr);
        let getData = common_vendor.index.getStorageSync("userInfo");
        let setData = [...new Set(getData)];
        this.record = setData;
        common_vendor.index.hideLoading();
      }, 100);
    },
    getSearchStorage() {
      let getData = common_vendor.index.getStorageSync("userInfo");
      let setData = [...new Set(getData)];
      this.record = setData;
    },
    dodele() {
      let removeDta = common_vendor.index.removeStorageSync("userInfo");
      this.record = removeDta;
    },
    clickSearch(p) {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
      setTimeout(() => {
        common_vendor.index.showToast({
          title: "\u52A0\u8F7D\u6210\u529F",
          icon: "none",
          position: "bottom",
          duration: 100
        });
        let searchArr = common_vendor.index.getStorageSync("userInfo") || [];
        searchArr.unshift({
          value: p.name
        });
        common_vendor.index.setStorageSync("userInfo", searchArr);
        let getData = common_vendor.index.getStorageSync("userInfo");
        let setData = [...new Set(getData)];
        this.record = setData;
        this.keyWord = p.name;
        this.fals = 1;
        common_vendor.index.hideLoading();
      }, 100);
    },
    clickSearch1(p) {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
      console.log(p);
      setTimeout(() => {
        common_vendor.index.showToast({
          title: "\u52A0\u8F7D\u6210\u529F",
          icon: "none",
          position: "bottom",
          duration: 100
        });
        this.keyWord = p;
        this.fals = 1;
        common_vendor.index.hideLoading();
      }, 100);
    }
  },
  watch: {
    keyWord: {
      immediate: true,
      handler(val) {
        this.filPersons = this.alllist.filter((p) => {
          return p.name.indexOf(val) !== -1;
        });
        if (val == "") {
          this.filPersons = null;
          this.fals = 0;
        }
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_search2 = common_vendor.resolveComponent("search");
  (_easycom_uni_search_bar2 + _easycom_search2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_search = () => "../../components/search/search.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_search)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.doSearch),
    b: common_vendor.o(($event) => $data.keyWord = $event),
    c: common_vendor.p({
      placeholder: "\u641C\u7D22\u5546\u54C1",
      modelValue: $data.keyWord
    }),
    d: $data.fals
  }, $data.fals ? {
    e: common_vendor.p({
      filPersons: $data.filPersons
    })
  } : {
    f: common_vendor.f($data.filPersons, (p, index, i0) => {
      return {
        a: common_vendor.t(p.name),
        b: index,
        c: common_vendor.o(($event) => $options.clickSearch(p))
      };
    })
  }, {
    g: $data.keyWord == ""
  }, $data.keyWord == "" ? {
    h: common_vendor.o((...args) => $options.dodele && $options.dodele(...args)),
    i: common_vendor.f($data.record, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.value),
        b: common_vendor.o(($event) => $options.clickSearch1(item.value))
      };
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "E:/\u684C\u9762/HBX/catAPP/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
