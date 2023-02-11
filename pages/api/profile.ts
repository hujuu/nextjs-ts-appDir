import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function products(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ["read:messages"],
    });
    const response = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(error.status || 400).end(error.message);
  }
});
