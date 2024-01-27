function Header(){
    return(
        <header>
        <div>
            <span>Udemy</span>
        </div>
        <div>
            <input type="search" placeholder="search for anything here"></input>
        </div>
        <div className="nav">
            <div className="head--link">
                <a href="course">Courses</a>
                <a href="learn">My learning</a>
            </div>
            <div className="head--icon">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
        <div className="hamburger">
            <i className="fa-solid fa-bars"></i>
        </div>
    </header>
    )
}
export default Header