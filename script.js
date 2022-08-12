/* .js files add interaction to your website */

/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

  displayScript.innerHTML = name + " from " + location + " donated to save lives. We are proud of you! Keep up the good work!"
}


// fact generator
//Move these variables to the top
var factList = [
  "Poor nutrition causes 45% of deaths in children under 5. That's 3.1 million children each year.", 
  "An estimated 27% of adolescents in developing countries are iron-deficient.", 
  "Hunger kills more than AIDS, malaria and tuberculosis combined. About 21,000 peoopple die of hunger or related causes every day.", 
  "815 million people-one in nine across the globe-do not have enough food to eat every day.", 
  "66 million children go to school hungry across the developing world, preventing them from reaching their fullest potential."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
