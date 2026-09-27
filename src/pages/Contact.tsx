import { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const faqItems = [
  {
    question: 'Arbetar ni med ROT-avdrag?',
    answer: 'Ja! Som privatperson får du 30 % avdrag på arbetskostnaden direkt på fakturan upp till 50 000 kr per person och år. Vi sköter all administration mot Skatteverket.',
  },
  {
    question: 'Hur lång tid tar det att få ett prisförslag?',
    answer: 'Vi återkopplar vanligtvis inom 24 timmar och lämnar en tydlig, specificerad offert inom 1–3 arbetsdagar efter genomgång eller platsbesök.',
  },
  {
    question: 'Vilka områden i Skaraborg är ert huvudsakliga upptagningsområde?',
    answer: 'Vi har vår bas i Grästorp och utför uppdrag i Grästorp, Trollhättan, Lidköping, Vara och över hela Skaraborgsområdet.',
  },
  {
    question: 'Kan jag boka ett kostnadsfritt platsbesök?',
    answer: 'Självklart! Kontakta oss via formuläret eller ring Andreas på 070-615 91 73 så bokar vi in en tid som passar dig.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  display: 'block',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.15)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Contact() {
  usePageTitle(
    'Kontakta Tengene Byggservice AB | Grästorp & Skaraborg',
    'Kontakta Andreas Andersson på Tengene Byggservice AB i Grästorp. Vi utför allt inom nybyggnation, tillbyggnad, renovering, tak och altan i Grästorp och hela Skaraborg. Ring 070-615 91 73.'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(https://cdn.midjourney.com/6e079fd3-e098-4621-94e1-2dca52b0df2a/0_0.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                Kontakta oss
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: 0, maxWidth: '600px', marginInline: 'auto', lineHeight: 1.6 }}>
                Vi återkopplar vanligtvis inom 24 timmar. Kostnadsfritt platsbesök ingår alltid.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: CONTACT CONTENT ────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: info */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                Så når du oss
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Du kan nå oss via formuläret, telefon eller e-post. Oavsett om det gäller nybyggnation, tillbyggnad, renovering, takbyte eller altan hjälper vi dig gärna.
              </p>

              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(234, 88, 12, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Telefon
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href="tel:0706159173"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        070-615 91 73
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(234, 88, 12, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MapPin size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Plats & Område
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Bas i Grästorp • Trollhättan, Lidköping, Vara & hela Skaraborg
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(234, 88, 12, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mail size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      E-post
                    </p>
                    <a
                      href="mailto:tengenebyggfaktura@gmail.com"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      tengenebyggfaktura@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>


            {/* Right: form */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={100}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 24px 0',
                lineHeight: 1.2,
              }}>
                Skicka oss ett meddelande
              </h2>
              <div style={{
                background: 'var(--color-white)',
                padding: '40px',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}>
                <form onSubmit={e => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Ditt namn *"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Din e-postadress *"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Ditt telefonnummer"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    style={inputStyle}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  />
                  <textarea
                    placeholder="Beskriv ditt ärende *"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    style={{ ...inputStyle, minHeight: '140px', resize: 'vertical', marginBottom: '24px' } as React.CSSProperties}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    required
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: 'var(--color-primary)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontFamily: 'var(--font-family)',
                      fontSize: '0.95rem',
                      border: 'none',
                      borderRadius: 'var(--border-radius-pill)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'var(--color-primary-hover)';
                      el.style.transform = 'translateY(-2px)';
                      el.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.45)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = 'var(--color-primary)';
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ────────────────────────────────────── */}
      <section style={{ background: 'var(--color-dark)', padding: '100px 0' }}>
        <div style={container}>
          <FAQAccordion
            dark={true}
            items={faqItems}
            title="Vanliga frågor"
            subtitle="Svar på det vi ofta får höra. Hittar du inte svaret är du alltid välkommen att ringa oss!"
            buttonText="Skicka meddelande"
            buttonLink="/kontakt"
          />
        </div>
      </section>

      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}
