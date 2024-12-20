const checkout = async (
  products: any,
  site_url: string,
  order_id: string | string[]
) => {
  await fetch(`${site_url}/api/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products,
      successUrl: `${site_url}/success/${order_id}`,
      cancelUrl: `${site_url}/failure/${order_id}`,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      if (response.url) {
        window.location.href = response.url;
      }
    });
};
export { checkout };
