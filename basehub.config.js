// Optional BaseHub configuration
// If BASEHUB_TOKEN is not set, the build will continue without BaseHub
module.exports = {
  draft: process.env.NODE_ENV === "development",
  token: process.env.BASEHUB_TOKEN || "",
  // Make BaseHub optional
  optional: !process.env.BASEHUB_TOKEN,
}
