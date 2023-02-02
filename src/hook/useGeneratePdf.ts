import { useRef } from "react"
import JsPDF from "jspdf"

export const useGeneratePdf = (title?: string) => {
  const ref = useRef<HTMLDivElement>(null)

  const generatePdf = async () => {
    if (!ref.current) return
    const jspdf = new JsPDF({
      format: [794, 1123],
      unit: "px",
      orientation: "portrait",
      putOnlyUsedFonts: false,
      compress: true,
    })

    jspdf.addFont("/font/Roboto-Regular.ttf", "roboto", "normal")
    jspdf.setFont("roboto", "normal")

    await jspdf.html(ref.current, {
      margin: [0, 0, 0, 0],
    })
    jspdf.save(title || "PolyCareerCv")
  }

  return { ref, generatePdf }
}
