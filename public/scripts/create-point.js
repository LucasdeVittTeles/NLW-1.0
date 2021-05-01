

function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}


populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}



document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// res=> res.json() é uma function simples, tipo quando retorna uma linha e tem um parametro

// Itens de Coleta

const itemsOfCollect = document.querySelectorAll(".itensGrid li")
for (let item of itemsOfCollect) {
    item.addEventListener("click", handItemSelected)
}

const collectedItems = document.querySelector("input[name=Items]")

let selectedItems = []
 

function handItemSelected(event) {

    let itemLi = event.target
    // adicionar ou remover classe em JS

    // add()
    // remove()
    // toggle()

    itemLi.classList.toggle("selected")

    let itemId = itemLi.dataset.id;

    console.log('ITEM-ID:', itemId)
    // vereficar se existem itens selecionados, se sim pegar todos os itens selecionados

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //isso sera true ou false
        return itemFound
    })

    if (alreadySelected >= 0) {
        //se ja estiver selecionado
        //tirar da selecao
        let filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        // se nao tiver sendo selecionado, adicionar a selecao 
        selectedItems.push(itemId)
    }

    console.log('selectedItems: ', selectedItems)
    //atualizar o campo escondido com os itens selecionados

    collectedItems.value = selectedItems
    
}