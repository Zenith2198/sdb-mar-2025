import fs from "fs";
import "dotenv/config";

//read file in
fs.readFile(process.env.DATABASE_FILEPATH, { encoding: "utf8" }, (err, data) => {
	//parse file data
	const database = JSON.parse(data);

	//edit file
	database.push({
		name: "Charlie",
		email: "orangeGoose23@gmail.com",
		password: "12345" //VERY BAD, DO NOT STORE PASSWORDS LIKE THIS
	});

	//write file back out
	fs.writeFile(process.env.DATABASE_FILEPATH, JSON.stringify(database, undefined, 2), { encoding: "utf8" }, (err) => {});
});