let data =[
    {
        name: "Jasmine",
        age: "42"

    },
    {
        name: "Kate",
        age: "32"   
    },
    {
        name: "Tom",
        age: "62"
    },
    {
        name: "Joe",
        age: "41"
    },
    {
        name: "Jane",
        age: "32"  
    },
    {
    name: "Zasmin",
    age: "22"
    },
    {
        name: "Zine",
        age: "40"
    },
{
        name: "Peston",
        age: "42"

    },

];

const info = document.querySelector('#info')

let details = data.map(function(item){
  return'<div>' + item.name +' '+ 'is ' + item.age +
  ' years old'+' </div>';
});


info.innerHTML = details.join('\n');