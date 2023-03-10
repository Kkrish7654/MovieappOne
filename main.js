const movieBox = document.getElementById("container");
const search = document.getElementById("Searchtext");
const btn = document.getElementById("searchBtn");

var search_movie = "";

const API = "https://api.themoviedb.org/3/movie/popular?api_key=699c4d2bdeb0e649218e681b0f725948";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=699c4d2bdeb0e649218e681b0f725948&query=${search_movie}`


const getMovies  = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    showMovies(data.results);
}

const showMovies = (data) => {
    movieBox.innerHTML="";
    data.forEach(
        (items) => {
            console.log(items)
            const div = document.createElement("div");
            div.classList.add("box");
            div.innerHTML = `
                    <div class="img_container">
                        <img src="${IMGPATH+items.poster_path}" alt="">
                    </div>
                    <div class="details">
                        <p>${items.title}</p>
                    <div>
            `
           movieBox.appendChild(div);
    });
}


btn.addEventListener("click",()=>{
    if(search.value !== ""){
        search_movie = search.value;
        const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=699c4d2bdeb0e649218e681b0f725948&query=${search_movie}`
        getMovies(SEARCH_API);
    }else{
        getMovies(API);
    }
})

getMovies(API);



