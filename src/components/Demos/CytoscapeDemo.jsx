import React from 'react';
import Cytoscape from 'react-cytoscape-tools';

const defaultJSON = {
  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    { data: { id: 'c' } },
    { data: { id: 'd' } },
    { data: { source: 'a', target: 'c' } },
    { data: { source: 'b', target: 'c' } },
    { data: { source: 'c', target: 'd' } },
  ],
  layout: {
    name: 'breadthfirst',
  },
};

class CytoscapeDemo extends React.Component {
  render () {
    return (
      <Cytoscape
        cyInitJSON={defaultJSON}
        style={{ height: '100%', width: '100%' }}
      /> 
    );
  }
}

CytoscapeDemo.path = 'cytoscape';
CytoscapeDemo.title = '<Cytoscape>';

export default CytoscapeDemo;
