/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

const quotes = [
  {
    quote: "“I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character,",
    source:"Dr. Martin Luther King",
    citation:"'I have a dream' speech from the steps of the Lincoln Memorial in Washington.",
    year:"1963"
  },
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source:"Dr. Suess",
    citation:"",
    year:""
  },
  {
    quote: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
    source:"Marilyn Monroe",
    citation:"",
    year:""
  },
  {
    quote: "Get busy living or get busy dying.",
    source:"Stephen King",
    citation:"",
    year:""
  },
  {
    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source:"Mark Caine",
    citation:"",
    year:""
  },
  {
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source:"Helen Keller",
    citation:"",
    year:""
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source:"Mark Twain",
    citation:"",
    year:""
  },
  {
    quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    source:"Audre Lorde",
    citation:"",
    year:""
  },
  {
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    source:"Eleanor Roosevelt",
    citation:"",
    year:""
  },
  {
    quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    source:"David Brinkley",
    citation:"",
    year:""
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source:"John F. Kennedy",
    citation:"",
    year:""
  }

];


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(array){
  return array[Math.floor(Math.random() * array.length)];
}


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(array){
  let obj = getRandomQuote(array);
  let html = "";
    html +="<p class ='quote'>" +  obj.quote + "</p>";
    html += "<p clas ='source'>-" + obj.source + "</p>";
      if(obj.citation !== ""){
        html += "<span class='citation'> " + obj.citation + "</span>";
      }
      if(obj.year !== ""){
        html += "<span class='year'> " + obj.year + "</span>";
      }
      return document.getElementById('quote-box').innerHTML = html;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

printQuote(quotes);
