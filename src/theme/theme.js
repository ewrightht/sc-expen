const theme = {
  palette: {
    primary: "#6264A7",
    secondary: "#6c5ce7",
    danger: "#f53b57",
    warning: "#ffc048",
    success: "#59c649",
    light: "#f3f2f1",
    gray: "#777777",
    dark: "#303132",
    primaryDark: "#464475",
    white: "#ffffff",
    black: "#000000"
  },
  components: {
    button: {
      fontSize: "13px",
      size: {
        sm: "0px 20px",
        md: "4px 22px",
        lg: "8px 24px"
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
  borderRadius: "3px",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

export default Object.freeze(theme);