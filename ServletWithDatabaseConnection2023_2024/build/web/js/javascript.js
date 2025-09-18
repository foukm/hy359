/*Maria Foukaki 
    csd4249 */
function myFunction() {
    document.getElementById("test").innerHTML =
    "My Button pushed";
    document.getElementById("demo").innerHTML =
    "<h1> Bravo to Patises</h1>";
}

function showPass(){
    if(document.getElementById("password").value!='')
    {
            if(document.getElementById("password").type==="text"){
                document.getElementById("password").type="password";
                document.getElementById("Mybutton").value="Show Password";
            }
            else{
                document.getElementById("password").type="text";
                document.getElementById("Mybutton").value="Hide Password";
            }
    }
}



function checkpass() {
    var form = document.forms.myForm;
    var num = form.password.value;
    var num1 = form.passwordCheck.value;
    /*epistrexoun an o kwdikos kai h epanalipsi tou exoun tis lekseis */
    let cat = num.includes("cat");
    let dog = num.includes("dog");
    let gata = num.includes("gata");
    let skylos = num.includes("skylos");
    let cat1 = num1.includes("cat");
    let dog1 = num1.includes("dog");
    let gata1 = num1.includes("gata");
    let skylos1 = num1.includes("skylos");
    if(num!='' && num1!='')
    {
        
        if (num1==num) {
            document.getElementById("message").innerHTML="";
            document.getElementById("message2").innerHTML="";
            var lengthOfPassword = num.length;
            var ints=0;
            var c;
            for(var i=0; i<num.length;i++){
                c=num.charAt(i);
                c=parseInt(c);
                if(Number.isInteger(c)==true)
                {
                    ints++;
                }
            }
            var hasNumber=false;
            var hasCapital=false;
            var hasSymbol=false;
            var hasLower=false;
            function containsSpecialChars(str) {
                const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                return specialChars.test(str);
            }
            function containsUppercase(str) {
                return /[A-Z]/.test(str);
            }
            function containsNumber(str) {
                return /[0-9]/.test(str);
            }
            function containsLowercase(str) {
                return /[a-z]/.test(str);
            }
            hasNumber=containsNumber(num);
            hasLower=containsLowercase(num);
            hasCapital=containsUppercase(num);
            hasSymbol=containsSpecialChars(num);
            if(cat==true || dog==true || gata==true || skylos==true || cat1==true || dog1==true || gata1==true || skylos1==true)
            {
                document.getElementById('password').value='' ; 
                document.getElementById('passwordCheck').value='' ; 
            }else if(ints>=lengthOfPassword/2)
            {
                document.getElementById("message").innerHTML='Weak password';
                return false;
            }else if(hasNumber==true && hasCapital==true && hasLower==true && hasCapital==true)
            {
                document.getElementById("message").innerHTML='Strong password';
                return true;
            }else{
                document.getElementById("message").innerHTML='Medium password';
                return true;
            }

        } else {
            document.getElementById("message").innerHTML='Must be the same';
            document.getElementById("message2").innerHTML='Must be the same';
            
            return false;
        }
        return true;
    }
}

function showExtraSignUp()
{
    var form = document.forms.myForm;
    var pet = form.type.value;
    if(pet!="Pet Keeper")
    {
        document.getElementById("control").style.display="none";
        document.getElementById("control").style.visibility = "hidden";  
        document.getElementById("control").style.display="none";
        document.getElementById("control").style.visibility = "hidden";   
        document.getElementById("property").setAttribute("disabled","disabled");
        document.getElementById("catkeeper").setAttribute("disabled","disabled");
        document.getElementById("dogkeeper").setAttribute("disabled","disabled");
        document.getElementById("catprice").setAttribute("disabled","disabled");
        document.getElementById("dogprice").setAttribute("disabled","disabled");
        document.getElementById("propertydescription").setAttribute("disabled","disabled");
    }else
    {
        
        document.getElementById("control").style.display="block";
        document.getElementById("control").style.visibility = "visible";
        document.getElementById("control").style.display="block";
        document.getElementById("control").style.visibility = "visible";
        document.getElementById("property").removeAttribute("disabled");
        document.getElementById("catkeeper").removeAttribute("disabled");
        document.getElementById("dogkeeper").removeAttribute("disabled");
        //document.getElementById("catprice").removeAttribute("disabled");
        //document.getElementById("dogprice").removeAttribute("disabled");
        document.getElementById("propertydescription").removeAttribute("disabled");
    }
    
}

