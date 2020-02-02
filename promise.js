// //---------------------------------------------------ЛЕКЦІЯ
//
// //console.log("==========CALL===========");
//
// function loger() {
//     console.log(this.name);
//     console.log(this.age);
// }
//
// let user = {
//     name: "Mykhailo",
//     age: 28
// };
//
// let user2 = {
//     name: "Vitalii",
//     age: 19
// };
//
// //loger.call(user);
//
// //console.log("==========BIND===========");
//
// let user2Loger = loger.bind(user2);
// //user2Loger();
//
// //console.log("=========================");
//
// class Product {
//     constructor(name, price, photo) {
//         this.name = name;
//         this.price = price;
//         this.photo = photo;
//     }
// }
//
// let frezer = new Product("Wirpool", 2000, "frezer.jpg");
// let pralka = new Product("samsung", 20000, "pralka.jpg");
// let TV = new Product("SONY", 10000, "tv.jpg");
//
// function drawProduct() {
//     console.log(`Price is ${this.price}`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Picture is ${this.photo}`);
// }
//
// let ProdArr = [frezer, pralka, TV];
//
// function drawProd(ProdArr) {
//     for (let prod of ProdArr) {
//         drawProduct.call(prod);
//         console.log("=========================");
//     }
// }
//
// //drawProd(ProdArr);
//
// //console.log("=ASYNC===PROMISE==AWAITE=");
//
// function asyncFunc(cb) {
//     setTimeout(() => {
//         cb("hello");
//     }, 1000);
// } //-----------------------------------OLD
//
// asyncFunc(function (gg) {
//     console.log(gg);
// }); //---------------------------------OLD
//
// function withPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("error");
//         }, 2000);
//     });
// }
//
// withPromise()
//     .then(xxx => {
//         console.log(xxx);
//
//         return "my name is Mykhailo";
//     })
//     .then(yyy => {
//         console.log(yyy);
//     })
//     .catch(reason => {
//         console.log(reason);
//     });
//
// //======CLEAR===HOUSE======;
//
// // function clearHouse(isClear) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (isClear) {
// //         resolve(5000);
// //       } else {
// //         reject("Clear house first!");
// //       }
// //     }, 2000);
// //   });
// // }
//
// // // clearHouse(false)
// // //   .then(reward => {
// // //     console.log(`Buy jeans for ${reward / 4}$`);
// // //     console.log(`Buy t-sort for ${reward / 2}$`);
// // //   })
// // //   .catch(reason => {
// // //     console.log(`WARNING! ERROR BECAUSE: "${reason}"`);
// // //   });
//
// // function buyClothes(money) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (money < 1000) {
// //         reject(`I have not enough money, only: ${money}$`);
// //       } else {
// //         console.log(`Buy jeans for ${money / 4}$`);
// //         console.log(`Buy t-sort for ${money / 2}$`);
// //         resolve("Nice job man!");
// //       }
// //     }, 3000);
// //   });
// // }
//
// // clearHouse(true)
// //   .then(reward => {
// //     console.log("Congralutalions");
// //     return buyClothes(reward);
// //   })
// //   .then(reason => {
// //     console.log(reason);
// //   })
// //   .catch(reason => {
// //     console.log("Error: " + reason);
// //   });
//
// //======================ASYNC==AWAIT=============================
//
// function clearHouse(isClear) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isClear) {
//                 resolve(5000);
//             } else {
//                 reject("Clear house first!");
//             }
//         }, 2000);
//     });
// }
//
// function buyClothes(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 1000) {
//                 reject(`I have not enoght money, only: ${money}$`);
//             } else {
//                 console.log(`Buy jeans for ${money / 4}$`);
//                 console.log(`Buy t-sort for ${money / 2}$`);
//                 resolve("Nice job man!");
//             }
//         }, 3000);
//     });
// }
//
// async function goToWork() {
//     let reward = await clearHouse(true);
//     console.log("Congralutalions");
//
//     let smth = await buyClothes(reward);
//     console.log(smth);
// }
//
// //goToWork();

//========================CLASSWORK================

// Зробити свій розпоряжок дня.

function wakeUp(workDay) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('kitchen')
                resolve('go to the kitchen')
            } else {
                reject('dayOff')
            }

        }, 1000)
    }))
}

function doCoffee() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Nice coffee, go next step');
            resolve('go to wardrobe')
        }, 2000)
    }))
}

function goToTransport(yes) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Im on public transport stop');
            yes ? resolve('drive to work') : reject('go to home');
        }, 5000)
    }))
}

// wakeUp(true)
//     .then(value => {
//         console.log(value);
//
//         return doCoffee()
//     })
//     .then(value => {
//         console.log(value);
//
//         return goToTransport(true)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log('error' + reason)
//     });


async function HardWork(workDay) {
    let x = await wakeUp(workDay);
    console.log(x);
    let y = await doCoffee();
    console.log(y);
    let z = await goToTransport(true);
    console.log(z);
}

HardWork(true);


