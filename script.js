var factList = ["Half of the 736 million people living in extreme poverty globally live in five countries: India, Nigeria, Democratic Republic of Congo, Ethiopia, and Banglades", "In 2015 (the latest estimates available), 10% of the world’s population lived in extreme poverty (less than $1.90 a day)", "About 13% of people globally do not have access to electricity, and 40% of people globally do not have access to clean fuels for cooking", "A study of 13 developing countries found that government spending on education and health accounted for 69% of the total reduction of economic inequality"];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}