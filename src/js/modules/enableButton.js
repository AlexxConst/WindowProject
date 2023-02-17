const enableButton = (checkboxSelector, buttonSelector) => {
    const checkboxes = document.querySelectorAll(checkboxSelector);
    const button = document.querySelector(buttonSelector);
    button.disabled = true;

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const coldCheckbox = document.getElementById('cold');
            const warmCheckbox = document.getElementById('warm');
            if (!coldCheckbox.checked || !warmCheckbox.checked) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        });
    });
};
export default enableButton;
