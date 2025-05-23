// Lesson 10 Take-Home Challenge – Pokémon API

// const getPokemon = async () => {
//   // Ask the user for a Pokémon name
//   const userInput = prompt("Enter a Pokémon name:").toLowerCase();

//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);

//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error("Pokémon not found");
//     }

//     const data = await response.json();

//     // Show the Pokémon's name in an alert
//     alert(`You selected: ${data.name.toUpperCase()}`);
//   } catch (error) {
//     alert("Error: " + error.message);
//   }
// };

// getPokemon();
// const getPokemon = async () => {
//     const userInput = prompt('Enter a Pokémon name:');

//     if (typeof userInput !== 'string' || userInput.trim() === '') {
//         alert('Please enter a valid Pokémon name.');
//         return;
//     }
//     const pokemonName = userInput.toLowerCase();

//     try {
//         const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//         );

//         if (!response.ok) {
//             throw new Error('Pokémon not found');
//         }

//         const data = await response.json();
//         alert(`You selected: ${data.name.toUpperCase()}`);
//     } catch (error) {
//         alert('Error: ' + error.message);
//     }
// };

// getPokemon();
const getPokemon = async () => {
    const userInput = prompt('Enter a Pokémon name:');

    if (typeof userInput !== 'string' || userInput.trim() === '') {
        alert('Please enter a valid Pokémon name.');
        return;
    }

    const pokemonName = userInput.toLowerCase();

    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();

        console.log('Full Pokémon Data:', data);

        const abilities = data.abilities.map((a) => a.ability.name);
        console.log(`Name: ${data.name.toUpperCase()}`);
        console.log('Abilities:', abilities);

        alert(
            `You selected: ${data.name.toUpperCase()}\nCheck the console for details!`
        );
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        alert('Error: ' + error.message);
    }
};

getPokemon();
