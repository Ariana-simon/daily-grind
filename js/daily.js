//alert("can you see this?");

/* Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

pic - the scr of the coffee 
alt - the alt tag for the coffee pic
desc - a description of the coffe 
color - the color associated with the coffee
day - the day of the week for the coffee
name - the name of the coffee
*/
function coffeeTemplate(coffee) {
  return `
  <p>
   <img 
      src="${coffee.pic}" 
      alt="${coffee.alt}" id="coffee" />
  <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily 
  coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}!
  </p>
  `;
}
let myDate = new Date();
let myDay = myDate.getDay();

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Cold Brew",
      pic: "images/cold-brew.jpg",
      alt: "a picture of a Cold Brew",
      color: "yellow",
      day: "Sunday",
      desc: `I like Cold Brew!`,
    };
    break;

  case 1:
    today = "Monday";
    coffee = {
      name: "Mocha",
      pic: "images/mocha.jpg",
      alt: "a picture of a cup of Mocha coffee",
      color: "blue",
      day: "Monday",
      desc: "I like Mocha coffee!",
    };
    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: "Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of a bubble tea",
      color: "brown",
      day: "Tuesday",
      desc: "I like Bubble Tea!",
    };
    break;
  case 3:
    today = "Wednesday";
    coffee = {
      name: "Caramel Latte",
      pic: "images/caramel-latte.jpg",
      alt: "a picture of a Caramel Latte",
      color: "pink",
      day: "Wednesday",
      desc: "I like Caramel Lattes!",
    };
    break;
  case 4:
    today = "Thursday";
    coffee = {
      name: "Drip",
      pic: "images/drip.jpg",
      alt: "a picture of Drip coffee",
      color: "purple",
      day: "Thursday",
      desc: "I like Drip coffee!",
    };
    break;

  case 5:
    today = "Friday";
    coffee = {
      name: "Frappaccino",
      pic: "images/frappaccino.jpg",
      alt: "a picture of a Frappaccino",
      color: "red",
      day: "Friday",
      desc: "I like Frappaccinos!",
    };
    break;

  case 6:
    today = "Saturday";
    coffee = {
      name: "Pumpkin Spice Latte",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "a picture of a Pumpkin Spice Latte",
      color: "orange",
      day: "Saturday",
      desc: "I like Pumpkin Spice Lattes!",
    };
    break;

  default:
    today - "Something went wrong!";
}
//places our coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
