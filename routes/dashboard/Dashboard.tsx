/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { Box, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    //height: 240,
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard(props: Props): JSX.Element {
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
      user: "vfei.eth",
      amount: "10,000 DAI",
      interest: "3% APY",
      collatoral: "60%",
      msg: "Interest is freaking low",
      time: "20 min ago"
    },

    {
      type: "Supplied",
      user: "oxedfa.ef",
      amount: "20,000 USD",
      interest: "20% APY",
      msg: "fun... fun... fun...",
      time: "1 hr ago"
    },

    {
      type: "Liqudiated",
      user: "oxdi3.ab",
      collatoral: "80%",
      msg: "Liquidator: This guy is dumb.",
      time: "1 day ago"
    },

    {
      type: "Borrowed",
      user: "anon.eth",
      amount: "30 WETH",
      msg: "Borrowing money for pizza",
      time: "2 days ago"
    }
  ];

  return (
    <Box>
      <div className={classes.root}>
        <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
          <Grid item xs={12} style={{marginTop: -50, marginBottom: -20 }}>
            <Typography sx={{ mb: 2 }} variant="h3" align="left" style={{marginLeft: 20, fontWeight: '400', color: 'black'}}>
              Markets
            </Typography>
          </Grid>
          <Grid item xs={3.8}>
            <Paper className={classes.paper}>
              <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="center">
                Total Supply
              </Typography>
              <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h2" align="center">
                $100.51 M
              </Typography>
              <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h3" align="center">
                Top Markets
              </Typography>



              <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                    USDC
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h4" align="right">
                  $69.14M / 70%
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop: -14, marginBottom: 15}}>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Grid>

                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                  WETH
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h4" align="right">
                  $10.5M / 15%
                  </Typography>
                </Grid>
                
                <Grid item xs={12} style={{marginTop: -14, marginBottom: 15}}>
                  <BorderLinearProgress variant="determinate" value={15} />
                </Grid>

                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                    MKR
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h4" align="right">
                  $9.4M / 12%
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop: -14, marginBottom: 0}}>
                  <BorderLinearProgress variant="determinate" value={12} />
                </Grid>
              </Grid>

            </Paper>
          </Grid>
          <Grid item xs={3.8}>
            <Paper className={classes.paper}>
              <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="center">
                Total Value Locked (TVL)
              </Typography>
              <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h2" align="center">
                $60.8 M
              </Typography>

              <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                <Grid item xs={4}>
                  <Typography style={{color: 'black', marginTop: 0 }} sx={{ mb: 2 }} variant="h3" align="center">
                    # Markets
                  </Typography>
                  <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h3" align="center">
                    20
                  </Typography>
                </Grid>
                <Grid item xs={8}></Grid>
              </Grid>

              <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                <Grid item xs={4}>
                  <Typography style={{color: 'black', marginTop: 0 }} sx={{ mb: 2 }} variant="h3" align="center">
                    # Lender
                  </Typography>
                  <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h3" align="center">
                    10K
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography style={{color: 'black', marginTop: 0 }} sx={{ mb: 2 }} variant="h3" align="center">
                    # Borrower
                  </Typography>
                  <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h3" align="center">
                    20K
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography style={{color: 'black', marginTop: 0 }} sx={{ mb: 2 }} variant="h3" align="center">
                    # Default %
                  </Typography>
                  <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h3" align="center">
                    15%
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3.8}>
            <Paper className={classes.paper}>
              <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="center">
                Total Borrowed
              </Typography>
              <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h2" align="center">
                $50.63 M
              </Typography>
              <Typography style={{color: 'black', marginTop: -15 }} sx={{ mb: 2 }} variant="h2" align="center">
                Top Markets
              </Typography>


              <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                    USDC
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h4" align="right">
                  $35M / 70%
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop: -14, marginBottom: 15}}>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Grid>

                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                  MKR
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h4" align="right">
                  $6M / 15%
                  </Typography>
                </Grid>
                
                <Grid item xs={12} style={{marginTop: -14, marginBottom: 15}}>
                  <BorderLinearProgress variant="determinate" value={15} />
                </Grid>

                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                    WETH
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h4" align="right">
                  $5M / 11%
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop: -14, marginBottom: 0}}>
                  <BorderLinearProgress variant="determinate" value={11} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={10} style={{marginTop: 20, marginBottom: 0}}>
            <Typography sx={{ mb: 2 }} variant="h3" align="left" style={{marginLeft: 20, fontWeight: '400'}}>
              Activities
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              
            {activities.map((item,i) => <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                <Grid item xs={5}>
                  <Grid container justifyContent="space-around" spacing={0} justifyContent="flex-start" alignItems="stretch">
                    <Grid item xs={12}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.type}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{marginTop: -14}}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.user}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{marginTop: -14}}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.amount}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{marginTop: -14}}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.interest}
                      </Typography>
                      <Typography style={{color: 'black', fontWeight: '500', marginTop: -16}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.collatoral}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid container justifyContent="space-around" spacing={0} alignItems="stretch">
                    <Grid item xs={12}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        Msg
                      </Typography>
                    </Grid>
                    <Grid item xs={11} style={{marginTop: -14}}>
                      <Typography style={{color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h3" align="left">
                        {item.msg}
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
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
