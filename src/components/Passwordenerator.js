import { useState } from "react"

const PasswordGen = () => {
    const [output, setoutput] = useState("");
    var lengthVar = 0;
    let checkUpper = false
    let checkLower = false
    let checkNumber = false
    let checkSymbol = false


    const PasswordGenerate = () => {
        const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbol = "!@#$%&";

        let finalChar = ""

        let length = lengthVar;
        let password = "";

        if (checkUpper === true) {
            finalChar = finalChar + upperCaseChar

        }
        if (checkLower === true) {
            finalChar = finalChar + lowerCaseChar

        }
        if (checkNumber === true) {
            finalChar = finalChar + numbers

        }
        if (checkSymbol === true) {
            finalChar = finalChar + symbol

        }
        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * finalChar.length + 1)
            password = password + finalChar.charAt(index)
        }
        setoutput(password)
        console.log(password)

    };


    return (
        <>
            <h1 className="Head">Password Generator</h1>
            <input className="display" type="text" disabled value={output}></input>
            <br />
            <span className="spantag"><p>Select password Length</p>
                <select onChange={(e) => { lengthVar = e.target.value }} >

                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select></span>
            <br />
            <input onClick={() => { checkUpper = !checkUpper }} type="checkbox" id="UpperCase" />
            <lable htmlFor="UpperCase">UpperCase</lable>
            <br />
            <input onClick={() => { checkLower = !checkLower }} type="checkbox" id="LowerCase" />
            <lable htmlFor="LowerCase">LowerCase</lable>
            <br />
            <input onClick={() => { checkNumber = !checkNumber }} type="checkbox" id="IncludeNumber" />
            <lable htmlFor="IncludeNumber">IncludeNumber</lable>
            <br />
            <input onClick={() => { checkSymbol = !checkSymbol }} type="checkbox" id="IncludeSymbol" />
            <lable htmlFor="IncludeSymbol">IncludeSymbol</lable>

            <br />
            <button className="button" onClick={PasswordGenerate}>Generate Password</button>

        </>
    )


}
export default PasswordGen;