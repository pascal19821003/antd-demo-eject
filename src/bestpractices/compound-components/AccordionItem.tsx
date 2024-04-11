import React from 'react'
import { AccordionItemType } from './AccordionApp'
import AccordionContent from './AccordionContent'
import AccordionHeader from './AccordionHeader'


type MyProps = {
    item: AccordionItemType,
    onClick?: (id: number) => void;
    selectedId?: number;
}
export default function AccordionItem({ item, selectedId, onClick }: MyProps) {
    let isOpen = selectedId === item.id;
    return (
        <div style={{margin:"10px 20px"}}>
            <AccordionHeader isOpen={isOpen} onClick={() => {
                if(onClick){
                    onClick(item.id)
                }
            }} >{item.header}</AccordionHeader>
            <AccordionContent isOpen={isOpen} >{item.content}</AccordionContent>
        </div >
    )
}
