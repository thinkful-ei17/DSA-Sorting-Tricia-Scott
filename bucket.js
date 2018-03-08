"use strict";

const array = [2,7,1,15,30,32,72,70,51,42,25,24,53,55,78,50,13,40,48,];



function bucketSort(arr){
    const bucket = [];
    for(let i=0; i<arr.length; i++){
    //for the value in the i-index of arr, bucket[value] = 1;
        const value = arr[i];
        bucket[value] = 1;
    }
    const sortedArray = [];
    for(let i=0; i<bucket.length; i++){
        if(bucket[i]=== 1){
            sortedArray.push(i);
        }
    }
    return sortedArray;
}

console.log(bucketSort(array));

