/**
 * JavaScript: Blog Exercise.
 * @author  TECHCareers by Manpower
 * @date    2020.03.31
 * @summary Iterates through blog articles and outputs an HTML representation of each.
 * 
 * Goals:
 * ======
 * - Output into the DOM.
 * - Use a template literal.
 * - Use a for...of loop.
 * - Instantiate an object or object(s) of a class.
 * - Add an element to an array.
 * - Loop through (iterate through) an array.
 * - If you are adding functions or using methods, use ES6 standard.
 */

class Article {
    constructor(title = 'Blog Title', content = 'Lorem ipsum...') {
        this.title = title;
        this.content = content;
    }
    output(element = null) {
        // TODO: Prepare output to the browser...
        // TODO: Use template literals.
        if (element !== null) {
            // Populate the element.
            element.innerHTML += `
                <dl><!-- This is dynamic HTML! Wow! -->
                    <dt>Title:</dt>
                    <dd>${this.title}</dd><!-- Template literal: output JS variable value in a multi-line string (\`\`). -->
                <!-- Otherwise we need to do concatenation! -->
                    <dt>Content:</dt>
                    <dd>${this.content}</dd>
                </dl>
      `;
        }
    }
}
const myFirstArticle = new Article(); // We use "new" to instantiate an object from a class.
console.log(myFirstArticle);

const myFirstArticle = new Article('New Title','New Content'); // We use "new" to instantiate an object from a class.
console.log(myFirstArticle);

const blogArticles = [
    new Article(
        'First Day of Class (C#)',
        'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
    ),
    new Article(
        'How to Build Websites! (HTML)',
        'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
    ),
    new Article(
        'Brand new Topic (CSS)',
        'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
    ),
    new Article(
        'Another New Topic!? (JS)',
        'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
    ),
    new Article(
        'Adding on to our JS (TS)',
        'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
    ),
    new Article(
        'Time to React',
        'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
    )
];

// TODO: Add a new article to the array (add "SASS" inbetween the "CSS" and "JS" articles.)
blogArticles.splice(2, 0, 'Brand new Topic (SASS) , Today we learned about SASS, or, Syntactically Awesome StyleSheets - how cool! It is to CSS what CoffeeScript is to Javascript. Sass adds a feature set to your stylesheet markup that makes writing styles fun again.');
//FOR..OF LOOP
for (let article of blogArticles) {
    // TODO: Loop through articles and output each of them to the browser.
    console.log(article); // Output each article in console.
    article.output(myElement); // Output each article in HTML.
}

// Arrow function declaration. ( 2 parameters )
const arrayOfArticles = (num, length) => {
    num = Number(num); // Converting num into a Number.
    length = Number(length); // Converting length into a Number.
    let i = 1; // Setting an iterator.
    let arr = []; // Declaring our array.

    // Loop (length) number of times.
    while (i <= length) {
        // Add an item to our array PER loop.
        arr.push(num * i); // num * i is the value we're adding the array.
        i = i + 1; // Iterating our iterator so the loop DOES END.
        // i++; // This would do the same thing.
    }

    // Return the value.
    return arr;
}

///** Output to DOM  Document Object Model

// Let's target our elements:
const multiplesForm = document.querySelector('form');
const numField = document.querySelector('[name="num"]');
const lengthField = document.querySelector('[name="length"]');
const multiplesOutputElement = document.querySelector('dl');

// Listen for SUBMITS on this form.
multiplesForm.addEventListener('submit', event => { // Keep track of "event" object.
    // Prevent the form from SUBMITTING as this will reload the page.
    event.preventDefault();

    // Get num value.
    const numVal = numField.value;

    // Get length value.
    const lengthVal = lengthField.value;

    // Perform the math operation and retrieve the array.
    const result = arrayOfArticles(numVal, lengthVal);

    // Output the result to the user.
    multiplesOutputElement.innerHTML = `
    <dt>Values:</dt>
    <dd>${result}</dd>
  `;
});