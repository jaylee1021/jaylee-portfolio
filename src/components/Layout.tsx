import { AppLayout, SideNavigation, SpaceBetween, TopNavigation } from '@cloudscape-design/components';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from "./Footer";
import jayLogo from "../assets/Jay_logo.png";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();

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
                    }
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
                                    { type: "link", text: "Biography", href: "/biography" }
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
