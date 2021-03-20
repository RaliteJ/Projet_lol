

let n = Math.sqrt(154)

const game=document.getElementById("game");

for (let i=0;i<7;i++){
    for (let j=1;j<22;j++){
        let b = document.createElement("input");
        b.setAttribute("type", "image");
        b.setAttribute("id", (j +(i*22)));
        b.setAttribute("alt" ,"Login");
        b.setAttribute("src" ,"Champions - League of Legends_fichiers/("+(j +(i*22))+").jpg");
        b.addEventListener("click", react);
        game.appendChild(b);
    } 
    game.appendChild(document.createElement("br")); 
}
let b = document.createElement("input");
b.setAttribute("type", "image");
b.setAttribute("id", 154);
b.setAttribute("alt" ,"Login");
b.setAttribute("src" ,"Champions - League of Legends_fichiers/(154).jpg");
b.addEventListener("click", react);
game.appendChild(b);

function react(){
    
    localStorage.setItem('id_champ_selct', this.id);
    localStorage.setItem('id_icone'+localStorage.getItem('joueur_id'), this.id);

    window.location.href="page_principale.html"
}