# 👕 GOK Clothing Brand — Online Store

This is the official frontend web application for **GOK**, a modern Egyptian clothing brand specializing in high-quality t-shirts with a minimalist aesthetic. This project serves as an interactive online store where users can explore products, view image galleries, and place orders via WhatsApp.

🔗 **Live Preview:** [https://gokss.netlify.app/](https://gokss.netlify.app/)

---

## ✨ Features

- 🖼️ Image sliders for product previews
- 💬 Direct WhatsApp order integration
- 🧾 Product management (add, update, delete)
- ☁️ Product data synced via `jsonbin.io` for persistence
- 📱 Fully responsive and mobile-friendly layout
- 🌈 Dynamic product data via React Context
- 🖌️ TailwindCSS-powered UI design
- ⚡ Fast and lightweight SPA hosted on Netlify

---

## 🛠️ Technologies Used

| Tool / Library         | Purpose                                |
|------------------------|----------------------------------------|
| **React**              | Frontend framework                     |
| **TypeScript**         | Type-safe development                  |
| **Tailwind CSS**       | Utility-first styling framework        |
| **Keen Slider**        | Responsive product image carousel      |
| **React Context API**  | Global product state management        |
| **Lucide Icons**       | Modern icon set                        |
| **Netlify**            | Hosting platform                       |
| **LocalStorage**       | Caching product data locally           |
| **JSONBin.io**         | Remote JSON storage for syncing data  |

---

## ☁️ JSONBin Integration

Product data is synced remotely using [jsonbin.io](https://jsonbin.io/) to allow persistent updates across devices. This replaces the limitations of using only `localStorage`.

> ⚠️ You may need to provide a secret API key and bin ID in your environment for it to function correctly.

---

## 📦 Project Setup

```bash
# 1. Clone the repo
git clone https://github.com/ahmedev192/gok-store.git

# 2. Navigate to the project folder
cd gok-store

# 3. Install dependencies
npm install

# 4. Create a .env file with your JSONBin credentials
touch .env

# Example .env content:
VITE_JSONBIN_API_KEY=your_api_key_here
VITE_JSONBIN_ID=your_bin_id_here

# 5. Start the development server
npm run dev
