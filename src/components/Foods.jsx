import { useState } from 'react';

import Container from "react-bootstrap/Container";

export default function Foods() {

    const instructor = "Tasty Picks"

    const students = [
        "Tortilla: Mexico", 'Croissant: France', 'Tacos: Mexico', 'Ramen: Japan', 'Burger: America ', 'Sushi: Japan', 'Pizza: Italy'
    ];

    const [ studentSelected, setStudentSelected ] = useState('');
    console.log(studentSelected);

    function getRandomStudent() {
        return students[Math.floor(Math.random() * students.length)]
    }

    return (
        <Container>
            <br></br>
            <div>
                <p><h2>Inspiration Foods:</h2> {studentSelected}</p>
                <br></br>
                <br></br>
                <button  onClick={()=>{
                    setStudentSelected( getRandomStudent() );
                }}>FOOD</button>
                {/* Figure  out "On click" for Foodish pictures*/}
            </div>
        </Container>


    )
}