import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          "&.MuiContainer-maxWidthSm": {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 512,
          },
        },
        maxWidthXl: {
          "&.MuiContainer-maxWidthXl": {
            maxWidth: 1320,
          },
        },
      },
    },
  },
});
