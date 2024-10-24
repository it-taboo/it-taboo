import '../styles/calc.css';
import Button from '../components/calc/calc-btn.jsx'
import Input from '../components/calc/in-out-window';
import { useState } from 'react';

import Tilt from 'react-vanilla-tilt'

const Calculator = (props) => {
    const [problem, createProblem] = useState('')

    const Button = (props) => {
        if(props.twoBlocks === 'True') {

            if(props.number === 'Удалить' || props.number === 'Delete') {
                return (
                    <div className = 'btn two-blocks' onClick = {() => {
                        let letters = []
                        for (const letter of problem) {
                            letters.push(letter)
                        }
                        let pop = letters.pop()
                        let final = ''
                        for (const letter of letters) {
                            final += letter
                        }
                        createProblem(final)
                        console.log(final)
                    }}>{props.number}
                </div>
                )
            }
            return (
                <div className = 'btn two-blocks'>{props.number}</div>
            )
        } else {
            if(props.number === '=') {
                return (
                    <div className = 'btn' onClick = {() => {
                        createProblem(eval(problem))
                        console.log(eval(problem))
                    }}>{props.number}
                    </div>
                )
            }

            if(props.number === '+') {
                return (
                    <div onClick = {() => {createProblem(problem + props.number)}} className = 'btn btn2'>{props.number}</div>
                )
            }

            if(props.number === '.') {
                return (
                    <div onClick = {() => {createProblem(problem + props.number)}} className = 'btn btn1'>{props.number}</div>
                )
            }
            
            if(props.number === 'C') {
                return (
                    <div className = 'btn' onClick = {() => {
                        createProblem('')
                    }}>{props.number}
                    </div>
                )
            }

            return (
                <div className = 'btn' onClick = {() => {
                    createProblem(problem + props.number)
                    console.log(problem)
                }}>{props.number}
                </div>
            )
        }
    }

    const Input = (props) => {
        return (
            <input readonly = 'True' placeholder = {props.text['calculator'][2]} className = 'textarea' onChange = {event => {props.getAnswer(event.target.value)}} value = {problem}></input>
        )
    }

    return (
        <div className = 'calculator' style = {{background: props.colors['background']}}>
            <div className = 'title'>
                <h1 style = {{color: props.colors['h1']}}>{props.text['calculator'][0]}</h1>
            </div>
            <div className = 'calc-vanilla'>
                <div style = {{background: props.colors['gradient1'][0]}} className = 'circle1'></div>
                <div style = {{background: props.colors['gradient1'][1]}} className = 'circle2'></div>
                <Tilt className = 'tilt1' style = {{background: props.colors['calcBg']}}>
                    <div className='calc'>
                        <Input text = {props.text}/>
                        <Button number = '00'/>
                        <Button number = 'C'/>
                        <Button number = {props.text['calculator'][1]} twoBlocks = 'True'/>
                        <Button number = '7'/>
                        <Button number = '8'/>
                        <Button number = '9'/>
                        <Button number = '/'/>
                        <Button number = '4'/>
                        <Button number = '5'/>
                        <Button number = '6'/>
                        <Button number = '*'/>
                        <Button number = '1'/>
                        <Button number = '2'/>
                        <Button number = '3'/>
                        <Button number = '-'/>
                        <Button number = '.'/>
                        <Button number = '0'/>
                        <Button number = '='/>
                        <Button number = '+'/>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Calculator;