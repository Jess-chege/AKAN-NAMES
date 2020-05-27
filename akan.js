function getAkanName () {
  let yearOfBirth = document.getElementById("year-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");


  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);


  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
          let maleAkanNames = [
              "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
            ];

            let femaleAkanNames = [
              "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
            ];

            if (myGenderValue == "male" && monthValid && dayValid){
              switch (dayOfWeekNumber) {
                case 1:
             document.getElementById('result').textContent = "Born on Sunday: Akan name is " + femaleAkanNames[0];
             document.getElementById('display-name').textContent = " Akan name: Kwasi";
             return false;
             break;
                case 2:
             document.getElementById('result').textContent = "Born on Monday: Akan name is " + femaleAkanNames[1];
             document.getElementById('display-name').textContent = " Akan name:Kwadwo ";
             return false;
             break;
           case 3:
            document.getElementById('result').textContent = "Born on Tuesday: Akan name is " + femaleAkanNames[2];
            document.getElementById('display-name').textContent = " Akan name:Kwabena ";
            return false;
             break;
             case 4:
          document.getElementById('result').textContent = "Born on Wednesday: Akan name is " + femaleAkanNames[3];
          document.getElementById('display-name').textContent = " Akan name:Kwaku ";
          return false;
          break;
          case 5:
       document.getElementById('result').textContent = "Born on Thursday: Akan name is " + femaleAkanNames[4];
       document.getElementById('display-name').textContent = " Akan name: ";
       return false;
       break;
       case 6:
    document.getElementById('result').textContent = "Born on friday: Akan name is " + femaleAkanNames[5];
    document.getElementById('display-name').textContent = " Akan name: ";
    return false;
    break;
    case 7:
 document.getElementById('result').textContent = "Born on Saturday: Akan name is " + femaleAkanNames[6];
 document.getElementById('display-name').textContent = " Akan name: ";
 return false;
 break;

 else if(myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {

 case 1:
document.getElementById('result').textContent = "Born on Sunday: Akan name is " + femaleAkanNames[0];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
 case 2:
document.getElementById('result').textContent = "Born on Monday: Akan name is " + femaleAkanNames[1];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
case 3:
document.getElementById('result').textContent = "Born on Tuesday: Akan name is " + femaleAkanNames[2];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
case 4:
document.getElementById('result').textContent = "Born on Wednesday: Akan name is " + femaleAkanNames[3];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
case 5:
document.getElementById('result').textContent = "Born on Thursday: Akan name is " + femaleAkanNames[4];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
case 6:
document.getElementById('result').textContent = "Born on friday: Akan name is " + femaleAkanNames[5];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
case 7:
document.getElementById('result').textContent = "Born on Saturday: Akan name is " + femaleAkanNames[6];
document.getElementById('display-name').textContent = " Akan name: ";
return false;
break;
