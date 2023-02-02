import { CvCreate, StatusCV } from "interfaces/CV"

export const STATUS_CV: StatusCV[] = [
  {
    id: 1,
    label: "Đã liên lạc",
  },
  {
    id: 2,
    label: "Đã test",
  },
  {
    id: 3,
    label: "Đã phỏng vấn",
  },
  {
    id: 4,
    label: "Đã trúng tuyển",
  },
  {
    id: 5,
    label: "Không trúng tuyển",
  },
]

export const CV_SETTING_COLOR = [
  { color: "#6667ab", value: "#6667ab" },
  { color: "#9b59b6", value: "#9b59b6" },
  { color: "#1abc9c", value: "#1abc9c" },
  { color: "#34495e", value: "#34495e" },
]

export const CvCreateInitPayload: CvCreate = {
  achievements: [],
  address: "",
  avatar: "",
  education: [],
  email: "",
  experience: [],
  full_name: "",
  goals: "",
  main_color: CV_SETTING_COLOR[0].color,
  phone: "",
  position: "",
  skill: [],
  title: "",
}
