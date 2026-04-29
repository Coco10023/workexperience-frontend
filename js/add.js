const form = document.getElementById("experience-form");
const message = document.getElementById("message");

// Validera formulär innan POST
function validateForm(data) {
    if (!data.companyname.trim()) return "Företagsnamn saknas";
    if (!data.jobtitle.trim()) return "Jobbtitel saknas";
    if (!data.location.trim()) return "Plats saknas";
    if (!data.startdate) return "Startdatum saknas";
    if (!data.enddate) return "Slutdatum saknas";
    if (!data.description.trim()) return "Beskrivning saknas";

    if (new Date(data.enddate) < new Date(data.startdate)) {
        return "Slutdatum kan inte vara före startdatum";
    }

    return null;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        companyname: document.getElementById("companyname").value,
        jobtitle: document.getElementById("jobtitle").value,
        location: document.getElementById("location").value,
        startdate: document.getElementById("startdate").value,
        enddate: document.getElementById("enddate").value,
        description: document.getElementById("description").value
    };

    const error = validateForm(formData);

    if (error) {
        message.textContent = error;
        return;
    }

    try {
        // Skicka POST-request till API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Något gick fel");
        }

        message.textContent = "Post skapad!";
        form.reset();

    } catch (err) {
        message.textContent = err.message;
    }
});