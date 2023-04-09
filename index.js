const returnFirstTwoDrivers = function (thing) {return thing.slice(0,2)};

const returnLastTwoDrivers = (thing2) => {
    return thing2.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (num) => {
    return function (fare) {return fare*num};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, functionThing) => {
    return functionThing(arrayOfDrivers);
}