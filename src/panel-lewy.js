import menu from './images/menu.jpg'
import './styles/panel-lewy.css';

export default function PanelLewy(){
  return(
    <section>
      <img
        src={menu}
        alt="Nasze danie"
      />
    </section>
  );
};