let api = document.getElementById("api")
function rest(){

    fetch('https://api.locize.io/5cb00d9b-4921-44a7-b977-8e1e3701e9b9/latest/en/templatesList').then(response=>(response.json())).then(res=>{
        api.innerHTML = res
         console.log(res)})
}

rest()