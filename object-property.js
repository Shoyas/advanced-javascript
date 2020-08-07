const actors = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Hero Alm'},
    {id: 41, name: 'DeepJol'},
    {id: 71, name: 'Manna'},
]


const names = actors.map((element) => element.name);
console.log(names);
const ids = actors.map( x => x.id);
console.log(ids);
const bigger = actors.filter(x => x.id > 30);
console.log(bigger);

const finding = actors.find(x => x.id > 30);
console.log(finding);
