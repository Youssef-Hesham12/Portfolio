import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import gameover from "../public/gameover.png"
import quiez from "../public/quiez.png"


export const assets = {

    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    figma,
    git,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Fresh Cart',
        link:'https://freshcart-toef.vercel.app/',
        bgImage: '/cart.jpg',
    },
    {
        title: 'Weather App',
       link:'https://weather-react-three-flax.vercel.app/',
        bgImage: '/weather.avif',
    },
    {
        title: 'GameOver App',
       link:'https://youssef-hesham12.github.io/Game-Over/',
        bgImage: "/gameover.png",
    },
    {
        title: 'Notes App',
        link:'https://note-app-one-iota.vercel.app ',
        bgImage: '/note.avif',
    },
    {
        title: 'Quiez App',
        link:'https://youssef-hesham12.github.io/Game-Over/ ',
        bgImage: "/quiez.png",
    },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: ' Cs Student in Modern Academy' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 8 projects' }
];

export const toolsData = [
    assets.vscode,  assets.figma, assets.git
];