
//My code
class Movie{
    constructor(title, princess, yearReleased){
        this.tile = title;
        this.princess = princess;  
        this.yearReleased = yearReleased;
    }
     calculateAge() {
        return new Date().getFullYear() - this.yearReleased;

}
}


class UI {
    
    addMovieToList(movie) {  // need to add if else statement 
       
 
   

            let html = '<div class="display-movie"><div class="display-title">%album%</div><div class = "display-princess">%princess%</div><div class="display-yearReleased">%yearReleased%</div></div>'
            let newHtml = html.replace('%title%', movie.title);
            newHtml = newHtml.replace('%princess%', movie.princess);
            newHtml = newHtml.replace('%yearReleased%', movie.yearReleased); 
            document.querySelector(".display").insertAdjacentElement('beforeend', newHtml); 
            console.log(this.addMovieToList);
 }
        
        

    clearFields () {
        document.getElementById('title').value = "";
        document.getElementById('princess').value = "";
        document.getElementById('yearReleased').value = "";
    }  

    deleteMovie(target) {    
        if (target.className === "remove-movie") {
            target.parentElement.remove();
        }
    } 
}


document.getElementById('movie-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value;
    const princess = document.getElementById('princess').value;
    const yearReleased = document.getElementById('yearReleased').value;

    const movie = new Movie(title, princess, yearReleased);
    console.log(movie);

    const ui = new UI();
    console.log(ui);

    ui.addMovieToList(movie);
    ui.clearFields();
    e.preventDefault();
});

document.querySelector(".display").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteMovie(e.target);
    ui.clearFields();
    e.preventDefault();
});