import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Brain,
  CheckCircle2,
  Cpu,
  Database,
  Gauge,
  Globe2,
  LineChart,
  Lock,
  Mail,
  Network,
  Play,
  Radar,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const platformFeatures: IconItem[] = [
  {
    icon: Brain,
    title: "Decision memory",
    copy: "Nexora learns team goals, exceptions, and preferred tradeoffs from every approved action.",
  },
  {
    icon: Workflow,
    title: "Workflow mesh",
    copy: "Connect CRM, docs, tickets, finance, and analytics into one governed execution layer.",
  },
  {
    icon: Radar,
    title: "Live signal radar",
    copy: "Spot market shifts, account risk, and operational bottlenecks before they become urgent.",
  },
];

const signalCards: IconItem[] = [
  {
    icon: LineChart,
    title: "Revenue movement",
    copy: "Forecast expansion, churn pressure, pipeline gaps, and next-best actions.",
  },
  {
    icon: Users,
    title: "Team load",
    copy: "Balance work across humans and agents with confidence, priority, and SLA context.",
  },
  {
    icon: Database,
    title: "Knowledge drift",
    copy: "Detect stale docs, missing context, and decisions that need a fresh source of truth.",
  },
  {
    icon: Gauge,
    title: "Execution health",
    copy: "Track throughput, delays, handoffs, and automation impact across every workflow.",
  },
];

const workflowSteps = [
  ["01", "Observe", "Nexora maps tools, teams, goals, and risk signals in real time."],
  ["02", "Reason", "Models compare outcomes, constraints, and company policy before acting."],
  ["03", "Coordinate", "Agents assign work, draft assets, and route approvals to the right owners."],
  ["04", "Improve", "Every approved result tunes the next recommendation and automation."],
];

