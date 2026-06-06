"use client";

import { useState } from "react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI.",
    price: 12,
    yearlyPrice: 99,
    popular: false,
    features: [
      { text: "Up to 10 boards per workspace", icon: Briefcase },
      { text: "Up to 10GB storage", icon: Database },
      { text: "Limited analytics", icon: Server },
    ],
    includes: [
      "Free includes:",
      "Unlimited cards",
      "Custom background and stickers",
      "2-factor authentication",
      "Up to 2 individual users",
      "Up to 2 workspaces",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced AI features.",
    price: 48,
    yearlyPrice: 399,
    popular: true,
    features: [
      { text: "Unlimited boards", icon: Briefcase },
      { text: "Storage up to 250MB/file", icon: Database },
      { text: "100 workspace command runs", icon: Server },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Serverless functions",
      "Up to 10 individual users",
      "Up to 10 workspaces",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams.",
    price: 96,
    yearlyPrice: 899,
    popular: false,
    features: [
      { text: "Unlimited boards", icon: Briefcase },
      { text: "Unlimited storage", icon: Database },
      { text: "Unlimited workspaces", icon: Server },
    ],
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guests",
      "Attachment permissions",
      "Custom roles",
      "Custom boards",
    ],
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="bg-[#061016] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <article className="max-w-2xl space-y-4 text-left">
            <p className="text-sm font-semibold uppercase text-cyan-200">
              Pricing
            </p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              We&apos;ve got a plan that&apos;s perfect for you.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/64">
              Trusted by high-velocity teams, Nexora helps AI operations scale
              from first workflow to company-wide command layer.
            </p>
          </article>

          <div className="flex justify-start lg:justify-end">
            <div className="relative z-10 flex w-full max-w-md rounded-lg border border-white/12 bg-white/[.04] p-1 text-sm font-medium sm:w-auto">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={cn(
                  "relative h-12 flex-1 rounded-md px-4 transition sm:flex-none sm:px-6",
                  !isYearly
                    ? "bg-cyan-200 text-[#061016] shadow-sm shadow-cyan-950/40"
                    : "text-white/62 hover:bg-white/8 hover:text-white"
                )}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={cn(
                  "relative h-12 flex-1 rounded-md px-4 transition sm:flex-none sm:px-6",
                  isYearly
                    ? "bg-cyan-200 text-[#061016] shadow-sm shadow-cyan-950/40"
                    : "text-white/62 hover:bg-white/8 hover:text-white"
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Yearly Billing
                  <span className="rounded-md bg-[#061016]/90 px-2 py-0.5 text-xs font-medium text-cyan-100">
                    Save 20%
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-4 md:mx-auto md:max-w-6xl md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative rounded-lg border p-5 shadow-sm shadow-black/20",
                plan.popular
                  ? "border-cyan-200/40 bg-cyan-200/[.08]"
                  : "border-white/12 bg-white/[.04]"
              )}
            >
              <header className="text-left">
                <div className="flex min-h-9 items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {plan.name} Plan
                  </h3>
                  {plan.popular && (
                    <span className="rounded-md border border-cyan-100/16 bg-cyan-200/14 px-3 py-1 text-sm font-medium text-cyan-100">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-3 min-h-16 text-sm leading-6 text-white/60">
                  {plan.description}
                </p>
                <div className="mt-5 flex items-baseline">
                  <span className="text-4xl font-semibold text-white">
                    {"$"}{isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="ml-1 text-white/56">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </header>

              <div className="mt-6 space-y-3">
                <a
                  href="#demo"
                  className={cn(
                    buttonVariants({ variant: plan.popular ? "default" : "outline", size: "lg" }),
                    "h-12 w-full text-base",
                    plan.popular
                      ? "bg-cyan-200 text-[#061016] hover:bg-cyan-100"
                      : "border-white/14 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  Get started
                </a>
                <a
                  href="mailto:hello@nexora.ai"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-full border-white/14 bg-[#071318] text-base text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  Click to Sale
                </a>
              </div>

              <div className="mt-6 grid gap-2 border-t border-white/10 pt-5">
                {plan.features.map(({ text, icon: Icon }) => (
                  <div
                    key={text}
                    className="flex min-h-11 items-center gap-3 rounded-md bg-white/[.04] px-3 text-sm text-white/72"
                  >
                    <Icon className="size-4 text-cyan-200" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                <h4 className="text-base font-semibold uppercase text-white">
                  Features
                </h4>
                <p className="text-sm font-medium text-white/82">
                  {plan.includes[0]}
                </p>
                <ul className="space-y-2">
                  {plan.includes.slice(1).map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-full border border-cyan-200/40 bg-cyan-200/10">
                        <CheckCheck className="size-4 text-cyan-200" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-white/64">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
