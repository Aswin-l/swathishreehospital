"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "./Icons";

const links = [["About", "#about"], ["Departments", "#departments"], ["Care team", "#care"], ["Facilities", "#facilities"], ["Contact", "#contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-wrap">
      <Link href="#" className="brand" aria-label="Swathi Shree Hospital home">
        <Image src="/images/swathi-shree-emblem.jpg" alt="Swathi Shree Hospital emblem" width={54} height={54} className="brand-mark" />
        <span><strong>SWATHI SHREE</strong><small>HOSPITAL <i>•</i> Your Health, Our Priority</small></span>
      </Link>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav-links is-open" : "nav-links"}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact"><Phone size={16}/> Talk to our team</a>
      </nav>
    </div>
  </header>;
}
