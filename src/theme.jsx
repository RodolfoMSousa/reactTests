import { createTheme } from "@mui/material"
import { blue, green, red } from "@mui/material/colors"

const theme = createTheme({
    palette: {
      // mode: "dark",
      primary: {
        main: green[500],
        "100": blue[100]
      },
      customCol: {
        main: red[500]
      },
    },
    components: {
      // MuiTypography: {
      //   styleOverrides: {
      //     color: red[900]
      //   }
      // },
      MuiButton: {
        styleOverrides: {
          contained: ({theme}) => ({
            color: theme.palette.customCol.main
          })
        }
      }
    }
})

export default theme;