import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | White Gate Partners",
  description:
    "How White Gate Partners Pte. Ltd. collects, uses, discloses, stores and protects personal data under Singapore's Personal Data Protection Act 2012, including our Candidate Privacy Notice.",
  openGraph: {
    title: "Privacy Policy | White Gate Partners",
    description:
      "How White Gate Partners collects, uses, discloses, stores and protects personal data, including our Candidate Privacy Notice.",
    url: "https://whitegatepartners.sg/privacy-policy",
  },
  alternates: { canonical: "https://whitegatepartners.sg/privacy-policy" },
};

/* Sidebar contents. Mirrors the headings in the body below — keep the ids in
   sync when a section is added, renamed or removed. */
const PART_A = [
  ["who-we-are", "Who We Are and Scope"],
  ["data-we-collect", "Personal Data We Collect"],
  ["how-we-obtain", "How We Obtain Personal Data"],
  ["how-we-use", "How We Use Personal Data"],
  ["consent", "Consent and Other Permitted Grounds"],
  ["disclosure", "Disclosure of Personal Data"],
  ["overseas-transfers", "Overseas Transfers"],
  ["security", "Security"],
  ["retention", "Retention"],
  ["cookies", "Website Data, Cookies and Analytics"],
  ["your-rights", "Your Rights and Choices"],
  ["marketing", "Marketing Communications"],
  ["third-party", "Third-Party Information and Links"],
  ["data-breaches", "Data Breaches"],
  ["updates", "Updates to This Policy"],
  ["dpo", "Data Protection Officer and Contact"],
];

