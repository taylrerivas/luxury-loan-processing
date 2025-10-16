"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Clock, FileText, Shield, Star, Zap, Phone, Mail } from "lucide-react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1B1B1B]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={120} height={40} alt="Luxury Loan Processing" className="h-9 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-70">How It Works</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#why" className="hover:opacity-70">Why Us</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <a href="#contact" className="ml-4">
            <button className="rounded-2xl px-5 py-2 bg-black text-white hover:bg-black/90">Get Started</button>
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full ring-1 ring-neutral-200 bg-white mb-4">
              Luxury Experience • Broker & LO Focused
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              The <span className="underline decoration-black/20">Luxury Experience</span> behind your pipeline.
            </h1>
            <p className="mt-5 text-neutral-600 md:text-lg">
              White-glove contract processing for elite Loan Officers and brokerages. We handle the docs, deadlines, and disclosures—so you can stay in the money-making seat.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact"><button className="rounded-2xl px-6 py-2 bg-black text-white hover:bg-black/90">Book an Intake Call</button></a>
              <a href="#how" className="inline-flex items-center gap-2 text-sm hover:opacity-80">
                See how it works <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Shield className="h-4
