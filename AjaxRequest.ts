namespace AjaxControl{

    export class AjaxRequest implements IAjaxControl {
        
        startRequest( options : Options, successCallback : Function, errorCallback? : Function ){

            const $ : any = (window as any)["jQuery"];

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

            }else console.log( "AjaxControl needs to Jquery! Please include Jquery on your project!" );

        }

        get( url : string, successCallback : Function ){
            this.startRequest( new Options({ url : url }), successCallback );
        }

        getJson( url : string, successCallback : Function ){
            this.startRequest( new Options({ url : url, dataType : "Json" }), successCallback );
        }

        getData( url : string, data : any = "", successCallback : Function ){
            this.startRequest( new Options({ url : url, data : data }), successCallback );
        }

        getDataJson( url : string, data : any = "", successCallback : Function ){
            this.startRequest( new Options({ url : url, data : data, dataType : "Json" }), successCallback );
        }

        postData( url : string, data : any = "", successCallback : Function ){
            this.startRequest( new Options({ url : url, data : data }), successCallback );
        }

        postDataJson( url : string, data : any = "", successCallback : Function ){
            this.startRequest( new Options({ url : url, data : data, dataType : "Json" }), successCallback );
        }

    }

}