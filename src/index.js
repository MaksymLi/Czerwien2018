import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Baner from './baner.js';
import PanelLewy from './panel-lewy.js';
import PanelPrawy from './panel-prawy.js';
import PanelDolny from './panel-dolny.js';
import Footer from './footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Baner/>
    <PanelLewy />
    <PanelPrawy />
    <PanelDolny />
    <Footer />
  </>
);