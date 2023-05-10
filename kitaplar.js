const kaynakUrl = "https://api.collectapi.com/book/newBook";
const baglantiAyarlari = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 2Jl8FuVzEAZ1F8dgDw3roF:4tpY0zR9ayGurnenC9MJCy"
  }
};

let sunucuYaniti;
let kitaplar;

async function kitapListele() {
    try {
      sunucuYaniti = await fetch(kaynakUrl, baglantiAyarlari);
      kitaplar = await sunucuYaniti.json();
      console.log(kitaplar);

      kitaplar.result.forEach(kitap => {

        const kitapKarti = document.createElement('div');
        kitapKarti.classList.add('book-card');
        document.querySelector(".kitaplar").appendChild(kitapKarti);

        const kitapBasligi=document.createElement("h3");
        kitapBasligi.innerHTML=kitap.title;
        kitapKarti.appendChild(kitapBasligi);

        const kitapKapak=document.createElement("img");
        kitapKapak.src=kitap.image;
        kitapKarti.appendChild(kitapKapak);

        const kitapLink=document.createElement("a");
        kitapKapak.href=kitap.url;
        kitapKarti.appendChild(kitapLink); 


      });


    } catch (error) {
      console.error(error);
    }
  }


document.getElementById("filterButton").addEventListener("click",()=>{
  let arananYazar=document.getElementById("txtYazar").value;
  kitapFiltrele(arananYazar);
});

  async function kitapFiltrele(yazar){

    const booksDiv = document.querySelector('.kitaplar');
    booksDiv.innerHTML = ''; // Clear any existing book cards

    try {
      sunucuYaniti = await fetch(kaynakUrl, baglantiAyarlari);
      kitaplar = await sunucuYaniti.json();
      
      const secilmisKitaplar = kitaplar.result.filter(kitap => kitap.yazar === yazar);
      console.log(secilmisKitaplar);

      kitaplar.result.forEach(kitap => {

        const kitapKarti = document.createElement('div');
        kitapKarti.classList.add('book-card');
        document.querySelector(".kitaplar").appendChild(kitapKarti);

        const kitapBasligi=document.createElement("h3");
        kitapBasligi.innerHTML=kitap.title;
        kitapKarti.appendChild(kitapBasligi);

        const kitapKapak=document.createElement("img");
        kitapKapak.src=kitap.image;
        kitapKarti.appendChild(kitapKapak);

        const kitapLink=document.createElement("a");
        kitapKapak.href=kitap.url;
        kitapKarti.appendChild(kitapLink);   

      });
    } 
    catch (error) {
      console.error(`Error fetching books in ${yazar}:`, error);
    }
  }

  kitapListele();
  