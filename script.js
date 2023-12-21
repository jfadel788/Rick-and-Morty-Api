// const api= "https://rickandmortyapi.com/api/character/"

// async function  getData(){
//     try {
//         const response= await fetch(api)
//         const data = await response.json()
//         printData(data)
        
//     } catch (e) {
//         console.log("Error: ",e.message)
        
//     }

// }
// function printData(data){
//     const header= document.querySelector("#actor")
//     const content= document.querySelector("#content")
//     console.log(data)
//     header.innerHtml +=
//     `
//     <select class="form-control" onchange="getCh(this.value)">
//       <option> Please Selecte</option>
   

//       </select>
//     `

// }
// getData()
const api="https://rickandmortyapi.com/api/character/"
async function get(){
    try {
    const response= await fetch(api)
    const data= await response.json()
    console.log(data)
    PrintData(data)}
    catch(e){ console.log("Error: ",e.message)}
}

  function PrintData(data){
    const header= document.querySelector("#actor")
    const content= document.querySelector("#content")


    header.innerHTML +=  `
    <select id="select" class="form-control" onchange="getCh(this.value)">
     <option>Please selecte one</option>
    ${
       

        data.results.map(actor => `<option>${actor.name}</option>`)

    }

    </select>
       
    
    `}
    async function getCh(name){
        const response=  await fetch(`${api}?name=${name}`)
        const data= await response.json()
        console.log(data)
        if(name != "Please selecte one"){
        content.innerHTML=
        `
        <h2> ${data.results[0].name} ${data.results[0].gender} </h2>
        <img src="${data.results[0].image}" widith="250">

        `}
        else{
            console.log("wrong")
        }
    }
    get()