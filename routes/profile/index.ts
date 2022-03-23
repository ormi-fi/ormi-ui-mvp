/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { graphql } from "relay-runtime";
import type { Route } from "../../core";
import type Profile from "./Profile";
import type { homeQueryResponse } from "./__generated__/homeQuery.graphql";

/**
 * Homepage route.
 */
export default {
  path: "/profile",
  query: graphql`
    query homeQuery {
      me {
        ...CurrentUser_me
        id
        name
        email
      }
    }
  `,
  component: () => import(/* webpackChunkName: "home" */ "./Profile"),
  response: (data) => ({
    title: "Ormi • The web's most popular de-collateralized lending protocol.",
    description: "The web's most popular de-collateralized lending protocol.",
    props: data,
  }),
} as Route<typeof Profile, homeQueryResponse>;