function showExtra()
{
    var form = document.forms.myForm;
    var pet = form.type.value;
    if(pet!="Pet Keeper")
    {
        document.getElementById("control").style.display="none";
        document.getElementById("control").style.visibility = "hidden";   
        document.getElementById("property").setAttribute("disabled","disabled");
        document.getElementById("catkeeper").setAttribute("disabled","disabled");
        document.getElementById("dogkeeper").setAttribute("disabled","disabled");
        document.getElementById("catprice").setAttribute("disabled","disabled");
        document.getElementById("dogprice").setAttribute("disabled","disabled");
        document.getElementById("propertydescription").setAttribute("disabled","disabled");
    }else
    {
        
        document.getElementById("control").style.display="block";
        document.getElementById("control").style.visibility = "visible";
        document.getElementById("property").removeAttribute("disabled");
        document.getElementById("catkeeper").removeAttribute("disabled");
        document.getElementById("dogkeeper").removeAttribute("disabled");
        document.getElementById("propertydescription").removeAttribute("disabled");
    }
    
}

function showExtraInfoCat()
{
    var form = document.forms.myForm;
    var pet = form.property.value;
    if(pet=="Outdoor")
    {
        document.getElementById("catkeeper").checked = false;
        document.getElementById("catkeeper").setAttribute("disabled","disabled");
        document.getElementById("catprice").required =  false;
        document.getElementById("catS").style.display="none";
        document.getElementById("catS").style.visibility = "hidden";
        document.getElementById("catprice").setAttribute("disabled","disabled");
    }else{
        document.getElementById("catkeeper").removeAttribute("disabled");
        
    }
}

function priceCarPerNight()
{
    document.getElementById("catprice").defaultValue="8";
    if(document.getElementById("catkeeper").checked == true)
    {
        document.getElementById("catprice").required = true;
        document.getElementById("catS").style.display="block";
        document.getElementById("catS").style.visibility = "visible";
        
        document.getElementById("catprice").removeAttribute("disabled");
    }else{
        document.getElementById("catprice").required =  false;
        document.getElementById("catS").style.display="none";
        document.getElementById("catS").style.visibility = "hidden"; 
         document.getElementById("catprice").setAttribute("disabled","disabled");
    }
}

function priceDogPerNight()
{
    document.getElementById("dogprice").defaultValue="10";
    if(document.getElementById("dogkeeper").checked == true)
    {
        document.getElementById("dogprice").required = true;
        document.getElementById("dogS").style.display="block";
        document.getElementById("dogS").style.visibility = "visible";
        document.getElementById("dogprice").removeAttribute("disabled");
    }else{
        document.getElementById("dogprice").required =  false;
        document.getElementById("dogS").style.display="none";
        document.getElementById("dogS").style.visibility = "hidden"; 
        document.getElementById("dogprice").setAttribute("disabled","disabled");
    }
}


let lAt="";
let lOn="";
/*me to pou allaksei kapoia pliroforia apo addressname , city , country */
function completeAddress()
{
    
    var form = document.forms.myForm;
    var addressName = form.address.value;
    var city = form.city.value;
    var country=form.country.value;
    /*ean einai keno h null einai ola krufa */
    if(city=='' || city==null || city==" " || city==' ' )
    {
        document.getElementById("mapButton").style.visibility = "hidden";
        document.getElementById("mapCloseButton").style.visibility = "hidden";
        document.getElementById("Map").style.visibility = "hidden";
        document.getElementById("Map").style.display="none";
        return;
    }else if(city!="Heraklion")/*ean exei kati alla den einai hrakleio */
    {
        document.getElementById("demo").innerHTML="Η υπηρεσία είναι διαθέσιμη μόνο στο Ηράκλειο αυτή τη στιγμή.";
        document.getElementById("mapButton").style.visibility = "hidden";
        document.getElementById("mapCloseButton").style.visibility = "hidden";
        document.getElementById("Map").style.visibility = "hidden";
        document.getElementById("Map").style.display="none";
        return;
    }
    /*an eiani hrakleio*/
    loadDoc(addressName,city,country);
}

function mapB()
{
	
    document.getElementById("Map").style.visibility = "hidden";
    document.getElementById("mapButton").style.visibility = "hidden";
    document.getElementById("mapbutton").disabled=false;
    document.getElementById("mapCloseButton").style.visibility = "hidden";  
    document.getElementById("mapCloseButton").style.display="none";
}

