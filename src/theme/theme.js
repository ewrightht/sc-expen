const theme = {
  palette: {
    primary: "#1B56D0",
    secondary: "#6c5ce7",
    danger: "#f53b57",
    warning: "#ffc048",
    light: "#F3F2F1",
    dark: "#172B4D",
    white: "#ffffff"
  },
  components: {
    button: {
      fontSize: "14px",
      size: {
        sm: "6px 10px",
        md: "8px 12px",
        lg: "10px 14px"
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
      }
    }
  },
  borderRadius: "4px",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

export default Object.freeze(theme);