import Icon from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { ComponentChildren } from "preact";

export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem;

export type Section = {
  label: string;
  children: Item[];
};

export type Social = {
  icon: LiveImage;
  href: string;
};

function SectionItem({ item }: { item: Item }) {
  return (
    <span class="text-primary-content text-xs">
      <a href={item.href}>
        {item.label}
      </a>
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  logo: LiveImage;
  sections?: Section[];
  socialMedia?: Social[];
}

function Footer({ logo, sections = [], socialMedia = [] }: Props) {
  console.log(socialMedia);
  return (
    <footer class="w-full bg-[#19223c] flex flex-col">
      <div>
        <div class="container w-full flex flex-col">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row justify-between">
              <li>
                <a
                  href="/"
                  class="flex-grow inline-flex items-center"
                  aria-label="Store logo"
                >
                  <img src={logo} width="145" height="102" />
                </a>
              </li>
              {sections.map((section) => (
                <li>
                  <div>
                    <span class="text-base text-main font-bold">
                      {section.label}
                    </span>

                    <ul class="flex flex-col gap-2 pt-2 flex-wrap">
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <span class="text-main font-bold">
                    <details>
                      <summary>
                        {section.label}
                      </summary>

                      <ul class="flex flex-col gap-2 px-2 pt-2">
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </span>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </div>
      </div>

      <div>
        <div class="container w-full">
          <FooterContainer class="flex flex-col lg:flex-row w-full justify-center items-center lg:relative">
            <ul class="flex items-center self-center gap-5">
              {socialMedia.map((social) => (
                <li>
                  <a
                    class="block border-2 border-solid rounded-full"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram logo"
                  >
                    <img class="" width="48" height="48" src={social.icon}>
                    </img>
                  </a>
                </li>
              ))}
            </ul>
            <span class="flex items-center gap-1 text-primary-content lg:absolute lg:right-0">
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </span>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
