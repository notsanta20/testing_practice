function analyzeArray(arr){
    let avgNum = 0;
    let minNum = arr[0];
    let maxNum = arr[0];

    for(let x of arr){
        avgNum += x;
    }

    for(let y of arr){
        if(minNum > y ) minNum = y;
    }

    for(let z of arr){
        if(maxNum < z ) maxNum = z;
    }

    return {
        avg: avgNum / arr.length,
        min: minNum,   
        max: maxNum,
        len: arr.length,
    }
};

console.log(analyzeArray([1,2,3]));