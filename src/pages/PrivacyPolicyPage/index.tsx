import PrivacyPolicy from "../../components/Legal/PrivacyPolicies/PrivacyPolicy"
import PrivacyPolicyHeader from "../../components/Legal/PrivacyPolicies/PrivacyPolicyHeader"
import PrivacyPolicyIntro from "../../components/Legal/PrivacyPolicies/PrivacyPolicyIntro"

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicyHeader/>
      <PrivacyPolicyIntro/>
      <PrivacyPolicy/>
    </div>
  )
}

export default PrivacyPolicyPage
