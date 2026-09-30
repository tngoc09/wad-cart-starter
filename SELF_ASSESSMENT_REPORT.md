# Self-assessment - IA#1
Submitted by: 24120391 — Đặng Thuyền Ngọc

I claim: 95/100

| Criterion | Max | claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | Code trong `src/cart.js` xử lý đủ: giỏ rỗng trả 0, ném `RangeError` khi giá/số lượng sai, làm tròn đúng chuẩn. |
| Tests | 20 | 20 | `npm test` xanh. Gồm 5 test cases bao phủ happy path, giỏ rỗng, threshold, và 2 trường hợp ném RangeError. |
| Harness | 20 | 17 | Đã thiết lập `.github/copilot-instructions.md`, `npm test` gate, và cấu hình CI trong `.github/workflows/ci.yml` chạy trên push, không có fomatter hay linter |
| Brief | 15 | 15 | `brief.md` nêu rõ scope, contract, constraints "no dependencies". |
| AI-LOG.md | 15 | 13 | Ghi chép rõ ràng việc dùng Gemini cho việc lên kế hoạch trước khi làm và dùng Copilot trong VS Code cho việc code hàm, test và CI. Tuy nhiên, cách viết chưa mô tả hoàn chỉnh lắm|

## What I did not manage
Chưa tự nghĩ ra các đoạn code mà dùng toàn bộ do Copilot sinh ra.

## What I would do differently
Đọc kĩ lại cách chấm điểm để lên kế hoạch cho test case và CI từ đầu, không bỏ sót yêu cầu của fomatter/linter.