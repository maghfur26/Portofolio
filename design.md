# Design System — Portfolio Website (Maghfur Hasani Style Reference)

> Dokumen ini dipakai sebagai acuan desain untuk opencode saat membangun website portofolio. Berdasarkan analisis 5 screenshot referensi (Hero, Selected Work, Service, Experience, Contact/Footer).

---

## 1. Konsep & Vibe

- **Gaya**: Minimalist, monochrome, editorial/type-driven, clean grid.
- **Mood**: Profesional, calm, sedikit "cloud/sky texture" sebagai background dekoratif di beberapa section.
- **Target**: Portfolio Fullstack Developer — konten fokus ke Work, Service, Experience, Contact.

---

## 2. Color Palette

| Token | Hex (approx) | Penggunaan |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Background utama (hero, work section) |
| `--color-bg-soft` | `#F4F4F5` / cloud texture light gray | Background section Service, Experience, Contact (bertekstur awan halus) |
| `--color-text-primary` | `#111111` | Judul besar, teks utama |
| `--color-text-secondary` | `#6B6B6B` | Deskripsi, subtext |
| `--color-surface-dark` | `#161616` / `#1A1A1A` | Card gelap (Experience card, tombol "Let's Talk", nav pill aktif) |
| `--color-surface-light-card` | `#FFFFFF` dengan border tipis | Card portfolio, pill button (Dribbble, Instagram, dll) |
| `--color-accent-green` | `#3ECF4A` (dot indikator) | Status "Available for New Project" |
| `--color-border` | `#E5E5E5` | Border tipis pemisah antar item (Experience list) |

**Prinsip warna**: hampir full grayscale/monochrome (hitam-putih-abu), aksen warna hanya dipakai minimal (dot hijau status availability, dan warna-warni muncul di dalam thumbnail project seperti pink/orange pada card "BloomCare").

---

## 3. Typography

- **Font style**: Sans-serif modern, bold untuk heading (headline besar berkesan seperti "MAGHFUR HASANI" pakai gaya outline + solid mixed), contoh font yang cocok: `Inter`, `General Sans`, `Neue Montreal`, atau `Space Grotesk`.
- **Heading Hero**: sangat besar (± 96–140px desktop), uppercase, huruf pertama nama pakai **outline/stroke text** (`MAGHFUR`) dan kata kedua **solid fill** (`HASANI`) — efek kontras visual.
- **Section label** (mis. `/SELECTED WORK`, `/SERVICE`, `/EXPERIENCE`): huruf kapital, prefix `/`, font size sedang (18–20px), letter-spacing agak lebar, warna abu terang sebagai watermark besar di belakang (opacity rendah, sangat besar, dekoratif).
- **Sub-heading** (nama service, nama perusahaan experience): 20–24px, semi-bold.
- **Body text**: 14–16px, regular, warna secondary abu.
- **Nav menu**: 14px, medium weight.

```css
--font-display: 'General Sans', 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;

--fs-hero: clamp(3rem, 10vw, 8rem);
--fs-section-label: 1.1rem;
--fs-heading: 1.5rem;
--fs-body: 1rem;
--fs-small: 0.875rem;
```

---

## 4. Layout & Grid

- Container max-width: `~1200–1280px`, centered, padding horizontal responsif (`24px` mobile, `64px+` desktop).
- Card/section punya **rounded corner besar** (`24–32px`) dan sering dibungkus dalam "frame" abu muda dengan padding, seperti bingkai foto (terlihat di semua section — ada outer padding/border rounded di sekeliling konten, memberi efek "card dalam card").
- Section-section utama disusun vertikal, tiap section punya background berbeda (putih vs abu bertekstur awan) untuk membedakan blok.

---

## 5. Section-by-Section Breakdown

### 5.1 Navbar (sticky/top)
- Kiri: badge pill "🟢 Available for New Project" (background putih, border tipis, dot hijau berkedip/pulse).
- Tengah/kanan: menu horizontal — `Work [48]`, `Service [4]`, `Experience [9y+]`, `Contact` (angka dalam kurung sebagai counter/badge kecil superscript).
- Kanan jauh: tombol CTA hitam pill `Let's Talk ↗` (icon arrow diagonal).

### 5.2 Hero Section
- Judul nama sangat besar full-width, 2 kata: kata 1 **outline text**, kata 2 **solid black**.
- Di bawah judul: foto profil (grayscale/duotone, potrait crop bulat/rounded), diposisikan center-bottom overlap dengan teks.
- Kiri bawah: role title `Fullstack Developer` (bold, besar) + deskripsi singkat 1-2 baris + tombol `Let's collaborate ↗` (pill hitam solid).
- Kanan bawah: stack vertikal pill buttons untuk social links — `⊕ Dribbble`, `📷 Instagram`, `🔗 LinkedIn`, `Bē Behance` — masing-masing pill putih dengan border tipis + icon kiri.

### 5.3 Selected Work Section
- Watermark besar teks `PORTFOLIO` transparan di background atas sebagai dekorasi.
- Label section: `/SELECTED WORK`.
- Filter tab: `All | Real Project | Exploration` (tab underline/pill sederhana, kiri).
- Kanan atas: `View All Work ↗` pill button dengan border.
- Grid 2 kolom (desktop), tiap card:
  - Thumbnail image besar rounded (rasio ~4:3), bisa berupa mockup UI/produk dengan badge kecil di pojok (`REAL PROJECT` label di pojok kiri atas salah satu card).
  - Icon panah bulat putih (↗) di pojok kanan atas thumbnail saat hover.
  - Judul project (bold, 18–20px) di bawah thumbnail.
  - 2 tag pill kecil di bawah judul (mis. `Landing Page`, `Kumpin Studio`) — border tipis, rounded full, teks kecil.

