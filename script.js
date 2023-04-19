function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "clenched-fist";
  if (comp >= 0.34 && comp < 0.67) return "hand-peace";
  return "hand";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "clenched-fist") return comp == "hand-peace" ? "MENANG!" : "KALAH!";
  if (player == "hand-peace") return comp == "hand" ? "MENANG!" : "KALAH!";
  if (player == "hand") return comp == "clenched-fist" ? "MENANG!" : "KALAH!";
}

function putar() {
  const imgcomp = document.querySelector(".img-comp");
  const gambar = ["clenched-fist", "hand-peace", "hand"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgcomp.setAttribute("src", "https://img.icons8.com/stickers/100/null/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
  //   console.log(imgcomp);
  //   console.log(gambar);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    //   console.log(pilihanComputer);
    //   console.log(pilihanPlayer);
    //   console.log(hasil);

    setTimeout(function () {
      const imgcomp = document.querySelector(".img-comp");
      imgcomp.setAttribute("src", "https://img.icons8.com/stickers/100/null/" + pilihanComputer + ".png");
      //   console.log(imgcomp);

      const info = document.querySelector(".info");
      const p = document.createElement("p");
      p.innerHTML = hasil;
      info.appendChild(p);
      console.log(info);

      setTimeout(function () {
        setTimeout(function () {
          p.remove();
        }, 0700);
      }, 0300);
    }, 1000);
  });
});

// const pBatu = document.querySelector(".clenched-fist");
// pBatu.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   //   console.log(pilihanComputer);
//   //   console.log(pilihanPlayer);
//   //   console.log(hasil);

//   const imgcomp = document.querySelector(".img-comp");
//   imgcomp.setAttribute("src", "https://img.icons8.com/stickers/100/null/" + pilihanComputer + ".png");
//   //   console.log(imgcomp);

//   const info = document.querySelector(".info");
//   const p = document.createElement("p");
//   p.innerHTML = hasil;
//   info.appendChild(p);
//   //   setTimeout(function () {
//   //     p.remove(), 1000;
//   //   });

//   setTimeout(function () {
//     setTimeout(function () {
//       p.remove();
//     }, 0300);
//   }, 0300);
// });
