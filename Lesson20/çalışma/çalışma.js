// 1. Banka Hesabı Yönetimi

// Objective: Banka Hesabı sınıfını genişleterek bir hesap bakiyesi ve işlem geçmişi ekleyin.
// Talimatlar:

//     Bir BankAccount sınıfı tanımlayın.
//     Sınıfa balance (bakiye) ve transactionHistory (işlem geçmişi) özelliklerini ekleyin.
//     deposit ve withdraw metodlarını ekleyin. Bu metodlar, işlemi gerçekleştirmeli ve işlem geçmişine yeni bir kayıt eklemelidir.
//     getBalance metodunu ekleyin. Bu metod, mevcut bakiyeyi döndürmelidir.
//     getTransactionHistory metodunu ekleyin. Bu metod, tüm işlem geçmişini döndürmelidir.
class BankAccount{
    constructor(balance=0){
    this.balance=balance;
    this.transactionHistory=[]};
deposit(amount){
    this.balance+=amount;
    this.transactionHistory.push({ type: 'deposit', amount: amount, date: new Date().toLocaleDateString() })
    return this.balance;
}
withdraw(amount){
    if(this.balance<amount){
        return "Yetersiz Bakiye!";
    }else{
        this.balance-=amount;
    }
    this.transactionHistory.push({ type: 'deposit', amount: amount, date: new Date().toLocaleDateString() });
    return this.balance;
    ;
}
getBalance(){
    return this.balance;
}
getTransactionHistory(){
    return this.transactionHistory;
}
}
const hesap = new BankAccount(1000);
hesap.deposit(1500);
console.log(hesap.getBalance());

// 2. Envanter Yönetimi

// Objective: Bir envanter yönetim sistemi oluşturun ve ürünlerin stok seviyelerini takip edin.
// Talimatlar:

//     Bir Inventory sınıfı tanımlayın.
//     items (ürünler) adında bir özellik ekleyin. Bu özellik, ürünlerin adlarını ve stok seviyelerini içermelidir.
//     addItem metodunu ekleyin. Bu metod, yeni bir ürün eklemeli veya mevcut bir ürünün stok seviyesini artırmalıdır.
//     removeItem metodunu ekleyin. Bu metod, bir ürünün stok seviyesini azaltmalıdır. Stok sıfırın altına düşerse bir hata mesajı döndürmelidir.
//     getStock metodunu ekleyin. Bu metod, belirli bir ürünün stok seviyesini döndürmelidir.
class Inventory{
    constructor(){
        this.items={};
    }
    addItem(name,quantity){
        if(this.items[name]){
            this.items[name]+=quantity;
        }else {
            this.items[name]=quantity
        }
    }
    removeItem(name,quantity){
        if(!this.items[name]){
           return "hatali isim"
        }else if
            (this.items[name]<quantity){
                return "yetersiz stok"
        }else {
           this.name-=quantity; 
         
        if(this.items[name]===0){
        delete this.items[name]
    }
  }
}
    getStock(name,){
        if(this.items[name]){
            return this.items[name];
        }else{
            return "bu ürün mevcut değil";
        }
          
}}

const ürün =new Inventory();
ürün.addItem("elma",3);
ürün.addItem("armut",5);
ürün.addItem("elma",8);

console.log("elma:",ürün.getStock("elma"));



// 3. Kütüphane Yönetimi

// Objective: Kütüphane sınıfını genişleterek kitapları ve üyeleri yönetin.
// Talimatlar:

//     Bir Library sınıfı tanımlayın.
//     books (kitaplar) ve members (üyeler) adında iki özellik ekleyin.
//     addBook metodunu ekleyin. Bu metod, yeni bir kitap eklemelidir.
//     addMember metodunu ekleyin. Bu metod, yeni bir üye eklemelidir.
//     lendBook metodunu ekleyin. Bu metod, belirli bir kitabı bir üyeye ödünç vermelidir. Kitap mevcut değilse bir hata mesajı döndürmelidir.
//     returnBook metodunu ekleyin. Bu metod, ödünç alınan bir kitabı geri almalıdır.




// 4. Sıcaklık Dönüştürücü

// Objective: Bir sıcaklık dönüştürücü sınıfı oluşturun ve sıcaklık birimlerini dönüştürün.
// Talimatlar:

//     Bir TemperatureConverter sınıfı tanımlayın.
//     celsiusToFahrenheit ve fahrenheitToCelsius metodlarını ekleyin. Bu metodlar, verilen sıcaklık değerlerini dönüştürmelidir.
//     celsiusToKelvin ve kelvinToCelsius metodlarını ekleyin.
//     fahrenheitToKelvin ve kelvinToFahrenheit metodlarını ekleyin.





// 5. Öğrenci Yönetim Sistemi

// Objective: Öğrenci bilgilerini ve notlarını yöneten bir sınıf oluşturun.
// Talimatlar:

//     Bir Student sınıfı tanımlayın.
//     name (isim), age (yaş) ve grades (notlar) adında üç özellik ekleyin.
//     addGrade metodunu ekleyin. Bu metod, bir ders için yeni bir not eklemelidir.
//     getAverageGrade metodunu ekleyin. Bu metod, öğrencinin notlarının ortalamasını hesaplayıp döndürmelidir.