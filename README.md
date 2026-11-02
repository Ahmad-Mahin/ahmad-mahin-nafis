# Ahmad Mahin Nafis — Scrollytelling Portfolio Website

A high-end, Awwwards-level "Scrollytelling" personal portfolio website for **Ahmad Mahin Nafis** (Industrial & Production Engineering Undergraduate at SUST, Campus Lead & Ergonomics Researcher).

## 🚀 Key Highlights & Architectural Features

### 1. Cinematic 120-Frame HTML5 Canvas Scroller (`ScrollyCanvas.tsx`)
- **Parent Container:** `500vh` height allowing a smooth, long cinematic scroll scrubbing interaction.
- **Rendering Strategy:** HTML5 `<canvas>` rendering 120 high-fidelity WebP sequence frames (`frame_000.webp` to `frame_119.webp`) synchronized via Framer Motion's `useScroll` (`scrollYProgress`).
- **Optimization & Preloading:** Full progressive preloading in `useEffect` with instant first-frame paint, nearest-neighbor frame fallback to eliminate white flashes or blank frames during rapid scrolling, and high-DPI retina display adaptation (`window.devicePixelRatio`).
- **Dynamic `object-fit: cover`:** Custom mathematical scaling preserving aspect ratio across all viewports (Mobile, Tablet, Desktop, Ultra-wide).
- **Edge Blending:** Seamless `#08090d` background integration with soft radial ambient lighting and gradient edge vignettes matching the studio lighting in the video frames.

### 2. Multi-Stage Parallax Overlay (`Overlay.tsx`)
- **Stage 1 (0% – 20%):** Hero Section — "AHMAD MAHIN NAFIS" with IPE SUST badge, bio, and animated scroll indicator.
- **Stage 2 (24% – 48%):** Left-aligned glassmorphic card — "I build dynamic experiences & lead high-impact teams" highlighting campus initiatives.
- **Stage 3 (50% – 74%):** Right-aligned glassmorphic card — "Human-AI Collaboration in Manufacturing & Ergonomics" highlighting Research Nexus 2.0.
- **Stage 4 (76% – 98%):** Milestone completion callout transitioning directly into the detailed work sections.
- **Timeline Scrubber:** Live frame counter and scroll percentage tracker.

### 3. Comprehensive Post-Scroll Portfolio & Work Grid
- **Selected Works & Case Studies (`Projects.tsx`):** Glassmorphism cards with category filters, hover glows, and an interactive modal for in-depth reading.
  - Human-AI Collaboration in Industry 5.0 (Research Nexus 2.0)
  - UNICEF-Partnered Workplace Productivity Program (Data Solution-360)
  - HULT PRIZE at SUST 2026 Mobilization Campaign (150+ teams record)
  - Case Quest 2.0 & Data Seminars Pipeline (IPE Association)
- **Experience Timeline (`Experience.tsx`):** All 9 organizational & leadership roles with expandable achievements and skill tags.
- **Academic Foundation (`Education.tsx`):** SUST B.Sc. IPE, Notre Dame College (GPA 5.00), Stanford University Code in Place.
- **Honors & Milestones (`Achievements.tsx`):** IMO India Silver Medal, BDMO Regional Gold Medal, Talent Hunt SUST Top 30, National Children's Day awards, 3rd SAANSO Scout Jamboree.
- **Skills Matrix (`Skills.tsx`):** Categorized Bento grid covering Leadership, Communication, Research & Ergonomics, Technical software (Power BI, Excel, Canva, Python), and Language proficiencies (Bangla, English, Hindi).
- **Contact & Direct Messaging (`Contact.tsx`):** One-click clipboard copy for email (`a.mahin.nafis@gmail.com`), direct phone link (`+880 1842-432181`), LinkedIn connection, and interactive message dispatcher.
- **Atmospheric Audio Engine (`SoundToggle.tsx`):** Web Audio API ambient analog drone synthesis without external asset dependencies.
- **Cursor Ambient Follower (`CursorGlow.tsx`):** Spring-physics mouse glow for desktop users.

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Dark Luxury Theme)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Audio:** Web Audio API

---

## 🏃‍♂️ How to Run Locally

```bash
# 1. Install dependencies (if needed)
npm install

# 2. Start development server
npm run dev
# or:
npm run start -- -p 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
