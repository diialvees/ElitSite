/*document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile (para telas pequenas)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.classList.add('mobile-menu-button');
    
    const mainNav = document.querySelector('.main-nav');
    const mainNavContainer = document.querySelector('.main-nav .container');
    
    // Adiciona o botão do menu mobile
    mainNavContainer.prepend(mobileMenuButton);
    
    // Toggle do menu mobile
    mobileMenuButton.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Carregar mais notícias
    const loadMoreButton = document.querySelector('.load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Simular carregamento de mais notícias
            this.textContent = 'Carregando...';
            this.disabled = true;
            
            setTimeout(() => {
                // Aqui você faria uma requisição AJAX para carregar mais notícias
                // Por enquanto, apenas um exemplo simulando
                const newsGrid = document.querySelector('.news-grid');
                const newArticle = document.createElement('article');
                newArticle.classList.add('news-card');
                newArticle.innerHTML = `
                    <img src="images/news${Math.floor(Math.random() * 4) + 1}.jpg" alt="Novo artigo">
                    <div class="news-content">
                        <div class="category-tag">Novo</div>
                        <h3><a href="#">Nova notícia carregada dinamicamente</a></h3>
                        <p class="meta">Por <a href="#">Redação</a> - Agora</p>
                        <p>Esta é uma notícia carregada via JavaScript quando você clicou no botão "Carregar Mais".</p>
                    </div>
                `;
                
                newsGrid.appendChild(newArticle);
                this.textContent = 'Carregar Mais Notícias';
                this.disabled = false;
                
                // Rolagem suave para o novo item
                newArticle.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        });
    }
    
    // Slider de reviews - navegação
    const reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        reviewsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - reviewsSlider.offsetLeft;
            scrollLeft = reviewsSlider.scrollLeft;
        });
        
        reviewsSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        reviewsSlider.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        reviewsSlider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - reviewsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            reviewsSlider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // Efeito hover nos cards de vídeo
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const thumbnail = card.querySelector('.video-thumbnail');
        const playButton = card.querySelector('.play-button');
        
        card.addEventListener('mouseenter', () => {
            thumbnail.style.transform = 'scale(1.05)';
            playButton.style.transform = 'scale(1.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            thumbnail.style.transform = 'scale(1)';
            playButton.style.transform = 'scale(1)';
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email && email.includes('@')) {
                // Simular envio
                this.innerHTML = '<p class="success-message">Obrigado por se inscrever!</p>';
                
                // Aqui você faria uma requisição AJAX para seu backend
                console.log('Email cadastrado:', email);
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }
    
    // Atualizar a data atual na top bar
    const dateElement = document.querySelector('.top-bar .date');
    if (dateElement) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('pt-BR', options);
    }
})*/

function atualizarRelogio() {
    const agora = new Date();
    
    // Formata a data
    const opcoesData = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
    
    // Formata a hora
    const opcoesHora = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };
    const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);
    
    // Exibe no elemento
    document.getElementById('relogio').innerHTML = 
        `${dataFormatada}<br>${horaFormatada}`;
}

// Atualiza imediatamente e depois a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

