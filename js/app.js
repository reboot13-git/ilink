
let servicesInfo=[
    {
        "imgUrl": "https://img.icons8.com/nolan/64/web.png",
        "heading": "Website Development",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit recusandae rerum ab placeat! At cum atque quos velit ut praesentium esse ipsum sunt quo?",
        "linkText": "Get your own Website now →",
        "id": "web"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/mobile-package-tracking.png",
        "heading": "App Development",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit recusandae rerum ab placeat! At cum atque quos velit ut praesentium esse ipsum sunt quo?",
        "linkText": "Get an App for your business →",
        "id": "app"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/edge-constraint.png",
        "heading": "UI/UX Designing",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit recusandae rerum ab placeat! At cum atque quos velit ut praesentium esse ipsum sunt quo?",
        "linkText": "Get an awesome UI Design →",
        "id": "uiux"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/adobe-illustrator.png",
        "heading": "Graphic Designing",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit recusandae rerum ab placeat! At cum atque quos velit ut praesentium esse ipsum sunt quo?",
        "linkText": "Get your own Website now →",
        "id": "graphd"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/video.png",
        "heading": "Content Writing",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit recusandae rerum ab placeat! At cum atque quos velit ut praesentium esse ipsum sunt quo?",
        "linkText": "Get an App for your business →",
        "id": "vedit"

    },
    {
        "imgUrl": "https://img.icons8.com/nolan/64/edge-constraint.png",
        "heading": "Digital Marketing",
        "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis reprehenderit recusandae rerum ab placeat! At cum atque quos velit ut praesentium esse ipsum sunt quo?",
        "linkText": "Get an awesome UI Design →",
        "id": "conwrt"
    }
]


let scards = document.getElementById("scards")

function displayCard(){
    servicesInfo.forEach(item=> {
scards.innerHTML += `<div class="col "  data-aos="fade-up-right" >
<div class="card" id=${item.id}  >
<img src=${item.imgUrl} alt=${item.heading} />
<h4> ${item.heading} </h4>
<p> ${item.description} </p>
<a href='#temp'>
  <h6>${item.linkText}</h6>
</a>
</div>
</div>`
    })
}

displayCard()
    

