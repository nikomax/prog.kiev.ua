/**
 * Created by maksc on 26.06.2017.
 */
var person = {
    name:"Maksym",
    surname: "Chupryna",
    age: 23,
    sex: 'male',
    skills: ['JavaScript', 'Node.js', 'Angular.js', 'HTML5', 'CSS3'],
    address: {
        street:"Peremohy avenue",
        city: "Kyiv"
    }
};

console.log(person);

var s = 0;
for (var i = 0; i<=2015; i+=2) {
    s += i;
}
console.log(s);
