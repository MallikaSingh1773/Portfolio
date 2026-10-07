import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, Navbar, ScrollProgress } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects, Experience } from "@/components/portfolio/Work";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Mallika Singh | Data Engineer & AI Engineer";
const description =
  "Portfolio of Mallika Singh, a Data Engineer and AI Engineer working with Python, SQL, ETL pipelines, RAG, LangChain, and LangGraph, with a strong Java Spring Boot backend foundation.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mallika Singh",
          jobTitle: "Data Engineer, AI Engineer, Java Backend Developer",
          email: "mailto:singhmallika1773@gmail.com",
          alumniOf: "Vellore Institute of Technology, Andhra Pradesh",
          sameAs: [
            "https://github.com/MallikaSingh1773",
            "https://www.linkedin.com/in/mallikasingh05",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
