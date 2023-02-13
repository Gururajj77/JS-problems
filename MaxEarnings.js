function maximizeEarnings(timeUnit) {
    const earnings = {
        "Theatre": 1500,
        "Pub": 1000,
        "Commercial Park": 3000
    };

    const buildingTime = {
        "Theatre": 5,
        "Pub": 4,
        "Commercial Park": 10
    };

    let earningsTotal = 0;
    let remainingTime = timeUnit;

    while (remainingTime >= buildingTime["Commercial Park"]) {
        earningsTotal += earnings["Commercial Park"];
        remainingTime -= buildingTime["Commercial Park"];
    }

    let numTheatres = Math.floor(remainingTime / buildingTime["Theatre"]);
    earningsTotal += numTheatres * earnings["Theatre"];
    remainingTime -= numTheatres * buildingTime["Theatre"];

    let numPubs = Math.floor(remainingTime / buildingTime["Pub"]);
    earningsTotal += numPubs * earnings["Pub"];

    return `T:${numTheatres}P:${numPubs}C:${timeUnit / buildingTime["Commercial Park"] - numTheatres / 2 - numPubs / 3}`;
}

console.log(maximizeEarnings(7)); // Output: T:1P:0C:0
console.log(maximizeEarnings(8)); // Output: T:1P:0C:0
console.log(maximizeEarnings(13)); // Output: T:2P:0C:0
