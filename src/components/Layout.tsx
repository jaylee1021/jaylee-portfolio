import { AppLayout, Badge, SideNavigation, SpaceBetween, TopNavigation } from '@cloudscape-design/components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import Footer from "./Footer";
import jayLogo from "../assets/Jay_logo.png";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [theme, setTheme] = useState<Mode>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? Mode.Dark : Mode.Light;
    });

    useEffect(() => {
        applyMode(theme);
        localStorage.setItem('theme', theme === Mode.Dark ? 'dark' : 'light');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === Mode.Light ? Mode.Dark : Mode.Light);
    }

    return (
        <>
            <TopNavigation
                identity={{
                    href: "/",
                    title: "Jay Lee",
                    logo: {
                        src: jayLogo,
                        alt: "Jay Lee"
                    },
                    onFollow: (e) => {
                        e.preventDefault();
                        navigate("/");
                    }
                }}
                utilities={[
                    {
                        type: "button",
                        iconName: "share",
                        text: "LinkedIn",
                        href: "https://www.linkedin.com/in/jayjonglee",
                        external: true
                    },
                    {
                        type: "button",
                        iconName: "folder",
                        text: "GitHub",
                        href: "https://github.com/jaylee1021",
                        external: true
                    },
                    {
                        type: "button",
                        iconSvg: (<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{
                                transform: theme === Mode.Dark ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <circle cx="8" cy="8" r="7" stroke={theme === Mode.Dark ? 'white' : 'black'} strokeWidth="2" />
                            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1V15Z" fill={'white'} />
                        </svg>),
                        text: theme === Mode.Light ? "Dark Mode" : "Light Mode",
                        onClick: toggleTheme
                    },
                ]}
                i18nStrings={{
                    searchIconAriaLabel: "Search",
                    searchDismissIconAriaLabel: "Close search",
                    overflowMenuTriggerText: "More",
                    overflowMenuTitleText: "All",
                    overflowMenuBackIconAriaLabel: "Back",
                    overflowMenuDismissIconAriaLabel: "Close menu"
                }}
            />
            <AppLayout
                contentType="default"
                navigation={
                    <SideNavigation
                        activeHref={location.pathname}
                        header={{ href: "/", text: "System Modules" }}
                        onFollow={event => {
                            if (!event.detail.external) {
                                event.preventDefault();
                                navigate(event.detail.href);
                            }
                        }}
                        items={[
                            {
                                type: "section-group",
                                title: "Runtime Operations",
                                items: [
                                    { type: "link", text: "Dashboard", href: "/" }
                                ]
                            },

                            { type: "divider" },

                            {
                                type: "section-group",
                                title: "System Resources",
                                items: [
                                    { type: "link", text: "Projects", href: "/projects" },
                                    { type: "link", text: "Experience", href: "/experience" },
                                    { type: "link", text: "Biography", href: "/biography" },
                                    {
                                        type: "link",
                                        text: "Download Resume.bin",
                                        href: "/resume/Jay_Lee_Resume.pdf",
                                        external: true,
                                        info: <Badge color="blue">v2026.02</Badge>
                                    }
                                ]
                            },

                            { type: "divider" },

                            {
                                type: "section-group",
                                title: "Network Uplinks",
                                items: [
                                    {
                                        type: "link",
                                        text: "View Source Code",
                                        href: "https://github.com/jaylee1021/jaylee-portfolio",
                                        external: true
                                    },
                                    {
                                        type: "link",
                                        text: "LinkedIn Profile",
                                        href: "https://www.linkedin.com/in/jayjonglee",
                                        external: true
                                    },
                                    {
                                        type: "link",
                                        text: "GitHub Profile",
                                        href: "https://github.com/jaylee1021",
                                        external: true
                                    }
                                ]
                            }
                        ]}
                    />
                }
                toolsHide={true}
                content={
                    <SpaceBetween size="l">
                        {children}
                        <Footer />
                    </SpaceBetween>
                }
            />
        </>
    );
}
