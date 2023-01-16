
const $fragment = document.createDocumentFragment();


// async function getData(name){

//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+name)
//     const data =await response.json();

//     const $img = document.createElement('img')
//     $img.setAttribute('src', data.sprites.other.home.front_default);
//     const $contanier = document.querySelector('.container');
//     $contanier.appendChild($img);
    

// }

// async function getAllData(){

//     let response = await fetch('https://pokeapi.co/api/v2/pokemon')
//     let data =await response.json(); 

//     data.results.forEach(element => {
//         getData(element.name)
//     }); 
    
//     while(data.next != null){
//         response = await fetch(data.next)
//         data =await response.json();
//         data.results.forEach(element => {
//             getData(element.name)
//         });  
//     } 

// }

// getAllData()


async function getData(){

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    const data =await response.json();   


    const $img = document.createElement('img')
    $img.setAttribute('src', data.sprites.other.home.front_default);
    const $contanier = document.querySelector('.container');
    $contanier.appendChild($img);

    //id
    console.log(data.id)

    //name
    console.log(data.name)

    //weight
    console.log(data.weight/10);

    // height
    console.log(data.height/10)

    //type
    data.types.forEach(element => {
                    console.log(element.type.name)
    });
    

    //stats
    data.stats.forEach( element => {
        console.log(element.stat.name)
        console.log(element.base_stat)

    })
}

getData()