const input = document.getElementById('search-box');
const btn = document.getElementById('search-btn');
const listOutput = document.getElementById('list-output');
const outPut = document.getElementById('output');
const resultCount = document.getElementById('count');

btn.addEventListener('click', function () {

    
    const inputText = input.value;
    input.value = '';
    
    if (inputText == '') {
        const search = outPut;
        const error = document.createElement('p');
        error.innerText = ('Please Write Book Name');
        search.appendChild(error);
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${inputText}`
        fetch(url)
            .then(response => response.json())
            .then(data => displayResult(data.docs));
            
        
    }
    const url = `https://openlibrary.org/search.json?q=${inputText}`
        fetch(url)
            .then(response => response.json())
            .then(data => count(data.numFound));
    
    });



    const count = numFound => {
        const number=`${numFound}`
            resultCount.innerText = number;
    }

    const displayResult = docs => {
        const searchResult = listOutput;
        searchResult.textContent = '';
        docs.forEach(text => {
            console.log(text);
        
        
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div class="card h-100">
                 <img src="https://covers.openlibrary.org/b/id/${text.cover_i}-M.jpg" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h3 class="card-title">${text.title}</h3>
                   <p class="card-text">
                   Author Name:${text.author_name}
                   </p>
                   <p class="card-text">
                   Publish Date:${text.publish_date}
                   </p>
                   <p class="card-text">
                   Publish Year: <span>${text.publish_year}
                   </p>
                   <p class="card-text">
                   Frist Publish Year: ${text.first_publish_yea}
                   </p>
                   <p class="card-text">
                   Language: ${text.language}
                   </p>
                 </div>
               </di 
             `;
             
         searchResult.appendChild(div);
    });
};