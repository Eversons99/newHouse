    // Esconder as listas  -- OK
    // Coletar items selecionados -- OK
    // Mostrar o forms para preenchimento -- OK
    // Criar um regex para validar o telefone -- OK
    // Atualizar banco -- OK
    // Dar um reload na página para buscar dados datualizados

function markOptions(){
    const form = document.querySelector('.form')
    const lists =  document.querySelector('.lists')
    const selectedItems = getMarkedItems()

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
}

function changeText(){
    const buttonContent = document.querySelector('#btn-items')
    
    if (buttonContent.textContent.trim() == 'Ver itens reservados') {
        buttonContent.textContent = 'Ocultar itens reservados'
    } else {
        buttonContent.textContent = 'Ver itens reservados'
    }

}

function getMarkedItems(){
    const allItems = document.querySelectorAll('.available')
    const selectedItems = []

    allItems.forEach((item) => {
        if (item.checked) {
            let parentItem = item.parentNode
            selectedItems.push(parentItem.textContent)
        }
    })

    return selectedItems
}

async function validateForm(){
    const button = document.querySelector('#btn-confirm')
    const name = document.querySelector('#name').value.trim()
    const whatsapp = document.querySelector('#whats').value
    const regexName = /\d/
    const regexWhats = '^[0-9]{2}[0-9]{9}$'

    if (name.match(regexName) || !name) {
        return alert('O campo Nome não pode conter números e não pode estar em branco!!!')
    } else if (!whatsapp.match(regexWhats)) {
        return alert('No campo WhatsApp coloque apenas o DD e o número do WhatsApp, não insira espaço ou caracteres especiais. Exemplo 11961027676')
    } 

    //button.disabled = true;
    const gifts = getMarkedItems()
    
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            whatsapp,
            gifts
        })
    }

    let saveDevice = await fetch('http://192.168.18.23:8100/user/save', options)
    saveDevice = await saveDevice.json()
    console.log(saveDevice)
    if (saveDevice.message == "Dados registrados com sucesso"){
        const alert = document.querySelector('.my-alert-success')
        alert.style.display = "flex"
        
        // setInterval(() => {
        //     alert.style.display = "none" 
        // }, 3000);
    }
}

