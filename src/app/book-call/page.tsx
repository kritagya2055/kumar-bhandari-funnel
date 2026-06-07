import React from 'react';
import CalendlySection from '@/components/CalendlySection';

export const metadata = {
  title: "Book Strategy Call | Predictable Growth System",
};

export default function BookCallPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ fontSize: '1.5rem', letterSpacing: '0.1em' }}>GROWTH.</h1>
      </header>

      <div style={{ flex: 1, padding: '4rem 2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
          Schedule Your Free Strategy Call
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Please select a time below.
        </p>
        <CalendlySection />
      </div>
    </main>
  );
}
