import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    custom: {
      background_light: [
        "linear-gradient(to right, #c6e6f8 5%, #95bcd3 95%)",
        "linear-gradient( to right, #95bbd4 5%,#859bac 95%)",
      ],
    },
  },
});

export default theme;
