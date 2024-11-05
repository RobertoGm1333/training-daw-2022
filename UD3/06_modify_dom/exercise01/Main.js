window.onload = function(e) {
    console.log('documento cargado')

    //Cambiar el título del segundo h2
    document.getElementsByTagName('H2')[1].innerText = 'Changed from JS!!'

    //Seleccionar el elemento con id == username 
    document.getElementById('username')

    //Cambiar el color de todos los .first que estén dentro de un artículo 
    const allFirst = document.querySelectorAll('article .first')

    for (let item of allFirst) {
        item.style['background-color'] = 'green'
    }

    //Seleccionar todos lo elementos li con class == item 
    const allLi = document.querySelectorAll('li .item')

    for (let item of allLi) {
        console.log(item);
    }

    // Seleccionar todos lo buttons dentro de class == buttons 
    const allButtons = document.querySelectorAll('.buttons botton')

    //Cambiar el código de fondo del primer párrafo 
    document.querySelectorAll('p')[0].style
    ['backgorund-color'] = '#ffccff'

    //Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    for(let item of allButtons) {
        item.style.color = 'red';
    }

    let fisrtArticle = document.querySelector('article')

    let node = document.createElement('p')
    node.innerText = 'Hola mundo añadiendo nodos en el árbol DOM'
    node.style['background-color'] = 'grey'
    node.attributes.title = 'Párrafo de ejemplo'

    fisrtArticle.appendChild(node)

    let aNode = document.createElement('a')
    aNode.innerText = 'Enlace de ejemplo'
    aNode.href = 'https://www.google.es'

    node.appendChild(aNode)

    let fullNode = document.createElement('div')
    fullNode.innerHTML = 'Esto es un div de ejemplo que lleva un link <a href="http://www.marca.es"> Marca.es</a>'

    node.appendChild(fullNode)

    firstArticle.appendChild(node)
}