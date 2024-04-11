import React, { ReactElement, ReactNode, useState } from 'react'

export default function Tabs({ children }: { children: ReactNode }) {

    const [activeTab, setActiveTab] = useState(0);


    return (
        <div style={{ width: '100%', border: '1px solid green' }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", background: 'lightblue' }}>
                {
                    React.Children.map(children, (child, index) => {
                        const childE = child as ReactElement;
                        if ((childE.type as any).name === 'Tab') {
                            return React.cloneElement(childE, {})
                        }
                        return null;
                    })
                }
            </div>
            <div >
                {
                    React.Children.map(children, (child, index) => {
                        const childE = child as ReactElement;
                        if ((childE.type as any).name === 'TabContent') {
                            return React.cloneElement(childE, {})
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
}
