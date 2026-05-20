// C:\xampp\htdocs\portfolio\app\pages\Resume\page.jsx

"use client";

import { useState, useEffect, useRef } from "react";
import {
  profile,
  contact,
  education,
  skills,
  languages,
  references,
  experiences,
} from "../../components/ResumeData";

function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return [ref, visible];
}

/* ── SKILL BAR ── */
function SkillBar({ label, level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setTimeout(() => setWidth(level), delay); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: "0.05em" }}>
          {label}
        </span>
        <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.35)" }}>
          {level}%
        </span>
      </div>
      <div style={{ height: 3, width: "100%", borderRadius: 2, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div
          data-skill-fill
          data-target-width={level}
          style={{
            height: "100%", borderRadius: 2,
            background: "#1692a1",
            width: `${width}%`,
            transition: "width 900ms cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

/* ── CONTACT ICONS ── */
function ContactIcon({ type }) {
  const s = { width: 11, height: 11, strokeWidth: 2, stroke: "#1692a1", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", flexShrink: 0 };
  if (type === "phone") return <svg viewBox="0 0 24 24" style={s}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>;
  if (type === "email") return <svg viewBox="0 0 24 24" style={s}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
  if (type === "address") return <svg viewBox="0 0 24 24" style={s}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
  return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>;
}

function ContactRow({ type, label, value, href, breakAll }) {
  const row = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
      <div style={{ marginTop: 2 }}><ContactIcon type={type} /></div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 1 }}>
          {label}
        </div>
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.75)", lineHeight: 1.4, wordBreak: breakAll ? "break-all" : "normal" }}>
          {value}
        </div>
      </div>
    </div>
  );
  return href
    ? <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>{row}</a>
    : row;
}

/* ── SIDEBAR SECTION HEADING ── */
function SidebarHeading({ children }) {
  return (
    <div style={{ marginTop: 22, marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <div style={{ width: 14, height: 2, background: "#1692a1", borderRadius: 1 }} />
        <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1692a1" }}>
          {children}
        </span>
      </div>
      <div style={{ height: 1, background: "rgba(22,146,161,0.2)", marginTop: 6 }} />
    </div>
  );
}

/* ── REFERENCE CARD ── */
function ReferenceCard({ name, role, phone, email }) {
  return (
    <div style={{ marginBottom: 10, paddingLeft: 8, borderLeft: "2px solid rgba(22,146,161,0.5)" }}>
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", marginBottom: 1 }}>{name}</div>
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9.5, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>{role}</div>
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
        <div>{phone}</div>
        <div style={{ wordBreak: "break-all" }}>{email}</div>
      </div>
    </div>
  );
}

/* ── SECTION HEADING (main) ── */
function SectionHeading({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, marginTop: 28 }}>
      <div style={{ width: 4, height: 18, background: "#1692a1", borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 12, fontWeight: 700, color: "#0a1628", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
    </div>
  );
}

/* ── EXPERIENCE ITEM ── */
function ExperienceItem({ date, company, role, description, bullets, delay = 0 }) {
  const [ref, visible] = useReveal(delay);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-10px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        display: "grid",
        gridTemplateColumns: "110px 1fr",
        gap: "0 20px",
        marginBottom: 20,
        paddingBottom: 20,
        borderBottom: "1px solid #f0f4f8",
      }}
    >
      <div style={{ paddingTop: 2 }}>
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9.5, fontWeight: 700, color: "#1692a1", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.4, marginBottom: 4 }}>
          {date}
        </div>
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10, color: "#64748b", lineHeight: 1.4 }}>
          {company}
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, fontWeight: 700, color: "#0a1628", marginBottom: 6, lineHeight: 1.3 }}>
          {role}
        </div>
        {description && (
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11.5, color: "#475569", lineHeight: 1.75, margin: 0 }}>
            {description}
          </p>
        )}
        {bullets && (
          <ul style={{ margin: "6px 0 0", padding: 0, listStyle: "none" }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 7, fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11.5, color: "#475569", lineHeight: 1.75, marginBottom: 3 }}>
                <span style={{ marginTop: 8, width: 3, height: 3, borderRadius: "50%", background: "#1692a1", flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  const handleDownload = async () => {
    if (!resumeRef.current || loading) return;
    setLoading(true);

    try {
      const [htmlToImageMod, jspdfMod] = await Promise.all([
        import("html-to-image"),
        import("jspdf"),
      ]);
      const { toPng } = htmlToImageMod;
      const jsPDF = jspdfMod.jsPDF || jspdfMod.default;

      const CAPTURE_WIDTH = 960; // matches your maxWidth
      const original = resumeRef.current;

      // 1. Clone offscreen at fixed width so layout never shifts
      const clone = original.cloneNode(true);
      clone.style.transition = "none";
      clone.style.transform = "none";
      clone.style.opacity = "1";
      clone.style.borderRadius = "0";
      clone.style.boxShadow = "none";
      clone.style.width = `${CAPTURE_WIDTH}px`;
      clone.style.maxWidth = `${CAPTURE_WIDTH}px`;

      // Strip animations / force visible state on every descendant
      clone.querySelectorAll("*").forEach((el) => {
        el.style.transition = "none";
        el.style.animation = "none";
        if (getComputedStyle(el).opacity === "0") el.style.opacity = "1";
        if (el.style.transform && el.style.transform !== "none") {
          el.style.transform = "none";
        }
      });

      // Force skill-bar fills to their final width (read from live DOM)
      const originalFills = original.querySelectorAll("[data-skill-fill]");
      const cloneFills = clone.querySelectorAll("[data-skill-fill]");
      cloneFills.forEach((fill, i) => {
        const target = fill.getAttribute("data-target-width");
        if (target) {
          fill.style.width = `${target}%`;
        } else if (originalFills[i]) {
          fill.style.width = getComputedStyle(originalFills[i]).width;
        }
      });

      // Offscreen wrapper
      const wrapper = document.createElement("div");
      wrapper.style.position = "fixed";
      wrapper.style.top = "0";
      wrapper.style.left = "-10000px";
      wrapper.style.width = `${CAPTURE_WIDTH}px`;
      wrapper.style.background = "#ffffff";
      wrapper.style.zIndex = "-1";
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Wait for fonts + layout
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      await new Promise((r) => setTimeout(r, 150));

      // 2. Capture with html-to-image
      const dataUrl = await toPng(clone, {
        cacheBust: true,
        pixelRatio: 2,
        width: CAPTURE_WIDTH,
        height: clone.scrollHeight,
        backgroundColor: "#ffffff",
        style: {
          transform: "none",
          margin: "0",
        },
      });

      document.body.removeChild(wrapper);

      // 3. Load the captured PNG to get real dimensions
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // 4. Build PDF with proper page slicing
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (img.height * imgWidth) / img.width;

      if (imgHeight <= pdfHeight + 1) {
        // Single page
        pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
      } else {
        // Multi-page: slice the source image, no overlap, no cut-through
        const pxPerMm = img.width / pdfWidth;
        const pageHeightPx = pdfHeight * pxPerMm;
        let rendered = 0;
        let page = 0;

        while (rendered < img.height) {
          const sliceH = Math.min(pageHeightPx, img.height - rendered);
          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = img.width;
          pageCanvas.height = sliceH;
          const ctx = pageCanvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          ctx.drawImage(img, 0, rendered, img.width, sliceH, 0, 0, img.width, sliceH);
          const pageData = pageCanvas.toDataURL("image/png");
          if (page > 0) pdf.addPage();
          pdf.addImage(pageData, "PNG", 0, 0, imgWidth, sliceH / pxPerMm);
          rendered += sliceH;
          page++;
        }
      }

      const filename = `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;
      pdf.save(filename);
    } catch (err) {
      console.error("PDF export failed:", err);
      alert("PDF export failed. Check the browser console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; font-family: Arial, Helvetica, sans-serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #1692a1; border-radius: 3px; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <main style={{
        minHeight: "100vh",
        background: "#dde3ea",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "132px 16px",
      }}>
        <article ref={resumeRef} style={{
          width: "100%",
          maxWidth: 960,
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)",
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          gridTemplateRows: "1fr",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>

          {/* ══ SIDEBAR ══ */}
          <aside style={{
            background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)",
            padding: "36px 20px 36px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #1692a1, #20b2c5)" }} />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 24 }}>
              <div style={{
                width: 190, height: 190, borderRadius: "50%",
                background: "linear-gradient(135deg, #112244, #1a3055)",
                border: "2px solid #1692a1",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 0 4px rgba(22,146,161,0.12), 0 4px 16px rgba(0,0,0,0.3)",
                overflow: "hidden",
                marginBottom: 14,
              }}>
                {profile.avatar ? (
                  <img 
                    src={profile.avatar} 
                    alt={profile.name} 
                    crossOrigin="anonymous" 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      objectPosition: "top"
                    }} 
                  />
                ) : (
                  <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: "#1692a1" }}>
                    {profile.initials}
                  </span>
                )}
              </div>
              <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", textAlign: "center", lineHeight: 1.25, marginBottom: 5 }}>
                {profile.name}
              </div>
              <div style={{
                fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#1692a1", textAlign: "center",
                background: "rgba(22,146,161,0.1)",
                padding: "3px 10px", borderRadius: 2,
                border: "1px solid rgba(22,146,161,0.25)",
              }}>
                {profile.title}
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(22,146,161,0.15)", marginBottom: 4 }} />

            <SidebarHeading>Contact</SidebarHeading>
            {contact.map((item) => <ContactRow key={item.type} {...item} />)}

            <SidebarHeading>Education</SidebarHeading>
            {education.map((edu) => (
              <div key={edu.degree} style={{ marginBottom: 6 }}>
                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9, color: "#1692a1", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>{edu.period}</div>
                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: 2 }}>{edu.degree}</div>
                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{edu.school}</div>
              </div>
            ))}

            <SidebarHeading>Expertise</SidebarHeading>
            {skills.map((s, i) => (
              <SkillBar key={s.label} label={s.label} level={s.level} delay={300 + i * 70} />
            ))}

            <SidebarHeading>Language</SidebarHeading>
            {languages.map((lang, i) => (
              <SkillBar key={lang.label} label={lang.label} level={lang.level} delay={1000 + i * 70} />
            ))}

            <SidebarHeading>References</SidebarHeading>
            {references.map((ref) => (
              <ReferenceCard key={ref.name} {...ref} />
            ))}

            <div style={{ flex: 1 }} />
          </aside>

          {/* ══ MAIN CONTENT ══ */}
          <section style={{ background: "#ffffff", display: "flex", flexDirection: "column" }}>

            <div style={{
              background: "linear-gradient(135deg, #0a1628 0%, #112244 60%, #0d1f3c 100%)",
              padding: "32px 36px 28px",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #1692a1, #20b2c5)" }} />
              <div style={{ position: "absolute", right: -40, top: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(22,146,161,0.07)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", right: 60, bottom: -60, width: 140, height: 140, borderRadius: "50%", background: "rgba(22,146,161,0.05)", pointerEvents: "none" }} />

              <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>
                Curriculum Vitae
              </div>
              <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 32, fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: 4 }}>
                {profile.name}
              </h1>
              <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 11, fontWeight: 600, color: "#1692a1", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>
                {profile.title}
              </div>
              <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 12, lineHeight: 1.75, color: "rgba(255,255,255,0.68)", maxWidth: 480 }}>
                {profile.bio}
              </p>
            </div>

            <div style={{ padding: "0 36px 36px", flex: 1 }}>
              <SectionHeading>Work Experience</SectionHeading>
              {experiences.map((exp, i) => (
                <ExperienceItem key={i} {...exp} delay={150 + i * 90} />
              ))}

              <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid #f0f4f8", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 9, color: "#94a3b8", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {profile.name}
                </span>
                <span style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: 10, color: "#94a3b8", fontStyle: "italic" }}>
                  References available upon request
                </span>
              </div>
            </div>
          </section>

        </article>

        {/* ══ DOWNLOAD CV BUTTON ══ */}
        <div style={{
          width: "100%",
          maxWidth: 'auto',
          display: "flex",
          zIndex: 99,
          justifyContent: "center",
          marginTop: 28,
        }}>
          <button
            onClick={handleDownload}
            disabled={loading}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: loading ? "#64748b" : "linear-gradient(135deg, #1692a1, #20b2c5)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: loading ? "wait" : "pointer",
              boxShadow: "0 4px 14px rgba(22,146,161,0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(22,146,161,0.55)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(22,146,161,0.4)";
            }}
          >
            {loading ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: "spin 1s linear infinite" }}>
                  <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                </svg>
                Generating PDF…
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </>
            )}
          </button>
        </div>

      </main>
    </>
  );
}