const student = [
    {id: 21, name: 'Omar'},
    {id: 23, name: 'Rahul'},
    {id: 21, name: 'Susmi <3'},
    {id: 21, name: 'Antu'}

];

const names = student.map( s => s.name );
const ids = student.map( s => s.id);
const biger = student.filter( s => s.id > 20);
const biger1 = student.find( s => s.id > 18);

console.log(biger1);