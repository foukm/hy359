/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import database.tables.EditBookingsTable;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import mainClasses.Booking;
/**
 *
 * @author Maria
 */
public class KeeperSumDaysBookings extends HttpServlet {

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
            out.println("<title>Servlet KeeperSumDaysBookings</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet KeeperSumDaysBookings at " + request.getContextPath() + "</h1>");
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
        String keeper_id=request.getParameter("keeper_id");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            EditBookingsTable p = new EditBookingsTable();
            
            long daysDifference=0;
             ArrayList<Booking> ma =  p.getBookings();
            for(int i=0; i<ma.size(); i++)
            {
                
                Booking book=ma.get(i);
                if(book.getKeeper_id()==Integer.valueOf(keeper_id))
                {
                    int  yearF =Integer.parseInt( book.getFromDate().substring(0,4));
                    int   monthF =Integer.parseInt( book.getFromDate().substring(5,7));
                    int  dayF =Integer.parseInt( book.getFromDate().substring(8,10));
                    int  yearT =Integer.parseInt( book.getToDate().substring(0,4));
                    int  monthT =Integer.parseInt( book.getToDate().substring(5,7));
                    int  dayT =Integer.parseInt( book.getToDate().substring(8,10));
                    LocalDate date1 = LocalDate.of(yearF, monthF, dayF);

                    LocalDate date2 = LocalDate.of(yearT, monthT, dayT);
                    daysDifference=daysDifference + ChronoUnit.DAYS.between(date1, date2);
                }
                
            }
            
            
            out.println(daysDifference); 
            response.setStatus(200);
        
    
         } catch (SQLException ex) {
            Logger.getLogger(KeeperSumBookings.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(KeeperSumBookings.class.getName()).log(Level.SEVERE, null, ex);
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
        processRequest(request, response);
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
