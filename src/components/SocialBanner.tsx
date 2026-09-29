import { useEffect } from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/reel/Ddlz6jNs3Dx/',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/Ddlz6jNs3Dx/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"><div style="padding:16px;"><a href="https://www.instagram.com/reel/Ddlz6jNs3Dx/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer" style="color:#000; text-decoration:none;">Ett inlägg delat av HTGOLV (@htgolv)</a></div></blockquote>`,
  },
  {
    url: 'https://www.instagram.com/reel/DdZReW3Mnhw/',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DdZReW3Mnhw/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"><div style="padding:16px;"><a href="https://www.instagram.com/reel/DdZReW3Mnhw/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer" style="color:#000; text-decoration:none;">Ett inlägg delat av HTGOLV (@htgolv)</a></div></blockquote>`,
  },
  {
    url: 'https://www.instagram.com/reel/DdVrRfVMB7A/',
    embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DdVrRfVMB7A/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"><div style="padding:16px;"><a href="https://www.instagram.com/reel/DdVrRfVMB7A/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel="noopener noreferrer" style="color:#000; text-decoration:none;">Ett inlägg delat av HTGOLV (@htgolv)</a></div></blockquote>`,
  },
];

export default function SocialBanner() {
  useEffect(() => {
    const processEmbeds = () => {
      if ((window as any).instgrm?.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if ((window as any).instgrm?.Embeds) {
      processEmbeds();
    }

    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        padding: 'clamp(48px, 6vw, 72px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)',
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <ScrollReveal animation="fade-up">
            <h2
              style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                letterSpacing: '-0.02em',
                margin: '0 0 8px 0',
              }}
            >
              Följ oss på sociala medier
            </h2>

            <p
              style={{
                color: 'var(--color-gray-600)',
                fontSize: '0.95rem',
                maxWidth: '520px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Följ våra pågående golvläggningar, mattläggningar och se resultat från vår hantverksvardag i Stenungsund med omnejd.
            </p>
          </ScrollReveal>
        </div>

        {/* Clean Instagram Embeds Grid */}
        <ScrollReveal animation="fade-up" duration={0.7} delay={100}>
          <div className="instagram-natural-grid">
            {instagramPosts.map((post, idx) => (
              <div key={idx} className="instagram-natural-card">
                <div
                  style={{
                    width: '100%',
                    minHeight: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  dangerouslySetInnerHTML={{ __html: post.embedHtml }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Social Connect Hub Footer Bar */}
        <ScrollReveal animation="fade-up" duration={0.6} delay={160}>
          <div className="social-hub-bar">
            <div className="social-hub-text">
              <span className="social-hub-title">Följ HT Golv på Instagram</span>
              <span className="social-hub-sub">Få inspiration och följ våra senaste golvprojekt och renoveringar på Instagram</span>
            </div>

            <div className="social-hub-actions">
              <a
                href="https://www.instagram.com/htgolv/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-hub-btn instagram"
              >
                <Instagram size={17} />
                <span>Instagram @htgolv</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .instagram-natural-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          justify-content: center;
          align-items: start;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
        }

        .instagram-natural-card {
          width: 100%;
          max-width: 350px;
          min-width: 0;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .instagram-natural-card:hover {
          transform: translateY(-4px);
        }

        .instagram-natural-card iframe,
        .instagram-natural-card blockquote {
          display: block !important;
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          border-radius: 8px !important;
          margin: 0 !important;
        }

        .instagram-natural-card > div {
          width: 100%;
          min-width: 0;
        }

        /* Social Hub Bar */
        .social-hub-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 24px;
          margin-top: 28px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          flex-wrap: wrap;
        }

        .social-hub-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .social-hub-title {
          font-weight: 700;
          color: var(--color-text-dark);
          font-size: 0.95rem;
        }

        .social-hub-sub {
          color: var(--color-gray-600);
          font-size: 0.84rem;
        }

        .social-hub-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-hub-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.25s ease;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          white-space: nowrap;
        }

        .social-hub-btn:hover {
          transform: translateY(-2px);
        }

        .social-hub-btn.instagram {
          background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
        }

        .social-hub-btn.instagram:hover {
          box-shadow: 0 6px 20px rgba(225, 48, 108, 0.3);
        }

        .social-hub-btn.facebook {
          background: #1877f2;
        }

        .social-hub-btn.facebook:hover {
          box-shadow: 0 6px 20px rgba(24, 119, 242, 0.3);
        }

        @media (max-width: 992px) {
          .instagram-natural-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
          .social-hub-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            padding: 18px;
          }
          .social-hub-actions {
            width: 100%;
          }
          .social-hub-btn {
            flex: 1 1 auto;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .instagram-natural-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 360px;
          }
          .social-hub-actions {
            flex-direction: column;
            width: 100%;
          }
          .social-hub-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
