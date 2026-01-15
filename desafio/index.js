let nomeHeroi = "Eudora"
let heroiXp = 7.600
let nivel = " "

if (heroiXp < 1.000) {
    nivel = "Ferro"
}
else if (heroiXp <= 2.000) {
    nivel = "Bronze"
}
else if (heroiXp <= 5.000) {
    nivel = "Prata"
}
else if (heroiXp <= 7.000) {
     nivel = "Ouro"
}
else if (heroiXp <= 8.000) {
     nivel = "Platina"
}
else if (heroiXp <= 9.000) {
 nivel = "Ascendente"
}
else if (heroiXp <= 10.000) {
  nivel = "Imortal"
}
else
    { (heroiXp >= 10.001) 
  nivel = "Radiante"
}

console.log(" A heroína de nome " + nomeHeroi + " está no nível de " + nivel )