const PART_B = [
  ["cpn-scope", "Scope"],
  ["cpn-data", "Candidate Data We May Collect"],
  ["cpn-sources", "Sources of Candidate Data"],
  ["cpn-use", "How We Use Candidate Data"],
  ["cpn-sharing", "Sharing Candidate Data with Clients and Partners"],
  ["cpn-accuracy", "Accuracy and Candidate Responsibilities"],
  ["cpn-withdrawal", "Withdrawal, Access and Correction"],
  ["cpn-retention", "Retention of Candidate Data"],
  ["cpn-contact", "Contact"],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="pg-hero">
        <div className="wrap">
          <span className="kick">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="lede">
            How White Gate Partners collects, uses, discloses, stores and
            protects personal data.
          </p>
          <p className="legal-meta">Last updated: 25 August 2026</p>
        </div>
      </section>

      {/* POLICY */}
      <section className="block legal-section">
        <div className="wrap">
          <div className="legal-layout">
            <aside className="legal-toc">
              <div className="k">Contents</div>
              <div className="part">Part A — General Privacy Policy</div>
              <ol>
                {PART_A.map(([id, label], i) => (
                  <li key={id}>
                    <a href={`#${id}`}>
                      <span className="n">{i + 1}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="part">Part B — Candidate Privacy Notice</div>
              <ol>
                {PART_B.map(([id, label], i) => (
                  <li key={id}>
                    <a href={`#${id}`}>
                      <span className="n">{i + 1}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="prose legal-body">
              <p>
                This Privacy Policy explains how White Gate Partners Pte. Ltd.
                (&ldquo;White Gate Partners&rdquo;, &ldquo;WGP&rdquo;,
                &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;)
                collects, uses, discloses, stores and protects personal data
                when individuals visit our website, contact us, or engage with
                our executive search, specialist recruitment, talent solutions
                and related consulting services.
              </p>
              <p>
                This Policy is primarily governed by the Personal Data
                Protection Act 2012 of Singapore (&ldquo;PDPA&rdquo;). Where the
                laws of another jurisdiction apply to a particular processing
                activity, we will take reasonable steps to comply with the
                applicable requirements.
              </p>

              <div className="legal-note">
                <p>
                  This Policy should be read together with the Candidate Privacy
                  Notice included in Part B, which provides additional
                  information about how we handle candidate and job applicant
                  data.
                </p>
              </div>

              {/* ───── PART A ───── */}
              <h2 id="part-a" className="legal-part">
                Part A — General Privacy Policy
              </h2>

              <h3 id="who-we-are">
                <span className="n">1.</span> Who We Are and Scope
              </h3>
              <p>
                White Gate Partners is a Singapore-based executive search,
                specialist recruitment and talent solutions firm. This Policy
                applies to personal data in our possession or under our control,
                including personal data processed for us by service providers
                and other third parties.
              </p>
              <p>
                It applies to candidates, job applicants, clients, prospective
                clients, business contacts, referral partners, independent
                recruiters, consultants, website visitors and other individuals
                who interact with us.
              </p>

              <h3 id="data-we-collect">
                <span className="n">2.</span> Personal Data We Collect
              </h3>
              <p>
                Depending on your relationship with us, we may collect the
                following categories of personal data:
              </p>
              <ul>
                <li>
                  Identification and contact details, including
                  name, email address, telephone number, mailing address and
                  professional profile links.
                </li>
                <li>
                  Professional and employment information,
                  including CVs, work history, education, qualifications,
                  certifications, technical skills, sector experience and areas
                  of specialisation.
                </li>
                <li>
                  Recruitment-related information, including
                  current and expected compensation, notice period,
                  availability, career interests, location preferences,
                  willingness to travel or relocate, nationality, residency and
                  work-authorisation status.
                </li>
                <li>
                  Assessment and process information, including
                  interview notes, consultant observations, references,
                  feedback, offer details, placement information and
                  communications with WGP.
                </li>
                <li>
                  Client and business information, including
                  company, job title, hiring requirements, commercial enquiries,
                  contracts, billing information and relationship history.
                </li>
                <li>
                  Technical and website information, including
                  IP address, device type, browser information, referring pages,
                  website usage and security logs.
                </li>
                <li>
                  Any other information that you voluntarily provide through
                  forms, emails, messages, documents or conversations.
                </li>
                <li>
                  Sensitive or potentially sensitive recruitment information.{" "}
                  Depending on the role, client requirements and applicable law,
                  we may collect criminal-record or other background-check
                  information; health or medical information; disability or
                  accessibility status; salary history; and diversity
                  information, such as race or ethnic origin, religion or
                  marital status.
                </li>
              </ul>
              <p>
                We do not intentionally request sensitive personal data unless
                it is relevant and reasonably necessary for a stated purpose.
                Where you choose to provide information such as health or
                accessibility requirements, we will handle it with appropriate
                care.
              </p>

              <h3 id="how-we-obtain">
                <span className="n">3.</span> How We Obtain Personal Data
              </h3>
              <p>We may collect personal data:</p>
              <ul>
                <li>
                  Directly from you, including through our website, email,
                  telephone, messaging platforms, meetings, interviews and
                  recruitment processes.
                </li>
                <li>
                  From professional networking platforms, public professional
                  profiles, company websites, job boards and other publicly
                  available sources.
                </li>
                <li>
                  From clients, referral partners, independent recruiters,
                  search partners, professional contacts and persons authorised
                  to provide information about you.
                </li>
                <li>
                  From referees, former employers, educational institutions and
                  verification providers, where relevant and permitted.
                </li>
                <li>
                  Automatically through our website, hosting environment,
                  security tools and related technologies.
                </li>
              </ul>
              <p>
                Where we obtain your personal data from another source, we will
                use it only for reasonable purposes connected with our services
                and in accordance with applicable law.
              </p>

              <h3 id="how-we-use">
                <span className="n">4.</span> How We Use Personal Data
              </h3>
              <p>
                We may collect, use and disclose personal data for purposes
                including:
              </p>
              <ul>
                <li>
                  Providing executive search, specialist recruitment, talent
                  solutions and related consulting services.
                </li>
                <li>
                  Responding to enquiries and communicating with candidates,
                  clients, partners and other business contacts.
                </li>
                <li>
                  Identifying, approaching, assessing and matching potential
                  candidates with current or future opportunities.
                </li>
                <li>
                  Preparing candidate profiles, arranging interviews, managing
                  feedback and supporting offer, placement and onboarding
                  processes.
                </li>
                <li>
                  Understanding client hiring requirements, market conditions
                  and talent availability.
                </li>
                <li>
                  Managing client, candidate, supplier, referral and partnership
                  relationships.
                </li>
                <li>
                  Conducting reference, qualification, identity, work-eligibility
                  or other appropriate checks.
                </li>
                <li>
                  Administering contracts, invoices, payments, guarantees,
                  records and internal operations.
                </li>
                <li>
                  Improving our website, services, processes, security and user
                  experience.
                </li>
                <li>
                  Preventing fraud, misuse, security incidents or unlawful
                  activity.
                </li>
                <li>
                  Complying with legal, regulatory, contractual and professional
                  obligations.
                </li>
                <li>
                  Establishing, exercising or defending legal claims and
                  resolving complaints or disputes.
                </li>
              </ul>
              <p>
                <strong>Automated decision-making and profiling.</strong> WGP
                does not currently make significant recruitment decisions solely
                through automated processing without human involvement. We may
                use technology-assisted, including AI-assisted, search,
                matching, screening or psychometric assessment tools to support
                our consultants; where such tools are used, their outputs are
                reviewed by an appropriately authorised person.
              </p>

              <h3 id="consent">
                <span className="n">5.</span> Consent and Other Permitted
                Grounds
              </h3>
              <p>
                We generally collect, use and disclose personal data with your
                consent, which may be expressed or deemed from the
                circumstances. In particular, where permitted and the statutory
                conditions are met, WGP may rely on deemed consent by
                contractual necessity under section 15 of the PDPA, including
                where collection, use or disclosure is reasonably necessary to
                enter into or perform a contract with you, and deemed consent by
                notification under section 15A of the PDPA, including when
                sourcing relevant professional information from a third-party
                platform after notifying you of the purposes and giving you a
                reasonable opportunity to opt out. We may also rely on other
                exceptions or permitted grounds under the PDPA or other
                applicable law.
              </p>
              <p>
                You may withdraw consent by contacting us. We will explain the
                likely consequences of withdrawal and will cease the relevant
                collection, use or disclosure within a reasonable period,
                subject to any legal or business grounds that permit or require
                continued processing.
              </p>

              <h3 id="disclosure">
                <span className="n">6.</span> Disclosure of Personal Data
              </h3>
              <p>
                We may disclose personal data, where reasonably necessary, to:
              </p>
              <ul>
                <li>
                  Prospective and existing clients in connection with
                  recruitment, search, consulting or talent assignments.
                </li>
                <li>
                  WGP employees, consultants, independent recruiters and
                  authorised recruitment or search partners.
                </li>
                <li>
                  Overseas partners supporting cross-border or regional
                  assignments.
                </li>
                <li>
                  Referees, former employers, educational institutions,
                  verification providers and other persons involved in
                  appropriate checks.
                </li>
                <li>
                  Technology, hosting, CRM, email, document-storage,
                  cybersecurity, analytics and other service providers.
                </li>
                <li>
                  Professional advisers, auditors, insurers, banks and payment
                  providers.
                </li>
                <li>
                  Government agencies, regulators, law-enforcement bodies,
                  courts or other parties where disclosure is required or
                  permitted by law.
                </li>
                <li>
                  A purchaser, investor or successor in connection with a
                  proposed or completed corporate transaction, subject to
                  appropriate safeguards.
                </li>
              </ul>
              <p>
                <strong>We do not sell personal data.</strong>
              </p>

              <h3 id="overseas-transfers">
                <span className="n">7.</span> Overseas Transfers
              </h3>
              <p>
                Because WGP supports regional and cross-border assignments and
                uses service providers that may operate internationally,
                personal data may be transferred, stored or processed outside
                Singapore.
              </p>
              <p>
                Where personal data is transferred outside Singapore, we will
                use a permitted transfer mechanism and take steps to ensure the
                recipient provides a standard of protection comparable to that
                required under the PDPA. Depending on the circumstances, this
                may include written contractual arrangements requiring
                comparable protection, including standard data-transfer clauses;
                binding corporate rules or equivalent intra-group safeguards;
                transfer to a prescribed or otherwise recognised country or
                jurisdiction where applicable; or reliance on another statutory
                exception or permitted mechanism under the PDPA.
              </p>

              <h3 id="security">
                <span className="n">8.</span> Security
              </h3>
              <p>
                We implement reasonable administrative, physical and technical
                safeguards designed to protect personal data from unauthorised
                access, collection, use, disclosure, copying, modification, loss
                or disposal.
              </p>
              <p>
                Security measures may include access controls, password
                protection, secure cloud services, device and account security,
                staff and contractor confidentiality requirements, and
                appropriate vendor management. No method of transmission or
                storage is completely secure, and absolute security cannot be
                guaranteed.
              </p>

              <h3 id="retention">
                <span className="n">9.</span> Retention
              </h3>
              <p>
                We retain personal data only for as long as it is reasonably
                required for the purposes for which it was collected, for an
                ongoing business or recruitment relationship, or to satisfy
                legal, contractual, accounting, regulatory, dispute-resolution
                or record-keeping requirements.
              </p>
              <p>
                Candidate records are generally reviewed for deletion or
                anonymisation within two (2) years of our last meaningful
                interaction, unless there is an ongoing recruitment process,
                placement, contractual obligation, dispute, legal requirement or
                other legitimate business reason requiring longer retention.
              </p>
              <p>Indicative retention periods include:</p>
              <ul>
                <li>
                  <strong>Client and engagement records</strong> — generally
                  seven (7) years after the relevant engagement ends to support
                  statutory accounting and record-keeping.
                </li>
                <li>
                  <strong>Financial, accounting and tax records</strong> —
                  generally five (5) to seven (7) years, or longer where
                  required by IRAS or other applicable law.
                </li>
              </ul>
              <p>
                These periods are guidelines rather than fixed guarantees and
                may be extended where necessary, after which the data will be
                deleted, anonymised or securely disposed of.
              </p>
              <p>
                Client, commercial, financial and placement records may be
                retained for a longer period where required for business,
                accounting, legal or regulatory purposes. When retention is no
                longer necessary, we will take reasonable steps to delete,
                anonymise or securely dispose of the data.
              </p>

              <h3 id="cookies">
                <span className="n">10.</span> Website Data, Cookies and
                Analytics
              </h3>
              <p>
                When you visit our website, our hosting, security and technology
                providers may automatically collect technical information such
                as IP address, browser type, device information, access time,
                referring page and website activity.
              </p>
              <p>Our website may use the following cookie categories:</p>
              <ul>
                <li>
                  <strong>Essential cookies</strong>, which support security,
                  basic functionality and site operations.
                </li>
                <li>
                  <strong>Functional cookies</strong>, which remember
                  preferences.
                </li>
                <li>
                  <strong>Analytics cookies</strong>, which help us understand
                  use of the website and may include Google Analytics where
                  enabled.
                </li>
                <li>
                  <strong>Marketing or advertising cookies</strong>, only where
                  applicable, lawfully permitted and enabled with the required
                  consent.
                </li>
              </ul>
              <p>
                You may control cookies through your browser settings and, where
                provided, our cookie banner.
              </p>

              <h3 id="your-rights">
                <span className="n">11.</span> Your Rights and Choices
              </h3>
              <p>
                Subject to the PDPA and any applicable exceptions, you may:
              </p>
              <ul>
                <li>
                  Request access to personal data that we hold about you and
                  information about how it was used or disclosed during the
                  preceding year.
                </li>
                <li>
                  Request correction of an error or omission in your personal
                  data.
                </li>
                <li>
                  Withdraw consent for specified collection, use or disclosure
                  of your personal data.
                </li>
                <li>
                  Ask us to review whether particular personal data should be
                  retained, deleted, anonymised or no longer used, subject to
                  legal and business requirements.
                </li>
                <li>
                  Request, where the data portability obligation in Part VIA of
                  the PDPA applies, that personal data be transmitted to another
                  organisation in a commonly used, machine-readable format,
                  subject to applicable conditions and exceptions.
                </li>
                <li>
                  Raise a question or complaint about how we handle personal
                  data.
                </li>
                <li>
                  Lodge a complaint with the Personal Data Protection Commission
                  of Singapore (PDPC) about our handling of your personal data,
                  without limiting any other rights or remedies.
                </li>
              </ul>
              <p>
                To protect personal data, we may need to verify your identity
                and the scope of your request. We may charge a reasonable fee
                for an access request where permitted and will inform you of the
                fee in advance.
              </p>
              <p>
                We will generally respond to access or correction requests
                within thirty (30) calendar days. If more time is required, we
                will inform you of the expected response timeframe.
              </p>

              <h3 id="marketing">
                <span className="n">12.</span> Marketing Communications
              </h3>
              <p>
                We may send business updates, market insights, event invitations
                or other relevant communications where permitted. You may opt
                out of non-essential marketing communications at any time by
                using the unsubscribe method provided or contacting us at{" "}
                <a href="mailto:privacy@whitegatepartners.sg">
                  privacy@whitegatepartners.sg
                </a>
                .
              </p>
              <p>
                We may continue to send service, recruitment, contractual or
                administrative communications that are necessary for an existing
                relationship or transaction.
              </p>
              <p>
                Before sending marketing messages to Singapore telephone
                numbers, including calls and text messages, WGP will check the
                Do Not Call Registry where required and comply with the
                applicable Do Not Call provisions in Part IX of the PDPA,
                including requirements relating to consent, identification and
                opt-out requests.
              </p>

              <h3 id="third-party">
                <span className="n">13.</span> Third-Party Information and Links
              </h3>
              <p>
                If you provide personal data relating to another individual, you
                confirm that you are authorised to provide it to us and have
                informed the individual of the purposes for which it may be
                used.
              </p>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                those third parties, and you should review their privacy notices
                separately.
              </p>

              <h3 id="data-breaches">
                <span className="n">14.</span> Data Breaches
              </h3>
              <p>
                We maintain procedures to assess and respond to suspected
                personal-data breaches. Where required by applicable law, we
                will notify the relevant authority and affected individuals of a
                notifiable breach within the prescribed timeframe.
              </p>

              <h3 id="updates">
                <span className="n">15.</span> Updates to This Policy
              </h3>
              <p>
                We may update this Policy from time to time to reflect changes
                in our services, practices, technology or legal obligations. The
                revised version will be published with an updated &ldquo;Last
                updated&rdquo; date. Where a material change affects how we use
                personal data, we will provide additional notice or obtain
                consent where required.
              </p>

              <h3 id="dpo">
                <span className="n">16.</span> Data Protection Officer and
                Contact
              </h3>
              <p>
                Questions, requests, complaints or feedback relating to this
                Policy or your personal data may be directed to:
              </p>
              <div className="legal-contact">
                <div className="role">Data Protection Officer</div>
                <p>
                  White Gate Partners Pte. Ltd.
                  <br />
                  <a href="mailto:privacy@whitegatepartners.sg">
                    privacy@whitegatepartners.sg
                  </a>
                </p>
              </div>

              {/* ───── PART B ───── */}
              <h2 id="part-b" className="legal-part">
                Part B — Candidate Privacy Notice
              </h2>
              <p className="legal-part-meta">Updated as at 25 August 2026</p>
              <p>
                This Candidate Privacy Notice supplements the General Privacy
                Policy above and explains how White Gate Partners handles
                personal data relating to candidates, potential candidates and
                job applicants.
              </p>

              <h3 id="cpn-scope">
                <span className="n">1.</span> Scope
              </h3>
              <p>
                This Notice applies to individuals whom WGP considers, contacts,
                represents, assesses or introduces for employment, contract,
                consulting or other opportunities with our clients, as well as
                individuals applying to work or engage directly with WGP.
                WGP&apos;s services and recruitment processes are intended for
                individuals who are at least eighteen (18) years of age, and WGP
                does not knowingly collect personal data from minors. If we
                learn that personal data of a minor has been collected without
                appropriate authority, we will take reasonable steps to delete
                it.
              </p>

              <h3 id="cpn-data">
                <span className="n">2.</span> Candidate Data We May Collect
              </h3>
              <p>Candidate personal data may include:</p>
              <ul>
                <li>
                  Name, contact details, location and professional profile
                  links.
                </li>
                <li>
                  CV, employment history, education, qualifications,
                  certifications, skills, sector experience and achievements.
                </li>
                <li>
                  Current and expected compensation, notice period, availability
                  and career preferences.
                </li>
                <li>
                  Nationality, residency, work-authorisation status, willingness
                  to travel or relocate, and preferred work locations.
                </li>
                <li>
                  Interview notes, assessments, communications, references,
                  feedback and consultant observations.
                </li>
                <li>
                  Offer, placement, onboarding and guarantee-related
                  information.
                </li>
                <li>
                  Identity, qualification, reference, employment or other
                  verification information where appropriate.
                </li>
                <li>
                  <strong>
                    Sensitive or potentially sensitive recruitment information
                  </strong>
                  , such as criminal record or background-check results, health
                  or medical information, disability or accessibility status,
                  salary history, and diversity information, including race or
                  ethnic origin, religion or marital status, where relevant,
                  lawfully collected and, where required, with your explicit
                  consent.
                </li>
              </ul>

              <h3 id="cpn-sources">
                <span className="n">3.</span> Sources of Candidate Data
              </h3>
              <p>We may obtain candidate data:</p>
              <ul>
                <li>Directly from you or your authorised representative.</li>
                <li>
                  From LinkedIn, other professional platforms, public profiles,
                  job boards and company websites.
                </li>
                <li>
                  From referrals, professional contacts, clients, independent
                  recruiters and search partners.
                </li>
                <li>
                  From referees, former employers, educational institutions and
                  verification providers.
                </li>
                <li>
                  From information generated during interviews, assessments and
                  communications with WGP or our clients.
                </li>
              </ul>

              <h3 id="cpn-use">
                <span className="n">4.</span> How We Use Candidate Data
              </h3>
              <p>We may use candidate data to:</p>
              <ul>
                <li>
                  Identify and contact you about suitable current or future
                  opportunities.
                </li>
                <li>
                  Assess your experience, qualifications, interests,
                  availability and potential fit.
                </li>
                <li>
                  Discuss roles, organisations, compensation, location, mobility
                  and other relevant considerations with you.
                </li>
                <li>
                  Prepare candidate summaries, shortlists and recruitment
                  materials.
                </li>
                <li>
                  Present or discuss your candidacy with a client after you have
                  authorised us to do so, or where you have otherwise authorised
                  the disclosure and it is permitted by law.
                </li>
                <li>
                  Arrange interviews, collect and communicate feedback, manage
                  offers and support placement or onboarding.
                </li>
                <li>
                  Conduct appropriate reference, qualification, identity,
                  employment or work-authorisation checks.
                </li>
                <li>
                  Maintain recruitment records, manage placements and provide
                  related services.
                </li>
                <li>
                  Comply with legal, regulatory and contractual requirements,
                  and manage disputes or claims.
                </li>
              </ul>

              <h3 id="cpn-sharing">
                <span className="n">5.</span> Sharing Candidate Data with
                Clients and Partners
              </h3>
              <p>
                Before presenting identifiable candidate information to a
                client, we will obtain your consent, unless you have already
                provided consent covering that presentation or an exception
                under the PDPA or other applicable law applies. We will limit
                any disclosure to information relevant to the opportunity and
                share it only with clients, authorised search or recruitment
                partners, service providers and other persons involved in the
                recruitment process, subject to confidentiality and purpose
                limitation.
              </p>
              <p>
                For cross-border assignments, your data may be shared with a
                client or authorised partner outside Singapore. The overseas
                transfer safeguards described in the General Privacy Policy will
                apply.
              </p>

              <h3 id="cpn-accuracy">
                <span className="n">6.</span> Accuracy and Candidate
                Responsibilities
              </h3>
              <p>
                You should provide information that is accurate, complete and
                not misleading, and inform us of material changes that may
                affect a recruitment process. You should not provide
                confidential information belonging to a current or former
                employer unless you are authorised to do so.
              </p>

              <h3 id="cpn-withdrawal">
                <span className="n">7.</span> Withdrawal, Access and Correction
              </h3>
              <p>
                You may withdraw consent, request access to your personal data,
                or request correction of errors or omissions by contacting{" "}
                <a href="mailto:privacy@whitegatepartners.sg">
                  privacy@whitegatepartners.sg
                </a>
                . Withdrawal may affect our ability to consider or represent you
                for opportunities, and we will explain the likely consequences
                before processing the request.
              </p>
              <p>
                We will generally respond to access or correction requests
                within thirty (30) calendar days, subject to identity
                verification, applicable exceptions and any extension permitted
                by law.
              </p>

              <h3 id="cpn-retention">
                <span className="n">8.</span> Retention of Candidate Data
              </h3>
              <p>
                Candidate records are generally reviewed for deletion or
                anonymisation within two (2) years of our last meaningful
                interaction. We may retain information for longer where there is
                an ongoing recruitment relationship, placement, guarantee
                period, contractual obligation, legal requirement, dispute or
                other legitimate business reason.
              </p>

              <h3 id="cpn-contact">
                <span className="n">9.</span> Contact
              </h3>
              <p>
                Questions, requests, complaints or feedback relating to this
                Notice or your personal data may be directed to:
              </p>
              <div className="legal-contact">
                <div className="role">Data Protection Officer</div>
                <p>
                  White Gate Partners Pte. Ltd.
                  <br />
                  <a href="mailto:privacy@whitegatepartners.sg">
                    privacy@whitegatepartners.sg
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
