# 🐾 PetCare – Persistent Publish/Subscribe for Pets (HY359 Project)

This project implements a **PetCare booking platform**, where pet owners can book certified keepers to host their pets.  
It was developed as part of the HY359 *Software Engineering* course, but presented here as a standalone full-stack web application.

---

## ✨ Overview

The system supports four different roles:

- **Guest**  
  Browse available keepers and see general information (footer always visible).

- **Pet Owner**  
  - Register & manage profile  
  - Add a pet (dog or cat)  
  - Browse keepers, request bookings  
  - Exchange messages with keeper (only if booking is **ACCEPTED**)  
  - Leave reviews (only if booking is **FINISHED**)  

- **Pet Keeper**  
  - Register & manage profile (prices, availability, accepted pet types)  
  - Accept or reject bookings  
  - View pet information for active bookings  
  - Chat with pet owners (when booking is **ACCEPTED**)  
  - View profile statistics (total bookings, days hosted, average rating)  

- **Admin**  
  - Login with dedicated credentials  
  - View all users (owners, keepers, guests)  
  - Delete users if necessary  
  - Access platform statistics (e.g., number of cats vs. dogs, revenue split between keepers and platform) using Google Charts  

---

## 🛠️ Technologies Used

- **Backend:** Java , Java Servlets, REST APIs  
- **Database:** MySQL 
- **Frontend:** HTML5, CSS3, JavaScript, JSP
- **Visualization:** Google Charts (Admin dashboard)  
- **Maps (optional extension):** OpenStreetMap / Google Maps APIs  
- **Messaging:** Simple database-backed chat system, AJAX polling    

---


## 🔄 Booking Flow

1. **Owner** sends booking request → status = `REQUESTED`  
2. **Keeper** accepts → status = `ACCEPTED` (messaging enabled)  
   - or rejects → status = `REJECTED`  
3. After the stay, owner finishes booking → status = `FINISHED`  
4. Owner can leave a review, Keeper stats are updated  

---

## 📊 Admin Statistics

- Ratio of cats vs. dogs hosted  
- Number of keepers and owners registered  
- Revenue statistics (85% to keeper, 15% to platform)  
- Charts displayed with **Google Charts**  

---

## 🙈 Disclaimer

This project was created during my studies as a junior developer.
Please forgive any bugs or imperfections — I was still young and learning! 😅