function loadDoc(addressName,city,country){

    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            const obj = JSON.parse(xhr.responseText);
            var addressDetails=obj[0];
            let display_Name = "";
            /*krataw auta p xreiazomai */
            for(var name in addressDetails)
            {
                if(name=="display_name")
                {
                    display_Name=addressDetails[name];
                }
                if(name=="lat")
                {
                    lAt=addressDetails[name];
                }
                if(name=="lon")
                {
                    lOn=addressDetails[name];
                }
                //document.getElementById("demo").innerHTML+=name+" "+addressDetails[name]+"<br>";
            }
            //document.getElementById("mapbutton").disabled=true;
            if(display_Name!='')
            {
                /*an to display name perilamvanei to hrakleio */
                if(display_Name.includes("Heraklion")==true)
                {
                    //document.getElementById("demo").innerHTML+="Υπαρχει <br>";
                    /*visible oti xreiazetai */
                    document.getElementById("demo").innerHTML="";
                    document.getElementById("mapButton").style.visibility = "visible"; 
                    document.getElementById("mapCloseButton").style.visibility = "visible";
                    if(document.getElementById("mapCloseButton").disabled==true)
                    {
                        document.getElementById("mapButton").disabled==false;
                    }
                    /*xartis */
                    if(document.getElementById("mapButton").disabled==true )
                    {
                        document.getElementById("Map").innerHTML="";      
                        document.getElementById("Map").style.visibility = "visible";               
                        document.getElementById("Map").style.display="block";
                        pos();
                    }
                    /*
                    */
                    
                }else{
                    /*ola krufa */
                    document.getElementById("demo").innerHTML="Η υπηρεσία είναι διαθέσιμη μόνο στο Ηράκλειο αυτή τη στιγμή.";
                    document.getElementById("mapCloseButton").style.visibility = "hidden";
                    document.getElementById("mapButton").style.visibility = "hidden";
                    document.getElementById("Map").style.visibility = "hidden";
                    document.getElementById("Map").style.display="none";
                }
            }
        }
    });
    /*var addressName="Kalokairinou"; //Chandakos
    var number='18'; //20
    var city="Heraklion";
    var country="Greece";*/
    var address=addressName+" " +city+" "+country; 


    xhr.open("GET", "https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q="+address+"&accept-language=en&polygon_threshold=0.0");

    xhr.setRequestHeader("x-rapidapi-host", "forward-reverse-geocoding.p.rapidapi.com");
    var key="9bcb099863msh7d912634008c17ep157b0fjsn79d21170ce68"; //YOUR KEY
    xhr.setRequestHeader("x-rapidapi-key", key);

    xhr.send();
}

//Orismos Thesis
function setPosition(lat, lon){
	var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
	var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
	var position       = new OpenLayers.LonLat(lon, lat).transform( fromProjection, toProjection);
	return position;
}

//Orismos Handler
function handler(position, message){
	var popup = new OpenLayers.Popup.FramedCloud("Popup", 
		position, null,
		message, null,
		true // <-- true if we want a close (X) button, false otherwise
	);
	map.addPopup(popup);
	
}

/*vazei ton marker ekei p xreiazetai mee vasi ta lat lon m exoume kratisei */
function makeAmarker(map,markers,lat,lon)
{

	//Protos Marker	
		var position=setPosition(lat,lon);
		var mar=new OpenLayers.Marker(position);
		/*mar.events.register('mousedown', mar, function(evt) { 
			handler(position,'CSD: sxoli mike');}
			);*/
			markers.addMarker(mar);	
			
	//Orismos zoom	
		const zoom           = 10;
		map.setCenter(position, zoom);
	
}

function pos()
{
	//Orismos Marker
	let markers = new OpenLayers.Layer.Markers( "Markers" );
	 map = new OpenLayers.Map("Map");
    var mapnik         = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);	

	//Markers	
    map.addLayer(markers);
	makeAmarker(map,markers,lAt,lOn);

}

function btnClicked()
{
    document.getElementById("Map").innerHTML="";      
    document.getElementById("Map").style.visibility = "visible";               
    document.getElementById("Map").style.display="block";
    pos();
    document.getElementById("mapButton").disabled=true;
    document.getElementById("mapCloseButton").style.display="block";
    document.getElementById("mapCloseButton").disabled=false;
}

