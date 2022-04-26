
function randoNumbo(){
  return Math.floor(Math.random() * 502);
}

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetCharacter(){
  const simp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const simpJson = await simp.json();

  return simpJson[0];
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetCharacter(){
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(quote => quote.json())
    .then(quote => quote[0]);
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function tryCatchAsync(){
  try {
    const simp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const simpJson = await simp.json();

    return simpJson[0];
  } catch (error) {
    console.error('You made a Boo-Boo');
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function tryCatchThen(){
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(quote => quote.json())
    .then(quote => quote[0])
    .catch(error => console.error('You make so many Boo-Boos'));
}


/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function tryCatchFinallyAsync(){
  try {
    const simp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const simpJson = await simp.json();

    return simpJson[0];
  } catch (error) {
    console.error('Can\'t catch a break can you.');
  } finally {
    console.log('All Done!');
  }
}

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
export function tryCatchFinallyThen(){
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(quote => quote.json())
    .then(quote => quote[0])
    .catch(err => console.error('You dun fucked up'))
    .finally(console.log('All done!'));
}

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */
export async function asyncAsync(){
  return tryCatchFinallyAsync();
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
export function thenThen(){
  return tryCatchFinallyThen();
}
