
class details {
    constructor(name, age, city, country, salary, vehicle, martialStatus) {
        this.n = name;
        this.a = age;
        this.c = city;
        this.co = country;
        this.s = salary;
        this.v = vehicle;
        this.ms = martialStatus;


    }

}

let tsf = new details('tauseef', 29, 'Nagpur', 'India', '25k', 'personal', 'married')
let qasim = new details('Qasim', 24, 'Hyd', 'Dubai', '250k', 'personal', 'Unmarried')
console.log(tsf, qasim)


let a = new Date();
console.log(a)
console.log(a.getDate())
console.log(a.getDay())
console.log(a.getTime())

class check {
    constructor(a, b, c, d, e, f, g) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;

    }
}
let arr = new check('a', 'tsf', true, false, null, undefined, 7);
console.log(arr);

console.log('current one', tsf, qasim)
