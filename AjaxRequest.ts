namespace AjaxControl{

    export class AjaxRequest implements IAjaxControl {
        
        public $ : any = (window as any)["jQuery"];

        startRequest( options : Options, successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){

            if( this.$ != null ){

                this.$.ajax({
                    url: options.url,
                    type: options.method,
                    data: options.data,
                    dataType : options.dataType,
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function ( result:any ) {
                        successCallback( result );
                    },
                    error: function ( result:any ) {
                        if ( errorCallback ) {
                            errorCallback( result );
                            return;
                        }
                        console.log("Error in (" + options.url + ")");
                        console.log(JSON.stringify(result));
                    },
                    beforeSend : function( result:any ){
                        if( beforeSend ) beforeSend(result);
                    },
                    complete : function ( result:any ) {
                        if( complete ) complete( result );
                    }
                });

            }else console.log( "AjaxControl needs to Jquery! Please include Jquery on your project!" );

        }

        get( url : string, successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){
            this.startRequest( new Options({ url : url }), successCallback, errorCallback, beforeSend, complete );
        }

        getJson( url : string, successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){
            this.startRequest( new Options({ url : url, dataType : "Json" }), successCallback, errorCallback, beforeSend, complete );
        }

        getData( url : string, data : any = "", successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){
            this.startRequest( new Options({ url : url, data : data }), successCallback, errorCallback, beforeSend, complete );
        }

        getDataJson( url : string, data : any = "", successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){
            this.startRequest( new Options({ url : url, data : data, dataType : "Json" }), successCallback, errorCallback, beforeSend, complete );
        }

        postData( url : string, data : any, successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){
            this.startRequest( new Options({ url : url, method: "post", data : data }), successCallback, errorCallback, beforeSend, complete );
        }

        postDataJson( url : string, data : any, successCallback : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function ){
            this.startRequest( new Options({ url : url, method: "post", data : data, dataType : "Json" }), successCallback, errorCallback, beforeSend, complete );
        }

    }

}