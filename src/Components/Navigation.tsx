import NavigationCSS from './Navigation.module.css'

function Navigation(){

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap')
    </style>

    return(
        <div className={NavigationCSS.container}>
                <img src="/public/pfp.png" alt="" className={NavigationCSS.pfp}/>
                <p className={NavigationCSS.navLink}>About</p>
                <p className={NavigationCSS.navLink}>Experience</p>
                <p className={NavigationCSS.navLink}>Education</p>
                <p className={NavigationCSS.navLink}>Project</p>
                <p className={NavigationCSS.navLink}>Skills</p>
                <p className={NavigationCSS.navLink}>Awards</p>
        </div>
    )
}
export default Navigation;