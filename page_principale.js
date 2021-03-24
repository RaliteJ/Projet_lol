//localStorage.setItem('joueur_id','none');

document.getElementById("icone1").addEventListener("click", react1);
document.getElementById("icone2").addEventListener("click", react2);
document.getElementById("icone3").addEventListener("click", react3);
document.getElementById("icone4").addEventListener("click", react4);
document.getElementById("icone5").addEventListener("click", react5);

function react1(){
    localStorage.setItem('joueur_id',1);

}function react2(){
    localStorage.setItem('joueur_id',2);

}function react3(){
    localStorage.setItem('joueur_id',3);

}function react4(){
    localStorage.setItem('joueur_id',4);

}function react5(){
    localStorage.setItem('joueur_id',5);

}

if (localStorage.getItem('id_champ_selct')!= 'None' ){
    
    for (let i=1;i<6;i++){
        let marty = document.getElementById('icone_player_'+i)
        marty.setAttribute("src" ,"Champions - League of Legends_fichiers/("+localStorage.getItem('id_icone'+i)+").jpg");
    }
}

let caribou = []
let requestURL = 'http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    for (let [cle] of Object.entries(request.response.data)){
        caribou.push(`${String(cle)}`)
        }

    if (localStorage.getItem('id_champ_selct')!= 'None' ){
        for (let i=1;i<6;i++){
            let partty = document.getElementById(i)
            partty.innerHTML= String((request.response.data[caribou[(localStorage.getItem('id_icone'+i))-1]]).tags)
        }
    }
    localStorage.setItem('id_champ_selct', 'None');
  }

// let partty = document.getElementById('122')
//  partty.innerHTML= 'dd'


