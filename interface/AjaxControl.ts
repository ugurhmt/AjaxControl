namespace AjaxControl{
    
    export interface IAjaxControl{

        startRequest( options : Options, successCallback : Function, errorCallback : Function ) : any;

    }

}