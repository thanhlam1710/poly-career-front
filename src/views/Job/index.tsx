import React, { useEffect } from "react"
import { Grid, Pagination } from "antd"
import { useAppDispatch, useAppSelector } from "app/appHook"
import { getListJobsAction } from "app/slices/jobSlice"
import { getProvinceAction } from "app/slices/provinceSlice"
import BoxFilter from "components/Common/BoxFilter/BoxFilter"
import BoxJob from "components/Common/BoxJob/BoxJob"
import BoxSearch from "components/Common/BoxSearch/BoxSearch"
import { useAppEffect } from "hook/useAppEffect"
import { JobPayload } from "interfaces/Job"
import { RowResult, WrapperJobs } from "./style"

const Job: React.FC = () => {
  const { listJobs, metaJobs } = useAppSelector((state) => state.job)
  const optionSearch = useAppSelector((state) => state.optionSearch)

  const { listProvince } = useAppSelector((state) => state.province)
  const dispatch = useAppDispatch()
  const { md } = Grid.useBreakpoint()

  useAppEffect(() => {
    dispatch(getProvinceAction())
  })

  useEffect(() => {
    dispatch(getListJobsAction({ ...optionSearch, limit: 12 }))
  }, [optionSearch])

  const handleChange = (page: number) => {
    dispatch(getListJobsAction({ limit: 12, page }))
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <WrapperJobs>
      <div className="container">
        <div className="container__box-search">
          <div className="box__search">
            <BoxSearch optionSearch={optionSearch} />
          </div>
          <div className="box__filter container__inner">
            <BoxFilter optionSearch={optionSearch} />
          </div>
        </div>

        <div className="container__main">
          <p className="container__total">Có {metaJobs?.total} kết quả tìm kiếm</p>
          <RowResult>
            {listJobs.length > 0 ? (
              <div className="container__box">
                <div className="container__list-job">
                  {listJobs?.map((item: JobPayload) => (
                    <BoxJob data={item} key={item.id} border={!md} listProvince={listProvince} />
                  ))}
                </div>
                <Pagination
                  className="pagination text-center"
                  defaultCurrent={metaJobs?.page}
                  total={metaJobs?.total}
                  pageSize={metaJobs?.limit}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="no-result">Không có bài viết nào theo kết quả tìm kiếm của bạn!</div>
            )}
            <div className="container__advertisement">
              <div className="container__poster">
                <img
                  src="https://i.pinimg.com/736x/7b/59/17/7b59171a759cbf6be4568d43c076ec0b.jpg"
                  alt="poster1"
                />
              </div>
              <div className="container__poster">
                <img
                  src="https://img.pikbest.com/01/48/18/10ypIkbEsTFJW.jpg-0.jpg!bw700"
                  alt="poster2"
                />
              </div>
            </div>
          </RowResult>
        </div>
      </div>
    </WrapperJobs>
  )
}

export default Job
