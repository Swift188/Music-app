const app = document.querySelector('#app');

function addLinks() {
    const hrefs = document.querySelectorAll('a');c
    console.log(hrefs);
    hrefs.forEach((a) => {
        a.addEventListener('click', async (e) => {
            e.preventDefault();
            
            if(a.href != null) {
                const res = await fetch(a.href);
                const data = res.body()
                app.innerHTML = data
            }
        })
    })
}

addLinks();
