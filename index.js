function create_child(tex, num) {
 let coin_cnt=parseInt(document.getElementById('coin').innerText);
 if(coin_cnt>=20)
 {  coin_cnt-=20;
    document.getElementById('coin').innerText=coin_cnt;
      const texx = document.getElementById(tex).innerText;
  const numm = document.getElementById(num).innerText;
  const data = {
    text: texx,
    number: numm,
    date: new Date().toLocaleTimeString(),
  };

  const new_child = document.createElement("div");
  new_child.innerHTML = `
     <div
            class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-4"
          >
            <div>
              <h2 class="font-semibold text-lg">${data.text}</h2>
              <h2>${data.number}</h2>
            </div>
            <h2>${data.date}</h2>
          </div>
   `;
  document.getElementById("history").appendChild(new_child);
 }
 else
 {
    alert("coin must me getter than 20");
 }

}
// clear history

document
  .getElementById("clear_button")
  .addEventListener("click", function (event) {
    document.getElementById("history").innerHTML = "";
  });

//national evergency call
document
  .getElementById("national_b")
  .addEventListener("click", function (event) {
    create_child("national_t", "national_n");
  });
// polic call
document.getElementById("police_b").addEventListener("click", function (event) {
  create_child("police_t", "police_n");
});

// fire call

document.getElementById("fire_b").addEventListener("click", function (event) {
  create_child("fire_t", "fire_n");
});

// ambulance call
document
  .getElementById("ambulance_b")
  .addEventListener("click", function (event) {
    create_child("ambulance_t", "ambulance_n");
  });
// women and child
document.getElementById("women_b").addEventListener("click", function (event) {
  create_child("women_t", "women_n");
});
// anti
document.getElementById("anti_b").addEventListener("click", function (event) {
  create_child("anti_t", "anti_n");
});
// elcectricty
document
  .getElementById("electricity_b")
  .addEventListener("click", function (event) {
    create_child("electricity_t", "electricity_n");
  });
// brac
document.getElementById("brac_b").addEventListener("click", function (event) {
  create_child("brac_t", "brac_n");
});
// railway
document
  .getElementById("railway_b")
  .addEventListener("click", function (event) {
    create_child("railway_t", "railway_n");
  });
