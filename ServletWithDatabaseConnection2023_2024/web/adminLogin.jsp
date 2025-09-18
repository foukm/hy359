<%-- 
    Document   : adminLogin
    Created on : Dec 21, 2023, 11:40:50 AM
    Author     : Maria
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.util.List, java.util.ArrayList ,database.tables.EditPetOwnersTable, mainClasses.PetOwner,database.tables.EditPetKeepersTable, mainClasses.PetKeeper" %>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Admin</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    </head>
    <body onload="onloadAdminLogin(); return false;">
        <div class="row">


            <div class="column column1Width" id="choices" style="background-color:#ADD8E6;">   
             
                <br><br>
                Admin Login <br><br>
                <form id="loginAdminForm" name="loginAdminForm"  >
                    <label for="adminUsername">username:</label><br>
                    <input type="text"  id="adminUsername" name="adminUsername" required><br>
                    <label for="adminPassword">password:</label><br>
                    <input type="password"  name="adminPassword" id="adminPassword" required><br>
                    <input type="submit" id="login" class="button" value="Login" onclick="checkAdminLogin();return false;">
                </form>
            </div>
            <div class="column column2Width" id="output" style="background-color:#fffff0;">
                <h2>Output</h2>
                <button type="submit" id="seeOwners" class="button" onclick="seeAllTheOwners();return false;" value="See all the owners">See all the owners</button>
                <button type="submit" id="seePetKeepers" class="button" onclick="seeAllTheKeepers();return false;" value="See all the pet keepers">See all the pet keepers</button>
                <button type="submit" id="seepiechartCatDog" class="button" onclick="seepiechartCatDog();return false;" value="See piechart for Cats and Dogs">See piechart Cats and Dogs</button>
                <button type="submit" id="seepiechartOwnersKeepers" class="button" onclick="seepiechartOwnerKeepers();return false;" value="See piechart for owners and keepers">See piechart Owners and keepers</button>
               <button type="submit" id="seepiechartMoney" class="button" onclick="seepiechartMoney();return false;" value="See piechart Money (app and keepers)">See piechart Money (app and keepers)</button>
               
                <div id="seeO">
                <% 
                   EditPetOwnersTable eu = new EditPetOwnersTable();
                   ArrayList<PetOwner> owners = new ArrayList<PetOwner>();
                   owners = eu.getOwners();
                   PetOwner temp;
                    for(int i=0; i<owners.size(); i ++) {
                        temp=owners.get(i);
                        out.println("<li id=\""+temp.getUsername()+"\">"+temp.getUsername()+" "+ temp.getLastname()+" "+temp.getFirstname()+"<button type='button' class = 'btn btn-primary' onclick=\"dltOwner(\'"+temp.getUsername()+"\');return false;\">Delete</button></li>");
                    }
                %>
                </div>    
                 <div id="seeK">
                <% 
                   
                    EditPetKeepersTable ea = new EditPetKeepersTable();
                   ArrayList<PetKeeper> keepers = new ArrayList<PetKeeper>();
                   keepers = ea.getKeepers();
                   PetKeeper temp2;
                    for(int i=0; i<keepers.size(); i ++) {
                        temp2=keepers.get(i);
                        out.println("<li id=\""+temp2.getUsername()+"\">" +temp2.getUsername()+" "+ temp2.getLastname()+" "+temp2.getFirstname()+"<button type='button' class = 'btn btn-primary' onclick=\"test(\'"+temp2.getUsername()+"\');return false;\">Delete</button></li>");
                    }
                %>
                
                </div>   
                <div id="piechartCatDog" style="width: 900px; height: 500px;"></div>
                <div id="piechartOwnersKeepers"style="width: 900px; height: 500px;"></div>
                <div id="piechartMoney" style="width: 900px; height: 500px;"></div>
            </div>
        </div>
    </body>
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