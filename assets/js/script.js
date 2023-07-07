//Pega todos os dropdowns do arquivo
const dropdowns = document.querySelectorAll('.dropdown');

//Percorre todos os elementos dropdowns
dropdowns.forEach(dropdown => {
    //Pega os elementos internos de cada menu dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    //Usaremos esse método em ordem para ter os diversos menus dropdowns funcionando na página

    //Adiciona um evento de click para selecionar o elemento
    select.addEventListener('mouseover', () => {
        //Adiciona os estilos selecionados do item clicado para o elemento selecionado
        select.classList.toggle('select-clicked');
        //Adiciona o estilo de rotação para o elemento caret(seta)
        caret.classList.toggle('caret-rotate');
        //Adiciona o estilo de menu aberto para o elemento de menu
        menu.classList.toggle('menu-open');
    })

    //Percorre todos os elementos opções
    options.forEach(option => {
        //Adiciona um evento de click para o elemento opção
        option.addEventListener('click', () => {
            //Altera o inner text selecionado ao clicar na opção inner text
            selected.innerText = option.innerText;
            //Adiciona os estilos selecionados do item clicado para o elemento selecionado
            select.classList.remove('select-clicked');
            //Adiciona o estilo de rotação para o elemento caret(seta)
            caret.classList.remove('caret-rotate');
            //Adiciona o estilo de menu aberto para o elemento de menu
            menu.classList.remove('menu-open');
            //Remove a classe active de todos os elementos de opção
            options.forEach(option => {
                option.classList.remove('active')
            })
            //Adicionar a classe active para o elemento opção clicado
            option.classList.add('active');
        })
    })
})