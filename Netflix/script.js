//api key will be here
const api="api_key=245ad3e5eecbc3f031b7c4162a3515a6";
const base_url="https://api.themoviedb.org/3";
const banner_url ="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w300";

//movie data

const requests = {
    fetchTrending: `${base_url}/trending/all/weeks?${api}&language=en=us`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorroMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

//truncate for shorting the discription of movie

function truncate(str,n){
    return str?.length > n ? str.substr(0, n - 1) + "..." :str;

}

//banner

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {

    //every refresh change movie
    const setMovie = data.results[Math.floor(Math.random()* data.results.length - 1)];
    
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    banner.style.backgroundImage= "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview,150);
    banner_title.innerText = setMovie.name;
  })

  fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    
    .then((data) => {
        const headro = document.getElementById("headrow");
        const row = document.createElement("div");
        
        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters)

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s = movie.name.replace(/\s+/g,"");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

    //trendings
     fetch(requests.fetchTrending)
    .then((res) => res.json())
    
    .then((data) => {
        const headro = document.getElementById("headrow");
        const row = document.createElement("div");
        
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
     

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters)

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

    //action
    fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    
    .then((data) => {
        const headro = document.getElementById("headrow");
        const row = document.createElement("div");
        
        row.className = "row";
    

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Action Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters)

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });
    //horror movies
    fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    
    .then((data) => {
        const headro = document.getElementById("headrow");
        const row = document.createElement("div");
        
        row.className = "row";
        

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Horrow Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters)

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });
    //Romance movies
    fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    
    .then((data) => {
        const headro = document.getElementById("headrow");
        const row = document.createElement("div");
        
        row.className = "row";
    

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Romance Movies";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters)

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });
    //documentry
    fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    
    .then((data) => {
        const headro = document.getElementById("headrow");
        const row = document.createElement("div");
        
        row.className = "row";
        

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Docmentaries";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters)

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });
