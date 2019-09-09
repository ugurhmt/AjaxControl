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
        }
        AjaxRequest.prototype.startRequest = function (options, successCallback, errorCallback) {
            var $ = window["jQuery"];
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
            else
                console.log("AjaxControl needs to Jquery! Please include Jquery on your project!");
        };
        AjaxRequest.prototype.get = function (url, successCallback) {
            this.startRequest(new AjaxControl.Options({ url: url }), successCallback);
        };
        AjaxRequest.prototype.getJson = function (url, successCallback) {
            this.startRequest(new AjaxControl.Options({ url: url, dataType: "Json" }), successCallback);
        };
        AjaxRequest.prototype.getData = function (url, data, successCallback) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data }), successCallback);
        };
        AjaxRequest.prototype.getDataJson = function (url, data, successCallback) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data, dataType: "Json" }), successCallback);
        };
        AjaxRequest.prototype.postData = function (url, data, successCallback) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data }), successCallback);
        };
        AjaxRequest.prototype.postDataJson = function (url, data, successCallback) {
            if (data === void 0) { data = ""; }
            this.startRequest(new AjaxControl.Options({ url: url, data: data, dataType: "Json" }), successCallback);
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
        AjaxFormSubmit.prototype.submitForm = function (formName, successCallback, onsubmitFunction) {
            var $ = window["jQuery"];
            if (onsubmitFunction != null)
                onsubmitFunction();
            if ($ != null) {
                $(function () {
                    $("form[ name = " + formName + " ]").submit(function (e) {
                        var form = $(e.currentTarget)[0];
                        var data = new FormData(form);
                        var url = form.attr("action");
                        var method = form.attr("method");
                        /* if( method == "post" )
                            this.postDataJson(url, data, successCallback);
                        else
                            this.getDataJson(url, data, successCallback); */
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