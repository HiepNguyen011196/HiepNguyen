InputPhysic = prompt("Enter Physic Grade");
let Physic = parseInt(InputPhysic);
InputChemistry = prompt("Enter Chemistry Grade");
let Chemistry = parseInt(InputChemistry);
InputBiology = prompt("Enter Biology Grade");
let Biology = parseInt(InputBiology);
let Average = (Physic + Chemistry + Biology)/3;
let Total = Physic + Chemistry + Biology;
document.write("Your average grade is: " + Average);
document.write('</br>');
document.write("Your total grade is : " + Total);