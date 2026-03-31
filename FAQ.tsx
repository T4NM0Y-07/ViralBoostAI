import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const faqSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        q: "What is ViralBoost AI?",
        a: "ViralBoost AI is a free, AI-powered toolkit designed to help content creators and brands dominate social media. It helps you discover high-reach viral hashtags, generate compelling content topic ideas, track real-time trends, and analyze the viral potential of your videos — all in one place.",
      },
      {
        q: "How do I use the hashtag generator?",
        a: "Simply type a topic or keyword into the Hashtag Search tool, select your target social media platform (YouTube, Instagram, TikTok, etc.), and click Generate. Within seconds, you'll receive a ranked list of viral hashtags sorted by estimated reach, each with a one-click copy button.",
      },
      {
        q: "Is ViralBoost AI really free?",
        a: "Yes! The core features are completely free to use. Every session starts with 2 free AI generations. If you need more, you can unlock additional generations by watching a short advertisement. There are no subscriptions or hidden costs.",
      },
      {
        q: "Do I need to create an account?",
        a: "No account or registration is required. ViralBoost AI offers instant access — just open the site and start generating. Your usage counter is stored locally in your browser, so your data stays private.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Tools",
    items: [
      {
        q: "How does the Video Viral Score Analyzer work?",
        a: "Paste any YouTube, TikTok, Instagram, Facebook, or Twitter/X video link into the analyzer. The tool fetches the real video metadata (title, description, tags) using public APIs, then sends it to Google Gemini AI for deep analysis. You receive an overall viral score, an 8-category breakdown, a prioritized fix list, and an Exact Solutions section with an AI-optimized title, description, and hashtags — all tailored to your specific video.",
      },
      {
        q: "What social media platforms are supported?",
        a: "ViralBoost AI supports all major platforms including YouTube, Instagram, TikTok, Facebook, Twitter/X, LinkedIn, and Pinterest. You can select your target platform when using the Hashtag Search and Topic Generator tools, and the AI tailors results for each platform's unique algorithm and audience behavior.",
      },
      {
        q: "How accurate are the AI-generated hashtags?",
        a: "Our hashtags are generated using Google Gemini 1.5 Flash combined with trend data from Pollinations.ai. The AI is trained on current social media patterns and provides hashtags ranked by estimated reach. While no tool can guarantee virality, these hashtags are based on real platform trends and outperform random hashtag selection.",
      },
      {
        q: "What is the Trending Now sidebar?",
        a: "The Trending Now sidebar (visible on desktop) shows a real-time snapshot of popular hashtags and emerging topics across social platforms. It updates automatically and gives you instant inspiration without needing to run a full search.",
      },
      {
        q: "Can I copy all hashtags at once?",
        a: "Yes! After generating hashtags, there is a 'Copy All' button that copies the entire list to your clipboard in one click. You can also click individual hashtags to copy them one by one, making it easy to select only the ones you want.",
      },
    ],
  },
  {
    id: "limits",
    title: "Limits & Unlocking",
    items: [
      {
        q: "Why did I hit a usage limit?",
        a: "To keep ViralBoost AI free and sustainable, each browser session includes 2 free AI generations. This limit helps us manage API costs while keeping the core experience free for everyone. Once you've used your 2 free generations, you'll see the unlock prompt.",
      },
      {
        q: "How do I unlock more generations?",
        a: "When you hit the limit, a prompt will appear asking you to 'Watch Ad to Unlock.' Clicking it will display a short advertisement for approximately 45 seconds. After the countdown completes, you'll receive 1 bonus generation to continue using the tools.",
      },
      {
        q: "Does the usage limit reset?",
        a: "Yes, the usage counter is stored in your browser's localStorage and resets when you start a new browser session (closing and reopening the browser, or clearing site data). Each new session gives you 2 fresh free generations.",
      },
      {
        q: "What exactly happens when I watch the ad?",
        a: "When you click 'Watch Ad to Unlock,' a simulated ad unlock experience begins with a 45-second timer. This process helps support the cost of running AI-powered tools for free. Once the timer completes, your bonus generation is immediately unlocked and you can continue using all tools without interruption.",
      },
    ],
  },
];

export function FAQ() {
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
            data-ocid="faq.back.link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          {/* Hero */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-card glow-mixed mb-6">
              <HelpCircle className="w-6 h-6 text-purple-400" />
            </div>
            <p className="gradient-text text-xs font-semibold uppercase tracking-widest mb-3">
              Help Center
            </p>
            <h1 className="font-display font-bold text-white text-4xl section-heading mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
              Everything you need to know about ViralBoost AI. Can't find an
              answer?{" "}
              <a
                href="https://www.instagram.com/tansoft_labs?igsh=MXkxYWI2bWF6OHlnOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Contact us on Instagram
              </a>
              .
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {faqSections.map((section) => (
              <div key={section.id}>
                <h2 className="font-display font-semibold text-white text-lg mb-4 flex items-center gap-3">
                  <span className="w-1 h-5 rounded-full animated-border inline-block" />
                  {section.title}
                </h2>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, idx) => (
                      <AccordionItem
                        key={item.q}
                        value={`${section.id}-${idx}`}
                        className="border-white/8 px-6"
                        data-ocid={`faq.${section.id}.item.${idx + 1}`}
                      >
                        <AccordionTrigger className="text-white/85 hover:text-white font-medium text-sm text-left py-5 hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/55 text-sm leading-relaxed pb-5">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
