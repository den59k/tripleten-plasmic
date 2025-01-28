import { initPlasmicLoader } from "@plasmicapp/loader-react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "mFK62F3op98dvDe8VXezui",  // ID of a project you are using
      token: "W22os9MrYk8W6qh0UdkfK6wNpTJyH6FjIzfssJ55hI2e7RjEBxkFauLW7C1LakWSVRa6KfGgcbsQBRI4BXQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
  platform: "react"
})

PLASMIC.registerComponent(AppHeader, {
  importPath: "./src/components/AppHeader/AppHeader",
  isDefaultExport: true,
  name: 'AppHeader',
  props: {
    headerType: { type: 'choice', options: [ "landingPage", "contentPage" ] },
    children: "slot"
  }
});

PLASMIC.registerComponent(AppFooter, {
  name: 'AppFooter',
  importPath: "./src/components/AppFooter/AppFooter",
  isDefaultExport: true,
  props: { }
});