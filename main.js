const users = [
  {
    name: "Diego",
    document: 123,
    password: 111,
    userType: 1,
  },
  {
    name: "Ana",
    document: 234,
    password: 222,
    userType: 1,
  },
  {
    name: "Juana",
    document: 345,
    password: 333,
    userType: 2,
  },
  {
    name: "Carlos",
    document: 456,
    password: 444,
    userType: 1,
  },
  {
    name: "Liza",
    document: 567,
    password: 555,
    userType: 2,
  },
  {
    name: "Sara",
    document: 678,
    password: 666,
    userType: 2,
  },
];

const money = [
  {
    value: 100000,
    amount: 0,
  },
  {
    value: 50000,
    amount: 0,
  },
  {
    value: 20000,
    amount: 0,
  },
  {
    value: 10000,
    amount: 0,
  },
  {
    value: 5000,
    amount: 0,
  },
];


let primeraConfirmacion = confirm('Por favor indiquenos si desea continuar');
let chooseUser = 0;
let totalDineroCaja = 0;

while (primeraConfirmacion){
    let confirmacionUsuario = confirm('Por favor ingrese el numero de su documento y la contraseña'); 
    
    do {
        const incomingDocument = parseInt(prompt('Escriba el numero de tu documento'));
        const incomingPassword = parseInt(prompt('Escriba su contraseña'));
        
        chooseUser = users.find (function (user) {
            return user.document === incomingDocument && user.password === incomingPassword;
        })

        if (chooseUser) {
            console.log('Bienvenidos ', chooseUser.name);
            break;
        }
        else {
            console.log('Tu documento no se encuentra en la base');
            confirmacionUsuario = confirm ('Quiere loguarse?')
        }
    }
    while (confirmacionUsuario);

    if (chooseUser.userType === 1){
        totalDineroCaja = 0;
        money.forEach((billete)=>{
          const cantidadDepositada = parseInt(prompt(`Por favor ingrese la cantidad de billetes de ${billete.value} a depositar`));
          billete.amount += cantidadDepositada;
          const sumaDenominacion = billete.value * billete.amount;
          let currentSum = billete.value * cantidadDepositada;
          totalDineroCaja += sumaDenominacion;
          console.log(`El total ingresado fue ${currentSum} en billetes de ${billete.value}`);
        });
      console.log(`El total del dinero en caja es ${totalDineroCaja}`);

    }
    else if (chooseUser.userType === 2 && (!totalDineroCaja || totalDineroCaja <= 0)) {
        console.log('Cajero en mantenimiento, vuelva pronto.');
    }
    else if (chooseUser.userType === 2 && totalDineroCaja && totalDineroCaja > 0) {
      let moneyToWithdraw = parseInt(prompt('¿Qué cantidad de dinero desea retirar?'));
      let moneyTaken = [];
      money.forEach (mon => {
        let amountToTake = Math.floor(moneyToWithdraw / mon.value);
        if (amountToTake >= 0 && amountToTake <= mon.amount) {
          let cash = {
            value: mon.value,
            amount: amountToTake
          }
          moneyTaken.push(cash);
          mon.amount -= amountToTake;
          moneyToWithdraw -= mon.value * amountToTake;
        } 
        else if (amountToTake > mon.amount) {
          let cash = {
            value: mon.value,
            amount: mon.amount
          }
          moneyTaken.push(cash);
          mon.amount -= cash.amount;
          moneyToWithdraw -= mon.value * cash.amount;
        }
        else if (moneyToWithdraw > totalDineroCaja) {
          console.log('Cajero sin fondos.');
          let cash = {
            value: mon.value,
            amount: mon.amount
          }
          moneyTaken.push(cash);
          mon.amount -= cash.amount;
          moneyToWithdraw -= mon.value * cash.amount;
          totalDineroCaja -= moneyToWithdraw;
        }
        });
        let totalTaken = 0;
          moneyTaken.forEach(item => {
              totalTaken += item.value * item.amount;
              console.log('Te entregamos ', item.amount, ' billetes de', item.value);
          });
      
      console.log('Te entregamos ' + totalTaken );
      money.forEach(coin => {
      console.log('En caja queda ', coin.amount, 'billetes de ', coin.value);
        })      
        totalDineroCaja -= totalTaken;
      if (totalDineroCaja >=0 ) {
          console.log(`El total del dinero en caja es ${totalDineroCaja}`);
        }
  }  
  primeraConfirmacion = confirm ('Quiere loguarse?')
}
