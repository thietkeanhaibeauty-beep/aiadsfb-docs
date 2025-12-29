// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Giới thiệu AIadsfb.com',
    },
    {
      type: 'category',
      label: 'Tính năng',
      collapsed: false,
      items: [
        { type: 'doc', id: 'features/01-bao-cao-ads', label: '1. Xem Báo Cáo Quảng Cáo' },
        { type: 'doc', id: 'features/02-quang-cao-bai-viet', label: '2. Quảng Cáo Bài Viết Có Sẵn' },
        { type: 'doc', id: 'features/03-quang-cao-tin-nhan', label: '3. Quảng Cáo Tin Nhắn' },
        { type: 'doc', id: 'features/04-ai-tao-qc-1-click', label: '4. AI Tạo Quảng Cáo 1-Click' },
        { type: 'doc', id: 'features/05-ngan-sach-tu-toi-uu', label: '5. Ngân Sách Tự Tối Ưu 24/7' },
        { type: 'doc', id: 'features/06-ai-viet-content', label: '6. AI Viết Content Chuẩn Dịch Vụ' },
        { type: 'doc', id: 'features/07-quan-ly-chien-dich', label: '7. Xem Các Chiến Dịch Quảng Cáo' },
        { type: 'doc', id: 'features/08-tao-tep-doi-tuong', label: '8. Tạo Tệp Đối Tượng' },
        { type: 'doc', id: 'features/09-chay-qc-tep-doi-tuong', label: '9. Chạy Quảng Cáo Tệp Đối Tượng' },
        { type: 'doc', id: 'features/09-tao-tep-tuong-tu', label: '10. Tạo Tệp Tương Tự (Lookalike)' },
        { type: 'doc', id: 'features/10-mau-nham-muc-tieu', label: '11. Tạo Mẫu Nhắm Mục Tiêu' },
        { type: 'doc', id: 'features/11-quy-tac-tu-dong', label: '12. Tạo Quy Tắc Tự Động' },
        { type: 'doc', id: 'features/12-nham-muc-tieu-tu-dong', label: '13. Nhắm Mục Tiêu Tự Động' },
      ],
    },
  ],
};

export default sidebars;
