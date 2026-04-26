async function loadExperiences() {
    const list = document.getElementById("experience-list");
    const message = document.getElementById("message");

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        list.innerHTML = "";
        message.textContent = "";

        if (data.length === 0) {
            list.innerHTML = "<p>Inga poster hittades.</p>";
            return;
        }

        data.forEach(item => {
            const article = document.createElement("article");

            article.innerHTML = `
                <h3>${item.companyname}</h3>
                <p><strong>Jobbtitel:</strong> ${item.jobtitle}</p>
                <p><strong>Plats:</strong> ${item.location}</p>
                <p><strong>Period:</strong> ${item.startdate} - ${item.enddate}</p>
                <p><strong>Beskrivning:</strong> ${item.description}</p>
                <button data-id="${item.id}">Radera</button>
            `;

            list.appendChild(article);
        });

        addDeleteEvents();
    } catch (error) {
        message.textContent = "Kunde inte hämta poster från API:t.";
    }
}

function addDeleteEvents() {
    const buttons = document.querySelectorAll("button[data-id]");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            const id = button.dataset.id;

            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            loadExperiences();
        });
    });
}

loadExperiences();