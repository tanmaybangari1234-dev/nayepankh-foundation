# 🔐 Admin Portal Setup Guide

## Quick Setup (2 Steps)

### Step 1: Create Admin Table in MySQL

1. Open **Command Prompt** and connect to MySQL:
   ```
   mysql -u root -p
   ```
   (Press Enter if no password)

2. Run these commands:
   ```sql
   USE nayepankh_foundation;

   CREATE TABLE admins (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) NOT NULL UNIQUE,
       password VARCHAR(50) NOT NULL
   );

   INSERT INTO admins (username, password)
   VALUES ('admin', 'admin123');
   ```

3. Type `exit` to close MySQL

### Step 2: Start the Server & Login

1. In your project folder, run:
   ```
   npm start
   ```

2. Open in browser: **http://localhost:5000/admin/login.html**

3. **Login Credentials:**
   - Username: `admin`
   - Password: `admin123`

---

## ✅ What You Can Do in Admin Portal

- 📊 View all registered volunteers in a table
- 🔢 See total volunteer count
- 📥 Download volunteer data as CSV
- 🚪 Logout securely

---

## ❌ Troubleshooting

### "Invalid username or password"
- Make sure you created the admin table correctly
- Check you're using: `admin` and `admin123`
- Verify the MySQL database is running

### "Cannot connect to server"
- Make sure `npm start` is running
- Check the backend is properly initialized

### "No volunteers showing"
- First register some volunteers using the registration form
- Dashboard auto-refreshes every 10 seconds

---

## 🔄 Change Admin Password

To change the admin password in MySQL:

```sql
USE nayepankh_foundation;
UPDATE admins SET password = 'newpassword' WHERE username = 'admin';
```

---

## 👥 Add More Admin Users

To add another admin account:

```sql
INSERT INTO admins (username, password)
VALUES ('admin2', 'password123');
```

Then login with the new credentials.

---

## 📝 Admin Portal URLs

| Page | URL |
|------|-----|
| Admin Login | http://localhost:5000/admin/login.html |
| Admin Dashboard | http://localhost:5000/admin/admin.html |
| Volunteer Registration | http://localhost:5000 |
| View Registrations | http://localhost:5000/dashboard.html |

---

**Happy administrating! 🎉**
