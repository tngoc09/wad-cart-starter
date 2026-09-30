Task: 
1. Implement `cartTotal(items, options)` in `src/cart.js`.
2. Bổ sung các test cases bao phủ toàn bộ edge cases vào `test/cart.test.js`.
3. Thiết lập CI chạy tự động.

Constraints:
- Chỉ dùng JavaScript thuần, tuyệt đối KHÔNG thêm dependencies bên ngoài.
- Kết quả của `cartTotal` trả về phải là con số (number), làm tròn đến đơn vị đồng.
- Test chỉ dùng `node:test` và `node:assert/strict`.

Logic tính toán (cartTotal):
- subtotal = tổng của (price * qty).
- VAT = subtotal * vatRate.
- Phí vận chuyển (shipping) = 0 nếu subtotal >= freeShipFrom, ngược lại phí vận chuyển = shipFee.
- Tổng tiền = subtotal + VAT + shipping.

Edge cases (Yêu cầu xử lý trong code và bắt buộc phải có bài test tương ứng):
- Giỏ hàng rỗng: trả về 0.
- Mức subtotal đạt ngưỡng `freeShipFrom`: xác nhận phí vận chuyển là 0.
- `price` là số âm: ném lỗi `RangeError`.
- `qty` không phải số nguyên dương: ném lỗi `RangeError`.

CI Configuration:
- File `.github/workflows/ci.yml`.
- Kích hoạt khi có sự kiện `push` lên repository.
- Chạy môi trường `ubuntu-latest`, cài Node.js và chạy lệnh `npm test`.