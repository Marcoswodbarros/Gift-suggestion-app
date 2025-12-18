const gifts = [
    {
        icon: '💼',
        title: 'Bolsa Organizadora para Acessórios Eletrônicos',
        description: 'Organizadora portátil e impermeável para cabos, carregadores, fones e outros acessórios eletrônicos.',
        price: 'R$ 40,10',
        priceRange: '40-50',
        tags: ['Tecnologia', 'Organização'],
        link: 'https://www.amazon.com.br/Organizadora-acess%C3%B3rios-eletr%C3%B4nicos-Port%C3%A1til-Imperme%C3%A1vel/dp/B0DDR5D7MN'
    },
    {
        icon: '📱',
        title: 'Suporte de Mesa para Celular Ugreen',
        description: 'Suporte ajustável de mesa para smartphone de 4.7 a 7.9 polegadas, ideal para videochamadas e assistir conteúdo.',
        price: 'R$ 37,66',
        priceRange: '30-40',
        tags: ['Tecnologia', 'Praticidade'],
        link: 'https://www.mercadolivre.com.br/suporte-de-mesa-telefone-celular-47-a-79-pol-preto-ugreen/up/MLBU772856292'
    },
    {
        icon: '🔌',
        title: 'Organizador de Cabos de Silicone Kit 6un',
        description: 'Kit com 6 organizadores portáteis de silicone para cabos e fios, perfeito para manter tudo arrumado.',
        price: 'R$ 23,70',
        priceRange: '20-30',
        tags: ['Organização', 'Praticidade'],
        link: 'https://produto.mercadolivre.com.br/MLB-4196339077-organizador-de-cabos-e-fios-de-silicone-kit-6un-portatil-_JM'
    },
    {
        icon: '📚',
        title: 'Prateleira Grande Para Livros 90x25cm',
        description: 'Nicho em U de MDF 15mm na cor preta, ideal para organizar livros e decorar ambientes com estilo moderno.',
        price: 'R$ 68,45',
        priceRange: '60-70',
        tags: ['Decoração', 'Organização'],
        link: 'https://www.mercadolivre.com.br/prateleira-grande-para-livros-90x25-nicho-u-mdf-15mm-cor-prateleira-preta/p/MLB44664929'
    },
    {
        icon: '🪜',
        title: '2 Prateleiras Flutuantes 90x25cm + Suporte Invisível',
        description: 'Kit com 2 prateleiras de MDF preto e suportes flutuantes invisíveis, efeito moderno e minimalista para decoração.',
        price: 'R$ 74,25',
        priceRange: '70-80',
        tags: ['Decoração', 'Moderno'],
        link: 'https://www.mercadolivre.com.br/2-prateleiras-90x25-mdf-preto--suporte-flutuante-invisivel/up/MLBU1717162483'
    },
    {
        icon: '📖',
        title: 'Louco Amor - eBook Kindle (Francis Chan)',
        description: 'Livro digital sobre o amor transformador de Deus, bestseller de Francis Chan que inspira reflexão espiritual profunda.',
        price: 'R$ 31,72',
        priceRange: '30-40',
        tags: ['Espiritualidade', 'Leitura'],
        link: 'https://www.amazon.com.br/Louco-amor-Maravilhado-Deus-nunca-ebook/dp/B071VFYDZW'
    },
    {
        icon: '📕',
        title: 'Até que Sejamos Um - eBook Kindle (Francis Chan)',
        description: 'Reflexões poderosas sobre unidade na igreja e relacionamentos cristãos autênticos, outro impactante livro de Francis Chan.',
        price: 'R$ 33,24',
        priceRange: '30-40',
        tags: ['Espiritualidade', 'Leitura'],
        link: 'https://www.amazon.com.br/At%C3%A9-que-sejamos-Francis-Chan-ebook/dp/B09HR1457G'
    },
    {
        icon: '🌵',
        title: 'Cacto Pequeno de Mesa',
        description: 'Cacto decorativo em vaso pequeno, perfeito para decorar mesa de trabalho ou estante. Fácil manutenção e charmoso.',
        price: 'R$ 15 - R$ 35',
        priceRange: '15-35',
        tags: ['Natureza', 'Decoração']
    },
    {
        icon: '🌳',
        title: 'Bonsai',
        description: 'Mini árvore bonsai para cultivo, traz tranquilidade e beleza natural aos ambientes. Presente tradicional e significativo.',
        price: 'R$ 40 - R$ 70',
        priceRange: '40-70',
        tags: ['Natureza', 'Zen']
    }
];

function renderGifts(filter = 'all') {
    const grid = document.getElementById('giftsGrid');
    grid.innerHTML = '';

    let filteredGifts = gifts;

    if (filter !== 'all') {
        const [minFilter, maxFilter] = filter.split('-').map(Number);

        filteredGifts = gifts.filter(gift => {
            const [minPrice, maxPrice] = gift.priceRange.split('-').map(Number);
            // Check if there's any overlap between filter range and price range
            return !(maxPrice < minFilter || minPrice > maxFilter);
        });
    }

    filteredGifts.forEach(gift => {
        const card = document.createElement('div');
        card.className = 'gift-card';

        let buyButton = '';
        if (gift.link) {
            const isMercadoLivre = gift.link.includes('mercadolivre');
            const buttonClass = isMercadoLivre ? 'buy-link ml-link' : 'buy-link';
            const buttonText = isMercadoLivre ? '🛒 Ver no Mercado Livre' : '🛒 Ver na Amazon';
            buyButton = `<a href="${gift.link}" target="_blank" class="${buttonClass}">${buttonText}</a>`;
        }

        card.innerHTML = `
                    <div class="gift-icon">${gift.icon}</div>
                    <h3 class="gift-title">${gift.title}</h3>
                    <p class="gift-description">${gift.description}</p>
                    <div class="gift-price">${gift.price}</div>
                    ${buyButton}
                    <div class="gift-tags">
                        ${gift.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                `;
        grid.appendChild(card);
    });
}

// Event listeners para os filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderGifts(this.dataset.filter);
    });
});

// Renderizar todos os presentes inicialmente
renderGifts();