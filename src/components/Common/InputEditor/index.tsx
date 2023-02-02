import React, { useEffect, useRef, useState } from "react"
import RichTextEditor, { EditorValue, ToolbarConfig } from "react-rte"

interface TargetProps {
  target: {
    name: string
    value: string
  }
}

interface InputEditorProps {
  onChange?: (e: TargetProps) => void
  value?: string
  name: string
  maxrows?: number
  className?: string
}
const InputEditor: React.FC<InputEditorProps> = (props) => {
  const toolbarConfig: ToolbarConfig = {
    display: [
      "INLINE_STYLE_BUTTONS",
      "BLOCK_TYPE_BUTTONS",
      "BLOCK_TYPE_DROPDOWN",
      "HISTORY_BUTTONS",
    ],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "custom-css-class" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: "Normal", style: "unstyled" },
      { label: "Heading Large", style: "header-one" },
      { label: "Heading Medium", style: "header-two" },
      { label: "Heading Small", style: "header-three" },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" },
    ],
  }
  const { onChange, value = "", name, maxrows = 4, className } = props
  const [valueLocal, setValueLocal] = useState<EditorValue>(RichTextEditor.createEmptyValue())
  const editorRef = useRef(null)

  const handleChange = (e: EditorValue) => {
    const values = e.toString("html")
    setValueLocal(e)
    if (onChange) {
      onChange({
        target: {
          name,
          value: values,
        },
      })
    }
  }

  const getCountRow = () => valueLocal.getEditorState().getCurrentContent().getBlockMap().size

  const handleNewLine = () => {
    if (getCountRow() >= maxrows) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (value !== valueLocal.toString("html")) {
      setValueLocal(RichTextEditor.createValueFromString(value, "html"))
    }
  }, [value])

  return (
    <div>
      <RichTextEditor
        value={valueLocal}
        onChange={handleChange}
        ref={editorRef}
        handleReturn={handleNewLine}
        toolbarConfig={toolbarConfig}
        className={className}
      />
    </div>
  )
}

export default InputEditor
