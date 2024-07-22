const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//   ## FILTER
// 1. Get characters with mass greater than 100
// const Mass = characters.filter((person) => {
//   return person.mass > 100;
// });
// console.log({ Mass });

// 2. Get characters with height less than 200
// const height = characters.filter((person) => {
//   return person.height < 200;
// });
// console.log(height);

// 3. Get all male characters
// const male = characters.filter((person) => {
//   return person.gender === "male";
// });
// console.log(male);

// 4. Get all female characters
const female = characters.filter((person) => {
    return person.gender === "female";
  });
  
  console.log(female);
