import "../styles/Projects.css";
import Card from "./Card";

const projectsData = [
    {
        id: 1,
        title: "Social Media App for Anti-Socials",
        details:
            "A social platform designed to prioritize meaningful, close-knit connections over the overwhelming noise and algorithms of traditional social media.",
        projectUrl: "https://www.behance.net/gallery/222058975/The-Anti-Social-Social-Media-App-Memphis",
        imageUrl: "/assets/memphis3.png",
        color: "#416e8b",
        rotation: -2
    },
    {
        id: 2,
        title: "Backstreet Boys Fan Page",
        details:
            "A playful fan page celebrating the Backstreet Boys with a focus on nostalgia, visual rhythm, and simple navigation.",
        projectUrl: "https://www.behance.net/gallery/222886827/Backstreet-Boys-Fan-page-Web-Design",
        imageUrl: "/assets/backstreet.png",
        color: "#AAABA8",
        rotation: 2
    },
    {
        id: 3,
        title: "MailBox with Reduced Cognitive Load",
        details: "A social platform designed to prioritize meaningful, close-knit connections over the overwhelming noise and algorithms of traditional social media. The app features a minimalist interface that eliminates distractions and focuses instead on direct intimacy with family and close friends.",
        projectUrl: "https://www.behance.net/gallery/242958967/Mailbox-with-Reduced-Cognitive-Load",
        imageUrl: "/assets/mailbox.png",
        color: "#569786",
        rotation: -2
    }
];

const Projects = () => {
    return (
        <div className="projects">

            <div className="project-list">
                {projectsData.map((project) => (
                    <Card key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
