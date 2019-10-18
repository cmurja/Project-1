
//My code
class Movie{
    constructor(title, princess, yearReleased){
        this.tile = title;
        this.princess = princess;  
        this.yearReleased = yearReleased;
    }
     calculateAge = ()=> new Date().getFullYear() - this.yearReleased;
}


class UI {
    
    addMovieToList(_movie) {  // need to add if else statement 
       
 if (
    title.length ===0 ||
    princess.length ===0  ||
    yearReleased.length === 0
    ) {
    alert ("missing info");
     } else {

            let html = '<div class="display-movie"><div class="display-title">%album%</div><div class = "display-princess">%princess%</div><div class="display-yearReleased">%yearReleased%</div></div>'
            let newHtml = html.replace('%title%', movieui.title);
            newHtml = newHtml.replace('%princess%', movieui.princess);
            newHtml = newHtml.replace('%yearReleased%', movieui.yearReleased); 
            document.querySelector(".display").insertAdjacentElement('beforeend', newHtml); 
            } 
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
    //console.log(movie);

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