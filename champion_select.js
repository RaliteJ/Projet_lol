

let n = Math.sqrt(154)

const game=document.getElementById("game");

for (let i=1;i<155;i++){

    let b = document.createElement("input");
    b.setAttribute("type", "image");
    b.setAttribute("id", i);
    b.setAttribute("alt" ,"Login");
    b.setAttribute("src" ,"Champions - League of Legends_fichiers/ ("+i+").jpg");
    b.addEventListener("click", react);
    game.appendChild(b);


}

function react(){
    
    localStorage.setItem('id_champ_selct', this.id);
    localStorage.setItem('id_icone'+localStorage.getItem('joueur_id'), this.id);

    window.location.href="page_principale.html"
}