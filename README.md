# React Learning Repository

## 📋 Mô tả Repository

Lưu trữ các ví dụ code, bài tập, và dự án nhỏ để ôn tập các khái niệm cốt lõi của React, từ cơ bản đến nâng cao.

### 🎯 Mục tiêu
- Học và thực hành các tính năng của React như Components, Hooks, State Management, Routing, etc...
- Chia sẻ kiến thức qua các ví dụ đơn giản, dễ chạy.
- Theo dõi tiến độ học tập qua các commit và branch.

### 📁 Cấu trúc Repository (Dự kiến)
react-learning/
├── javascript/                      # Vanila Javascript
│   └── …                          
├── tiktok-clone/                    # thư mục chính cho project TikTok Clone với React
│   ├── public/
│   │   ├── index.html
│   │   └── assets/                  # hình ảnh, icon, video mẫu,...
│   ├── src/
│   │   ├── assets/                  # ảnh, video, icon riêng project
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   │   └── MainLayout.jsx
│   │   │   ├── SidebarLeft/
│   │   │   ├── SidebarRight/
│   │   │   ├── Header/
│   │   │   ├── VideoCard/
│   │   │   ├── VideoPlayer/
│   │   │   └── common/               # các component dùng chung (Button, Avatar, etc)
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Following/
│   │   │   ├── Profile/
│   │   │   └── Upload/
│   │   ├── hooks/                    # custom hooks (useVideoAutoPlay, useInfiniteScroll,…)
│   │   ├── utils/                    # helper functions (formatNumber, fetchMockData,…)
│   │   ├── data/                     # dữ liệu mẫu (videos, users, tags,…)
│   │   ├── App.jsx
│   │   ├── routes.jsx                # định nghĩa routing
│   │   └── index.jsx                 # render vào DOM
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json?                # TypeScript config
└── README.md                         # mô tả tổng thể repository



**Lưu ý**: 
Repository hiện tại chia làm thư mục chính là Javascript và React. Với Javascript thì chủ yếu sẽ là Syntax nên chỉ cần clone về chạy trực tiếp file index.html.
Phần React sẽ cập nhật vào các phần bài tập thực hành.


## 🚀 Cách Chạy và Test Code (Dự kiến)
### Các bước Setup và Chạy
1. **Clone Repository**:
   ```bash
   git clone https://github.com/cuongnmrk/react-learning.git
   cd tiktok-clone
   ```

2. **Cài đặt Dependencies**:
   ```bash
   # Sử dụng npm
   npm install
  
   ```
   - Điều này sẽ tải về React, ReactDOM, và các thư viện khác được liệt kê trong `package.json`.

3. **Chạy Development Server**:
   ```bash
   # Sử dụng npm
   npm start

   ```
   - App sẽ tự động mở tại `http://localhost:5173/`.
   - Hot reload: Mọi thay đổi code sẽ tự động cập nhật trên browser.

4. **Build cho Production** (nếu cần):
   ```bash
   npm run build
   ```
   - Tạo folder `build/` với file tối ưu hóa, sẵn sàng deploy (ví dụ lên Netlify, Vercel).

### 🧪 Test Code
Dự kiến sẽ thêm lúc làm bài tập thực hành

- **Viết test mới**: Tạo file `.test.js` trong thư mục `src/` hoặc `__tests__/`.
- Ví dụ test đơn giản cho một component:
  ```jsx
  // src/components/Button.test.js
  import { render, screen } from '@testing-library/react';
  import Button from './Button';

  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  ```

Nếu chưa có test, bạn có thể thêm bằng cách cài `@testing-library/react` và `@testing-library/jest-dom` vào `package.json`.

### 🔧 Troubleshooting
- **Lỗi port 3000 bị chiếm**: Chạy `npm start` với `--port 3001`.
- **Dependencies lỗi**: Xóa `node_modules` và `package-lock.json`, rồi `npm install` lại.
- **Vấn đề với GitHub**: Đảm bảo bạn có quyền truy cập (repo public).
