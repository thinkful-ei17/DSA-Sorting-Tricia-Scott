'use strict';


const array = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5];

function mSort(array){
	if (array.length <= 1)
		return array;

	const arrMiddle = Math.floor(array.length /2);
	let leftArray = array.slice(0, arrMiddle);
	let rightArray = array.slice(arrMiddle, array.length);
  
	leftArray = mSort(leftArray);
	rightArray = mSort(rightArray);

	return merge(leftArray, rightArray, array);
}

function merge(leftArr, rightArr, array){
	let leftIndex = 0;
	let rightIndex = 0;
	let outputIndex = 0;
  
	while ((leftIndex < leftArr.length ) && (rightIndex < rightArr.length)){
		if (leftArr[leftIndex] < rightArr[rightIndex])
			array[outputIndex++] = leftArr[leftIndex++];
		else
			array[outputIndex++] = rightArr[rightIndex++];
	}
	for (let i = leftIndex; i < leftArr.length; i++)
		array[outputIndex++] = leftArr[i];

	for (let i = rightIndex; i < rightArr.length; i++)
		array[outputIndex++] = rightArr[i];

	return array;

}//end merge function


function qSort(array, start=0, end=array.length){
	start = start;
	end = end;
	if (start >= end){
		return array;
	}
	const middle = partition(array, start, end);
	array = qSort(array, start, middle);
	array = qSort(array, middle + 1, end);
	return array;
}


function partition(array, start, end){
	const pivot = array[end - 1];
	let j = start;
	for (let i=start; i<end - 1; i++){
		if (array[i] <= pivot){
			swap(array, i, j);
			j++;
		}
	}
	swap(array, end-1, j);
	return j;
}


function swap(array, i, j){
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

console.log('QuickSort = ', qSort(array));
console.log('MergeSort = ', mSort(array));