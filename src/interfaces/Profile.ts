export interface ProfilePayload {
  id: 1
  full_name: string
  email: string
  phone: string
  birt_day: string
  picture: string
  address: string
  gender: number
  is_noti: number
  status: number
  education: [
    {
      id: number
      student_id: number
      degree: string
      picture: string
      informaiton: string
    },
    {
      id: number
      student_id: number
      degree: string
      picture: string
      informaiton: string
    }
  ]
}
