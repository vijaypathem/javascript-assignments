/*
LECTURE: Values and Variables 
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions) 
2. Log their values to the console 
 
 */
// let country = 'India';
// let continent = 'asia';
// let population = 1400000000
// console.log(country);
// console.log(continent);
// console.log(population);

// console.log('****************************')
/*
LECTURE: Data Types 
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable 
'language', but don't assign it any value yet 
2. Log the types of 'isIsland', 'population', 'country' and 'language' 
to the console
 */
// let isIsland = false;
// let language;

// console.log(typeof(isIsland));
// console.log(typeof(country));
// console.log(typeof(population));
// console.log(typeof(language));

// console.log('****************************')
/*
LECTURE: let, const and var 
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one) 
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const. 
3. Try to change one of the changed variables now, and observe what happens
*/

// language = 'Telugu';
// console.log(language);
// const my_country = "India";
// console.log(my_country);

// console.log('****************************')

/*
Basic Operators 
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half? 
2. Increase the population of your country by 1 and log the result to the console 
3. Finland has a population of 6 million. Does your country have more people than 
Finland? 
4. The average population of a country is 33 million people. Does your country 
have less people than the average country? 
5. Based on the variables you created, create a new variable 'description' 
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese' 

*/

// console.log(population/2);
// console.log(population+1);

// if (population>=6000000){
//     console.log('my country populatione is greater');
// }else{
//     console.log('my country population is less than finland');
// }

// let avarage_population = 33000000;
// if (population>=avarage_population){
//     console.log('my country populatione is greater');
// }else{
//     console.log('my country population is less than finland');
// }

// let description = 'portugal is in Europe,and its 11 million people speak portuguese';

// console.log(description);
/*
LECTURE: Strings and Template Literals 
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax 
 
 */
// let my_description = `${country} population ${population}`;
// console.log(my_description)

/*
LECTURE: Taking Decisions: if / else Statements 
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population) 
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original 
 */

// let population = 140000000

// if (population>33000000){
//     console.log('portugal population is above avaerage');
// }else{
//     console.log(`portugal population is ${population-33000000} is below average`)
// }
// population = 13
// console.log(population)
// population = 130
// console.log(population)
 /*
LECTURE: Type Conversion and Coercion 
1. Predict the result of these 5 operations without executing them: 
'9' - '5'; 
'19' - '13' + '17'; 
'19' - '13' + 17; 
'123' < 57; 
5 + 6 + '4' + 9 - 4 - 2; 
2. Execute the operations to check if you were right

// */
// console.log(`${'123' < 57}`);
// console.log(`${'9'-'5'}`);
// console.log(`${'19' - '13' + '17'}`);
// console.log(`${'19' - '13' + 17}`);
// console.log(`${5 + 6 + '4' + 9 - 4 - 2}`);

/*
LECTURE: Equality Operators: == vs. === 
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?'); 
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now) 
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' 
is greater than 1 
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value) 
5. Test the code with different values of 'numNeighbours', including 1 and 0. 
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening? 
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1 
8. Reflect on why we should use the === operator and type conversion in this 
situation */

// let numNeighbours = prompt('no of neighbours?');

// let numNeighbours = Number(prompt('no of neighbours'));

// if (numNeighbours>1){
//     console.log('more than one');
// }else if(numNeighbours===1){
//     console.log('only one');
// }else{
//     console.log('no neighbours');
// }


/*
LECTURE: Logical Operators 
1. Comment out the previous code so the prompt doesn't get in the way 
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island. 
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary. 
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :(' 
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D)
// */
// let country = 'india'
// let population = 140
// let isIsland = true
// let isLanguageEnglish = true
// if (population<50){
//     if(isIsland){
//         if(isLanguageEnglish){
//             console.log(`you can live in ${country} sarah!!`)
//         }
//         else{
//             console.log('not matched')
//         }
//     }
//     else{
//         console.log('not matched')
//     }
// }
// else{
//     console.log('not matched')
// }

// if(population<50 && isIsland && isLanguageEnglish){
//     console.log('you can live here')
// }else{
//     console.log('not matched')
// }


/*
LECTURE: The switch Statement 
1. Use a switch statement to log the following string for the given 'language': 
chinese or mandarin: 'MOST number of native speakers!' 
spanish: '2nd place in number of native speakers' 
english: '3rd place' 
hindi: 'Number 4' 
arabic: '5th most spoken language' 
for all other simply log 'Great language too :D' 
 */

// let language= prompt('language?')

// switch(language){
//     case 'chinese':
//     case 'mandarin':
//         console.log('is the most number of native speakers');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('4th palce');
//         break;
//     case 'arabic':
//         console.log('5th palce');
//         break;
//     default:
//         console.log('Great Language too : D')
// }

/*
 
LECTURE: The Conditional (Ternary) Operator 
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only 
one word changes between these two sentences! 
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original 
  
*/

// let population = 130;

// console.log(`the population is ${population > 33 ? 'above' : 'below'} average.`)

/*
LECTURE: Functions 
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki' 
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console

*/

// function describeCountry(country,population,capitalCity){
//    return `${country} has ${population} million population and its capital city is ${capitalCity}`
// }

// const c1 = describeCountry('finland',6,'Helsinki')
// const c2 = describeCountry('India',140,'Delhi')
// const c3 = describeCountry('america',33,'washington')
// console.log(c1,c2,c3)


