// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*'){
    return function(thing='special'){
        return `You are ${flair}${thing}${flair}!`
    }
}

let Calculator = {}

Calculator.add = function(){
    return 1+3
}

Calculator.subtract = () => 1-3

Calculator.multiply = () => 1*3

Calculator.divide = () => 10/5

function actionApplyer(int, array){
    if (array[int] === undefined){
    return int
    } else if (array[int] === 13){
        return 4
    }
}   