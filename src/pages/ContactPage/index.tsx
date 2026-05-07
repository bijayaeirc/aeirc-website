import PageBanner from "../../components/Banner/PageBanner";
import ContactSection from '../../components/ContactUs/ContactSection'

const index = () => {
  return (
    <div id="contact_us-page">
      <PageBanner pageKey="contact" title="Contact" breadcrumb="Contact" />
      <ContactSection/>
    </div>
  )
}

export default index
