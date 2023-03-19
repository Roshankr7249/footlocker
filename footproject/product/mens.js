var mens_data = [
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/MR530TA?wid=267&hei=267&fmt=png-alpha",
        name: "New Balance 530",
        desc:"Women's•White/Silver",
        price: 39.00,
        size : ['S','M','L','XL','XXL'],
        color : "Camel 140",
    },
    {
        img_url: "https://images.footlocker.com/is/image/EBFL2/37741102?wid=249&hei=249&fmt=png-alpha",
        name: "PUMA MB.02 Rick & Morty",
        desc:"Men's•Yellow/Green/Multi",
        price: 70.00,
        size : ['S','M','L','XL','XXL'],
        color : "Light Blue 1068",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/84665100?wid=249&hei=249&fmt=png-alpha",
        name: "Jordan Retro 6",
        desc:"Boys' Grade School•White/Grey",
        price: 150.00,
        size : ['S','M','L','XL','XXL'],
        color : "White 1",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/D1029400?wid=249&hei=249&fmt=png-alpha",
        name: "Jordan AJ 1 Mid",
        desc:"Men's•Game Royal/Rush Orange/Phantom White",
        price: 125.00,
        size : ['S','M','L','XL','XXL'],
        color : "Seagreen 2024",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/D0732100?wid=249&hei=249&fmt=png-alpha",
        name: "Nike Dunk Hi",
        desc:"Men's•White/Black/Volt",
        price: 125,
        size : ['S','M','L','XL','XXL'],
        color : "Chalk 134",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/M0966100?wid=249&hei=249&fmt=png-alpha",
        name: "Jordan Retro 3",
        desc:"Boys' Preschool•White/Red/Black",
        price: 40.00,
        size : ['S','M','L','XL','XXL'],
        color : "Seagreen 2024",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/M0968100?wid=249&hei=249&fmt=png-alpha",
        name: "Jordan Retro 3",
        desc:"Boys' Toddler•White/Red/Black",
        price: 75.00,
        size : ['S','M','L','XL','XXL'],
        color : "Jet Black 1956",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/M0967100?wid=249&hei=249&fmt=png-alpha",
        name: "Jordan Retro 3",
        desc:"Boys' Grade School•White/Red/Black",
        price: 80.00,
        size : ['S','M','L','XL','XXL'],
        color : "Stone 2907",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/BBW550BD?wid=249&hei=249&fmt=png-alpha",
        name: "New Balance",
        desc:"Women's White/Purple",
        price: 110.00,
        size : ['S','M','L','XL','XXL'],
        color : "Jet Black 1056",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/BBW550BB?wid=267&hei=267&fmt=png-alpha",
        name: "New Balance 550",
        desc:"Women's•White/Grey",
        price: 110.00,
        size : ['S','M','L','XL','XXL'],
        color : "Stone 123",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/MR530CB?wid=267&hei=267&fmt=png-alpha",
        name: "New Balance 530",
        desc:"Women's•Grey Matter/Harbor Grey",
        price: 100.00,
        size : ['S','M','L','XL','XXL'],
        color : "Neutral Print 24",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/Q6472061?wid=267&hei=267&fmt=png-alpha",
        name: "Jordan AJ 1 Mid",
        desc:"Women's•Black/Red",
        price: 125.00,
        size : ['S','M','L','XL','XXL'],
        color : "chalk 123",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/J3003062?wid=267&hei=267&fmt=png-alpha",
        name: "Jorden Retro 13",
        desc:"Boy's grade",
        price: 150.00,
        size : ['S','M','L','XL','XXL'],
        color : "Neutral Print 24",
    },
    {
        img_url:"https://images.footlocker.com/is/image/EBFL2/V3605100?wid=267&hei=267&fmt=png-alpha",
        name: "Jordan Retro 6",
        desc:"Boys' Preschool•White/Grey",
        price: 90.00,
        size : ['S','M','L','XL','XXL'],
        color : "Awesome 73",
    },
]

displayproduct(mens_data)
function displayproduct(mens_data){
    document.getElementById("parent").innerHTML="";
    mens_data.map(function(el){
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src",el.img_url);
        img.setAttribute("alt",el.name);
        img.setAttribute("class","product_image");
        var desc = document.createElement("p");
        desc.textContent = el.desc;
        var name = document.createElement("h3");
        name.textContent = el.name;
        var price = document.createElement("p");
        price.textContent = "$"+el.price+".00";
        div.addEventListener("click",function(){
            navToNextPage(el);
        });
        div.append(img,desc,name,price);
     document.getElementById("parent").append(div);
    })
    
}
var product_desc = [];
function navToNextPage(product){
    product_desc.push(product);
    localStorage.setItem("decription_data",JSON.stringify(product_desc));
    window.location.href="./mensdesc.html";
}
document.getElementById("sort").addEventListener("change",pricesort);
function pricesort(){
    
    var selected = document.getElementById("sort").value;
    if (selected == "HighToLow") {
        
    var newarr = mens_data.sort(function(a,b){
      return parseInt(b.price) - parseInt(a.price);
    });
    displayproduct(newarr);
    }

    if(selected == "lowToHigh"){
        console.log("helllo");
    var newarr2 = mens_data.sort(function(a,b){
      return parseInt(a.price) - parseInt(b.price);
    });
    displayproduct(newarr2);
    }
    if(selected == ""){
        displayproduct(mens_data);
    }
}
document.getElementById("price_filter").addEventListener("change",filterbyprice);
function filterbyprice(){
    var selected = document.getElementById("price_filter").value;
    if(selected=="30-50"){
        var newarr = mens_data.filter(function(el){
            return (el.price>=30 && el.price<=50)

        })
        displayproduct(newarr);
    }
    if(selected=="50-70"){
        var newarr = mens_data.filter(function(el){
            return (el.price>=50 && el.price<=70)

        })
        displayproduct(newarr);
    }
    if(selected=="70-90"){
        var newarr = mens_data.filter(function(el){
            return (el.price>=70 && el.price<=90)

        })
        displayproduct(newarr);
    }
    if(selected==""){
        displayproduct(mens_data);
    }
}