const theme = {
  palette: {
    primary: "#0a3d62",
    secondary: "#6c5ce7",
    danger: "#f53b57",
    warning: "#ffc048",
    success: "#59c649",
    light: "#F3F2F1",
    gray: "#777777",
    dark: "#303132",
    white: "#ffffff",
    black: "#000000"
  },
  components: {
    button: {
      fontSize: "13px",
      size: {
        sm: "0px 10px",
        md: "4px 14px",
        lg: "8px 18px"
      }
    },
    card: {
      size: {
        sm: "400px",
        md: "500px",
        lg: "600px"
      }
    },
    container: {
      justifyContent: {
        center: "center",
        evenly: "space-evenly",
        around: "space-around",
        between: "space-between",
        start: "flex-start",
        end: "flex-end"
      },
      alignItems: {
        center: "center",
        evenly: "space-evenly",
        around: "space-around",
        between: "space-between",
        start: "flex-start",
        end: "flex-end"
      },
      flexDirection: {
        row: "row",
        column: "column"
      }
    }
  },
  borderRadius: "0.25rem",
  boxShadow: "0px 3px 3px rgba(150, 150, 150, 0.2)"
};

export default Object.freeze(theme);