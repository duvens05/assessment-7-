//1
// runtime complexity
 
function sumzero (arr){
    for (let i = 0; i <arr.length; i++){
        for (let k = 0; k <arr.length; k++){
            if (i !== k & arr[i] - arr[k]===0){
                return true 
            }
        }
    }
    return false 
}
function uniquechars(str){
    const usedchars={}
    for(let i = 0; i <str.length; i++){
        if (usedchars[str[i]]){
            return false 
        }else {
            usedchars[str[i]]="filler"
        }
    }
    return true
}
console.log(uniquechars("monday"))
// 3
// runtime complexity
function ispangram(str){
    str= str.toLoweCase()
    const lettercount={
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,
    
    } 
    for (let i = 0; i <str.length; i++){
        if(lettercount[str[i]] !== undefined){
            lettercount[str[i]]++
        }
    }
    for(letter in lettercount){
        if (lettercount[letter]===0){
            return false 
        }
    }
    return true 
}

// 4
// runtime complexity
function findlogestword(arr){
    let longestWordlength = 0 
    for (let i = 0; i <str.length; i++){
        if(arr[i].length> longestWordlength){
            longestWordlength= arr[i].length
        }
    }
    return longestWordlength
}