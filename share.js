document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('share-btn');
    const modal = document.getElementById('share-modal');
    const closeBtn = document.querySelector('.close-btn');
    const imagePreview = document.getElementById('generated-image');
    const copyBtn = document.querySelector('.copy-btn');
    const nativeShareBtn = document.querySelector('.share-native');

    shareBtn.addEventListener('click', async () => {
        const card = document.querySelector('.message-card');

        // Cores aleatórias para o fundo da imagem gerada
        const colors = ['#6e45e2', '#ff6b6b', '#00c9a7', '#2196f3', '#f06292', '#ffae8b', '#8e24aa', '#009688'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Marca d’água temporária
        const watermark = document.createElement('p');
        watermark.innerText = 'recadodoceu.vercel.app';
        watermark.className = 'intro-text';
        Object.assign(watermark.style, {
            marginTop: '20px',
            opacity: '0.4',
            fontSize: '0.95rem',
            fontStyle: 'italic'
        });
        card.appendChild(watermark);

        // Clona o conteúdo do card
        const clone = card.cloneNode(true);
        clone.style.backgroundColor = randomColor;
        clone.style.background = 'none';
        clone.style.backdropFilter = 'none';
        clone.style.padding = '40px 30px';
        clone.style.borderRadius = '20px';
        clone.style.width = '100%';
        clone.style.maxWidth = '600px';
        clone.style.boxShadow = 'none';
        clone.style.display = 'block';
        clone.style.position = 'relative';

        // Corrige os textos do clone
        const introText = clone.querySelector('.intro-text');
        if (introText) {
            introText.style.color = '#ffffff';
            introText.style.opacity = '1';
            introText.style.textShadow = '1px 1px 4px rgba(0,0,0,0.3)';
        }

        const messageText = clone.querySelector('#divine-message');
        if (messageText) {
            messageText.style.color = '#ffffff';
            messageText.style.opacity = '1';
            messageText.style.textShadow = '2px 2px 8px rgba(0,0,0,0.4)';
            messageText.style.fontWeight = '700';
        }

        // Cria a logo (visível no topo)
        const logo = document.createElement('img');
        logo.src = 'jaLogo.webp';
        logo.alt = 'Logo JA';
        logo.className = 'logo';
        Object.assign(logo.style, {
            display: 'block',
            margin: '0 auto 20px auto',
            opacity: '1',
            filter: 'none',
            position: 'relative',
            zIndex: '10',
            maxWidth: '80px'
        });

        // Cria wrapper (logo + card)
        const wrapper = document.createElement('div');
        Object.assign(wrapper.style, {
            backgroundColor: randomColor,
            padding: '30px 20px',
            borderRadius: '20px',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '600px'
        });

        wrapper.appendChild(logo);
        wrapper.appendChild(clone);

        // Container invisível
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.top = '-9999px';
        tempContainer.appendChild(wrapper);
        document.body.appendChild(tempContainer);

        // Gera imagem
        const canvas = await html2canvas(wrapper, {
            useCORS: true,
            backgroundColor: randomColor,
            scale: window.devicePixelRatio
        });

        document.body.removeChild(tempContainer);
        card.removeChild(watermark);

        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], 'recado.png', { type: 'image/png' });
        const url = URL.createObjectURL(blob);

        // Mostra modal com preview
        imagePreview.src = url;
        modal.classList.remove('hidden');

        // Copiar imagem
        copyBtn.onclick = async () => {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
                alert('Imagem copiada para a área de transferência!');
            } catch (err) {
                alert('Erro ao copiar: ' + err.message);
            }
        };

        // Compartilhar via sistema (mobile)
        nativeShareBtn.onclick = async () => {
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        title: 'Um recado do Céu',
                        text: 'Veja essa mensagem que recebi do céu hoje. Acesse https://recadodoceu.vercel.app/ e receba você também!',
                        files: [file]
                    });
                } catch (err) {
                    alert('Compartilhamento cancelado ou falhou.');
                }
            } else {
                alert('Este navegador não suporta compartilhamento de imagem.');
            }
        };
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
