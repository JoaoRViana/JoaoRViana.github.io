import pokedexGif from '../../public/projectGifs/pokedex.gif'
import pokeCardGif from '../../public/projectGifs/pokeCard.gif'
import mercadoLivreGif from '../../public/projectGifs/mercadoLivre.gif'
import forcaGif from '../../public/projectGifs/forca.gif'
import frontCertificate from '../../public/certificates/certificado_front.png';
import fullStackCertificate from '../../public/certificates/certificado_fullStack.png';
import backCertificate from '../../public/certificates/certificado_back.png';
import javaCertificate from '../../public/certificates/certificado_java.png';
import csCertificate from '../../public/certificates/certificado_cs.png';



const links = {
    front:'https://www.credential.net/1a47ef49-1409-4c39-a4cc-4b41eb622468#gs.3cp1d5',
    full:'https://www.credential.net/4900b592-b687-4b82-909b-2818c236a25c#gs.3co10p',
    java:'https://www.credential.net/d85d37d7-85a1-4bd0-bc6d-536c03ad9617#gs.3co3kc',
    cs:'https://www.credential.net/5c03a8a6-a40a-4d94-8254-8d4c75e049b0#gs.3co60n',
    back:'https://www.credential.net/873548b9-d338-4109-84b7-797ef88f4ee0#gs.3co8ih',
}

export const allProjects = [
    {
        title:"Pokédex",
        description:"Este é um aplicativo Pokedex criado em React que permite ao usuário visualizar informações detalhadas sobre diferentes Pokémons. O usuário pode favoritar, ver a forma shiny, ver os pokemons da região específica, filtrar por tipagem, ver status, habilidades e uma breve descrição do Pokemon. Além disso, também é possível buscar Pokémons pelo nome ou número da Pokédex.",
        image:pokedexGif,
        deploy:"https://pokedex-joaorviana.vercel.app",
        repositorio:"https://github.com/JoaoRViana/pokedex",
    },
    {
        title:"ShoppingCart",
        description:"O site de compras é uma plataforma que permite aos usuários pesquisar, visualizar e 'comprar' produtos disponíveis na API do Mercado Livre. Ele utiliza o React como biblioteca de desenvolvimento de interfaces de usuário, o Redux para gerenciar o estado global da aplicação e o Tailwind CSS para estilizar os componentes.",
        image:mercadoLivreGif,
        deploy:null,
        repositorio:"https://github.com/JoaoRViana/shoppingCart",
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
    }
]

export const allCertificates = [{
    title: 'Certificado Front-End',
    image: frontCertificate,
    link: links.front
},{
    title: 'Certificado Back-End',
    image: backCertificate,
    link: links.back
},{
    title:'Certificado Ciência da Computação',
    image: csCertificate,
    link: links.cs,
},{
    title: 'Certificado Java',
    image: javaCertificate,
    link: links.java
},{
    title: 'Certificado Full-Stack',
    image:fullStackCertificate,
    link:links.full
}]