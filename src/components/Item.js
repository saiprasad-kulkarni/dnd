import React, { Component } from 'react'
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        return props.item;
    },
    endDrag(props, monitor, Component) {
        if (!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.item.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Item extends Component {
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <div style={{ padding: '18px', border: '1px solid grey', margin: '20px', display: 'inline-block', opacity }}>
                <span>{item.name}</span>
            </div>
        )

        // return (
        //     <div style={{ padding: '18px', border: '1px solid grey', margin: '20px', display: 'inline-block' }}>
        //         {this.props.item.name}
        //     </div>
        // )
    }
}

export default DragSource('item', itemSource, collect)(Item);
