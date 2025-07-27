// Load saved habits
window.onload = function () {
    for (let i = 1; i <= 3; i++) {
        const checkbox = document.getElementById(`habit${i}`);
        const saved = localStorage.getItem(`habit${i}`);
        if (saved === "true") checkbox.checked = true;

        checkbox.addEventListener("change", function () {
            localStorage.setItem(`habit${i}`, checkbox.checked);
        });
    }
};

function resetHabits() {
    for (let i = 1; i <= 3; i++) {
        const checkbox = document.getElementById(`habit${i}`);
        checkbox.checked = false;
        localStorage.setItem(`habit${i}`, false);
    }
}
