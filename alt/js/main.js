const nameChange1 = document.querySelector("#name-change-jor");
const nameChange2 = document.querySelector("#name-change-kim");
const fontToggle = document.getElementById('fontToggle');


fontToggle.addEventListener('change', function () {
    if (this.checked) {
        // Switch is turned ON -> Add alternate font class
        document.body.classList.add('alt-font');
    } else {
        // Switch is turned OFF -> Remove alternate font class
        document.body.classList.remove('alt-font');
    }
});

const savedState = localStorage.getItem('toggleState');
// 1. Load saved state from localStorage
if (savedState === 'true') {
    fontToggle.checked = true;
    document.body.classList.add('alt-font');
} else {
    fontToggle.checked = false;
    document.body.classList.remove('alt-font');
}

// 2. Save state to localStorage on change
fontToggle.addEventListener('change', () => {
    localStorage.setItem('toggleState', fontToggle.checked);
});