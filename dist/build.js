"use strict";
var AjaxControl;
(function (AjaxControl) {
    var AjaxRequest = /** @class */ (function () {
        function AjaxRequest() {
        }
        AjaxRequest.prototype.startRequest = function (options, successCallback, errorCallback) {
            var $ = options.globfunction;
            if ($ != null) {
                $.ajax({
                    url: options.url,
                    type: options.method,
                    data: options.data,
                    dataType: options.dataType,
                    cache: false,
                    success: function (result) {
                        successCallback(result);
                    },
                    error: function (result) {
                        if (errorCallback) {
                            errorCallback(result);
                            return;
                        }
                        var errorTitle = "Error in (" + options.url + ")";
                        var fullError = JSON.stringify(result);
                        console.log(errorTitle);
                        console.log(fullError);
                    }
                });
            }
        };
        AjaxRequest.prototype.get = function (url, successCallback, globfunction) {
            this.startRequest(new AjaxControl.Options({ url: url }, globfunction), successCallback);
        };
        AjaxRequest.prototype.getJson = function (url, successCallback, globfunction) {
            this.startRequest(new AjaxControl.Options({ url: url, dataType: "Json" }, globfunction), successCallback);
        };
        AjaxRequest.prototype.getData = function (url, data, successCallback, globfunction) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data }, globfunction), successCallback);
        };
        AjaxRequest.prototype.getDataJson = function (url, data, successCallback, globfunction) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data, dataType: "Json" }, globfunction), successCallback);
        };
        AjaxRequest.prototype.postData = function (url, data, successCallback, globfunction) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data }, globfunction), successCallback);
        };
        AjaxRequest.prototype.postDataJson = function (url, data, successCallback, globfunction) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data, dataType: "Json" }, globfunction), successCallback);
        };
        return AjaxRequest;
    }());
    AjaxControl.AjaxRequest = AjaxRequest;
})(AjaxControl || (AjaxControl = {}));
var AjaxControl;
(function (AjaxControl) {
    var Options = /** @class */ (function () {
        function Options(options, globfunction) {
            this.url = options.url;
            this.method = options.method || "get";
            this.data = options.data || {};
            this.dataType = options.dataType || "";
            this.cache = options.cache || false;
            this.async = options.async || false;
            this.globfunction = globfunction;
        }
        return Options;
    }());
    AjaxControl.Options = Options;
})(AjaxControl || (AjaxControl = {}));
//# sourceMappingURL=build.js.map