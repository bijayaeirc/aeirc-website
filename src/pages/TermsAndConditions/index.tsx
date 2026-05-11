import PageBanner from "../../components/Banner/PageBanner";
import TermsIntro from "../../components/Legal/TermsAndConditions/TermsIntro";
import Terms from "../../components/Legal/TermsAndConditions/Terms";

const TermsAndConditions = () => {
  return (
    <div>
      <PageBanner pageKey="terms" title="Terms & Conditions - AEIRC" breadcrumb="Terms & Conditions" />
      <TermsIntro />
      <Terms />
    </div>
  );
};

export default TermsAndConditions;
