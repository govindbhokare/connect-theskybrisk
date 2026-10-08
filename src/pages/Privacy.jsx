
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Privacy() {
  return (
    <section className="page-section policy-page">
      <div className="container narrow-container">

        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          text="This Privacy Policy explains what information we may collect, how we use it, how we handle email communication, and how we protect your information."
        />

        <div className="policy-meta">
          Last updated: October 4, 2026
        </div>

        <article className="policy-content">

          {/* 1. Scope */}
          <h2>1. Scope</h2>

          <p>
            This Privacy Policy applies to Connect The Skybrisk and
            connect-theskybrisk.com.
          </p>

          <p>
            It applies to information submitted through our website,
            application forms, internship applications, support requests,
            email communication, payment-related interactions, and other
            related website services.
          </p>

          {/* 2. Information We Collect */}
          <h2>2. Information We May Collect</h2>

          <p>
            Depending on the service or interaction, we may collect:
          </p>

          <ul>
            <li>Name and contact information.</li>
            <li>Email address and phone number.</li>
            <li>Internship domain and duration.</li>
            <li>Application and program information.</li>
            <li>Information provided through support requests.</li>
            <li>Payment or transaction reference information when required.</li>
            <li>
              Basic technical information such as browser, device, IP address,
              and website usage information where applicable.
            </li>
          </ul>

          {/* 3. How We Use Information */}
          <h2>3. How We Use Information</h2>

          <p>
            We may use collected information for legitimate business,
            service-delivery, security, and communication purposes, including:
          </p>

          <ul>
            <li>Processing internship and other applications.</li>
            <li>Sending application confirmations.</li>
            <li>Sending offer letters and internship-related communications.</li>
            <li>Sending payment confirmations, invoices, and receipts.</li>
            <li>Sending internship instructions and important notifications.</li>
            <li>Providing requested certificates and other documents.</li>
            <li>Responding to support requests and inquiries.</li>
            <li>Maintaining application and service records.</li>
            <li>Monitoring email delivery, bounces, and complaints.</li>
            <li>Maintaining suppression and unsubscribe records.</li>
            <li>Preventing misuse, fraud, and unauthorized activity.</li>
            <li>Improving our website, systems, and services.</li>
          </ul>

          {/* 4. Transactional and Promotional Communications */}
          <h2>4. Transactional and Promotional Communications</h2>

          <p>
            We may send transactional or service-related emails when they are
            necessary to process or respond to an action, application, request,
            transaction, or service initiated by you.
          </p>

          <p>
            Transactional emails may include application confirmations,
            offer letters, payment confirmations, invoices, internship
            instructions, document delivery, account notifications, support
            responses, and other communications directly related to a service
            or request.
          </p>

          <p>
            Promotional or marketing emails, where applicable, may include
            information about programs, services, announcements, offers,
            newsletters, or other promotional content. Such communications
            are handled separately from essential transactional communications
            and include an appropriate unsubscribe mechanism where required.
          </p>

          <p>
            We do not require marketing consent as a condition for receiving
            essential transactional or service-related communications that are
            necessary to fulfill a request or provide a service.
          </p>

          {/* 5. Consent and Email Collection */}
          <h2>5. Email Collection and Consent</h2>

          <p>
            We collect email addresses through website forms, application
            forms, support requests, direct communication, or other
            interactions where the individual voluntarily provides their
            information.
          </p>

          <p>
            We do not purchase, rent, sell, or scrape email addresses for
            unsolicited email campaigns.
          </p>

          <p>
            Where promotional communications require consent, we provide an
            appropriate choice for the recipient to opt in and provide a
            mechanism to withdraw that consent or unsubscribe from future
            promotional communications.
          </p>

          {/* 6. Amazon SES */}
          <h2>6. Amazon SES and Email Delivery</h2>

          <p>
            We may use Amazon Simple Email Service (Amazon SES) as a third-party
            email delivery provider to deliver legitimate communications.
          </p>

          <p>
            Email addresses may be processed by our email delivery provider
            solely as necessary to deliver communications requested by
            applicants, participants, customers, or other users who have
            directly interacted with us.
          </p>

          <p>
            Email delivery information may include delivery status, bounces,
            complaints, suppression status, and unsubscribe preferences.
            This information may be processed to maintain responsible email
            practices and prevent further sending to recipients who should no
            longer receive applicable communications.
          </p>

          {/* 7. Bounce and Complaint Handling */}
          <h2>7. Bounce, Complaint, and Suppression Handling</h2>

          <p>
            We monitor email delivery events to maintain the quality and
            reliability of our email communications.
          </p>

          <p>
            Email addresses associated with permanent delivery failures,
            spam complaints, or valid unsubscribe requests may be suppressed
            from future applicable email communications.
          </p>

          <p>
            We do not intentionally continue sending applicable communications
            to email addresses that have been identified as permanently
            undeliverable, have submitted a valid unsubscribe request, or have
            otherwise been identified as unsuitable for continued delivery.
          </p>

          {/* 8. Sharing */}
          <h2>8. Sharing of Information</h2>

          <p>
            We may share necessary information with trusted service providers
            that help us operate our website, communication systems, email
            delivery, application forms, payment systems, hosting services,
            security systems, or other requested services.
          </p>

          <p>
            Such providers receive only information reasonably necessary for
            the relevant service or purpose.
          </p>

          <p>
            We do not sell personal information as a business model.
          </p>

          {/* 9. Data Retention */}
          <h2>9. Data Retention</h2>

          <p>
            Information is retained for as long as reasonably necessary to
            provide services, maintain legitimate business and application
            records, resolve disputes, maintain security, or comply with
            applicable legal requirements.
          </p>

          <p>
            Suppression and unsubscribe records may be retained after an
            unsubscribe request so that communication preferences can be
            respected and unwanted communications are not unintentionally
            resumed.
          </p>

          {/* 10. Security */}
          <h2>10. Security</h2>

          <p>
            We use reasonable administrative, technical, and organizational
            measures to protect personal information against unauthorized
            access, misuse, alteration, disclosure, or destruction.
          </p>

          <p>
            However, no internet transmission, electronic communication, or
            storage system can be guaranteed to be completely secure.
          </p>

          {/* 11. Your Choices */}
          <h2>11. Your Choices and Communication Preferences</h2>

          <p>
            You may contact us to request correction of inaccurate information,
            ask questions about how your information is used, or withdraw from
            optional communications.
          </p>

          <p>
            You may unsubscribe from promotional or other optional email
            communications using the unsubscribe mechanism provided in the
            applicable email or by contacting us.
          </p>

          <p>
            Unsubscribing from promotional communications does not necessarily
            stop essential transactional or service-related emails that are
            required to fulfill a request, complete a transaction, provide a
            requested service, or respond to your communication.
          </p>

          {/* 12. Third Party */}
          <h2>12. Third-Party Services and Websites</h2>

          <p>
            Our website may use or link to third-party services for email
            delivery, payments, hosting, forms, analytics, or other
            functionality.
          </p>

          <p>
            Third-party services operate under their respective terms and
            privacy policies. We encourage users to review those policies when
            using third-party services.
          </p>

          {/* 13. Changes */}
          <h2>13. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy when our services, technology,
            communication practices, or legal requirements change.
          </p>

          <p>
            The updated version will be published on this website with a
            revised "Last updated" date.
          </p>

          {/* 14. Contact */}
          <h2>14. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy, your information,
            or our communication practices, you may contact us at:
          </p>

          <p>
            <strong>Connect The Skybrisk</strong>
            <br />
            Pune, Maharashtra, India
            <br />
            Email:{" "}
            <a href="mailto:hr@connect-theskybrisk.com">
              hr@connect-theskybrisk.com
            </a>
          </p>

        </article>

        {/* Policy Navigation */}
        <div className="policy-links">
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="/email-policy">Email Communication Policy</Link>
          <Link to="/contact">Contact Support</Link>
        </div>

      </div>
    </section>
  );
}

