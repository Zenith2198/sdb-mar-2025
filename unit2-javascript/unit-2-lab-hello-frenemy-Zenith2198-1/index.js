function greeter(name) {
  const lowerCaseName = name.toLowerCase();

  if (lowerCaseName === "enemy") {
    console.log("Go away!");
  } else {
    // console.log("Hello " + lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1));
    console.log(`Hello ${lowerCaseName[0].toUpperCase()}${lowerCaseName.slice(1)}!`);
  }
}

greeter("Betty");
greeter("John");
greeter("Enemy");
greeter("bethany");
greeter("ADAM");