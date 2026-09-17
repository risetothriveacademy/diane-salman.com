import { RetreatApplicationForm } from "@/components/retreat-application-form";

export default function ProfessionalRetreatPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.kicker}>Transforming Pain Into Power™</p>
        <h1 style={styles.title}>
          Professional Trauma Recovery & Resilience Retreat
        </h1>
        <p style={styles.subtitle}>
          Faith-Informed • Trauma-Informed • Whole-Person Recovery
        </p>
        <p style={styles.details}>
          North America | August 2026 | Date & Venue To Be Announced
        </p>
        <a href="#apply" style={styles.button}>
          Apply / Request Details
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>For Professionals Who Help Others Heal</h2>
        <p style={styles.text}>
          This premium 2½-day professional retreat is designed for coaches,
          counselors, therapists, educators, chaplains, ministry leaders, social
          workers, recovery professionals, and community support leaders who want
          to explore faith-informed approaches that complement traditional
          clinical and trauma-informed methods.
        </p>
        <p style={styles.text}>
          The goal is not to replace evidence-based care, but to strengthen
          long-term recovery by addressing the whole person: emotional wellbeing,
          resilience, purpose, identity, community, and spiritual support.
        </p>
      </section>

      <section style={styles.gridSection}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Who Should Attend?</h3>
          <ul style={styles.list}>
            <li>Coaches</li>
            <li>Counselors & Therapists</li>
            <li>Social Workers & Case Workers</li>
            <li>Educators & School Counselors</li>
            <li>Chaplains & Ministry Leaders</li>
            <li>Recovery Leaders</li>
            <li>Pastoral Care Teams</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Retreat Focus Areas</h3>
          <ul style={styles.list}>
            <li>Trauma-Informed Recovery</li>
            <li>Faith & Mental Health Recovery</li>
            <li>The Inner Voice</li>
            <li>Burnout & Compassion Fatigue</li>
            <li>Educator and Front-Line Wellbeing</li>
            <li>Whole-Person Recovery Models</li>
            <li>Professional Growth & Visibility</li>
          </ul>
        </div>
      </section>

      <section style={styles.sectionDark}>
        <h2 style={styles.headingLight}>Why Attend?</h2>
        <p style={styles.textLight}>
          Attendees will explore how faith-informed recovery can add depth to
          existing secular and clinical approaches by moving beyond symptom
          management into identity, resilience, purpose, and long-term
          restoration.
        </p>
        <ul style={styles.benefits}>
          <li>Professional networking</li>
          <li>Certification pathway discussions</li>
          <li>Referral partnership opportunities</li>
          <li>Directory participation opportunities</li>
          <li>Visibility-building within your niche</li>
          <li>Future speaking and collaboration opportunities</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Retreat Investment</h2>
        <p style={styles.price}>$2,900</p>
        <p style={styles.text}>
          Includes two-night accommodation, retreat sessions, selected meals,
          professional networking, retreat materials, and access to selected
          professional development opportunities.
        </p>
      </section>

      <section id="apply" style={styles.cta}>
        <h2 style={styles.heading}>Apply / Request Details</h2>
        <p style={styles.text}>
          Applications are now open for professionals interested in attending,
          speaking, sponsoring, exploring certification pathways, directory
          participation, or referral partnership opportunities.
        </p>
        <RetreatApplicationForm />
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F8F5EF",
    color: "#3B3B3B",
  },
  hero: {
    background: "linear-gradient(135deg, #3B3B3B, #6C604B)",
    color: "white",
    textAlign: "center",
    padding: "90px 24px",
  },
  kicker: {
    color: "#DB910F",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "48px",
    maxWidth: "900px",
    margin: "20px auto",
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: "22px",
    color: "#ffffff",
  },
  details: {
    fontSize: "18px",
    color: "#E8DCC8",
    marginBottom: "32px",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#DB910F",
    color: "white",
    padding: "16px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 700,
  },
  section: {
    maxWidth: "950px",
    margin: "0 auto",
    padding: "70px 24px",
  },
  heading: {
    fontSize: "34px",
    color: "#775237",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: 1.7,
    marginBottom: "18px",
  },
  gridSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "30px 24px 70px",
  },
  card: {
    backgroundColor: "white",
    borderTop: "6px solid #0097B2",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  cardTitle: {
    color: "#775237",
    fontSize: "24px",
    marginBottom: "16px",
  },
  list: {
    fontSize: "17px",
    lineHeight: 1.9,
  },
  sectionDark: {
    backgroundColor: "#3B3B3B",
    color: "white",
    padding: "70px 24px",
    textAlign: "center",
  },
  headingLight: {
    fontSize: "34px",
    color: "#DB910F",
  },
  textLight: {
    maxWidth: "900px",
    margin: "0 auto 28px",
    fontSize: "18px",
    lineHeight: 1.7,
  },
  benefits: {
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "left",
    fontSize: "18px",
    lineHeight: 2,
  },
  price: {
    fontSize: "46px",
    color: "#0097B2",
    fontWeight: 800,
    margin: "10px 0",
  },
  cta: {
    backgroundColor: "white",
    textAlign: "center",
    padding: "80px 24px",
  },
};
