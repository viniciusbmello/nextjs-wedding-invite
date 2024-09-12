// /components/ImageGallery.js
import { useRouter } from 'next/router';

const ImageGallery = ({ images }) => {
  const router = useRouter();

  const handleGiftClick = (value) => {
    // Redireciona para a página /presente com o valor como query string
    router.push(`/presente?value=${encodeURIComponent(value)}`);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.url} alt={`Imagem ${index + 1}`} className="gallery-image" />
          <button
            onClick={() => handleGiftClick(image.value)}
            className="gift-button"
          >
            Presentear
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
