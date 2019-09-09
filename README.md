# AjaxControl

Create Ajax get and post request via AjaxControl typescript namespace

# Authors

* **Uğur Hamurpet** - *ugurhamurpet@gmail.com* - [ugurhmt](https://github.com/ugurhmt)

# Getting Started

If you want to develop this project follow steps below

* Clone the project on your pc
* Download npm
* Install typescript using npm

```
  npm install -g typescript
```

If you want to only use project. Usage is as follows

```

function AjaxLoader( url, element ){
  new AjaxControl.AjaxRequest().get(url, function( response ) {
      $( element ).html( response );
  });
}

AjaxLoader( "https://github.com", "div#githubResponse" );

```

To display detailed usage please open the index.html file

# Coding Hierarchy
  
  ``` 
  Namespace : AjaxControl
  Interface : IAjaxControl
  Class{
    Options: {
      method : constructor
    },
    AjaxRequest: {
      method : {
        startRequest : ( options : Options, successCallback : Function, errorCallback? : Function ),
        get : ( url : string, successCallback : Function ),
        getJson : ( url : string, successCallback : Function ),
        getData : ( url : string, data = "", successCallback : Function ),
        getDataJson : ( url : string, data = "", successCallback : Function ),
        postData: ( url : string, data = "", successCallback : Function ),
        postDataJson : ( url : string, data = "", successCallback : Function )
      }
    },
    AjaxFormSubmit:{
      method : {
        submitForm : ( formName : string, successCallback : Function, onsubmitFunction? : Function )
      }
    }
   }
  ```

# Build With
  
This namespace needs to [jquery](https://jquery.com/download/) for start ajax request.

# Compile and Deployment

You can use link below for deploy or compile application

[https://code.visualstudio.com/docs/typescript/typescript-compiling](https://code.visualstudio.com/docs/typescript/typescript-compiling)
