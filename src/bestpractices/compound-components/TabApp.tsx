import React, { useState } from 'react'
import { Tab, TabContent } from './Tab';
import Tabs from './Tabs';

export default function TabApp() {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 1, title: "tt1", content: "ccc1" },
        { id: 2, title: "tt2", content: "ccc2" },
        { id: 3, title: "tt3", content: "ccc3" },
        { id: 4, title: "tt4", content: "ccc4" },
    ]
    return (
        <div style={{ width: 500 }}>
            <Tabs>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        isActive={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </Tab>
                ))}
                {tabs.map((tab, index) => (
                    <TabContent key={index} isActive={activeTab === index}>
                        <div style={{padding:'10px 20px'}}>
                            {tab.content}
                        </div>
                    </TabContent>
                ))}
            </Tabs>
        </div>
    )
}
