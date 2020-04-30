import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from '@alchemy-se/catalog';
import moleculesNavigation from './molecules/navigation';
import organismsNavigation from './organisms/navigation';
import layoutsNavigation from './layouts/navigation';
const PACKAGE = require("../package.json");

import ReactGA from 'react-ga';
ReactGA.initialize('UA-159160070-1');

//All this needed?
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import Welcome from './WELCOME';
import Designers from './designers/getting-started-designers';
import Guidelines from './Guidelines';
import Video from './Video'

const styles = [
  '/dist/css/reboot.css',
  '/dist/css/main.css',
  '/dist/css/documentation.css'
]

const scripts = [
  '/dist/js/horizon.min.js'
]

const trackPage = (page) => {
  ReactGA.pageview(page);
};

const pages = [
  {
    path: "/",
    title: "Digital Design System",
    content: () => {trackPage("/"); return <Welcome/>}
  },
  {
    title: 'Get started',
    pages: [
      {
        path: "/design",
        title: "Designers",
        content: () => {trackPage("/design"); return <Designers/>}
      },
      {
        title: 'Developers',
        path: "/getting-started",
        content: pageLoader(() => {trackPage("/getting-started"); return import("./getting-started.md")})
      },
    ]
  },
  layoutsNavigation,
  {
    title: 'Components',
    pages: [
      {
        path: "/colors",
        title: "Colors & borders",
        content: pageLoader(() => {trackPage("/colors");return import("./colors.md")})
      }, {
        path: "/grid",
        title: "Grid",
        content: pageLoader(() => {trackPage("/grid"); return import("./grid.md")})
      }, {
        path: "/responsive",
        title: "Responsive",
        content: pageLoader(() => {trackPage("/responsive"); return import("./responsive.md")})
      }, {
        path: "/sizing",
        title: "Sizing",
        content: pageLoader(() => {trackPage("/sizing");return import("./sizing.md")})
      }, {
        path: "/spacing",
        title: "Spacing",
        content: pageLoader(() => {trackPage("/spacing");return import("./spacing.md")})
      }, {
        path: "/components-intro",
        title: "Atoms",
        content: pageLoader(() => {trackPage("/components-intro");return import("./components/intro.md")})
      }, {
        path: "/css/badge",
        title: "- Badge",
        content: pageLoader(() => {trackPage("/css/badge"); return import("./components/badge.md")})
      }, {
        path: "/css/button",
        title: "- Button",
        content: pageLoader(() => {trackPage("/css/button"); return import("./components/button.md")})
      }, {
        path: "/css/drop-down",
        title: "- Drop-down List",
        content: pageLoader(() => {trackPage("/css/drop-down"); return import("./components/drop-down.md")})
      }, {
        path: "/css/gdpr-consent-module",
        title: "- GDPR Consent Module",
        content: pageLoader(() => {trackPage("/css/gdpr-consent-module"); return import("./components/gdpr-consent-module.md")})
      }, {
        path: "/css/icon-text",
        title: "- Icon Text",
        content: pageLoader(() => {trackPage("/css/icon-text"); return import("./components/icon-text.md")})
      }, {
        path: "/css/input",
        title: "- Input",
        content: pageLoader(() => {trackPage("/css/input"); return import("./components/input.md")})
      }, {
        path: "/css/list",
        title: "- Lists",
        content: pageLoader(() => {trackPage("/css/list"); return import("./components/list.md")})
      }, {
        path: "/css/notification-module",
        title: "- Notification Module",
        content: pageLoader(() => {trackPage("/css/notification-module"); return import("./components/notification-module.md")})
      }, {
        path: "/css/numbered-list",
        title: "- Numbered List",
        content: pageLoader(() => {trackPage("/css/numbered-list"); return import("./components/numbered-list.md")})
      },  {
        path: "/css/preloader",
        title: "- Preloader",
        content: pageLoader(() => {trackPage("/css/preloader"); return import("./components/preloader.md")})
      }, {
        path: "/css/subscribe",
        title: "- Subscribe",
        content: pageLoader(() => {trackPage("/css/subscribe"); return import("./components/subscribe.md")})
      }, {
        path: "/css/tab-bar",
        title: "- Tab Bar",
        content: pageLoader(() => {trackPage("/css/tab-bar"); return import("./components/tab-bar.md")})
      }, {
        path: "/css/table",
        title: "- Table",
        content: pageLoader(() => {trackPage("/css/table"); return import("./components/table.md")})
      }, {
        path: "/css/text",
        title: "- Text",
        content: pageLoader(() => {trackPage("/css/text"); return import("./components/text.md")})
      }, {
        path: "/css/tooltip",
        title: "- Tooltip",
        content: pageLoader(() => {trackPage("/css/tooltip"); return import("./components/tooltip.md")})
      }, {
        path: "/css/utility-typography",
        title: "- Utility Typography",
        content: pageLoader(() => {trackPage("/css/utility-typography"); return import("./components/utility-typography.md")})
      },

      ...moleculesNavigation,
      ...organismsNavigation,

      {
        path: "/components/utilities",
        title: "Utilities",
        content: pageLoader(() => {trackPage("/components/utilities"); return import("./utilities/utilities.md")})
      }, {
        path: "/utilities/favicon",
        title: "- Favicon",
        content: pageLoader(() => {trackPage("/utilities/favicon"); return import("./utilities/favicon.md")})
      }, {
        path: "/utilities/icons",
        title: "- Icons",
        content: pageLoader(() => {trackPage("/utilities/icons"); return import("./utilities/icons.md")})
      },
    ]
  },
  {
    path: "/guidelines",
    title: 'Design guidelines',
    content: () => {trackPage("/guidelines"); return <Guidelines/>}
  },

  /* {
	 path: "/contribute",
	 title: "Contributing",
	 content: pageLoader(() => {return import("./contribute.md")})
   }*/
];

