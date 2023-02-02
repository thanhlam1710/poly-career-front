import { Variable } from "./Variable"

export const btnPrimary = {
  width: "15rem",
  height: "5rem",
  color: Variable.color.whiteColor,
  fontWeight: Variable.fw.bold,
  backgroundColor: Variable.color.primaryColor,
  borderRadius: "0.5rem",
}

export const btnSecondary = {
  width: "15rem",
  height: "5rem",
  color: Variable.color.primaryColor,
  border: `1px solid ${Variable.color.primaryColor}`,
  fontWeight: Variable.fw.bold,
  backgroundColor: Variable.color.whiteColor,
  borderRadius: "0.5rem",
}
