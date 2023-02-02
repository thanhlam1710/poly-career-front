import React from "react"
import { Menu, MenuProps } from "antd"
import { useRouter } from "next/router"
import { AdminNavTree, EmploymentNavTree } from "@constants"
import { useProfile } from "hook/useProfile"
import { NavTree } from "interfaces/Navbar"

type MenuItem = Required<MenuProps>["items"][number]

interface MenuContentProps {
  collapse?: boolean
}

const MenuContent: React.FC<MenuContentProps> = () => {
  const router = useRouter()
  const { employerProfile } = useProfile()
  const generateMenuItem = (menu: NavTree[]): MenuItem[] => {
    const newMenu: MenuItem[] = []

    menu.forEach((e) => {
      if (e.divider) {
        newMenu.push({
          type: "divider",
        })
      } else {
        newMenu.push({
          key: e.key,
          label: e.title,
          icon: e.icon ? <e.icon /> : null,
          disabled: e.disable && e.disable(),

          title: e.title,
          onClick: () => {
            if (e.path && !e.submenu?.length) router.push(e.path)
          },
          children: e.submenu ? generateMenuItem(e.submenu) : undefined,
        })
      }
    })

    return newMenu
  }

  return (
    <Menu
      // collapsed={Boolean(collapse)}
      theme="light"
      mode="inline"
      items={generateMenuItem(
        employerProfile?.role.toString() === "2" ? EmploymentNavTree : AdminNavTree
      )}
    />
  )
}

export default MenuContent
