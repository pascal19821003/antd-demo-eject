import React, { useState } from 'react'
import Accordion from './Accordion';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';
import AccordionItem from './AccordionItem';


export type AccordionItemType = {
    header: string;
    content: string;
    id: number;
}
export default function AccordionApp() {


    const items: AccordionItemType[] = [
        { id: 1, header: "hhh1", content: 'ccconten111' },
        { id: 2, header: "hhh2", content: 'ccconten222' },
        { id: 3, header: "hhh3", content: 'ccconten333' },
    ]

    return (
        <div>
            <Accordion>
                {
                    items.map((item, index) => {
                        return (
                            <AccordionItem item={item} key={item.id}></AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}



{/* {
                    items.map((item, index) => {
                        return (
                            <div key={index} style={{ width: 200, margin: '10px 20px', border: "1px solid green" }}>
                                <AccordionHeader onClick={() => { setSelectedIndex(index) }}
                                    isOpen={selectedIndex === index}
                                >
                                    {item.header}
                                </AccordionHeader>
                                <AccordionContent isOpen={selectedIndex === index}>
                                    {item.content}
                                </AccordionContent>
                            </div>
                        )
                    })
                } */}