import { Fragment } from "react"
import Week from "./components/Week"
import TimeInTimeOut from "./components/TimeInTimeOut"
import { Grid } from "@mui/material"

const App = () => {

  return (
    <Fragment>
      {/* <Week /> */}
      <Grid container>
        <Grid item xs={6}>
          <TimeInTimeOut />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default App
