import { AppLayout, SideNavigation, TopNavigation } from '@cloudscape-design/components';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div id="h" style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
                <TopNavigation
                    identity={{
                        href: "/",
                        title: "Jay Lee",
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
                            href: "https://github.com/your-username",
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
            </div>
            <AppLayout
                contentType="default"
                navigation={
                    <SideNavigation
                        activeHref={location.pathname}
                        header={{ href: "/", text: "Jay" }}
                        onFollow={event => {
                            if (!event.detail.external) {
                                event.preventDefault();
                                navigate(event.detail.href);
                            }
                        }}
                        items={[
                            { type: "link", text: "Dashboard", href: "/" }, 
                            { type: "divider" },
                            { type: "link", text: "Projects", href: "/projects" },
                            { type: "link", text: "Experience", href: "/experience" }, 
                            { type: "link", text: "Profile", href: "/profile" }, 
                            { type: "divider" },
                            {
                                type: "link",
                                text: "View Repo",
                                href: "https://github.com/jaylee-portfolio",
                                external: true
                            },
                            { type: "divider" },
                            {
                                type: "link",
                                text: "LinkedIn",
                                href: "https://www.linkedin.com/in/jayjonglee", 
                                external: true
                            },
                            {
                                type: "link",
                                text: "GitHub",
                                href: "https://github.com/jaylee1021",
                                external: true
                            }
                        ]}
                    />
                }
                toolsHide={true}
                content={children}
            />
        </>
    );
}
