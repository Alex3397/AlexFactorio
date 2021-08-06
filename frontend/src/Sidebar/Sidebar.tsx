import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from '../Utils/usePersistedState'

import { FiChevronsLeft, FiChevronsRight, FiHome } from "react-icons/fi";
import "./Sidebar.css"

import light from '../Styles/Themes/light';
import dark from '../Styles/Themes/dark';

import GlobalStyle from '../Styles/global';
import Toggle from "../Toggle/Toggle";

const Sidebar = () => {

    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => { menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true) };

    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

    const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light) };

    return (
        <>
            <div className={"external-icon " + (menuCollapse ? '' : 'collapsed')} onClick={menuIconClick}><FiChevronsRight/></div>
            <div id="Sidebar" className={(menuCollapse ? 'collapsed' : '')}>
                <div className="Sidebar-icon" onClick={menuIconClick}><FiChevronsLeft /></div>
                <div className="item">
                    <Link className="link" to="/">
                        <FiHome className="link-icon" />
                        Landing page
                    </Link>
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Toggle toggleTheme={toggleTheme} />
                    </ThemeProvider>
                </div>

            </div>
        </>
    );
};

export default Sidebar;