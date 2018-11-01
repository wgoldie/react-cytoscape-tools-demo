import React from 'react';
import { CytoscapeView, CytoscapeProvider } from 'react-cytoscape-tools';
import styled from 'styled-components';
import { Mat, SourceButton, AddButton } from './style';
import defaultJSON from './default';
import uuidv4 from 'uuid/v4';

class Manipulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cyJSON: defaultJSON, lastNode: 'd', lastPosition: 0 };
  }

  addNode = () => {
    const { cyJSON, lastNode, lastPosition } = this.state;
    const nextNode = uuidv4();
    const newNode = {
      data: { id: nextNode },
      position: {
        x: 500 + (0.5 - (lastPosition % 2)) * 100,
        y: 200 + lastPosition * 40
      }
    };
    const newEdge = { data: { source: lastNode, target: nextNode } };

    this.setState({
      lastNode: nextNode,
      cyJSON: {
        ...cyJSON,
        elements: [
          ...cyJSON.elements,
          newNode,
          newEdge
        ],
      },
      lastPosition: lastPosition + 1,
    });
  }

  render () {
    return (
      <CytoscapeProvider>
        <Mat>
          <CytoscapeView
            cyInitJSON={defaultJSON}
            cyJSON={this.state.cyJSON}
            style={{
              'backgroundColor': '#111',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%'
            }}
          >
            <AddButton
              role="button"
              onClick={this.addNode}
            >
              Add node
            </AddButton>
            <SourceButton
              href="https://github.com/wgoldie/react-cytoscape-tools-demo/blob/master/src/components/Demos/ManipulationDemo.jsx"
            />
          </CytoscapeView>
        </Mat>
      </CytoscapeProvider>
    );
  }
}

Manipulation.path = 'manipulation';
Manipulation.title = 'Manipulation with <CytoscapeView>';

export default Manipulation;
