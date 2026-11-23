"use client";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock3, HeartPulse } from "./Icons";
export default function Hero() {
  return <section className="hero">
    <div className="hero-grid container">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="eyebrow-dot"/> SWATHI SHREE HOSPITAL <span className="eyebrow-line"/></div>
        <h1>Care that sees<br/><em>the whole</em> you.</h1>
        <p className="hero-lead">Thoughtful healthcare, experienced hands and modern facilities — bringing trusted care closer to families in Thiruvannamalai.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Connect with our team <ArrowRight size={18}/></a><a className="text-link" href="#departments">Explore our care <span>↗</span></a></div>
        <div className="hero-trust"><div><ShieldCheck/><span><b>Patient-first</b><small>Care with compassion</small></span></div><div><Clock3/><span><b>Here when needed</b><small>Contact our hospital</small></span></div><div><HeartPulse/><span><b>Across life stages</b><small>Care for every family</small></span></div></div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="hero-image-frame"><Image src="/images/hospital-services-reference.jpg" alt="Swathi Shree Hospital services and care reference" fill priority sizes="(max-width: 800px) 90vw, 48vw" /></div>
        <div className="hero-stamp"><span>SS</span><small>YOUR HEALTH<br/>OUR PRIORITY</small></div>
        <div className="hero-note"><span className="note-dot"/> Compassion in every connection</div>
      </div>
    </div>
    <div className="hero-bottom container"><span>74-A MATHALANKULAM STREET · THIRUVANNAMALAI</span><a href="#about">SCROLL TO DISCOVER <span>↓</span></a></div>
  </section>;
}
