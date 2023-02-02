const PREFIX = "v1"

export const API_ROUTES = {
  registerStudent: `${PREFIX}/auth/register`,
  registerEmployer: `${PREFIX}/auth/admin/register`,
  loginStudent: `${PREFIX}/auth/login`,
  loginEmployer: `${PREFIX}/auth/admin/login`,
  logout: `${PREFIX}/logout`,
  studentProfile: `${PREFIX}/student/profile`,
  employerProfile: `${PREFIX}/admin/profile`,
  jobs: `${PREFIX}/jobs`,
  jobFit: `${PREFIX}/job/fit`,
  jobDetail: (id: number) => `${PREFIX}/job/${id}`,
  province: `${PREFIX}/province`,
  categories: `${PREFIX}/categories`,
  companyActivities: `${PREFIX}/company_activities`,
  company: `${PREFIX}/company`,
  job: `${PREFIX}/job`,
  upload: `${PREFIX}/upload`,
  companyDetail: (id: number) => `${PREFIX}/company/${id}`,
  applyNew: `${PREFIX}/student/apply/new`,
  uploadImage: `${process.env.NEXT_PUBLIC_API_URL}${PREFIX}/upload`,
  listCVs: `${PREFIX}/employer/apply_job`,
  detailCV: (id: number) => `${PREFIX}/employer/apply_job/${id}`,
  studentProfileGeneral: `${PREFIX}/student/profile/detail`,
  studentEmail: `${PREFIX}/student/profile/change_email`,
  employerPassword: `${PREFIX}/admin/change-password`,
  // admin
  adminStudents: `${PREFIX}/admin/students`,
  adminEmployer: `${PREFIX}/admin/employers`,
  allCompany: `${PREFIX}/companies`,
  // student cv
  createStudentCv: `${PREFIX}/student/cv`,
  getStudentCv: (id: number | string) => `${PREFIX}/student/cv/${id}`,
  getMyCv: `${PREFIX}/student/mycv`,
}

const ROUTE_BASE = {
  auth: "/auth",
  job: "/job",
  company: "/company",
  employer: "/employer",
  recruitment: "/employer/recruitment",
  companyEmployer: "/employer/company",
  CV: "/employer/CV",
  createCv: "/cv",
}

export const ROUTES = {
  home: "/",
  login: `${ROUTE_BASE.auth}/login`,
  loginEmployer: `${ROUTE_BASE.auth}/login/employer`,
  register: `${ROUTE_BASE.auth}/register`,
  registerEmployer: `${ROUTE_BASE.auth}/register/employer`,
  profile: `/profile`,
  forgot: `${ROUTE_BASE.auth}/forgot`,
  employer: `${ROUTE_BASE.employer}`,
  employerProfile: `${ROUTE_BASE.employer}/profile`,
  employerCompany: `${ROUTE_BASE.employer}/company`,
  recruitment: {
    list: `${ROUTE_BASE.recruitment}`,
    new: `${ROUTE_BASE.recruitment}/new`,
    detail: (id: number) => `${ROUTE_BASE.recruitment}/${id}`,
    edit: (id: number) => `${ROUTE_BASE.recruitment}/${id}/edit`,
  },
  job: {
    list: `${ROUTE_BASE.job}`,
    detail: (id: number) => `${ROUTE_BASE.job}/${id}`,
    saved: `${ROUTE_BASE.job}/saved`,
  },
  company: {
    detail: (id: number) => `${ROUTE_BASE.company}/${id}`,
  },
  companyEmployer: {
    new: `${ROUTE_BASE.companyEmployer}/new`,
    detail: `${ROUTE_BASE.companyEmployer}`,
    edit: `${ROUTE_BASE.companyEmployer}/edit`,
  },
  CV: {
    list: `${ROUTE_BASE.CV}`,
    detail: (id: number) => `${ROUTE_BASE.CV}/${id}`,
    saved: `${ROUTE_BASE.CV}/saved`,
  },
  studentCv: {
    listTemplate: `${ROUTE_BASE.createCv}/templates`,
    createCv: `${ROUTE_BASE.createCv}/create_cv`,
    editCv: `${ROUTE_BASE.createCv}/create_cv/[id]`,
    managerCv: `${ROUTE_BASE.createCv}/my_cv`,
  },
  // admin
  admin: {
    dashboard: "/admin/dashboard",
    company: {
      list: "/admin/companies",
      activities: "/admin/company/activities",
    },
    job: {
      list: "/admin/jobs",
      category: "/admin/job/category",
      CV: "/admin/job/CV",
      detail: (id: number | string) => `/admin/job/${id}`,
    },
    student: "/admin/students",
    employer: "/admin/employers",
    service: {
      list: "/admin/service/list",
      new: "/admin/service/new",
      receipt: "/admin/service/receipt",
    },
    contact: "/admin/contact",
  },
}
