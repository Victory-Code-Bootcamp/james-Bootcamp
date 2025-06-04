// ESM
import { faker } from '@faker-js/faker';

// CJS
// const { faker } = require('@faker-js/faker');

export function createRandomUser() {
    return {
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        name: faker.person.fullName(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
            zipCode: faker.location.zipCode(),
        },
        phone: faker.phone.number(),
    };
}
// Generated User Data:
// 1. Name: John Doe
//    Email: john.doe@example.com
//    Address: 123 Main St
//    Phone: (123) 456-7890

// 2. Name: Jane Smith
//    Email: jane.smith@example.com
//    Address: 456 Elm St
//    Phone: (987) 654-3210

// 3. Name: Alex Johnson
//    Email: alex.johnson@example.com
//    Address: 789 Oak St
//    Phone: (555) 123-4567

// 4. Name: ...
export const users = faker.helpers.multiple(createRandomUser, {
    count: +process.argv[2],
});
var output = 'Generated User Data:';
var arrayLength = users.length;
for (var i = 0; i < arrayLength; i++) {
    const { name, email, address, phone } = users[i];
    output += `
${i + 1}. username: ${users[i].username}
   Name: ${name} 
   Email: ${email}
   Address: ${address.street}
   Phone: ${phone}
   `;
}
console.log(output);
// console.log(users);
