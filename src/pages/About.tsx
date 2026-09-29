import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function About() {
  usePageTitle(
    'Om HT Golv i Stenungsund AB | Golvfirma i Stenungsund & Bohuslän',
    'Läs om HT Golv i Stenungsund AB – ett familjeföretag i 3 generationer specialiserat på golvläggning, mattläggning, golvslipning och fastighetsförvaltning i Stenungsund med omnejd.'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260821_183454_7eefa775-dd9b-4589-a201-64ab1b467991.png)',
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
                Om HT Golv i Stenungsund AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '640px', lineHeight: 1.6 }}>
                Familjeföretag i 3 generationer med bas i Stenungsund – vi levererar högsta kvalitet inom golvläggning, mattläggning, golvslipning och fastighetsförvaltning med personlig service.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '960px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Left: Transparent Company Logo / Image */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url || images.logoDark?.url || '/logo-dark.png'}
                  alt="HT Golv i Stenungsund AB"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '260px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    padding: '0',
                    display: 'block',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #e2e8f0',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Gediget hantverk, trygghet och kvalitet i tre generationer
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    HT Golv i Stenungsund AB drivs av Tim och är ett etablerat familjeföretag i tredje generationen. Vi erbjuder ett komplett utbud av tjänster inom professionell golvläggning, mattläggning, trägolv och parkett, dammfri golvslipning samt noggrann fastighetsförvaltning. Med bas i Stenungsund är vi verksamma på Tjörn, Orust, i Kungälv och över hela Bohuslän för både privatpersoner, bostadsrättsföreningar och företag.
                  </p>
                  
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-dark)', margin: '28px 0 12px 0' }}>
                    Trygg golvprocess från rådgivning till färdigt resultat
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 16px 0',
                  }}>
                    Hos oss möts du av mångårig yrkeskunskap och ett genuint intresse för varje detalj, oavsett om det handlar om att lägga ett slitstarkt våtrumsgolv, renovera ett vackert parkettgolv eller sköta den löpande förvaltningen av en fastighet. Vi arbetar med noggrann planering, fasta priser och öppen dialog så att du alltid känner dig trygg.
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    När du anlitar HT Golv i Stenungsund AB får du en direkt kontaktperson i Tim. Vi sätter stor ära i att hålla utlovade tidsramar, leverera högsta finish och lämna en ren och snygg arbetsplats efter oss.
                  </p>

                  {/* Founder Quote Card */}
                  <div style={{
                    background: 'rgba(234, 88, 12, 0.06)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '32px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.7,
                      margin: '0 0 10px 0',
                    }}>
                      "Vi utför alla golv- och förvaltningsprojekt med största yrkesstolthet. Som familjeföretag i tredje generationen värnar vi om personlig service, tydliga tidsramar och kompromisslös hantverkskvalitet."
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Tim, VD & Verksamhetsansvarig för HT Golv i Stenungsund AB
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION C: CTA BANNER ─────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid > *:first-child {
            display: flex;
            justifyContent: center;
          }
        }
      `}</style>
    </main>
  );
}

