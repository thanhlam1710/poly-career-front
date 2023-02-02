import React from "react"
import { useAppSelector, useAppDispatch } from "app/appHook"
import { getCategoryAction } from "app/slices/categorySlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import { useAppEffect } from "hook/useAppEffect"
import { useProfile } from "hook/useProfile"
import GeneralProfile from "./GeneralProfile"
import PersonalForm from "./PersonalForm"
import RegisterInfor from "./RegisterInfor"
import { StudentProfileWrapper, StudentProfileFormWrapper } from "./styled"

const StudentProfile: React.FC = () => {
  const { listProvince } = useAppSelector((state) => state.province)
  const { listCategories } = useAppSelector((state) => state.categories)
  const { studentProfile, updateUser } = useProfile()
  const dispatch = useAppDispatch()

  useAppEffect(() => {
    dispatch(getProvinceAction())
    dispatch(getCategoryAction())
    updateUser()
  })

  return (
    <StudentProfileWrapper>
      <div className="form__profile">
        <StudentProfileFormWrapper>
          {studentProfile && <RegisterInfor studentProfile={studentProfile} />}

          <PersonalForm listProvince={listProvince} />

          <GeneralProfile listCategories={listCategories} listProvince={listProvince} />
        </StudentProfileFormWrapper>
      </div>
    </StudentProfileWrapper>
  )
}

export default StudentProfile
