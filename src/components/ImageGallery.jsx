// components/ImageGallery.jsx
import React from 'react';
import styles from './ImageGallery.module.css';
import { useRouter } from 'next/router';

const images = [
  { src: '/assets/images/gift-alarme.png', description: 'Kit: Alarme Antifurto', subDescription: 'Marca Taurus (Modelo RT608)', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-enfermeira.png', description: 'Fantasia Enfermeira', subDescription: 'Para nossa Lua de Mel', value: 'R$ 450,00' },
  { src: '/assets/images/gift-alexa.png', description: 'Alexia', subDescription: 'Para ela mandar em mais alguém', value: 'R$ 359,00' },
  { src: '/assets/images/gift-ps5.png', description: 'Kit: Ferramentas', subDescription: 'Consertos em Geral', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-geladeira.png', description: 'Geladeira', subDescription: 'Das BOA', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-protetor.png', description: 'Protetor Auricular', subDescription: 'Para a Polli Dormir Bem', value: 'R$ 242,00' },
  { src: '/assets/images/gift-aluguel.png', description: 'Vale Aluguel', subDescription: '14 meses', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-bolsafamilia.png', description: 'Fatura Cartão de Crédito', subDescription: 'Primeiro mês de casados', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-panelas.png', description: 'Kit: Hobbie Polliana', subDescription: 'Tramontina', value: 'R$ 351,00' },
  { src: '/assets/images/gift-lavadora.png', description: 'Lavadora de Roupas', subDescription: 'Faz Tudo de 55 Kg', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-100zao.png', description: '100zão', subDescription: 'Pra gastar a vontade', value: 'R$ 100,00' },
  { src: '/assets/images/gift-loucas.png', description: 'Redutora de Brigas', subDescription: '1 Serviço', value: 'R$ 1.000,00' },
  { src: '/assets/images/gift-buque.png', description: 'Vale Buquê', subDescription: 'Na sua direção', value: 'R$ 850,00' },
  { src: '/assets/images/gift-capacete.png', description: 'Capacete Anti-Rolo', subDescription: 'Para o Noivo', value: 'R$ 550,00' },
  { src: '/assets/images/gift-rolo.png', description: 'Estimulador de Pontualidade', subDescription: 'Também para o Noivo', value: 'R$ 250,10' },
];

const ImageGallery = () => {
  const router = useRouter();

  const handleGiftClick = (imageSrc) => {
    router.push(`/presente?image=${encodeURIComponent(imageSrc)}`);
  };

  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageItem}>
          <img src={image.src} alt={`Image ${index + 1}`} className={styles.image} />
          <div className={styles.labels}>
            <span className={styles.description}>{image.description}</span>
            <span className={styles.subDescription}>{image.subDescription}</span>
            <span className={styles.value}>{image.value}</span>
          </div>
          <button className={styles.giftButton} onClick={() => handleGiftClick(image.src)}>
            Presentear
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

