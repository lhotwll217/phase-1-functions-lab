// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let distanceInBlocks = Math.abs(blocks - 42);
    return distanceInBlocks
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264

}

function distanceTravelledInFeet(x, y) {
    return Math.abs(x - y) * 264
}

function calculatesFarePrice(x, y) {
    let fareFeet = distanceTravelledInFeet(x, y);
    if (fareFeet <= 400) {
        return 0
    }
    else if (fareFeet > 400 && fareFeet < 2000) {
        return (fareFeet - 400) * .02
    }
    else if (fareFeet > 2000 && fareFeet < 2500) {
        return 25
    }
    else if (fareFeet > 2500) {
        return 'cannot travel that far'
    }

}
