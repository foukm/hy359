
function createTableFromJSON(data) {
    var html = "<table><tr><th>Category</th><th>Value</th></tr>";
    for (const x in data) {
        var category = x;
        var value = data[x];
        html += "<tr><td>" + category + "</td><td>" + value + "</td></tr>";
    }
    html += "</table>";
    return html;

}

function getUser() {

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //$("#ajaxContent").html(createTableFromJSON(JSON.parse(xhr.responseText)));
            fillInUserForm(JSON.parse(xhr.responseText));
            document.getElementById("logout").style.display="block";
            document.getElementById("logout").style.visibility = "visible"; 
            document.getElementById("login").style.display="none";
            document.getElementById("login").style.visibility = "hidden"; 
            //document.getElementById("ajaxContent").innerHTML += data;
            setCookiesLogin(data);
            
          //  $("#ajaxContent").html("Successful Login");
        } else if (xhr.status !== 200) {
             $("#ajaxContent").html("User not exists or incorrect password");
        }
    };

    var data = $('#loginForm').serialize();
    console.log(data);
    xhr.open('GET', 'GetKeeper?'+data);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}

function fillInUserForm(data)
{
    document.getElementById("keeper_id").value=data.keeper_id;
    document.getElementById("username").value=data.username;
    document.getElementById("email").value=data.email;
    document.getElementById("username").readOnly = true;
    document.getElementById("email").readOnly = true;
    document.getElementById("firstname").value=data.firstname;
    document.getElementById("lastname").value=data.lastname;
    document.getElementById("password").value=data.password;
    document.getElementById("passwordCheck").value=data.password;
    document.getElementById("birthdate").value=data.birthdate;
    document.getElementById("city").value=data.city;
    document.getElementById("address").value=data.address;
    document.getElementById("country").value=data.country;
    document.getElementById("personalpage").value=data.personalpage;
    document.getElementById("job").value=data.job;
    document.getElementById("telephone").value=data.telephone;
    document.getElementById("property").value=data.property;
    document.getElementById("propertydescription").value=data.propertydescription;
    document.getElementById("catprice").value=data.catprice;
    document.getElementById("dogprice").value=data.dogprice;
    document.getElementById("type").value="Pet Keeper";
    showExtra();
    
    if(data.property==="Indoor")
    {
        document.getElementById("property").value="Indoor";
    }else if(data.property==="Outdoor")
    {
        document.getElementById("property").value="Outdoor";
    }else
    {
        document.getElementById("property").value="Both";
    }
    
    
    
    if(data.gender==="Male")
    {
        document.getElementById("gender").value="Male";
    }else if(data.gender==="Female")
    {
        document.getElementById("gender").value="Female";
    }else
    {
        document.getElementById("gender").value="Other";
    }
    
    if(data.catkeeper==="true")
    {
        document.getElementById("catkeeper").checked = true;
        document.getElementById("catS").style.visibility = "visible";
        
        document.getElementById("catprice").removeAttribute("disabled");
        document.getElementById("catS").style.display="block";
    }
    if(data.dogkeeper==="true")
    {
        document.getElementById("dogkeeper").checked = true;
        document.getElementById("dogprice").removeAttribute("disabled");
        document.getElementById("dogS").style.visibility = "visible";
        document.getElementById("dogS").style.display="block";
    }
    
    document.getElementById("type").disabled = true;
    document.getElementById("myForm").style.display="block";
    //document.getElementById("petsMod").style.display="block";
    checkReq();
}


function initDB() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
              $("#ajaxContent").html("Successful Initialization");
        } else if (xhr.status !== 200) {
             $("#ajaxContent").html("Error Occured");
        }
    };

    xhr.open('GET', 'InitDB');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}

function deleteDB() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
              $("#ajaxContent").html("Successful Deletion");
        } else if (xhr.status !== 200) {
             $("#ajaxContent").html("Error Occured");
        }
    };

    xhr.open('GET', 'DeleteDB');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}

function start()
{
    document.getElementById("logout").style.display="none";
    document.getElementById("logout").style.visibility = "hidden";  
    document.getElementById("login").style.display="block";
    document.getElementById("login").style.visibility = "visible";
}

