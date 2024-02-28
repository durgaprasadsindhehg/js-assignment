let url='https://fakestoreapi.com/products'
fetch(url).then(res=>res.json())
.then(json=>{
    let table=document.getElementById('table1')
    for(let product of json){
    table.innerHTML+=`
    <thead>
    <tr>
        <th class="p-3" style="text-align: center;">Id</th>
        <th  class="p-3" style="text-align: center;">title</th>
        <th  class="p-3" style="text-align: center;">Description</th>
        <th  class="p-3" style="text-align: center;">image</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td style="text-align: center;">${product.id}</td>
        <td style="text-align: center;">${product.title}</td>
        <td style="text-align: center;">${product.description}r</td>
        <td style="text-align: center;"><img src="${product.image}" width="200px" height="150px"/></td>

    </tr>
    </tbody>`
    }
})
