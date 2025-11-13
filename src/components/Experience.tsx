import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceType {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    skills: string[];
    date: string;
}

const ExperienceTimeline = [
    {
        id: 1,
        title: "NSF REU Research Fellow",
        company: "National Center for Supercomputing Applications (NCSA)",
        location: "Champaign, IL",
        description: "Architecting physics-informed neural networks and AI agents for gravitational wave detection and characterization.",
        skills: ['PyTorch Lightning', 'HPC Clusters/SLURM', 'Attention Mechanisms'],
        date: "May 2025 - Present",
    },
    {
        id: 2,
        title: "ML Research Intern - NCSA SPIN",
        company: "National Center for Supercomputing Applications (NCSA)",
        location: "Champaign, IL",
        description: "Engineering scalable machine learning pipelines for anomalous transient detection over the 10-year Legacy Survey of Space and Time.",
        skills: ['TensorFlow', 'PostgreSQL', 'AstroPy', 'Recurrent Neural Networks (RNNs)'],
        date: "Aug 2024 - Present"
    },
    {
        id: 3,
        title: "President",
        company: "Illinois Robotics in Space",
        location: "Champaign, IL",
        description: "Constructing autonomous rovers to navigate simulated lunar environments as part of the NASA Lunabotics Competition.",
        skills: ['C++', 'ROS2/Linux', 'SLAM', 'CAN Bus'],
        date: "Aug 2024 - Present"
    },
    {
        id: 4,
        title: "Electrical Captain",
        company: "FIRST Robotics Competition (FRC) Team 2554: The Warhawks",
        location: "Edison, NJ",
        description: "Designing wiring systems for industrial-sized FIRST robot; leading outreach efforts with international impact.",
        skills: ['Microcontrollers', 'PWM/CAN', 'I2C'],
        date: "Oct 2021 - Jun 2024",
    }
]

const Experience = () => {
    return (
        <div>
            <VerticalTimeline layout='1-column-left'>
                {ExperienceTimeline.map((element: ExperienceType) => {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            iconStyle={{ background: 'rgb(70, 6, 122)', color: '#fff' }}
                            contentStyle={{ background: 'rgb(70, 6, 122)', borderRadius: '20px', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{element.company} - {element.location}</h4>
                            <p className="vertical-timeline-element-description">{element.description}</p>
                            <div>
                                {element.skills.map((skill: string) => { return <span className='experience_skill_bubble'>{skill}</span>})}
                            </div>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    )
};

export default Experience;