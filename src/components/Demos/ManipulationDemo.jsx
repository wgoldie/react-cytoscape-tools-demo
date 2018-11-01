import React from 'react';
import { CytoscapeView, CytoscapeProvider } from 'react-cytoscape-tools';
import styled from 'styled-components';
import { Mat } from './style';
import defaultJSON from './default';
import uuidv4 from 'uuid/v4';

const AddButton = styled.button`
display: absolute;
left: 0;
right: 0;
`;

class Manipulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cyJSON: defaultJSON, lastNode: 'd' };
  }

  addNode = () => {
    const { cyJSON, lastNode } = this.state;
    const nextNode = uuidv4();
    const newElements = [
      { group: 'nodes', data: { id: nextNode } },
      { group: 'edges', data: { source: lastNode, target: nextNode } },
    ];

    this.setState({
      lastNode: nextNode,
      cyJSON: {
        ...cyJSON,
        elements: [
          ...newElements,
          ...cyJSON.elements,
        ]
      },
    });
  }

  render () {
    return (
      <CytoscapeProvider>
        <Mat>
          <CytoscapeView
            cyInitJSON={defaultJSON}
            cyJSON={this.state.cyJSON}
            style={{ 'backgroundColor': '#111', height: '100%', width: '100%' }}
          >
            <AddButton
              role="button"
              onClick={this.addNode}
            >
              Add node
            </AddButton>
          </CytoscapeView>
        </Mat>
      </CytoscapeProvider>
    );
  }
}

Manipulation.path = 'manipulation';
Manipulation.title = 'Manipulation with <CytoscapeView>';

export default Manipulation;
