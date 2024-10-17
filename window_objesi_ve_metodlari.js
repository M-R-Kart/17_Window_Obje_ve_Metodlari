window objesi, JavaScript te tüm tarayıcı ortamında kullanılan en üst düzey (global) nesnedir. 
Tarayıcıda çalışan her şey, varsayılan olarak window objesine bağlıdır. Web sayfasını veya 
tarayıcıyla etkileşimi kontrol etmek için birçok yerleşik özellik ve metot sunar.

//! 1. Window Objesi Nedir?
window objesi, tarayıcıdaki tüm global değişkenleri, fonksiyonları ve diğer özellikleri içerir. 
Eğer global bir değişken ya da fonksiyon oluşturursan, aslında bu window objesinin bir parçası
olur.

//? Örnek:

console.log(window); // Tüm window objesini gösterir
console.log(window.innerWidth); // Tarayıcı penceresinin genişliğini gösterir

//? Örnek:
veri = window; // Window objesinin içerisine veri değişkenini atmış oluruz.
console.log(veri);

//! *****************************************************************************************

//! 2. Window Objesinin Yaygın Metodları

//! a. alert()

Kullanıcıya bilgi vermek için bir uyarı kutusu açar.

window.alert("Merhaba, Dünya!");
// ya da sadece
alert("Merhaba, Dünya!");

//! b. confirm()
Kullanıcıdan evet/hayır (true/false) cevabı almak için bir onay kutusu açar.


let cıkıs = confirm("Çıkmak Emin misiniz?");
if (cıkıs) {
  console.log("Çıkış gerçekleşti.");
} else {
  console.log("Çıkış gerçekleşmedi.");
}

//! c. prompt()
Kullanıcıdan bilgi girmek için bir metin girişi kutusu açar.


let isim = prompt("Adınız nedir?");
console.log("Merhaba, " + isim + "!");

//! d. setTimeout()
Belirli bir süre sonra bir fonksiyon çalıştırmak için kullanılır.


setTimeout(function() {
  console.log("Bu mesaj 2 saniye sonra gösterilecek.");
}, 2000); // 2000 milisaniye = 2 saniye

//! e. setInterval()
Belirli aralıklarla bir fonksiyonu tekrar tekrar çalıştırır.

let sayac = 0;
let intervalId = setInterval(function() {
  sayac++;
  console.log("Sayaç: " + sayac);
  if (sayac === 5) {
    clearInterval(intervalId); // 5'te durdur
  }
}, 1000); // Her 1 saniyede bir çalışır

//! f. clearTimeout()
setTimeout() fonksiyonunu durdurmak için kullanılır.


let id = setTimeout(function() {
  console.log("Bu mesaj gösterilmeyecek.");
}, 5000);

clearTimeout(id); // Zaman aşımı fonksiyonu iptal edilir

//! g. clearInterval()
setInterval() fonksiyonunu durdurmak için kullanılır. Yukarıdaki setInterval örneğinde 
bunu zaten kullandık.

//! h. open() ve close()
Yeni bir tarayıcı penceresi veya sekmesi açmak ve kapatmak için kullanılır.

let pencere = window.open("https://www.example.com", "_blank"); // Yeni sekme açar
pencere.close(); // Açılan pencereyi kapatır

//! i. location (Yönlendirme)
Tarayıcının URL'sini kontrol etmek ve değiştirmek için kullanılır.

window.location.href: Mevcut sayfanın URL'sini alır.
window.location.replace(): Kullanıcıyı yeni bir sayfaya yönlendirir.

console.log(window.location.href); // Mevcut URL'yi gösterir
window.location.replace("https://www.example.com"); // Yeni sayfaya yönlendirir

//! *****************************************************************************************

//! 3. Window Objesinin Diğer Özellikleri

//! a. innerWidth ve innerHeight
Tarayıcı penceresinin görünür alanının genişliğini ve yüksekliğini alır.


console.log("Genişlik: " + window.innerWidth);
console.log("Yükseklik: " + window.innerHeight);

//! b. navigator
Tarayıcı hakkında bilgi almayı sağlar. Örneğin, hangi tarayıcı kullanıldığını öğrenebilirsin.

console.log(window.navigator.userAgent); // Tarayıcı bilgilerini verir

//! c. history
Tarayıcı geçmişine erişir ve yönlendirme yapmanı sağlar.


window.history.back(); // Bir önceki sayfaya gider
window.history.forward(); // İleri sayfaya gider

//! d. document
window.document nesnesi, HTML içeriğine erişmek ve manipüle etmek için kullanılır.

console.log(window.document.title); // Mevcut sayfanın başlığını alır

//! *****************************************************************************************

//! 4. Global Değişkenler ve Fonksiyonlar
JavaScript te tanımlanan global değişkenler ve fonksiyonlar aslında window objesine ait olur.

var mesaj = "Merhaba!"; // Global değişken
function selamla() {
  console.log(mesaj);
}

console.log(window.mesaj); // "Merhaba!" - window objesinin bir parçasıdır
window.selamla(); // "Merhaba!" - global fonksiyon da window'un parçasıdır

Özet:
* window objesi JavaScript in global nesnesidir ve tarayıcı ile etkileşim için birçok yerleşik 
özellik ve metot içerir.
* alert(), confirm(), prompt() gibi popüler metotlarla kullanıcı ile etkileşime geçilebilir.
* setTimeout() ve setInterval() zamanlama işlemleri için kullanılır.
* location, navigator, history gibi özellikler tarayıcıyla ilgili bilgi sağlar.
* window objesi tarayıcı tarafında JavaScript çalıştırırken sık sık başvuracağın bir araçtır.

