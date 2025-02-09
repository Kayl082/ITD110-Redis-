import "./signin.css";

function Signin({ onLogin }){
    return(
        <div className="csscontainer">
            <div className="cssbox1">
                <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                    <div id="emailHelp" class="form-text">! Enter your  login credential provided by the Office</div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    {/*<div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>*/}
                    <div className="cssloginbutton">
                        <button type="submit" class="btn" id="cssloginbutton">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Signin;