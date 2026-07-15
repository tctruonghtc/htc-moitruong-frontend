/** Thông tin công ty dùng chung cho UI / SEO / AI prompt */
export const siteConfig = {
  name: "HTC Môi Trường",
  legalName: "Công ty TNHH Tài nguyên và Môi trường HTC",
  url: "https://www.moitruonghtc.com",
  phone: "0965.151.040",
  phoneTel: "0965151040",
  zalo: "https://zalo.me/0965151040",
  address:
    "Số 842/31/2/3 Nguyễn Thị Minh Khai, P. Tân Đông Hiệp, TP. Hồ Chí Minh",
  description:
    "Tư vấn pháp lý, lập hồ sơ môi trường (ĐTM, GPMT), tài nguyên nước và thi công công trình bảo vệ môi trường cho doanh nghiệp.",
  apiBase: "https://api.moitruonghtc.com/wp-json/wp/v2",
};

export const services = [
  {
    slug: "ho-so-moi-truong",
    title: "Hồ sơ Môi trường",
    short:
      "Lập báo cáo ĐTM, xin Giấy phép môi trường, Đăng ký môi trường nhanh chóng, đúng chuẩn pháp lý.",
    points: [
      "Báo cáo đánh giá tác động môi trường (ĐTM)",
      "Giấy phép môi trường (GPMT)",
      "Đăng ký môi trường",
      "Báo cáo công tác bảo vệ môi trường định kỳ",
    ],
  },
  {
    slug: "tai-nguyen-nuoc",
    title: "Tài nguyên Nước & Địa chất",
    short:
      "Khảo sát, thăm dò, đánh giá trữ lượng nước ngầm. Xin giấy phép khai thác, xả thải vào nguồn nước.",
    points: [
      "Khảo sát / đánh giá trữ lượng nước ngầm",
      "Giấy phép khai thác tài nguyên nước",
      "Giấy phép xả nước thải vào nguồn nước",
      "Tư vấn địa chất thủy văn cho dự án",
    ],
  },
  {
    slug: "thi-cong-cong-trinh",
    title: "Thi công Công trình BVMT",
    short:
      "Thiết kế, thi công, chuyển giao công nghệ và vận hành hệ thống xử lý nước thải, khí thải đạt chuẩn QCVN.",
    points: [
      "Thiết kế hệ thống xử lý nước thải / khí thải",
      "Thi công và nghiệm thu công trình BVMT",
      "Vận hành, bảo trì định kỳ",
      "Chuyển giao công nghệ cho doanh nghiệp",
    ],
  },
] as const;
