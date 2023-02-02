import styled from "styled-components"
import { Variable } from "styles/app/variable/Variable"

export const CompanyEmployerWrapper = styled.div`
  label {
    font-weight: ${Variable.fw.bold};
    font-size: ${Variable.fontsize[1.6]};
  }
  .company_description {
    .sub-title {
      margin-bottom: 2rem;
      color: ${Variable.color.textBlur};
    }
    textarea {
      min-height: 19rem;
      border-radius: 0.5rem;
    }
  }
  .form__contact-row {
    margin-top: 3rem;
    .ant-form-item {
      margin-top: 1rem;
    }
    .ant-form-item-row {
      align-items: center;
      margin-top: 1rem;
    }
    .ant-form-item-label {
      text-align: unset;
      width: 18rem;
      font-size: ${Variable.fontsize["1.6"]};
      color: ${Variable.color.primaryText};
      font-weight: ${Variable.fw.bold};
    }
    .ant-btn {
      margin-top: 2rem;
    }
  }
`
export const CoverImageProfileContainer = styled.div`
  p {
    margin: 1.5rem 0rem;
    font-size: ${Variable.fontsize["1.2"]};
    color: ${Variable.color.textBlur};
  }
  .ant-upload.ant-upload-select-picture-card {
    width: 100%;
    height: 10rem;
    margin-top: 1rem;
  }
  .ant-upload-list-picture-card-container {
    display: none;
  }
  .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
  }
`
export const AvatarProfileContainer = styled.div`
  margin-top: 3rem;
  .avatar__profile--row {
    margin-top: 1rem;
    gap: 1rem;
    .avatar__img {
      width: 10rem;
      height: 10rem;
      background-color: ${Variable.color.primaryColor};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  .avatar__handle {
    width: auto;
    p {
      margin-top: 1rem;
      font-size: ${Variable.fontsize[1.2]};
      color: ${Variable.color.textBlur};
    }
  }
`
