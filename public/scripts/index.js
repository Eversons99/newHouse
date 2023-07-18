    // FRONT
        // Esconder as listas  -- OK
        // Coletar items selecionados -- OK
        // Mostrar o forms para preenchimento -- OK
        // Criar um regex para validar o telefone -- OK
        // Cerregar liste de forma dinâmica -- OK
    
    // BACK
        // Criar rota para inserir items -- OK
        // Renderizar items disponíveis -- OK
        // Atualizar banco -- OK
        // Criar alert informando que o dado foi atualizado -- OK
        // Dar um reload na página para buscar dados atualizados -- OK
async function loadList(){
    try {
        const redirectedUser = localStorage.getItem("redirect")
        const checkError = localStorage.getItem("error")
 
        let listUnavailable = await fetch('http://192.168.18.23:8100/app/list')
        listUnavailable = await listUnavailable.json()

        if(!listUnavailable || listUnavailable.length == 0) return alert('Lista vazia retornada do banco, utilize a API para inserir sua lista de presentes')
        
        renderList(listUnavailable)

        if (checkError == 'true' && redirectedUser == 'true'){
            showAlert('.my-alert-error')
        
        } else if (checkError == 'false' && redirectedUser == 'true') {
            showAlert('.my-alert-success')
        }

    } catch (error) {
        console.log(error)
        alert('Ocorreu um erro ao carregar as lista')
    }
    
    window.localStorage.removeItem('redirect','error')
}

function renderList(items){
    const containerAvailable = document.querySelector('#list-unavailable')
    const containerUnavailable = document.querySelector('#list-available')

    items.forEach(item => {
        const liElement = document.createElement('li')
        const inputElement = document.createElement('input')
        const itemName = item.name

        if (item.status == 'unavailable') {
            liElement.setAttribute('class', 'list-group-item')
            inputElement.setAttribute('type', 'checkbox')
            inputElement.setAttribute('class', 'm-2')
            inputElement.classList.add('unavailable')
            inputElement.disabled = true
            inputElement.checked = true
     
            containerAvailable.appendChild(liElement)
            liElement.append(inputElement, itemName)
            
        } else {
            liElement.setAttribute('class', 'list-group-item')
            inputElement.setAttribute('type', 'checkbox')
            inputElement.setAttribute('class', 'm-2')
            inputElement.classList.add('available')

            containerUnavailable.appendChild(liElement)
            liElement.append(inputElement, itemName)
        }
    }) 
}

function showAlert(selector){
    const alert = document.querySelector(selector)
    alert.style.display = "flex"
 
    setInterval(()=>{
        alert.style.display = "none"
    }, 5000) 
}

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

    button.disabled = true;
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

    let saveDevice = await fetch('http://192.168.18.23:8100/owner/save', options)
    saveDevice = await saveDevice.json()

    if (saveDevice.message == "Dados registrados com sucesso"){
        window.localStorage.setItem('redirect', 'true')
        window.localStorage.setItem('error', 'false')
        window.location = 'http://192.168.18.23:8100/index.html'

    } else {        
        window.location = 'http://192.168.18.23:8100/index.html'
        window.localStorage.setItem('redirect', 'true')
        window.localStorage.setItem('error', 'true')
    }
}

