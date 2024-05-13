const lista = [
  {id: 1, text: 'Obiady od 40 zł'},
  {id: 2, text: 'Przekąski od 10 zł'},
  {id: 3, text: 'Kolacje od 20 zł'}
]
const elementy = lista.map(elementListy =>
  <li key={elementListy.id}>
    {elementListy.text}
  </li>
);

export default function PanelPrawy(){
  return(
    <aside>
      <h4>U nas dobrze zjesz!</h4>
      <ul>
        {elementy}
      </ul> 
    </aside>
  );
};
