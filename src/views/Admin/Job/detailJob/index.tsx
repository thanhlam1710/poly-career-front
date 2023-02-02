import React, { useEffect, useState } from "react"
import { Button, Row, Skeleton, Space } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { RESPONSE_CODES, ROUTES } from "@constants"
import { useAppDispatch } from "app/appHook"
import { getJobDetailAction } from "app/slices/jobSlice"
import ModelChangeStatusJob from "components/admin/ModelChaneStatusJob"
import BoxDetailJob from "components/Common/BoxDetailJob"
import EmployerTitle from "components/Common/EmployerTitle"
import { APIResponse } from "interfaces/APIResponse"
import { JobPayload } from "interfaces/Job"
import { AdminContainer } from "views/Admin/styled"

const AdminDetailJob: React.FC = () => {
  const [showModelChangeStatus, setShowModelChangeStatus] = useState<boolean>()
  const router = useRouter()
  const [recruitment, setRecruiment] = useState<JobPayload>()
  const [loading, setLoading] = useState<boolean>(false)
  const { id } = router.query
  const dispatch = useAppDispatch()

  const getData = async () => {
    if (!id || typeof id !== "string") return
    setLoading(true)

    const rs = await dispatch(getJobDetailAction({ id: Number(id) }))
    const payload = rs.payload as APIResponse<JobPayload>

    if (payload.code === RESPONSE_CODES.success) {
      setRecruiment(payload.data)
    }

    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <>
      <EmployerTitle title="Chi tiết tin tuyển dụng" />
      <AdminContainer>
        <div>
          <Skeleton loading={loading} />

          {recruitment && (
            <>
              <Row className="p-1" justify="end">
                <Space>
                  <Button type="primary" onClick={() => setShowModelChangeStatus(true)}>
                    Đổi trạng thái
                  </Button>

                  <Link href={ROUTES.admin.job.list}>
                    <Button>Quay lại</Button>
                  </Link>
                </Space>
              </Row>
              <BoxDetailJob defaultData={recruitment} />
            </>
          )}
        </div>
      </AdminContainer>

      <ModelChangeStatusJob
        idJob={[Number(id)]}
        initValue={recruitment?.status?.toString() || ""}
        showModel={showModelChangeStatus}
        onChangeSuccess={() => router.push(ROUTES.admin.job.list)}
        setShowModel={setShowModelChangeStatus}
      />
    </>
  )
}

export default AdminDetailJob
