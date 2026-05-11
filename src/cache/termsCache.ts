import api from "../api/client";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

const fallbackSections: LegalSection[] = [
  {
    id: "use-of-services",
    title: "Use of Services",
    paragraphs: [
      "AEIRC provides digital services including CBT exams, software platforms, telemedicine, AI/robotics education, and IT consulting.",
      "Users must:",
    ],
    bullets: [
      "Provide accurate information",
      "Refrain from disrupting service operations",
      "Use AEIRC services only for lawful purposes",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "All content, platforms, software, designs, logos, and data are the property of AEIRC or its partners.",
      "Reproduction, copying, or redistribution is prohibited without written consent.",
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    paragraphs: [
      "You are responsible for maintaining confidentiality of your login credentials.",
      "AEIRC is not liable for unauthorized access resulting from negligence.",
    ],
  },
  {
    id: "exam-conduct",
    title: "Exam & Telemedicine Conduct",
    paragraphs: [
      "Misconduct, cheating, or fraudulent activity may lead to disqualification or legal action.",
      "All telemedicine consultations are recorded for safety, with data protected as per our privacy policy.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    paragraphs: ["AEIRC will not be liable for:"],
    bullets: [
      "Any indirect or consequential loss from using our services",
      "Service delays due to technical issues beyond our control",
      "Inaccuracies in third-party content or client-supplied information",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: ["We reserve the right to suspend or terminate user access for:"],
    bullets: ["Violation of terms", "Security breaches", "Legal or compliance issues"],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of Nepal.",
      "Disputes will be settled under Nepalese jurisdiction.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    paragraphs: [
      "AEIRC reserves the right to revise these Terms at any time.",
      "Continued use after updates means you accept the changes.",
    ],
  },
];

let cache: LegalSection[] | null = null;
let pending: Promise<LegalSection[]> | null = null;

export function getTermsCache(): LegalSection[] | null {
  return cache;
}

export function fetchTerms(): Promise<LegalSection[]> {
  if (cache) return Promise.resolve(cache);
  if (pending) return pending;

  pending = api
    .get<{ sections: LegalSection[] }>("/terms/data")
    .then((res) => {
      if (Array.isArray(res.data?.sections) && res.data.sections.length > 0) {
        cache = res.data.sections;
        return cache;
      }
      return fallbackSections;
    })
    .catch(() => fallbackSections)
    .finally(() => { pending = null; });

  return pending;
}

export { fallbackSections as fallbackTermsSections };
