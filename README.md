# React Learning Repository

## 📋 Mô tả Repository

Lưu trữ các ví dụ code, bài tập, và dự án nhỏ để ôn tập các khái niệm cốt lõi của React, từ cơ bản đến nâng cao.

### 🎯 Mục tiêu
- Học và thực hành các tính năng của React như Components, Hooks, State Management, Routing, etc...
- Chia sẻ kiến thức qua các ví dụ đơn giản, dễ chạy.
- Theo dõi tiến độ học tập qua các commit và branch.

### 📁 Cấu trúc Repository (Dự kiến)

| Thư mục/File | Mô tả |
|--------------|-------|
| **/src** | Thư mục chính chứa source code React. Bao gồm:<br>- **components/**: Các component tái sử dụng (ví dụ: Button, Card).<br>- **pages/**: Các trang chính của app (ví dụ: Home, About).<br>- **hooks/**: Custom hooks (ví dụ: useFetch, useForm).<br>- **App.js**: Component gốc của ứng dụng.<br>- **index.js**: Entry point để render app. |
| **/public** | Tài nguyên tĩnh:<br>- **index.html**: Template HTML chính.<br>- **favicon.ico**: Icon của app.<br>- Các file hình ảnh hoặc asset khác. |
| **package.json** | File cấu hình npm/yarn: liệt kê dependencies (React, ReactDOM), scripts (start, build, test), và metadata dự án. |
| **README.md** (file này) | Hướng dẫn sử dụng và setup. |
| **.gitignore** | File bỏ qua các file không cần commit (node_modules, build folder). |
| **tests/** (nếu có) | Thư mục chứa các file test unit/integration (sử dụng Jest + React Testing Library). |

**Lưu ý**: 
Repository hiện tại chia làm thư mục chính là Javascript và React. Với Javascript thì chủ yếu sẽ là Syntax nên chỉ cần clone về chạy trực tiếp file index.html.
Phần React sẽ cập nhật vào các phần bài tập thực hành.


## 🚀 Cách Chạy và Test Code (Dự kiến)
### Các bước Setup và Chạy
1. **Clone Repository**:
   ```bash
   git clone https://github.com/cuongnmrk/react-learning.git
   cd react-learning
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
   - App sẽ tự động mở tại `http://localhost:3000`.
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
