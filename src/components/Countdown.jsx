import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-14T15:00:00-03:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Countdown</h1>
      <div className={styles.countdownContainer}>
        <div className={styles.flipCard}>
          <div className={styles.flipContent}>
            <div className={styles.flipFront}>{timeLeft.days}</div>
            <p className={styles.label}>Dias</p>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipContent}>
            <div className={styles.flipFront}>{timeLeft.hours}</div>
            <p className={styles.label}>Horas</p>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipContent}>
            <div className={styles.flipFront}>{timeLeft.minutes}</div>
            <p className={styles.label}>Minutos</p>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipContent}>
            <div className={styles.flipFront}>{timeLeft.seconds}</div>
            <p className={styles.label}>Segundos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
