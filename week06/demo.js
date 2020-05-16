// abababx
const match = (str) => {
    let state = start
    for (let s of str) {
        state = state(s)
    }
    return state === end
}

const start = (s) => {
    if (s === 'a') return findA
    else return start
}

const findA = (s) => {
    if (s === 'b') return findB
    else return start(s)
}

const findB = (s) => {
    if (s === 'c') return end
    else return start
}

const end = (s) => {
    return end
}

console.log(match('aabc'))
