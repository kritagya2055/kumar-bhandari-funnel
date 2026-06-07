"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Placeholder.module.css';

export default function CalendlySection() {
  const router = useRouter();

  const handleBooking = () => {
    router.push('/thank-you');
  };

  return (
    <section className={styles.section} id="book">
      <div className={styles.container}>
        <div className={styles.placeholderBox}>
          <h2 className={styles.placeholderText}>[ Calendly Booking Placeholder ]</h2>
          <p className={styles.placeholderSubtext}>
            Paste your Calendly embed code here later.
          </p>
          <button onClick={handleBooking} className={styles.button}>
            Simulate Successful Booking
          </button>
        </div>
      </div>
    </section>
  );
}
