// code your solution here
function wrapAdjective(flair = "*") { 
    return function(adj = "special") {
        return (`You are ${flair}${adj}${flair}!`);
    }
}


function saturdayFun(activity = ('roller-skate'))  {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function(career = 'go to the office') {
    return `This Monday, I will ${career}.`
}