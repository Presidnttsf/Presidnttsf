let ahmed = {
    name: "Ahmed",
    age: 29,
    address: {
        address1: "Saifinagar",
        address2: "Mominpura",
        city: "Pune"
    },
    isPrime: true,
    run : function () {
        console.log("Ahmed is running");
    },
    getBirthYear: function () {
        let date = new Date;
        console.log("Ahmed was born in", date.getFullYear()-this.age);
    }
};

let arfat = {
    name: "Arfat",
    age: 25,
    address: {
        address1: "Saifinagar",
        address2: "Mominpura",
        city: "Nagpur"
    },
    isPrime: false
};
console.log(ahmed.address.city);
console.log(ahmed.getBirthYear());

// if (ahmed.age > 18 && ahmed.address.city == 'Nagpur') {
//     console.log(ahmed.name, ahmed.address.city,"me vote kr skta hai");
// }
