$.ajax({
		type:"POST", //Specifies the type of request. (GET or POST)
		url:"http://....",
		data:formData,
		cache:false,
		contentType: "application/json",
		processData: false, //A Boolean value specifying whether or not data sent with the request should be transformed into a query string. Default is true
		dataType: "application/json",
		username:"test", //Specifies a username to be used in an HTTP access authentication request
		password:"test", //Specifies a password to be used in an HTTP access authentication request.
		timeout: 3000 // sets timeout to 3 seconds.	The local timeout (in milliseconds) for the request
		data:data:{"name":"name1","pass":"pass1"}, //way-2 $('#form').serialize() or serializeArray(), for serialize form data into a array like name=value //way-3 "data1="+"value1"+"&data2="+"value2", //passing data with request
		beforeSend: function() {
			document.getElementById("test").innerHTML = '<img src="loader.png" />'; //load image in button, you can do anything before request
			request.setRequestHeader("Authorization", "authorizationToken"); //for send header
		},
		headers: {
        "Authorization":"first value", //for send header
    	}
		success:function(res){
			console.log(res);
		}
		error:function(err){
			document.getElementById("test").innerHTML = 'Login'; //if login false back login text
		}
	});




//short request

$.post("api.php", {"data1":"value1","data2":"value2"}, function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  }); //stracture: $(selector).post(URL,data,function(data,status,xhr),dataType);



$.get("api.php", {"data1":"value1","data2":"value2"}, function(data){
  alert("Data: " + data);
}); //stracture: $.get(URL,data,function(data,status,xhr),dataType);



$("#div1").load("demo_test.txt"); //or
$("#ab").load("http://localhost/api/api.php", {"data1":"value1","data2":"value2"}, function(data){
  alert("Data: " + data);
}); //stracture: $(selector).load(url,data,function(response,status,xhr)); //load function retrieve response data into a selector id or class that is defined
