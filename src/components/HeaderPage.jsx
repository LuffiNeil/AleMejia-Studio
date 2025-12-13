import Button from "./Button"

function Header() {
    const Tags = ['Services','Portafolio','About','Shop'];

    return (
        <header className='d-flex justify-content-around align-items-center p-3 border-bottom'>
            <h1> AleMejia Studio</h1>
            <ul className='nav nav-pills'>
                {Tags.map((tag) => <li>{ car }</li>)}
            </ul>
            {Button({ label: 'Trabajemos juntos' })}
        </header> 
    )
}

export default Header