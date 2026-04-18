# Behaviors & Interactions — lp-veiculo.lbassessoriajuridica.com.br

## Scroll Behaviors

### Header Scroll Transition
- **Trigger**: On scroll (any amount past ~10px)
- **State A (top)**: Navbar background rgba(248,246,242,0.9), no shadow
- **State B (scrolled)**: Navbar gains backdrop-filter blur + slightly more opaque bg
- **Transition**: CSS transition ~0.3s ease
- **Implementation**: scroll listener or CSS `position: sticky` with backdrop-filter

### Reveal Animations (all content sections)
- **Class**: `reveal` on containers, `reveal-active` added by JS when in viewport
- **Behavior**: Elements fade in (opacity: 0→1) and translate up (translateY: 20px→0)
- **Trigger**: IntersectionObserver or scroll listener
- **Transition**: `transition: opacity 0.6s ease, transform 0.6s ease`
- **State A**: `opacity: 0; transform: translateY(20px)`
- **State B**: `opacity: 1; transform: translateY(0)`

## Click Behaviors

### FAQ Accordion
- **Model**: Single-open accordion (clicking one closes others)
- **Components**: 7 items, each with a question (button) and answer (collapsible div)
- **Toggle icon**: `+` (closed) → `×` (open)
- **State A (closed)**: Answer div hidden (height: 0, overflow: hidden)
- **State B (open)**: Answer div visible, height auto
- **Transition**: height transition 0.3s ease

### Diagnostic Checklist
- **Model**: Multi-select checkboxes (independent)
- **Counter**: "Itens marcados: 0/7" updates live as user checks items
- **State**: Each checkbox can be independently checked/unchecked
- **On check**: Counter increments, possibly shows CTA when ≥3 items checked

## Hover Behaviors

### Navbar Links
- Color change to accent/primary on hover
- **Transition**: color 0.2s ease

### CTA Buttons (dark)
- **State A**: bg primary (navy), text white
- **State B (hover)**: bg slightly lighter navy, or opacity change
- **Transition**: background 0.2s ease

### WhatsApp Buttons (green)
- **State A**: bg success (green hsl(142,60%,45%))
- **State B (hover)**: bg darker green
- **Transition**: background 0.2s ease

### FAB WhatsApp Button
- Pulsing animation or scale on hover
- Shadow increase on hover

## Responsive Behavior

### Desktop (1440px)
- Hero: 2-column (text left, photo right)
- Problems: 3-column cards
- How it Works: 3-column steps
- Case Study: 2-column cards
- About: 2-column (text + reviews)

### Mobile (390px)
- Hero: 1-column (text on top, photo below)
- Problems: 1-column stacked cards
- How it Works: 1-column stacked steps
- Case Study: 1-column stacked
- About: 1-column stacked
- Navbar: Hamburger menu or simplified

### Breakpoint
- Main layout shift at ~768px (lg in Tailwind)
