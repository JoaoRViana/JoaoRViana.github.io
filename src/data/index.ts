import pokedexGif from '../../public/projectGifs/pokedex.gif'
import pokeCardGif from '../../public/projectGifs/pokeCard.gif'
import forcaGif from '../../public/projectGifs/forca.gif'
import fullStackCertificate from '../../public/certificates/certificado_fullStack.png';
import googleCertificate from '../../public/certificates/certificado_google.jpg';
import dioCertificate from '../../public/certificates/certificado_dio_angular.png';
import serviceNowCertificate from '../../public/certificates/certificado_service_now.png';

export const allProjects = [
    {
        title:"Check-in",
        description:"Esta é uma ferramenta de disponibilidade desenvolvida para desenvolvedores, que permite indicar claramente sua disponibilidade no trabalho. Dentro da plataforma, você encontrará uma interface intuitiva, onde poderá fazer check-in para indicar que está ativo e disponível para receber tarefas ou mudar seu status para 'BRB' se precisar de uma pausa ou não estiver disponível.",
        image:null,
        deploy:null,
        repositorio:"https://github.com/lexart-labs/check-in"
    },
    {
        title:"Pokédex",
        description:"Este é um aplicativo Pokedex criado em React que permite ao usuário visualizar informações detalhadas sobre diferentes Pokémons. O usuário pode favoritar, ver a forma shiny, ver os pokemons da região específica, filtrar por tipagem, ver status, habilidades e uma breve descrição do Pokemon. Além disso, também é possível buscar Pokémons pelo nome ou número da Pokédex.",
        image:pokedexGif,
        deploy:"https://pokedex-joaorviana.vercel.app",
        repositorio:"https://github.com/JoaoRViana/pokedex",
    },
    {
        title:"PokeCard",
        description:"Esta aplicação permite que você desfrute de uma experiência de jogo de cartas virtual com suas cartas Pokémon. Você pode criar, editar e gerenciar decks, participar de duelos e colecionar várias cartas Pokémon.",
        image:pokeCardGif,
        deploy:"https://pokecard-joaorviana.vercel.app",
        repositorio:"https://github.com/JoaoRViana/pokeCard",
    },
    {
        title:"Forca",
        description:"Este é um aplicativo simples que permite jogar o clássico jogo da forca.",
        image:forcaGif,
        deploy:"https://forca-joaorviana.vercel.app",
        repositorio:"https://github.com/JoaoRViana/forca",
    },{
    title:"PokeCardAPI",
    description:"Este projeto oferece uma API construída com Node.js e Express para gerenciar um banco de dados SQL. A aplicação inclui recursos para registro e autenticação de usuários, gerenciamento de cartas e decks",
    image:null,
    deploy:null,
    repositorio:"https://github.com/JoaoRViana/pokeCardApi",
    },
]

export const allCertificates = [{
    title: 'Certificado Full-Stack',
    image:fullStackCertificate,
    link:'https://www.credential.net/4900b592-b687-4b82-909b-2818c236a25c#gs.3co10p'
},{
    title: 'Certificado Profissional de Análise de Dados do Google',
    image:googleCertificate,
    link:'https://www.coursera.org/account/accomplishments/specialization/certificate/YGYAKGHX8QLL',
},{
    title: 'Certificado Bootcamp Shark in ServiceNow',
    image: serviceNowCertificate,
    link:'https://drive.google.com/file/d/1t6wHdz6dgpn9AItS582l7ZWcN7886J0x/view'
},{
    title: 'Certificado Deal - Spring Boot e Angular',
    image:dioCertificate,
    link:'https://drive.google.com/file/d/1aXYuUilgA95b5ch8ef7K_vWs3XmV9A-N/view?usp=drive_link'
}]