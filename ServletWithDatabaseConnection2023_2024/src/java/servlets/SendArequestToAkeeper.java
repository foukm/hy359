/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import database.tables.EditBookingsTable;
import database.tables.EditPetKeepersTable;
import database.tables.EditPetsTable;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.logging.Level;
import java.util.logging.Logger;
import mainClasses.Booking;
import mainClasses.Pet;
import mainClasses.PetKeeper;

/**
 *
 * @author Maria
 */
public class SendArequestToAkeeper extends HttpServlet {

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
            out.println("<title>Servlet SendArequestToAkeeper</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet SendArequestToAkeeper at " + request.getContextPath() + "</h1>");
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
        String owner_id = request.getParameter("owner_id");
        String keeper_id = request.getParameter("keeper_id");
        String fromdate = request.getParameter("fromdate");
        String todate = request.getParameter("todate");
        EditPetsTable pets = new EditPetsTable();
        try {
            Pet pet = pets.petOfOwner(owner_id);
            int pet_id = pet.getPet_id();
            EditBookingsTable booking = new EditBookingsTable();
            Booking newBooking = new Booking();
            newBooking.setFromDate(fromdate);
            newBooking.setKeeper_id(Integer.valueOf(keeper_id));
            newBooking.setToDate(todate);
            newBooking.setOwner_id(Integer.valueOf(owner_id));
            newBooking.setStatus("requested");
            newBooking.setPet_id(pet_id);
            long daysDifference=0;
            int  yearF =Integer.parseInt( fromdate.substring(0,4));
            int   monthF =Integer.parseInt( fromdate.substring(5,7));
            int  dayF =Integer.parseInt( fromdate.substring(8,10));
            int  yearT =Integer.parseInt( todate.substring(0,4));
            int  monthT =Integer.parseInt( todate.substring(5,7));
            int  dayT =Integer.parseInt( todate.substring(8,10));
            LocalDate date1 = LocalDate.of(yearF, monthF, dayF);

            LocalDate date2 = LocalDate.of(yearT, monthT, dayT);
            daysDifference=daysDifference + ChronoUnit.DAYS.between(date1, date2);
            
            EditPetKeepersTable keepers = new EditPetKeepersTable();
            PetKeeper keeper = keepers.petKeeperById(keeper_id);
            int price=0;
            if("cat".equals(pet.getType()))
            {
                price = (int) (keeper.getCatprice()*daysDifference);
            }else
            {
                price = (int) (keeper.getDogprice()*daysDifference);
            }
            
            newBooking.setPrice(price);
            booking.createNewBooking(newBooking);
            
        } catch (SQLException ex) {
            Logger.getLogger(SendArequestToAkeeper.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(SendArequestToAkeeper.class.getName()).log(Level.SEVERE, null, ex);
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
