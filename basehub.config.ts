// Stub BaseHub config for compatibility
// This file is required by some legacy pages but BaseHub is not used anymore

export const basehubConfig = {
  token: process.env.BASEHUB_TOKEN || "",
  draft: process.env.BASEHUB_DRAFT === "true",
}

export default basehubConfig
