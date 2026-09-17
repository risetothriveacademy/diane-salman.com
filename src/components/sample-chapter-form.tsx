"use client";

import { useState } from "react";

export function SampleChapterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
    };

    try {
      const response = await fetch("/api/sample-chapter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="mt-5 p-5 bg-teal-50 rounded-xl border border-teal-200 text-sm leading-relaxed text-slate-700">
        Thank you. Your request has been received. We are preparing the memoir
        excerpt and will email it to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="sc-name" className="text-sm font-semibold text-slate-900">
          Full Name
        </label>
        <input
          id="sc-name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="sc-email" className="text-sm font-semibold text-slate-900">
          Email Address
        </label>
        <input
          id="sc-email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="sc-phone" className="text-sm font-semibold text-slate-900">
          Phone Number
        </label>
        <input
          id="sc-phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Me the Sample Chapter"}
      </button>
    </form>
  );
}
