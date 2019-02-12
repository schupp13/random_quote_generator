/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
By Philip Schultz
******************************************/

/***
The purpose of this program is to generate a random quote to the browser whenever the user pushes a button, or when 20 seconds has past with no interation.
***/

/*
  The constant variable 'quote'  is an array of objects, each object contains a quote and the source (person that said it) of that quote,
  the object may also contain a citation, year, and tag, but it does not have to.
  All of my quotes have the quote, source and a tag property , but only one quote has all properties filled and it is at index 0
  */
const quotes = [
  {
    quote: "“I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character,",
    source:"Dr. Martin Luther King",
    citation:"'I have a dream' speech at the Lincoln Memorial in Washington.",
    year:"1963",
    tag:"Political"
  },
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source:"Dr. Suess",
    citation:"",
    year:"",
    tag:"Artist"
  },
  {
    quote: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
    source:"Marilyn Monroe",
    citation:"",
    year:"",
    tag:"Pop Culture"
  },
  {
    quote: "Get busy living or get busy dying.",
    source:"Stephen King",
    citation:"",
    year:"",
    tag:"Motivational"
  },
  {
    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source:"Mark Caine",
    citation:"",
    year:"",
    tag:"Motivational"
  },
  {
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source:"Helen Keller",
    citation:"",
    year:"",
    tag:"Motivational"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source:"Mark Twain",
    citation:"",
    year:"",
    tag:"Motivational"
  },
  {
    quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source:"Audre Lorde",
    citation:"",
    year:"",
    tag:"Motivational"
  },
  {
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    source:"Eleanor Roosevelt",
    citation:"",
    year:"",
    tag:"Philosophical"
  },
  {
    quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    source:"David Brinkley",
    citation:"",
    year:"",
    tag:"Motivational"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source:"John F. Kennedy",
    citation:"",
    year:"",
    tag:"Motivational"
  }
];

/***
`getRandomQuote`:
functions is made to accept an array and return a random index/item within the arrray
***/
function getRandomQuote(array){
  return array[Math.floor(Math.random() * array.length)];
}

function setTimer(){
  let myTimer;
  clearInterval(myTimer);
  myTimer = setInterval(function(){printQuote(array_of_quotes);getRandomRGB();}, 20000);


  /*
  below is a setInterval fuction, this function will repeat by itself every 20 seconds (20,000 miliseconds).
  Everytime i repeates it calls the printQuote and getRandomRGB function.
  */

}


/***
`printQuote` function:
   - accepts an array of quotes.
   - call the `getRandomQuote` function and assign it to a variable. (send it the array of quotes)
   - builds an html string
   - returns to
***/
function printQuote(array_of_quotes){
  //calling the getRandomQuote function and storing the result (an object) in the variable 'random_quote'
  let random_quote = getRandomQuote(array_of_quotes);
  let html = "";
  html +="<p class ='quote'>" +  random_quote.quote + "</p>";
  html += "<p clas ='source'>-" + random_quote.source ;
  // testing to see if there is a citation, if there is, it will be added to the page in a span element
  if(random_quote.citation !== ""){
    html += "<span class='citation'> " + random_quote.citation + "</span>";
  }

  // testing to see if there is a year, if there is, it will be added to the page in a span element
  if(random_quote.year !== ""){
    html += "<span class='year'> " + random_quote.year + "</span><br>";
  }
  html += "</p>";

  // testing to see if there is a tag, if there is, it will be added to the page in a paragragh element
  if(random_quote.tag !== ""){
    html += "<br><p class='tag'> " + random_quote.tag + "</p>";
  }


  return document.getElementById('quote-box').innerHTML = html;
}

/*
getRandomRGB:
 - funciton creates a random RGB number 0-255, for variables- red, green and blue
 - creates a RGB string using the random numbers
 - the string is assigned to the statement- document.body.style.background ,
 which will change the entire background color of the document when called.
*/
function getRandomRGB(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = "";
  randomColor += "RGB(" + red + ", " + green + ", " + blue + ")";
  return document.body.style.backgroundColor = randomColor;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
   and the 'getRandomRGB'functions.
***/

document.getElementById('loadQuote').addEventListener("click", function(){printQuote(quotes); getRandomRGB();});



// I'm calling my function here so the page initialy starts with one of my random quotes.
printQuote(quotes);
