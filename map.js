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
/*
//1. Get array of all names
const name = characters.map((element) => {
  return element.name;
});
console.log({ name });

//2. Get an array of all heights
const height = characters.map((element) => {
  return element.height;
});
console.log({ height });

//3. Get an array of objects with just name and height properties
const arr = characters.map((element) => {
  return {
    name: element.name,
    height: element.height,
  };
});
console.log({ arr });
*/

//4. Get an array of all first names
const arr2 = characters.map((element) => {
  const name = element.name.split(" ");
  return {
    name: name[0],
  };
});
console.log({ arr2 });
