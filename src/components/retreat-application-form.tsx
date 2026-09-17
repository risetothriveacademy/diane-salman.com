"use client";

import { useState } from "react";

const interestOptions = [
  "Attending the retreat",
  "Speaking opportunity",
  "Sponsorship",
  "Certification pathway",
  "Directory participation",
  "Referral partnership",
];

export function RetreatApplicationForm() {
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
      profession: String(data.get("profession") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/retreat-application", {
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
      <div style={styles.thankYou}>
        <h3 style={styles.thankYouTitle}>Thank you for your application!</h3>
        <p style={styles.thankYouText}>
          Your details have been received. Our team will review your application
          and follow up with retreat details and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form} noValidate>
      <div style={styles.field}>
        <label htmlFor="name" style={styles.label}>
          Full Name *
        </label>
        <input id="name" name="name" type="text" required style={styles.input} />
      </div>

      <div style={styles.row}>
        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>
            Email *
          </label>
          <input id="email" name="email" type="email" required style={styles.input} />
        </div>
        <div style={styles.field}>
          <label htmlFor="phone" style={styles.label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" style={styles.input} />
        </div>
      </div>

      <div style={styles.field}>
        <label htmlFor="profession" style={styles.label}>
          Profession / Role
        </label>
        <input id="profession" name="profession" type="text" style={styles.input} />
      </div>

      <div style={styles.field}>
        <label htmlFor="interest" style={styles.label}>
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" defaultValue="" style={styles.input}>
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.field}>
        <label htmlFor="message" style={styles.label}>
          Anything you&apos;d like us to know?
        </label>
        <textarea id="message" name="message" rows={4} style={styles.textarea} />
      </div>

      {status === "error" && <p style={styles.error}>{errorMessage}</p>}

      <button type="submit" disabled={status === "submitting"} style={styles.submit}>
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    maxWidth: "640px",
    margin: "32px auto 0",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#775237",
  },
  input: {
    padding: "12px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #D9CDB8",
    backgroundColor: "white",
    color: "#3B3B3B",
    fontFamily: "Arial, sans-serif",
  },
  textarea: {
    padding: "12px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #D9CDB8",
    backgroundColor: "white",
    color: "#3B3B3B",
    fontFamily: "Arial, sans-serif",
    resize: "vertical",
  },
  submit: {
    marginTop: "8px",
    backgroundColor: "#DB910F",
    color: "white",
    padding: "16px 30px",
    borderRadius: "8px",
    border: "none",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "#B00020",
    fontSize: "15px",
    margin: 0,
  },
  thankYou: {
    maxWidth: "640px",
    margin: "32px auto 0",
    backgroundColor: "#F1F7F4",
    border: "1px solid #0097B2",
    borderRadius: "12px",
    padding: "40px 32px",
    textAlign: "center",
  },
  thankYouTitle: {
    color: "#0097B2",
    fontSize: "26px",
    marginBottom: "12px",
  },
  thankYouText: {
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#3B3B3B",
  },
};
