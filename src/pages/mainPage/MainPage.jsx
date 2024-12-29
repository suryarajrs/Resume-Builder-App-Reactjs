import { useEffect, useState } from "react";
import SidebarFullScreen from "../../Components/Sidebar/SidebarFullScreen.jsx";
import Form from "../../Components/Form/Form.jsx";
import './MainPage.css';
import SectionSelect from "../../Components/Form/SectionSelect";
import ResumeViewer from "../../Components/ResumePdf/ResumePdf";
import LivePreview from "../../Components/ResumePdf/LivePreview.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import {useNavigate} from "react-router-dom"

function Editor({ currentIndex, showPreview, showLivePreview, handleShowOverlay, goToSection }) {
  if (showPreview) {
    return null;
  }
  return (
    <>
      <Form currentIndex={currentIndex} handleShowOverlay={handleShowOverlay} goToSection={goToSection} />
      {showLivePreview && <LivePreview />}
    </>
  );
}

function MainPage() {
  let navigate=useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSelectOverlay, setShowOverlay] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [showPreview, setShowPreview] = useState(false); // for preview & download

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowOverlay = () => {
    setShowOverlay(true);
  }

  const handleCloseOverlay = (e) => {
    const isOverlay = e.target.classList.contains('select-overlay');
    const isCloseBtn = e.target.classList.contains('select-close-btn');
    if (!(isCloseBtn || isOverlay)) return;
    setShowOverlay(false);
  }

  const goToSection = (index) => {
    setCurrentIndex(index);
  }

  const toggleEditMode = () => {
    setShowLivePreview(!showLivePreview);
  };

  const togglePreviewOn = () => {
    setShowPreview(!showPreview);
  };

  return (


    
    <div className={showLivePreview ? 'main-container dual-mode' : 'main-container'}>

      {windowWidth < 1185?(<Sidebar goToSection={goToSection} toggleSideBySide={toggleEditMode} togglePreviewOn={togglePreviewOn}
        showPreview={showPreview} showLivePreview={showLivePreview} currentIndex={currentIndex} />):(<SidebarFullScreen goToSection={goToSection} toggleSideBySide={toggleEditMode} togglePreviewOn={togglePreviewOn}
          showPreview={showPreview} showLivePreview={showLivePreview} currentIndex={currentIndex} />)}

      <Editor currentIndex={currentIndex} handleShowOverlay={handleShowOverlay} showPreview={showPreview}
        showLivePreview={showLivePreview} goToSection={goToSection} />

      {showSelectOverlay && <SectionSelect handleCloseOverlay={handleCloseOverlay} setShowOverlay={setShowOverlay}
        goToSection={goToSection} currentIndex={currentIndex} />}

      {showPreview && <ResumeViewer />}

    </div>
  )
}

export default MainPage;