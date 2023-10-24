// ümid edirəmki istədiyiniz tam olaraq budu
// qeyd: addEventListener bunu dersde bu gun prakdikada kecdik ona görə yazdım

const modalContent = `
  <div style="background: #BEADFA; height: inherit;">
  <button style="background: #6499E9; width:80px; height: 30px;"  id="ac">AÇ</button>
  <button style="background: #C70039; width:80px; height: 30px;"  id="baqla">bağla</button>

  <h2 style="padding: 20px;">// qeyd: addEventListener bunu  bu gun prakdikada kecdik ona görə yazdım <br>
  // qeyd: addEventListener bunu  bu gun prakdikada kecdik ona görə yazdım <br>
  // qeyd: addEventListener bunu  bu gun prakdikada kecdik ona görə yazdım <br>
  // qeyd: addEventListener bunu  bu gun prakdikada kecdik ona görə yazdım <br>
  </h2>
  </div>
`;
const modal = document.createElement("div");
modal.style.display = "none";
modal.innerHTML = modalContent;
document.body.appendChild(modal);

const openButton = document.querySelector("#ac");
openButton.addEventListener("click", function () {
  modal.style.display = "block";
  openButton.style.display="none"
});

const closeButton = modal.querySelector("#baqla");
closeButton.addEventListener("click", function () {
  modal.style.display = "none ";
  openButton.style.display="block"
});

document.body.appendChild(openButton);






