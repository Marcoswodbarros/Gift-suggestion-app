const giftsData = {
    marcos: [
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
            icon: '📗',
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
    ],
    marta: [
        {
            icon: '📦',
            title: 'Caixa Organizadora Pequena Dobrável',
            description: 'Caixa em algodão-linho bege com zíper duplo, natural e respirável para roupas íntimas e acessórios.',
            price: 'R$ 56,99',
            priceRange: '50-60',
            tags: ['Organização', 'Casa'],
            link: 'https://www.amazon.com.br/dp/B0FJS89TQX/?coliid=I1HXJRSYP2D66S&colid=1N49P7F30TX98&ref_=list_c_wl_lv_vv_lig_dp_it&th=1'
        },
        {
            icon: '📙',
            title: 'Cartas de um Diabo a seu Aprendiz',
            description: 'Clássico de C.S. Lewis sobre tentação e natureza humana através de cartas entre demônios.',
            price: 'R$ 31,74',
            priceRange: '30-40',
            tags: ['Literatura', 'Espiritualidade'],
            link: 'https://www.amazon.com.br/dp/857860184X/?coliid=I32Z8ZEPOOF7IS&colid=1N49P7F30TX98&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '💧',
            title: 'PRINCIPIA Sérum Ácidos Hialurônicos + Vitamina B5',
            description: 'Sérum hidratante antissinais com 2% de ácidos hialurônicos e vitamina B5, 30ml.',
            price: 'R$ 53,46',
            priceRange: '50-60',
            tags: ['Beleza', 'Skincare'],
            link: 'https://www.amazon.com.br/dp/B08N18SRNJ/?coliid=I1JFLVB1SJFD7F&colid=1N49P7F30TX98&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📘',
            title: 'Experiência do Lar (Edição Memorial)',
            description: 'Como tornar sua casa um lugar de amor e paz, guia prático para transformar o lar.',
            price: 'R$ 84,21',
            priceRange: '80-90',
            tags: ['Casa', 'Família'],
            link: 'https://www.amazon.com.br/dp/6556896314/?coliid=IKUYPMFHZI8BL&colid=1N49P7F30TX98&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📕',
            title: 'A Experiência da Mesa',
            description: 'O segredo para criar relacionamentos profundos através das refeições compartilhadas.',
            price: 'R$ 37,20',
            priceRange: '30-40',
            tags: ['Relacionamentos', 'Família'],
            link: 'https://www.amazon.com.br/dp/6586027810/?coliid=IRMEVE4FGD6GZ&colid=1N49P7F30TX98&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it_im'
        },
        {
            icon: '📗',
            title: 'Rápido e Devagar: Duas Formas de Pensar',
            description: 'Daniel Kahneman explora os dois sistemas que moldam nosso pensamento e tomadas de decisão.',
            price: 'R$ 78,84',
            priceRange: '70-80',
            tags: ['Psicologia', 'Desenvolvimento'],
            link: 'https://www.amazon.com.br/dp/853900383X/?coliid=I2QVQOAUGQTL46&colid=1N49P7F30TX98&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it_im'
        }
    ],
    jamenson: [
        {
            icon: '📙',
            title: 'Idolatria Política: Como Governos se Tornam Deuses',
            description: 'Análise crítica sobre como sistemas políticos podem assumir características religiosas na sociedade moderna.',
            price: 'R$ 74,24',
            priceRange: '70-80',
            tags: ['Política', 'Filosofia'],
            link: 'https://www.amazon.com.br/dp/6599777864/?coliid=I3IGRIFVTRE0LH&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📘',
            title: 'Estatística: O que é, para que serve, como funciona',
            description: 'Guia completo e acessível sobre estatística, seus fundamentos e aplicações práticas.',
            price: 'R$ 69,93',
            priceRange: '60-70',
            tags: ['Estatística', 'Educação'],
            link: 'https://www.amazon.com.br/dp/8537815128/?coliid=I1TDB3S0S4WDOO&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it_im'
        },
        {
            icon: '📗',
            title: 'Comece pelo Porquê',
            description: 'Como grandes líderes inspiram pessoas e equipes a agir. Bestseller de Simon Sinek sobre liderança.',
            price: 'R$ 45,57',
            priceRange: '40-50',
            tags: ['Liderança', 'Negócios'],
            link: 'https://www.amazon.com.br/dp/854310663X/?coliid=I1Z70F6XQKPC8P&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📕',
            title: 'A Arte de Gastar Dinheiro',
            description: 'Escolhas simples para uma vida equilibrada. Do mesmo autor de "A psicologia financeira".',
            price: 'R$ 29,00',
            priceRange: '20-30',
            tags: ['Finanças', 'Lifestyle'],
            link: 'https://www.amazon.com.br/dp/6555117656/?coliid=IFCVTRCMW1JSY&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📙',
            title: 'O Almanaque de Naval Ravikant',
            description: 'Um guia para a riqueza e a felicidade com princípios de um dos maiores investidores do Vale do Silício.',
            price: 'R$ 39,80',
            priceRange: '30-40',
            tags: ['Desenvolvimento', 'Investimentos'],
            link: 'https://www.amazon.com.br/dp/6555605502/?coliid=I1ZLSWUFS964JD&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📗',
            title: 'Sem Esforço: Torne Mais Fácil o que é Mais Importante',
            description: 'Estratégias para simplificar a vida e focar no que realmente importa com menos esforço.',
            price: 'R$ 39,04',
            priceRange: '30-40',
            tags: ['Produtividade', 'Lifestyle'],
            link: 'https://www.amazon.com.br/dp/6555641932/?coliid=IXA3ARMI4R6GD&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📘',
            title: 'Estudos Sobre O Amor',
            description: 'Reflexões filosóficas profundas sobre a natureza do amor e suas manifestações na vida humana.',
            price: 'R$ 52,57',
            priceRange: '50-60',
            tags: ['Filosofia', 'Relacionamentos'],
            link: 'https://www.amazon.com.br/dp/8595071063/?coliid=IUT5ALFO93CWX&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '📕',
            title: 'Os Primeiros Investimentos de Buffet',
            description: 'Uma nova investigação sobre as décadas em que Warren Buffett obteve os melhores retornos.',
            price: 'R$ 44,84',
            priceRange: '40-50',
            tags: ['Investimentos', 'Finanças'],
            link: 'https://www.amazon.com.br/dp/8550825603/?coliid=I3U4SLLJB3QLTI&colid=3LZ81WULJNSZ&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        }
    ],
    ingrid: [
        {
            icon: '🖌️',
            title: 'EUDORA NIINA SECRETS Pincel Multifuncional',
            description: 'Pincel Duo Fiber super macio e multifuncional para base, corretivo, blush e contorno.',
            price: 'R$ 49,90',
            priceRange: '40-50',
            tags: ['Beleza', 'Maquiagem'],
            link: 'https://www.amazon.com.br/dp/B0DCHD2SLZ/?coliid=I1ZJ6UAXXIZROR&colid=3JBCT8QVI1IQM&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '💄',
            title: 'NIINA SECRETS Pincel Base Kabuki',
            description: 'Pincel kabuki profissional para aplicação perfeita de base com acabamento uniforme.',
            price: 'R$ 52,90',
            priceRange: '50-60',
            tags: ['Beleza', 'Maquiagem'],
            link: 'https://www.amazon.com.br/dp/B0DCHKYP3T/?coliid=I5UTFHYWGNSCP&colid=3JBCT8QVI1IQM&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '✨',
            title: 'NIINA SECRETS Pincel Blush',
            description: 'Pincel macio e preciso para aplicação profissional de blush com efeito natural.',
            price: 'R$ 63,04',
            priceRange: '60-70',
            tags: ['Beleza', 'Maquiagem'],
            link: 'https://www.amazon.com.br/dp/B0DCHD3F7B/?coliid=I2PKQI78NABGPM&colid=3JBCT8QVI1IQM&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '💅',
            title: 'Eudora Base Líquida Niina Secrets Hidra Glow',
            description: 'Base líquida cor 10 com efeito hidratante e glow natural, 30ml.',
            price: 'R$ 60,77',
            priceRange: '60-70',
            tags: ['Beleza', 'Maquiagem'],
            link: 'https://www.amazon.com.br/dp/B08L41MR7C/?coliid=IWWZZ6GJS56SV&colid=3JBCT8QVI1IQM&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '☕',
            title: 'Cafeteira Prensa Francesa 600ml',
            description: 'Mimo Style com haste e alça resistente, suporta temperaturas de -20°C a 180°C com excelente filtragem.',
            price: 'R$ 42,73',
            priceRange: '40-50',
            tags: ['Casa', 'Café'],
            link: 'https://www.amazon.com.br/dp/B07WXJ8GQP/?coliid=I1RLFJ1QV8SBQ8&colid=3JBCT8QVI1IQM&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        },
        {
            icon: '👝',
            title: 'Necessaire Organizadora de Maquiagem',
            description: 'Bolsa grande capacidade em couro sintético rosa com duas camadas, divisórias e suporte para pincéis.',
            price: 'R$ 45,90',
            priceRange: '40-50',
            tags: ['Beleza', 'Organização'],
            link: 'https://www.amazon.com.br/dp/B0FPC6R9L9/?coliid=IAIVBGDDNEFI6&colid=3JBCT8QVI1IQM&ref_=list_c_wl_lv_vv_lig_dp_it&th=1'
        },
        {
            icon: '🧴',
            title: 'Creme Hidratante CeraVe 200g',
            description: 'Creme hidratante corporal com fórmula dermatológica para pele saudável e nutrida.',
            price: 'R$ 59,90',
            priceRange: '50-60',
            tags: ['Beleza', 'Skincare'],
            link: 'https://www.amazon.com.br/dp/B07M9CRZZZ/?coliid=I2R6DSN16Z2YJ0&colid=3JBCT8QVI1IQM&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it'
        }
    ],
    heitor: [
        {
            icon: '👕',
            title: 'Camiseta Masculina Tamanho G',
            description: 'Camiseta de qualidade em tecido confortável e durável. Preferências: verde escuro, verde militar ou vinho. Sugestões: Taco (tecido gostoso, cor não desbota), C&A, Riachuelo ou Renner.',
            price: 'R$ 30 - R$ 60',
            priceRange: '30-60',
            tags: ['Moda', 'Vestuário']
        }
    ],
    amanda: [
        {
            icon: '🩴',
            title: 'Havaianas 37-38',
            description: 'Sandálias Havaianas confortáveis e duráveis, numeração 37-38.',
            price: 'R$ 25 - R$ 50',
            priceRange: '25-50',
            tags: ['Calçados', 'Conforto']
        },
        {
            icon: '👚',
            title: 'Camisa para Malhar',
            description: 'Roupa esportiva feminina confortável e respirável, ideal para treinos e atividades físicas.',
            price: 'R$ 30 - R$ 60',
            priceRange: '30-60',
            tags: ['Fitness', 'Esporte']
        },
        {
            icon: '🧦',
            title: 'Meia de Pilates Antiderrapante 37-38',
            description: 'Meias antiderrapantes para pilates e yoga, numeração 37-38, com aderência e conforto.',
            price: 'R$ 20 - R$ 40',
            priceRange: '20-40',
            tags: ['Fitness', 'Pilates']
        },
        {
            icon: '💼',
            title: 'Necessaire',
            description: 'Necessaire prática e espaçosa para organizar produtos de beleza e higiene pessoal.',
            price: 'R$ 25 - R$ 50',
            priceRange: '25-50',
            tags: ['Organização', 'Beleza']
        },
        {
            icon: '🌸',
            title: 'Difusor/Aromatizador de Ambiente',
            description: 'Difusor ou aromatizador para perfumar ambientes com fragrâncias agradáveis e duradouras.',
            price: 'R$ 30 - R$ 60',
            priceRange: '30-60',
            tags: ['Casa', 'Aromaterapia']
        },
        {
            icon: '🕯️',
            title: 'Vela Aromática',
            description: 'Vela perfumada decorativa para criar ambiente acolhedor e relaxante.',
            price: 'R$ 20 - R$ 45',
            priceRange: '20-45',
            tags: ['Casa', 'Decoração']
        }
    ]
};

let currentPerson = 'marcos';
let currentFilter = 'all';

function renderGifts(person = currentPerson, filter = currentFilter) {
    const grid = document.getElementById('giftsGrid');
    grid.innerHTML = '';

    let gifts = giftsData[person] || [];
    let filteredGifts = gifts;

    if (filter !== 'all') {
        const [minFilter, maxFilter] = filter.split('-').map(Number);

        filteredGifts = gifts.filter(gift => {
            const priceRange = gift.priceRange.split('-').map(Number);
            const [minPrice, maxPrice] = priceRange;
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

// Event listeners para os filtros de pessoa
document.querySelectorAll('.person-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.person-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');
        currentPerson = this.dataset.person;
        renderGifts(currentPerson, currentFilter);
    });
});

// Event listeners para os filtros de preço
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');
        currentFilter = this.dataset.filter;
        renderGifts(currentPerson, currentFilter);
    });
});

// Renderizar gifts iniciais
renderGifts();