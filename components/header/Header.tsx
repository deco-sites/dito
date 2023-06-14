import Modals from "$store/islands/HeaderModals.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  image: LiveImage;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
}

function Header({
  image,
  navItems = [],
}: Props) {
  return (
    <>
      <header style={{ height: headerHeight }} class="flex container ">
        <div class="bg-base-100 flex w-full z-50">
          <Navbar items={navItems} logo={image} />
        </div>

        <Modals
          menu={{ items: navItems }}
        />
      </header>
    </>
  );
}

export default Header;
