import { defineConfig } from "astro/config";

const repoName = "TEL_veebileht";
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  site: "https://eraismus.github.io",
  base: isGitHubPages ? `/${repoName}` : "/",
  output: "static"
});
