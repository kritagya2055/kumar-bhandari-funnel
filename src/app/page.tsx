import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER */}
      <header style={{
        padding: '1.2rem 2rem',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)',
        letterSpacing: '0.2em'
      }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: 400 }}>
          GROWTH
        </h1>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem 2rem',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '3.2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            fontWeight: 500,
            letterSpacing: '-0.02em'
          }}
        >
          Predictable Growth Systems
        </h2>

        <p
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}
        >
          Book a free 1-hour strategy call to identify what is stopping your growth and how to fix it.
        </p>

        {/* FLODESK FORM */}
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <NewsletterForm
