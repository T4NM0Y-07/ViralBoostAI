import { ArrowLeft } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Terms() {
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
            data-ocid="terms.back.link"
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
                Terms &amp; Conditions
              </h1>
              <p className="text-white/40 text-sm">
                Effective Date: March 31, 2026
              </p>
            </div>

            <div className="space-y-10 text-white/70 leading-relaxed">
              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using ViralBoost AI (viralboost.ai), you agree
                  to be bound by these Terms &amp; Conditions. If you do not
                  agree to all of the terms and conditions set forth herein, you
                  may not use the Service. These terms apply to all visitors,
                  users, and others who access the Service.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  2. Description of Service
                </h2>
                <p>
                  ViralBoost AI is a free, AI-powered web application that helps
                  content creators and brands discover viral hashtags, generate
                  content topic ideas, analyze social media trends, and evaluate
                  the viral potential of videos. The core features are
                  accessible without registration. A session-based usage limit
                  applies, with the option to unlock additional generations by
                  watching an advertisement.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  3. Use License
                </h2>
                <p className="mb-3">
                  ViralBoost AI grants you a personal, non-exclusive,
                  non-transferable, revocable license to use the Service for
                  personal and non-commercial content creation purposes.
                </p>
                <p className="mb-3">You may NOT:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    Scrape, crawl, or systematically extract content or outputs
                    from the Service for commercial resale or redistribution
                  </li>
                  <li>
                    Attempt to reverse-engineer, decompile, or extract the
                    underlying AI prompts or algorithms
                  </li>
                  <li>
                    Use the Service to build a competing product or service
                  </li>
                  <li>
                    Automate requests to the Service in a manner that exceeds
                    normal human usage
                  </li>
                  <li>
                    Use the Service in any way that violates applicable local,
                    national, or international law
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  4. Disclaimer of Warranties
                </h2>
                <p>
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. ViralBoost AI does not warrant that the
                  Service will be uninterrupted, error-free, or that
                  AI-generated results will be accurate, complete, or suitable
                  for any specific purpose. All hashtags, topics, scores, and
                  recommendations generated by the AI are suggestions only and
                  should be evaluated by the user before use.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  5. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable law, TanSoft
                  Labs and Tanmoy Saha shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including but not limited to loss of revenue, loss of data, or
                  loss of business opportunity, arising out of or in connection
                  with your use of or inability to use the Service or any
                  AI-generated content. Your sole remedy for dissatisfaction
                  with the Service is to stop using it.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  6. Third-Party APIs
                </h2>
                <p>
                  ViralBoost AI relies on third-party APIs including Google
                  Gemini, Pollinations.ai, Piped API, YouTube oEmbed, and
                  noembed.com to deliver its features. We do not control the
                  availability, accuracy, or uptime of these services.
                  ViralBoost AI is not responsible for any interruption,
                  degradation, or failure of the Service caused by the
                  unavailability of third-party APIs. These services have their
                  own terms of service, which govern your indirect use of them
                  through ViralBoost AI.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  7. Advertising
                </h2>
                <p>
                  The Service displays advertisements served through Google
                  AdSense. These ads are selected and delivered automatically by
                  Google based on factors including your browsing behavior and
                  the content of the page. TanSoft Labs does not control the
                  content of advertisements displayed through AdSense and is not
                  responsible for any products, services, or claims made in
                  those advertisements. Ad revenue helps keep ViralBoost AI free
                  for all users.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  8. Intellectual Property
                </h2>
                <p className="mb-3">
                  The ViralBoost AI name, logo, design, interface, and branding
                  are the intellectual property of Tanmoy Saha / TanSoft Labs.
                  All rights reserved. You may not use our trademarks or
                  branding without prior written consent.
                </p>
                <p>
                  Content generated by the AI tools (hashtags, topic ideas,
                  video score reports, titles, descriptions) is provided for
                  your personal use. You are free to use AI-generated outputs in
                  your own social media content. TanSoft Labs makes no claim of
                  ownership over your generated results.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  9. Modifications
                </h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue the
                  Service or any part of it at any time without notice. We also
                  reserve the right to update these Terms &amp; Conditions at
                  any time. The updated terms will be effective upon posting to
                  this page with a revised &quot;Effective Date.&quot; Your
                  continued use of the Service after any modifications
                  constitutes acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  10. Governing Law
                </h2>
                <p>
                  These Terms &amp; Conditions shall be governed by and
                  construed in accordance with the laws of India, without regard
                  to its conflict of law provisions. Any disputes arising under
                  or in connection with these terms shall be subject to the
                  exclusive jurisdiction of the courts located in India.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-white text-xl mb-3">
                  11. Contact
                </h2>
                <p>
                  For questions or concerns about these Terms &amp; Conditions,
                  please reach out to us via Instagram:{" "}
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
