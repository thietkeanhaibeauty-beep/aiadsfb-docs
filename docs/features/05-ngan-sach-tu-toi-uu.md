---
sidebar_position: 5
---

# Ngân Sách Tự Tối Ưu 24/7

AI tự động điều chỉnh ngân sách dựa trên hiệu suất, hoạt động 24/7.

---

## Mô tả

Tính năng này giúp:

- **Tăng ngân sách** khi chiến dịch hiệu quả (CPR thấp)
- **Giảm ngân sách** khi chi phí cao (CPR cao)
- Kiểm tra tự động theo chu kỳ (mỗi 30 phút)
- Không cần nhân sự trực

---

## Câu lệnh

```
Tạo rule tối ưu ngân sách
```

---

## Ví dụ

```
Bạn: Tạo rule tối ưu ngân sách

AI: Rule đã kích hoạt!

Tăng 20% khi CPR < 50k
Giảm 30% khi CPR > 100k
Kiểm tra mỗi 30 phút

AI: Đã áp dụng cho 5 campaigns
```

---

## Quy tắc mặc định

| Điều kiện | Hành động |
|-----------|-----------|
| CPR < 50k | Tăng 20% ngân sách |
| CPR 50k - 100k | Giữ nguyên |
| CPR > 100k | Giảm 30% ngân sách |
| Không có kết quả sau 4h | Tạm dừng |

---

## Tùy chỉnh

Bạn có thể tùy chỉnh:
- Ngưỡng CPR tăng/giảm
- Tỷ lệ % tăng/giảm
- Chu kỳ kiểm tra
- Giới hạn ngân sách tối đa/tối thiểu

---

:::info Hoạt động 24/7
Rule chạy liên tục ngay cả khi bạn không online!
:::
