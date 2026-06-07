import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ fontSize: '1.5rem', letterSpacing: '0.1em' }}>GROWTH.</h1>
      </header>
      
      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Predictable Systems.
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
          Apply for a free 1-hour strategy call to identify what&apos;s stopping your growth.
        </p>
        
        <NewsletterForm />
      </section>
    </main>
  );
}
