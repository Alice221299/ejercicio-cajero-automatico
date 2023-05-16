// users.forEach (user =>{
//     while(incomingDocument !== user.document && incomingPassword !== user.password) {
//         const incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
//         const incomingPassword = parseInt(prompt('Escriba su contraseña'));
//         console.log('El usuario no esta registrado');
//         if (incomingDocument === user.document && incomingPassword === user.password){
//             console.log('Tu estas autorizado');
//             break;
//     }
// }});

// users.forEach (user => {
// while(true){
//     const incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
//     const incomingPassword = parseInt(prompt('Escriba su contraseña'));
//     if(incomingDocument === user.document && incomingPassword === user.password){
//         console.log('Tu estas autorizado');
//         break;
//     }
//     else if(incomingDocument !== user.document && incomingPassword !== user.password){
//         console.log('El usuario no esta registrado');
//         break;
//     }
//     else {
//         console.log('No pusiste informacion');
//     }
// }})

// users.forEach (user => {
//     if (incomingDocument === user.document && incomingPassword === user.password){
//         console.log('Tu estas autorizado');}
//     else {
//         console.log('Tu documento no se encuentra en la base');
//     }
// })

// const incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
// const incomingPassword = parseInt(prompt('Escriba su contraseña'));

// let chooseUser = users.filter (function (user) {
//     return user.document === incomingDocument && user.password === incomingPassword;
// })
// if (chooseUser.length > 0) {
//     console.log('Tu estas autorizado');
// }
// else {
//     console.log('Tu documento no se encuentra en la base');
// }
// let confirmacionUsuario = confirm('Por favor indiquenos si desea continuar')
// do {
// const incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
// const incomingPassword = parseInt(prompt('Escriba su contraseña'));

// let chooseUser = users.filter (function (user) {
//     return user.document === incomingDocument && user.password === incomingPassword;
// })
// if (chooseUser.length > 0) {
//     console.log('Tu estas autorizado');
//     break;
// }
// else {
//     console.log('Tu documento no se encuentra en la base');
//     confirmacionUsuario = confirm ('Quiere loguarse?')
// }
// }
// while (confirmacionUsuario)

// let incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
// let incomingPassword = parseInt(prompt('Escriba su contraseña'));

// let chooseUser = users.filter (function (user) {
//     return user.document === incomingDocument && user.password === incomingPassword;
// })
// if (chooseUser.length > 0) {
//     console.log('Tu estas autorizado');
// }
// else {while (chooseUser.length === 0) {

//     console.log('Tu documento no se encuentra en la base');
//     incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
//     incomingPassword = parseInt(prompt('Escriba su contraseña'));
// }}

// if (chooseUser[0].userType === 1){
//     money[0].amount = parseInt(prompt('Ingrese la cantidad de billetes de 5000'));
//     money[1].amount = parseInt(prompt('Ingrese la cantidad de billetes de 10000'));
//     money[2].amount = parseInt(prompt('Ingrese la cantidad de billetes de 20000'));
//     money[3].amount = parseInt(prompt('Ingrese la cantidad de billetes de 50000'));
//     money[4].amount = parseInt(prompt('Ingrese la cantidad de billetes de 100000'));
//     let suma1 = money[0].value * money[0].amount;
//     let suma2 = money[1].value * money[1].amount;
//     let suma3 = money[2].value * money[2].amount;
//     let suma4 = money[3].value * money[3].amount;
//     let suma5 = money[4].value * money[4].amount;
//     let total = suma1 + suma2 + suma3 + suma4 + suma5
//     console.log('Hay ' + suma1 + ' en billetes de 5000, hay ' + suma2 + ' en billetes de 10000, hay ' + suma3 + ' en billetes de 20000, hay ' + suma4 + ' en billetes de 50000, hay ' + suma5 + ' en billetes de 100000. El total del dinero ingresado es ' + total)

// }
// let confirmacionUsuario = confirm('Por favor indiquenos si desea continuar')
// while (confirmacionUsuario){
//     const incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
//     const incomingPassword = parseInt(prompt('Escriba su contraseña'));

//     let chooseUser = users.filter (function (user) {
//         return user.document === incomingDocument && user.password === incomingPassword;
//     })

