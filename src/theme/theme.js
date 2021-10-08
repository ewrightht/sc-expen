const theme = {
  palette: {
    primary: "#05428b",
    secondary: "#6c5ce7",
    danger: "#f53b57",
    warning: "#ffc048",
    light: "#F2F3F5",
    gray: "#777777",
    dark: "#323130",
    white: "#ffffff",
    black: "#000000"
  },
  components: {
    button: {
      fontSize: "14px",
      size: {
        sm: "0px 10px",
        md: "4px 12px",
        lg: "8px 14px"
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
  borderRadius: "4px",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

export default Object.freeze(theme);