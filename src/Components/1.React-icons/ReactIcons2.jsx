import Icon from "./Icon";

import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { SiInstagram } from 'react-icons/si'

import "./ReactIcons2.css";

function App() {
  return (
    <div>
      <ul>
        <Icon icon={<FaWhatsapp />} />

        <Icon icon={<GrTwitter />} />

        <Icon icon={<SiInstagram />} />

        <Icon icon={<FaLinkedinIn />} />
      </ul>
    </div>
  );
}

export default App;
