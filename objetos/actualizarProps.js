const myDog = {
    "name": "Coder",
    "legs": 4,
    "Tails": 1,
    "Friends":["freecodecamp Campers"]
};
/* actualizar propiedades */
myDog.name = "happy Coder";

myDog["Tails"]="3";

/* añadir propiedades */

myDog["bark"] = "wuaff";
myDog.color = "black";

/* Eliminar propiedades */
delete myDog["color"];
delete myDog.Tails;
