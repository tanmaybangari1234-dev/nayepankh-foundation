const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Logging in...";
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(
            "http://localhost:5000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        );
        
        const data = await response.json();
        
        if(data.success){
            localStorage.setItem("isAdminLoggedIn", "true");
            localStorage.setItem("adminId", data.adminId);
            message.innerText = "Login Successful! Redirecting...";
            message.style.color = "#27ae60";
            message.style.backgroundColor = "#d4edda";
            
            setTimeout(() => {
                window.location.href = "admin.html";
            }, 1500);
        } else {
            message.innerText = data.message;
            message.style.color = "#c0392b";
            message.style.backgroundColor = "#fadbd8";
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    } catch (err) {
        console.error("Error:", err);
        message.innerText = "Cannot connect to server! Make sure backend is running (npm start)";
        message.style.color = "#c0392b";
        message.style.backgroundColor = "#fadbd8";
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
});