### 5.4 Service Section
- Background: abu muda bertekstur awan (soft gradient/cloud texture).
- Label: `/SERVICE` (kiri atas, kecil).
- List accordion/expandable:
  - Item aktif/terbuka: card gelap (hitam), rounded besar, berisi judul besar (`UIUX DESIGN`) + deskripsi 1-2 baris + ilustrasi mockup phone kecil di kanan (rotated/tilted) + tombol close (×) di ujung kanan.
  - Item tertutup lainnya: `WEB DESIGN & DEV`, `BRANDING`, `MOTIONS & ANIMATIONS` — teks besar uppercase, icon panah (↗) di kanan, dipisah garis horizontal tipis antar item (accordion collapsed style).

### 5.5 Experience Section
- Background sama (cloud texture abu), dibungkus card besar rounded dengan background gelap solid (`#161616`) sebagai kontras, dengan watermark teks `EXPERIENCE` raksasa transparan di belakang.
- Label: `/EXPERIENCE` (putih) + info kanan atas `9+ years of experience`.
- List riwayat kerja (5 baris), tiap baris:
  - Kiri: nama perusahaan (bold, putih) + posisi (abu terang, di bawahnya).
  - Kanan: rentang waktu kerja (abu terang, align kanan).
  - Separator garis tipis abu gelap antar baris.
  - Ada elemen dekoratif kecil (mockup UI card melayang, tilted) menempel di salah satu baris sebagai aksen visual.

### 5.6 Contact / Footer Section
- Background cloud texture abu muda, dibungkus card besar rounded outline.
- Badge pill status `🟢 Available for New Project` (center, atas).
- Heading besar center: `HAVE A PROJECT IN MIND?` (bold, uppercase, hitam).
- Sub-text center, 2 baris, abu, max-width terbatas agar center-align rapi.
- Tombol CTA hitam pill center: `Contact Me ↗`.
- Baris bawah: deretan pill horizontal — pill profil (foto kecil bulat + nama `Maghfur Hasani`, background hitam) diikuti pill social lain (`Dribbble`, `Instagram`, `LinkedIn`, `Behance`) — semua sejajar, rounded full, spacing sama.

---

## 6. Komponen Reusable

| Komponen | Deskripsi |
|---|---|
| `PillButton` | Rounded-full, padding `10px 20px`, border tipis atau solid dark, opsional icon kiri/kanan (↗, logo sosmed) |
| `SectionLabel` | Teks kecil prefix `/`, dengan watermark versi besar transparan di background |
| `StatusBadge` | Pill dengan dot berwarna (hijau = available) + teks status |
| `ProjectCard` | Thumbnail rounded + hover icon panah + judul + 2 tag pill |
| `AccordionServiceItem` | List item expandable, state aktif = card gelap dengan deskripsi + ilustrasi, state collapsed = teks besar + garis pemisah |
| `ExperienceRow` | Flex row: nama perusahaan+role (kiri) vs periode waktu (kanan), separator line |
| `SocialPillGroup` | Group horizontal/vertikal dari pill icon+label untuk social links |

---

## 7. Interaksi / Animasi (rekomendasi)

- Hover pada `ProjectCard`: scale-up thumbnail sedikit + fade-in icon panah.
- Accordion Service: smooth expand/collapse height + fade konten.
- Nav CTA & buttons: subtle scale/opacity on hover.
- Status dot "Available": pulse animation (ping effect) halus.
- Scroll reveal (fade-up) untuk tiap section saat masuk viewport.
- Background cloud texture: opsional parallax halus saat scroll.

---

## 8. Responsive Notes

- Mobile: hero heading turunkan ke `clamp(2.5rem, 12vw, 4rem)`, foto profil full width di bawah teks nama.
- Social pill (hero) yang di desktop vertikal kanan → di mobile jadi horizontal scroll atau grid 2 kolom.
- Grid `Selected Work` 2 kolom → 1 kolom di mobile.
- Experience row: waktu bisa pindah ke bawah nama perusahaan (stack vertikal) di mobile.

---

## 9. Tech Stack Suggestion (untuk opencode)

- **Framework**: React + Vite atau Next.js
- **Styling**: TailwindCSS (cocok untuk rounded-full pills, spacing konsisten, grayscale palette)
- **Animasi**: Framer Motion (untuk accordion, hover, scroll reveal)
- **Font**: Google Fonts — `Space Grotesk` atau `General Sans` untuk display, `Inter` untuk body
- **Icon**: Lucide React (untuk arrow ↗, close ×, social icons bisa pakai simple-icons)

---

## 10. Asset Checklist

- [ ] Foto profil (grayscale/duotone treatment)
- [ ] Thumbnail tiap project (min. rasio 4:3)
- [ ] Background texture "cloud/sky" (svg/png soft gradient) untuk section Service, Experience, Contact
- [ ] Icon set: Dribbble, Instagram, LinkedIn, Behance, arrow (↗), close (×)
