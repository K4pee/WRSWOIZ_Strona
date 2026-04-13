# WRS WOIZ - Nowoczesny Next.js + Docker

## 🚀 Szybki start z Dockerem

### Build & Run
```bash
docker build -t wrs-woiz .
docker run -p 3000:3000 wrs-woiz
```

Albo z docker-compose:
```bash
docker-compose up --build
```

Otwórz: **http://localhost:3000**

---

## 📦 Lokalny development (bez Dockera)

### Wymagania
- Node.js 18+ 
- npm 9+

### Setup
```bash
npm install
npm run dev
```

Otwórz: **http://localhost:3000**

---

## 📁 Struktura projektu

```
DW_2026_next/
├── app/
│   ├── layout.tsx          # Główny układ
│   ├── page.tsx            # Strona główna
│   └── globals.css         # Global styles  
├── components/
│   ├── Navbar.tsx          # Nawigacja + tryb ciemny
│   ├── Hero.tsx            # Sekcja hero
│   ├── Countdown.tsx       # Odliczanie
│   ├── News.tsx            # Aktualności
│   └── Footer.tsx          # Stopka
├── public/                 # Static assets
├── lib/                    # Utilities
├── Dockerfile             # Docker config
├── docker-compose.yml     # Docker Compose config
└── package.json
```

---

## ✨ Funkcje

✅ **Odliczanie** - do Dnia Wydziału 2026
✅ **Responsywny design** - mobile, tablet, desktop
✅ **Nowoczesny stack** - Next.js 15, React 19
✅ **Gotowe do Dockera** - gotowy do wdrożenia
✅ **Łatwa edycja treści** - aktualizacja wszystkiego w jednym pliku `lib/site-content.ts`

---

## 🔧 Development

### Dodawanie nowych stron
```bash
# Utwórz plik w app/
touch app/about/page.tsx
```

### Build
```bash
npm run build
npm start
```

---

## 🐳 Wdrożenie z Dockerem

### Testy lokalne
```bash
docker-compose up
```

### Build produkcyjny
```bash
docker build -t wrs-woiz:latest .
docker push your-registry/wrs-woiz:latest
```

---

## 📝 Zadania

- [ ] Wyszukiwanie (CTRL+K)
- [ ] Integracja z CMS (opcjonalnie)
- [ ] Formularz kontaktowy (opcjonalnie)
- [ ] Analytics

---

## 👨‍💻 Stos technologiczny

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Stylowanie**: CSS3 (responsywnie)
- **Kontener**: Docker
- **Node**: 24.14.0

---

## 📄 Licencja

© 2026 WRS WOIZ