function mapClose()
{
    document.getElementById("Map").style.visibility = "hidden";
    document.getElementById("Map").style.display="none";
    document.getElementById("mapCloseButton").disabled=true;
    document.getElementById("mapButton").disabled=false;
}

function sendSignUpAJAX() {
    
    let myForm = document.getElementById('myForm');
    console.log(myForm.checkValidity());
    if(myForm.checkValidity())
    {
        let formData = new FormData(myForm);
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("apotel").innerHTML = "Η εγγραφή σας πραγματοποιήθηκε επιτυχώς";
        } else if (xhr.status !== 200) {
        document.getElementById("apotel").innerHTML = "Ύπηρξε πρόβλημα κατά την εγγραφή";
        }
        };
        var params = "";
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }

        loadDoc(document.getElementById("address").value,document.getElementById("city").value,document.getElementById("country").value);
        console.log(lAt);
        console.log(params);
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
        xhr.open('POST', 'owners');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
    
}


function checkUsername(){
    //console.log(document.getElementById("username").val());
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("checkU").innerHTML = "";
        } else  {
            document.getElementById("checkU").innerHTML = "Το username υπάρχει ήδη";
        }
    };
    let data = document.getElementById("username").value;
    xhr.open('GET', 'owners?username='+data);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}

function checkEmail(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("checkE").innerHTML = "";
        } else  {
            document.getElementById("checkE").innerHTML = "Το email υπάρχει ήδη";
        }
    };
    let data = document.getElementById("email").value;
    xhr.open('GET', 'secondServlet?email='+data);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
}

function checkAdminLogin()
{
    var form = document.forms.loginAdminForm;
    var adminPassword= form.adminPassword.value;
    var adminUsername = form.adminUsername.value;
    
    if(adminPassword==="admin12*" && adminUsername==="admin")
    {
        document.getElementById("seeOwners").style.visibility="visible";
        document.getElementById("seeOwners").style.display="block";
        document.getElementById("seePetKeepers").style.visibility = "visible";  
        document.getElementById("seePetKeepers").style.display="block";
        document.getElementById("seepiechartCatDog").style.visibility = "visible";  
        document.getElementById("seepiechartCatDog").style.display="block";
        document.getElementById("seepiechartMoney").style.visibility = "visible";  
        document.getElementById("seepiechartMoney").style.display="block";
        document.getElementById("seepiechartOwnersKeepers").style.visibility = "visible";  
        document.getElementById("seepiechartOwnersKeepers").style.display="block";
        
    }
    
}

function onloadAdminLogin()
{
    document.getElementById("seeOwners").style.visibility="hidden";
    document.getElementById("seeOwners").style.display="none";
    document.getElementById("seePetKeepers").style.visibility = "hidden";  
    document.getElementById("seePetKeepers").style.display="none";
    document.getElementById("seeO").style.display="none";
    document.getElementById("seeO").style.visibility="hidden";
    document.getElementById("seeK").style.display="none";
    document.getElementById("seeK").style.visibility="hidden";
    document.getElementById("piechartCatDog").style.display="none";
    document.getElementById("piechartCatDog").style.visibility="hidden";
    document.getElementById("piechartOwnersKeepers").style.display="none";
    document.getElementById("piechartOwnersKeepers").style.visibility="hidden";
    document.getElementById("piechartMoney").style.display="none";
    document.getElementById("piechartMoney").style.visibility="hidden";
    document.getElementById("seepiechartMoney").style.display="none";
    document.getElementById("seepiechartMoney").style.visibility="hidden";
    document.getElementById("seepiechartOwnersKeepers").style.display="none";
    document.getElementById("seepiechartOwnersKeepers").style.visibility="hidden";
    document.getElementById("seepiechartCatDog").style.display="none";
    document.getElementById("seepiechartCatDog").style.visibility="hidden";

}

function seeAllTheOwners()
{
   document.getElementById("seeO").style.display="block";
   document.getElementById("seeO").style.visibility="visible";
   document.getElementById("seeK").style.display="none";
   document.getElementById("seeK").style.visibility="hidden";
}

function seeAllTheKeepers()
{
   document.getElementById("seeK").style.display="block";
   document.getElementById("seeK").style.visibility="visible";
   document.getElementById("seeO").style.display="none";
   document.getElementById("seeO").style.visibility="hidden";
}

