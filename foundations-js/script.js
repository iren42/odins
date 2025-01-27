/*
 * Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
 */
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

function	isFrom(item, begin, end)
{
	return (item >= begin && item <= end);
}

function	filterRangeInPlace(arr, begin, end)
{
	for (const item of arr)
	{
	// filter array
		if (!isFrom(item, begin, end))
// remove unwanted item
			arr.splice(arr.indexOf(item), 1);
	}

}

console.log( arr ); // [3, 1]

