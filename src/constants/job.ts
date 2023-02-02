import {
  Experience,
  Gender,
  JobPayload,
  JobType,
  Level,
  Salary,
  SalaryFilter,
  StatusJob,
} from "interfaces/Job"

export const INITIAL_JOB: JobPayload = {
  title: "tin tuyển dụng",
  category_id: 1,
  province_id: 1,
  address: "p1, Tan binh",
  gender: "nam/nu",
  count: 10,
  experience: "6 thang",
  job_type: "Full time",
  position: "thực tập",
  salary: 3000000,
  level: "cao dang",
  description: "mô tả công việc",
  require: "yêu cầu công việc",
  benefit: "quyền lợi",
}

export const JOB_TYPE: JobType[] = [
  {
    id: "Toàn thời gian",
    label: "Toàn thời gian",
  },
  {
    id: "Bán thời gian",
    label: "Bán thời gian",
  },
  {
    id: "Thực tập",
    label: "Thực tập",
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: "Chưa có kinh nghiệm",
    label: "Chưa có kinh nghiệm",
  },
  {
    id: "Dưới 1 năm",
    label: "Dưới 1 năm",
  },
  {
    id: "1 năm",
    label: "1 năm",
  },
  {
    id: "2 năm",
    label: "2 năm",
  },
  {
    id: "3 năm",
    label: "3 năm",
  },
  {
    id: "4 năm",
    label: "4 năm",
  },
  {
    id: "5 năm",
    label: "5 năm",
  },
  {
    id: "Hơn 5 năm",
    label: "Hơn 5 năm",
  },
]

export const LEVEL: Level[] = [
  {
    id: "Quản lý cấp trung",
    label: "Quản lý cấp trung",
  },
  {
    id: "Quản lý cấp cao",
    label: "Quản lý cấp cao",
  },
  {
    id: "Quản lý nhóm - Giám sát",
    label: "Quản lý nhóm - Giám sát",
  },
  {
    id: "Chuyên gia",
    label: "Chuyên gia",
  },
  {
    id: "Chuyên viên - Nhân viên",
    label: "Chuyên viên - Nhân viên",
  },
  {
    id: "Cộng tác viên",
    label: "Cộng tác viên",
  },
]

export const GENDER: Gender[] = [
  {
    id: "Không yêu cầu",
    label: "Không yêu cầu",
  },
  {
    id: "Nam",
    label: "Nam",
  },
  {
    id: "Nữ",
    label: "Nữ",
  },
  {
    id: "Khác",
    label: "Khác",
  },
]

export const SALARY: Salary[] = [
  {
    id: 1000000,
    label: "Khoảng 1 triệu",
  },
  {
    id: 2000000,
    label: "Khoảng 2 triệu",
  },
  {
    id: 3000000,
    label: "Khoảng 3 triệu",
  },
  {
    id: 4000000,
    label: "Khoảng 4 triệu",
  },
  {
    id: 5000000,
    label: "Khoảng 5 triệu",
  },
  {
    id: 6000000,
    label: "Khoảng 6 triệu",
  },
  {
    id: 7000000,
    label: "Khoảng 7 triệu",
  },
  {
    id: 8000000,
    label: "Khoảng 8 triệu",
  },
  {
    id: 9000000,
    label: "Khoảng 9 triệu",
  },
  {
    id: 10000000,
    label: "Khoảng 10 triệu",
  },
  {
    id: 11000000,
    label: "Khoảng 11 triệu",
  },
  {
    id: 12000000,
    label: "Khoảng 12 triệu",
  },
  {
    id: 13000000,
    label: "Khoảng 13 triệu",
  },
  {
    id: 14000000,
    label: "Khoảng 14 triệu",
  },
  {
    id: 15000000,
    label: "Khoảng 15 triệu",
  },
  {
    id: 16000000,
    label: "Khoảng 16 triệu",
  },
  {
    id: 17000000,
    label: "Khoảng 17 triệu",
  },
  {
    id: 18000000,
    label: "Khoảng 18 triệu",
  },
  {
    id: 19000000,
    label: "Khoảng 19 triệu",
  },
  {
    id: 20000000,
    label: "Khoảng 20 triệu",
  },
  {
    id: 25000000,
    label: "Khoảng 25 triệu",
  },
  {
    id: 30000000,
    label: "Khoảng 30 triệu",
  },
  {
    id: 0,
    label: "Thỏa thuận",
  },
]

export const STATUS_JOB: StatusJob[] = [
  {
    id: 0,
    label: "Không duyệt",
  },
  {
    id: 1,
    label: "Chờ duyệt",
  },
  {
    id: 2,
    label: "Đã duyệt",
  },
]

export const SALARY_FILTER: SalaryFilter[] = [
  {
    id: 1,
    label: "Tất cả mức lương",
    value: {
      min: undefined,
      max: undefined,
    },
  },
  {
    id: 2,
    label: "1 - 3 triệu",
    value: {
      min: 1000000,
      max: 3000000,
    },
  },
  {
    id: 3,
    label: "3 - 5 triệu",
    value: {
      min: 3000000,
      max: 5000000,
    },
  },
  {
    id: 4,
    label: "5 - 7 triệu",
    value: {
      min: 5000000,
      max: 7000000,
    },
  },
  {
    id: 5,
    label: "7 - 10 triệu",
    value: {
      min: 7000000,
      max: 10000000,
    },
  },
  {
    id: 6,
    label: "10 - 15 triệu",
    value: {
      min: 10000000,
      max: 15000000,
    },
  },
  {
    id: 7,
    label: "15 - 20 triệu",
    value: {
      min: 15000000,
      max: 20000000,
    },
  },
  {
    id: 8,
    label: "20 - 30 triệu",
    value: {
      min: 20000000,
      max: 30000000,
    },
  },
  {
    id: 9,
    label: "30 - 40 triệu",
    value: {
      min: 30000000,
      max: 40000000,
    },
  },
  {
    id: 10,
    label: "40 - 50 triệu",
    value: {
      min: 40000000,
      max: 50000000,
    },
  },
  {
    id: 11,
    label: "Trên 50 triệu",
    value: {
      min: 50000000,
      max: 0,
    },
  },
  {
    id: 12,
    label: "Thỏa thuận",
    value: {
      min: 0,
      max: 0,
    },
  },
]