function test(user){
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
        } else if (xhr.status !== 200) {
       
        }
        };
        var params = "";
        var username="username";
        params = username + "=" + user + "&";
        document.getElementById(user).style.display="none";
        document.getElementById(user).style.visibility="hidden";
        //params = params.substring(0, params.length - 1);
        xhr.open('POST', 'DeleteApetKeeper');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(params);
        xhr.send(params);
}

function dltOwner(user)
{
    var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
        } else if (xhr.status !== 200) {
       
        }
        };
        var params = "";
        var username="username";
        params = username + "=" + user + "&";
        document.getElementById(user).style.display="none";
        document.getElementById(user).style.visibility="hidden";
        //params = params.substring(0, params.length - 1);
        xhr.open('POST', 'DeleteApetOwner');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        console.log(params);
        xhr.send(params);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                var xr = new XMLHttpRequest();
                xr.onload = function () {
                if (xr.readyState === 4 && xr.status === 200) {
                        var data = google.visualization.arrayToDataTable([
                        ['Task', 'Nuber of cats and dogs'],
                        ['Cats',     parseInt(xhr.responseText)],
                        ['Dogs',      parseInt(xr.responseText)]
                      ]);
                      console.log(xhr.responseText);
                      console.log(xr.responseText);
                      var options = {
                        title: 'Number of cats and dogs'
                      };

                      var chart = new google.visualization.PieChart(document.getElementById('piechartCatDog'));

                      chart.draw(data, options);
                } else if (xr.status !== 200) {
                }
            };

   
            xr.open('GET', 'GetNumberOfDogs');
            xr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xr.send();

            
        } else if (xhr.status !== 200) {
        }
    };

    
    xhr.open('GET', 'GetNumberOfCats');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
    
}



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartOwnersKeepers);

function drawChartOwnersKeepers() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                var xr = new XMLHttpRequest();
                xr.onload = function () {
                if (xr.readyState === 4 && xr.status === 200) {
                        var data = google.visualization.arrayToDataTable([
                        ['Task', 'Nuber of owners and keepers'],
                        ['Owners',     parseInt(xhr.responseText)],
                        ['Keepers',      parseInt(xr.responseText)]
                      ]);
                      var options = {
                        title: 'Number of owners and keepers'
                      };

                      var chart = new google.visualization.PieChart(document.getElementById('piechartOwnersKeepers'));

                      chart.draw(data, options);
                } else if (xr.status !== 200) {
                }
            };
             
   
            xr.open('GET', 'GetNumberOfKeepers');
            xr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xr.send();

            
        } else if (xhr.status !== 200) {
        }
    };

    
    xhr.open('GET', 'GetNumberOfOwners');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
    
}



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartMoney);

function drawChartMoney() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("ok");
            console.log(xhr.responseText);
               var data = google.visualization.arrayToDataTable([
          ['Task', 'Money app and keepers'],
          ['App',    parseInt(xhr.responseText)*15/100],
          ['Keepers',      parseInt(xhr.responseText)*85/100]
          
        ]);

        var options = {
          title: 'Money app and keepers'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartMoney'));

        chart.draw(data, options);
        } else if (xhr.status !== 200) {
        }
    };

    
    xhr.open('GET', 'GetMoney');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send();
    
}


function seepiechartOwnerKeepers()
{
    document.getElementById("seeOwners").style.visibility="visible";
    document.getElementById("seeOwners").style.display="block";
    document.getElementById("seePetKeepers").style.visibility = "visible";  
    document.getElementById("seePetKeepers").style.display="block";
    document.getElementById("seeO").style.display="block";
    document.getElementById("seeO").style.visibility="visible";
    document.getElementById("seeO").style.display="none";
    document.getElementById("seeO").style.visibility="hidden";
    document.getElementById("seeK").style.display="none";
    document.getElementById("seeK").style.visibility="hidden";
    document.getElementById("piechartCatDog").style.display="none";
    document.getElementById("piechartCatDog").style.visibility="hidden";
    document.getElementById("piechartOwnersKeepers").style.display="block";
    document.getElementById("piechartOwnersKeepers").style.visibility="visible";
    document.getElementById("piechartMoney").style.display="none";
    document.getElementById("piechartMoney").style.visibility="hidden";
}

