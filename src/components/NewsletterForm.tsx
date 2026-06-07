"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Placeholder.module.css';

export default function NewsletterForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/book-call');
  };

  return (
    <section className={styles.section} id="apply">
      <div className={styles.container}>
        <div className={styles.placeholderBox}>
          <h2 className={styles.placeholderText}>[ Flodesk Form Placeholder ]</h2>
          <p className={styles.placeholderSubtext}>
            Paste your Flodesk embed code here later.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <button type="submit" className={styles.button}>
              Simulate Form Submission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
