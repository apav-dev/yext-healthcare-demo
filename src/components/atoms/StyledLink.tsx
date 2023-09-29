import { Link } from "@yext/sites-components";

export interface StyledLinkProps {
  /**
   * @displayName URL
   **/
  href: string;
  /**
   * @displayName Label
   **/
  label: string;
}

export const initialProps: StyledLinkProps = {
  href: "#",
  label: "Link",
};

const StyledLink = ({ label, href }: StyledLinkProps) => {
  return (
    <Link
      className="text-leaf text-base font-bold font-sans underline leading-normal hover:no-underline hover:text-sage"
      href={href}
    >
      {label}
    </Link>
  );
};

export default StyledLink;
