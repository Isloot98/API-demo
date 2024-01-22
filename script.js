    const accessKey = 'QWFxqc-GzSUSNUUSSq9Y2CA0ahEURdbVJVCnImj-x-Y'
    const imageContainer = document.querySelector('.img-container');
    
    const form = document.getElementById('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let query = e.target.input.value;
        search(query);
    })


const search = async (queryParam) => {
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=${accessKey}`)
    console.log(response);
    let data = await response.json();
    console.log(data.results);


    imageContainer.innerHTML = '';

    for (let i = 0; i < data.results.length; i++) {
    let img = document.createElement('img');
    img.src = data.results[i].urls.regular;
    imageContainer.appendChild(img);
    }

}