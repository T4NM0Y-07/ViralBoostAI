import { ArrowLeft } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="animate-orb absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="animate-orb-slow absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-400/6 blur-[140px]" />
        <div
          className="animate-orb absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[80px]"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="animate-orb-slow absolute top-[60%] left-[20%] w-[250px] h-[250px] rounded-full bg-cyan-300/4 blur-[60px]"
          style={{ animationDelay: "-14s" }}
        />
      </div>

      <Navbar />

      <div className="relative z-10 pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm mb-8"
            data-ocid="privacy.back.link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="mb-10">
              <p className="gradient-text text-xs font-semibold uppercase tracking-widest mb-3">
                Legal
              </p>
              <h1 className="font-display font-bold text-white text-4xl section-heading mb-3">
                Privacy Policy
              </h1>
              <p className="text-white/40 text-sm">
                Effective Date: March 31, 2026
              </p>
            </div>

            <div className="space-y-10 text-white/70 leading-relaxed">
              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  1. Introduction
                </h2>
                <p className="mb-3">
                  Welcome to ViralBoost AI, operated by Tanmoy Saha under the
                  brand TanSoft Labs. This Privacy Policy explains how we handle
                  information when you use our web application at viralboost.ai
                  (the &quot;Service&quot;). We are committed to protecting your
                  privacy and being transparent about our data practices.
                </p>
                <p>
                  By using ViralBoost AI, you agree to the practices described
                  in this policy. If you do not agree with this policy, please
                  discontinue use of the Service.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  2. Information We Collect
                </h2>
                <p className="mb-3">
                  ViralBoost AI is designed with a privacy-first approach. We do
                  not require account registration, and no personal information
                  is required to use the core features of the Service.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong className="text-white/90">
                      Usage Data (Local Storage):
                    </strong>{" "}
                    We store a session usage counter in your browser&apos;s
                    localStorage to manage the free generation limit. This data
                    never leaves your device.
                  </li>
                  <li>
                    <strong className="text-white/90">Search Queries:</strong>{" "}
                    When you use the hashtag generator, topic generator, or
                    video analyzer, the text you enter is sent to third-party AI
                    services (Google Gemini, Pollinations.ai) for processing. We
                    do not store these queries on our own servers.
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Newsletter Email (Optional):
                    </strong>{" "}
                    If you voluntarily provide your email address to subscribe
                    to our newsletter in the footer, we collect and store that
                    email address for the purpose of sending you content
                    updates.
                  </li>
                  <li>
                    <strong className="text-white/90">Advertising Data:</strong>{" "}
                    Google AdSense may automatically collect information about
                    your browser, device, and browsing behavior through cookies
                    and similar technologies.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  3. How We Use Information
                </h2>
                <p className="mb-3">
                  Any information collected is used solely for the following
                  purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    To deliver the core AI-powered features of the Service
                    (hashtag generation, topic ideas, video analysis)
                  </li>
                  <li>
                    To enforce the free usage limit per session via localStorage
                  </li>
                  <li>
                    To send the newsletter to users who have opted in (email
                    subscribers only)
                  </li>
                  <li>
                    To serve relevant advertisements through Google AdSense
                  </li>
                  <li>
                    To improve the performance and reliability of the Service
                    through anonymous, aggregated usage patterns
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  4. Third-Party Services
                </h2>
                <p className="mb-3">
                  ViralBoost AI integrates with the following third-party
                  services, each governed by their own privacy policies:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong className="text-white/90">
                      Google AdSense (Google LLC):
                    </strong>{" "}
                    Serves advertisements and may use cookies, web beacons, and
                    similar tracking technologies to personalize ads based on
                    your browsing history. See Google&apos;s Privacy Policy at{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      policies.google.com/privacy
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Google Gemini API (Google LLC):
                    </strong>{" "}
                    Processes your text queries to generate AI-powered content
                    suggestions. Your inputs are sent to Google&apos;s servers
                    for inference. Subject to Google&apos;s AI Terms of Service.
                  </li>
                  <li>
                    <strong className="text-white/90">Pollinations.ai:</strong>{" "}
                    An open-source AI generation platform used as a secondary
                    provider. Text queries are sent to their servers for
                    processing.
                  </li>
                  <li>
                    <strong className="text-white/90">Piped API:</strong> A
                    free, privacy-respecting YouTube frontend API used to fetch
                    video metadata (title, description, tags) for the Video
                    Viral Score Analyzer. No personal data is transmitted.
                  </li>
                  <li>
                    <strong className="text-white/90">
                      noembed.com / YouTube oEmbed:
                    </strong>{" "}
                    Used to retrieve publicly available video metadata for the
                    analyzer.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  5. Cookies & Local Storage
                </h2>
                <p className="mb-3">
                  ViralBoost AI itself uses your browser&apos;s{" "}
                  <strong className="text-white/90">localStorage</strong> (not
                  cookies) to store a single usage counter key. This data is
                  stored locally on your device, is never transmitted to our
                  servers, and can be cleared at any time by clearing your
                  browser data.
                </p>
                <p>
                  <strong className="text-white/90">Google AdSense</strong> may
                  set cookies on your device to serve personalized
                  advertisements. These cookies are governed by Google&apos;s
                  cookie policy. You can opt out of personalized advertising by
                  visiting{" "}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    adssettings.google.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  6. Children&apos;s Privacy
                </h2>
                <p>
                  ViralBoost AI is not directed at children under the age of 13.
                  We do not knowingly collect personal information from
                  children. If you believe that a child has provided personal
                  information through the Service, please contact us immediately
                  and we will take steps to remove that information.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  7. Your Rights
                </h2>
                <p className="mb-3">
                  You have the following rights regarding your data:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong className="text-white/90">
                      Newsletter Opt-Out:
                    </strong>{" "}
                    If you have subscribed to our newsletter, you may
                    unsubscribe at any time by contacting us via Instagram
                    @tansoft_labs.
                  </li>
                  <li>
                    <strong className="text-white/90">Clear Local Data:</strong>{" "}
                    You can reset your usage counter and clear all locally
                    stored data by opening your browser settings and clearing
                    site data for viralboost.ai.
                  </li>
                  <li>
                    <strong className="text-white/90">
                      Ad Personalization:
                    </strong>{" "}
                    You can opt out of personalized Google ads at{" "}
                    <a
                      href="https://adssettings.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      adssettings.google.com
                    </a>
                    .
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technologies, or legal requirements.
                  When we make changes, we will update the &quot;Effective
                  Date&quot; at the top of this page. We encourage you to review
                  this policy periodically. Continued use of the Service after
                  any changes constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  9. Contact
                </h2>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  via Instagram:{" "}
                  <a
                    href="https://www.instagram.com/tansoft_labs?igsh=MXkxYWI2bWF6OHlnOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    @tansoft_labs
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
