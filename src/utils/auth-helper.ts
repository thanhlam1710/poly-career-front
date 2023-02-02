import { ROLE } from "@constants"

export const employerOnly = [ROLE.employer]
export const studentOnly = [ROLE.student]
export const superAdminOnly = [ROLE.super_admin]

export function hasAccess(_allowedRoles: string[], userRole?: string) {
  if (userRole) {
    return Boolean(_allowedRoles?.includes(userRole))
  }
  return false
}

export const formMatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat("en-US").format(new Date(date))
}
