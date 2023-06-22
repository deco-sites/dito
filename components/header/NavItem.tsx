export interface INavItem {
  label: string;
  href: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label } = item;

  return (
    <li class="group flex items-center px-10 sm:px-1">
      <a href={href} class="xl:px-4 px-1 py-3">
        <span class="text-xs hover:text-main">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
