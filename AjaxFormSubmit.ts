/// <reference path="./AjaxRequest.ts" />

namespace AjaxControl{
    
    export class AjaxFormSubmit extends AjaxRequest{
        
        submitForm( formName : string, successCallback : Function, onsubmitFunction? : Function ){
            
            const localThis = this;

            if(onsubmitFunction != null) onsubmitFunction();

            if( localThis.$ != null ){

                localThis.$(function(){

                    localThis.$( "form[ name = "+ formName +" ]" ).submit((e:any) => {
                    
                        let form = localThis.$(e.currentTarget);
                        let data = new FormData( form[0] );
                        let url = form.attr("action");
                        let method = form.attr("method");
                        
                        if( method == "post" )
                            localThis.postDataJson(url, data, successCallback);
                        else
                            localThis.getDataJson(url, data, successCallback);
                        
                        return false;
                        
                    });

                });

            }else console.log( "AjaxControl needs to Jquery! Please include Jquery on your project!" );

        }
       
    }

}