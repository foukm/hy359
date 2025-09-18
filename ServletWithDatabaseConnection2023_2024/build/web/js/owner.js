function getOwner() {

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //$("#ajaxContent").html(createTableFromJSON(JSON.parse(xhr.responseText)));
            fillInUserFormOwner(JSON.parse(xhr.responseText));
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
    xhr.open('GET', 'GetOwner?'+data);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}



function fillInUserFormOwner(data)
{
    document.getElementById("owner_id").value=data.owner_id;
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

    document.getElementById("type").value="Pet Owner";
        
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
    
    
    document.getElementById('petsMod').style.display="block";
    document.getElementById('petsMod').style.visibility="visible";
    
    document.getElementById("type").disabled = true;
    document.getElementById("myForm").style.display="block";
    whichOnePet();
    canDoAbooking();
    finishButton();
}
function whichOnePet()
{
    var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            document.getElementById("pet_belongs").value=xhr.responseText;
            var p="";
            p=document.getElementById('pet_belongs').value;
            document.getElementById('pet_id1').value=p;
            document.getElementById('owner_id1').value = document.getElementById('owner_id').value;
            document.getElementById("pet_id1").readOnly = true;
            document.getElementById("owner_id1").readOnly = true;
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        
        params = "owner_id" + "=" + document.getElementById('owner_id').value ;
        
        console.log(params);
        xhr.open('GET', 'ReturnPet?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
}
function sendEditOwnerAJAX()
{
    let myForm = document.getElementById('myForm');
    console.log(myForm.checkValidity());
    /*if(myForm.checkValidity())
    {*/
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
        console.log(params);
        xhr.open('POST', 'EditOwner');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    //}
}


function insertPet()
{
    let myForm = document.getElementById('insertApet');
    let formData = new FormData(myForm);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    var jsonData=JSON.stringify(data);
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           //document.getElementById('msg').innerHTML=JSON.stringify(xhr.responseText);   
        } else if (xhr.status !== 200) {
            //document.getElementById('msg')
           //         .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"+
	 //JSON.stringify(xhr.responseText);
 
        }
    };
    console.log(jsonData);
    xhr.open('POST', 'http://localhost:4567/pet/'+"");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(jsonData);
}

function ownStart()
{
    document.getElementById("petsMod").style.display="none";
    document.getElementById("petsMod").style.visibility = "hidden"; 
}

function modPetW()
{
        var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
           //document.getElementById('msg').innerHTML=JSON.stringify(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            //document.getElementById('msg')
            //        .innerHTML = 'Request failed. Returned status of ' + xhr.status + "<br>"+
	//JSON.stringify(xhr.responseText);

        }
    };
     var petid=document.getElementById("pet_id1").value;
    var newW=document.getElementById("newweight").value;
    xhr.open('PUT', ' http://localhost:4567/petWeight/'+petid+"/"+newW);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}

function sendReview()
{
   let myForm = document.getElementById('review');
    console.log(myForm.checkValidity());
    /*if(myForm.checkValidity())
    {*/
        let formData = new FormData(myForm);
        var xhr = new XMLHttpRequest();
        
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
         document.getElementById("revCheck").innerHTML = "ολα οκ";
        } else if (xhr.status !== 200) {
          document.getElementById("revCheck").innerHTML = "Ύπηρξε πρόβλημα";
        }
        };
        var params = "";
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }
        params += "owner_id" + "=" + document.getElementById('owner_id').value ;
               console.log(params);
        xhr.open('POST', 'SendReview');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    //}
}

function sendAmessageTPK()
{
    let myForm = document.getElementById('messageForm');
    
        let formData = new FormData(myForm);
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
            document.getElementById("sendMTPK").innerHTML = "ola ok";
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            document.getElementById("sendMTPK").innerHTML = "Den uparxei accepted booking";
        }
        };
        var params = "";
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }
        params += "owner_id" + "=" + document.getElementById('owner_id').value ;
        
        console.log(params);
        xhr.open('POST', 'SendMessageToPetKeeper');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
}



function bookdate()
{
    let myForm = document.getElementById('booking');
    
        let formData = new FormData(myForm);
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            /*let data = xhr.responseText;
            let len = data.length;
            len = len-4;
            let sub = data.substring(14,len);
            sub = sub.replaceAll('{"sum(cost)":"','');
            sub = sub.replaceAll('"}'," ");
            console.log(xhr.responseText);
            document.getElementById("hereTheCost").innerHTML=sub;
            */
            //document.getElementById("answerbreed").innerHTML = xhr.responseText;
            var res = JSON.parse(xhr.responseText);
            var option="";
            
            for(var i=0; i<res.length; i++)
            {
                /*document.getElementById("keeperss").innerHTML += res[i].email;
                document.getElementById("keeperss").innerHTML += " ";
                document.getElementById("keeperss").innerHTML += res[i].username;
                document.getElementById("keeperss").innerHTML += "<br/>";*/
                    option+='<option value="'+ res[i].keeper_id + '">'+ res[i].firstname+" "+res[i].lastname+" Cat "+res[i].catprice+" Dog "+res[i].dogprice+"</option>";
            }
            document.getElementById("keeperer").innerHTML=option;
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }
        params += "owner_id" + "=" + document.getElementById('owner_id').value ;
       // params = params.substring(0, params.length - 1);
        xhr.open('GET', 'KeepersDate?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
}


function sendAbookingRequest()
{
        //console.log("mesa");
        //console.log(document.getElementById("keeperer").value);
        
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        params += "keeper_id" + "=" + document.getElementById('keeperer').value + "&";
        params += "owner_id" + "=" + document.getElementById('owner_id').value+"&" ;
        params += "fromdate" + "=" + document.getElementById('fromdate').value+"&" ;
        params += "todate" + "=" + document.getElementById('todate').value ;
        /*for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }
    
        params = params.substring(0, params.length - 1);*/
        console.log(params);
        xhr.open('POST', 'SendArequestToAkeeper');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
    
    
    function canDoAbooking()
    {
       
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                 document.getElementById("chooseKeeper").style.display="block";
            } else if (xhr.status !== 200) {
                 document.getElementById("chooseKeeper").style.display="none";

            }
        };
        params = "owner_id="+document.getElementById("owner_id").value;
        xhr.open('GET','CanDoABooking?'+params);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    }
    
    function finishButton()
    {
       
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                 document.getElementById("finishedButton").style.display="block";
            } else if (xhr.status !== 200) {
                 document.getElementById("finishedButton").style.display="none";

            }
        };
        params = "owner_id="+document.getElementById("owner_id").value;
        xhr.open('GET','CanFinishAbooking?'+params);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    }
    
    function finishBooking()
    {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.status);
            if (xhr.readyState === 4 && xhr.status === 200) {
                 document.getElementById("finishedButton").style.display="none";
                 document.getElementById("chooseKeeper").style.display="block";
            } else if (xhr.status !== 200) {
                 document.getElementById("finishedButton").style.display="block";
                 document.getElementById("chooseKeeper").style.display="none";

            }
        };
        params = "owner_id="+document.getElementById("owner_id").value;
        xhr.open('GET','FinishAbooking?'+params);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    }