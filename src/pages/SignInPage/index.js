import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import usersData from '../../utie/usersData.json';

function SignInpage() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()


    // const excelData = async () => {
    //     const fileName = 'UserDataFile'
    //     const fileNAme = 'C:\Users\lakshmiprasanna.c\My-Projects\estee-lauder-sample\src\Service\files\UserDataFile.xlsx'
    //     // const data = await fileName.arrayBuffer()
    //     const reader = new FileReader(fileName);
    //     // reader.onload()

    //     // reader.onload = (fileName) => {
    //     //     const wb = XLSX.read(fileName);
    //     //     const sheets = wb.SheetNames;

    //     //     if (sheets.length) {
    //     //         const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheets[0]]);
    //     //         // setMovies(rows)
    //     //     console.log("fileData--->", rows)

    //     //     }
    //     // }
    //     // reader.readAsArrayBuffer(file);




    //     // const workbook = XLSX.read(fileName)
    //     // const sheets = workbook.SheetNames;

    //     // if (sheets.length) {
    //     //     const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheets[0]]);
    //     //     console.log("fileData--->", rows, reader)

    //     // }
    // }

    const getMockData = (userValues) => {
        var userStatus
        return userStatus = usersData.filter(data => data.UserName === userValues.userName && data.UserPassword === userValues.userPassword)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = () => {
        // if(name == 'test' && password == 'test'){
        if (name && password) {
            const userData = {
                userName: name,
                userPassword: password
            }
            const data1 = getMockData(userData);
            if(data1.length > 0 ){
                navigation('/home')
            }else{
            alert('Please Enter Valid UserName and Password')
            setName('')
            setPassword('')
            }
        }
        else {
            alert('Please Enter UserName and Password')
        }
    }

    return (
        // <form onSubmit={handleSignIn}>
        <div className='signin-page'>
            <div className='signin-card'>

                <div className='signin-cardName'>
                    <div className='signin-text1'>ESTEE <br /> LAUDER</div>
                    <div className='signin-text2'>COMPANIES</div>
                </div>
                <div className='signin-cardFields'>
                    <div className='signin-userName'>
                        <input className='user-name' type='text' value={name} placeholder='User Name' onChange={handleName} />

                    </div>
                    <div className='signin-password'>
                        <input className='password-styles' type='password' value={password} placeholder='Password' onChange={handlePassword} />
                    </div>
                    <div >
                        <button className='signin-login' onClick={handleSignIn}>Log in</button>
                    </div>

                </div>
            </div>
        
        </div>
        // </form>
    );
}

export default SignInpage;
