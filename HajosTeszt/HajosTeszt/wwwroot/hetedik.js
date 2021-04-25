var kérdések;
var kérdés = 0;

function letöltés() {
fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0)
}


function kérdésMegjelenítés(kérdés)
{
        console.log(kérdés);
        document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
        document.getElementById("válasz1").innerText = kérdés.answer1
        document.getElementById("válasz2").innerText = kérdés.answer2
        document.getElementById("válasz3").innerText = kérdés.answer3
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;         
}

window.onload = function () {
    letöltés();
   

    document.getElementById("előre").onclick = function előre() {
        if (kérdés == 2) {
            kérdés = 0;
        }
        else {
            kérdés++;
        }
        console.log()
        kérdésMegjelenítés(kérdés);
    }

    document.getElementById("vissza").onclick = function vissza() {
        if (kérdés == 0) {
            kérdés = 2;
        }
        else {
            kérdés--;
        }
        kérdésMegjelenítés(kérdés);
    }

    document.getElementById("válasz1").onclick = () => {

        if (kérdések[kérdés].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdés].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[kérdés].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdés].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[kérdés].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "lightcoral";
            document.getElementById("válasz" + kérdések[kérdés].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }
}

function APIteszt()
{    fetch('/questions/4')
        .then(response => response.json())
        .then(data => console.log(data)
        );
}

function válaszFeldolgozás()
{
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}

function kérdésBetöltés(id)
{
    fetch(`/questions/${id}`)
        .then(response =>
        {
            if (!response.ok)
            {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else
            {
                    return response.json()
            }
        }
     ).then(data => kérdésMegjelenítés(data));
}    
