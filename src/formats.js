const usdFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

// Export the format function as a named export called 'usd'
export default {
    usd: usdFormat.format
};