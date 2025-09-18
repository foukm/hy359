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
        <title></title>
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
    <body onload="">
        <div class="row">


           
            <div class="column column2Width" id="output" style="background-color:#fffff0;">
               <button class="button" onclick="window.location.href='index.html'">Go back</button>
                 <div id="seehhK">
                <% 
                   
                    EditPetKeepersTable ea = new EditPetKeepersTable();
                   ArrayList<PetKeeper> keepers = new ArrayList<PetKeeper>();
                   keepers = ea.getKeepers();
                   PetKeeper temp2;
                    for(int i=0; i<keepers.size(); i ++) {
                        temp2=keepers.get(i);
                        out.println("<li id=\""+temp2.getUsername()+"\">" +temp2.getUsername()+" "+ temp2.getLastname()+" "+temp2.getFirstname()+"</li>");
                    }
                %>
                
                </div>  
                
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