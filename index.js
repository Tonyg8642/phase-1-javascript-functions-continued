function saturdayFun(message= 'roller-skate') {
    return `This Saturday, I want to ${message}!`
} 

function mondayWork(message= 'go to the office') {
    return `This Monday, I will ${message}.`
}

function wrapAdjective(flair= "*") {
    return function (message= "special") {
        return `You are ${flair}${message}${flair}!`

    }
}