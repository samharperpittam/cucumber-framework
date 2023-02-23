"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parseEnv = require("./env/parseEnv");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var environment = (0, _parseEnv.env)('NODE_ENV');

_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});

_dotenv.default.config({
  path: "".concat((0, _parseEnv.env)('ENV_PATH')).concat(environment, ".env")
});

var hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
var pagesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('PAGE_URLS_PATH'));
var emailsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('EMAILS_URLS_PATH'));

var mappingFiles = _fs.default.readdirSync("".concat(process.cwd()).concat((0, _parseEnv.env)('PAGE_ELEMENTS_PATH')));

var pageElementMappings = mappingFiles.reduce(function (pageElementConfigAcc, file) {
  var key = file.replace('.json', '');
  var elementMappings = (0, _parseEnv.getJsonFromFile)("".concat((0, _parseEnv.env)('PAGE_ELEMENTS_PATH')).concat(file));
  return _objectSpread(_objectSpread({}, pageElementConfigAcc), {}, _defineProperty({}, key, elementMappings));
}, {});
var worldParameters = {
  hostsConfig: hostsConfig,
  pagesConfig: pagesConfig,
  emailsConfig: emailsConfig,
  pageElementMappings: pageElementMappings
};
var common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 -f json:./reports/report.json                 --world-parameters ".concat(JSON.stringify(worldParameters), "                 --format progress-bar                 --parallel ").concat((0, _parseEnv.env)('PARALLEL'), "                 --retry ").concat((0, _parseEnv.env)('RETRY'));
var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");
exports.regression = regression;