import { AboutMeSection } from "./components/AboutMeSection";
// import { ContactSection } from "./components/ContactSection";
import { IntroduceSection } from "./components/IntroduceSection";
import { Navbar } from "./components/Navbar";
// import { ProjectSection } from "./components/ProjectSection";
// import { ServicesSection } from "./components/ServicesSection";
// import { SkillsSection } from "./components/SkillsSection";
import { useState, useEffect } from "react";

function App() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");

            let sectionId = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) {
                    sectionId = section.getAttribute("id");
                }
            });

            setActiveSection(sectionId);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto scroll-smooth">
            <Navbar activeSection={activeSection} />
            <IntroduceSection />
            <AboutMeSection />
            {/* <ServicesSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection /> */}
        </div>
    );
}

export default App;