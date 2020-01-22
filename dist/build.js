"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AjaxControl;
(function (AjaxControl) {
    var AjaxRequest = /** @class */ (function () {
        function AjaxRequest() {
            this.$ = window["jQuery"];
        }
        AjaxRequest.prototype.startRequest = function (options, successCallback, errorCallback, beforeSend, complete) {
            if (this.$ != null) {
                this.$.ajax({
                    url: options.url,
                    type: options.method,
                    data: options.data,
                    dataType: options.dataType,
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function (result) {
                        successCallback(result);
                    },
                    error: function (result) {
                        if (errorCallback) {
                            errorCallback(result);
                            return;
                        }
                        console.log("Error in (" + options.url + ")");
                        console.log(JSON.stringify(result));
                    },
                    beforeSend: function () {
                        if (beforeSend)
                            beforeSend();
                    },
                    complete: function () {
                        if (complete)
                            complete();
                    }
                });
            }
            else
                console.log("AjaxControl needs to Jquery! Please include Jquery on your project!");
        };
        AjaxRequest.prototype.get = function (url, successCallback, errorCallback, beforeSend, complete) {
            this.startRequest(new AjaxControl.Options({ url: url }), successCallback, errorCallback, beforeSend, complete);
        };
        AjaxRequest.prototype.getJson = function (url, successCallback, errorCallback, beforeSend, complete) {
            this.startRequest(new AjaxControl.Options({ url: url, dataType: "Json" }), successCallback, errorCallback, beforeSend, complete);
        };
        AjaxRequest.prototype.getData = function (url, data, successCallback, errorCallback, beforeSend, complete) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data }), successCallback, errorCallback, beforeSend, complete);
        };
        AjaxRequest.prototype.getDataJson = function (url, data, successCallback, errorCallback, beforeSend, complete) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data, dataType: "Json" }), successCallback, errorCallback, beforeSend, complete);
        };
        AjaxRequest.prototype.postData = function (url, data, successCallback, errorCallback, beforeSend, complete) {
            this.startRequest(new AjaxControl.Options({ url: url, method: "post", data: data }), successCallback, errorCallback, beforeSend, complete);
        };
        AjaxRequest.prototype.postDataJson = function (url, data, successCallback, errorCallback, beforeSend, complete) {
            this.startRequest(new AjaxControl.Options({ url: url, method: "post", data: data, dataType: "Json" }), successCallback, errorCallback, beforeSend, complete);
        };
        return AjaxRequest;
    }());
    AjaxControl.AjaxRequest = AjaxRequest;
})(AjaxControl || (AjaxControl = {}));
/// <reference path="./AjaxRequest.ts" />
var AjaxControl;
(function (AjaxControl) {
    var AjaxFormSubmit = /** @class */ (function (_super) {
        __extends(AjaxFormSubmit, _super);
        function AjaxFormSubmit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AjaxFormSubmit.prototype.submitForm = function (formName, successCallback, onsubmitFunction, errorCallback, beforeSend, complete) {
            var localThis = this;
            if (localThis.$ != null) {
                localThis.$(function () {
                    localThis.$("form[ name = " + formName + " ]").submit(function (e) {
                        if (onsubmitFunction && !onsubmitFunction())
                            return false;
                        var form = localThis.$(e.currentTarget);
                        var data = new FormData(form[0]);
                        var url = form.attr("action");
                        var method = form.attr("method");
                        if (method == "post")
                            localThis.postDataJson(url, data, successCallback, errorCallback, beforeSend, complete);
                        else
                            localThis.getDataJson(url, data, successCallback, errorCallback, beforeSend, complete);
                        return false;
                    });
                });
            }
            else
                console.log("AjaxControl needs to Jquery! Please include Jquery on your project!");
        };
        return AjaxFormSubmit;
    }(AjaxControl.AjaxRequest));
    AjaxControl.AjaxFormSubmit = AjaxFormSubmit;
})(AjaxControl || (AjaxControl = {}));
var AjaxControl;
(function (AjaxControl) {
    var Options = /** @class */ (function () {
        function Options(options) {
            this.url = options.url;
            this.method = options.method || "get";
            this.data = options.data || {};
            this.dataType = options.dataType || "";
            this.cache = options.cache || false;
            this.async = options.async || false;
        }
        return Options;
    }());
    AjaxControl.Options = Options;
})(AjaxControl || (AjaxControl = {}));
//# sourceMappingURL=build.js.map