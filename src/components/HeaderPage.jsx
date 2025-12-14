import Button from "./Button"

function Header() {
    const Tags = ['Services','Portfolio','About','Shop'];

    return (
        <header className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none border-bottom border-2 border-dark p-3'>
            <h1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> AleMejia Studio</h1>
            <ul className='nav nav-pills'>
                {Tags.map((tag) => <li className="nav-item nav-link text-dark">{ tag }</li>)}
            </ul>
            {Button({ label: 'Work Together', className: 'rounded-pill border border-dark border-3' })}
        </header> 
    )
}

export default Header