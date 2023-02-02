/// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1440px

const size = {
  mobile: "768px",
  tablet: "768px",
  laptop: "1440px",
}

export default {
  size,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
}
