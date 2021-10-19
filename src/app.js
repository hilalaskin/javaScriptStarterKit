console.log("Merhaba Kodlama.io")

var dolarDun=9.20
dolarDun="Ankara"
console.log(dolarDun)
var dolarBugun=9.30

//undefined tanımlanmamış demek
//bellek yukarıdan aşağı okunduğu için olmayan değişkeni undefined basar

//var yerine let keyword ü kullanılır

//JS type safe değildir

const euroDun=11.2
//euroDun=11

console.log(euroDun)

//array
//isimlendirmede camelCasing kullanılır
//PascalCasing 
let konutKredileri = [12, "Emlak Konut Kredisi", ["a","b","c"]]


console.log(konutKredileri)

console.log("<ul>")
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"<li>")  
}