const securityItems: IconItem[] = [
  {
    icon: Lock,
    title: "Permission-aware AI",
    copy: "Agents only see and act on the data each user or workflow is allowed to access.",
  },
  {
    icon: ShieldCheck,
    title: "Human approval gates",
    copy: "Sensitive actions can require review, policy checks, and audit-ready reasoning.",
  },
  {
    icon: ServerCog,
    title: "Model governance",
    copy: "Monitor prompts, outputs, drift, and agent performance from one control plane.",
  },
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Slack",
  "Linear",
  "Notion",
  "Snowflake",
  "Zendesk",
  "Google Drive",
];

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className="text-sm font-semibold uppercase text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#102022] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#526464] sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh overflow-hidden bg-[#061016] text-white">
      <main>
        <section className="relative isolate flex min-h-[88dvh] flex-col">
          <AnimatedGridPattern className="opacity-90" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(54,211,153,.22),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,.22),transparent_28%),linear-gradient(135deg,#061016_0%,#0a1b1d_45%,#101013_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f8fbf8] to-transparent" />

          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
            <a href="#" className="flex min-h-11 items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg border border-cyan-200/30 bg-white/10 shadow-[0_0_40px_rgba(34,211,238,.22)] backdrop-blur">
                <Sparkles className="size-5 text-cyan-200" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold">Nexora AI</span>
            </a>
            <div className="hidden items-center gap-6 text-sm text-white/72 md:flex">
              <a href="#platform" className="transition hover:text-white">
                Platform
              </a>
              <a href="#signals" className="transition hover:text-white">
                Signals
              </a>
              <a href="#security" className="transition hover:text-white">
                Security
              </a>
              <a href="#pricing" className="transition hover:text-white">
                Pricing
              </a>
            </div>
            <a
              href="#demo"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "hidden h-11 border-white/18 bg-white/8 px-4 text-white hover:bg-white/14 hover:text-white sm:inline-flex"
              )}
            >
              Request demo
            </a>
          </nav>

          <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:pb-14">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-emerald-200/22 bg-emerald-100/10 px-3 text-sm font-medium text-emerald-100 shadow-[0_0_34px_rgba(16,185,129,.12)] backdrop-blur">
                <Zap className="size-4 text-amber-200" aria-hidden="true" />
                Autonomous AI operations for ambitious teams
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl xl:text-7xl">
                Nexora AI
                <span className="block bg-gradient-to-r from-cyan-100 via-emerald-100 to-amber-100 bg-clip-text text-transparent">
                  intelligence that moves with you.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                Turn scattered tools, data, and decisions into one adaptive AI
                command layer that plans, learns, and executes across your
                company.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 bg-cyan-200 px-5 text-[#061016] hover:bg-cyan-100"
                  )}
                >
                  Launch the workspace
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#watch"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 border-white/18 bg-white/8 px-5 text-white hover:bg-white/14 hover:text-white"
                  )}
                >
                  <Play className="size-4" aria-hidden="true" />
                  Watch overview
                </a>
              </div>

              <div className="mt-8 hidden max-w-2xl gap-3 text-sm text-white/72 sm:grid sm:grid-cols-3">
                {[
                  ["98%", "workflow prediction"],
                  ["12k+", "tasks orchestrated"],
                  ["24/7", "model monitoring"],
                ].map(([value, label]) => (
                  <div key={label} className="border-l border-white/14 pl-4">
                    <div className="text-2xl font-semibold text-white">
                      {value}
                    </div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[32rem] lg:min-h-[38rem]">
              <div className="nexora-orbit absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/18 sm:size-[30rem]" />
              <div className="nexora-orbit-reverse absolute left-1/2 top-1/2 size-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/18 sm:size-[22rem]" />

              <div className="relative mx-auto w-full max-w-[34rem] rounded-lg border border-white/16 bg-[#071318]/82 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-300" />
                    <span className="size-3 rounded-full bg-amber-200" />
                    <span className="size-3 rounded-full bg-emerald-300" />
                  </div>
                  <span className="text-xs font-medium text-white/50">
                    nexora.ai/live
                  </span>
                </div>

                <div className="grid gap-3 pt-3 sm:grid-cols-[.9fr_1.1fr]">
                  <aside className="space-y-2 rounded-md border border-white/10 bg-white/[.04] p-3">
                    {[
                      [Brain, "Strategy model", "Learning"],
                      [Workflow, "Workflow mesh", "Active"],
                      [ShieldCheck, "Risk guard", "Protected"],
                      [Globe2, "Market pulse", "Live"],
                    ].map(([Icon, title, state]) => (
                      <div
                        key={title as string}
                        className="flex min-h-14 items-center gap-3 rounded-md bg-white/[.04] px-3"
                      >
                        <Icon
                          className="size-4 text-cyan-200"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-white">
                            {title as string}
                          </p>
                          <p className="text-xs text-white/48">
                            {state as string}
                          </p>
                        </div>
                      </div>
                    ))}
                  </aside>

                  <div className="rounded-md border border-white/10 bg-white/[.05] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">
                          Autonomous brief
                        </p>
                        <p className="text-xs text-white/48">
                          Customer success expansion
                        </p>
                      </div>
                      <span className="rounded-md bg-emerald-300/14 px-2 py-1 text-xs font-medium text-emerald-100">
                        Ready
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        ["Analyze renewal risk", "w-[86%]", "text-cyan-200"],
                        ["Draft outreach sequence", "w-[72%]", "text-amber-100"],
                        ["Route approvals", "w-[58%]", "text-emerald-100"],
                      ].map(([label, width, color]) => (
                        <div key={label}>
                          <div className="mb-2 flex items-center justify-between text-xs">
                            <span className="text-white/66">{label}</span>
                            <CheckCircle2
                              className={`size-4 ${color}`}
                              aria-hidden="true"
                            />
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className={`${width} h-full rounded-full bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-100`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-md border border-cyan-200/16 bg-cyan-200/[.07] p-3">
                      <p className="text-xs uppercase text-cyan-100/64">
                        Nexora recommendation
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/82">
                        Prioritize 18 accounts with product-usage dips and
                        assign AI-generated recovery plans by region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-10 hidden rounded-lg border border-amber-100/20 bg-amber-100/10 px-4 py-3 text-sm text-amber-50 shadow-xl shadow-black/20 backdrop-blur md:block">
                Model confidence: 94%
              </div>
              <div className="absolute -left-3 bottom-16 hidden rounded-lg border border-cyan-100/20 bg-cyan-100/10 px-4 py-3 text-sm text-cyan-50 shadow-xl shadow-black/20 backdrop-blur md:block">
                42 actions queued
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbf8] px-5 py-8 text-[#102022] sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 border-y border-[#d9e4df] py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm font-medium uppercase text-[#6b7f7b]">
              Built for teams replacing scattered AI experiments with one
              operating system
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-[#102022] sm:flex sm:flex-wrap sm:justify-end">
              {integrations.slice(0, 6).map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="bg-[#f8fbf8] px-5 py-20 text-[#102022] sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Platform"
              title="One adaptive command layer for people, data, and AI agents."
              copy="Nexora is designed for companies that need AI to understand context, follow policy, and keep work moving across every system."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {platformFeatures.map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-[#d9e4df] bg-white p-6 shadow-sm shadow-[#d9e4df]/40"
                >
                  <div className="grid size-11 place-items-center rounded-lg bg-[#e6fbf8] text-cyan-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526464]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#102022] px-5 py-20 text-white sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-amber-100">
                Agent workflow
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                From signal to shipped work without losing human control.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
                Nexora turns intelligence into accountable execution by
                separating observation, reasoning, coordination, and
                improvement.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 bg-amber-100 px-5 text-[#102022] hover:bg-amber-50"
                  )}
                >
                  See the workflow
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {workflowSteps.map(([step, title, copy]) => (
                <article
                  key={step}
                  className="rounded-lg border border-white/12 bg-white/[.04] p-5"
                >
                  <p className="text-sm font-semibold text-cyan-200">{step}</p>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/64">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="signals"
          className="bg-[#f8fbf8] px-5 py-20 text-[#102022] sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Signals"
              title="Know what needs attention before your dashboards catch up."
              copy="Nexora combines operational telemetry, customer context, and team activity into signals your AI agents can act on."
              align="center"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {signalCards.map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-[#d9e4df] bg-white p-5"
                >
                  <Icon className="size-5 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526464]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ef] px-5 py-20 text-[#102022] sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="rounded-lg border border-[#c8dbd6] bg-white p-4 shadow-sm">
              <div className="rounded-md bg-[#102022] p-4 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-lg bg-cyan-200/12 text-cyan-100">
                      <Bot className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Nexora agents</p>
                      <p className="text-xs text-white/48">
                        16 active workflows
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-300/14 px-2 py-1 text-xs text-emerald-100">
                    Healthy
                  </span>
                </div>
                <div className="grid gap-3 pt-4 sm:grid-cols-3">
                  {[
                    [Cpu, "Model cost", "$12.4k"],
                    [Network, "Handoffs", "1,842"],
                    [Timer, "Hours saved", "3,980"],
                  ].map(([Icon, label, value]) => (
                    <div key={label as string} className="rounded-md bg-white/[.05] p-4">
                      <Icon className="size-5 text-amber-100" aria-hidden="true" />
                      <p className="mt-5 text-2xl font-semibold">
                        {value as string}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        {label as string}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-md border border-white/10 bg-white/[.04] p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-white/64">Automation impact</span>
                    <span className="font-medium text-cyan-100">72%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-100" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Operations"
                title="A calmer control room for high-velocity teams."
                copy="Leaders can see agent cost, impact, confidence, approval queues, and operational outcomes without hopping across disconnected dashboards."
              />
              <div className="mt-6 grid gap-3">
                {[
                  "Real-time agent observability",
                  "Approval queues by policy and risk",
                  "Outcome tracking for every AI-assisted action",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <BadgeCheck className="size-5 text-emerald-700" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="security"
          className="bg-[#f8fbf8] px-5 py-20 text-[#102022] sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Security"
              title="Enterprise guardrails built into the way work moves."
              copy="Nexora keeps AI useful by making permissions, policies, and auditability part of every recommendation and action."
              align="center"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {securityItems.map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-[#d9e4df] bg-white p-6"
                >
                  <div className="grid size-11 place-items-center rounded-lg bg-[#fff4d7] text-amber-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526464]">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="bg-[#102022] px-5 py-20 text-white sm:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Start with one team, then expand into a company-wide AI layer.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
                Nexora pricing scales by active workflows, connected systems,
                and governance needs. Every plan includes onboarding and a
                measurable impact review.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Team", "$49", "per user/month", "For departments proving AI operations."],
                ["Enterprise", "Custom", "annual platform", "For governed AI across the company."],
              ].map(([name, price, note, copy]) => (
                <article
                  key={name}
                  className="rounded-lg border border-white/12 bg-white/[.04] p-6"
                >
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-4xl font-semibold">{price}</span>
                    <span className="pb-1 text-sm text-white/54">{note}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/64">{copy}</p>
                  <div className="mt-6 space-y-3 text-sm text-white/78">
                    {[
                      "Workflow automation",
                      "Agent monitoring",
                      "Approval policies",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="size-4 text-emerald-200" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="relative isolate bg-[#f8fbf8] px-5 py-20 text-[#102022] sm:px-8"
        >
          <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#102022] to-transparent opacity-10" />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto grid size-12 place-items-center rounded-lg bg-[#102022] text-cyan-100">
              <Sparkles className="size-6" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
              Bring Nexora AI into your next operating rhythm.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526464] sm:text-lg">
              Connect a team, choose one high-value workflow, and see how an AI
              command layer changes planning, execution, and follow-through.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@nexora.ai"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-[#102022] px-5 text-white hover:bg-[#1b3538]"
                )}
              >
                <Mail className="size-4" aria-hidden="true" />
                Book a demo
              </a>
              <a
                href="#platform"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-[#c8dbd6] bg-white px-5 text-[#102022] hover:bg-[#eef6f3]"
                )}
              >
                Explore platform
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#061016] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-cyan-200/30 bg-white/10">
              <Sparkles className="size-4 text-cyan-200" aria-hidden="true" />
            </span>
            <span className="font-semibold">Nexora AI</span>
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/56">
            <a href="#platform" className="hover:text-white">
              Platform
            </a>
            <a href="#signals" className="hover:text-white">
              Signals
            </a>
            <a href="#security" className="hover:text-white">
              Security
            </a>
            <a href="#demo" className="hover:text-white">
              Demo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
