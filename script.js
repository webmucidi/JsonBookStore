async function getNewBook() {
    const url = "https://api.collectapi.com/book/newBook";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "apikey 4dt29quqTUIne0aMPOL4DL:0l849tJwAWlI1Wy5PlP05N"
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      data.result.forEach(element => {
        const title = document.createElement('h2');
        title.textContent = element.title;
        document.querySelector(".books").appendChild(title);
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  getNewBook();