const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

async function respond() {
  const favColor = await ask("What's your favorite color?\n");

  if (favColor === "blue") {
    console.log("Hey, me too!");
  }

  process.exit();
}
respond();
