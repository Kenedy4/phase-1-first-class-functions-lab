// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
{
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 3 + 1);
  }
  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }
  function selectingDrivers() {
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
  }
  //   const selectedDrivers = selectingDrivers();
}

//   const selectingDrivers = ["returnFirstTwoDrivers", "returnLastTwoDrivers"];
//   {
//     return selectingDrivers(drvers);
//   }
// }

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}
