# Window Obje ve Metodları

JavaScript'te **`window` objesi**, tarayıcı ortamında çalıştırılan kodlar için en üst düzeyde yer alan bir global nesnedir. Tarayıcıdaki her şey, `window` objesinin bir özelliği ya da metodudur. Varsayılan olarak tüm global değişkenler ve fonksiyonlar da `window` objesine aittir.

---

## Özellikler

### 1. **`window.document`**
- Sayfanın HTML içeriğine erişmek için kullanılır.  
- Örnek:
  ```javascript
  console.log(window.document.title); // Sayfa başlığını yazdırır
  ```

### 2. **`window.innerHeight` ve `window.innerWidth`**
- Tarayıcı penceresinin iç genişliği ve yüksekliği.  
- Örnek:
  ```javascript
  console.log(window.innerWidth); // Pencerenin genişliğini yazdırır
  console.log(window.innerHeight); // Pencerenin yüksekliğini yazdırır
  ```

### 3. **`window.location`**
- Geçerli URL ve URL yönetimi.  
- Örnek:
  ```javascript
  console.log(window.location.href); // Mevcut URL'yi alır
  ```

### 4. **`window.navigator`**
- Tarayıcı ve cihaz bilgileri içerir.  
- Örnek:
  ```javascript
  console.log(window.navigator.userAgent); // Kullanıcı ajan bilgisini yazdırır
  ```

### 5. **`window.history`**
- Tarayıcı geçmişine erişim sağlar.  
- Örnek:
  ```javascript
  console.log(window.history.length); // Tarayıcı geçmişindeki adımların sayısını alır
  ```

---

## Metodlar

### 1. **`window.alert()`**
- Kullanıcıya bir mesaj kutusu gösterir.  
- Örnek:
  ```javascript
  window.alert("Merhaba, Dünya!");
  ```

### 2. **`window.confirm()`**
- Kullanıcıya "Tamam" veya "İptal" seçenekli bir mesaj kutusu gösterir.  
- Örnek:
  ```javascript
  if (window.confirm("Devam etmek istiyor musunuz?")) {
      console.log("Devam edildi.");
  } else {
      console.log("İptal edildi.");
  }
  ```

### 3. **`window.prompt()`**
- Kullanıcıdan veri girişi almak için bir giriş kutusu gösterir.  
- Örnek:
  ```javascript
  const name = window.prompt("Adınızı girin:");
  console.log("Girilen isim: " + name);
  ```

### 4. **`window.open()`**
- Yeni bir tarayıcı penceresi veya sekmesi açar.  
- Örnek:
  ```javascript
  window.open("https://www.example.com", "_blank");
  ```

### 5. **`window.setTimeout()`**
- Belirli bir süre sonra bir işlemi gerçekleştirir.  
- Örnek:
  ```javascript
  window.setTimeout(() => {
      console.log("3 saniye geçti!");
  }, 3000); // 3000 milisaniye = 3 saniye
  ```

### 6. **`window.setInterval()`**
- Belirli aralıklarla bir işlemi tekrar eder.  
- Örnek:
  ```javascript
  const intervalId = window.setInterval(() => {
      console.log("1 saniye geçti!");
  }, 1000); // Her 1 saniyede bir çalışır

  // Durdurmak için: clearInterval(intervalId);
  ```

### 7. **`window.clearTimeout()` ve `window.clearInterval()`**
- `setTimeout` ve `setInterval` işlemlerini durdurur.

---

## Pratik Notlar
- `window` nesnesi globaldir, bu yüzden `window.` yazmadan da özelliklerine ve metodlarına erişilebilir:  
  ```javascript
  alert("Bu da çalışır!");
  ```

- Modern uygulamalarda, `window` objesinin kullanımı genellikle azaltılır çünkü tarayıcı bağımsız çalışabilen kodlar daha fazla tercih edilir.

---

## Sık Kullanılan Senaryolar

### 1. **Sayfa Yönlendirme:**
```javascript
window.location.href = "https://www.example.com";
```

### 2. **Ekran Boyutunu Dinleme:**
```javascript
window.addEventListener("resize", () => {
    console.log(`Yeni boyut: ${window.innerWidth}x${window.innerHeight}`);
});
```

### 3. **Form Verisi Doğrulama:**
```javascript
const name = window.prompt("Adınızı girin:");
if (!name) {
    window.alert("Ad girmelisiniz!");
}
```

