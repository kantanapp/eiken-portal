import React from 'react';
import './index.css';

const APPS = [
  {
    id: 'vocab',
    emoji: '📚',
    title: '英検単語',
    subtitle: 'Vocabulary',
    description: '英検1級・2級の重要単語を\n効率よく学習できます',
    tags: ['1級', '2級'],
    color: '#3b82f6',
    bg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    lightBg: '#eff6ff',
    url: 'https://eiken-vocab2026423.web.app',
  },
  {
    id: 'mondai',
    emoji: '📝',
    title: '英検長文問題',
    subtitle: 'Reading Practice',
    description: '英検1級・2級の長文読解問題を\n本番形式で練習できます',
    tags: ['1級', '2級', '長文読解'],
    color: '#8b5cf6',
    bg: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    lightBg: '#f5f3ff',
    url: 'https://kantanapp.github.io/eiken-mondai-app/',
  },
  {
    id: 'summary',
    emoji: '✍️',
    title: '英検要約練習',
    subtitle: 'Summary Writing',
    description: '英検1級・2級の要約問題を\nサンプル解答付きで練習できます',
    tags: ['1級', '2級', '要約'],
    color: '#10b981',
    bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    lightBg: '#ecfdf5',
    url: 'https://kantanapp.github.io/eiken-app/',
  },
];

function AppCard({ app }) {
  return (
    <a
      href={app.url}
      target="_self"
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
      }}
    >
      <div style={{
        background: app.bg,
        padding: '32px 28px 28px',
      }}>
        <div style={{ fontSize: '52px', lineHeight: 1, marginBottom: '14px' }}>
          {app.emoji}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '6px', textTransform: 'uppercase' }}>
          {app.subtitle}
        </div>
        <div style={{ color: '#fff', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.01em' }}>
          {app.title}
        </div>
      </div>

      <div style={{ padding: '24px 28px 28px' }}>
        <p style={{
          color: '#475569',
          fontSize: '14px',
          lineHeight: 1.85,
          marginBottom: '20px',
          whiteSpace: 'pre-line',
        }}>
          {app.description}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {app.tags.map(tag => (
            <span key={tag} style={{
              background: app.lightBg,
              color: app.color,
              fontSize: '12px',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: '20px',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          background: app.bg,
          color: '#fff',
          fontWeight: 700,
          fontSize: '15px',
          padding: '14px',
          borderRadius: '12px',
        }}>
          アプリを開く
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #e0e7ff 0%, #f0f4f8 40%, #ecfdf5 100%)',
      padding: '0 16px',
    }}>
      <header style={{ textAlign: 'center', padding: '56px 16px 48px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#fff',
          border: '1.5px solid #e2e8f0',
          borderRadius: '100px',
          padding: '6px 20px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#64748b',
          marginBottom: '28px',
          letterSpacing: '0.04em',
        }}>
          🎓 英検学習ポータル
        </div>
        <h1 style={{
          fontSize: 'clamp(30px, 6vw, 52px)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.15,
          marginBottom: '18px',
          letterSpacing: '-0.025em',
        }}>
          英検対策アプリ
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#64748b',
          fontWeight: 500,
          lineHeight: 1.8,
        }}>
          単語・長文読解・要約の3つのアプリで<br />
          英検合格を目指そう
        </p>
      </header>

      <main style={{
        maxWidth: '980px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        paddingBottom: '64px',
      }}>
        {APPS.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '0 0 36px',
        color: '#94a3b8',
        fontSize: '13px',
      }}>
        © 2026 英検学習ポータル
      </footer>
    </div>
  );
}
