var div = document.getElementById("graph");
let Gauteng = document.getElementById("gau-bar");
let KwaZuluNatal = document.getElementById("kzn-bar");
let Mpumalanga = document.getElementById("mpum-bar");
let NorthWest = document.getElementById("nw-bar");
let NorthernCape = document.getElementById("nc-bar");
let WesternCape = document.getElementById("wc-bar");
let EasternCape = document.getElementById("ec-bar");
let Limpopo = document.getElementById("limp-bar");
let FreeState = document.getElementById("fs-bar");

window.onload = function () {
  let registry = JSON.parse(localStorage.getItem("registry") || "[]");
  let phase1 = [];
  let phase2 = [];
  let phase3 = [];
  let phase4 = [];

  //Loads data into phase specific arrays
  console.log(registry);
  if (registry.length > 0) {
    for (let i = 0; i < registry.length; i++) {
      if (registry[i].phase == "1") {
        phase1.push(registry[i]);
      } else if (registry[i].phase == "2") {
        phase2.push(registry[i]);
      } else if (registry[i].phase == "3") {
        phase3.push(registry[i]);
      } else if (registry[i].phase == "4") {
        phase4.push(registry[i]);
      }
    }
  }
  //loads current phase information into the graph
  switch (localStorage.getItem("phase")) {
    case "1":
      {
        document.getElementById("phase-id").innerText = "Phase 1";
        if (phase1.length > 0) {
          loadData(phase1);
        }
      }
      break;
    case "2":
      {
        document.getElementById("phase-id").innerText = "Phase 2";
        if (phase2.length > 0) {
          loadData(phase2);
        }
      }
      break;
    case "3":
      {
        document.getElementById("phase-id").innerText = "Phase 3";
        if (phase3.length > 0) {
          loadData(phase3);
        }
      }
      break;
    case "4":
      {
        document.getElementById("phase-id").innerText = "Phase 4";
        if (phase4.length > 0) {
          loadData(phase4);
        }
      }
      break;
    default:
      break;
  }

  //Button to click to view phase 1 registrations
  document.getElementById("btn-p1").addEventListener("click", function () {
    document.getElementById("phase-id").innerText = "Phase 1";
    revertGraph();
    if (localStorage.getItem("phase") == "1") {
      loadData(phase1);
    } else {
      if (phase1.length > 0) {
        loadData(phase1);
      } else {
        alert("Phase 1 has no registrants at this time");
        location.reload();
      }
    }
  });
  //Button to click to view phase 2 registrations
  document.getElementById("btn-p2").addEventListener("click", function () {
    document.getElementById("phase-id").innerText = "Phase 2";
    revertGraph();
    if (localStorage.getItem("phase") == "2") {
      loadData(phase2);
    } else {
      if (phase2.length > 0) {
        loadData(phase2);
      } else {
        alert("Phase 2 has no registrants at this time");
        location.reload();
      }
    }
  });
  //Button to click to view phase 3 registrations
  document.getElementById("btn-p3").addEventListener("click", function () {
    document.getElementById("phase-id").innerText = "Phase 3";
    revertGraph();
    if (localStorage.getItem("phase") == "3") {
      loadData(phase3);
    } else {
      if (phase3.length > 0) {
        loadData(phase3);
      } else {
        alert("Phase 3 has no registrants at this time");
        location.reload();
      }
    }
  });
  //Button to click to view phase 4 registrations
  document.getElementById("btn-p4").addEventListener("click", function () {
    document.getElementById("phase-id").innerText = "Phase 4";
    revertGraph();
    if (localStorage.getItem("phase") == "4") {
      loadData(phase4);
    } else {
      if (phase4.length > 0) {
        loadData(phase4);
      } else {
        alert("Phase 4 has no registrants at this time");
        location.reload();
      }
    }
  });
};

