
let messageTheWorld: string;

messageTheWorld = "Hello world TS!";

console.log(messageTheWorld);

const collorSel = [
    {
        name: "A",
        age: 20,
    },
    {
        name: "B",
        age: 30,
    },
    {
        name: "C",
        age: 40,
    },
];

const element = document.getElementById("collor");

if(element !== null) 
element.innerHTML = 
collorSel.map(
    (collorObject) => `<option value="${collorObject.name}">${collorObject.name}</option>`).join(" ");

  