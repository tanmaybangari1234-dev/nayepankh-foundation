const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Join@2507",
    database: "nayepankh_foundation"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

// Home Route
app.get("/", (req, res) => {
    res.send("Backend Running");
});

// Volunteer Registration
app.post("/register", (req, res) => {

    const {
        name,
        email,
        phone,
        city,
        skills,
        availability
    } = req.body;

    const sql = `
        INSERT INTO volunteers
        (name, email, phone, city, skills, availability)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, phone, city, skills, availability],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json({
                success: true,
                message: "Volunteer Registered Successfully"
            });
        }
    );
});

// Get All Volunteers
app.get("/volunteers", (req, res) => {

    db.query(
        "SELECT * FROM volunteers ORDER BY id DESC",
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            res.json(result);
        }
    );
});

// Admin Login
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const sql =
        "SELECT * FROM admins WHERE username = ? AND password = ?";

    db.query(
        sql,
        [username, password],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            if (result.length > 0) {

                res.json({
                    success: true,
                    message: "Login Successful"
                });

            } else {

                res.status(401).json({
                    success: false,
                    message: "Invalid Username or Password"
                });
            }
        }
    );
});

// Export CSV Report
app.get("/export-csv", (req, res) => {

    db.query(
        "SELECT * FROM volunteers ORDER BY id ASC",
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err
                });
            }

            let csv =
                "ID,Name,Email,Phone,City,Skills,Availability,Status,Registered At\n";

            results.forEach((v) => {

                csv +=
                    `${v.id},"${v.name}","${v.email}","${v.phone}","${v.city}","${v.skills}","${v.availability}","${v.status}","${v.created_at}"\n`;

            });

            res.setHeader(
                "Content-Type",
                "text/csv"
            );

            res.setHeader(
                "Content-Disposition",
                "attachment; filename=volunteer_report.csv"
            );

            res.send(csv);
        }
    );
});

// Start Server
app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});