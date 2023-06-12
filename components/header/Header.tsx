import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  alerts: string[];
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
}

function Header({
  alerts,
  navItems = [],
}: Props) {
  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class="bg-base-100 fixed w-full z-50">
          <Alert alerts={alerts} />
          <Navbar items={navItems} />
        </div>

        <Modals
          menu={{ items: navItems }}
        />
      </header>
    </>
  );
}

export default Header;