const theme = {
  background: "#ffffff",
  textColor: "#222222",
  codeColor: "#00263E",
  linkColor: "#1964A3",

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#D6D6D6",

  // Used in PageHeader
  pageHeadingBackground: "transparent",
  pageHeadingTextColor: "#222222",

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 140,

  // Used for navigation bar
  navBarBackground: "#F2F2F2",
  navBarTextColor: "#003B5C",

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#003B5C",

  sidebarColor: "#EDF1F6",
  sidebarColorActive: "#222222",
  sidebarColorText: "#1964A3",
  sidebarColorTextActive: "#1964A3",
  sidebarColorLine: "#EBEBEB",
  sidebarColorHeading: "#2071B5",

  // Used in the html, react, and image specimens.
  bgLight: "#ffffff",
  bgDark: "#333333"
}

const responsiveSizes =  [
  {name: 'Phone', width: 375, height: 667},
  {name: 'Tablet', width: 768, height: 1024},
  {name: 'Desktop', width: 1920, height: 1080},
]

const menuFooterLinkStyle = {
  color: '#1964A3',
  fontSize: '16px',
  fontWeight: 'normal',
  display: 'block',
  letterSpacing: 0,
  lineHeight: '32px',
  padding: '5px 0',
  textDecoration: 'none',
};

const menuFooterLinkIconStyle = {
  verticalAlign: 'baseline',
  marginRight: '5px'
};

const versionTextStyle = {
  color: "#222222",
  fontSize: "12px",
  marginBottom: 0
};

const menuFooter = () => (
    <div style={{ padding: '40px 42px', fontFamily: 'Vattenfall Hall' }}>
      <a href="https://app.goabstract.com/organizations/2776932d-ce7d-4fc3-8c46-0da875d726d3/projects" style={menuFooterLinkStyle}>
        <img style={menuFooterLinkIconStyle} src="/img/docs/abstract.svg" /> Abstract
      </a>
      <a href="https://github.com/Alchemy-se/Vattenfall-One-Brand-Design-System" style={menuFooterLinkStyle}>
        <img style={menuFooterLinkIconStyle} src="/img/docs/github.svg" /> Github
      </a>
      <p style={versionTextStyle}>{"Version "+PACKAGE.version}</p>
    </div>
)

ReactDOM.render(
    <Catalog
        title="Vattenfall Design System"
        useBrowserHistory
        responsiveSizes={responsiveSizes}
        pages={pages}
        logoSrc={'/img/docs/logo.svg'}
        theme={theme}
        menuFooter={menuFooter}
        styles={[]}
        globalStyles={styles}
        scripts={scripts} />,
    document.getElementById("catalog")
);
