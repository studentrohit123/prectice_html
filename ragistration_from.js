const fname = document.getElementById('nameInput');
const button = document.getElementById('showNameBtn');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const sub = document.getElementsByName("fav_class");

button.addEventListener('click', function() {
  const name = fname.value;
  console.log("Entered First Name:", name);
  const lname1 = lname.value;
  console.log("Entered Last Name :" +lname1);
  console.log("Entered Email :" +email.value);
  for(i=0;i<sub.length;i++){
  if(sub[i].checked){
    console.log("Entered Subject :" +sub[i].value);
  }
  }
  
  const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (selectedCheckboxes.length > 0) {
      const selectedSubjects = [];
      selectedCheckboxes.forEach(checkbox => {
        selectedSubjects.push(checkbox.value);
      });
      console.log("Selected Subjects:", selectedSubjects);
    } else {
      console.log("No subjects selected!");
    }
});

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      
// // Filter checked checkboxes and map their values
// const selectedSubjects = Array.from(checkboxes)
//   .filter(checkbox => checkbox.checked)
//   .map(checkbox => checkbox.value);

// // Display the selected values in the console
// console.log("Selected Subjects:", selectedSubjects);