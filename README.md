#Project Name : AjaxControl
#Author : Uğur Hamurpet<ugurhamurpet@gmail.com>
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
