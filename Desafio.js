let nomeDoHeroi = "Astro"
let nivelDoHeroi = 10001
let experienciaDoHeroi = 1000
 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000, 10001
let ranking=[
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Platina",
    "Ascendente",
    "Imortal",
    "Radiante",
]
switch (nivelDoHeroi){
    case 1000:
     console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[0]+"!")
     break
    case 1001,2000:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[1]+"!")
    break
    case 2001,5000:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[2]+"!")
    break
    case 5001,7000:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[3]+"!")
    break
    case 7001,8000:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[4]+"!")
    break
    case 8001,9000:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[5]+"!")
    break
    case 9001,10000:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[6]+"!")
    break
    case 10001:
      console.log("O Herói de nome "+ nomeDoHeroi+ " está no nivél de " + ranking[7]+"!")
    break
}
