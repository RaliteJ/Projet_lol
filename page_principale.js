//localStorage.setItem('joueur_id','none');

document.getElementById("icone1").addEventListener("click", react1);
document.getElementById("icone2").addEventListener("click", react2);
document.getElementById("icone3").addEventListener("click", react3);
document.getElementById("icone4").addEventListener("click", react4);
document.getElementById("icone5").addEventListener("click", react5);
document.getElementById("icone6").addEventListener("click", react6);
document.getElementById("icone7").addEventListener("click", react7);
document.getElementById("icone8").addEventListener("click", react8);
document.getElementById("icone9").addEventListener("click", react9);
document.getElementById("icone10").addEventListener("click", react10);

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
function react6(){
    localStorage.setItem('joueur_id',6);

}

function react7(){
    localStorage.setItem('joueur_id',7);

}
function react8(){
    localStorage.setItem('joueur_id',8);

}
function react9(){
    localStorage.setItem('joueur_id',9);

}
function react10(){
    localStorage.setItem('joueur_id',10);

}
if (localStorage.getItem('id_champ_selct')!= 'None' ){
    
    for (let i=1;i<11;i++){
        let marty = document.getElementById('icone_player_'+i)
        marty.setAttribute("src" ,"Champions - League of Legends_fichiers/("+localStorage.getItem('id_icone'+i)+").jpg");
    }
}
let matchups = {top:[1,6],jgl:[2,7],mid:[3,8],bot:[4,9],sup:[5,10]}
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
        for (let i=1;i<11;i++){
            let partty = document.getElementById(i)
            partty.innerHTML= String(String((request.response.data[caribou[(localStorage.getItem('id_icone'+i))-1]]).name )+" : "+String((request.response.data[caribou[(localStorage.getItem('id_icone'+i))-1]]).tags ))
        }
        for (let i=1;i<6;i++){
            let partty1 = document.getElementById('match'+i)
            let partty2 = document.getElementById('match'+(i+5))
            partty1.setAttribute("href" ,"https://www.mobachampion.com/fr/counter/"+(((String((request.response.data[caribou[(localStorage.getItem('id_icone'+i))-1]]).name )+'-vs-'+String((request.response.data[caribou[(localStorage.getItem('id_icone'+(i+5)))-1]]).name )).toLowerCase()).replace(/ /g, "")).replace("'","")+'/');
            partty2.setAttribute("href" ,"https://www.mobachampion.com/fr/counter/"+(((String((request.response.data[caribou[(localStorage.getItem('id_icone'+(i+5)))-1]]).name )+'-vs-'+String((request.response.data[caribou[(localStorage.getItem('id_icone'+i))-1]]).name )).toLowerCase()).replace(/ /g, "")).replace("'","")+'/');
            // console.log(' 'in String((request.response.data[caribou[(localStorage.getItem('id_icone'+i))-1]]).name ))
            console.log(('em ail').replace(/ /g, ""))
        }
    }
    localStorage.setItem('id_champ_selct', 'None');
  }

// let partty = document.getElementById('122')
//  partty.innerHTML= 'dd'


