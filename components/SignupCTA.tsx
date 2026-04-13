'use client';

import { useState } from 'react';

export default function SignupCTA() {
  const [url, setUrl] = useState('');
  const [dwUrl, setDwUrl] = useState('');

  return (
    <section className="signup-cta" style={{ padding: '24px 0' }}>
      <div className="container" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, maxWidth: 520 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Zapisz na spartakiadę</h3>
          <p style={{ margin: 0, color: '#6b7280' }}>Wklej link do formularza lub strony rejestracji spartakiady.</p>
          <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              type="url"
              placeholder="https://... (formularz spartakiady)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #e5e7eb', width: 320 }}
            />
            <button
              onClick={() => {
                if (!url) return window.alert('Wklej najpierw link do zapisów na spartakiadę');
                try {
                  window.open(url, '_blank');
                } catch (err) {
                  window.alert('Nieprawidłowy link');
                }
              }}
              className="btn-primary"
              style={{ padding: '10px 18px', borderRadius: 6 }}
            >
              Zapisz na spartakiadę
            </button>
          </div>
        </div>

        <div style={{ width: 1, background: '#e5e7eb' }} />

        <div style={{ flex: 1, maxWidth: 520 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Zapisz na Dzień Wydziału 2026</h3>
          <p style={{ margin: 0, color: '#6b7280' }}>Wklej link do formularza rejestracji Dnia Wydziału 2026.</p>
          <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              type="url"
              placeholder="https://... (formularz DW 2026)"
              value={dwUrl}
              onChange={(e) => setDwUrl(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #e5e7eb', width: 320 }}
            />
            <button
              onClick={() => {
                if (!dwUrl) return window.alert('Wklej link do zapisów na Dzień Wydziału 2026');
                try {
                  window.open(dwUrl, '_blank');
                } catch (err) {
                  window.alert('Nieprawidłowy link');
                }
              }}
              className="btn-primary"
              style={{ padding: '10px 18px', borderRadius: 6 }}
            >
              Zapisz na Dzień Wydziału 2026
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
