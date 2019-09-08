#Project Name : AjaxControl
#Author : Uğur Hamurpet ugurhamurpet@gmail.com
#Create Date : 08/09/2019
#Description : Create Ajax get and post request via AjaxControl typescript namespace

#Hierarchy
  Namespace : AjaxControl
  Interface : IAjaxControl
  Class{
    Options: {
      method : constructor
    },
    AjaxRequest: {
      method : {
        startRequest : ( options : Options, successCallback : Function, errorCallback? : Function ),
        get : ( url : string, successCallback : Function, globfunction : any ),
        getJson : ( url : string, successCallback : Function, globfunction : any ),
        getData : ( url : string, data = "", successCallback : Function, globfunction : any ),
        getDataJson : ( url : string, data = "", successCallback : Function, globfunction : any ),
        postData: ( url : string, data = "", successCallback : Function, globfunction : any ),
        postDataJson : ( url : string, data = "", successCallback : Function, globfunction : any )
      }
    }
   }

This namespace needs to jquery for start ajax request.

Usage is as follows

function AjaxLoader( url, element ){
  new AjaxControl.AjaxRequest().get(url, function( response ) {
      $( element ).html( response );
  }, $);
}

AjaxLoader( "https://github.com", "div#githubResponse" );

To display detailed usage please open the index.html file
