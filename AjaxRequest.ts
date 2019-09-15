namespace AjaxControl{

    export class AjaxRequest implements IAjaxControl {
        
        public $ : any = (window as any)["jQuery"];

        startRequest( options : Options, successCallback : Function, errorCallback? : Function ){

            if( this.$ != null ){

                this.$.ajax({
                    url: options.url,
                    type: options.method,
                    data: options.data,
                    dataType : options.dataType,
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function (result:any) {
                        successCallback(result);
                    },
                    error: function (result:any) {
                        if (errorCallback) {
                            errorCallback(result);
                            return;
                        }
                        console.log("Error in (" + options.url + ")");
                        console.log(JSON.stringify(result));
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

        postData( url : string, data : any, successCallback : Function ){
            this.startRequest( new Options({ url : url, method: "post", data : data }), successCallback );
        }

        postDataJson( url : string, data : any, successCallback : Function ){
            this.startRequest( new Options({ url : url, method: "post", data : data, dataType : "Json" }), successCallback );
        }

    }

}