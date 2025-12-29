---
sidebar_position: 12
---

# Tạo Quy Tắc Tự Động

Thiết lập automation rules để quản lý chiến dịch dựa trên hiệu suất.

---

## Mô tả

Quy tắc tự động giúp:

- Tự động tắt campaigns kém hiệu quả
- Tăng/giảm ngân sách theo điều kiện
- Gửi thông báo khi đạt ngưỡng
- Gắn nhãn phân loại campaigns

---

## Câu lệnh

```
Tạo quy tắc tự động
```

---

## Cấu trúc quy tắc

### Phần NẾU (Điều kiện)

| Metric | Mô tả |
|--------|-------|
| Chi tiêu | Tổng tiền đã chi |
| CPR | Chi phí trên kết quả |
| CPC | Chi phí trên click |
| CTR | Tỷ lệ click |
| Kết quả | Số lượng chuyển đổi |
| Impressions | Lượt hiển thị |

**Các điều kiện:** Lớn hơn, Nhỏ hơn, Bằng, Lớn hơn hoặc bằng, Nhỏ hơn hoặc bằng

### Phần THÌ (Hành động)

| Hành động | Mô tả |
|-----------|-------|
| Tắt chiến dịch | Pause campaign |
| Bật chiến dịch | Resume campaign |
| Tăng ngân sách | Tăng theo % |
| Giảm ngân sách | Giảm theo % |
| Gửi thông báo | Zalo/Email |
| Gắn nhãn | Phân loại camp |

---

## Ví dụ quy tắc

### Tắt campaign chi tiêu cao

```
NẾU: Chi tiêu > 500,000đ
THÌ: Tắt chiến dịch + Gắn nhãn "Camp xấu"
```

### Tăng ngân sách campaign tốt

```
NẾU: CPR < 30,000đ
THÌ: Tăng ngân sách 20% + Gắn nhãn "Camp tốt"
```

### Thông báo khi đạt mục tiêu

```
NẾU: Kết quả >= 50
THÌ: Gửi thông báo Zalo
```

---

:::warning Lưu ý
Quy tắc sẽ áp dụng cho **TẤT CẢ** chiến dịch đang chạy. Hãy cân nhắc kỹ trước khi tạo!
:::

:::tip Best Practice
- Bắt đầu với ngưỡng rộng, điều chỉnh dần
- Test quy tắc trên 1-2 camp trước
- Kết hợp nhiều quy tắc để tối ưu toàn diện
:::
