import React from 'react'

const Header = (props) => {

    return (
        <div >
            <nav className="navbar bg-body-tertiary  ">
                <div className={`container-fluid bg-${props.mode}  d-flex justify-between`}>
                    <a className={`navbar-brand text-${((props.mode)==="dark"?"primary":"dark")}`}  href="/grocerylist">Grocery List</a>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.togglemode1} role="switch" id="flexSwitchCheckChecked"  />
                        <label className={`form-check-label text-${props.mode==='dark'?'primary':'dark'}`} htmlFor="flexSwitchCheckChecked" >{props.text}</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header