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

export default function Markets(props: Props): JSX.Element {
  const { me } = props;
  const loginDialog = useLoginDialog();
  const navigate = useNavigate();
  const classes = useStyles();

  function signIn(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    loginDialog.show();
  }

  const columns = [
    'Market',
    'Price',
    'Avg Supply APY',
    'Avg Borrow APY',
    'Total Supply',
    'Total Borrowed / %',
    'Available / %'
  ];

  const markets = [
    {
      market: 'USD',
      price: '$1.01',
      avg_supply_apy: '6.0%',
      avg_borrow_apy: '12%',
      total_supply: '$70M',
      total_borrowed: '60M / 83%',
      available: '12M / 17%'
    },

    {
      market: 'WETH',
      price: '$3.140',
      avg_supply_apy: '6.4%',
      avg_borrow_apy: '2%',
      total_supply: '$25M',
      total_borrowed: '-',
      available: '-'
    },

    {
      market: 'WBTC',
      price: '$42.150',
      avg_supply_apy: '1.2%',
      avg_borrow_apy: '3.4%',
      total_supply: '$20M',
      total_borrowed: '-',
      available: '-'
    },

    {
      market: 'DAI',
      price: '$1.01',
      avg_supply_apy: '5.1%',
      avg_borrow_apy: '10.9%',
      total_supply: '$10M',
      total_borrowed: '5M / 50%',
      available: '5M / 50%'
    }
  ];

  return (
    <Box>
      <div className={classes.root}>
        <Grid container justifyContent="space-around" spacing={0} alignItems="stretch" style={{marginTop: -40}}>
          <Grid item xs={9} style={{marginTop: 0, marginBottom: 0}}>
            <Typography sx={{ mb: 2 }} variant="h3" align="left" style={{marginLeft: 20, fontWeight: '400'}}>
              All Markets
            </Typography>
          </Grid>
          <Grid item xs={1} style={{marginTop: 0, marginBottom: 0}}>
            <Typography sx={{ mb: 2 }} variant="h3" align="center" style={{ marginLeft: 0, fontWeight: '400'}}>
              Page 1 of 1
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Grid container>
                {columns.map((item, i) => 
                <Grid item xs={1.7}>
                  <Typography style={{textDecoration: 'underline', color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h2" align="center">
                    {item}
                  </Typography>
                </Grid>)}

                {
                  markets.map((item, i) => 
                    Object.entries(item).map( ([key, value]) =>
                      <Grid item xs={1.7}>
                        <Typography style={{ color: 'black', fontWeight: '500'}} sx={{ mb: 2 }} variant="h2" align="center">
                          {value}
                        </Typography>
                      </Grid>
                  ))
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
