
const dodaj = document.getElementById('dodaj');

const wyszukiwarka = document.getElementById('wyszukiwarka');
const usun = document.querySelectorAll('.usun');

const produkty = [];

dodaj.addEventListener('click',()=>{
    const nazwa = document.getElementById('nazwa').value;
    const kategoria = document.getElementById('kategoria').value;
    const cena = document.getElementById('cena').value;

    if(nazwa.trim().length > 3 && nazwa.trim().length < 30 && kategoria.trim().length > 3 && kategoria.trim().length < 20 && cena > 0){
        
        cena = Math.round(cena * 100) / 100;
        kategoria = kategoria.trim();
        nazwa = nazwa.trim();

        produkty.push({Nazwa: nazwa, Kategoria: kategoria, Cena: cena});

        OdswiezProdukty();
    }else{

    }

})

function OdswiezProdukty(){
    const przedmioty = document.getElementById('przedmioty');

    produkty.forEach(produkt => {
        przedmioty.innerHTML = ""
    })
}