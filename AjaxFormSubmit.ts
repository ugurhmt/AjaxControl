/// <reference path="./AjaxRequest.ts" />

namespace AjaxControl{
    
    export class AjaxFormSubmit extends AjaxRequest{
        
        submitForm( formName : string, successCallback : Function, onsubmitFunction? : Function ){
            const $ : any = (window as any)["jQuery"];

            if(onsubmitFunction != null) onsubmitFunction();

            if( $ != null ){

                $(function(){

                    $( "form[ name = "+ formName +" ]" ).submit((e:any) => {
                    
                        let form = $(e.currentTarget)[0];
                        let data = new FormData( form );
                        let url = form.attr("action");
                        let method = form.attr("method"); 
                            
                        /* if( method == "post" )
                            this.postDataJson(url, data, successCallback);
                        else
                            this.getDataJson(url, data, successCallback); */
                        
                        return false;
                    });

                });

            }else console.log( "AjaxControl needs to Jquery! Please include Jquery on your project!" );

        }
       
    }

}