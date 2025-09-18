/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import database.tables.EditBookingsTable;
import database.tables.EditMessagesTable;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import mainClasses.PetKeeper;
import database.tables.EditPetKeepersTable;
import java.sql.SQLException;
import java.util.ArrayList;
import mainClasses.Booking;
/**
 *
 * @author Maria
 */
public class DeleteApetKeeper extends HttpServlet {

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
            out.println("<title>Servlet DeleteApetKeeper</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet DeleteApetKeeper at " + request.getContextPath() + "</h1>");
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
        processRequest(request, response);
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
        String username = request.getParameter("username");
        EditPetKeepersTable eu = new EditPetKeepersTable();
        try {
            //eu.deletePetKeeperFromUsername(username);           
            
            PetKeeper del = eu.databaseToPetKeepersCheckUsername(username);
            int keeper_id = del.getKeeper_id();
            
            EditBookingsTable book = new EditBookingsTable();
            ArrayList<Booking> book1 = book.getBookingsByKeeperId(keeper_id);
            Booking tem8;
            for(int i=0; i<book1.size(); i++)
            {
                tem8=book1.get(i);
                EditMessagesTable mes = new EditMessagesTable();
                mes.deleteMessageBookingId(tem8.getBooking_id());
            }
            
            EditBookingsTable bookings1 = new EditBookingsTable();
            bookings1.deleteBookingKeeperId(keeper_id);
            
            database.tables.EditReviewsTable reviews = new database.tables.EditReviewsTable();
            reviews.deleteReviewKeeperId(keeper_id);
            eu.deletePetKeeperFromUsername(username); 
            
            response.setStatus(200);
        } catch (SQLException ex) {
            Logger.getLogger(DeleteApetKeeper.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DeleteApetKeeper.class.getName()).log(Level.SEVERE, null, ex);
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
