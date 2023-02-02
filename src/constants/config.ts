import {
  CreditCardOutlined,
  DashboardOutlined,
  FundProjectionScreenOutlined,
  SecurityScanOutlined,
  SolutionOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons"
import { NavTree } from "interfaces/Navbar"
import { ROUTES } from "./routes"

export const AUTH_TOKEN = "access_token"

export const HEADER_NAVIGATION = [
  {
    id: 1,
    display: "Cơ hội việc làm",
    path: ROUTES.job.list,
  },
  {
    id: 2,
    display: "Tính lương Gross sang Net",
    path: "",
  },
  {
    id: 3,
    display: "Tạo CV mới",
    path: ROUTES.studentCv.listTemplate,
  },
]

export const EmploymentNavTree: NavTree[] = [
  {
    key: "1",
    path: ROUTES.employer,
    title: "Bộ điều khiển",
    icon: DashboardOutlined,
  },
  {
    key: "2",
    title: "Tuyển dụng",
    icon: SolutionOutlined,
    submenu: [
      {
        key: "2.1",
        path: ROUTES.recruitment.list,
        title: "Danh sách tin đăng",
      },
      {
        key: "2.2",
        path: ROUTES.recruitment.new,
        title: "Tạo tin tuyển dụng",
      },
    ],
  },
  {
    key: "3",
    title: "Quản lý ứng viên",
    icon: TeamOutlined,
    submenu: [
      {
        key: "3.1",
        path: ROUTES.CV.list,
        title: "Hồ sơ ứng tuyển",
      },
      {
        key: "3.2",
        path: ROUTES.CV.saved,
        title: "Hồ sơ đã lưu",
      },
    ],
  },
  {
    key: "6",
    title: "Tài khoản và thương hiệu",
    icon: SecurityScanOutlined,
    submenu: [
      {
        key: "6.1",
        path: ROUTES.employerProfile,
        title: "Tài khoản nhà tuyển dụng",
      },
      {
        key: "6.2",
        path: ROUTES.employerCompany,
        title: "Thông tin công ty",
      },
    ],
  },
  {
    key: "4",
    title: "Dịch vụ",
    icon: CreditCardOutlined,
    submenu: [
      {
        key: "4.1",
        path: ROUTES.employer,
        title: "Quản lý dịch vụ ",
      },
      {
        key: "4.2",
        path: ROUTES.employer,
        title: "Lịch sử mua hàng",
      },
    ],
  },
  {
    key: "5",
    title: "Thống kê",
    icon: FundProjectionScreenOutlined,
    submenu: [
      {
        key: "5.1",
        path: ROUTES.employer,
        title: "Thống kê SEO",
      },
      {
        key: "5.2",
        path: ROUTES.employer,
        title: "Thống kê",
      },
    ],
  },
  {
    key: "7",
    title: "Hỗ trợ",
    icon: ToolOutlined,
  },
]

export const AdminNavTree: NavTree[] = [
  {
    key: "1",
    path: ROUTES.admin.dashboard,
    title: "Bộ điều khiển",
    icon: DashboardOutlined,
  },
  {
    key: "hr-1",
    title: "",
    divider: true,
  },
  {
    key: "2",
    path: "",
    title: "Công ty",
    submenu: [
      {
        key: "2.1",
        title: "Danh sách công ty",
        path: ROUTES.admin.company.list,
      },
      {
        key: "2.2",
        title: "Danh sách loại hình kinh doanh",
        path: ROUTES.admin.company.activities,
      },
    ],
  },

  {
    key: "3",
    path: "",
    title: "Tuyển dụng",
    submenu: [
      {
        key: "3.1",
        title: "Quản lý tin tuyển dụng",
        path: ROUTES.admin.job.list,
      },
      {
        key: "3.2",
        title: "Quản lý tin thể loại",
        path: ROUTES.admin.job.category,
      },
    ],
  },
  {
    key: "hr-2",
    title: "",
    divider: true,
  },
  {
    key: "4",
    path: ROUTES.admin.student,
    title: "Danh sách sinh viên",
  },
  {
    key: "5",
    title: "Tài khoảng doanh nghiệp",
    path: ROUTES.admin.employer,
  },
  {
    key: "hr-3",
    title: "",
    divider: true,
  },
  {
    key: "6",
    path: "",
    title: "Dịch vụ",
    submenu: [
      {
        key: "6.1",
        title: "Danh sách dịch vụ",
        path: ROUTES.admin.service.list,
      },
      {
        key: "6.2",
        title: "Tạo dịch vụ mới",
        path: ROUTES.admin.service.new,
      },
      {
        key: "6.3",
        title: "Danh sách hóa đơn",
        path: ROUTES.admin.service.receipt,
      },
    ],
  },
  {
    key: "7",
    path: "",
    title: "Blog",
    submenu: [
      {
        key: "6.1",
        title: "Danh sách bài viết",
        path: ROUTES.admin.service.list,
      },
      {
        key: "6.2",
        title: "Tạo bài viết mới",
        path: ROUTES.admin.service.new,
      },
    ],
  },
]
