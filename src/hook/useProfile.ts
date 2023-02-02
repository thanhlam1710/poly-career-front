import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getEmployerProfileAction } from "app/slices/employerSlice"
import { getStudentProfileAction } from "app/slices/studentSlice"

export const useProfile = () => {
  const dispatch = useAppDispatch()
  const { isLoggedIn, type, token } = useAppSelector((state) => state.auth)
  const { employerProfile } = useAppSelector((state) => state.employer)
  const { studentProfile } = useAppSelector((state) => state.student)

  const updateUser = async () => {
    if (!type) return
    if (type === "employer") {
      await dispatch(getEmployerProfileAction())
    } else if (type === "student") {
      await dispatch(getStudentProfileAction())
    }
  }

  useEffect(() => {
    if ((type === "employer" && !employerProfile) || (type === "student" && !studentProfile)) {
      updateUser()
    }
  }, [token, type, isLoggedIn])

  return { isLoggedIn, employerProfile, studentProfile, updateUser, type }
}
