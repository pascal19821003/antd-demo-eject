import { render, screen } from "@testing-library/react";
import React from "react";
import Link from "../Link";
import Query from "../Query";


describe("test query", () => {

    test('getbylabeltext', () => {
        render(<Query></Query>)
        // screen.debug()
        const inputNode1 = screen.getByLabelText('Username')
        expect(inputNode1).toBeInTheDocument()
    })
})