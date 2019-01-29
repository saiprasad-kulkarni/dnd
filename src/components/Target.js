import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class Target extends Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        const backgroundColor = hovered ? 'darkgrey' : 'white';

        return connectDropTarget(
            <div style={{ width: '70%', border: '1px solid grey', margin: '10px' }}>
                <div>
                    <h5 style={{ backgroundColor: '#e2e2e2', margin: '0', padding: '5px', textAlign: 'left' }}>Drawing Palette</h5>
                    <div style={{ border: '1px dashed grey', margin: '20px', minHeight: '200px', height: 'auto', backgroundColor }}>

                    </div>
                </div>
            </div>
        )
    }
}

export default DropTarget('item', {}, collect)(Target);