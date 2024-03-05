function toggleDetail(detailId) {
  const x = document.getElementById(detailId);
  if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(function(link) {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if(target) {
          const offsetTop = target.offsetTop - 70;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    }
  });
});

function analyzeResponses() {
  const experience = document.getElementById('doswiadczenie').value;
  const selectedSymptoms = document.querySelectorAll('input[name="dolegliwosci"]:checked');
  const consumptionPreference = document.getElementById('preferencjeSposobu').value;
  let suggestions = [];
  let smokingWarning = "";
  let cbdRecommendation = "";

  if (selectedSymptoms.length === 0) {
    document.getElementById('wynikAnkiety').innerHTML = "<p>Proszę wybrać co najmniej jedną dolegliwość.</p>";
    return;
  }

  selectedSymptoms.forEach((symptom) => {
    switch (symptom.value) {
      case "bole":
        suggestions.push("Cannabis flos CanPoland THC 22% CBD 1% - dla bólu przewlekłego");
        break;
      case "lęk":
        suggestions.push("Aurora Delahaze – THC 22%, CBD1% - dla lęku i poprawy nastroju");
        break;
      case "bezsenność":
        suggestions.push("FOUR20 PHARMA Gorilla Glue - znana z relaksujących efektów, które mogą wspierać lepszy sen");
        break;
      case "zapalenie":
        suggestions.push("Cannabis flos, Canopy Growth THC 25%, CBD < 0,5% KRYPTON - dla stanów zapalnych");
        break;
      case "koncentracja":
        suggestions.push("S-Lab Jack Herer THC 18% - pomaga poprawić koncentrację");
        break;
    }
  });

  if (consumptionPreference === "palenie") {
    smokingWarning = "<p><strong>Uwaga: </strong>Palenie marihuany może nie być najlepszym sposobem spożycia, ponieważ: 1. Może prowadzić do utraty części właściwości terapeutycznych poprzez spalenie terpenów. 2. Proces spalania wytwarza substancje szkodliwe dla układu oddechowego.</p>";
  }

  if (experience === "nie") {
    cbdRecommendation = "<p><strong>Zalecenie dla osób bez doświadczenia:</strong> Rozpoczęcie przygody z medyczną marihuaną od produktów bogatych w CBD może być dobrym pomysłem, ponieważ CBD nie wywołuje efektów psychoaktywnych i jest dobrze tolerowane przez większość osób. Produkty CBD mogą również pomóc w łagodzeniu niektórych dolegliwości bez ryzyka związanego z THC.</p>";
  }

  const resultDiv = document.getElementById('wynikAnkiety');
  resultDiv.innerHTML = `<p>Na podstawie Twoich odpowiedzi sugerujemy: ${suggestions.join(", ")}.</p>${smokingWarning}${cbdRecommendation}<p><strong>Uwaga:</strong> Rzeczywiste właściwości lecznicze każdej odmiany powinny być potwierdzone przez specjalistów i dostosowane do indywidualnych potrzeb pacjenta.</p>`;
}


