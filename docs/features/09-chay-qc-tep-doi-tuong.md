---
sidebar_position: 9
---

# Chạy Quảng Cáo Tệp Đối Tượng

Chạy quảng cáo nhắm đến Custom Audience hoặc Lookalike Audience đã tạo.

## tả

Sau khi tạo tệp đối tượng (Custom Audience hoặc Lookalike), bạn có thể chạy quảng cáo trực tiếp đến tệp đó để:
- Retargeting khách hàng đã tương tác
- Tiếp cận đối tượng tương tự (Lookalike)
- Tối ưu chi phí quảng cáo

## lệnh

```
Chạy quảng cáo tệp đối tượng
```

Hoặc cụ thể:

```
Chạy QC đến tệp [Tên tệp]
```

## sử dụng

### 1: Chọn tệp đối tượng

AI sẽ hiển thị danh sách các tệp Custom Audience và Lookalike có sẵn:

```
Bạn: Chạy quảng cáo tệp đối tượng

AI: 📋 Danh sách tệp đối tượng:

1. Người tương tác 30 ngày (5,234 người)
2. Người nhắn tin 60 ngày (2,845 người)
3. LAL 1% - Người mua hàng (980,000 người)
4. LAL 2% - Người tương tác (1,960,000 người)

Chọn tệp bạn muốn chạy quảng cáo:
```

### 2: Chọn hoặc nhập tên tệp

```
Bạn: Chọn tệp "Người tương tác 30 ngày"
```

### 3: Thiết lập quảng cáo

AI sẽ hỏi các thông tin:
- Loại quảng cáo (Tin nhắn/Website/Leads)
- Ngân sách
- Thời gian chạy
- Nội dung quảng cáo

### 4: Xác nhận và chạy

```
AI: ✅ Đã tạo quảng cáo thành công!

📊 Campaign: Retargeting - Người tương tác 30 ngày
🎯 Audience: 5,234 người
💰 Ngân sách: 300,000đ/ngày
📅 Thời gian: 7 ngày

Campaign đang được review bởi Facebook...
```

## ý quan trọng

:::warning Kích thước tệp tối thiểu
- Custom Audience cần ít nhất **100 người** để chạy quảng cáo
- Lookalike Audience cần tệp nguồn ít nhất **1,000 người** để hiệu quả
:::

:::tip Best Practice
- Retargeting với Custom Audience thường có CPR thấp hơn 30-50%
- Kết hợp nhiều tệp để tăng reach
- Test A/B giữa các tỷ lệ Lookalike (1% vs 2% vs 3%)
:::

## hợp với Template

Bạn có thể kết hợp với Mẫu nhắm mục tiêu:

```
Chạy QC tệp "Người nhắn tin" với template @#spa
```

AI sẽ áp dụng cài đặt từ template và chạy đến tệp đối tượng được chọn.
