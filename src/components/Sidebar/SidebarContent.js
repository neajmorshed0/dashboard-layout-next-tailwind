import Link from "next/link";
import React from "react";

export default function SidebarContent() {
  return (
    <div>
      SidebarContent
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>{" "}
        <li>
          <Link href="/customers">Customers</Link>
        </li>
      </ul>
    </div>
  );
}
