import React from "react"
import { SearchOutlined } from "@ant-design/icons"
import { AutoComplete, Input } from "antd"

const SearchInput: React.FC = () => {
  const onSelect = (e: string) => {
    console.log(e)
  }

  return (
    <AutoComplete className={`header__input `} options={[{}]} onSelect={onSelect}>
      <Input placeholder="Search..." prefix={<SearchOutlined className="mr-0" />} />
    </AutoComplete>
  )
}

export default SearchInput
