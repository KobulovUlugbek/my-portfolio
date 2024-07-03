import Link from "next/link"

import {FaGithub, FaLinkedinIn} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/KobulovUlugbek'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/ulugbek-kobulov-698196287/'},
]

export const Social = ({ containerStyles, iconStyles }) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index) =>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social