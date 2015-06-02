# Ajax

Asynchronous - request are set without waiting
JavaScript
And
XML - EXtensible Markup Language.


1. Create an XMLHTTP Request object.
2. Create a callback function.
3. Open a request.
4. Send the request.

Setting up Server: Php server
-----------------------------

MAMP - Package
Mac, Apache, MySQL and PHP

Apache is a web server software that is commonly used to run PHP.
MySQL is a database engine.

```
https://www.mamp.info/en/downloads/

- Double click on it to unzip MAMP installer
- Double click to launch the MAMP installler
- click through the first 2 steps
- Continue (licence)
- install this for all users
- Browse Application folder to find MAMP folder and launch MAMP.
- click on preferences - ports - change the port on Apache from 8888 to 80.
- click start server.
- enter password

```

Ajax example

```
<script>
    var xhr = new XMLHttpRequest();
    // onreadystatechange is an event
    // and function after the event is a callback function.
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        document.getElementById('ajax').innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET', 'sidebar.html');
    function sendAJAX() {
      xhr.send();
      document.getElementById("load").style.display = "none";
    }
</script>
```

Keywords:
JSON - Javascript Object Notation
JSON p -
jquery provides easy way to work with jsonp
XML

Ajax Limitations

```
Ajax is limited by the same origin policy, which controls how javascript control and access content from the webserver.

the ways around the same origin policy are

1. create Web Proxy - web services are not limited to the same origin policy. Servers can request data from servers from other domains.

2. JSON P Jason with Padding

it relies on the ability to link the Javascript file across domains.

Jquery is a javascript library

3. CORS - Another method to make ajax request across domains is CORS or Cross Origin Resource Sharing. It is W3 recommendation.

4. It has to be viewed through web servers.

```

JSON formatting:
----------------

JSON - There are two different ways to format JSON.
1. An Array notation.
2. An Object notation.
and It is common to combine both.

Properties must be quoted using double quotes

```
Array example

['string',3,true,false,[1,2,3]]


Object
{
  "name": "Jim",
  "phone": "123-432-543"
}

```

Parsing JSON Data
-------------------

with ajax the browser sends out the request to the webserver. and webserver sends response.

The response is just plain text and we need to take the string and convert it to Javascript.

Office Status Widget


```
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4){
    console.log(typeof xhr.responseText);
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();
```

The typeof method of XMLHttpRequest returns the following in the console.
```
=> XHR finished loading: GET "http://localhost/Ajax/data/employees.json".
String
```

The ResponseText return the String

```
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4){}
    console.log(xhr.responseText);
};

xhr.open('GET', 'data/employees.json');
xhr.send();

```

```
XHR finished loading: GET "http://localhost/Ajax/data/employees.json".(anonymous function) @ widget.js:19
widget.js:15 [
  {
   "name": "Aimee",
   "inoffice": false
  },
  {
   "name": "Amit",
   "inoffice": false
  },
  {
   "name": "Andrew",
   "inoffice": true
  },
  {
   "name": "Ben",
   "inoffice": true
  },
  {
   "name": "Elizabeth",
   "inoffice": true
  },
  {
   "name": "Guil",
   "inoffice": false
  },
  {
   "name": "Hampton",
   "inoffice": true
  },
  {
   "name": "Jason",
   "inoffice": true
  },
  {
   "name": "Lainie",
   "inoffice": true
  },
  {
   "name": "Kenneth",
   "inoffice": false
  },
  {
   "name": "Pasan",
   "inoffice": true
  },
  {
   "name": "Shawna",
   "inoffice": true
  },
  {
   "name": "Zac",
   "inoffice": false
  }
]


```


```
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4){
    //converting string to javascript object.
    var employees = JSON.parse(xhr.responseText);
    console.log(employees);
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

```

this returns in console.
```
XHR finished loading: GET "http://localhost/Ajax/data/employees.json".(anonymous function) @ widget.js:21

widget.js:16 [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]

```

Processing JSON Data:
---------------------


1. Create new HTML list Item
2. Check the "inoffice" property
3. Get the value for the "name" property; Insert the inside the <li> tag.
4. close the <li> tag















