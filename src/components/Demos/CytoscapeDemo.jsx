import React from 'react';
import Cytoscape from 'react-cytoscape-tools';
import { Mat, SourceButton } from './style';
import defaultJSON from './default';

class CytoscapeDemo extends React.Component {
  render () {
    return (
      <Mat>
        <Cytoscape
          cyInitJSON={defaultJSON}
          style={{ 'backgroundColor': '#111', height: '100%', width: '100%' }}
        >
          <SourceButton
            href="https://github.com/wgoldie/react-cytoscape-tools-demo/blob/master/src/components/Demos/CytoscapeDemo.jsx"
          />
        </Cytoscape> 
      </Mat>
    );
  }
}

CytoscapeDemo.path = 'cytoscape';
CytoscapeDemo.title = '<Cytoscape>';

export default CytoscapeDemo;
