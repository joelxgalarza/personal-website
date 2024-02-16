import NavigationCSS from './Navigation.module.css'

function Navigation(){
    return(
        <div className={NavigationCSS.container}>
            <ul>
                <img src="/public/pfp.png" alt="" className={NavigationCSS.pfp}/>
                <p className={NavigationCSS.navLink}>About</p>
                <p className={NavigationCSS.navLink}>Experience</p>
                <p className={NavigationCSS.navLink}>Education</p>
                <p className={NavigationCSS.navLink}>Project</p>
                <p className={NavigationCSS.navLink}>Skills</p>
                <p className={NavigationCSS.navLink}>Awards</p>
            </ul>
        </div>
    )
}
export default Navigation;