import pokedexGif from '../../public/projectGifs/pokedex.gif'
import pokeCardGif from '../../public/projectGifs/pokeCard.gif'
import mercadoLivreGif from '../../public/projectGifs/mercadoLivre.gif'
import forcaGif from '../../public/projectGifs/forca.gif'

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