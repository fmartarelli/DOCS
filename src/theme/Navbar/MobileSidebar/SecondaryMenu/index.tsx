import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

export default function NavbarMobileSidebarSecondaryMenu(): ReactNode {
  const secondaryMenu = useNavbarSecondaryMenu();

  if (!secondaryMenu.content) {
    return null;
  }

  return (
    <div className="navbar-sidebar__section navbar-sidebar__section--secondary">
      <span className="navbar-sidebar__section-title">
        <Translate
          id="theme.navbar.mobileSidebarSecondaryMenu.sectionTitle"
          description="The title shown above the contextual mobile docs navigation">
          Nesta secao
        </Translate>
      </span>
      {secondaryMenu.content}
    </div>
  );
}
