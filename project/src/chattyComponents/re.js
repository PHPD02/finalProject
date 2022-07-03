// var xhttp = new XMLHttpRequest();

//     function checkNewAccount(){
//         var account = document.getElementById('account').value;

//         xhttp.onreadystatechange = function(){
//             if (xhttp.readyState == 4 && xhttp.status == 200){
//                 if (xhttp.responseText != 0){
//                     // 帳號重複
//                     document.getElementById('mesg').innerHTML = '帳號重複';
//                 }else{
//                     document.getElementById('mesg').innerHTML = '帳號可以';
//                 }
//             }
//         };
//         xhttp.open("GET", "isNewAccount.php?account=" + account, true);
//         xhttp.send();
//     }