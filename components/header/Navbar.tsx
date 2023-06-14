import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

function Navbar({ items, logo }: {
  items: INavItem[];
  logo: LiveImage;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center w-full pl-2 pr-6 gap-2"
      >
        <Buttons variant="menu" />

        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <img src={logo} width="112" height="79" />
        </a>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full px-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="flex">
            <img src={logo} width="112" height="79" />
          </a>
        </div>
        <div class="flex-auto flex justify-end">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none  flex items-center justify-center">
          <a
            class="btn btn-sm rounded-full border-main border-2 text-main bg-white w-28 h-9 mx-3"
            href="/login"
            aria-label="Log in"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
