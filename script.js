// ==========================
// Dashboard Counter Animation
// ==========================

function animateValue(id, start, end, duration) {

    let obj = document.getElementById(id);

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let step = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {

        current += increment;

        obj.innerHTML = current;

        if (current == end) {
            clearInterval(timer);
        }

    }, step);

}

animateValue("progress", 0, 8, 1000);
animateValue("completed", 0, 21, 1500);


// ==========================
// Project Progress Chart
// ==========================

const ctx = document.getElementById("chart");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets: [{

            label: "Tasks Completed",

            data: [5, 8, 6, 12, 15, 10, 14],

            borderColor: "#5b5ce9",

            backgroundColor: "rgba(91,92,233,.25)",

            fill: true,

            tension: .4,

            pointRadius: 5

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: false

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "#bbb"

                },

                grid: {

                    color: "#333"

                }

            },

            y: {

                ticks: {

                    color: "#bbb"

                },

                grid: {

                    color: "#333"

                }

            }

        }

    }

});


// ==========================
// Card Hover Effect
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 10px 30px rgba(91,92,233,.35)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


// ==========================
// Notification
// ==========================

const bell = document.querySelector(".profile i");

bell.addEventListener("click", () => {

    alert("No New Notifications");

});


// ==========================
// Sidebar Active Menu
// ==========================

const menu = document.querySelectorAll(".sidebar ul li");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});


// ==========================
// Welcome Message
// ==========================

let hour = new Date().getHours();

let text = document.querySelector(".welcome h1");

if (hour < 12) {

    text.innerHTML = "Good Morning, John 👋";

}

else if (hour < 18) {

    text.innerHTML = "Good Afternoon, John 👋";

}

else {

    text.innerHTML = "Good Evening, John 👋";

}