'use strict';

//sort books alphabetically
    //sort first by author last name
    //if author had more than one book, 
            //sort alphabetically by title
                    //if the title started with 'the, a, an' i would sort on the next word.

// const library = [
//     { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
//     { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
//     { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
//     { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
//     { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
//     { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
//     { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
//     { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
//     { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
//     { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
//     ];

//we have a pile of books
//pick one up compare i
//on the shelf is least to greatest

//pick up two books, compare and put the lower

//for an array =>
 //   look book in array[0] + and array[1] =>
//      whichever bbok is less, we try to put back in the lowest index
            //but before we actually put it back, we check to se if it's less than the index before...

            //second counter

// ================== Does Not Work Yet ====================            
function bookSort(books){
    const shelf = [];
    for(let i = 0; i < books.length; i++){
        if(shelf.length < 1){
           shelf.push(books[i]);
        }
        for(let j=0; j<shelf.length ; j++){
            if(books[i] < shelf[j]){
                shelf.push(books[i]);
            }else{
                shelf.push(books[i]);
            }
        }
    }
    console.log('sorted', shelf);
    return shelf;
}    


const arr = [4, 2, 6, 8, 1];

console.log(bookSort(arr));
