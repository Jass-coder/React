import React,{useState} from 'react';

const Form = ({setAuth,auth}) => {
    const [form,setForm]=useState({
        email:'',
        password:''
    })
    const onChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        // if(form.email === 'xyz@example.com')
        // {
            setAuth(true)
            localStorage.setItem('auth','true')
            // console.log(setAuth)
        // }
        console.log(form)
    }
    return auth ? <div>Already Login</div> : ( 
    <div className="container col-sm-12 mt-5">
        <h1 className="text-danger">Login Form</h1>
        <div className="card">
            <form className="row mb-3 m-auto" onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3 row mt-3 m-5">
                    <label htmlFor="Email" className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-6 mt-2">
                        <input type="text" name="email" onChange={(e)=>onChange(e)} className="form-control" id="" value={form.email}></input>
                    </div>
                </div>
                <div className="mb-3 row mt-3 m-5">
                    <label htmlFor="Password" className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-6">
                        <input type="password" name="password" onChange={(e)=>onChange(e)} className="form-control" id="Password" value={form.passoword}></input>
                    </div>
                </div>
                <div className="mb-3 row ">
                    <div className="col-sm-2 mt-3 m-auto">
                        <button value="submit" className="btn btn-primary center">Submit</button>
                    </div>
                </div>
            </form>
        </div>    
    </div>
    );
}

export default Form;