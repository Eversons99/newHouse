function markOptions(){
    const form = document.querySelector('.form')
    const lists =  document.querySelector('.lists')
    const allItems = document.querySelectorAll('.available')
    const selectedItems = []

    allItems.forEach((item) => {
        if (item.checked) {
            let parentItem = item.parentNode
            selectedItems.push(parentItem.textContent)
        }
    })

    if (selectedItems != 0) {
        const showItem = document.querySelector('.selected-items')
        const emptyList = document.createElement('ul')

        for (const item of selectedItems) {
            const listItem = document.createElement('li')
            listItem.textContent = item
            listItem.setAttribute('class', 'list-group-item')

            emptyList.appendChild(listItem)
        }
        emptyList.setAttribute('class', 'list-group')

        showItem.appendChild(emptyList)
        lists.style.display = 'none'
        form.style.display = 'block'
    } 

    // Esconder as listas  -- OK
    // Coletar items selecionados -- OK
    // Mostrar o forms para preenchimento -- OK
    // Criar um regex para validar o telefone
    // Atualizar banco
    // Dar um reload na página
}
