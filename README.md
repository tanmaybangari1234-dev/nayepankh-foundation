# NayePankh Volunteer Registration System

A modern volunteer registration system with a beautiful frontend and a robust backend for storing volunteer data.

## 🚀 Features

- ✨ Beautiful, responsive volunteer registration form
- 💾 Backend server to store and manage registrations
- 📊 Dashboard to view all registrations
- 📥 Export registrations to CSV
- ✅ Data validation and duplicate email checking
- 🎨 Modern UI with gradient designs and smooth animations

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** installed (download from https://nodejs.org/)
- Dependencies installed (already done with `npm install`)

## 🏃 Running the Application

### Step 1: Start the Backend Server

Open **Command Prompt** or **PowerShell** in the project folder and run:

```bash
npm start
```

You should see:
```
🚀 Server running at http://localhost:5000
📝 Register volunteers at http://localhost:5000
📊 View registrations at http://localhost:5000/registrations
📥 Export CSV at http://localhost:5000/export-csv
```

### Step 2: Open the Application

Open your web browser and go to:
- **Registration Form**: http://localhost:5000
- **View Registrations Dashboard**: http://localhost:5000/dashboard.html
- **View Raw JSON Data**: http://localhost:5000/registrations

## 📁 Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Registration form page |
| `dashboard.html` | Admin dashboard to view all registrations |
| `style.css` | Styling for the registration form |
| `script.js` | Frontend JavaScript for form submission |
| `server.js` | Backend Node.js/Express server |
| `registrations.json` | Database file (auto-created, stores all registrations) |
| `package.json` | Project dependencies |

## 📝 API Endpoints

### 1. Register a Volunteer
```
POST http://localhost:5000/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "city": "Delhi",
  "skills": "Web Development",
  "availability": "Weekends"
}

Response:
{
  "message": "✓ Registration Successful!",
  "success": true,
  "id": 1234567890
}
```

### 2. Get All Registrations
```
GET http://localhost:5000/registrations

Response:
{
  "count": 5,
  "data": [
    {
      "id": 1234567890,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "city": "Delhi",
      "skills": "Web Development",
      "availability": "Weekends",
      "registeredAt": "6/18/2026, 2:30:45 PM"
    },
    ...
  ]
}
```

### 3. Export Registrations as CSV
```
GET http://localhost:5000/export-csv

Returns: volunteer_registrations.csv file
```

## 🔍 How to Check if Data is Stored

After submitting the registration form, you can verify the data is stored in multiple ways:

### Method 1: Check the Dashboard
1. Go to http://localhost:5000/dashboard.html
2. You should see your registration in the table
3. Total count increases

### Method 2: Check JSON Data
1. Go to http://localhost:5000/registrations
2. You'll see all registrations in JSON format

### Method 3: Check registrations.json File
1. Open the `registrations.json` file in your project folder
2. You'll see all stored volunteer data

## 🛠️ Troubleshooting

### ❌ "Cannot connect to server" Error
- Make sure the server is running with `npm start`
- Check that you're using http://localhost:5000 (not https)
- Make sure port 5000 is not in use by another application

### ❌ "This email is already registered" Error
- This email has already been used. Try a different email.

### ❌ Form fields not filling properly
- Ensure JavaScript is enabled in your browser
- Check browser console for any errors (F12 → Console tab)

## 🚀 Future Enhancements

- Add MySQL database integration for production
- Add user authentication for admin dashboard
- Add email notifications for new registrations
- Add filtering and search functionality
- Add dark mode toggle
- Send confirmation email to volunteers

## 📧 Support

For issues or questions, please check the troubleshooting section or ensure all prerequisites are installed.

---

**Made with ❤️ for NayePankh Foundation**
