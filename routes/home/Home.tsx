/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { Box, Button, Container, Typography } from "@material-ui/core";
import { Api, GitHub } from "@material-ui/icons";
import * as React from "react";
import { config } from "../../core";
import { useLoginDialog, useNavigate } from "../../hooks";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

export default function Home(props: Props): JSX.Element {
  const { me } = props;
  const loginDialog = useLoginDialog();
  const navigate = useNavigate();

  function signIn(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    loginDialog.show();
  }

  return (
    <Box>
      <Container sx={{ py: "20vh" }} maxWidth="sm">
        <Typography sx={{ mb: 2 }} variant="h1" align="center">
          Welcome to Ormi
        </Typography>

        <Typography sx={{ mb: 4 }} variant="h3" align="center">
          The web's most popular de-collateralized lending protocol.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            ".MuiButton-root": { m: 1 },
          }}
        >
          <Button
            variant="outlined"
            size="large"
            href={config.api.path}
            children="Explorer API"
            startIcon={<Api />}
          />
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/ormi-fi/ormi-ui"
            children="View on GitHub"
            startIcon={<GitHub />}
          />
        </Box>
      </Container>
    </Box>
  );
}
