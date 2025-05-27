
import PageLayout from "@/components/common/PageLayout";
import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import CompanyHistory from "@/components/about/CompanyHistory";
import OurTeam from "@/components/about/OurTeam";

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHero />
      <OurMission />
      <CompanyHistory />
<OurTeam 
  teamMembers={[
    {
      name: "Mayur Bodkhe",
      role: "CEO & Founder",
      bio: "Passionate tech enthusiast with expertise in IT solutions and business strategy. Leads TVM IT Solutions with a vision to transform businesses through innovative technology.",
      image: "/lovable-uploads/74ea8c25-477b-4878-8ec5-93284f92d85b.png",
      email: "mayurbodkhe7918@gmail.com",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Vijay Kakde",
      role: "Chief Financial Officer",
      bio: "Strategic financial leader with a strong background in technology sector finance. Oversees financial planning, risk management, and sustainable growth initiatives at TVM IT Solutions.",
      image: "/lovable-uploads/03d8a4a3-9ab6-4b53-b67c-48f1133fb74f.png",
      email: "cfo@tvmitsolutions.com",
      socialLinks: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Tejas Kale",
      role: "Chief Technology Officer (CTO)",
      bio: "CTO at TVM IT Solutions with strong expertise in Android development, AI integration, and scalable product design. Passionate about solving real-world problems through mobile technology and prompt engineering.",
      image: "/img/cto.jpg", // Replace with actual image path
      email: "cse.tejas@gmail.com",
      socialLinks: {
        github: "https://github.com/TG404-JV",
        linkedin: "https://www.linkedin.com/in/tejas-kale-65419a24b",
        portfolio: "https://tejasportfolio-git-main-tejas-kales-projects.vercel.app/"
      }
    }
  ]}
/>
    </PageLayout>
  );
};

export default AboutPage;
