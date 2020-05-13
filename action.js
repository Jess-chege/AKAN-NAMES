$function calculateBirthdate(){
  var birthdate =document.getElementById("");

  var Bdate=$("input#date").val();
var Gender=$("select#Gender").val();
})
}
var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var maleName= ['kwasi','kwadwo','kwabena','kwaku','Yaw','kofi','kwame'];
var femaleName = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

var d = new Date(Bdate);
var dayName = days[d.getDay()];
var Name ="";

if (Gender =="Male"){
  switch (dayName) {
    case 'sunday':
    name=MaleNames[0];

      break;
      case 'monday':
      name=MaleNames[1];
      break;

      case 'tuesday':
      name=MaleNames[2];

        break;

        case 'wednesday':
        name=MaleNames[3];

          break;
          case 'thursday':
          name=MaleNames[4];

            break;

            case 'friday':
            name=MaleNames[5];

              break;

              case 'saturday':
              name=MaleNames[6];

                break;

              default:

  }
}
else {
  switch (dayName) {
    case 'sunday':
    Name = femaleName[0]

      break;

      case 'tuesday':
      Name = femaleName[1]

        break;

        case 'wednesday':
        Name = femaleName[2]

          break;

          case 'thursday':
          Name = femaleName[3]

            break;

            case 'friday':
            Name = femaleName[4]

              break;

              case 'saturday':
              Name = femaleName[5]

                break;
    default:

  }
}
document.getElementById("name").lnnerHTML = "Your Name in Ghana is <strong>"+Name+"</strong>"+" because you were born on "+dayName;



});
});
