document.getElementById('pokemon-btn').addEventListener('click', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('pokemon-name').textContent = data.name;
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
        });
});
function handleTextChange() {
    document.getElementById('output').textContent = 'Button was Clicked!';
}
document
    .getElementById('text-change-btn')
    .addEventListener('click', handleTextChange);

// document.getElementById('add-item-btn').addEventListener('click', () => {
//     const input = document.getElementById('item-input');
//     const value = input.value.trim();

//     if (value !== '') {
//         const li = document.createElement('li');
//         li.textContent = value;
//         document.getElementById('item-list').appendChild(li);
//         input.value = '';
//     }
// });
function handleAddItem() {
    const input = document.getElementById('item-input');
    const value = input.value.trim();

    if (value !== '') {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('item-list').appendChild(li);
        input.value = '';
    }
}

// Step 2: Attach it as a callback
// document
//     .getElementById('add-item-btn')
//     .addEventListener('click', handleAddItem);

// document.getElementById('toggle-btn').addEventListener('click', () => {
//     const para = document.getElementById('toggle-text');
//     para.style.display = para.style.display === 'none' ? 'block' : 'none';
// });
function handleAddItem() {
    const input = document.getElementById('item-input');
    const value = input.value.trim();

    if (value !== '') {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('item-list').appendChild(li);
        input.value = '';
    }
}

function handleToggleVisibility() {
    const para = document.getElementById('toggle-text');
    para.style.display = para.style.display === 'none' ? 'block' : 'none';
}

document
    .getElementById('add-item-btn')
    .addEventListener('click', handleAddItem);
document
    .getElementById('toggle-btn')
    .addEventListener('click', handleToggleVisibility);
