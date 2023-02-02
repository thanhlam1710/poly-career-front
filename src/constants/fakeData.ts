import { Company } from "interfaces/Home"

export const DATA_DEFAULT_PAGINATION = {
  min: 1,
  max: 50,
}

export const DATA_DEFAULT_FILTER = [
  {
    name: "exp",
    data: [
      { id: 1, name: "2 năm" },
      { id: 2, name: "5 năm" },
      { id: 3, name: "Chưa có kinh nghiệm" },
    ],
  },
  {
    name: "rank",
    data: [
      { id: 1, name: "Fresher" },
      { id: 2, name: "Junior" },
      { id: 3, name: "Master" },
    ],
  },
  {
    name: "level",
    data: [
      { id: 1, name: "Thạc sĩ" },
      { id: 2, name: "Tiến sĩ" },
      { id: 3, name: "Cử nhân" },
    ],
  },
  {
    name: "wage",
    data: [
      { id: 1, name: "< 10 triệu" },
      { id: 2, name: "15-20 triệu" },
      { id: 3, name: "> 30 triệu" },
    ],
  },
  {
    name: "career",
    data: [
      { id: 1, name: "CNTT" },
      { id: 2, name: "Bác Sĩ" },
      { id: 3, name: "Giáo Viên" },
    ],
  },
]

export const DATA_DEFAULT_FILTER_2 = [
  {
    name: "title",
    placeholder: "Vị trí hiển thị đăng tuyển",
    data: null,
    edit: false,
  },
  {
    name: "working_form",
    data: [
      { id: 1, name: "Làm việc tại cơ quan" },
      { id: 2, name: "Làm việc tại nhà" },
      { id: 3, name: "Làm việc tại nước ngoài" },
    ],
  },
  {
    name: "exp",
    data: [
      { id: 1, name: "2 năm" },
      { id: 2, name: "5 năm" },
      { id: 3, name: "Chưa có kinh nghiệm" },
    ],
  },
  {
    name: "rank",
    data: [
      { id: 1, name: "Fresher" },
      { id: 2, name: "Junior" },
      { id: 3, name: "Master" },
    ],
  },
  {
    name: "main_career",
    data: [
      { id: 1, name: "Project manager" },
      { id: 2, name: "Team leader" },
      { id: 3, name: "CTO" },
    ],
  },
  {
    name: "sex",
    data: [
      { id: 1, name: "Nam" },
      { id: 2, name: "Nữ" },
      { id: 3, name: "Khác" },
    ],
  },
  {
    name: "amount",
    placeholder: null,
    data: null,
    edit: false,
  },
  {
    name: "minimum_wage",
    data: [
      { id: 1, name: "3 triệu" },
      { id: 2, name: "7 triệu" },
      { id: 3, name: "15 triệu" },
    ],
  },
  {
    name: "maximum_wage",
    data: [
      { id: 1, name: "5 triệu" },
      { id: 2, name: "15 triệu" },
      { id: 3, name: "30 triệu" },
    ],
  },
  {
    name: "province",
    data: [
      { id: 1, name: "Hồ Chí Minh" },
      { id: 2, name: "Đà Nẵng" },
      { id: 3, name: "Hà Nội" },
    ],
  },
  {
    name: "address",
    placeholder: "Địa chị làm việc",
    data: null,
    edit: false,
  },
  {
    name: "job_description",
    placeholder:
      "Thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty",
    data: null,
    edit: true,
  },
  {
    name: "job_require",
    placeholder:
      "Kỹ năng chuyên môn hoặc kỹ năng mềm cần thiết với công việc mà ứng viên cần quan tâm",
    data: null,
    edit: true,
  },
  {
    name: "benefit",
    placeholder: "Những quyền lợi, lợi ích với công việc cho ứng viên với vị trí đăng tuyển",
    data: null,
    edit: true,
  },
]

export const DATA_FAKE = [
  {
    name: "title",
    placeholder: "Vị trí hiển thị đăng tuyển",
    data: "",
  },
  {
    name: "working_form",
    data: [
      { id: 1, name: "Làm việc tại cơ quan" },
      { id: 2, name: "Làm việc tại nhà" },
      { id: 3, name: "Làm việc tại nước ngoài" },
    ],
  },
  {
    name: "exp",
    data: [
      { id: 1, name: "2 năm" },
      { id: 2, name: "5 năm" },
      { id: 3, name: "Chưa có kinh nghiệm" },
    ],
  },
  {
    name: "rank",
    data: [
      { id: 1, name: "Fresher" },
      { id: 2, name: "Junior" },
      { id: 3, name: "Master" },
    ],
  },
  {
    name: "main_career",
    data: [
      { id: 1, name: "Project manager" },
      { id: 2, name: "Team leader" },
      { id: 3, name: "CTO" },
    ],
  },
  {
    name: "sex",
    data: [
      { id: 1, name: "Nam" },
      { id: 2, name: "Nữ" },
      { id: 3, name: "Khác" },
    ],
  },
  {
    name: "amount",
    placeholder: null,
    data: "",
  },
  {
    name: "minimum_wage",
    data: [
      { id: 1, name: "3 triệu" },
      { id: 2, name: "7 triệu" },
      { id: 3, name: "15 triệu" },
    ],
  },
  {
    name: "maximum_wage",
    data: [
      { id: 1, name: "5 triệu" },
      { id: 2, name: "15 triệu" },
      { id: 3, name: "30 triệu" },
    ],
  },
  {
    name: "province",
    data: [
      { id: 1, name: "Hồ Chí Minh" },
      { id: 2, name: "Đà Nẵng" },
      { id: 3, name: "Hà Nội" },
    ],
  },
  {
    name: "address",
    placeholder: "Địa chỉ làm việc",
    data: "",
  },
  {
    name: "job_description",
    placeholder:
      "Thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty",
    data: "",
  },
  {
    name: "job_require",
    placeholder:
      "Kỹ năng chuyên môn hoặc kỹ năng mềm cần thiết với công việc mà ứng viên cần quan tâm",
    data: "",
  },
  {
    name: "job_benefit",
    placeholder: "Những quyền lợi, lợi ích với công việc cho ứng viên với vị trí đăng tuyển",
    data: "",
  },
]

