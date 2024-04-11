import React, { useEffect } from 'react';
import './style7.css'

export default function AccessibilityApp() {

    useEffect(() => {

    }, [])
    return (
        <>
            <h1>Table CSS example</h1>
            <table>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                </tr>
                <tr>
                    <th scope="row">Gabriel</th>
                    <td>13</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <th scope="row">Elva</th>
                    <td>8</td>
                    <td>Female</td>
                </tr>
                <tr>
                    <th scope="row">Freida</th>
                    <td>5</td>
                    <td>Female</td>
                </tr>
            </table>


        </>
    )
}

