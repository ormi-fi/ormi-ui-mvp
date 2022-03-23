/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import account from "./account";
import dashboard from "./dashboard";
import home from "./home";
import legal from "./legal";
import markets from "./markets";
import profile from "./profile";

/**
 * The list of application routes (pages).
 */
export default [home, dashboard, markets, profile, account, ...legal] as const;
