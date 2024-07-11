import Link from "next/link";
import React from "react";

export default function FooterItems({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="nav-item">
      <Link href={href} passHref className="nav-link px-2 text-body-secondary">
        {children}
      </Link>
    </li>
  );
}
