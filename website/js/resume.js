const cfg = (window.CONFIG ?? {});
const API_URL = cfg.API_URL ?? "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector("[data-testid='vis-count']").textContent = `Visitor Count: ${data['view_count']}`; // update visitor count
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
})