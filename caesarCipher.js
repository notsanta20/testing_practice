function caesarCipher(txt, shift){
    const arr = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];

    if(txt === ``) return `empty string`;
    let tempTxt = ``;
    for(let i = 0; i < txt.length; i++){
        const char = txt[i];
        const letter = filterChar(char);
        if(letter){
            tempTxt += char;
        }
        else{
            const letterIndex = (arr.indexOf(char.toLowerCase()) + shift) % 26;
            if(char === char.toUpperCase()){
                tempTxt += arr[letterIndex].toUpperCase();
            }
            else{
                tempTxt += arr[letterIndex];
            }
        }
    }
    return tempTxt;
};

const filterChar = (letter) =>{
    const char = [` `, `!`, `?`, `,`, `.`];
    if(char.includes(letter)){
        return true;
    }
    else{
        return false;
    }
}

module.exports = caesarCipher;