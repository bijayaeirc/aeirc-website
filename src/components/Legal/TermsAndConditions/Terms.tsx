import { useEffect, useState } from "react";
import { fetchTerms, getTermsCache, fallbackTermsSections } from "../../../cache/termsCache";
import type { LegalSection } from "../../../cache/termsCache";

const SectionBlock = ({ section, index }: { section: LegalSection; index: number }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
      {index + 1}. {section.title}
    </h2>
    {section.paragraphs.map((para, i) => (
      <p key={i} className="text-gray-700 mb-2">{para}</p>
    ))}
    {section.bullets && section.bullets.length > 0 && (
      <ul className="list-disc list-inside pl-5 text-gray-700">
        {section.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const Terms = () => {
  const [sections, setSections] = useState<LegalSection[]>(
    getTermsCache() ?? fallbackTermsSections
  );

  useEffect(() => {
    if (getTermsCache()) return;
    fetchTerms().then(setSections);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Terms & Conditions – AEIRC
      </h1>
      {sections.map((section, index) => (
        <SectionBlock key={section.id} section={section} index={index} />
      ))}
    </div>
  );
};

export default Terms;
