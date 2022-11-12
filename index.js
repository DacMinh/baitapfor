
function ex3() {
    var i = 1 ;
    var sum = 0 ;
     while (sum < 10000) {
        sum +=i; i++
        
     }
     console.log(i-1)
}
ex3()

function ex5 ()   {
   var n = 100
   var x = 2 
   var sum = 0
   for (var i= 1;i <= n ; i++) {sum += Math.pow (x,i)}
      

   console.log(sum)
}
ex5 () 

// Tính giai thừa
document.getElementById ('btnketQua').onclick =
 function () {
    
   var n= + document.getElementById ('GiaTri').value;
   var x = 1 ;
   var result =1 ;
while (x <= n ) {
   result *=x; x++;

}
 
   document.getElementById ('result').innerHTML=result
 }


 document.getElementById ('ketQua').onclick=function () {
var number= + document.getElementById ('nhapSo').value;
var ketQua = " ";


for (var iSo =2 ; iSo <=number; iSo++) {
   var checkSNT = true;
   for (var i= 2 ; i <= Math.sqrt(iSo);i++ ) {
      if (iSo % i === 0) {
         checkSNT =false;break;
      }
   };  if (checkSNT) {
      ketQua += iSo + ' '
   }

   document.getElementById ('ketQua1').innerHTML=ketQua + 'là số nguyên tó'
 }
}