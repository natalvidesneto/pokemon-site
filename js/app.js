// Dados da API fornecidos
const pokemonData = {
    abilities: [
        {
            ability: {
                name: "overgrow",
                url: "https://pokeapi.co/api/v2/ability/65/"
            },
            is_hidden: false,
            slot: 1
        },
        {
            ability: {
                name: "shell-armor",
                url: "https://pokeapi.co/api/v2/ability/75/"
            },
            is_hidden: true,
            slot: 3
        }
    ],
    forms: [
        {
            name: "turtwig",
            url: "https://pokeapi.co/api/v2/pokemon-form/387/"
        }
    ],
    name: "turtwig",
    order: 387,
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/387.png",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/387.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/387.png",
    }
};

// Função para carregar os dados da API
document.getElementById('loadData').addEventListener('click', function() {
    // Atualizar informações básicas
    const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    document.getElementById('pokemon-name').textContent = pokemonName;
    document.getElementById('pokemon-order').textContent = `#${pokemonData.order}`;
    
    // Criar efeito visual
    const button = this;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="bi bi-check2 me-2"></i>Dados Carregados!';
    button.classList.remove('btn-light');
    button.classList.add('btn-success');
    
    // Adicionar animação ao card principal
    const mainImage = document.getElementById('main-sprite');
    mainImage.style.animation = 'pulse 1s';
    
    // Reset após 2 segundos
    setTimeout(() => {
        mainImage.style.animation = '';
    }, 1000);
    
    // Reset do botão após 3 segundos
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('btn-success');
        button.classList.add('btn-light');
    }, 3000);
});

// Adicionar smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar efeito de scroll na navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(46, 125, 50, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(46, 125, 50, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});