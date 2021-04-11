import { gql }from "@apollo/client";
import MenuFragment from "./fragments/menus";

const HeaderFooterQuery = `header: getHeader {
    favicon
    siteLogoUrl
    siteTagLine
    siteTitle
  }
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
              ...MenuFragment
            }
          }
        }
      }
    }
  }
  footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
  footer: getFooter {
    copyrightText
    sidebarOne
  }`

export const GET_MENUS = gql `
query GET_MENUS {
  ${HeaderFooterQuery}
}
${MenuFragment}
`