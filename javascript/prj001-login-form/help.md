Cho form dưới bằng html và css, hãy hoàn thiện phần còn lại bằng javascrip:

https://grok.com/share/c2hhcmQtNQ%3D%3D_1c3b65be-a7ca-4f55-8ef9-c74e103b8564

Tạo form đăng ký gồm: tên, email, mật khẩu. Khi nhấn “Gửi”, kiểm tra các trường: • Không để trống • Email đúng định dạng • Mật khẩu ít nhất 6 ký tự Nếu lỗi, hiển thị thông báo lỗi tương ứng.

Gợi ý JavaScript
Mục tiêu: Khi nhấn Gửi → kiểm tra → hiển thị lỗi hoặc thành công
Không dùng thư viện, chỉ DOM + JS thuần

Bước 1: Lấy các element
    const form = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const successMsg = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');

Bước 2: Hàm kiểm tra từng field
    function validateName() { /* ... */ }
    function validateEmail() { /* ... */ }
    function validatePassword() { /* ... */ }

Bước 3: Xử lý khi submit
    form.addEventListener('submit', function(e) {
    e.preventDefault(); // chặn reload

    // Reset lỗi
    clearErrors();

    let isValid = true;

    // Gọi từng hàm validate
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;

    if (isValid) {
        showSuccess();
    }
    });

Bước 4: Hiển thị lỗi / thành công
    function showError(element, message) { /* ... */ }
    function clearErrors() { /* ... */ }
    function showSuccess() { /* ... */ }