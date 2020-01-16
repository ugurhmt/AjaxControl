/// <reference path="./AjaxRequest.ts" />

namespace AjaxControl{
    
    export class AjaxFormSubmit extends AjaxRequest{
        
        submitForm( formName : string, successCallback : Function, onsubmitFunction? : Function, errorCallback? : Function, beforeSend? : Function, complete? : Function  ){
            
            const localThis = this;

            if( localThis.$ != null ){

                localThis.$(function(){

                    localThis.$( "form[ name = "+ formName +" ]" ).submit((e:any) => {
                    
                        if( onsubmitFunction ) if(!onsubmitFunction()) return;
                        
                        let form = localThis.$(e.currentTarget);
                        let data = new FormData( form[0] );
                        let url = form.attr("action");
                        let method = form.attr("method");
                        
                        if( method == "post" ) localThis.postDataJson(url, data, successCallback, errorCallback, beforeSend, complete);
                        else localThis.getDataJson(url, data, successCallback, errorCallback, beforeSend, complete);
                        
                        return false;
                        
                    });

                });

            }else console.log( "AjaxControl needs to Jquery! Please include Jquery on your project!" );

        }
       
    }

}