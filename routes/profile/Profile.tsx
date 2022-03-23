/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { Box, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import HomeIcon from '@mui/icons-material/Home';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from "react";
import { useLoginDialog, useNavigate } from "../../hooks";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    //height: 240,
    color: theme.palette.text.secondary,
  },
}));

export default function Profile(props: Props): JSX.Element {
  const { me } = props;
  const loginDialog = useLoginDialog();
  const navigate = useNavigate();
  const classes = useStyles();

  function signIn(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    loginDialog.show();
  }

  const activities = [
    {
      type: "Borrowed",
      amount: "10,000 DAI @ 61% Collateral",
      interest: "3% APY",
      collatoral: "60%",
      time: "3 min ago"
    },

    {
      type: "Supplied",
      amount: "3 WETH",
      interest: "20% APY",
      time: "9 hrs ago"
    },

    {
      type: "Liqudiated",
      amount: "2 WETH",
      collatoral: "80%",
      time: "5 days ago"
    },

    {
      type: "Borrowed",
      amount: "5,000 DAI @ 81% Collateral",
      time: "3 weeks ago"
    }
  ];


  return (
    <Box>
      <div className={classes.root}>
        <Grid container justifyContent="space-around" spacing={0} alignItems="stretch" style={{marginTop: -40}}>

          <Grid item xs={2} style={{marginTop: 0, marginBottom: 0, backgroundColor: 'lightblue'}}>
            <Grid container justifyContent="space-around" spacing={2} alignItems="stretch" style={{marginTop: 0}}>
              <Grid item xs={6} style={{marginTop: 0, marginBottom: 0}}>
                <Typography className={classes.wrapIcon} sx={{ mb: 2 }} variant="h3" align="left" style={{ marginLeft: 0, fontWeight: '600'}}>
                  <HomeIcon style={{marginRight: 6}}></HomeIcon>Home
                </Typography>
              </Grid>
              <Grid item xs={8} style={{marginTop: 0, marginBottom: 0}}>
                <Typography className={classes.wrapIcon} sx={{ mb: 2 }} variant="h3" align="left" style={{ marginLeft: 0, fontWeight: '600'}}>
                  <AssuredWorkloadIcon style={{marginRight: 6}}></AssuredWorkloadIcon> Governance
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={9} style={{marginTop: 0, marginBottom: 0}}>
            <Grid container justifyContent="space-around" spacing={2} alignItems="stretch" style={{marginTop: 0}}>
              <Grid item xs={12} style={{marginTop: 0, marginBottom: 0, height: 170, backgroundColor: 'teal'}}>
                <Typography sx={{ mb: 2 }} variant="h1" align="center" style={{ marginLeft: 0, fontWeight: '400'}}>
                  Cover Photo
                </Typography>
              </Grid>

              <Grid item xs={12} style={{marginTop: 0, marginBottom: -10, height: 70}}>
                <Typography sx={{ mb: 2 }} variant="h1" align="center" style={{ marginLeft: 0, fontWeight: '400'}}>
                  Description...
                </Typography>
              </Grid>

              <Grid item xs={4} style={{marginTop: 0, marginBottom: 0}}>
                <Typography sx={{ mb: 2 }} variant="h3" align="center" style={{ marginLeft: 0, fontWeight: '600'}}>
                  150 Following
                </Typography>
              </Grid>
              <Grid item xs={4} style={{marginTop: 0, marginBottom: 0}}>
                <Typography sx={{ mb: 2 }} variant="h3" align="center" style={{ marginLeft: 0, fontWeight: '600'}}>
                  260 Followers
                </Typography>
              </Grid>
              <Grid item xs={4} style={{marginTop: 0, marginBottom: 0}}>
                <Typography sx={{ mb: 2 }} variant="h3" align="center" style={{ marginLeft: 0, fontWeight: '600'}}>
                  61% min collateral ratio
                </Typography>
              </Grid>


              <Grid item xs={12} style={{marginTop: 0, marginBottom: -30}}>
                <Typography sx={{ mb: 2 }} variant="h2" align="left" style={{textDecoration: 'underline', marginLeft: 0, fontWeight: '700'}}>
                  Activities
                </Typography>
              </Grid>

              <Grid item xs={12} style={{marginTop: 20, marginBottom: 0}}>
            {activities.map((item,i) => <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                <Grid item xs={10}>
                  <Grid container justifyContent="space-around" spacing={2} justifyContent="flex-start" alignItems="stretch">
                    <Grid item xs={2}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.type}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{marginTop: 0}}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.amount}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{marginTop:  0}}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="center">
                        {item.interest ? 'Min Collateral Ratio' : '-'}
                      </Typography>
                      <Typography style={{color: 'black', fontWeight: '500', marginTop: -20}} sx={{ mb: 2 }} variant="h3" align="center">
                        {item.interest}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                    {item.time}
                  </Typography>
                </Grid>
              </Grid>)}
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
