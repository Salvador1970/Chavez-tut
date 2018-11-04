var images =["http://media.salon.com/2013/06/naked_and_afraid2.jpg",
"https://www.njhiking.com/wp-content/uploads/2014/09/buttermilk-IMG_0020-580x558.jpg",
"https://c1.staticflickr.com/5/4448/24005434738_0e5311db8a_b.jpg",
"https://www.irishtimes.com/polopoly_fs/1.3152269.1499865494!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
"https://www.rei.com/content/dam/images/Expert%20Advice/Migration/HeroImages/Skrobecki_110916_0231_Rock_Climbing_Bouldering_Tips_Exercises_lg.jpg",
"https://images04.military.com/sites/default/files/media/military-fitness/2014/07/obstacle-courses-image.jpg"];


var Quotes = [];

Quotes[0]= "You Learn More From Failure Than From Success. Do not Let It Stop You. Failure Builds Character.";
Quotes[1]= "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.";
Quotes[2]= "We Generate Fears While We Sit. We Overcome Them By Action.";
Quotes[3]= "Whether You Think You Can Or Think You Cannot,You are Right.";
Quotes[4]= "Creativity Is Intelligence Having Fun.";
Quotes[5]= "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.";




function displayDetails() {
  var Randomimages = Math.floor(Math.random() * (images.length-0));
  var RandomQuotes = Math.floor(Math.random() * (Quotes.length-0));
  
  document.getElementById("picture").src=images[Randomimages];
  document.getElementById("wasp").innerHTML=Quotes[RandomQuotes];
}

//add a button


