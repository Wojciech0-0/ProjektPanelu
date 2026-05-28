
const dodaj = document.getElementById('dodaj');

const wyszukiwarka = document.getElementById('wyszukiwarka');
const usun = document.querySelectorAll('.usun');

const produkty = [{
    Nazwa: "Laptop",
    Kategoria: "Elektronika",
    Cena: 4500
},{
    Nazwa: "Klawiatura",
    Kategoria: "Akcesoria",
    Cena: 250
}
];

OdswiezProdukty();

dodaj.addEventListener('click',()=>{
    let nazwa = document.getElementById('nazwa').value;
    let kategoria = document.getElementById('kategoria').value;
    let cena = document.getElementById('cena').value;

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

    przedmioty.innerHTML = "";

    produkty.forEach(produkt => {
        przedmioty.innerHTML += `<div class="bg-secondary-subtle rounded-4 col-6 col-md-4 col-lg-3 p-3 m-1">
                <b class="col-12 nazwa">${produkt.Nazwa}</b>
                <div><b class="col-6">Kategoria: </b>${produkt.Kategoria}</div>
                <div><b class="col-6">Cena: </b>${produkt.Cena}zł</div>
                <div class="col-12"><input class="col-10 col-md-8 rounded-4 text-bg-danger border-0 shadow my-3" type="submit" value="Usuń produkt" name="" class="usun"></div>
            </div>`
    })
}