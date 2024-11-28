import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import Cookies from "js-cookie";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

export const WixClient = createClient({
  modules: {
    products,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      accessToken: {
        value: "",
        expiresAt: 0,
      },
      //   refreshToken: {
      //     value: "ac1eb0d1-cf2e-482f-8516-6011e438a550",
      //     role: "admin",
      //   },
      refreshToken,
    },
  }),
});


