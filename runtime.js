const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const arrobj = {
tinyArray: getSizedArray(10),
smallArray: getSizedArray(100),
mediumArray: getSizedArray(1000),
largeArray: getSizedArray(10000),
extraLargeArray: getSizedArray(100000),
}



// How long does it take to double every number in a given 
// array? 
for (arr in arrobj){
    // Try it with first function
    perf.start();                     // Starts timer
    doublerAppend(arrobj[arr]);
    let resultsAppend = perf.stop();  // Stops timer and save time results


    // Try it with second function
    perf.start();
    doublerInsert(arrobj[arr]);
    let resultsInsert = perf.stop();


    console.log('Results for the extraLargeArray'+ arr);
    console.log("insert", resultsInsert.preciseWords);
    console.log("append", resultsAppend.preciseWords);
}

// result table
// Results for the extraLargeArraytinyArray      
// insert 43.7 μs
// append 102 μs
// Results for the extraLargeArraysmallArray     
// insert 14.5 μs
// append 13.9 μs
// Results for the extraLargeArraymediumArray    
// insert 139.6 μs        
// append 38.3 μs
// Results for the extraLargeArraylargeArray     
// insert 10.6346 ms      
// append 355.5 μs        
// Results for the extraLargeArrayextraLargeArrayinsert 1.087803 s      
// append 3.3888 ms