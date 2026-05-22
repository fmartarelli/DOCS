import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/Navbar/MobileSidebar/Layout';

function NavbarMobileSidebarPanel({children}: {children: ReactNode}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.panel,
        'navbar-sidebar__item menu',
      )}>
      {children}
    </div>
  );
}

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): ReactNode {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        'navbar-sidebar',
      )}>
      {header}
      <div className="navbar-sidebar__items navbar-sidebar__items--stacked">
        <NavbarMobileSidebarPanel>
          <div className="navbar-sidebar__section">{primaryMenu}</div>
          {secondaryMenu}
        </NavbarMobileSidebarPanel>
      </div>
    </div>
  );
}
