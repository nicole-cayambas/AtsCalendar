import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material'
import { Fragment } from 'react'
import { dummyWeekDates } from './dummy'
import { format } from 'date-fns'
const dayHours = 24;
const hourHeight = 55;
const headerHeight = 30;
const lineColor = '#a8a8a8';
const Week = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item container xs={1}>
          <HeaderItem>
            <Typography fontWeight={'bold'}>Time</Typography>
          </HeaderItem>
          {
            [...Array(dayHours).keys()].map((hour) => {
              return (
                <RowItem key={hour}>
                  <Typography>{hour < 12 ? hour + 1 : hour - 11}:00 {hour < 11 || hour == 23 ? 'AM' : 'PM'}</Typography>
                </RowItem>
              );
            })
          }
        </Grid>
        {
          dummyWeekDates?.map((date, i) => {
            return (
              <Grid item container key={i} xs={1.5}>
                <HeaderItem>
                  <Typography fontWeight={'bold'}>{format(date, 'LLL d E')}</Typography>
                </HeaderItem>
                {
                  [...Array(dayHours).keys()].map(hour => {
                    return (
                      <RowItem key={hour}>
                        <Card sx={{ height: '100%', width: '100%', borderRadius: 0 }}>
                          <CardActionArea sx={{ backgroundColor: 'primary.main', height: '100%' }}>
                            <Typography>{hour}</Typography>
                          </CardActionArea>
                        </Card>
                      </RowItem>
                    );

                  })
                }
              </Grid>
            )
          })
        }
      </Grid>
    </Fragment>
  )
}

const HeaderItem = ({ children }) => {
  return (
    <Grid item xs={12} sx={{ borderBottom: `1px solid ${lineColor}`, height: `${headerHeight}px`, textAlign: 'center' }} >
      {children}
    </Grid>
  )
}

const RowItem = ({ children }) => {
  return (
    <Grid item xs={12} height={`${hourHeight}px`} sx={{ textAlign: 'center', borderTop: `1px solid ${lineColor}`, borderInline: `1px solid ${lineColor}` }}>
      {children}
    </Grid>
  )
}

export default Week