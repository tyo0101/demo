"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("bootstrap/dist/css/bootstrap.css");

var _bootstrapVue = require("bootstrap-vue-3");

require("bootstrap-vue-3/dist/bootstrap-vue-3.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Bootstrap的CSS
// BootstrapVue的CSS
var app = (0, _vue.createApp)(_App["default"]);
app.use(_store["default"]);
app.use(_router["default"]);
app.use(_bootstrapVue.BootstrapVue3);
app.use(_bootstrapVue.BVToastPlugin); // 如果您需要Toast插件，其他插件也类似使用

app.mount('#app');
//# sourceMappingURL=main.dev.js.map
