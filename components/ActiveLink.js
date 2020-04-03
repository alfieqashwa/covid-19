/*
    source => https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59
*/
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}
