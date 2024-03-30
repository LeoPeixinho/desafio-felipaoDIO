let heroName = " Joel Miller "
let i = 99999
let xpCurrent = i
for (i; i <=100005; i++)
{
    console.log(heroName + "Concluiu uma missão")
}

if(xpCurrent <= 1000){
    console.log ("O Herói" + heroName + "está no nível de Ferro")
} else if (xpCurrent <= 2000){
    console.log ("O Herói" + heroName + "está no nível Bronze")
} else if (xpCurrent <= 5000){
    console.log ("O Herói" + heroName + "está no nível Prata")
} else if (xpCurrent <= 7000){
    console.log ("O Herói" + heroName + "está no nível Ouro")
} else if (xpCurrent <= 8000){
    console.log ("O Herói" + heroName + "está no nível Platina")
} else if (xpCurrent <= 9000){
    console.log ("O Herói" + heroName + "está no nível Ascendente")
}  else if (xpCurrent <= 10000){
    console.log ("O Herói" + heroName + "está no nível Imortal")
} else if (xpCurrent >= 10001){
    console.log ("O Herói" + heroName + "está no nível Radiante")
}