/*

1. The world population is 7900 million people. Create a function declaration 
called 'percentageOfWorld1' which receives a 'population' value, and 
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population 
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100 
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console 
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations
*/

// function percentageOfWorld1(population){
//     return (population/7900)*100;
// }

// const china = percentageOfWorld1(1400);
// const india = percentageOfWorld1(1500);
// const america = percentageOfWorld1(330);
// console.log(china,india,america);

// const percentageOfWorld2 = function(population){
//     return (population/7900)*100;
// }
// const china1 = percentageOfWorld2(1400);
// const india1 = percentageOfWorld2(1500);
// const america1 = percentageOfWorld2(330);
// console.log(china1,india1,america1);

/*
: Arrow Functions 
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'
*/

// const percentageOfWorld3 = population => (population/7900)*100;
// const china = percentageOfWorld3(1400);
// const india = percentageOfWorld3(1500);
// const america = percentageOfWorld3(330);
// console.log(china,india,america);

/*
LECTURE: Functions Calling Other Functions 
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.' 
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier 
3. Call 'describePopulation' with data for 3 countries of your choice
*/

// const percentageOfWorld1 = population => (population/7900) *100;

// function describePopulation(country,population){
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
// }

// const china = describePopulation('china',1400);
// const india = describePopulation('india',1500);
// const america = describePopulation('america',330);

// console.log(china,india,america);

// const percentageOfWorld1 = population=>(population/7900)*100;

// function describePopulation(country,population){
//     const percentage = percentageOfWorld1(population);
//     const description =`${country} has ${population} million people,
//      which is about ${percentage} of the world.`;

//      console.log(description)
// }

// describePopulation('china',1400);
// describePopulation('india',1500);
// describePopulation('america',330);

/*
: Introduction to Arrays 
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations' 
2. Log to the console whether the array has 4 elements or not (true or false) 
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
*/ 

// const percentageOfWorld1 = pop=> (pop/7900) *100;

// let populations = [1400,1500,330,6];

// console.log(populations.length===4);

// let percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

/*
Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours' 
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array 
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array 
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D' 
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for 
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */

// let neighbours = ['srilanka','pakistan','china'];
// console.log(neighbours);

// neighbours.push('utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('germany')){
//     console.log('Probably not a central europian country :D');
// }

// neighbours[neighbours.indexOf('china')] = 'Republic of china'
// console.log(neighbours)

/*
: Introduction to Objects 
1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments) 

*/

// const myCountry = {
//     country : 'india',
//     capital : 'delhi',
//     language : 'hindi',
//     population : 1500,
//     neighbours : ['china','pakistan','srilanka','bangladesh']
// };


/*
 
LECTURE: Dot vs. Bracket Notation 
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.' 
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation. 
*/

// console.log(
//     `
//     ${myCountry.country} has ${myCountry.population} million
//     ${myCountry.language} speaking people. ${myCountry.neighbours.length} neighbouring
//     countries.
//     `
// );

// myCountry.population +=2;
// console.log(myCountry.population)

// myCountry['population'] -=2;
// console.log(myCountry.population)

/**
  Object Methods 
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword. 
2. Call the 'describe' method 
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
 */

// const myCountry = {
//   country : 'india',
//   capital : 'delhi',
//   population : 1500,
//   language : 'hindi',
//   neighbours : ['china','pakistan','srilanka','bangladesh'],

//   describe : function() {
//     console.log(`
//       ${this.country} has ${this.population} million people and its capital is ${this.capital}.
//       ${this.neighbours.length} neighbouring countries.
//     `);
//   },

//   checkIsland : function(){
//     this.isIsland = this.neighbours.length === 0? true : false;
//   }

// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);


/**
 There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting
 */

// for(let i=1; i<=50; i++){
//   console.log(`Voter number ${i} is currently voting`);
// }

/**
  : Looping Arrays, Breaking and Continuing 
1. Let's bring back the 'populations' array from a previous assignment 
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier 
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
 */

// const percentageOfWorld1 = pop=>(pop/7900)*100;

// let populations = [1400, 1500, 330, 6];

// percentages = [];

// for(let i=0; i<populations.length;i++){
//   const perc = percentageOfWorld1(populations[i]);
//   percentages.push(perc);
// }
// console.log(percentages);

/**
   Looping Backwards and Loops in Loops 
1. Store this array of arrays into a variable called 'listOfNeighbours' 
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']]; 
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country 
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway 😉 
 
 */

// listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway','Sweden','Russia']
// ];

// for(let i=0;i<listOfNeighbours.length;i++){
//   for(let y=0;y<listOfNeighbours[i].length;y++){
//     console.log(`
//         Neighbour : ${listOfNeighbours[i][y]}
//     `)
//   }
// }

/*
LECTURE: The while Loop 
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3') 
2. Reflect on what solution you like better for this task: the for loop or the while 
loop?
 */

// const percentageOfWorld1 = pop => (pop/7900)*100;

// populations = [1400, 1500, 330, 6];

// percentages = [];

// let i=0;

// while(i<populations.length){
//   const perc = percentageOfWorld1(populations[i]);
//   percentages.push(perc);
//   i++
// }
// console.log(percentages)

