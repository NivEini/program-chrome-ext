let api = document.getElementById("api")
function rest(){

    fetch('https://sapjira.wdf.sap.corp/rest/api/latest/issue/EUXTEAMNILI-3040').then(response=>(response.json())).then(res=>{
        api.innerHTML = res})
}

rest()