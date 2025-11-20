#  TikTok Clone (React + MUI)

Dự án **TikTok Clone UI** được xây dựng bằng **React** và **Material UI**
---

##  **1. Công nghệ sử dụng**

* **React 18+**
* **Material UI (MUI v5)**
* React Router DOM (routing)
* Intersection Observer API (auto-play video)
* ES Modules
* Optional: TypeScript

---

## 📁 **2. Cấu trúc thư mục**

```text
javascript/                    # vanila JS
tiktok-clone/
├── public/
│   ├── index.html
│   └── assets/
│
│   src/
│   ├── components/
│   │    ├── layout/
│   │    │     ├── Sidebar/
│   │    │     │    ├── Sidebar.jsx
│   │    │     │    └── SidebarItem.jsx
│   │    │     ├── Header/
│   │    │     │    └── Header.jsx
│   │    │     └── MainLayout.jsx
│   │    ├── video/
│   │    │     ├── VideoCard.jsx
│   │    │     └── VideoPlayer.jsx
│   │    ├── common/
│   │    │     ├── UserCard.jsx
│   │    │     ├── FollowButton.jsx
│   │    │     └── Loading.jsx
│   │    └── ...
│   │
│   ├── pages/
│   │    ├── Home/
│   │    │     └── Home.jsx
│   │    ├── Following/
│   │    │     └── Following.jsx
│   │    ├── VideoDetail/
│   │    │     └── VideoDetail.jsx
│   │    └── Profile/
│   │          └── Profile.jsx
│   │
│   ├── routers/
│   │    └── AppRouter.jsx
│   │
│   ├── assets/
│   ├── utils/
│   └── App.jsx
│
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json (optional)
```

---

##  **3. Mục tiêu của dự án**

Tạp trung chủ yếu vào FE

* Hiểu cách xây dựng UI modular với React + MUI
* Quản lý layout nhiều cột (3-column layout)
* Tạo component video có auto-play khi vào viewport
* Sử dụng mock data để render giao diện như sản phẩm thực tế
* Nắm cấu trúc dự án chuẩn, dễ mở rộng

---

##  **4. Các tính năng chính**

###  **4.1 Layout 3 cột**

* **Sidebar trái:** Navigation (For You, Following, LIVE), Suggested accounts
* **Feed ở giữa:** Danh sách video dạng scroll dọc
* **Sidebar phải:** Gợi ý nội dung, hashtag, suggested creators

---

###  **4.2 Header**

* Logo
* Search bar (UI + suggested search)
* Nút Upload
* Login / Avatar

---

###  **4.3 Video Feed**

* Auto-play/pause khi video xuất hiện hoặc rời viewport
* VideoPlayer component tách riêng
* Nút Like / Comment / Share
* Âm lượng toggle

---

###  **4.4 Trang Profile**

* Avatar + banner
* Thông tin cơ bản (followers, likes)
* List video dạng grid

---

###  **4.5 Trang Upload (UI only)**

* Upload button
* Footer option (privacy, description input)
* Submit UI (không xử lý backend)

---

##  **5. Cài đặt và chạy project**

### **Yêu cầu**

* Node.js LTS (>=16)
* npm hoặc yarn

### **Cài đặt**

```bash
npm install
# hoặc
yarn install
```

### **Chạy project**

```bash
npm start
# hoặc
yarn start
```

### **Build**

```bash
npm run build
```

---

##  **6. Mô tả flow phát triển**

1. Khởi tạo React + MUI
2. Tạo Layout tổng + Header
3. Xây Sidebar trái + phải
4. Tạo VideoCard + VideoPlayer
5. Tạo feed auto-play bằng Intersection Observer
6. Tạo trang Profile + Upload
7. Setup routing
8. Thêm responsive và polishing UI

---

##  **7. Roadmap mở rộng**

* [ ] Dark mode
* [ ] Infinite scroll feed
* [ ] API thực (Node.js hoặc Firebase hoặc Spring Boot)
* [ ] Profile editable
* [ ] Social login
* [ ] State management (Zustand / Redux Toolkit)

---

##  **8. Other**

Trước khi bắt đầu, hãy:

Cần tìm hiểu các concept

   * MUI components
   * React Router DOM
   * useEffect / useLayoutEffect
   * Intersection Observer

---