//     if (chooseUser.length > 0) {
//         console.log('Tu estas autorizado');
//     }
//     else {
//         console.log('Tu documento no se encuentra en la base');
//     }

//     if (chooseUser[0].userType === 1){
//         money[0].amount = parseInt(prompt('Ingrese la cantidad de billetes de 5000'));
//         money[1].amount = parseInt(prompt('Ingrese la cantidad de billetes de 10000'));
//         money[2].amount = parseInt(prompt('Ingrese la cantidad de billetes de 20000'));
//         money[3].amount = parseInt(prompt('Ingrese la cantidad de billetes de 50000'));
//         money[4].amount = parseInt(prompt('Ingrese la cantidad de billetes de 100000'));
//         let suma1 = money[0].value * money[0].amount;
//         let suma2 = money[1].value * money[1].amount;
//         let suma3 = money[2].value * money[2].amount;
//         let suma4 = money[3].value * money[3].amount;
//         let suma5 = money[4].value * money[4].amount;
//         var total = suma1 + suma2 + suma3 + suma4 + suma5
//         console.log('Hay ' + suma1 + ' en billetes de 5000, hay ' + suma2 + ' en billetes de 10000, hay ' + suma3 + ' en billetes de 20000, hay ' +     suma4 + ' en billetes de 50000, hay ' + suma5 + ' en billetes de 100000. El total del dinero ingresado es ' + total)
//     }
//     else if (chooseUser[0].userType === 2 && total !== 0) {
//         console.log('Cajero en mantenimiento, vuelva pronto.');
//     }
//     else if (chooseUser[0].userType === 2) {

//     }
//     confirmacionUsuario = confirm ('Quiere loguarse?')
//     }


      
        // money[0].amount += parseInt(prompt('Ingrese la cantidad de billetes de 100000'));
        // money[1].amount += parseInt(prompt('Ingrese la cantidad de billetes de 50000'));
        // money[2].amount += parseInt(prompt('Ingrese la cantidad de billetes de 20000'));
        // money[3].amount += parseInt(prompt('Ingrese la cantidad de billetes de 10000'));
        // money[4].amount += parseInt(prompt('Ingrese la cantidad de billetes de 5000'));
        // let suma1 = money[0].value * money[0].amount;
        // let suma2 = money[1].value * money[1].amount;
        // let suma3 = money[2].value * money[2].amount;
        // let suma4 = money[3].value * money[3].amount;
        // let suma5 = money[4].value * money[4].amount;
        // var total = suma1 + suma2 + suma3 + suma4 + suma5;
        // console.log('Hay ' + suma5 + ' en billetes de 5000, hay ' + suma4 + ' en billetes de 10000, hay ' + suma3 + ' en billetes de 20000, hay ' +     suma2 + ' en billetes de 50000, hay ' + suma1 + ' en billetes de 100000. El total del dinero ingresado es ' + total)


        // const startAtm = () => {
//     const incomingDocument = parseInt(prompt("Escriba el numero de tu documento"));
//     const incomingPassword = parseInt(prompt("Escriba su contraseña"));
//     return{
//         incomingDocument,
//         incomingPassword
//     };
// };

// startAtm()
// const register =( incomingDocument,incomingPassword) =>{
//     if
// var chooseUser = users.find (function (user) {
//     return user.document === incomingDocument && user.password === incomingPassword;
// })

// if (chooseUser) {
//     console.log('Bienvenidos ', chooseUser.name);
// }
// else {
//     console.log('Tu documento no se encuentra en la base');
//     startAtm()
// }
// }


                  // mon.amount -= moneyTaken.amount;
          // var cash = {
          //   value: mon.value,
          //   amount: mon.amount
          // }
          // moneyTaken.push(cash);
          // mon.amount -= cash.amount;
          // moneyToWithdraw -= mon.value * cash.amount;

      
    //     if (moneyToWithdraw > 0) {
    //       let totalMoneyGiven = 0;
    //       moneyTaken.forEach(item => {
    //         totalMoneyGiven += item.value * item.amount
    //       });
    //     console.log('No hay sencillo suficiente para completar el cambio');
    // }