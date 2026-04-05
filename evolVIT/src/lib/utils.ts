import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TEAM = [
  {
    initials: "AK",
    name: "Aryan Kumar",
    role: "President",
    gradient: "linear-gradient(135deg, #00F2FF, #7000FF)",
    github: "#",
    linkedin: "#",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Lead Researcher",
    gradient: "linear-gradient(135deg, #7000FF, #0070FF)",
    github: "#",
    linkedin: "#",
  },
  {
    initials: "RM",
    name: "Rohit Mishra",
    role: "Logic Architect",
    gradient: "linear-gradient(135deg, #00FF88, #00A0FF)",
    github: "#",
    linkedin: "#",
  },
  {
    initials: "SA",
    name: "Sneha Agarwal",
    role: "ML Engineer",
    gradient: "linear-gradient(135deg, #FFB800, #FF4D00)",
    github: "#",
    linkedin: "#",
  },
  {
    initials: "VK",
    name: "Vivek Kapoor",
    role: "DevOps Lead",
    gradient: "linear-gradient(135deg, #00F2FF, #00FF88)",
    github: "#",
    linkedin: "#",
  },
  {
    initials: "NK",
    name: "Neha Kulkarni",
    role: "Research Analyst",
    gradient: "linear-gradient(135deg, #FF4D00, #7000FF)",
    github: "#",
    linkedin: "#",
  },
  {
    initials: "DP",
    name: "Dev Patel",
    role: "Systems Engineer",
    gradient: "linear-gradient(135deg, #0070FF, #00F2FF)",
    github: "#",
    linkedin: "#",
  },
];

export const EVENTS = [
  {
    id: "e1",
    hash: "a3f9c12",
    title: "The Rust Revolution: Memory Safety Workshop",
    date: "Apr 15, 2026",
    venue: "LT-7, VIT Bhopal + Online",
    status: "open" as const,
    targetDate: new Date("2026-04-15T09:00:00"),
  },
  {
    id: "e2",
    hash: "b7e2d84",
    title: "Quantum Computing: From Qubits to Algorithms",
    date: "Apr 28, 2026",
    venue: "Online",
    status: "open" as const,
  },
  {
    id: "e3",
    hash: "c1a5f70",
    title: "Edge AI: Deploying Models on Microcontrollers",
    date: "Mar 10, 2026",
    venue: "LT-3, VIT Bhopal",
    status: "archive" as const,
  },
  {
    id: "e4",
    hash: "d9b4e22",
    title: "Idea2Industry Ideathon — Season 1",
    date: "Feb 14, 2026",
    venue: "Main Auditorium, VIT Bhopal",
    status: "archive" as const,
  },
];

export const STATS = [
  { value: "1M+", label: "Lines of Code", target: 1000000, short: true },
  { value: "15+", label: "Research Papers", target: 15 },
  { value: "20+", label: "Hackathon Podiums", target: 20 },
  { value: "200+", label: "Active Members", target: 200 },
];

export const GALLERY_ITEMS = [
  { icon: "💻", caption: "2AM debugging session — Idea2Industry", large: true, accent: "cyan" },
  { icon: "🔬", caption: "Hardware lab assembly", accent: "violet" },
  { icon: "📐", caption: "Whiteboard architecture session", accent: "green" },
  { icon: "🏆", caption: "National Hackathon — 1st Place", wide: true, accent: "amber" },
  { icon: "⚡", caption: "Quantum computing workshop", accent: "blue" },
  { icon: "🤝", caption: "Industry connect meetup", accent: "violet" },
];

export const NAV_LINKS = [
  { href: "#about", label: "./origin" },
  { href: "#pillars", label: "./core" },
  { href: "#events", label: "./events" },
  { href: "#stats", label: "./stats" },
  { href: "#team", label: "./team" },
];

export const CMD_COMMANDS = [
  { key: "/join", label: "Apply to EvolVIT", section: "cta" },
  { key: "/events", label: "Browse upcoming events", section: "events" },
  { key: "/team", label: "Meet the architects", section: "team" },
  { key: "/stats", label: "View achievements", section: "stats" },
  { key: "/about", label: "Our origin story", section: "about" },
  { key: "/gallery", label: "See the pulse", section: "gallery" },
];
