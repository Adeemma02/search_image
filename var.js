const accesskey = "VP_imBO8ScqIOzZKxd7azP1RR6Arqhc6VvN0bByAEHU"
const form = document.querySelector('form');
const  input = document.querySelector('#srh-in');
const  Schresult = document.querySelector('.srh-results');
const  ShowMore = document.querySelector('.shw-m-btn');

let InputData = ''
let page = 1;
async function searchimg(){
    InputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=${accesskey}`
    
    const response= await fetch (url)
    const data = await response.json()
    const results = data.results

    if (page===1){
        Schresult.innerHTML = ''
    }
    results.map((result)=>{
        const imgwrapper = document.createElement('div')
        imgwrapper.classList.add('.srh-result')
        const img =document.createElement('img')
        img.src = result.urls.small
        img.alt = result.alt_description
        const imglink = document.createElement('a')
        imglink.href = result.links.html
        imglink.target = '_blank'
        imglink.textContent= result.alt_description

        imgwrapper.appendChild(img);
        imgwrapper.appendChild(imglink);
        Schresult.appendChild(imgwrapper);
    })
    page++
    if(page > 1){
        ShowMore.style.display = 'block'
    }
}
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    page = 1;
    searchimg()
})
ShowMore.addEventListener('click', ()=>{
    searchimg()
})