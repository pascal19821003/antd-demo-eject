import React, { ReactElement, ReactNode, useState } from 'react'

export default function Accordion({ children }: { children: ReactNode }) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div style={{background:"rgba(0, 0, 0, 0.05)"}}>
            {React.Children.map(children, (child, index) => {
                let childType = (child as ReactElement).type as any;
                if (childType.name === 'AccordionItem') {
                    return React.cloneElement(child as ReactElement, {
                        key: index,
                        selectedId: selectedIndex,
                        onClick: setSelectedIndex
                    });
                }
                return null;
            })}
        </div>
    )
}
