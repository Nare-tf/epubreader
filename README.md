# 📚 eBook Reader Pro

A sleek, modern, and fully offline-capable **EPUB reader web app** — accessible directly at **[nare-tf.github.io/epubreader](https://nare-tf.github.io/epubreader/)**.
Designed for simplicity, beauty and elegance, it offers a smooth reading experience in your browser — both **online and offline**.

![App Icon](imgs/favicon.png)

---

## 🌟 Features

* **📖 EPUB Reader:** Upload `.epub` files and start reading instantly.
* **📂 Library Management:** Automatically stores uploaded books using **IndexedDB**.
* **🕒 Reading History:** Tracks your recent books with auto-saved progress.
* **🔖 Bookmarks:** Add notes, jump to saved spots, and manage highlights.
* **📋 Custom Lists:** Organize books into personal reading lists.
* **🔍 In-Book Search:** Search and highlight terms throughout your book.
* **📑 Chapter Navigation:** Expandable and searchable chapter list.
* **🌙 Dark Mode:** Toggle between light and dark themes — saved automatically.
* **⛶ Fullscreen Mode:** Distraction-free, immersive reading experience.
* **💾 Offline-First:** Works even without internet, powered by **service worker (sw.js)**.
* **📱 PWA Ready:** Install directly from **Chrome** or **Edge** — no manual download needed!

---

## 🚀 How to Use

### 📲 Access Online

Go to **[nare-tf.github.io/epubreader](https://nare-tf.github.io/epubreader/)**

> You can start reading immediately — no installation or signup required.

### 💾 Install as an App

To install the app on your device:

**On Chrome or Edge (Desktop or Mobile):**

1. Open [nare-tf.github.io/epubreader](https://nare-tf.github.io/epubreader/)
2. Click the **Install App** (📥) icon in the address bar.
3. Done — the app will now appear on your desktop or home screen.

Once installed, the app runs **entirely offline** and saves your reading data locally.

---

## 📦 File Structure

```
epubreader/
├── imgs/                # App icons, favicon, and images
│   └── favicon.png
├── sw.js                # Service Worker for offline caching
├── manifest.json        # PWA metadata and color theme
├── index.html           # Main web app (UI + logic)
└── LICENSE              # License file
```

---

## 🧠 Keyboard Shortcuts

| Key   | Action                        |
| ----- | ----------------------------- |
| → / ← | Next / Previous Chapter       |
| B     | Show Bookmarks                |
| A     | Add Bookmark                  |
| C     | Open Chapter List             |
| S     | Search in Book                |
| F     | Toggle Fullscreen             |
| T     | Toggle Theme                  |
| R     | Restore Scroll Position       |
| Esc   | Exit Fullscreen / Close Modal |

---

## 💡 Notes

* No installation or cloning required — works directly in your browser.
* All your books, bookmarks, and progress are saved locally using **IndexedDB**.
* The app can be installed as a **PWA** from Chrome/Edge for a native experience.
* Reading history supports up to **50 books**; older ones are auto-cleared.

---

## 🖋️ Author

**Nare**

Built with ❤️ for readers who love elegant, beautiful, offline-first web experiences.

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more details.
