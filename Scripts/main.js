//Global Variables
let phase2 = new Date("2022-08-17");
let phase3 = new Date("2022-09-17"); //Phase 2 + 30 days of registering + 1 day for new phase
let phase4 = new Date("2022-11-02"); //Phase 3 + 45 days of registering + 1 day for new phase
let baseDate = localStorage.getItem("site-date");
let currentPhase = localStorage.getItem("phase");
let registry = JSON.parse(localStorage.getItem("registry") || "[]");

class Person {
  constructor(name, surname, email, age, date, province, phase) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.age = age;
    this.date = date;
    this.province = province;
    this.phase = phase;
  }
}

//Sets the needed components on load
window.onload = function () {
  console.log(localStorage.getItem("phase"));
  console.log(registry);
  //Add a built in function to Date to main window
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  //if a local date has not been stored
  if (baseDate == null) {
    try {
      document.getElementById("date").innerText = formatDate(new Date());
    } catch (error) {
      console.log(error);
    }
    try {
      document.getElementById("date-selector").value = formatDate(new Date());
    } catch (error) {
      console.log(error);
    }
    try {
      document.getElementById("date-changer").value = formatDate(new Date());
    } catch (error) {
      console.log(error);
    }
    setDateOptions(new Date());
  } else {
    //if a local date has been stored
    try {
      document.getElementById("date").innerText = formatDate(
        new Date(baseDate)
      );
    } catch (error) {
      console.log(error);
    }
    try {
      document.getElementById("date-selector").value = formatDate(
        new Date(baseDate)
      );
    } catch (error) {
      console.log(error);
    }
    try {
      document.getElementById("date-changer").value = formatDate(
        new Date(baseDate)
      );
    } catch (error) {
      console.log(error);
    }
    setDateOptions(new Date(baseDate));
  }

  //Register button click handler
  document.getElementById("form").addEventListener("submit", function () {
    //setting of needed variables
    let person = new Person();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let age =
      new Date().getFullYear() -
      new Date(document.getElementById("dob").value).getFullYear();
    let date = document.getElementById("date-selector").value;
    let prov = document.getElementById("prov").value;
    let added = false;
    let id = 0;

    //Checks if person already exists in registry
    if (registry.length > 0) {
      for (let i = 0; i < registry.length; i++) {
        if (registry[i].email == email) {
          added = true;
          id = i;
        }
      }
    }

    //Adds people to the registry
    if (!added) {
      switch (localStorage.getItem("phase")) {
        case "1": //If we are in Phase 1
          {
            alert(
              "Only frontline healthcare workers are currently able to register"
            );
          }
          break;
        case "2": //If we are in Phase 2
          {
            if (age >= 60) {
              if (
                new Date(date) <= phase2.addDays(10) &&
                new Date(date) >= phase2
              ) {
                person.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry));
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert(
                  "That date was invalid try again, you only have until " +
                    formatDate(phase2.addDays(10)) +
                    " to register"
                );
              }
            } else if (age >= 50 && age <= 59) {
              if (
                new Date(date) <= phase2.addDays(20) &&
                new Date(date) > phase2.addDays(10)
              ) {
                pperson.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry));
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert(
                  "That date was invalid try again, you only have until " +
                    formatDate(phase2.addDays(20)) +
                    " to register"
                );
              }
            } else if (age >= 40 && age <= 49) {
              if (
                new Date(date) <= phase2.addDays(30) &&
                new Date(date) > phase2.addDays(20)
              ) {
                person.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry));
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert(
                  "That date was invalid try again, you only have until " +
                    formatDate(phase2.addDays(30)) +
                    " to register"
                );
              }
            } else {
              if (age >= 18 && age <= 39) {
                alert(
                  "Your age group is not allowed to register at this time.\nYou will be allowed to register during Phase 3."
                );
              } else if (age <= 17) {
                alert(
                  "Your age group is not allowed to register at this time.\nYou will be allowed to register during Phase 4."
                );
              }
            }
          }
          break;
        case "3": //If we are in Phase 3
          {
            if (age >= 35 && age <= 39) {
              if (
                new Date(date) <= phase3.addDays(15) &&
                new Date(date) >= phase3
              ) {
                person.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry));
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert(
                  "That date was invalid try again, you only have until " +
                    formatDate(phase3.addDays(15)) +
                    " to register"
                );
              }
            } else if (age >= 30 && age <= 34) {
              if (
                new Date(date) <= phase3.addDays(30) &&
                new Date(date) > phase3.addDays(15)
              ) {
                person.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry));
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert(
                  "That date was invalid try again, you only have until " +
                    formatDate(phase3.addDays(30)) +
                    " to register"
                );
              }
            } else if (age >= 18 && age <= 29) {
              if (
                new Date(date) <= phase3.addDays(45) &&
                new Date(date) > phase3.addDays(30)
              ) {
                person.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry));
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert(
                  "That date was invalid try again, you only have until " +
                    formatDate(phase3.addDays(45)) +
                    " to register"
                );
              }
            } else {
              if ((age >= 40 && age <= 60) || age > 60) {
                alert(
                  "Your age group is not allowed to register at this time.\nYou were allowed to register during Phase 2, which has completed please contact you nearest vaccination site to learn about your options."
                );
              } else if (age <= 17) {
                alert(
                  "Your age group is not allowed to register at this time.\nYou will be allowed to register during Phase 4."
                );
              }
            }
          }
          break;
        case "4": //If we are in Phase 4
          {
            if (age <= 17) {
              if (new Date(date) >= phase4) {
                person.name = name;
                person.email = email;
                person.surname = surname;
                person.age = age;
                person.province = prov;
                person.date = date;
                person.phase = currentPhase;
                registry.push(person);

                localStorage.setItem("registry", JSON.stringify(registry)); //Adds person to registry and saves it to local storage
                alert(
                  person.name +
                    " is now registered to recieve vaccine on: " +
                    person.date
                );
              } else {
                alert("That date was invalid try again.");
              }
            } else {
              if ((age >= 40 && age <= 60) || age > 60) {
                alert(
                  "Your age group is not allowed to register at this time.\nYou were allowed to register during Phase 2, which has completed please contact you nearest vaccination site to learn about your options."
                );
              } else if (age >= 18 && age <= 39) {
                alert(
                  "Your age group is not allowed to register at this time.\nYou were allowed to register during Phase 3, which has completed please contact you nearest vaccination site to learn about your options."
                );
              }
            }
          }
          break;
        default:
          {
            alert("Phase has not been set change the date to fix the issue");
          }
          break;
      }
    } else {
      alert(
        "You were already registered to recieve the vaccine on " +
          registry[id].date +
          ".\nRefer to registry below."
      );
    }
  });

  if (registry != null) {
    getRegistry();
    let registrant = document.getElementsByClassName("registry-list-item");

    for (let i = 0; i < registry.length; i++) {
      if (new Date(registry[i].date) < new Date(baseDate)) {
        registrant[i + 1].style.color = "red";
      }
    }
  }
};
//Checks if the site date is changed and updates the site date if it is
document.getElementById("change-date").addEventListener("click", function () {
  try {
    setDate();
    setDateOptions(new Date(localStorage.getItem("site-date")));
    alert("Date changed successfully!");
  } catch (error) {
    console.log(error);
  }
});

