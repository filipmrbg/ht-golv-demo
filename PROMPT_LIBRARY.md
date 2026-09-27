Configure the entire website for this client demo based on the information provided below.


================ 1. CLIENT INFORMATION ================

Company Name: 

Location / Area: 

Phone: 

Email: 

Organization Number: 

Owner / CEO: 

Slogan (optional): 



================ 2. ALLABOLAG / RAW TEXT ================

[Paste raw text / company description here]



================ 3. LOGO & MEDIA ================

Logo URL: 

Hero Video/Image URL (optional - leave blank to keep template default): 

About Us Image URL (Photo of owner/team or company logo): 



================ 4. IMAGE GALLERY (4-6 IMAGES) ================

Gallery Image 1 URL: 

Gallery Image 2 URL: 

Gallery Image 3 URL: 

Gallery Image 4 URL: 

Gallery Image 5 URL (optional): 

Gallery Image 6 URL (optional): 



================ 5. SOCIAL MEDIA & INSTAGRAM ================

Instagram Profile URL: 

Facebook Page URL: 

Instagram Post 1 URL: 

Instagram Post 2 URL: 

Instagram Post 3 URL: 



================ RULES FOR AI ================
1. LANGUAGE & COPYWRITING (NATURAL SWEDISH):
   - Transform the raw/Allabolag text into modern, persuasive, and trustworthy Swedish craftsmanship copy (svenska). Avoid stiff, bureaucratic or legal phrasing.
   - CLEAN GEOGRAPHIC LOCALIZATION (NO RESIDENTIAL STREET ADDRESSES):
     * If the input contains a street address, apartment number, or postal code (e.g. "Storgatan 14 lgh 1201, 852 30 Sundsvall"), the AI MUST automatically strip away the street address and extract ONLY the primary city/municipality (e.g. "Sundsvall").
     * Automatically expand the geographic reach to surrounding municipalities and region in the Hero, subheadings, and service texts (e.g. "Sundsvall • Timrå • Alnö • Medelpad" or "Mariestad med omnejd").
     * NEVER display street addresses, residential house numbers, or apartment numbers in Hero titles, section headings, breadcrumbs, service cards, or customer reviews.
   - STRICTLY AVOID UNNECESSARY HYPHENS (INGA BINDESTRECK): In Swedish, compound words must be written as a single solid word without hyphens. Hyphens make text look machine-translated and break mobile typography.
     * Write "Byggtjänster" (NEVER "Bygg-tjänster")
     * Write "Totalentreprenad" (NEVER "Total-entreprenad")
     * Write "Kvalitetsarbete" (NEVER "Kvalitets-arbete")
     * Write "Hantverkstjänster" (NEVER "Hantverks-tjänster")
     * Write "Trygghetsgaranti" (NEVER "Trygghets-garanti")
     * Use "Tak och fasad" or "Tak & fasad" instead of "Tak- och fasadrenovering".
     * Never split words with hyphens in headings, badges, or buttons.
2. NO AI CLUTTER & PRESERVE CLEAN MINIMALIST DESIGN:
   - STICK TO TEMPLATE LAYOUT: Do not invent, add, or inject any new UI elements, decorative sections, floating cards, or extra containers. Only update the text and media within the existing template components.
   - NO INVENTED BADGES OR PILLS: Do NOT add new floating badge tags, pill chips, or decorative marketing labels (e.g. no "✨ Bästa valet", "⚡ Snabb service", "🔥 Populär", "🏆 Premium").
   - ZERO EMOJIS: Never insert emojis in headings, titles, subheadings, bullet points, cards, or buttons.
