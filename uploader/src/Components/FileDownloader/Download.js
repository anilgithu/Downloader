import Axios from "axios";
import { FileDownload } from "js-file-download";

export const Download = (e) => {
  //e.preventDefault();
  Axios({
    url: "https//localhost:8000",

    method: "GET",
    // responseType: "bolb",
  }).then((res) => {
    FileDownload(res.data, "/Server/public");
  });

  return <button onClick={(e) => Download(e)}>Download</button>;
};
