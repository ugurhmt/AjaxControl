namespace AjaxControl{

    export class Options {

        url : string;
        method : string;
        data : object;
        dataType : string;
        cache : boolean;
        async : boolean;

        constructor(options : any) {
            this.url = options.url;
            this.method = options.method || "get";
            this.data = options.data || {};
            this.dataType = options.dataType || "";
            this.cache = options.cache || false;
            this.async = options.async || false;
        }
        
    }

}