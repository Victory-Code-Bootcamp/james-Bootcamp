export function getValidName(promptText = 'Enter your name (letters only):') {
    let name = '';
    do {
        name = prompt(promptText);
        if (!name) {
            alert('Input cannot be empty.');
            continue;
        }
        name = name.trim();
        if (!/^[a-zA-Z]+$/.test(name)) {
            alert('Invalid input. Please enter letters only.');
            name = '';
        }
    } while (name === '');

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
