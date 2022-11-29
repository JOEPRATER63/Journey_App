//Joseph Prater
//11/24/2022
//JavaScript for Journey Teir Payment
//Get user input of hours (of nurses per week)
//Calculate pre tax pay for each individual teir of payment per hour
//Output the total pay


// const inputHours = document.getElementById("hourInputBox");
// const submitHours = document.getElementById("hourSubmitButton");
const outputAnswer = document.getElementByID("answer");

//Constants for tier pay and how many hours each tier is
const tPrice1 = 1;
const tPrice2 = 1.25;
const tPrice3 = 1.5;
const tPrice4 = 1.75;

const tHours1 = 360;
const tHours2 = 360;
const tHours3 = 360;
const tHours4 = 360;
const maxHours = tHours1 + tHours2 + tHours3 + tHours4;

// const hours = 1081                             //Test num
const hours = outputAnswer;
//Main function to start everything
function main(hours) {
  checkHours(hours);
  //test checkhours func
  let test = checkHours(hours);
  console.log(test);

  let tier = getTier(hours)
  if (tier == 1) {
    let ans = tier1(hours);
    console.log("$$$" + ans);
  }
  else if (tier == 2) {
    let ans = tier2(hours);
    console.log("$$$" + ans)
  }
  else if (tier == 3) {
    let ans = tier3(hours);
    console.log("$$$" + ans);
  }
  else if (tier == 4) {
    let ans = tier4(hours);
    console.log("$$$" + ans)
  }
}

//input validation
//****Infinant loop*****/
function checkHours(hours) {
  if (isNaN(hours)) {    ///negative number runs as isNaN() w/ infinant loop
    console.log("not a number")
    //provide prompt to #answer

    main()
  }
  else if (hours < 0) {
    console.log(hours + " is negative and that is wrong")
    //provide prompt to #answer

    main()
  }
  else if (hours > maxHours) {
    console.log(hours + " is too big")
    //provide prompt to #answer

    main()
  }
  //test return prompt
  return "all good!"
}

//Determine tier 
function getTier(hours) {
  if (hours <= tHours1) {
    return 1;
  }
  else if (hours <= tHours1 + tHours2) {
    return 2;
  }
  else if (hours <= tHours1 + tHours2 + tHours3) {
    return 3;
  }
  else {
    return 4;
  }
}

//take diff tiers to calculate and return propper pay
function tier1(hours) {
  let total = hours * tPrice1;
  return total;
}
function tier2(hours) {
  hours -= tHours1
  let total = (hours * tPrice2) + (tHours1 * tPrice1);
  return total;
}
function tier3(hours) {
  let x = tHours1 + tHours2;
  hours -= x;
  let total = (hours * tPrice3) + (tHours1 * tPrice1) + (tHours2 * tPrice2);
  return total;
}
function tier4(hours) {
  let x = tHours1 + tHours2 + tHours3;
  hours -= x;
  let total = (hours * tPrice4) + (tHours1 * tPrice1) + (tHours2 * tPrice2) + (tHours3 * tPrice3);
  return total;
}
main(hours)