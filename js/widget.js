/*
1. Create an XMLHTTP Request object.
2. Create a callback function.
3. Open a request.
4. Send the request.

The information that the web server returns is contained in a property
name response text.
it is a property of XMLHttpRequest object
*/

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4){
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();