document.addEventListener("DOMContentLoaded", function() {
    fetch("https://resume-api-gateway-1ob2uhcy.ue.gateway.dev")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Or response.text() if expecting plain text
        })
        .then(data => {
            document.querySelector("[data-testid='vis-count']").textContent = `Visitor Count: ${data['view_count']}`;
            // Process the data here, e.g., update the DOM
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
})