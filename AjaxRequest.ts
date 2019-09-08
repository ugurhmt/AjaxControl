namespace AjaxControl{

    export class AjaxRequest implements IAjaxControl {
        
        startRequest( options : Options, successCallback : Function, errorCallback? : Function ){

            let $ = options.globfunction;

            if( $ != null ){

                $.ajax({
                    url: options.url,
                    type: options.method,
                    data: options.data,
                    dataType : options.dataType,
                    cache: false,
                    success: function (result:any) {
                        successCallback(result);
                    },
                    error: function (result:any) {
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

        }

        get( url : string, successCallback : Function, globfunction : any ){
            this.startRequest( new Options({ url : url }, globfunction), successCallback );
        }

        getJson( url : string, successCallback : Function, globfunction : any ){
            this.startRequest( new Options({ url : url, dataType : "Json" }, globfunction), successCallback );
        }

        getData( url : string, data = "", successCallback : Function, globfunction : any ){
            this.startRequest( new Options({ url : url, data : data }, globfunction), successCallback );
        }

        getDataJson( url : string, data = "", successCallback : Function, globfunction : any ){
            this.startRequest( new Options({ url : url, data : data, dataType : "Json" }, globfunction), successCallback );
        }

        postData( url : string, data = "", successCallback : Function, globfunction : any ){
            this.startRequest( new Options({ url : url, data : data }, globfunction), successCallback );
        }

        postDataJson( url : string, data = "", successCallback : Function, globfunction : any ){
            this.startRequest( new Options({ url : url, data : data, dataType : "Json" }, globfunction), successCallback );
        }

    }

}