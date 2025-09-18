/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import database.tables.EditBookingsTable;
import database.tables.EditReviewsTable;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import mainClasses.Booking;
import mainClasses.Review;

/**
 *
 * @author Maria
 */
public class SendReview extends HttpServlet {

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
            out.println("<title>Servlet SendReview</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet SendReview at " + request.getContextPath() + "</h1>");
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
            String owner_id=request.getParameter("owner_id");
            String reviewText=request.getParameter("reviewText");
            String reviewScore=request.getParameter("reviewScore");
            EditBookingsTable bookings = new EditBookingsTable();
            int booking_id=0;
            int keeper_id = 0;
            
          try {
            ArrayList<Booking> booking = bookings.getBookings();
            Booking temp;
            for(int i=0; i<booking.size(); i++)
            {
                temp = booking.get(i);
                if(temp.getOwner_id()==Integer.valueOf(owner_id))
                {
                    booking_id=temp.getBooking_id();
                    keeper_id = temp.getKeeper_id();
                    EditReviewsTable nr = new EditReviewsTable();
                    
                        Review rev = new Review();
                        rev.setOwner_id(Integer.valueOf(owner_id));
                        rev.setKeeper_id(keeper_id);
                
                        rev.setReviewText(reviewText);
                        rev.setReviewScore(reviewScore);           
                        try {
                            nr.createNewReview(rev);
                        } catch (ClassNotFoundException ex) {
                            Logger.getLogger(SendReview.class.getName()).log(Level.SEVERE, null, ex);
                        }
                       response.setStatus(200);
                    
                    
                     /*try (PrintWriter out = response.getWriter()) {
            
                            out.println(temp.getBooking_id());
                            response.setStatus(200);
                            
                     }*/
                      
                }
           }
            
             
          } catch (SQLException ex) {
            Logger.getLogger(SendReview.class.getName()).log(Level.SEVERE, null, ex);
            response.setStatus(400);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(SendReview.class.getName()).log(Level.SEVERE, null, ex);
            response.setStatus(400);
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
