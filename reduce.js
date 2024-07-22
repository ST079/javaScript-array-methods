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
//1. Get total mass of all characters
const totalMass = characters.reduce((total, n) => {
  return total + n.mass;
}, 0);
console.log({ totalMass });
//2. Get total height of all characters
const totalHeight = characters.reduce((total, n) => {
  return total + n.height;
}, 0);
console.log({ totalHeight });

//3. Get total number of characters by eye color
const countEyeColor = characters.reduce((count, eye) => {
  count[eye.eye_color] = (count[eye.eye_color] || 0) + 1;
  return count;
}, {});
console.log({ countEyeColor });

//4. Get total number of characters in all the character names
const totalNumberOfCharacter = characters.reduce((count, person) => {
  count[person.name] = (count[person.name] || 0) + person.name.split("").length;
  return count;
}, {});
console.log({ totalNumberOfCharacter });