function seepiechartMoney()
{
    document.getElementById("seeOwners").style.visibility="visible";
    document.getElementById("seeOwners").style.display="block";
    document.getElementById("seePetKeepers").style.visibility = "visible";  
    document.getElementById("seePetKeepers").style.display="block";
    document.getElementById("seeO").style.display="block";
    document.getElementById("seeO").style.visibility="hiddden";
    document.getElementById("seeK").style.display="none";
    document.getElementById("seeK").style.visibility="hidden";
    document.getElementById("piechartCatDog").style.display="none";
    document.getElementById("piechartCatDog").style.visibility="hidden";
    document.getElementById("piechartOwnersKeepers").style.display="none";
    document.getElementById("piechartOwnersKeepers").style.visibility="block";
    document.getElementById("piechartMoney").style.display="block";
    document.getElementById("piechartMoney").style.visibility="visible";
}

function seepiechartCatDog()
{
   document.getElementById("seeOwners").style.visibility="visible";
    document.getElementById("seeOwners").style.display="block";
    document.getElementById("seePetKeepers").style.visibility = "visible";  
    document.getElementById("seePetKeepers").style.display="block";
    document.getElementById("seeO").style.display="block";
    document.getElementById("seeO").style.visibility="visible";
    document.getElementById("seeO").style.display="none";
    document.getElementById("seeO").style.visibility="hidden";
    document.getElementById("seeK").style.display="none";
    document.getElementById("seeK").style.visibility="hidden";
    document.getElementById("piechartCatDog").style.display="block";
    document.getElementById("piechartCatDog").style.visibility="visible";
        document.getElementById("piechartOwnersKeepers").style.display="none";
    document.getElementById("piechartOwnersKeepers").style.visibility="hidden";
    document.getElementById("piechartMoney").style.display="none";
    document.getElementById("piechartMoney").style.visibility="hidden";
}

function ShowKeeperId(){
    console.log(document.getElementById('keeper_id').value);
}

function questionGPT()
{
    let myForm = document.getElementById('gptdefault');
    
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
            document.getElementById("answerGPT").innerHTML = xhr.responseText;
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }

        params = params.substring(0, params.length - 1);
        xhr.open('GET', 'QuestionGPT?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
    
}

function questionGPTbreed()
{
    let myForm = document.getElementById('gptdefaultbreed');
    
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
            document.getElementById("answerbreed").innerHTML = xhr.responseText;
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }

        params = params.substring(0, params.length - 1);
        xhr.open('GET', 'QuestionGPTbreed?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
    
}

function seeSumOfBookings()
{
   
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
            document.getElementById("sumOfBookings").innerHTML = xhr.responseText;
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        
        params = "keeper_id" + "=" + document.getElementById('keeper_id').value ;
        
        console.log(params);
        xhr.open('GET', 'KeeperSumBookings?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
}

function seeSumOfDaysBookings()
{
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
            document.getElementById("sumOfDaysBookings").innerHTML = xhr.responseText;
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        
        params = "keeper_id" + "=" + document.getElementById('keeper_id').value ;
        
        console.log(params);
        xhr.open('GET', 'KeeperSumDaysBookings?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
}

function seeReviews()
{
  
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
            //document.getElementById("reviews").innerHTML = xhr.responseText;
            var res = JSON.parse(xhr.responseText);
            for(var i=0; i<res.length; i++)
            {
                document.getElementById("reviews").innerHTML += res[i].reviewText;
                document.getElementById("reviews").innerHTML += " ";
                document.getElementById("reviews").innerHTML += res[i].reviewScore;
                document.getElementById("reviews").innerHTML += "<br/>";
            }
            
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            console.log("biasd");
        }
        };
        var params = "";
        
        
        params = "keeper_id" + "=" + document.getElementById('keeper_id').value ;
        
        console.log(params);
        xhr.open('GET', 'SeeReviews?'+params);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
}

function sendAmessage()
{
       let myForm = document.getElementById('messageForm');
    
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
            document.getElementById("sendM").innerHTML = "ola ok";
            console.log(xhr.responseText);
            
        } else if (xhr.status !== 200) {
            document.getElementById("sendM").innerHTML = "Den uparxei accepted booking";
        }
        };
        var params = "";
        for (let [name, value] of formData) {
        params += name + "=" + value + "&";
        }
        params += "keeper_id" + "=" + document.getElementById('keeper_id').value ;
        
        console.log(params);
        xhr.open('POST', 'SendMessage');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
}