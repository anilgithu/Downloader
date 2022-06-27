import { useState } from "react";
import { FileUploader } from "./Components/FileUploader/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Preview } from "./Components/Preview/index";
import { Download } from "./Components/FileDownloader/Download";

function App() {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };

  return (
    <>
      <div className="App">
        <FileUploader onSuccess={onSuccess} />
        <Preview files={files} />
        <ToastContainer />
        <Download />
      </div>
    </>
  );
}

export default App;
