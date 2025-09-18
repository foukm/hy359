<%-- 
    Document   : adminLogin
    Created on : Dec 21, 2023, 11:40:50 AM
    Author     : Maria
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.util.List, java.util.ArrayList ,database.tables.EditPetOwnersTable, mainClasses.PetOwner,database.tables.EditPetKeepersTable, mainClasses.PetKeeper" %>
<!doctype html>
<html lang="en" class="no-js">
    <head> 
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script src="js/ajax.js" defer></script>
        <link rel="stylesheet" href="css/cssExamples.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <meta charset="UTF-8">
        <meta name="description" content="Curriculum Vitae">
        <meta name="keywords" content="CV">
        <meta name="author" content="Maria Foukaki">
        <script src="http://www.openlayers.org/api/OpenLayers.js"></script>
        <script src="js/javascript.js" defer></script>
        <script src="js/owner.js" defer></script>

    </head>
    <body onload="start();showExtra();mapB();return false;">
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/el_GR/sdk.js#xfbml=1&version=v18.0" nonce="WPMP3Fj0"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="js/jquery-latest.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/app.css"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <h2></h2> 


        <div class="row">


            <div class="column column1Width" id="choices" style="background-color:#ADD8E6;">           
                <button class="button" onclick="window.location.href='assignment2.html'">Sign up</button>
                <!--<button  class="button" onclick="initDB()">Initialize Database</button>
                <button  class="button" onclick="deleteDB()">Delete Database</button> -->
                <br><br>
                See the account of a pet owner <br><br>
                <form id="loginForm" name="loginForm"  onsubmit='getOwner();return false;' >
                    <label for="username">username:</label><br>
                    <input type="text"  id="username_login" name="username" required><br>
                    <label for="password">password:</label><br>
                    <input type="password"  name="password" id="password_login" required><br>
                    <input type="submit" id="login" class="button" value="Login">
                </form>
                <button id="logout" onclick='logout();'  class='button'>Logout</button><br>
            </div>
            <div class="column column2Width" id="output" style="background-color:#fffff0;">
                <h2>Output</h2>
                <div id="ajaxContent">
                    <form  name="myForm" id="myForm" class="grid grid-3" style="display: none;">
                        <input type="hidden" id="owner_id" value="">
                         <input type="hidden" id="pet_belongs" value="">
                    <div class="row">
                        <div class="col-25">
                          <label for="username" class="required">Username</label>
                        </div>
                        <div class="col-75">
                            <input type="text"  id="username"  name="username" onchange="checkUsername()" required pattern="[a-zA-Z][a-zA-Z0-9]{8,}" title="Κείμενο τουλάχιστον 8 χαρακτήρων που να μην ξεκινά ποτέ με
                                   αριθμό (λατινικοί χαρακτήρες)" >
                            
                        </div>
                    </div>
                    <div id="checkU"></div>

                    <div class="row">
                        <div class="col-25">
                          <label for="email" class="required">Email</label>
                        </div>
                        <div class="col-75">
                            <input type="text" name="email" id="email"  onchange="checkEmail()" required >
                            
                        </div>
                    </div>
                    <div id="checkE"></div>

                    <div class="row">
                        <div class="col-25">
                          <label for="password" class="required">Κωδικός χρήστη</label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="password" onchange="checkpass()" name="password" required pattern="((?=.*?[0-9])(?=.*?[A-Za-z])(?=.*[^0-9A-Za-z]).+){8,15}">
                             <div id="message"></div>
                            <input type="button" id="Mybutton"  onclick="showPass()" value="Show Password">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="password" class="required">Επιβεβαίωση κωδικού χρήστη</label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="passwordCheck" onchange="checkpass()" name="passwordCheck"  required pattern="((?=.*?[0-9])(?=.*?[A-Za-z])(?=.*[^0-9A-Za-z]).+){8,15}">
                            <div id="message2"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                          <label for="firstname" class="required">Όνομα</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="firstname" name="firstname" required pattern="^([a-z ]|[α-ω ]|[A-z ]|[Α-Ω ]){3,30}" title="Κείμενο από 3 μέχρι 30 χαρακτήρες, να μην περιέχει αριθμούς.">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="lastname" class="required">Επώνυμο</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lastname" name="lastname" required pattern="^([a-z ]|[α-ω ]|[A-z ]|[Α-Ω ]){3,30}" title="Κείμενο από 3 μέχρι 30 χαρακτήρες, να μην περιέχει αριθμούς">
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-25">
                          <label for="birthdate" class="required">Ημερομηνία γέννησης</label>
                        </div>
                        <div class="col-75">
                            <input type="date" required id="birthdate" name="birthdate" min="1920-01-01" max="2007-12-31" value="1980-01-01">
                        </div>
                    </div>
                    
                    
                    
                    <div class="row">
                        <div class="col-25">
                            <label for="gender" class="required">Φύλο</label>
                            </div>
                            <div class="col-75">
                            <select  name="gender" id="gender" required>
                                <option value="">Επέλεξε</option>
                                <option value="Male">Άντρας</option>
                                <option value="Female">Γυναίκα</option>
                                <option value="Other">Άλλο</option>
                            </select>
                        </div>
                    </div>
                    
                   <div class="row">
                        <div class="col-25">
                          <label for="type" class="required">Τύπος χρήστη</label>
                        </div>
                        <div class="col-75">
                          <select  name="type" id="type" required onchange="showExtra()">
                            <option value="">Επέλεξε</option>
                            <option value="Pet Owner">Pet Owner</option>
                            <option value="Pet Keeper">Pet Keeper</option>
                          </select>
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col-25">
                          <label  for="country" class="required">Χώρα</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country" required onchange="completeAddress()">
                                <option value="Greece">Greece</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Aland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">British Indian Ocean Territory</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">Cocos (Keeling) Islands</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, Democratic Republic of the Congo</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Cote D'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CW">Curacao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Malvinas)</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">French Southern Territories</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">Heard Island and Mcdonald Islands</option>
                                <option value="VA">Holy See (Vatican City State)</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran, Islamic Republic of</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">Korea, Democratic People's Republic of</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="XK">Kosovo</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Lao People's Democratic Republic</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libyan Arab Jamahiriya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia, Federated States of</option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">Palestinian Territory, Occupied</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barthelemy</option>
                                <option value="SH">Saint Helena</option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">Saint Martin</option>
                                <option value="PM">Saint Pierre and Miquelon</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="CS">Serbia and Montenegro</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard and Jan Mayen</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan, Province of China</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania, United Republic of</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">Virgin Islands, British</option>
                                <option value="VI">Virgin Islands, U.s.</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="city" class="required" >Πόλη</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="city" required name="city" onchange="completeAddress()">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="address" class="required">Διεύθυνση Οικίας</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="address" name="address" onchange="completeAddress()" required pattern="^([a-z]|[α-ω]|[A-z]|[Α-Ω]|[0-9 ]){10,150}" title="Ένα κείμενο από 10 έως 150 χαρακτήρες (μπορεί να σπάσει
                            και σε περισσότερα κομμάτια, όνομα, αριθμός, κλπ).
                            ">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="personalpage">Προσωπική σελίδα</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="personalpage" name="personalpage"   pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"  title="URL">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="job">Επάγγελμα</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="job" name="job" pattern="^([a-z]|[α-ω]|[A-z]|[Α-Ω]){3,30}" title="Κείμενο από 3 μέχρι 30 χαρακτήρες">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                          <label for="telephone">Κινητό τηλέφωνο</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="telephone" name="telephone" pattern="^[0-9]{10,14}$" title="Ένας αριθμός από 10 μέχρι 14 ψηφία">
                        </div>
                    </div>
                    <button type="button" id="mapButton"  onclick="btnClicked()">Δες την τοποθεσία σου</button>
                    <button type="button" id="mapCloseButton" style="display: none;" onclick="mapClose()">Κλείσε την τοποθεσία</button>
                    <div id="demo"></div>
                    <div id="Map" style="height:600px; width:700px; display:none"></div>
                    <button type="button"  onclick="sendEditOwnerAJAX(); return false;" value="Edit">Edit</button>                 

                </form>
                    
                    
                
                    <div id="petsMod" style="display: none;">
                        <h3>Τροποποίηση κατοικιδίων</h3>
                        <h4>Εισαγωγή νέου κατοικιδίου</h4>
                        <div id="insertPetsDiv">
                            <form name="insertApet" onsubmit="insertPet();return false;" id="insertApet">
                                <div class="row">
                                    <div class="col-25">
                                      <label for="pet_id">pet_id</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="pet_id" name="pet_id" value="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="owner_id">owner_id</label>
                                    </div>
                                    <div class="col-75">
                                       <input type="text" id="owner_id1" name="owner_id" value="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for=name>Όνομα</label>
                                    </div>
                                    <div class="col-75">
                                       <input type="text" id="name" name="name">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="type">Είδος</label>
                                    </div>
                                    <div class="col-75">
                                       <input type="text" id="type" name="type">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="breed">Ράτσα</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="breed" name="breed">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="gender">Φύλλο</label>
                                    </div>
                                    <div class="col-75">
                                       <input type="text" id="gender" name="gender">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="birthyear">Έτος γέννησης</label>
                                    </div>
                                    <div class="col-75">
                                       <input type="text" id="birthyear" name="birthyear">
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-25">
                                      <label for="photo">Φωτογραφία</label>
                                    </div>
                                    <div class="col-75">
                                      <input type="text" id="photo" name="photo">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="weight">Βάρος</label>
                                    </div>
                                    <div class="col-75">
                                       <input type="text" id="weight" name="weight">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="description">Περιγραφή</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="description" name="description">
                                    </div>
                                </div>
                                <input type="submit">
                            </form>
                        </div>
                        <div>
                            <h4>Επεξεργασία βάρους κατοικιδίου</h4>
                            <div id="modPetWeight">
                            <form name="modWeight" onsubmit="modPetW();return false;" id="modWeight">
                                <div class="row">
                                    <div class="col-25">
                                      <label for="pet_id1">pet_id</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="pet_id1" name="pet_id1" value="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="newweight">Βάρος</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="newweight" name="newweight">
                                    </div>
                                </div>
                                <input type="submit">
                            </form>
                            </div>
                        </div>
                        
                        <div>
                            <h4>Booking</h4>
                            <div id="bookingaa">
                            <form name="booking" onsubmit="bookdate();return false;" id="booking">
                                <div class="row">
                                    <div class="col-25">
                                      <label for="fromdate">From date:</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="date" id="fromdate" name="fromdate" >
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="todate">To date:</label>
                                    </div>
                                    <div class="col-75">
                                         <input type="date" id="todate" name="todate">
                                    </div>
                                </div>
                                <input type="submit">
                            </form>
                            </div>
                            <div id="keeperss"></div>
                            <div class="form-group" >
                                <h3>Choose one of the keepers</h3>
                                <form name="chooseKeeper" onsubmit="sendAbookingRequest();return false;" id="chooseKeeper" style="display: none;">
                                <select class="form-control" name="keeperer" id="keeperer">
                                    <input type="submit">
                                </select>
                                </form>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div>
                            <h3>Καταχώρηση κριτικής</h3>
                            <div id="rv">
                            <form name="review" onsubmit="sendReview();return false;" id="review">
                                <div class="row">
                                    <div class="col-25">
                                      <label for="reviewText">Κριτική</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text"  id="reviewText" name="reviewText">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                      <label for="reviewScore">Score</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="number" id="reviewScore" name="reviewScore" min="1" max="5">
                                    </div>
                                </div>
                                <input type="submit">
                            </form>
                            </div>
                            <div id="revCheck" hidden></div>
                        </div>
                        
                        <div>
                            <a>Messages</a>
                            <form name="messageForm" onsubmit="sendAmessageTPK(); return false;" id="messageForm">
                            <label for="message">Message to pet keeper</label>
                            <input type="text" id="message" name="message">
                            <input type="submit">
                            </form>
                            <div id="sendMTPK">    
                        </div>
                        </div>
                        
                        <div id="finishedButton" style="display: none;">
                            <button  class="button" onclick="finishBooking()">Finish the booking</button> 
                        </div>
                    </div>                    
                <div>
                    <br><br><br>
                    
                
                
            </div>
            </div>

        </div>
        <br>

    </body>
    <br><br><br><br><br>
<footer class="page-footer font-small blue ">
            <div class="footer">
                
                <div class = "footer-copyright text-center py-3">
                    <a href="https://www.i-pet.gr/">Σελίδα για κατοικίδια</a>
                    <a href="https://allaboutpets.gr/katoikidia-zoa-gia-mesa-sto-spiti/">Σελίδα για κατοικίδια</a>
                    <p style="font-size: smaller;">MARIA FOUKAKI</p>
                </div>
            </div>
    </footer>
</html>



