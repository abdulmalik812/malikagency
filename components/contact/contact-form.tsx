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

const inputClasses = cn(
  "w-full px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#141414]",
  "text-[#f5f5f5] placeholder-[#4a4a4a] text-sm",
  "transition-colors duration-200",
  "focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50"
);

const labelClasses = "block text-sm font-medium text-[#a1a1a1] mb-1.5";

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

  if (status === "success") {
    return (
      <div className="card-surface p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-[#10b981]" aria-hidden="true" />
        </div>
        <h3 className="text-[#f5f5f5] font-bold text-xl mb-3">Message sent!</h3>
        <p className="text-[#a1a1a1] leading-relaxed mb-6">
          Thanks for reaching out. We&apos;ll review your project and get back to you within
          one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

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
          <label htmlFor="contact-name" className={labelClasses}>
            Name <span className="text-[#10b981]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Abdul Malik"
            className={inputClasses}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email <span className="text-[#10b981]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
            aria-required="true"
          />
        </div>
      </div>

      {/* Project type + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-project-type" className={labelClasses}>
            Project Type <span className="text-[#10b981]" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            defaultValue=""
            className={cn(inputClasses, "cursor-pointer appearance-none")}
            aria-required="true"
          >
            <option value="" disabled>
              Select a type…
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-budget" className={labelClasses}>
            Budget Range
          </label>
          <select
            id="contact-budget"
            name="budget"
            defaultValue=""
            className={cn(inputClasses, "cursor-pointer appearance-none")}
          >
            <option value="">Select a range…</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message <span className="text-[#10b981]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          minLength={20}
          placeholder="Tell us about your project — what you're building, your goals, and any constraints we should know about…"
          className={cn(inputClasses, "resize-none")}
          aria-required="true"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div
          className="flex items-center gap-3 p-4 rounded-xl border border-red-500/30 bg-red-500/10"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" aria-hidden="true" />
          <p className="text-red-400 text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
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

      <p className="text-xs text-[#4a4a4a] text-center">
        We&apos;ll never share your information. No spam, ever.
      </p>
    </form>
  );
}
