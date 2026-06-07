import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <header style={{ padding: '1.2rem 2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ fontSize: '1.2rem', letterSpacing: '0.2em', fontWeight: 400 }}>
          GROWTH
        </h1>
      </header>

      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>

        <h2 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          fontWeight: 500
        }}>
          Predictable Systems.
        </h2>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          marginBottom: '3rem',
          maxWidth: '600px'
        }}>
          Apply for a free 1-hour strategy call to identify what&apos;s stopping your growth.
        </p>

        {/* FIXED FORM (THIS WAS YOUR ERROR) */}
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <NewsletterForm />
        </div>

        <p style={{
          marginTop: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          opacity: 0.8
        }}>
          Only 5 spots available this week
        </p>

      </section>
    </main>
  );
}
