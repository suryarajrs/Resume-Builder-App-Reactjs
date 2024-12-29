import { FaAngleLeft, FaAngleRight, FaAward, FaBrain, FaFolderOpen, FaGraduationCap, FaLink, FaSuitcase } from "react-icons/fa6";
import './Form.css';
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


function FormTitle({ currentIndex, handleShowOverlay, goToSection }) {
  const available  = useFormStore((state) => state.sections.available);
  const added  = useFormStore((state) => state.sections.added);
  const currentSection = added[currentIndex];

    const showNextSection = () => {
    if (available.length && currentIndex === added.length - 1) {
      handleShowOverlay();
    } else {
      goToSection(currentIndex + 1);
    };
  }

  const showPrevSection = () => {
    goToSection(currentIndex - 1);
  }

  

  return (
    <div className="form-title-div" >
      <h1 >{ sections[currentSection].name }</h1>
      <div className="next-btn-div" >
        { (currentIndex >= 1) && <button  type="button" className="prev-btn"
            onClick={showPrevSection}><FaAngleLeft /> Back</button> }
        { (currentIndex < added.length -1 || available.length > 0) && <button  type="button" className="next-btn"
            onClick={showNextSection}>Next <FaAngleRight /></button> }
      </div>
    </div>
  );
}


function Form(props) {
  const added = useFormStore((state) => state.sections.added);

  return (
    <>
      <div className="form-container" >
        <FormTitle {...props} />
        <form className="form">
          {sections[added[props.currentIndex]].comp}
        </form>
      </div>
    </>
  );
}

export default Form;