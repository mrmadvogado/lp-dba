# Page Topology — lp-veiculo.lbassessoriajuridica.com.br

## URL
https://lp-veiculo.lbassessoriajuridica.com.br/

## Overall Layout
- Single-page scrollable LP
- Fixed header (navbar + alert bar) overlaid on content
- Content in a full-width column, sections alternate cream and dark navy backgrounds
- Floating WhatsApp FAB at bottom-right

## Section Order (top to bottom)

| # | ID | Name | Background | Type |
|---|-----|------|-----------|------|
| 0 | — | AlertBar | amber-600 (#D97706) | Fixed overlay (top of header) |
| 1 | — | Navbar | background/0.9 backdrop | Fixed overlay (below alert bar) |
| 2 | hero | HeroSection | background (cream) | Static, 2-col |
| 3 | dores | ProblemsSection | background (cream) | Static, 3-col cards |
| 4 | direitos | LegalRightsSection | background (cream) | Static, numbered list |
| 5 | como-funciona | HowItWorksSection | primary (dark navy) | Static, 3-col steps |
| 6 | caso | CaseStudySection | background (cream) | Static, 2-col cards |
| 7 | checklist | DiagnosticSection | background (cream) | Interactive checkboxes |
| 8 | reconhecimento | AboutSection | background (cream) | Static, 2-col (text + reviews) |
| 9 | faq | FAQSection | background (cream) | Click-driven accordion |
| 10 | contato | CTASection | primary (dark navy) | Static CTA |
| 11 | — | LegalNoticesSection | background (cream) | Static text |
| 12 | — | Footer | background-darker (cream-dark) | Static |
| 13 | — | WhatsAppFAB | — | Fixed bottom-right overlay |

## Fixed/Sticky Elements
- **Header** (`fixed top-0 left-0 right-0 z-50`): Contains AlertBar + Navbar stacked vertically
- **WhatsAppFAB** (`fixed bottom-6 right-6`): Green WhatsApp button

## Z-Index Layers
- Header: z-50
- FAB: z-50
- Content sections: z-0

## Interaction Models
- **Header**: On scroll, navbar gains backdrop blur / opacity transition
- **ProblemsSection**: Static — 3 cards in a row
- **LegalRightsSection**: Static — numbered list items with reveal animation on scroll
- **HowItWorksSection**: Static — 3 numbered steps
- **DiagnosticSection**: Click-driven — checkboxes that count marked items (0/7)
- **FAQSection**: Click-driven accordion (single open, Radix-like)
- **All sections**: `reveal` class triggers fade-in + translateY animation on scroll enter

## Navigation Links
- O Problema → #problema (links to #dores)
- Como Funciona → #como-funciona
- Avaliações → #reconhecimento
- FAQ → #faq
- Contato → #contato
- "Falar agora no WhatsApp" → https://wa.me/5547991860056?text=Olá!+Meu+veículo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.

## WhatsApp Number
+55 47 99186-0056
Link: `https://wa.me/5547991860056?text=Olá!+Meu+veículo+foi+bloqueado+e+gostaria+de+entender+meus+direitos.`
