import color from "./Color"
import device from "./Device"

export const Variable = {
  device,
  color,
  fw: {
    /**
     * @description font-weight: 700;
     */
    bold: "700",
    /**
     * @description font-weight: 300;
     */
    normal: "300",
  },
  fontsize: {
    "1": "1rem",
    "1.2": "1.2rem",
    "1.4": "1.4rem",
    "1.3": "1.3rem",
    "1.5": "1.5rem",
    "1.6": "1.6rem",
    "1.7": "1.7rem",
    "1.8": "1.8rem",
    "2": "2rem",
    "2.2": "2.2rem",
    "2.4": "2.4rem",
    "3": "3rem",
    "6": "6rem",
  },
  boxShadow: {
    shadowHeader: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    shadowDropdown: "1px 1px 6px rgba(0, 0, 0, 0.25);",
    shadowBoxContent: "1px 1px 6px rgba(0, 0, 0, 0.25)",
    shadowBoxCompany: "0 1px 2px 2px rgba(0, 0, 0, 0.1)",
    shadowHeaderAdmin: "0 1px 4px -1px rgb(0 0 0 / 15%)",
    shadowColor: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
}
