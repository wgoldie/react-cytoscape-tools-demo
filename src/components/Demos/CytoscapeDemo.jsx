import React from 'react';
import Cytoscape from 'react-cytoscape-tools';
import { Mat } from './style';
import defaultJSON from './default';

class CytoscapeDemo extends React.Component {
  render () {
    return (
      <Mat>
        <Cytoscape
          cyInitJSON={defaultJSON}
          style={{ 'backgroundColor': '#111', height: '100%', width: '100%' }}
        />
      </Mat>
    );
  }
}

CytoscapeDemo.path = 'cytoscape';
CytoscapeDemo.title = '<Cytoscape>';

export default CytoscapeDemo;
