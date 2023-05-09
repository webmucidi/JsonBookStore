async function kitapListele() {
    const kaynakUrl = "https://api.collectapi.com/book/newBook";
    const baglantiAyarlari = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "senin api keyin"
      }
    };
  
    try {
      const sunucuYaniti = await fetch(kaynakUrl, baglantiAyarlari);
      const kitaplar = await sunucuYaniti.json();
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


      });


    } catch (error) {
      console.error(error);
    }
  }


  kitapListele();
  