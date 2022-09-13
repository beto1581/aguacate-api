/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseurl = "https://platzi-avo.vercel.app/"; 
const appNode = document.querySelector('#app');
// web api
window.fetch(`${baseurl}api/avo`)
.then(respuesta => respuesta.json())
.then(RespuestaJson => {
    const todosLosItems = [];
    RespuestaJson.data.forEach(item => {
       
        const image = document.createElement("img");
        image.src  = `${baseurl}${item.image}`;
        const title = document.createElement("h2"); 
        title.textContent = item.name;
        title.className = "text-xl text-red-600";
        const price = document.createElement("div"); 
        price.textContent = item.price;
        const container = document.createElement("div");

        container.append(image, title, price);

        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
});

