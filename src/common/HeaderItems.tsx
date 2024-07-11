import Link from "next/link";
import React from "react";

export default function HeaderItems({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="nav-item">
      <Link className="nav-link" href={href}>
        {children}
      </Link>
    </li>
  );
}
