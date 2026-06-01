const formProdukt = document.getElementById('formProdukt');
const wyszukiwarka = document.getElementById('wyszukiwarka');
const iloscTekst = document.getElementById('ilosc');

const produkty = [
    { Nazwa: "Laptop", Kategoria: "Elektronika", Cena: 4500 },
    { Nazwa: "Klawiatura", Kategoria: "Akcesoria", Cena: 250 }
];

// Wywołanie początkowe
OdswiezProdukty();

// 1. DODAWANIE PRODUKTU
formProdukt.addEventListener('submit', (e) => {
    e.preventDefault(); // Zatrzymuje przeładowanie strony po wysłaniu formularza

    let nazwa = document.getElementById('nazwa').value;
    let kategoria = document.getElementById('kategoria').value;
    let cena = document.getElementById('cena').value;

    // Walidacja (zgodna z Twoimi założeniami)
    if (nazwa.trim().length > 3 && nazwa.trim().length < 30 && 
        kategoria.trim().length > 3 && kategoria.trim().length < 20 && 
        cena > 0) {
        
        cena = Math.round(cena * 100) / 100;
        kategoria = kategoria.trim();
        nazwa = nazwa.trim();

        // Dodanie obiektu do tablicy
        produkty.push({ Nazwa: nazwa, Kategoria: kategoria, Cena: cena });

        // Odświeżenie widoku i zresetowanie pól formularza
        OdswiezProdukty();
        formProdukt.reset();
    } else {
        alert("Wprowadź poprawne dane! Nazwa (4-29 znaków), Kategoria (4-19 znaków), Cena > 0.");
    }
});

// 2. FUNKCJA RENDERUJĄCA (Z FILTROWANIEM I USUWANIEM)
function OdswiezProdukty() {
    const przedmioty = document.getElementById('przedmioty');
    przedmioty.innerHTML = "";

    const szukanaFraza = wyszukiwarka.value.toLowerCase().trim();
    let licznik = 0;

    produkty.forEach((produkt, index) => {
        // Sprawdzamy czy produkt pasuje do wyszukiwarki (szuka po nazwie lub kategorii)
        if (produkt.Nazwa.toLowerCase().includes(szukanaFraza) || produkt.Kategoria.toLowerCase().includes(szukanaFraza)) {
            licznik++;
            
            // Generujemy HTML. Przycisk usuwania wywołuje teraz funkcję UsunProdukt(index)
            przedmioty.innerHTML += `
                <div class="bg-secondary-subtle rounded-4 col-5 col-md-4 col-lg-3 p-3 m-2 text-start">
                    <b class="col-12 d-block text-center fs-5 mb-2">${produkt.Nazwa}</b>
                    <div><b>Kategoria: </b>${produkt.Kategoria}</div>
                    <div><b>Cena: </b>${produkt.Cena} zł</div>
                    <div class="col-12 text-center">
                        <button class="col-12 rounded-4 text-bg-danger border-0 shadow my-3 py-1" onclick="UsunProdukt(${index})">Usuń produkt</button>
                    </div>
                </div>`;
        }
    });

    // Aktualizacja licznika wyświetlanych produktów
    iloscTekst.innerText = `Liczba produktów: ${licznik}`;
}

// 3. USUWANIE PRODUKTU
window.UsunProdukt = function(index) {
    produkty.splice(index, 1); // Usuwa element z tablicy o danym indeksie
    OdswiezProdukty(); // Ponowne renderowanie listy
}

// 4. WYSZUKIWARKA
wyszukiwarka.addEventListener('input', () => {
    OdswiezProdukty(); // Odświeża listę na każdy wpisany znak
});