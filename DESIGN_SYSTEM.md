# Shoonya Insurance Brokers - Design System

## Brand Identity

### Brand Personality
- Trust-first
- Calm
- Human
- Legacy-driven (75+ years)
- Not salesy, not flashy, not startup-ish

### Visual Style
- Clean white background
- Soft neutral greys
- Deep professional blue accents
- Subtle dividers
- Plenty of whitespace
- No gradients, no loud colors

## Color Palette

### Primary Colors
- **Primary Blue**: `#1e3a8a` - Deep professional blue for CTAs and accents
- **Primary Hover**: `#1e40af` - Darker blue for hover states
- **Secondary Green**: `#25D366` - WhatsApp green for secondary CTAs
- **White**: `#ffffff` - Clean background

### Neutral Greys
- **Grey 50**: `#fafafa` - Lightest background
- **Grey 100**: `#f5f5f5` - Card backgrounds
- **Grey 200**: `#e5e5e5` - Borders and dividers
- **Grey 300**: `#d4d4d4`
- **Grey 400**: `#a3a3a3`
- **Grey 500**: `#737373` - Muted text
- **Grey 600**: `#525252`
- **Grey 700**: `#404040` - Body text
- **Grey 800**: `#262626`
- **Grey 900**: `#171717` - Headings

## Typography

### Font Family
- **Primary Font**: DM Sans
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Type Scale
- **H1**: 2.5rem (40px) - Bold, -0.02em letter-spacing
- **H2**: 2rem (32px) - Bold, -0.01em letter-spacing
- **H3**: 1.5rem (24px) - Bold
- **H4**: 1.25rem (20px) - Bold
- **Body (p)**: 1rem (16px) - Normal weight, 1.7 line-height
- **Small**: 0.875rem (14px)

### Font Weights
- **Bold**: 700 - Headings
- **Medium**: 500 - Buttons, labels
- **Normal**: 400 - Body text

## Spacing Scale

### Padding/Margin
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Container Max-Widths
- **Content**: 80rem (1280px)
- **Text**: 65rem (1040px)
- **Narrow**: 50rem (800px)

## Components

### Buttons

#### Primary CTA
```tsx
className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium"
```
- Background: Primary Blue (#1e3a8a)
- Hover: Darker blue (#1e40af)
- Text: White
- Border Radius: 0.5rem (8px)
- Transition: All 200ms ease

#### Secondary CTA (WhatsApp)
```tsx
className="px-8 py-4 bg-secondary hover:bg-secondary-hover text-white rounded-lg transition-colors font-medium"
```
- Background: WhatsApp Green (#25D366)
- Hover: Darker green (#20bd5a)
- Text: White
- Border Radius: 0.5rem (8px)

### Cards

#### Feature Card
```tsx
className="bg-white border border-grey-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
```
- Background: White
- Border: Grey 200 (#e5e5e5)
- Padding: 2rem (32px)
- Border Radius: 0.5rem (8px)
- Hover: Shadow elevation

#### Policy Card
```tsx
className="bg-white border border-grey-200 rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all"
```
- Background: White
- Border: Grey 200, changes to Primary on hover
- Padding: 1.5rem (24px)
- Interactive hover state

### Icons
- Size: 1.5rem (24px) for feature icons
- Size: 1rem (16px) for inline icons
- Color: Primary blue in icon containers
- Container: 3rem (48px) square with 10% opacity primary background

### Dividers
```tsx
className="border-t border-grey-200"
```
- Width: 1px
- Color: Grey 200 (#e5e5e5)
- Subtle and minimal

## Layout Principles

### Sections
- Vertical padding: 6rem (96px) desktop, 4rem (64px) mobile
- Horizontal padding: 1.5rem (24px) mobile, 2rem (32px) desktop
- Max-width container: 80rem (1280px)

### Grid Systems
- **3-column**: Feature cards, testimonials
- **4-column**: Category cards
- **2-column**: Policy detail info grid
- Gap: 2rem (32px) desktop, 1.5rem (24px) mobile

### Whitespace
- Generous spacing between sections
- Clear visual hierarchy
- Breathing room around text blocks

## UI Principles

1. **Minimal**: Avoid clutter, use whitespace generously
2. **Structured**: Clear hierarchy and organization
3. **Editorial**: Text-focused, readable, calm
4. **Professional**: Serious financial institution feel
5. **Trustworthy**: Consistent, reliable, timeless design

## Accessibility

- Color contrast ratio: WCAG AA compliant
- Focus states: Visible ring on interactive elements
- Touch targets: Minimum 44x44px on mobile
- Semantic HTML: Proper heading hierarchy
- Alt text: All images include descriptive alt text

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1024px

### Mobile Considerations
- Stack columns on mobile
- Larger touch targets
- Simplified navigation with hamburger menu
- Hide secondary CTAs on very small screens
- Maintain readability and whitespace
