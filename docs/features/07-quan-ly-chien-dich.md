---
sidebar_position: 7
---

# Xem Các Chiến Dịch Quảng Cáo

Xem tất cả chiến dịch, bật/tắt bằng toggle hoặc chat với AI.

---

## Mô tả

Quản lý chiến dịch dễ dàng:

- Xem danh sách tất cả campaigns
- Hiển thị chỉ số: Chi tiêu, Kết quả, CPR
- Bật/tắt nhanh bằng toggle
- Hoặc điều khiển bằng chat

---

## Câu lệnh thường dùng

| Lệnh | Mô tả |
|------|-------|
| `Xem tất cả chiến dịch` | Hiển thị danh sách campaigns |
| `Tắt chiến dịch [tên]` | Tạm dừng chiến dịch |
| `Bật chiến dịch [tên]` | Kích hoạt lại chiến dịch |

---

## Ví dụ thực tế

### Xem danh sách chiến dịch

```
👤 Bạn: Xem tất cả chiến dịch

🤖 AI: Đây là danh sách chiến dịch của bạn:

┌─────────────────────────────────────────────────────────┐
│  📊 Chiến dịch (76)  │  Nhóm QC (0)  │  Quảng cáo (0)  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🟢 Phun xăm 27/12                                      │
│     Chi tiêu: 1.2tr  │  Kết quả: 28  │  CPR: 42k  [ON] │
│                                                         │
│  🟢 Tết 26/12                                           │
│     Chi tiêu: 850k   │  Kết quả: 15  │  CPR: 56k  [ON] │
│                                                         │
│  ⚪ Gội DS 20/11                                        │
│     Chi tiêu: 2.1tr  │  Kết quả: 45  │  CPR: 46k  [OFF]│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### Tắt chiến dịch

```
👤 Bạn: Tắt chiến dịch Phun xăm 27/12

🤖 AI: ✅ Đã tắt thành công!
       
       Chiến dịch "Phun xăm 27/12" đã được tạm dừng.
       Trạng thái: Đang chạy → Tạm dừng
```

---

### Bật chiến dịch

```
👤 Bạn: Bật chiến dịch Gội DS 20/11

🤖 AI: ✅ Đã bật thành công!
       
       Chiến dịch "Gội DS 20/11" đang chạy lại.
       Trạng thái: Tạm dừng → Đang chạy
```

---

## Giao diện Toggle

Bạn cũng có thể bật/tắt trực tiếp bằng cách click vào toggle switch:

| Toggle | Trạng thái |
|--------|------------|
| 🟢 Xanh | Đang chạy |
| ⚪ Xám | Tạm dừng |

---

:::tip Mẹo hay
Kết hợp với [Quy tắc tự động](/features/quy-tac-tu-dong) để AI tự bật/tắt dựa trên hiệu suất!
:::
