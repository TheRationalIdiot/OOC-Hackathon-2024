// Sample events data
const eventsData = {
    "2024-10-01": [
        { name: "Event 1", time: "10:00 AM", location: "Venue 1" },
        { name: "Event 2", time: "2:00 PM", location: "Venue 2" }
    ],
    "2024-10-20": [
        { name: "Event 3", time: "5:00 PM", location: "Venue 3" }
    ]
};

// Get modal elements
const modal = document.getElementById("eventModal");
const closeModal = document.querySelector(".close");
const eventDate = document.getElementById("event-date");
const eventList = document.getElementById("event-list");

// Event handler for each date button
document.querySelectorAll(".date-btn").forEach(button => {
    button.addEventListener("click", () => {
        const selectedDate = button.getAttribute("data-date");
        eventDate.textContent = selectedDate;
        eventList.innerHTML = '';

        if (eventsData[selectedDate]) {
            eventsData[selectedDate].forEach(event => {
                const listItem = document.createElement("li");
                listItem.textContent = `${event.name} at ${event.time} - ${event.location}`;
                eventList.appendChild(listItem);
            });
        } else {
            const noEvent = document.createElement("li");
            noEvent.textContent = "No events scheduled.";
            eventList.appendChild(noEvent);
        }

        // Show modal
        modal.style.display = "block";
    });
});

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

