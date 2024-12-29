import { FaCircle, FaEye, FaAngleLeft } from "react-icons/fa6";
import './sidebarFullScreen.css';
import FillAndClearFullScreen from "./fillAndClearFullScreen";
import LayoutControllerFulllScreen from "./LayoutControllerFullScreen";
import { useState } from "react";

function LiveBtnFullScreen({ showLivePreview, toggleSideBySide }) {
  return (
    <>
      <div className="mode-btn-div">
        <button type="button" className="mode-btn" onClick={toggleSideBySide}>
          { showLivePreview
            ? <><FaCircle style={{marginRight:'5px'}} ></FaCircle>  Editor Only </> 
            : (<> <FaCircle className="dual-icon-1"></FaCircle><FaCircle className="dual-icon-2"></FaCircle> { showLivePreview ? 'Editor Only' : 'Live Preview' } </>)
          }
        </button>
        <div className="sidebar-tooltip-fullscreen">{ showLivePreview ? 'Edit Only' : 'Live Preview' }</div>
      </div>
    </>
  );
}

function PrevBtn({ showPreview, togglePreviewOn }) {
  return (
    <div className="prev-btn-div">
      <button type="button" className="preview-btn" onClick={togglePreviewOn}>
        { showPreview ? <><FaAngleLeft></FaAngleLeft> Go Back</> : <><FaEye></FaEye>  View PDF</>  }
      </button>
      <div className="sidebar-tooltip-fullscreen">{ showPreview ? 'Go Back' : 'Preview PDF & Download' }</div>
    </div>
  )
}

function SidebarFullScreen({ goToSection, toggleSideBySide, togglePreviewOn, showPreview, showLivePreview, currentIndex }) {
  const [ editMode, setEditMode ] = useState(false);

  return (
    <div className="sidebarfullscreen"  >
      
      { !showPreview && <LayoutControllerFulllScreen goToSection={goToSection} currentIndex={currentIndex}
        editMode={editMode} setEditMode={setEditMode} /> }

      { !showPreview && <LiveBtnFullScreen showLivePreview={showLivePreview} toggleSideBySide={toggleSideBySide} /> }

      <PrevBtn showPreview={showPreview} togglePreviewOn={togglePreviewOn} />
      { !showPreview && <FillAndClearFullScreen goToSection={goToSection}/> }

    </div>
  );
}

export default SidebarFullScreen;