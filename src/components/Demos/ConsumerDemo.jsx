import React from 'react';
import {
  CytoscapeGate,
  CytoscapeContext,
  CytoscapeView,
  CytoscapeProvider
} from 'react-cytoscape-tools';

import styled from 'styled-components';
import { Mat, AddButton, SourceButton } from './style';
import defaultJSON from './default';
import uuidv4 from 'uuid/v4';

const GraphStateWindow = styled.code`
font-family: Consolas, Courier, monospace;
display: block;
color: #fff;
background: rgba(1,1,1,0.25);
white-space: pre-line;
white-space: pre-wrap;
overflow: scroll;
height: 100%;
width: 100%;
`;

class ConsumerDemo extends React.Component {
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
        <Mat half>
          <AddButton
            role="button"
            onClick={this.addNode}
          >
            Add node
          </AddButton>
          <CytoscapeView
            cyInitJSON={defaultJSON}
            cyJSON={this.state.cyJSON}
            style={{ 'backgroundColor': '#111', height: '100%', width: '100%' }}
          >
            <SourceButton
              href="https://github.com/wgoldie/react-cytoscape-tools-demo/blob/master/src/components/Demos/ConsumerDemo.jsx"
            />
          </CytoscapeView>
        </Mat>
        <Mat half>
          <GraphStateWindow>
            <CytoscapeGate>
              <CytoscapeContext.Consumer>
                {
                  ({ cy }) => JSON.stringify(cy.json(), null, 2)
                }
              </CytoscapeContext.Consumer>
            </CytoscapeGate>
          </GraphStateWindow>
        </Mat>
      </CytoscapeProvider>
    );
  }
}

ConsumerDemo.path = 'consumer';
ConsumerDemo.title = 'Consuming Cytoscape state with <CytoscapeContext.Consumer>';

export default ConsumerDemo;
