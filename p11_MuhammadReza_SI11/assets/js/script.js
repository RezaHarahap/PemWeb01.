// menangkap semua element a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika diklik akan menjalankan fungsi computerChoice
    a.addEventListener("click", (Element) => {
        computerChoice(Element);
    })
 );
 function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat arrey untuk komputer
   let choices = ["Rock","Paper","Scissors"];

   // pilihan random untuk komputer
   pilihanComputer.innerHTML =
   choices[Math.round(Math.random() * choices.length)];
   piihanComputer = pilihanComputer.innerHTML;

   // Jika pilihan komputer sama dengan pilihan user (Draw)
    if (pilihanUser == pilihanComputer) {
        alert("Draw");
    }

    // Jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("You Win");
    }else if (pilihanUser == "paper" && pilihanComputer == "Rock") {
        alert("You Win");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "paper") {
        alert("You Win");
    }

    // Jika pilihan komputer yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "paper") {
        alert("You Win");
    }else if (pilihanUser == "paper" && pilihanComputer == "Scissors") {
        alert("You Win");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("You Win");
    }
  }




