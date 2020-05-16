// abababx
const match = (str) => {
    let state = start
    for (let s of str) {
        state = state(s)
    }
    return state === end
}

export default match

const start = (s) => {
    if (s === 'a') return findA
    else return start
}

const findA = (s) => {
    if (s === 'b') return findB
    else return start(s)
}

const findB = (s) => {
    if (s === 'a') return findA2
    else return start
}

const findA2 = (s) => {
    if (s === 'b') return findB2
    else return start
}

const findB2 = (s) => {
    if (s === 'a') return findA3
    else return findB(s)
}

const findA3 = (s) => {
    if (s === 'b') return findB3
    else return start
}

const findB3 = (s) => {
    if (s === 'x') return end
    else return findB2(s)
}

const end = (s) => {
    return end
}
