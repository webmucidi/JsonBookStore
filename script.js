const apiUrl = "https://api.collectapi.com/book/newBook";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 2Jl8FuVzEAZ1F8dgDw3roF:4tpY0zR9ayGurnenC9MJCy"
  }
};

let data;
let response;

const filterButton=document.getElementById("filterButton");

filterButton.addEventListener("click",()=>{
  
    let arananYazar=document.getElementById("yazar").value;
    filterByYazar(arananYazar);
    
}
);


async function getNewBook() {
  
    try {
      response = await fetch(apiUrl, options);
      data = await response.json();
      console.log(data.result);
      data.result.forEach(element => {
        const title = document.createElement('h2');
        title.textContent = element.title;
        document.querySelector(".books").appendChild(title);
      });
      //console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByYazar(yazar) {

    const booksDiv = document.querySelector('.books');
    booksDiv.innerHTML = ''; // Clear any existing book cards
    
    try {


      response = await fetch(apiUrl, options);
      data = await response.json();
      

      const filteredBooks = data.result.filter(book => book.yazar === yazar);
      console.log(filteredBooks);

      filteredBooks.forEach(book => {
        console.log(book.title);
      });
    } catch (error) {
      console.error(`Error fetching books in ${yazar}:`, error);
    }
  }


  getNewBook();