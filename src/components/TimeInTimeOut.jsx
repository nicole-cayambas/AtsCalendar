import { Box, Button, Stack, Typography } from "@mui/material"
import { dummyTimeLogs } from "./dummy"

const TimeInTimeOut = () => {
  return (
    <Box maxWidth={'500px'} margin='auto'>
      <Typography variant="h6" fontWeight={'bold'} mb={2}>ATS Logs</Typography>
      <Stack direction='column' spacing={2}>
        {
          dummyTimeLogs.map((log, i) => {
            return (
              <Box key={i} >
                <Button
                  size={'large'}
                  variant={'contained'}
                  sx={{ float: log.log_type == 'In' ? 'left' : 'right' }}
                  color={log.log_type == 'In' ? 'success' : 'error'}
                >
                  {log.log_time} {log.log_type}
                </Button>
              </Box>
            );
          })
        }
        <Button sx={{ height: '50px' }} variant="contained">Time In</Button>
      </Stack>
    </Box>
  )
}

export default TimeInTimeOut