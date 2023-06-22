import Modals from "$store/islands/HeaderModals.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Navbar from "./Navbar.tsx";
import { headerHeight, headerMobileHeight } from "./constants.ts";

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
      <header
        class={`flex container h-[${headerMobileHeight}] sm:h-[${headerHeight}] mb-10 xl:mb-0`}
      >
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
