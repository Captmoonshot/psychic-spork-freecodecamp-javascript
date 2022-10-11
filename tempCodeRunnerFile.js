const myObjects1 = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'},
    {
        id: 'b',
        name: 'Sammy'
    }
];
const foundIndex1 = myObjects1.findIndex(item => item.id === 'b' && item.name === 'Sammy');
console.log(foundIndex1);