//formats the date to a readable format
function formatDate(dateEntered) {
  let date = "";
  let month = dateEntered.getMonth() + 1;
  let day = Number(dateEntered.getDate());
  let year = dateEntered.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
}

//Calculates the number of days between two dates
function daysBetween(date1, date2) {
  let one_day = 1000 * 60 * 60 * 24;
  let Result = Math.round(date2.getTime() - date1.getTime()) / one_day;
  let Final_Result = Result.toFixed(0);

  return Final_Result;
}

//Sets the websites date specific components to the current site date
function setDateOptions(dateEntered) {
  let p1 = document.querySelectorAll("[id = 'p1']");
  let p2 = document.querySelectorAll("[id = 'p2']");
  let p3 = document.querySelectorAll("[id = 'p3']");
  let p4 = document.querySelectorAll("[id = 'p4']");
  let countdown = document.querySelectorAll("[id = 'days-till-next']");
  for (var i = 0; i < countdown.length; i++) {
    countdown[i].innerText = "";
  }

  if (dateEntered < phase2) {
    for (var i = 0; i < p1.length; i++) {
      p1[i].style.color = "green";
    }
    for (var i = 0; i < p2.length; i++) {
      p2[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p3.length; i++) {
      p3[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p4.length; i++) {
      p4[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < countdown.length; i++) {
      countdown[i].innerText =
        daysBetween(dateEntered, phase2) +
        " days till Phase 2.\n\n" +
        daysBetween(dateEntered, phase3) +
        " days till Phase 3.\n\n" +
        daysBetween(dateEntered, phase4) +
        " days till Phase 4.";
    }
    localStorage.setItem("phase", 1);
    currentPhase = localStorage.getItem("phase");
  } else if (dateEntered < phase3 && dateEntered >= phase2) {
    for (var i = 0; i < p1.length; i++) {
      p1[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p2.length; i++) {
      p2[i].style.color = "green";
    }
    for (var i = 0; i < p3.length; i++) {
      p3[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p4.length; i++) {
      p4[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < countdown.length; i++) {
      countdown[i].innerText =
        daysBetween(dateEntered, phase3) +
        " days till Phase 3.\n\n" +
        daysBetween(dateEntered, phase4) +
        " days till Phase 4.";
    }
    localStorage.setItem("phase", 2);
    currentPhase = localStorage.getItem("phase");
  } else if (dateEntered < phase4 && dateEntered >= phase3) {
    for (var i = 0; i < p1.length; i++) {
      p1[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p2.length; i++) {
      p2[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p3.length; i++) {
      p3[i].style.color = "green";
    }
    for (var i = 0; i < p4.length; i++) {
      p4[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < countdown.length; i++) {
      countdown[i].innerText =
        daysBetween(dateEntered, phase4) + " days till Phase 4.";
    }
    localStorage.setItem("phase", 3);
    currentPhase = localStorage.getItem("phase");
  } else if (dateEntered >= phase4) {
    for (var i = 0; i < p1.length; i++) {
      p1[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p2.length; i++) {
      p2[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p3.length; i++) {
      p3[i].style.color = "#F1F1F1";
    }
    for (var i = 0; i < p4.length; i++) {
      p4[i].style.color = "green";
    }
    for (var i = 0; i < countdown.length; i++) {
      countdown[i].innerText =
        daysBetween(phase4, dateEntered) + " days since Phase 4 started.";
    }
    localStorage.setItem("phase", 4);
    currentPhase = localStorage.getItem("phase");
  }
  //Does calculations to display current age category that is allowed to register
  switch (localStorage.getItem("phase")) {
    case "1":
      {
        if (new Date(dateEntered) < phase2) {
          for (var i = 0; i < countdown.length; i++) {
            countdown[i].innerText +=
              "\n\nOnly frontline healthcare workers can currently register.";
          }
        }
      }
      break;
    case "2":
      {
        if (
          new Date(dateEntered) <= phase2.addDays(10) &&
          new Date(dateEntered) >= phase2
        ) {
          let days = daysBetween(new Date(dateEntered), phase2.addDays(10));
          if (days != 0) {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 60 and over can register for " +
                days +
                " more day(s).";
            }
          } else {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 60 and over can register for today only.";
            }
          }
        } else if (
          new Date(dateEntered) <= phase2.addDays(20) &&
          new Date(dateEntered) > phase2.addDays(10)
        ) {
          let days = daysBetween(new Date(dateEntered), phase2.addDays(20));
          if (days != 0) {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 50-59 can register for " + days + " more day(s).";
            }
          } else {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 50-59 can register for today only.";
            }
          }
        } else if (
          new Date(dateEntered) <= phase2.addDays(30) &&
          new Date(dateEntered) > phase2.addDays(20)
        ) {
          let days = daysBetween(new Date(dateEntered), phase2.addDays(30));
          if (days != 0) {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 40-49 can register for " + days + " more day(s).";
            }
          } else {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 40-49 can register for today only.";
            }
          }
        }
      }
      break;
    case "3":
      {
        if (
          new Date(dateEntered) <= phase3.addDays(15) &&
          new Date(dateEntered) >= phase3
        ) {
          let days = daysBetween(new Date(dateEntered), phase3.addDays(15));
          if (days != 0) {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 35-39 and over can register for " +
                days +
                " more day(s).";
            }
          } else {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 35-39 and over can register for today only.";
            }
          }
        } else if (
          new Date(dateEntered) <= phase3.addDays(30) &&
          new Date(dateEntered) > phase3.addDays(15)
        ) {
          let days = daysBetween(new Date(dateEntered), phase3.addDays(30));
          if (days != 0) {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 30-34 can register for " + days + " more day(s).";
            }
          } else {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 30-34 can register for today only.";
            }
          }
        } else if (
          new Date(dateEntered) <= phase3.addDays(45) &&
          new Date(dateEntered) > phase3.addDays(30)
        ) {
          let days = daysBetween(new Date(dateEntered), phase3.addDays(45));
          if (days != 0) {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 18-29 can register for " + days + " more day(s).";
            }
          } else {
            for (var i = 0; i < countdown.length; i++) {
              countdown[i].innerText +=
                "\n\nAges 18-29 can register for today only.";
            }
          }
        }
      }
      break;
    case "4":
      {
        if (new Date(dateEntered) >= phase4) {
          for (var i = 0; i < countdown.length; i++) {
            countdown[i].innerText +=
              "\n\nONLY ages 17 and younger can register from now on";
          }
        }
      }
      break;
  }
}

//Sets the date to the users local storage
function setDate() {
  localStorage.setItem(
    "site-date",
    new Date(document.getElementById("date-changer").value)
  );
}

//Creates the registry table
function getRegistry() {
  let registry = JSON.parse(localStorage.getItem("registry") || "[]");

  let ul = document.getElementById("registry-list");
  for (let i = 0; i < registry.length; i++) {
    let item = document.createElement("li");
    item.classList.add("registry-list-item");

    let name = document.createElement("p");
    name.innerText = registry[i].name;
    let surname = document.createElement("p");
    surname.innerText = registry[i].surname;

    let email = document.createElement("p");
    email.innerText = registry[i].email;

    let age = document.createElement("p");
    age.innerText = registry[i].age;

    let date = document.createElement("p");
    date.innerText = registry[i].date;

    item.append(name, surname, email, age, date);

    ul.appendChild(item);
  }
}