//Loads data into Reports
function loadData(arr) {
  let prov1 = 0;
  let prov2 = 0;
  let prov3 = 0;
  let prov4 = 0;
  let prov5 = 0;
  let prov6 = 0;
  let prov7 = 0;
  let prov8 = 0;
  let prov9 = 0;

  for (var i = 0; i < arr.length; i++) {
    switch (arr[i].province) {
      case "Gauteng":
        {
          prov1++;
        }
        break;
      case "KwaZulu-Natal":
        {
          prov2++;
        }
        break;
      case "Mpumalanga":
        {
          prov3++;
        }
        break;
      case "North West":
        {
          prov4++;
        }
        break;
      case "Northern Cape":
        {
          prov5++;
        }
        break;
      case "Western Cape":
        {
          prov6++;
        }
        break;
      case "Eastern Cape":
        {
          prov7++;
        }
        break;
      case "Limpopo":
        {
          prov8++;
        }
        break;
      case "Free State":
        {
          prov9++;
        }
        break;
      default:
        {
          continue;
        }
        break;
    }
  }

  if (prov1 != 0) {
    Gauteng.style.width =
      Math.round((prov1 / arr.length) * 100 - 2, 2).toString() + "%";
    Gauteng.innerHTML =
      Math.round((prov1 / arr.length) * 100, 2).toString() + "%";
  } else {
    Gauteng.style.width = "0%";
    Gauteng.innerHTML = "";
  }

  if (prov2 != 0) {
    KwaZuluNatal.style.width =
      Math.round((prov2 / arr.length) * 100 - 2, 2).toString() + "%";
    KwaZuluNatal.innerHTML =
      Math.round((prov2 / arr.length) * 100, 2).toString() + "%";
  } else {
    KwaZuluNatal.style.width = "0%";
    KwaZuluNatal.innerHTML = "";
  }

  if (prov3 != 0) {
    Mpumalanga.style.width =
      Math.round((prov3 / arr.length) * 100 - 2, 2).toString() + "%";
    Mpumalanga.innerHTML =
      Math.round((prov3 / arr.length) * 100, 2).toString() + "%";
  } else {
    Mpumalanga.style.width = "0%";
    Mpumalanga.innerHTML = "";
  }

  if (prov4 != 0) {
    NorthWest.style.width =
      Math.round((prov4 / arr.length) * 100 - 2, 2).toString() + "%";
    NorthWest.innerHTML =
      Math.round((prov4 / arr.length) * 100, 2).toString() + "%";
  } else {
    NorthWest.style.width = "0%";
    NorthWest.innerHTML = "";
  }

  if (prov5 != 0) {
    NorthernCape.style.width =
      Math.round((prov5 / arr.length) * 100 - 2, 2).toString() + "%";
    NorthernCape.innerHTML =
      Math.round((prov5 / arr.length) * 100, 2).toString() + "%";
  } else {
    NorthernCape.style.width = "0%";
    NorthernCape.innerHTML = "";
  }

  if (prov6 != 0) {
    WesternCape.style.width =
      Math.round((prov6 / arr.length) * 100 - 2, 2).toString() + "%";
    WesternCape.innerHTML =
      Math.round((prov6 / arr.length) * 100, 2).toString() + "%";
  } else {
    WesternCape.style.width = "0%";
    WesternCape.innerHTML = "";
  }

  if (prov7 != 0) {
    EasternCape.style.width =
      Math.round((prov7 / arr.length) * 100 - 2, 2).toString() + "%";
    EasternCape.innerHTML =
      Math.round((prov7 / arr.length) * 100, 2).toString() + "%";
  } else {
    EasternCape.style.width = "0%";
    EasternCape.innerHTML = "";
  }

  if (prov8 != 0) {
    Limpopo.style.width =
      Math.round((prov8 / arr.length) * 100 - 2, 2).toString() + "%";
    Limpopo.innerHTML =
      Math.round((prov8 / arr.length) * 100, 2).toString() + "%";
  } else {
    Limpopo.style.width = "0%";
    Limpopo.innerHTML = "";
  }

  if (prov9 != 0) {
    FreeState.style.width =
      Math.round((prov9 / arr.length) * 100 - 2, 2).toString() + "%";
    FreeState.innerHTML =
      Math.round((prov9 / arr.length) * 100, 2).toString() + "%";
  } else {
    FreeState.style.width = "0%";
    FreeState.innerHTML = "";
  }
}

function revertGraph() {
  Gauteng.style.width = "0%";
  KwaZuluNatal.style.width = "0%";
  Mpumalanga.style.width = "0%";
  NorthWest.style.width = "0%";
  NorthernCape.style.width = "0%";
  WesternCape.style.width = "0%";
  EasternCape.style.width = "0%";
  Limpopo.style.width = "0%";
  FreeState.style.width = "0%";
}
