let movieArr = [
    { movieName: "oppenheimer", src: "./img/oppenheimer.jpg" , genre:"Action/drama" , rating:"9.5 - Imdb"},
    { movieName: "barbie", src: "./img/barbie.jpg" , genre:"Comedy/drama" , rating:"6.5 - Imdb" },
    { movieName: "batman", src: "./img/batman.jpg",  genre:"Drama/Thriller" },
    { movieName: "bladerunner", src: "./img/bladerunner.jpg" ,  genre:"Science-Fiction/Thriller" , rating:"8.0 - Imdb"},
    { movieName: "avengers endgame", src: "./img/avengers endgame.jpg" ,  genre:"SuperHero/Action" , rating:"7.4 - Imdb"},
    { movieName: "fast and furious 10", src: "./img/fast and furious 10.jpg" ,  genre:"Racing/Thriller" , rating:"8.1 - Imdb" },
    { movieName: "jawan", src: "./img/jawan.jpg" ,  genre:"Action/Thriller" , rating:"8.9 - Imdb" },
    { movieName: "spiderman across the spider verse", src: "./img/spiderman across the spider verse.jpg", genre:"Animation/Thriller" , rating:"7.2 - Imdb"},
  ];
  
  let mainContainer = document.querySelector(".poster-container");
  
  function moviePosterSet() {
    movieArr.forEach(arr => {
      let DivChild = document.createElement("div");
      DivChild.classList.add("poster-card");
      let button = document.createElement("button")
      button.innerHTML = "Book Tickets"
      button.classList.add("poster-btn")
      DivChild.appendChild(button)
      DivChild.dataset.movieName = arr.movieName
      DivChild.style.backgroundImage = `url('${arr.src}')`; 
      DivChild.dataset.genre = arr.genre
      DivChild.dataset.rating = arr.rating
      mainContainer.appendChild(DivChild);
    });
  }
  
  moviePosterSet();
  

let dataToSend = {
    movieName: "none",
    posterSrc: "none",
    genre:"none",
    movieRating:"none"
    
};



document.querySelectorAll(".poster-card").forEach(poster=>{
    poster.addEventListener("click",(targetPoster)=>{
        dataToSend = {
            movieName : targetPoster.target.dataset.movieName,
            posterSrc  : targetPoster.target.style.backgroundImage,
            movieGenre : targetPoster.target.dataset.genre,
            movieRating : targetPoster.target.dataset.rating

            
        }
  
        localStorage.setItem("dataToSend", JSON.stringify(dataToSend));
        window.location.href = "MovieDetails.html";
        
       
        
    })
})  