import "./style.css";

let newStory = [
  // 0
  {
    header: " / / Mor, far og (venner)",
    description:
      `<em>{ <br><br>Du har lavet en aftale med dine forældre, om at spise middag hos dem i aften, 
      men har glemt alt om, at du har en aftale med dine venner, om at tage ind og se fortsættelsen på din yndlingsfilm i biografen i aften.<em><br><br>}<br><br> <br>
      Det er ikke første gang, du glemmer en aftale med dine forældre, og du vil ikke skuffe dem, 
      men samtidig vil du heller ikke gå glip af filmen, som du jo allerede har købt billetter til. Dine venner er i forvejen trætte af, at du ofte aflyser dine aftaler<br><br>`,
    choices: [
      { text: "1.	Du tager i biografen med dine venner ", nextState: 1 },
      { text: "2.	Du er tager til middag hos dine forældre ", nextState: 2 },
      { text: "3.	Du vælger at lyve for begge parter, og forsøger at nå begge dele ", nextState: 3 },
    ],
    imgUrl:'familie.jpg'
  },
  // 1
  {
    header: "Biografen;",
    description:
      `
      <em>[<br><br>Du vælger at tage i biografen med dine venner, og fortæller til dine forældre, at du endnu en gang ikke kan komme til familiemiddag<em>
      <br><br>] <br><br>
      Du ved, at hvis du vælger at tage i biografen med dine venner, vil dine forældre blive skuffede over, at du endnu en gang aflyser en familiemiddag, og fjerne dine lommepenge, som du har brug for, da du er på SU, og ellers ikke kan klare dig resten af skoleåret. 
      Dog vil du ikke skuffe dine venner, og aflyse endnu en gang, da du frygter, at de ikke vil invitere dig til noget igen`
      
      
      ,
    choices: [
      { text: "1.	Du ----> bliver", nextState: 5 },
      { text: "2.	Du er ærlig, og tager til middag hos dine forældre", nextState: 2 },
      { text: "3.	Du vælger at lyve for begge parter, og forsøger at nå begge dele", nextState: 3 },
    ],
    imgUrl:'film.jpg'
  },
  // 2
  {
    header: `"Forældre"`,
    description:
      `<em>Du tager til middag hos dine forældre, og fortæller dine venner, at du endnu en gang ikke kan overholde jeres aftaler <br><br>
      <>  <em>
      <br><br>
      Nu må du skuffe dine venner endnu en gang, og risikere, at de højest sandsynligt ikke inviterer dig med, næste gang de skal noget sjovt
      `,
    choices: [
      { text: "1.	Du tager i biografen med dine venner", nextState: 1 },
      { text: "2.	Du ===>>> bliver ", nextState: 6 },
      { text: "3.	Du vælger at lyve for begge parter, og forsøger at nå begge dele", nextState: 3 }
    ],
    imgUrl:'forældre.jpg'
  },
  // 3
  {
    header: "LØGNER[!!]...",
    description: `
    <em><em>//Du lyver for begge parter, og forøger at nå begge dele
    <br>:<br>Du vælger at lyve for begge parter, men ved at der er sandsynlighed for at de begge to opdager din løgn, og det betyder,
     at du både mister dine lommepenge og aldrig bliver inviteret til dine venners arrangementer igen`,
    choices: [
      { text: "1.	Du er ærlig og tager til middag hos dine forældre", nextState: 2 },
      { text: "2.	Du siger til begge parter, at du er bagude med lektierne, og vælger at blive hjemme", nextState: 4 },
      { text: "3.	Du er ærlig og tager i biografen med dine venner", nextState: 1 }
    ],
    imgUrl:'løgn.jpg'
  },
  // 4
  {
    header: "#Bliver hjemme",
    description: `
    <em>Du lyver for begge parter om at du er bagude med lektierne, og bliver hjemme i din seng<em><br>
    <br>XP<br><br><br>
    Du bliver hjemme i din seng, i frygt for at skuffe nogle, men ved, at begge parter stadig er en smule skuffede, da i jo havde en aftale, og der derfor var en forventning fra begge parter om, 
    at du havde styr på dine lektier inden dine aftaler. Hverken dine venner eller familie giver dog 100 procent udtryk for hvad de føler, da de selvfølgelig vil dig det bedste, og derfor lader dig lave dine lektier i fred. 
    Udover følelsen af at skuffe både venner og familie, skal du nu ligge mutters alene i sengen på en fredag aften `,
    choices: [

      { text: "1. Du er ærlig og tager til middag hos dine forældre", nextState: 2 },
      { text: "2.	Du er ærlig og tager i biografen med dine venner", nextState: 1 },
      { text: "3.	Du vælger at lyve for begge parter, og ser om du kan nå begge dele", nextState: 3 }
      
    ],
    imgUrl:'seng.jpg'
  },

  {
    header: `<br><br><br>consol.log (Du har mistet din familie....og dine lommepenge..........)`,
    description: `
  
    `,
    choices: [],
    
  },
  {
    header: `<br><br><br>consol.log (Du har mistet dine venner) </3<3/3<3<3<33<3<3<:'()`,
    description: `
  
    `,
    choices: [],
    
  },
  
  
  
  
];

// Hooks til HTML DOM
const headerEl = document.querySelector("header h1");
const textEl = document.querySelector("#text p");
const optionsEl = document.querySelector("#options");
const imgEl=document.querySelector('main img')


// Sæt den aktuelle position i historien.
let currentState = 0;

function startGame() {
  showText(currentState);
  showImage(currentState);
  showChoices(currentState);
}

function showText(stateID) {
  //console.log(newStory[stateID].description)
  headerEl.innerHTML= newStory[stateID].header;
  textEl.innerHTML = newStory[stateID].description;
}

function showImage(stateID) {
  //console.log(newStory[stateID].description)
  imgEl.src = './images/'+newStory [stateID].imgUrl;
}

function showChoices(stateID) {
  optionsEl.innerHTML = "";

  console.log(newStory[stateID]);


  newStory[stateID].choices.forEach( (valg) => {
    const myButton = document.createElement("button");
    myButton.innerText = valg.text;
    myButton.classList.add("btn-color");

    // Tilføj event listener
    myButton.addEventListener("click", () => {
      optionSelected(valg);
    });
    optionsEl.append(myButton);
  });
}

// Håndter den valgte knap
function optionSelected(options) {
  currentState = options.nextState;

  showText(currentState);
  showChoices(currentState);
  showImage(currentState);
}

// Start spillet
startGame();
