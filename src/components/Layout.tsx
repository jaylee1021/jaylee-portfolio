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
                            text: "Contact",
                            href: "/contact",
                            onClick: (e) => {
                                e.preventDefault();
                                navigate("/contact");
                            }
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
                            { type: "link", text: "Home", href: "/" },
                            { type: "link", text: "Projects", href: "/projects" },
                            { type: "link", text: "About", href: "/about" },
                            { type: "link", text: "Contact", href: "/contact" }
                        ]}
                    />
                }
                toolsHide={true}
                content={children}
            />
        </>
    );
}
