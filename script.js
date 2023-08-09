const personInfos = {
    title:'Um pouco sobre mim',
    text:['Prazer sou João Ricardo moro no interior de Minas Gerais em Lagoa da Prata.','Desenvolvi minhas habilidades na área de programação através do curso de Desenvolvimento Web da TRYBE.','Apartir deste evento me apaixonei por esse mundo e busco sempre aperfeiçoar meus conhecimentos criando projetos pessoais']
}
const skillsInfo = {
    title: 'Tenho conhecimento sobre as seguintes Tecnologias',
    text:['JavaScript','TypeScript','Html','Css','Tailwind','React','Redux','Node','SQL','Express','Docker','Jest','RTL']
}

const projectInfos = [{
    title:'Pokedex',
    text:['Este é um aplicativo Pokedex criado em React que permite ao usuário visualizar informações detalhadas sobre diferentes Pokémons.','O usuário pode favoritar, ver a forma shiny, ver os pokemons da região específica, filtrar por tipagem, ver status, habilidades e uma breve descrição do Pokemon.','Além disso, também é possível buscar Pokémons pelo nome ou número da Pokédex.'],
    repo:'https://github.com/JoaoRViana/pokedex',
    live:'https://joaorvianapokedex.netlify.app',
    image:'./pokedex.gif'
},{
    title:'Mercado Livre',
    text:['É uma plataforma que permite aos usuários pesquisar, visualizar e "comprar" produtos disponíveis na API do Mercado Livre.','Os usuários podem pesquisar produtos na barra de pesquisa do site.','Ao clicar em um produto na lista de resultados da pesquisa, os usuários poderão ver informações detalhadas sobre o produto','Os usuários podem alterar o tema do site. O tema é gerenciado pelo estado global do redux.'],
    repo:'https://github.com/JoaoRViana/mercadoLivre',
    image:'mercadoLivre.gif',
    live:false,
}]

let projectIndex = 0
const divInfos = document.getElementById('infos');
const resetInfos = ()=>{
    divInfos.innerHTML = '';
}

const genTitle= (text)=>{
    const title = document.createElement('h1')
    title.innerHTML = text;
    title.className = 'textMedieval'
    divInfos.appendChild(title);
}

const getInfos = ()=>{
    resetInfos();
    genTitle(personInfos.title)
    const divInfoContainer = document.createElement('div')
    personInfos.text.forEach((e)=>{
        const line = document.createElement('p')
        line.className  = 'textMedieval'
        line.innerHTML = e;
        divInfoContainer.appendChild(line)
    })
    divInfoContainer.className = 'flexCenter'
    divInfos.appendChild(divInfoContainer)
}

const getSkills = ()=>{
    resetInfos();
    genTitle(skillsInfo.title)
    const list = document.createElement('ul');
    skillsInfo.text.forEach((e)=>{
        const line = document.createElement('li');
        line.innerHTML = e;
        list.appendChild(line)
    })
    divInfos.appendChild(list)
}

const createBttnsProject = ()=>{
    const nextProject = document.createElement('button');
    const titleContainer = document.getElementById('titleInfoContainer')
    nextProject.innerHTML = '=>'
    nextProject.className = 'nextBttn'
    nextProject.addEventListener('click',()=>{
        if((projectIndex +1) >= projectInfos.length){
            projectIndex = 0
        }else{
            projectIndex+= 1
        }
        getProjects()
    })
    const previousProject = document.createElement('button');
    previousProject.innerHTML = '<='
    previousProject.className = 'previousBttn'
    previousProject.addEventListener('click',()=>{
        if(projectIndex <= 0 ){
            projectIndex = (projectInfos.length - 1)
        }else{
            projectIndex--
        }
        getProjects()
    })
    titleContainer.appendChild(previousProject)
    titleContainer.appendChild(nextProject);
}

