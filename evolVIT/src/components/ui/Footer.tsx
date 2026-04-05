export default function Footer() {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Discord", href: "#" },
  ];

  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-6 px-12 py-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div>
        <div className="font-grotesk font-bold text-lg" style={{ color: "#00F2FF" }}>
          EvolVIT
        </div>
        <div className="font-mono text-[11px] mt-1" style={{ color: "#444" }}>
          // Based in the Cloud & VIT Bhopal
        </div>
        <div className="font-mono text-[11px] mt-1" style={{ color: "#444" }}>
          © 2026 EvolVIT. All Rights Reserved. Built for the future.
        </div>
      </div>

      <div className="flex gap-6">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-mono text-xs transition-colors duration-200"
            style={{ color: "#555", textDecoration: "none" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#00F2FF")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#555")
            }
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