function setCookiesLogin(data)
{
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    } else if (xhr.status !== 200) {
    }
    };
    
    xhr.open('POST', 'Login');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function getUsername() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            return xhr.response;
        } else if (xhr.status !== 200) {
            //$("#choices").load("buttons.html");
            alert('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.open('GET', 'Login');
    xhr.send();
}

function getPassword() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            return xhr.response;
        } else if (xhr.status !== 200) {
            //$("#choices").load("buttons.html");
            alert('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.open('GET', 'secondServletForLoginPassword');
    xhr.send();
}

function checkCookiesForTheUser()
{
    
   var us;
   var pas;
   var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            us = xhr.response;
            if(us!==null && us!=='')
            {
                    var x = new XMLHttpRequest();
                    x.onload = function () {
                        if (x.readyState === 4 && x.status === 200) {
                            pas =  x.response;
                            if(pas!==null && pas!=='')
                            {
                                var m = new XMLHttpRequest();
                                var m = new XMLHttpRequest();
                                  m.onload = function () {
                                      if (m.readyState === 4 && m.status === 200) {
                                          //$("#ajaxContent").html(createTableFromJSON(JSON.parse(m.responseText)));
                                          console.log(m.responseText);
                                          fillInUserForm(JSON.parse(m.responseText));
                                          document.getElementById("logout").style.display="block";
                                          document.getElementById("logout").style.visibility = "visible"; 
                                          document.getElementById("login").style.display="none";
                                          document.getElementById("login").style.visibility = "hidden"; 
                                      } else if (m.status !== 200) {
                                      }
                                  };

                                  var data ="";
                                  data = "username="+us+"&password="+pas;
                                  m.open('GET', 'GetKeeper?'+data);
                                  m.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                                  m.send();
                            }
                        } else if (x.status !== 200) {
                            //$("#choices").load("buttons.html");
                            //alert('Request failed. Returned status of ' + xhr.status);
                        }
                    };
                    x.open('GET', 'secondServletForLoginPassword');
                    x.send();
            }
        } else if (xhr.status !== 200) {
            //$("#choices").load("buttons.html");
            //alert('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.open('GET', 'Login');
    xhr.send();
}

function logout()
{
    var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("logout").style.display="none";
                document.getElementById("logout").style.visibility = "hidden"; 
                document.getElementById("login").style.display="block";
                document.getElementById("login").style.visibility = "visible";
                document.getElementById("ajaxContent").innerHTML = "";
            } else if (xhr.status !== 200) {
                 
            }
        };
        xhr.open('GET', 'thirdServletForLoginRemoveCookies');
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send();
}

function sendEditAJAX()
{
    let myForm = document.getElementById('myForm');
    console.log(myForm.checkValidity());
    if(myForm.checkValidity())
    {
        let formData = new FormData(myForm);
        var xhr = new XMLHttpRequest();
        
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
        //document.getElementById("apotel").innerHTML = "Η επεξεργασία έγινε επιτυχώς";
        } else if (xhr.status !== 200) {
        //document.getElementById("apotel").innerHTML = "Ύπηρξε πρόβλημα κατά την εγγραφή";
        }
        };
        var params = "";
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }

       loadDoc(document.getElementById("address").value,document.getElementById("city").value,document.getElementById("country").value);
        console.log(lAt);
        if(lAt!==null && lOn!==null)
        {
                params += "lat" + "=" + lAt + "&";
                params += "lon" + "=" + lOn + "&";
        }else
        {
            params += "lat" + "=" + "0" + "&";
            params += "lon" + "=" + "0" + "&";
        }

        params = params.substring(0, params.length - 1);
        xhr.open('POST', 'Edit');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

function checkReq()
{
    
    var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                 document.getElementById("hasRequest").style.display="block";
            } else if (xhr.status !== 200) {
                 document.getElementById("hasRequest").style.display="none";

            }
        };
        let params="";
        params = "keeper_id="+document.getElementById("keeper_id").value;
        console.log(params);
        xhr.open('GET','HasRequest?'+params);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
}

function acceptReq()
{
    var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                 document.getElementById("hasRequest").style.display="none";
            } else if (xhr.status !== 200) {
                 document.getElementById("hasRequest").style.display="none";

            }
        };
        let params="";
        params = "keeper_id="+document.getElementById("keeper_id").value;
        console.log(params);
        xhr.open('GET','AcceptRequest?'+params);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
}

function rejectRed()
{
    var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                 document.getElementById("hasRequest").style.display="none";
            } else if (xhr.status !== 200) {
                 document.getElementById("hasRequest").style.display="none";

            }
        };
        let params="";
        params = "keeper_id="+document.getElementById("keeper_id").value;
        console.log(params);
        xhr.open('GET','RejectRequest?'+params);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
}