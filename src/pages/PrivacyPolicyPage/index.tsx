import PageBanner from "../../components/Banner/PageBanner";
import PrivacyPolicyIntro from "../../components/Legal/PrivacyPolicies/PrivacyPolicyIntro";
import PrivacyPolicy from "../../components/Legal/PrivacyPolicies/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageBanner pageKey="privacy-policy" title="Privacy Policy - AEIRC" breadcrumb="Privacy Policies" />
      <PrivacyPolicyIntro />
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
