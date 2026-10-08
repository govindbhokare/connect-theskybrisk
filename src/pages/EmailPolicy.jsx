import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function EmailPolicy() {
  return (
    <section className="page-section policy-page">
      <div className="container narrow-container">

        <SectionHeading
          eyebrow="Responsible Email"
          title="Email Communication Policy"
          text="How The Skybrisk collects email addresses and uses email primarily for transactional and service-related communications."
        />

        <div className="policy-meta">
          Last updated: October 8, 2026
        </div>

        <article className="policy-content">

          <h2>1. Purpose</h2>

          <p>
            The Skybrisk primarily uses email to provide transactional and
            service-related communications to applicants, interns,
            participants, customers, and other users who have directly
            interacted with us.
          </p>

          <p>
            These communications are generally triggered by a user's
            application, registration, payment, service request, support
            request, internship participation, or other interaction with
            The Skybrisk.
          </p>

          <h2>2. How We Obtain Email Addresses</h2>

          <p>
            Email addresses are collected directly from users through
            user-initiated interactions, including:
          </p>

          <ul>
            <li>Website application forms.</li>
            <li>Internship application forms.</li>
            <li>Registration forms.</li>
            <li>Payment or service-related processes.</li>
            <li>Support requests.</li>
            <li>Account or service interactions.</li>
            <li>Direct communication with The Skybrisk.</li>
          </ul>

          <p>
            We do not purchase, rent, trade, or scrape third-party email
            databases for unsolicited email campaigns.
          </p>

          <p>
            We do not intentionally send bulk transactional emails to
            unrelated recipients or email addresses obtained from
            third-party databases.
          </p>

          <h2>3. Types of Emails We Send</h2>

          <p>
            The Skybrisk primarily sends transactional and service-related
            emails, including:
          </p>

          <ul>
            <li>Application submission confirmations.</li>
            <li>Application status notifications.</li>
            <li>Internship offer and confirmation emails.</li>
            <li>Internship onboarding instructions.</li>
            <li>Project and task-related notifications.</li>
            <li>Payment confirmations.</li>
            <li>Invoices and transaction-related communications.</li>
            <li>Document and certificate notifications.</li>
            <li>Account or service notifications.</li>
            <li>Support responses.</li>
            <li>Important administrative notifications.</li>
            <li>Other emails directly related to a requested service.</li>
          </ul>

          <h2>4. Transactional Communications</h2>

          <p>
            Transactional emails are communications sent as a result of an
            action, request, application, transaction, or service interaction
            initiated by the recipient.
          </p>

          <p>
            For example, when a user submits an internship application,
            completes a payment, requests support, or participates in an
            internship program, The Skybrisk may send emails necessary to
            complete or manage that interaction.
          </p>

          <p>
            These communications are intended to provide information
            necessary for the user's application, transaction, service, or
            participation.
          </p>

          <h2>5. Email Communication and User Interaction</h2>

          <p>
            We send transactional communications based on the user's direct
            interaction with The Skybrisk, including applications,
            registrations, transactions, service requests, support requests,
            or participation in our programs.
          </p>

          <p>
            Users provide their email address when they choose to interact
            with our website, submit an application, request a service, or
            communicate with us.
          </p>

          <p>
            Transactional communications are necessary to provide or
            administer the requested service or interaction.
          </p>

          <h2>6. Promotional Communications</h2>

          <p>
            The primary purpose of our current email communication is
            transactional and service-related communication.
          </p>

          <p>
            If The Skybrisk introduces promotional or marketing email
            communications in the future, such communications will be
            handled separately and appropriate consent and communication
            preference mechanisms will be implemented where required.
          </p>

          <h2>7. Bounce and Delivery Handling</h2>

          <p>
            The Skybrisk monitors email delivery information, including
            bounced messages and delivery failures.
          </p>

          <p>
            Email addresses that are permanently undeliverable or repeatedly
            fail delivery may be removed or suppressed from future sending
            to help maintain responsible email delivery practices.
          </p>

          <p>
            Delivery failures are reviewed to help reduce repeated attempts
            to deliver emails to invalid or unavailable addresses.
          </p>

          <h2>8. Complaint Handling</h2>

          <p>
            The Skybrisk takes email complaints and abuse signals seriously.
          </p>

          <p>
            Where a complaint or other reliable signal indicates that
            continued communication to an address may be inappropriate, the
            address may be reviewed and suppressed from future sending where
            appropriate.
          </p>

          <h2>9. Email Suppression</h2>

          <p>
            The Skybrisk may maintain suppression records for email
            addresses associated with permanent delivery failures, repeated
            delivery failures, complaints, or other circumstances where
            continued sending would be inappropriate.
          </p>

          <p>
            Suppression information may be used to prevent repeated delivery
            attempts to addresses that should no longer receive email.
          </p>

          <h2>10. Amazon SES and Email Delivery Providers</h2>

          <p>
            The Skybrisk may use Amazon Simple Email Service (Amazon SES)
            and other reputable email delivery providers to deliver
            transactional and service-related communications.
          </p>

          <p>
            Email delivery providers may process information necessary for
            email delivery and monitoring, including email addresses,
            delivery status, bounce events, complaint events, and related
            email-delivery information.
          </p>

          <p>
            Our use of an email delivery provider does not change our
            responsibility to use email responsibly and in accordance with
            our policies.
          </p>

          <h2>11. Responsible Sending Practices</h2>

          <p>
            The Skybrisk follows responsible email practices, including:
          </p>

          <ul>
            <li>
              Collecting email addresses directly from users through
              user-initiated interactions.
            </li>

            <li>
              Sending transactional emails in response to applications,
              transactions, requests, or service interactions.
            </li>

            <li>
              Not purchasing or renting email lists.
            </li>

            <li>
              Not using scraped third-party email databases for unsolicited
              email campaigns.
            </li>

            <li>
              Monitoring email delivery and bounce information.
            </li>

            <li>
              Reviewing complaints and email-abuse signals.
            </li>

            <li>
              Suppressing invalid or repeatedly undeliverable addresses
              where appropriate.
            </li>

            <li>
              Keeping transactional communications separate from future
              promotional communications.
            </li>
          </ul>

          <h2>12. Contact</h2>

          <p>
            For questions regarding email communications or the use of your
            email address, you may contact:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hr@connect-theskybrisk.com">
              hr@connect-theskybrisk.com
            </a>
          </p>

          <p>
            <strong>The Skybrisk</strong>
            <br />
            Pune, Maharashtra, India
          </p>

        </article>

        <div className="policy-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact Support</Link>
        </div>

      </div>
    </section>
  );
}