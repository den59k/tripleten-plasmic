import { initPlasmicLoader } from "@plasmicapp/loader-react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import Table from "./components/Table/Table";
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
  importPath: "/src/components/AppHeader/AppHeader",
  isDefaultExport: true,
  name: 'AppHeader',
  props: {
    headerType: { type: 'choice', options: [ "landingPage", "contentPage" ] },
    children: "slot"
  }
});

PLASMIC.registerComponent(AppFooter, {
  name: 'AppFooter',
  importPath: "/src/components/AppFooter/AppFooter",
  isDefaultExport: true,
  props: { }
});

PLASMIC.registerComponent(Table, {
  name: "Table",
  importPath: "/src/components/Table/Table",
  isDefaultExport: true,
  props: {
    columns: { type: "array", itemType: { 
      type: "object", 
      fields: { name: { type: "string" } }, 
      nameFunc: (item: any) => item.name } 
    },
    data: { type: "object" }
  }
})