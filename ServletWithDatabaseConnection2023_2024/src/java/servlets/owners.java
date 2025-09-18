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
public class owners extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet owners</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet owners at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String username=request.getParameter("username");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
        EditPetKeepersTable eut = new EditPetKeepersTable();
        EditPetOwnersTable eat = new EditPetOwnersTable();
        PetOwner sa = eat.databaseToPetOwnersCheckUsername(username);
        PetKeeper su = eut.databaseToPetKeepersCheckUsername(username);
        if(su==null && sa==null){
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

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println(request.getParameter("type"));
           if("Pet Owner".equals(request.getParameter("type")))
            {
         
                String p = "{\"username\":\""+request.getParameter("username")+"\",\"email\":\""+request.getParameter("email")+"\",\"password\":\""+request.getParameter("password")+"\","
                + "\"firstname\":\""+request.getParameter("firstname")+"\",\"lastname\":\""+request.getParameter("lastname")+"\",\"birthdate\":\""+request.getParameter("birthdate")+"\",\"gender\":\""+request.getParameter("gender")+"\","
                + "\"country\":\""+request.getParameter("country")+"\",\"city\":\""+request.getParameter("city")+"\",\"address\":\""+request.getParameter("address")+"\",\"lat\":\""+request.getParameter("lat")+"\","
                + "\"lon\":\""+request.getParameter("lon")+"\",\"telephone\":\""+request.getParameter("telephone")+"\","
                + "\"job\":\""+request.getParameter("job")+"\","
                + "\"personalpage\":\""+request.getParameter("personalpage")+"\"}";
                try {
                    EditPetOwnersTable l = new EditPetOwnersTable();
                    l.addPetOwnerFromJSON(p);
                    response.setStatus(200);
                } catch (ClassNotFoundException ex) {
                    response.setStatus(403);
                    Logger.getLogger(myServlet.class.getName()).log(Level.SEVERE, null, ex);
                }
                
            }else 
            {
                String p = "{\"username\":\""+request.getParameter("username")+"\",\"email\":\""+request.getParameter("email")+"\",\"password\":\""+request.getParameter("password")+"\","
                + "\"firstname\":\""+request.getParameter("firstname")+"\",\"lastname\":\""+request.getParameter("lastname")+"\",\"birthdate\":\""+request.getParameter("birthdate")+"\",\"gender\":\""+request.getParameter("gender")+"\","
                + "\"country\":\""+request.getParameter("country")+"\",\"city\":\""+request.getParameter("city")+"\",\"address\":\""+request.getParameter("address")+"\",\"lat\":\""+request.getParameter("lat")+"\","
                + "\"lon\":\""+request.getParameter("lon")+"\",\"telephone\":\""+request.getParameter("telephone")+"\","
                + "\"job\":\""+request.getParameter("job")+"\","
                + "\"property\":\""+request.getParameter("property")+"\","
                + "\"propertydescription\":\""+request.getParameter("propertydescription")+"\","
                + "\"personalpage\":\""+request.getParameter("personalpage")+"\"";
                
                if(request.getParameter("catkeeper")!=null)
                {
                    p=p+",\"catkeeper\":\""+"true"+"\"";        
                }else
                {
                     p=p+",\"catkeeper\":\""+"false"+"\"";
                }
                
                if(request.getParameter("catprice")!=null){
                     p=p+",\"catprice\":\""+request.getParameter("catprice")+"\"";
                }

                if(request.getParameter("dogkeeper")!=null)
                {
                    p=p+",\"dogkeeper\":\""+"true"+"\"";
                }else
                {
                     p=p+",\"dogkeeper\":\""+"false"+"\"";
                }
                
                if(request.getParameter("dogprice")!=null){
                    p=p+",\"dogprice\":\""+request.getParameter("dogprice")+"\"";
                }
                                
                p=p+"}";
                try {
                    EditPetKeepersTable eua = new EditPetKeepersTable();
                    eua.addPetKeeperFromJSON(p);
                    response.setStatus(200);
                } catch (ClassNotFoundException ex) {
                    response.setStatus(403);
                    Logger.getLogger(myServlet.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
