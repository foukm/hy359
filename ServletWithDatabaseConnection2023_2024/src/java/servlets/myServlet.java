/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.logging.Level;
import java.util.logging.Logger;



import database.tables.EditPetOwnersTable;
import database.tables.EditPetKeepersTable;
import java.io.PrintWriter;
import java.sql.SQLException;
import mainClasses.PetKeeper;
import mainClasses.PetOwner;

/**
 *
 * @author Maria
 */
public class myServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

  
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String username=request.getParameter("username");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            EditPetKeepersTable eut = new EditPetKeepersTable();
        PetKeeper su = eut.databaseToPetKeepersCheckUsername(username);
        if(su==null){
             response.setStatus(200);
        }
        else{
            response.setStatus(403);
        }
        } catch (SQLException ex) {
            Logger.getLogger(GetPetKeeper.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(GetPetKeeper.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
               
           
           System.out.println(request.getParameter("type"));
           if("Pet Owner".equals(request.getParameter("type")))
            {
         
                String p = "{\"username\":\""+request.getParameter("username")+"\",\"email\":\""+request.getParameter("email")+"\",\"password\":\""+request.getParameter("password")+"\","
                + "\"firstname\":\""+request.getParameter("firstname")+"\",\"lastname\":\""+request.getParameter("lastname")+"\",\"birthdate\":\""+request.getParameter("birthdate")+"\",\"gender\":\""+request.getParameter("gender")+"\","
                + "\"country\":\""+request.getParameter("country")+"\",\"city\":\""+request.getParameter("city")+"\",\"address\":\""+request.getParameter("address")+"\",\"lat\":\"35.3053121\","
                + "\"lon\":\"25.0722869\",\"telephone\":\""+request.getParameter("telephone")+"\","
                + "\"job\":\""+request.getParameter("job")+"\","
                + "\"personalpage\":\""+request.getParameter("personalpage")+"\"}";
                try {
                    EditPetOwnersTable l = new EditPetOwnersTable();
                    l.addPetOwnerFromJSON(p);
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(myServlet.class.getName()).log(Level.SEVERE, null, ex);
                }
                
            }else 
            {
                String p = "{\"username\":\""+request.getParameter("username")+"\",\"email\":\""+request.getParameter("email")+"\",\"password\":\""+request.getParameter("password")+"\","
                + "\"firstname\":\""+request.getParameter("firstname")+"\",\"lastname\":\""+request.getParameter("lastname")+"\",\"birthdate\":\""+request.getParameter("birthdate")+"\",\"gender\":\""+request.getParameter("gender")+"\","
                + "\"country\":\""+request.getParameter("country")+"\",\"city\":\""+request.getParameter("city")+"\",\"address\":\""+request.getParameter("address")+"\",\"lat\":\"35.3053121\","
                + "\"lon\":\"25.0722869\",\"telephone\":\""+request.getParameter("telephone")+"\","
                + "\"job\":\""+request.getParameter("job")+"\","
                + "\"dogprice\":\""+request.getParameter("dogprice")+"\","
                + "\"catprice\":\""+request.getParameter("catprice")+"\","
                + "\"personalpage\":\""+request.getParameter("personalpage")+"\"}";
                try {
                    EditPetKeepersTable eua = new EditPetKeepersTable();
                    eua.addPetKeeperFromJSON(p);
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(myServlet.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
                        
    }
    

   
    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
