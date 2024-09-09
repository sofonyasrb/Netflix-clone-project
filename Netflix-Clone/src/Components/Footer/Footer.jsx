import React from 'react'
import "./footer.css"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    return (
        <div className="Footer_outer_wrapper">
            <div className='Footer_inner_wrapper'>
                <div className='footer_icons'>
                    <FacebookRoundedIcon />
                    <InstagramIcon />
                    <YouTubeIcon/>
                </div>
                <div className='footer_data'>
                    <div>
                        <ul>
                            <li>Audio Description</li>
                            <li>Invester Relations</li>
                            <li>Legal Notice</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Prefernces</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Terms Of Use</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Media Center</li>
                            <li>Privacy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='Service_Code'>
                    <p>
                        Service Code
                    </p>
                </div>
                <div className='copy-write'>
                    &copy;1997-2025 Netflix,Inc.
                </div>
            </div>
        </div>
    )
}

export default Footer
