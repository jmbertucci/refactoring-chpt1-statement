const usdFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default {
    usd: usdFormat.format
};