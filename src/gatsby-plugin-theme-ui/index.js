export default {
  colors: {
    background: "#fff",
    heading: "#001143",
    text: "#001143",
    label: "#7b86a3",
    gray: "#f5f7fb",
    darkGray: "#ced4e6",
    success: "#ace498",
    fail: "#f46969",
    lightRed: "#FFEEEE",
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints: ["420px", "768px"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  heading: {
    fontFamily: "heading",
    lineHeight: "heading",
    color: "heading",
    fontWeight: "600",
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "heading",
    },
    button: {
      border: "none",
    },
    a: {
      color: "text",
      textDecoration: "none",
    },
    table: {
      borderCollapse: "collapse",
      width: "100%",
    },
    th: {
      textAlign: "left",
      fontWeight: "normal",
      p: 3,
      textTransform: "uppercase",
      fontSize: 0,
      color: "label",
      letterSpacing: "1.67px",
      borderBottomColor: "darkGray",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
    },
    td: {
      fontWeight: "normal",
      p: 3,
      fontSize: 2,
      verticalAlign: "center",
    },
  },
}
