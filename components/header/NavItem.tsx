export interface INavItem {
  label: string;
  href: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <span class="text-xs group-hover:underline">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
