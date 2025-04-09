let i = 0;

function recurs() {
	// exit condition
	if (i >= 5) {
		return;
	}

	console.log(i);
	i++;
	recurs();
}

recurs();

console.log("sep\n");

const arr = [4, 16, 1, 110, 0, 47, 678, 4];

//bubble sort
function sort(arrToSort, newArr = []) {
	//exit condition
	if (arrToSort.length === 0) {
		return newArr;
	}

	let smallest = arrToSort[0];
	let smallestIndex = 0;

	//find the smallest number in the array
	for (let i = 1; i < arrToSort.length; i++) {
		//compare the new number in the array to our current smallest number
		if (arrToSort[i] < smallest) {
			//set the new number as our current smallest number
			smallest = arrToSort[i];
			smallestIndex = i;
		}
	}

	newArr.push(smallest);

	//creates a new array with the smallest number sliced out of it
	const newArrToSort = arrToSort.slice(0, smallestIndex).concat(arrToSort.slice(smallestIndex + 1));

	console.log("newArrToSort:", newArrToSort);
	console.log("newArr:", newArr);
	console.log("smallest:", smallest);
	console.log()

	//recurse!!!!!!
	return sort(newArrToSort, newArr);
}

console.log(sort(arr));
// console.log(sort("asdgdfshfdghasfdfgsertgf"));