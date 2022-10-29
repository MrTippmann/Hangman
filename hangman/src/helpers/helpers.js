//sets setter to true
//after 2secs sets setter to false

export function showNotification(setter) {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 2000);
}

export function checkWin(correct, wrong, word) {
    let status = 'win'
    
    //check for win
    //if correctLetters does not include a letter from our word, we didn't win
    //but we also get another go - we havent lost yet
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = ''
        }
    }); 
    //check for lose
    if(wrong.length === 6) status = 'lose'
    return status
}