const getProjects = ()=>{
    resetInfos();
    genTitle('Alguns dos meus Projetos:')
    const divTitle = document.createElement('div')
    divTitle.id = 'titleInfoContainer'
    const title = document.createElement('h2');
    title.innerHTML = projectInfos[projectIndex].title
    divTitle.appendChild(title);
    divInfos.appendChild(divTitle)
    createBttnsProject();
    projectInfos[projectIndex].text.forEach((e)=>{
        const line =  document.createElement('p');
        line.innerHTML = e;
        divInfos.appendChild(line)
    })
    const image = document.createElement('img');
    image.src = projectInfos[projectIndex].image;
    divInfos.appendChild(image)
    const linksDiv = document.createElement('div');
    linksDiv.className = 'flexWrapAround'
    const repo = document.createElement('a');
    repo.href = projectInfos[projectIndex].repo;
    repo.target = '_blank'
    repo.innerHTML = 'repositório';
    linksDiv.appendChild(repo)
    if(projectInfos[projectIndex].live){
        const link = document.createElement('a')
        link.href = projectInfos[projectIndex].live
        link.target = '_blank'
        link.innerHTML =  'site'
        linksDiv.appendChild(link)
    }
    divInfos.appendChild(linksDiv)
}

const createLinkedinLink = ()=>{
    const line1 = document.createElement('h3');
    const linkedin = document.createElement('a')
    const linkedinContainer = document.createElement('div');
    linkedin.target = '_blank';
    linkedin.href = 'https://www.linkedin.com/in/joaoricardoviana/'
    linkedin.innerHTML = 'joaoricardoviana'
    line1.innerHTML = `linkedin: `
    linkedinContainer.className = 'flexCenter'
    linkedinContainer.appendChild(line1)
    linkedinContainer.appendChild(linkedin)
    divInfos.appendChild(linkedinContainer)
}

const createEmail = ()=>{
    const line = document.createElement('h3');
    line.innerHTML = 'Email: joaorviana98@gmail.com'
    divInfos.appendChild(line)
}

const createCellNumber=()=>{
    const line = document.createElement('h3');
    line.innerHTML = 'Celular: (37) 99817-2080'
    divInfos.appendChild(line)
}

const createGithub=()=>{
    const line = document.createElement('h3');
    line.innerHTML = 'Github: '
    const github = document.createElement('a')
    const githubContainer = document.createElement('div');
    github.target = '_blank';
    github.href = 'https://github.com/JoaoRViana'
    github.innerHTML = 'JoaoRViana'
    githubContainer.className = 'flexCenter';
    githubContainer.appendChild(line)
    githubContainer.appendChild(github)
    divInfos.appendChild(githubContainer);

}

const getContact = ()=>{
    resetInfos();
    genTitle('Para entrar em contato:')
    createLinkedinLink();
    createEmail();
    createCellNumber();
    createGithub();
}

const infoBttn = document.getElementById('infoBttn');
infoBttn.addEventListener('click',()=>{getInfos()})
const skillsBttn = document.getElementById('skillsBttn')
skillsBttn.addEventListener('click',()=>{getSkills()})
const contactBttn = document.getElementById('contactBttn');
contactBttn.addEventListener('click',()=>{getContact()})
const projectsBttn = document.getElementById('projectsBttn');
projectsBttn.addEventListener('click',()=>{getProjects()})


getInfos();

const styledBorderEffect = ()=>{
    const styledBorder = document.getElementById('SBorder');
    const styledComputed = window.getComputedStyle(styledBorder);
    const color  = styledComputed.getPropertyValue('background')
    const arr = color.split('(');
    const index = arr.map((e,i)=>{
        if(e.includes('deg')){
            return i
        }return false
    }).filter((e)=>(e!== false))
    const secondSplit = arr[index].split('d')
    let border = secondSplit[0];
    if((+border+10) > 360){
        border = 1
    }
    document.documentElement.style.setProperty('--border',`${(+border +10)}deg`)

}
styledBorderEffect();
const timer= setInterval(styledBorderEffect, 100);
