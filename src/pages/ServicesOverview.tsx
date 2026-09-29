import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';
import { ServiceIcon } from '../components/ServiceIcons';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function ServicesOverview() {
  usePageTitle(
    'Våra Tjänster | HT Golv i Stenungsund AB',
    'Utforska våra golvtjänster: Golvläggning, mattläggning, golvslipning och fastighetsförvaltning i Stenungsund och hela Bohuslän.'
  );

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let id = hash.replace('#', '');
      if (id === 'ombyggnation') id = 'tillbyggnad';
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff' }}>

      {/* ── HERO HEADER ──────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3G5LlmMYORSdAk8SxzXrK2S0Is5%2Fhf_20260821_184821_7f998fbb-7324-4488-8afb-075158c654a2.png&w=1920&q=85")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        paddingTop: '140px',
        paddingBottom: '46px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="blur-in">
            <h1 style={{
              color: 'var(--color-white)',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}>
              Våra Tjänster
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.08rem',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}>
              HT Golv i Stenungsund AB erbjuder gedigna hantverkstjänster, golvläggning, golvslipning och fastighetsförvaltning med högsta kvalitet i Stenungsund och Bohuslän.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ── STICKY ANCHOR TAB BAR ──────────────────────────── */}
      <div style={{
        position: 'sticky',
        top: '72px',
        zIndex: 40,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '12px 0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
      }}>
        <div style={container}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            {services.map((svc) => (
              <button
                key={svc.slug}
                onClick={() => scrollToSection(svc.slug)}
                style={{
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '8px 18px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-family)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <ServiceIcon type={svc.slug} size={18} color="currentColor" />
                {svc.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DETAILED SERVICE SECTIONS (ALTERNATING LAYOUT) ──────────── */}
      <div style={{ padding: '60px 0 100px 0' }}>
        {services.map((svc: ServiceItem, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={svc.slug}
              id={svc.slug}
              style={{
                padding: '80px 0',
                background: isEven ? '#ffffff' : '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <div style={{ ...container, maxWidth: '960px' }}>
                <ScrollReveal animation="fade-up" duration={0.8}>
                  {/* Top: Icon & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <ScrollReveal animation="nybe-reveal" duration={1.0}>
                      <ServiceIcon type={svc.slug} size={36} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    </ScrollReveal>
                    {svc.tag && (
                      <span style={{
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}>
                        {svc.tag}
                      </span>
                    )}
                  </div>

                  {/* Heading */}
                  <h2 style={{
                    color: 'var(--color-text-dark)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                    letterSpacing: '-0.03em',
                    margin: '0 0 18px 0',
                    lineHeight: 1.2,
                  }}>
                    {svc.title}
                  </h2>

                  {/* Detailed Description */}
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 28px 0',
                    whiteSpace: 'pre-line',
                    maxWidth: '860px',
                  }}>
                    {svc.detailedDescription}
                  </p>

                  {/* Highlights Grid with light background badge card */}
                  {svc.highlights && svc.highlights.length > 0 && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '12px 20px',
                      marginBottom: '32px',
                      padding: '24px 28px',
                      background: isEven ? '#f8fafc' : '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)',
                    }}>
                      {svc.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '0.94rem', color: '#334155', fontWeight: 600 }}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <Link
                    to="/offert"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: 'var(--color-primary)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      padding: '14px 28px',
                      borderRadius: 'var(--border-radius-pill)',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary-hover)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Begär offert för {svc.title} <ArrowRight size={16} />
                  </Link>
                </ScrollReveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <CTABanner />

    </main>
  );
}
