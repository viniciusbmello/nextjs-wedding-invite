import { useRouter } from 'next/router';
import styles from './presente.module.css';

const Presente = () => {
  const router = useRouter();
  const { value } = router.query;

  let pixCode;
  let qrCodeSrc;

  switch (value) {
    case '1000.00':
      pixCode = '00020126520014br.gov.bcb.pix0111013694289010215Presentes caros52040000530398654071000.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525mU91mMQkDd5OkqH9RqIB10IOp63048668'; 
      qrCodeSrc = '/assets/images/qrcode_1000.jpg'; // Imagem QR code para R$10
      break;
    case '450.00':
        pixCode = '00020126560014br.gov.bcb.pix0111013694289010219Fantasia enfermeira5204000053039865406450.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525U0fvX5pLXbTf7PA9IvtDuKloF6304C6B4'; 
        qrCodeSrc = '/assets/images/qrcode_450.jpg'; // Imagem QR code para R$10
        break;
    case '242.00':
        pixCode = '00020126550014br.gov.bcb.pix0111013694289010218Protetor auricular5204000053039865406242.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525fStcWL48MGNz0m58fuRDEN30Y6304310E'; 
        qrCodeSrc = '/assets/images/qrcode_242.jpg'; // Imagem QR code para R$10
        break;
    case '351.00':
        pixCode = '00020126470014br.gov.bcb.pix0111013694289010210Kit hobbie5204000053039865406351.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525UqD9VwFLlFEYLbKmpcc23dZAC6304BD94'; 
        qrCodeSrc = '/assets/images/qrcode_351.jpg'; // Imagem QR code para R$10
        break;
    case '359.00':
        pixCode = '00020126430014br.gov.bcb.pix0111013694289010206Alexia5204000053039865406359.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525lvo67JU3D495mJ5KuD0c65i0q6304AA86'; 
        qrCodeSrc = '/assets/images/qrcode_359.jpg'; // Imagem QR code para R$10
        break;
    case '550.00':
        pixCode = '00020126450014br.gov.bcb.pix0111013694289010208Capacete5204000053039865406550.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525MkouJCvtVqTxmEdgcu4sHGLkW6304898F'; 
        qrCodeSrc = '/assets/images/qrcode_550.jpg'; // Imagem QR code para R$10
        break;
    case '250.10':
        pixCode = '00020126530014br.gov.bcb.pix0111013694289010216Rolo de macarrao5204000053039865406251.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525ox3DLnYmgcHg5dAUedAp3DnEz630406FA'; 
        qrCodeSrc = '/assets/images/qrcode_250.jpg'; // Imagem QR code para R$10
        break;
    case '850.00':
        pixCode = '00020126420014br.gov.bcb.pix0111013694289010205Buque5204000053039865406850.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525HVW4YPyixr0YBex7YaH2qO14o6304C26E'; 
        qrCodeSrc = '/assets/images/qrcode_850.jpg'; // Imagem QR code para R$10
        break;
    case '100.00':
        pixCode = '00020126450014br.gov.bcb.pix0111013694289010208Cem pila5204000053039865406100.005802BR5921FELIPE DANIEL MARIANO6010MEDIANEIRA62290525QnWKMzDN4cwxnuszUu0aZjdam63042E69'; 
        qrCodeSrc = '/assets/images/qrcode_100.jpg'; // Imagem QR code para R$10
        break;
    default:
      pixCode = 'Código PIX indisponível';
      qrCodeSrc = '/images/qrcode_default.png'; // Imagem padrão ou de erro
      break;
  }

  return (
    <div className={styles.container}>
      <h1>Você escolheu presentear com o valor de:</h1>
      <h2>R$ {value}</h2>
      <div className={styles.pixSection}>
        <p>Use o seguinte código PIX para completar o pagamento (Copie e Cole):</p>
        <pre>{pixCode}</pre>
      </div>
      <p>Ou escaneie o QR Code abaixo para efetuar o pagamento:</p>
      <div className={styles.qrCodeSection}>
        <img width={500} height={500} src={qrCodeSrc} alt="QR Code indisponível" className={styles.qrCodeImage} />
      </div>
    </div>
  );
};

export default Presente;