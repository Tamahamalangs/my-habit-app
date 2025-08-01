// Load saved habits
window.onload = function () {
    for (let i = 1; i <= 3; i++) {
        const checkbox = document.getElementById(`habit${i}`);
        const saved = localStorage.getItem(`habit${i}`);
        if (checkbox) {
            if (saved === "true") checkbox.checked = true;

            checkbox.addEventListener("change", function () {
                localStorage.setItem(`habit${i}`, checkbox.checked);
            });
        } else {
            console.warn(`Checkbox with ID habit${i} not found`);
        }
    }
};

function setupHomeCheckboxes() {
    for (let i = 1; i <= 3; i++) {
        const checkbox = document.getElementById(`habit${i}`);
        const saved = localStorage.getItem(`habit${i}`);
        if (checkbox) {
            if (saved === "true") checkbox.checked = true;

            checkbox.addEventListener("change", function () {
                localStorage.setItem(`habit${i}`, checkbox.checked);
            });
        }
    }
}


function resetHabits() {
    for (let i = 1; i <= 3; i++) {
        const checkbox = document.getElementById(`habit${i}`);
        checkbox.checked = false;
        localStorage.setItem(`habit${i}`, false);
    }
}

if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("sw.js");
        }

function switchScreen(id) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    if (id === "home") setupHomeCheckboxes(); // only run this when Home is shown
}

