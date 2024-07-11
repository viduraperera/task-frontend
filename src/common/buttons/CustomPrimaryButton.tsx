import Link from "next/link";
import React from "react";

export default function CustomPrimaryButton({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} passHref>
      <button type="button" className={className}>
        {children}
      </button>
    </Link>
  );
}
