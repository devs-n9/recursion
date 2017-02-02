var products = [
    {
        name: "Smartphones",
        url: "#smart",
        subproduct: [
            {
                name: "Samsung",
                url: "#samsung",
                subproduct: [
                        {
                            name: "Galaxy",
                            url: "#galaxy",
                            subproduct: [
                                {
                                    name: "G300",
                                    url: "#g300",
                                    subproduct: []
                                }
                            ]
                        },
                        {
                            name: "A",
                            url: "#a",
                            subproduct: []
                        }
                ]
            },
            {
                name: "LG",
                url: "#lg",
                subproduct: []
            },
            {
                name: "Asus",
                url: "#asus",
                subproduct: []
            },
            {
                name: "Acer",
                url: "#acer",
                subproduct: []
            }
            
        ]
    },
    {
        name: "Tabs",
        url: "#tabs",
        subproduct: [
            {
                name: "Apple",
                url: "#aple",
                subproduct: []
            },
            {
                name: "Meizu",
                url: "#meizu",
                subproduct: []
            }
        ]
    },
    {
        name: "Laptops",
        url: "#laptops",
        subproduct: []
    },
];


var html = '';
function showProducts(product){
    html += "<ul>";
    for(var i in product){
        html += "<li><a href='"+product[i].url + "' > " + product[i].name + " </a>";
        if(product[i].subproduct.length != 0){
            showProducts(product[i].subproduct);
        }
        html += "</li>";
    }
    html += "</ul>";
    
    return html;
}


document.body.innerHTML = showProducts(products);