3. ABSOLUTELY NO AI IMAGE GENERATION (NEVER USE generate_image):
   - ZERO AI-GENERATED IMAGES: The AI must NEVER invoke `generate_image` or generate synthetic images with AI under ANY circumstances.
   - REAL MEDIA ONLY: ONLY use images that are explicitly provided by the user via URLs in Sections 3, 4, and 5.
   - ABOUT US SECTION MEDIA (PHOTO OF OWNER/TEAM OR COMPANY LOGO):
     * The About Us section uses EITHER a real photo of the owner/founder/team ("en bild på dem") OR the company's logo ("eller deras logga").
     * If a real photo of the owner/team is provided in About Us Image URL, download and cache it locally as `public/about.webp` (or .jpg) and set `images.about.hero.url` to point to it.
     * If no photo of the people is available, or if the client's logo URL is provided for About Us, point `images.about.hero.url` to `/logo.png`. The template automatically formats and centers the logo with contain/padding on a sleek dark card.
     * NEVER generate synthetic AI photos of carpenters/craftsmen.
     * NEVER keep competitor or previous company photos showing another company's van or craftsmen.
   - PRESERVE TEMPLATE DEFAULTS WHEN BLANK (HERO & SERVICES):
     * If Hero Video/Image URL is left blank, keep the template's existing background video/image.
     * Service card images in src/data/images.ts must always remain the template's curated photos (/services/service-*.jpg).
     * NO SERVICE IMAGES IN GALLERY: The images in /services/ belong exclusively to the service cards and service pages. NEVER copy, link, or pad service images into the homepage project gallery (portfolio or gallery).
   - Python/PIL may only be used for programmatic logo processing (background transparency removal, cropping, and generating favicon/og-image from the client's provided logo). NEVER generate illustrations or photos.
4. LOGO & TRANSPARENCY (MANDATORY AUTOMATION):
   - AUTOMATED BACKGROUND REMOVAL & CROPPING: The logo provided in Section 3 is often a square avatar/photo from social media or Allabolag with solid background padding (white, black, or colored). The AI MUST automatically:
     1. Download the raw logo file locally using curl or Python.
     2. Run a Python script (using PIL) to detect the content bounding box, crop away whitespace/padding, and convert solid background pixels into full alpha transparency.
     3. Generate and save the following local assets in public/:
        * public/logo.png & public/logo-white.png: Crisp transparent version with light/white typography for the dark Navbar and Hero (retaining natural accent colors on icons/emblems).
        * public/logo-dark.png: Transparent version with dark typography for light backgrounds and the Footer.
        * public/og-image.png: Branded 1200x630 card with the logo centered on a dark theme background for link previews.
        * public/favicon.png & public/apple-touch-icon.png: 512x512 square icons.
     4. Set images.logo.url to '/logo.png' and images.logoDark.url to '/logo-dark.png' in src/data/images.ts.
   - PREVENT WHITE BOXES: NEVER render a raw square avatar with a solid background box in the Navbar. The logo must blend seamlessly into the header.
   - CACHE ALL MEDIA LOCALLY: Also download and cache all provided gallery images and about images locally in public/gallery/ and public/about.webp (or .jpg) so the demo is never broken by expired CDN access tokens. If the company logo is used for About Us, point images.about.hero.url to '/logo.png'.
5. LINK PREVIEW & OPEN GRAPH (CRITICAL FOR INSTAGRAM DM, IMESSAGE & SOCIAL MEDIA):
   - AUTOMATIC VERCEL DEMO DOMAIN (ZERO 404s & ZERO GUESSING):
     * The AI must automatically derive the demo production domain from the current git repository name or project folder name: `https://[project-folder-lowercase].vercel.app` (e.g. `https://tengene-byggservice-ab.vercel.app` or `https://videl-ab.vercel.app`).
     * CRITICAL: NEVER use the client's commercial website domain (e.g. `videl.se` or `tengenebyggservice.se`) for `og:image`, `canonical`, or `twitter:image` tags. The client domain is external/parked (often returning Loopia HTML) and will completely break link previews in Instagram DM and iMessage!
     * Both `index.html` (for static social bot crawlers like Meta & Applebot) and `src/hooks/usePageTitle.ts` (for client navigation) MUST use this exact matching absolute Vercel URL.
   - AUTOMATED 1200×630 BRANDED OG CARD (EXACT TENGENE GLOW RECIPE):
     * NEVER point `og:image` to a raw, unformatted or transparent `logo.png` directly.
     * The AI MUST execute this exact Python script to generate `public/og-image.png`, `public/og-image.jpg`, `public/og-square.png`, and square icons:
       python3 -c "from PIL import Image, ImageFilter; import numpy as np; logo = Image.open('public/logo.png').convert('RGBA'); W, H = 1200, 630; bg = Image.new('RGBA', (W, H), (15, 23, 42, 255)); scale = min(800 / logo.width, 420 / logo.height); tw, th = int(logo.width * scale), int(logo.height * scale); logo_res = logo.resize((tw, th), Image.Resampling.LANCZOS); arr = np.array(logo_res).astype(float); arr[:, :, :3] = np.clip(arr[:, :, :3] * 1.35, 0, 255); logo_crisp = Image.fromarray(arr.astype('uint8')); glow_mask = logo_res.split()[3].filter(ImageFilter.GaussianBlur(radius=25)); glow = Image.new('RGBA', (tw, th), (255, 255, 255, 60)); glow.putalpha(glow_mask); pos_x, pos_y = (W - tw) // 2, (H - th) // 2; bg.paste(glow, (pos_x, pos_y), glow); bg.paste(logo_crisp, (pos_x, pos_y), logo_crisp); bg.save('public/og-image.png', 'PNG', optimize=True); bg.convert('RGB').save('public/og-image.jpg', 'JPEG', quality=95); SW, SH = 1080, 1080; bg_sq = Image.new('RGBA', (SW, SH), (15, 23, 42, 255)); sq_scale = min(720 / logo.width, 680 / logo.height); sq_w, sq_h = int(logo.width * sq_scale), int(logo.height * sq_scale); logo_sq = logo.resize((sq_w, sq_h), Image.Resampling.LANCZOS); arr_sq = np.array(logo_sq).astype(float); arr_sq[:, :, :3] = np.clip(arr_sq[:, :, :3] * 1.35, 0, 255); logo_sq_crisp = Image.fromarray(arr_sq.astype('uint8')); sq_glow_mask = logo_sq.split()[3].filter(ImageFilter.GaussianBlur(radius=30)); sq_glow = Image.new('RGBA', (sq_w, sq_h), (255, 255, 255, 60)); sq_glow.putalpha(sq_glow_mask); bg_sq.paste(sq_glow, ((SW - sq_w) // 2, (SH - sq_h) // 2), sq_glow); bg_sq.paste(logo_sq_crisp, ((SW - sq_w) // 2, (SH - sq_h) // 2), logo_sq_crisp); bg_sq.save('public/og-square.png', 'PNG', optimize=True); bg_sq.convert('RGB').save('public/og-square.jpg', 'JPEG', quality=95); S = 512; bg_icon = Image.new('RGBA', (S, S), (15, 23, 42, 255)); icon_scale = min(360 / logo.width, 360 / logo.height); iw, ih = int(logo.width * icon_scale), int(logo.height * icon_scale); logo_icon = logo.resize((iw, ih), Image.Resampling.LANCZOS); arr_icon = np.array(logo_icon).astype(float); arr_icon[:, :, :3] = np.clip(arr_icon[:, :, :3] * 1.35, 0, 255); logo_icon_crisp = Image.fromarray(arr_icon.astype('uint8')); bg_icon.paste(logo_icon_crisp, ((S - iw) // 2, (S - ih) // 2), logo_icon_crisp); bg_icon.save('public/favicon.png', 'PNG'); bg_icon.save('public/apple-touch-icon.png', 'PNG'); print('OG cards and icons generated successfully!')"
   - META TAGS CONFIGURATION IN index.html:
     * Set `<meta property="og:image" content="https://[project-folder-lowercase].vercel.app/og-image.png" />`
     * Set `<meta property="og:image:secure_url" content="https://[project-folder-lowercase].vercel.app/og-image.png" />`
     * Set `<meta property="og:image:width" content="1200" />`
     * Set `<meta property="og:image:height" content="630" />`
     * Set `<meta property="og:image:type" content="image/png" />`
     * Set `<meta property="og:image:alt" content="[Company Name] Logotyp" />`
     * Set `<meta name="twitter:card" content="summary_large_image" />`
     * Set `<meta name="twitter:image" content="https://[project-folder-lowercase].vercel.app/og-image.png" />`
     * Set `<meta name="image" content="https://[project-folder-lowercase].vercel.app/og-image.png" />`
     * Set `<link rel="image_src" href="https://[project-folder-lowercase].vercel.app/og-image.png" />`
     * Set `<link rel="canonical" href="https://[project-folder-lowercase].vercel.app" />`
     * Set `og:title` to: `[Company Name] | [Main Service] i [Location / Area]`
     * Set `og:description` to: A concise, persuasive 1–2 sentence Swedish summary of services.
   - SCRIPT LOGIC IN src/hooks/usePageTitle.ts:
     * Ensure the fallback `origin` matches `https://[project-folder-lowercase].vercel.app` and dynamically updates `og:image` and `twitter:image` with `${origin}/og-image.png`.
   - WHY THIS GUARANTEES SUCCESS:
     * Instagram DM & Meta Crawler: 1200×630 on dark `#0F172A` with ambient glow fills the card perfectly without cropping.
     * Apple iMessage & SMS: Reads the raw absolute `https://...` link before JavaScript executes and renders the glowing card instantly.
     * Zero 404s: Never points to an unhosted or parked commercial `.se` domain.
6. SERVICES & TEMPLATE CONSISTENCY: Keep the template's 4 core service cards and preset images intact. Seamlessly weave the new company name and operating location into service headings, descriptions, and FAQ items (in src/data/services.ts and throughout the site) so it feels completely local and customized.
7. REVIEWS / TESTIMONIALS: Generate 3 authentic, realistic Swedish customer reviews in Home.tsx localized to the company's operating city (with authentic Swedish names like Johan E., Karin M., Markus L.) and varied lengths matching their core services.
8. OWNER / FOUNDER SETUP (ONLY 1 PERSON): There is ONLY ONE person representing the company — the Owner/CEO. Update About.tsx with the Owner/CEO's name and title in the founder quote card (e.g. "[Name], VD och Grundare [Company Name]"), and update the single contact in CallModal.tsx and JSON-LD schema in index.html. In the About Us photo card, use the provided photo of the owner/team, OR the company logo if no photo is available. NEVER create or inject a 3-member team grid or placeholder craftsmen.
9. PROJECTS GALLERY (STRICTLY ONLY CLIENT'S REAL IMAGES - NEVER SERVICE/AI IMAGES):
   - EXCLUSIVELY CLIENT IMAGES: The homepage reference projects gallery (`portfolio` and `gallery` in `src/data/images.ts`) must contain ONLY the actual images provided by the client in Section 4.
   - EXACT ARRAY SIZING: If the user provides 4 images, `portfolio` and `gallery` in `src/data/images.ts` MUST contain EXACTLY 4 items. If 5 images are provided, contain EXACTLY 5 items. If 3 images are provided, contain EXACTLY 3 items. Do NOT keep 6 items if fewer were provided!
   - NEVER PAD WITH SERVICE/AI IMAGES: Under NO circumstances should the AI fill missing gallery slots with images from the service section (`/services/service-*.jpg`), template stock fallbacks, or AI-generated images.
   - CLEANUP UNUSED SLOTS: Completely remove any unused default slots (e.g. items 5 and 6 if only 4 were provided) from both `portfolio` and `gallery` in `src/data/images.ts`, and delete any unused old default files in `public/gallery/`.
   - TITLE & CATEGORY: For each provided image, generate an authentic, professional Swedish project title and category badge matching real carpentry craftsmanship (e.g. "Totalrenovering Villa", "Tillbyggnad & Altan", "Tak och Fasad", "Platsbyggt Kök").
   - IF SECTION 4 IS COMPLETELY EMPTY: Only if Section 4 has ZERO images provided (all fields left blank), keep the template's preset gallery. But whenever the user provides ANY images in Section 4, the gallery must display EXCLUSIVELY the user's provided images and nothing else.
10. CONTACT & STRUCTURED DATA: Update all click-to-call (tel:) and email (mailto:) links across Navbar, Hero, Contact Page, CallModal, and Footer. Update JSON-LD structured data (LocalBusiness schema) in index.html with the company name, city, phone, email, and logo URL.
11. SOCIAL & INSTAGRAM: If Instagram Post URLs are left blank below, hide the 3 embed cards and instead display a clean, modern "Follow us" banner.
12. CLEANUP: Remove any unused old logos, placeholder media, and unreferenced files from the project.
