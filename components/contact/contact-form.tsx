"use client";

import { useState, useRef, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI / Automation",
  "Custom Software",
  "Other / Not Sure",
];

const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k – $100k",
  "$100k+",
  "Let's discuss",
];

/* Shared Apple-style input classes */
const inputBase = [
  "w-full px-4 py-3 rounded-[12px] text-[14px]",
  "text-white/85 placeholder-white/25",
  "transition-all duration-200 outline-none appearance-none",
  "bg-white/[0.03] border border-white/[0.07]",
  "focus:border-[#0a84ff]/60 focus:ring-2 focus:ring-[#0a84ff]/10 focus:bg-white/[0.05]",
].join(" ");

const labelBase = "block text-[12px] font-medium text-white/45 uppercase tracking-[0.08em] mb-2";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div
        className="rounded-[20px] p-12 text-center"
        style={{
          background: "rgba(48,209,88,0.04)",
          border: "1px solid rgba(48,209,88,0.15)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{
            background: "rgba(48,209,88,0.1)",
            border: "1px solid rgba(48,209,88,0.25)",
          }}
        >
          <CheckCircle2 className="w-8 h-8" style={{ color: "#30d158" }} aria-hidden="true" />
        </div>
        <h3 className="text-white font-semibold text-[20px] tracking-[-0.02em] mb-3">
          Message sent!
        </h3>
        <p className="text-white/50 text-[14px] leading-relaxed mb-8 max-w-sm mx-auto">
          Thanks for reaching out. We&apos;ll review your project and get back
          to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-ghost !py-2.5 !px-6 !text-[13px]"
        >
          Send another message
        </button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact form"
      noValidate
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelBase}>
            Name <span style={{ color: "#0a84ff" }} aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Abdul Malik"
            className={inputBase}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelBase}>
            Email <span style={{ color: "#0a84ff" }} aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={inputBase}
            aria-required="true"
          />
        </div>
      </div>

      {/* Project type + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-project-type" className={labelBase}>
            Project Type <span style={{ color: "#0a84ff" }} aria-hidden="true">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            defaultValue=""
            className={cn(inputBase, "cursor-pointer")}
            aria-required="true"
            style={{ colorScheme: "dark" }}
          >
            <option value="" disabled>Select a type…</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-budget" className={labelBase}>
            Budget Range
          </label>
          <select
            id="contact-budget"
            name="budget"
            defaultValue=""
            className={cn(inputBase, "cursor-pointer")}
            style={{ colorScheme: "dark" }}
          >
            <option value="">Select a range…</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Message <span style={{ color: "#0a84ff" }} aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          minLength={20}
          placeholder="Tell us about your project — what you're building, your goals, and any constraints we should know about…"
          className={cn(inputBase, "resize-none")}
          aria-required="true"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div
          className="flex items-center gap-3 p-4 rounded-[14px]"
          style={{
            background: "rgba(255,69,58,0.06)",
            border: "1px solid rgba(255,69,58,0.2)",
          }}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-4 h-4 shrink-0" style={{ color: "#ff453a" }} aria-hidden="true" />
          <p className="text-[13px]" style={{ color: "#ff453a" }}>{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-apple w-full !justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Send your project inquiry"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-[11px] text-white/25 text-center">
        We&apos;ll never share your information. No spam, ever.
      </p>
    </form>
  );
}
