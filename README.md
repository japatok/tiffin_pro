# PureMeal Kitchen - Premium Tiffin Service Platform

PureMeal Kitchen is a premium, modern, and SEO-optimized web application for a homemade food brand. It provides healthy, hygienic, and affordable tiffin services to students and professionals.

## 🚀 Experience the Quality
- **Premium UI/UX:** Crafted with Tailwind CSS and Framer Motion for a high-end feel.
- **Mobile First:** Fully responsive design optimized for fast loading on all devices.
- **Real-time Backend:** Powered by Firebase (Firestore & Auth) for seamless data management.
- **Conversion Focused:** Strategic CTA placements, WhatsApp integration, and trust-building testimonials.

## 🛠️ Technology Stack
- **Frontend:** React 19, Vite, Tailwind CSS 4
- **Animations:** Motion (formerly Framer Motion)
- **Icons:** Lucide React
- **Backend:** Firebase (Firestore, Authentication)
- **Validation:** Zod + React Hook Form

## 📂 Project Structure
- `/src/components`: Reusable UI components (Hero, Menu, Pricing, etc.)
- `/src/pages`: Main application pages.
- `/src/lib`: Core utility functions (Firebase initialization, error handling).
- `/src/types.ts`: Shared TypeScript interfaces.
- `/firebase-blueprint.json`: Data schema for Firestore collections.
- `/firestore.rules`: Hardened security rules.

## ☁️ Deployment Instructions

### Option 1: Firebase Hosting (Recommended)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build the project: `npm run build`
5. Deploy: `firebase deploy --only hosting`

### Option 2: Google Cloud Run
1. Ensure your `package.json` has a `start` script or uses the standard Vite build output.
2. Build the Docker image (if using custom server) or use the standard Cloud Build trigger.
3. Deploy to Cloud Run:
   ```bash
   gcloud run deploy puremeal-kitchen --source .
   ```

## 🔐 Security
- Hardened Firestore Security Rules are implemented in `firestore.rules`.
- CSRF and Input validation handled via industry-standard libraries.
- PII data is isolated and protected by per-user access rules.

## ✨ Business Goals
- **Hygiene & Trust:** Professional imagery and certification highlights.
- **Daily Variety:** Dynamic menu rendering support.
- **Subscription Growth:** Tiered pricing plans with clear benefits.
- **Direct Engagement:** One-click WhatsApp and Call integration.

---
*Built with ❤️ for a healthier lifestyle.*
