const Terms = () => {
  const termsData = [
    {
      id: 1,
      title: "1. Use of Services",
      content: [
        "AEIRC provides digital services including CBT exams, software platforms, telemedicine, AI/robotics education, and IT consulting.",
        "Users must:",
        [
          "Provide accurate information",
          "Refrain from disrupting service operations",
          "Use AEIRC services only for lawful purposes",
        ],
      ],
    },
    {
      id: 2,
      title: "2. Intellectual Property",
      content: [
        "All content, platforms, software, designs, logos, and data are the property of AEIRC or its partners.",
        "Reproduction, copying, or redistribution is prohibited without written consent.",
      ],
    },
    {
      id: 3,
      title: "3. User Accounts",
      content: [
        "You are responsible for maintaining confidentiality of your login credentials.",
        "AEIRC is not liable for unauthorized access resulting from negligence.",
      ],
    },
    {
      id: 4,
      title: "4. Exam & Telemedicine Conduct",
      content: [
        "Misconduct, cheating, or fraudulent activity may lead to disqualification or legal action.",
        "All telemedicine consultations are recorded for safety, with data protected as per our privacy policy.",
      ],
    },
    {
      id: 5,
      title: "5. Limitation of Liability",
      content: [
        "AEIRC will not be liable for:",
        [
          "Any indirect or consequential loss from using our services",
          "Service delays due to technical issues beyond our control",
          "Inaccuracies in third-party content or client-supplied information",
        ],
      ],
    },
    {
      id: 6,
      title: "6. Termination",
      content: [
        "We reserve the right to suspend or terminate user access for:",
        [
          "Violation of terms",
          "Security breaches",
          "Legal or compliance issues",
        ],
      ],
    },
    {
      id: 7,
      title: "7. Governing Law",
      content: [
        "These Terms are governed by the laws of Nepal.",
        "Disputes will be settled under Nepalese jurisdiction.",
      ],
    },
    {
      id: 8,
      title: "8. Changes to Terms",
      content: [
        "AEIRC reserves the right to revise these Terms at any time.",
        "Continued use after updates means you accept the changes.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Terms & Conditions – AEIRC</h1>

      {termsData.map((section) => (
        <div key={section.id} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
          {section.content.map((item, index) =>
            Array.isArray(item) ? (
              <ul key={index} className="list-disc list-inside pl-5 text-gray-700">
                {item.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p key={index} className="text-gray-700 mb-2">{item}</p>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Terms;
