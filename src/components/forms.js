import React,{useState} from 'react';

const Froms = () =>{
    const[register,setRegister]=useState({
        name:'',
        email:'',
        contact:'',
        password:'',
        confirmpassword:''
    })    

    const onChange=(e)=>{
        setRegister({...register,[e.target.name]:e.target.value})
    }

    const password_validate=(password)=> {
        const strongRegex = new RegExp(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
          );
        return strongRegex.test(password);
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(register.password !== register.confirmpassword)
        {
            console.log("Password didn't match")
            return
        }
        else if(register.password.length <= 6)
        {
            console.log("Password length is short")
            return
        }
        else if(password_validate(register.password)){
            console.log("password ghatia hai")
            return
        }
        console.log(register)
    }

    return <div className="container mt-5">
        <h1 className="text-danger">Registration Form</h1>
        <div className="card">
        <form className="form" onSubmit={(e)=>onSubmit(e)}>
            <div className="form-group mt-3">
                <input type="text" name="name" onChange={(e)=>onChange(e)} className="form-control" placeholder="Enter Your Name" />
            </div>
            <div className="form-group mt-3">
                <input text="email" name="email" onChange={(e)=>onChange(e)} className="form-control" placeholder="Enter Your Email" />
            </div>
            <div className="form-group mt-3">
                <input type="number" name="contact" onChange={(e)=>onChange(e)} className="form-control" placeholder="Enter Contact" />
            </div>
            <div className="form-group mt-3">
                <input type="password" name="password" onChange={(e)=>onChange(e)} className="form-control" placeholder="Enter Password" />
            </div>
            <div className="form-group mt-3">
                <input type="password" name="confirmpassword" onChange={(e)=>onChange(e)} className="form-control" placeholder="Enter Confirm Password" />
            </div>
                <button type="submit" className="btn btn-success btn-block" value="Submit">Submit</button>
        </form>
        </div>
    </div>
}

export default Froms;