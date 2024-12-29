import { FaAward, FaBrain, FaFolderOpen, FaGraduationCap, FaLink, FaSuitcase } from "react-icons/fa6";
import useFormStore from "../../store";
import Personal from "./FormSections/Personal";
import Links from "./FormSections/Links";
import Skills from "./FormSections/Skills";
import WorkExp from "./FormSections/WorkExp";
import Projects from "./FormSections/Projects";
import Education from "./FormSections/Education";
import Interests from "./FormSections/Interests";

const sections = {
  personal: {
    id: 0,
    name: 'Personal Details',
    comp: <Personal />,
  },
  links: {
    id: 1,
    name: 'Links',
    icon: (<FaLink />),
    comp: <Links />,
  },
  skills: {
    id: 2,
    name: 'Technical Skills',
    icon: (<FaBrain />),
    comp: <Skills />,
  },
  work: {
    id:3,
    name: 'Work Experience',
    icon: (<FaSuitcase />),
    comp: <WorkExp />,
  },
  projects: {
    id: 4,
    name: 'Projects',
    icon: (<FaFolderOpen />),
    comp: <Projects />
  },
  education: {
    id: 5,
    name: 'Education',
    icon: (<FaGraduationCap />),
    comp: <Education />,
  },
  certInt: {
    id: 6,
    name: 'Certifications, Skills & Interests',
    icon: (<FaAward />),
    comp: <Interests />,
  },
}

function Card({ sectionKey, handleClick }) {
  return (
    <button type="button" className="select-card" onClick={handleClick}>
      <div className="select-card-top" style={{backgroundColor:'grey'}}>
        {sections[sectionKey].icon}
        <h5>{sections[sectionKey].name}</h5>
      </div>
      <div className="select-card-desc"></div>
    </button>
  );
}

function SectionSelect({ handleCloseOverlay, setShowOverlay, goToSection, currentIndex }) {
  const available = useFormStore((state) => state.sections.available);


  const sectionArrays = useFormStore((state) => state.sections);
const setSectionArrays = useFormStore((state) => state.setSections);


  const handleSectionAdd = (sectionKey) => {
    const newAvailable = sectionArrays.available.filter(item => item !== sectionKey)
    const newAdded = [...sectionArrays.added, sectionKey];
    setSectionArrays({
      available: newAvailable,
      added: newAdded,
    });
    setShowOverlay(false);
    goToSection(currentIndex + 1);
  }

 
  const cards = available.map(sectionKey => (
    <Card sectionKey={sectionKey} key={sectionKey} handleClick={() => {handleSectionAdd(sectionKey)}}/>
  ));

  return (
    <div className="select-overlay" onClick={handleCloseOverlay}>
      <div className="select-container">
        <div className="select-top">
          <h3>Add Section</h3>
          <button type="button" className="select-close-btn">x</button>
        </div>
        <div className="select-list" >
          {cards}
        </div>
      </div>
    </div>
  );
}

export default SectionSelect;