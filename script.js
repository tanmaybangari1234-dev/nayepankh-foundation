const form = document.getElementById("volunteerForm");
const message = document.getElementById("message");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Registering...";
    submitBtn.disabled = true;

    const volunteer = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        skills: document.getElementById("skills").value,
        availability: document.getElementById("availability").value
    };

    try {
        const response = await fetch(
            "http://localhost:5000/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(volunteer)
            }
        );

        const data = await response.json();

        // Style success/error message
        if (response.ok && data.success) {
            message.innerHTML = data.message;
            message.style.color = "#27ae60";
            message.style.backgroundColor = "#d4edda";
            message.style.borderLeft = "4px solid #27ae60";
            form.reset();

            // Clear message after 4 seconds
            setTimeout(() => {
                message.innerHTML = "";
                message.style.backgroundColor = "";
                message.style.borderLeft = "";
            }, 4000);
        } else {
            message.innerHTML = data.message;
            message.style.color = "#c0392b";
            message.style.backgroundColor = "#fadbd8";
            message.style.borderLeft = "4px solid #c0392b";

            // Clear error message after 5 seconds
            setTimeout(() => {
                message.innerHTML = "";
                message.style.backgroundColor = "";
                message.style.borderLeft = "";
            }, 5000);
        }
    } catch (err) {
        console.error("Error:", err);
        message.innerHTML = " Cannot connect to server! Make sure the backend is running (npm start)";
        message.style.color = "#c0392b";
        message.style.backgroundColor = "#fadbd8";
        message.style.borderLeft = "4px solid #c0392b";
    } finally {
        // Restore button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});