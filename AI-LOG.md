## 2026-09-30 — Planning 
Tool: Gemini.

Asked for: Phân tích và lên kế hoạch làm bài, giải thích các khái niệm cơ bản.

Kept: Cách thiết lập file quy tắc ban đầu, cấu trúc file.

Changed: Không có.

Rejected: Không dùng đoạn code Gemini gợi ý cho hàm `cartTotal` vì quyết định sẽ tự thực hành lại bằng GitHub Copilot trên VS Code.

By hand: Tạo các file cần thiết và chạy lệnh `npm test` để xác nhận test đỏ đúng như yêu cầu.

## 2026-09-30 — Implement cartTotal
Tool: GitHub Copilot trong VS Code.

Asked for: Viết hàm cartTotal bằng cách cung cấp nội dung file brief.md thông qua Inline Chat.

Kept: Giữ lại toàn bộ logic tính toán, xử lý RangeError và làm tròn số do Copilot sinh ra.

Changed: Không có.

Rejected: Không có.

By hand: Chạy `npm test` và đọc Git diff.

## 2026-09-30 — Implement Tests
Tool: GitHub Copilot trong VS Code.

Asked for: Viết 4 test cases cho các trường hợp (giỏ rỗng, free ship, lỗi RangeError).

Kept: Giữ nguyên logic tính toán, xử lý lỗi của cartTotal.

Changed: Không có.

Rejected: Không có.

By hand: Kiểm tra Git diff

## 2026-09-30 — Implement CI
Tool: GitHub Copilot trong VS Code.

Asked for: Tạo file GitHub Actions workflow (ci.yml) chạy npm test.

Kept: cấu hình YAML do Copilot tạo.

Changed: Không có.

Rejected: Không có.

By hand: Tổ chức cấu trúc thư mục .github/workflows.