const DATA_DETAIL_JOB = {
  id: 1,
  name: "Front-End Developer",
  deadline: "07/10/2022",
  information: [
    {
      key: 1,
      name: "Mức lương",
      value: "Trên 8 triệu",
      icon: "",
    },
    {
      key: 2,
      name: "Số lượng tuyển",
      value: "4",
      icon: "",
    },
    {
      key: 3,
      name: "Hình thức làm việc",
      value: "Toàn thời gian",
      icon: "",
    },
    {
      key: 4,
      name: "Cấp bậc",
      value: "Nhân viên",
      icon: "",
    },
    {
      key: 5,
      name: "Giới tính",
      value: "Nam",
      icon: "",
    },
    {
      key: 6,
      name: "Kinh nghiệm tuyển",
      value: "1 năm",
      icon: "",
    },
  ],
  address: "- Hồ Chí Minh: 1073/23 Cách mạng tháng 8, phường 7, quận Tân Bình, TP HCM, Tân Bình",
  content:
    "<h3>Mô tả công việc</h3><ul><li>Tư vấn thông tin sản phẩm.</li><li>Kiểm tra, cài đặt và lắp đặt sản phẩm cho khách.</li><li>Hỗ trợ quay video, hỗ trợ hướng dẫn khách đấu nối sử dụng sản phẩm của cửa hàng.</li></ul><h3>Yêu cầu ứng viên</h3><ul><li>Dựng HTML/CSS từ bản thiết kết Adobe XD, Photoshop, Figma, Zeplin</li><li>Có tinh thần học hỏi, sáng tạo trong việc lập trình hiệu ứng, giao diện,... </li><li>Yêu thích mảng lập trình HTML/CSS cho Website</li><li>Yêu thích mảng lập trình HTML/CSS cho Website</li><li>Yêu thích mảng lập trình HTML/CSS cho Website</li><li>Yêu thích mảng lập trình HTML/CSS cho Website</li></ul><h3>Quyền lợi</h3><ul><li>Luôn được hướng dẫn tư duy Logic cho lập trình</li><li>Thưởng theo dự án, Trách nhiệm công việc, Lương tháng 13, Tham gia BHXH, Teambuilding</li><li>Xét lương tối thiểu 1 năm 1 lần và không dưới 10%</li><li>Ngày nghỉ: 12 Ngày phép trong năm + Các ngày Lễ/ Tết</li><li> Cạnh tranh tại đấu trường Mona E-Sport với các môn thể thao HOT như CounterStrike, PES, Fifa... cùng nhiều giải thưởng hấp dẫn</li><li>Sếp và Leader luôn tạo điều kiện học hỏi và phát triển thông qua các buổiSeminar, giúp nâng cao tay nghề, tư duy làm việc chuyên nghiệp.</li></ul>",
}

export { DATA_DETAIL_JOB }

export const TOP_COMPANY: Company[] = [
  {
    id: 1,
    title: "10 việc làm",
    imagePath:
      "https://res.cloudinary.com/letrung95/image/upload/v1666885607/imagesPolyCareer/images/company__image_pl1jbu.png",
  },
  {
    id: 2,
    title: "10 việc làm",
    imagePath:
      "https://res.cloudinary.com/letrung95/image/upload/v1666885607/imagesPolyCareer/images/company__image_pl1jbu.png",
  },
  {
    id: 3,
    title: "10 việc làm",
    imagePath:
      "https://res.cloudinary.com/letrung95/image/upload/v1666885607/imagesPolyCareer/images/company__image_pl1jbu.png",
  },
  {
    id: 4,
    title: "10 việc làm",
    imagePath:
      "https://res.cloudinary.com/letrung95/image/upload/v1666885607/imagesPolyCareer/images/company__image_pl1jbu.png",
  },
  {
    id: 5,
    title: "10 việc làm",
    imagePath:
      "https://res.cloudinary.com/letrung95/image/upload/v1666885607/imagesPolyCareer/images/company__image_pl1jbu.png",
  },
  {
    id: 6,
    title: "10 việc làm",
    imagePath:
      "https://res.cloudinary.com/letrung95/image/upload/v1666885607/imagesPolyCareer/images/company__image_pl1jbu.png",
  },
]

export const LIST_CV_FILTER = {
  cv_title: "Tất cả tin đăng",
  cv_create_at: "Tất cả thời gian nộp",
  cv_status_recruitment: "Tất cả trạng thái tuyển dụng",
}
