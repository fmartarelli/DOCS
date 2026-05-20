import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {
  useNavbarMobileSidebar,
  useNavbarSecondaryMenu,
} from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';

function SecondaryMenuBackButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} type="button" className="clean-btn navbar-sidebar__back">
      <Translate
        id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
        description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
        Voltar ao menu principal
      </Translate>
    </button>
  );
}

function SecondaryMenuPrimaryLinks(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = [
    {label: 'Comece aqui', to: '/docs/intro'},
    {label: 'Central de Ajuda', to: '/docs/intro'},
    {label: 'FAQ', to: '/docs/faq/faq-principal'},
    {label: 'Suporte', to: '/docs/suporte/contato'},
  ];

  return (
    <div className="navbar-sidebar__section">
      <ul className="menu__list">
        {items.map((item, index) => (
          <li key={index} className="menu__list-item">
            <Link
              to={item.to}
              className="menu__link"
              onClick={() => mobileSidebar.toggle()}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NavbarMobileSidebarSecondaryMenu(): ReactNode {
  const secondaryMenu = useNavbarSecondaryMenu();

  return (
    <>
      <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
      <SecondaryMenuPrimaryLinks />
      {secondaryMenu.content}
    </>
  );
}
