import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from '../Utils/usePersistedState'

import { FiChevronsLeft, FiChevronsRight, FiHome, FiLogIn, FiUserPlus } from "react-icons/fi";
import { AiFillBank } from "react-icons/ai";
import "./Sidebar.css"

import light from '../Styles/Themes/light';
import dark from '../Styles/Themes/dark';

import GlobalStyle from '../Styles/global';
import Toggle from "../Toggle/Toggle";

const Sidebar = () => {

    const sidebarCollapsed: boolean = Boolean(localStorage.getItem('sidebar-collapsed'));
    const [isCollapsed, setIsCollapsed] = useState(sidebarCollapsed ? true : false)

    const handleCollapse = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
            localStorage.removeItem('sidebar-collapsed');
        } else {
            setIsCollapsed(true);
            localStorage.setItem('sidebar-collapsed', "false")
        }
    }

    const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

    const toggleTheme = () => { setTheme(theme.title === 'light' ? dark : light) };

    return (
        <>
            <div className={"external-icon " + (isCollapsed ? '' : 'collapsed')} onClick={handleCollapse}><FiChevronsRight /></div>
            <div id="Sidebar" className={(isCollapsed ? 'collapsed' : '')} style={{background: theme.colors.primary}}>
                <div className="Sidebar-icon" onClick={handleCollapse}><FiChevronsLeft /></div>
                <div className="item">
                    <Link className="link" to="/">
                        <FiHome className="link-icon" />
                        Landing page
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/BankApp">
                        <AiFillBank className="icon" />
                        BankApp
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/login">
                        <FiLogIn className="link-icon" />
                        Sing In
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to="/register">
                        <FiUserPlus className="link-icon" />
                        Sing Up
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