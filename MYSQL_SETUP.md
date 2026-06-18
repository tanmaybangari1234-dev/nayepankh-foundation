# 🗄️ MySQL Database Setup Guide

This guide will help you set up the MySQL database for NayePankh Volunteer Registration system.

## Prerequisites

You need to have **MySQL Server** installed on your computer. If you don't have it, download it from:
- **Download**: https://dev.mysql.com/downloads/mysql/

## Step 1: Open MySQL Command Line

### On Windows:
1. Open **Command Prompt** (cmd) or **PowerShell**
2. Navigate to your MySQL installation directory (usually `C:\Program Files\MySQL\MySQL Server 8.0\bin`)
3. Run the command:
   ```
   mysql -u root -p
   ```
4. Enter your MySQL password (if you set one during installation, otherwise just press Enter)

You should see something like:
```
mysql>
```

## Step 2: Create Database and Table

Once you're in MySQL, copy and paste the entire content from the `database.sql` file into the MySQL command line:

```sql
create database nayepankh_foundation;
use nayepankh_foundation;
CREATE TABLE volunteers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    city VARCHAR(100),
    skills VARCHAR(255),
    availability VARCHAR(50),
    status VARCHAR(20) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

After pasting, press **Enter** and you should see:
```
Query OK, 1 row affected
Query OK, 0 rows affected
```

This confirms the database and table were created successfully!

## Step 3: Verify the Setup

To verify everything is set up correctly, run these commands in MySQL:

```sql
SHOW DATABASES;
```

You should see `nayepankh_foundation` in the list.

```sql
USE nayepankh_foundation;
SHOW TABLES;
```

You should see `volunteers` table.

```sql
DESCRIBE volunteers;
```

This will show the table structure.

## Step 4: Exit MySQL

Type:
```
exit
```

## Step 5: Update MySQL Password (Optional)

If you set a MySQL password during installation, you need to update it in `server.js`:

Open `server.js` and find this section:
```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Change this if you set a MySQL password
    database: 'nayepankh_foundation',
    ...
});
```

Replace `password: ''` with your MySQL password. Example:
```javascript
password: 'your_mysql_password_here',
```

## Step 6: Start the Application

1. Open **Command Prompt** in your project folder
2. Run:
   ```
   npm start
   ```

You should see:
```
✅ MySQL Database Connected Successfully!
🚀 Server running at http://localhost:5000
```

## Step 7: Access the Application

- **Register Form**: http://localhost:5000
- **View Registrations**: http://localhost:5000/dashboard.html

## 📊 View Registrations in MySQL

To view all registered volunteers directly in MySQL:

1. Open Command Prompt and go to MySQL:
   ```
   mysql -u root -p
   ```

2. Use the database:
   ```sql
   USE nayepankh_foundation;
   ```

3. View all volunteers:
   ```sql
   SELECT * FROM volunteers;
   ```

4. View in a formatted way:
   ```sql
   SELECT id, name, email, phone, city, availability, created_at FROM volunteers;
   ```

5. Count total volunteers:
   ```sql
   SELECT COUNT(*) as total_volunteers FROM volunteers;
   ```

## ❌ Troubleshooting

### "Access denied for user 'root'@'localhost'"
- You entered the wrong MySQL password
- Use the correct password or reset it

### "Unknown database 'nayepankh_foundation'"
- The database was not created successfully
- Run the SQL commands again from Step 2

### "Connection refused"
- MySQL Server is not running
- Start MySQL Server from Services or reinstall it

### "Cannot connect to server! Make sure the backend is running"
- Make sure `npm start` is running in your project folder
- Check that the MySQL database is set up correctly

## ✅ Success!

Once everything is set up, you can:
- Register volunteers through the web form
- View all registrations in the dashboard
- See live data from MySQL database
- Export registrations to CSV

---

For more help, check the README.md file in your project folder.
