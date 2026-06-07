import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Thank You | Predictable Growth System",
};

export default function ThankYouPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ fontSize: '1.5rem', letterSpacing: '0.1em' }}>GROWTH.</h1>
      </header>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Booking Confirmed.
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
          Please watch the quick video below before our call.
        </p>
        
        <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', backgroundColor: 'var(--bg-card)', border: '1px dashed var(--border-color)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>[ Vimeo Video Placeholder ]</p>
        </div>

        <Link href="/" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
          Return to Homepage
        </Link>
      </section>
    </main>
  );
}
