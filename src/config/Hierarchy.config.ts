import { ConfigEntry } from "../types/Config.types";

const hierarchy: ConfigEntry[] = [
    {
        title: "Admin",
        path: "/docs/admin",
        children: [
            {
                title: "Languages",
                path: "/docs/admin/languages",
                children: [
                    {
                        title: "Editing Languages",
                        path: "/docs/admin/languages/editing-languages"
                    },
                    {
                        title: "Adding Custom Languages",
                        path: "/docs/admin/languages/adding-custom-languages"
                    }
                ]
            }, {
                title: "Themes",
                path: "/docs/admin/themes"
            }
        ]
    },
    {
        path: "/docs/dev",
        title: "Developer",
        children: [
            {
                title: "Contributing",
                children: [
                    {
                        title: "Repositories",
                        path: "/docs/dev/contributing/repositories"
                    }
                ]
            },
            {
                title: "Annotations",
                children: [
                    {
                        title: "@Authenticated",
                        path: "/docs/dev/annotations/@authenticated"
                    }
                ]
            },
            {
                title: "Themes",
                children: [
                    {
                        title: "Hot-Reloading Themes",
                        path: "/docs/dev/themes/changes-during-development"
                    }
                ]
            }
        ]
    },
    {
        path: "/docs/user",
        title: "User",
        children: [

        ]
    },
    {
        path: "/docs/design",
        title: "Design",
        children: [
            {
                title: "Components",
                path: "/docs/design/components",
                children: [
                    {
                        title: "Accordion",
                        path: "/docs/design/components/accordion"
                    },
                    {
                        title: "Alerts",
                        path: "/docs/design/components/alerts"
                    },
                    {
                        title: "Breadcrumb",
                        path: "/docs/design/components/breadcrumb"
                    },
                    {
                        title: "Buttons",
                        path: "/docs/design/components/buttons",
                        children: [
                            {
                                title: "Basic Buttons",
                                path: "/docs/design/components/buttons/basic-buttons"
                            },
                            {
                                title: "Only Icon",
                                path: "/docs/design/components/buttons/only-icon"
                            },
                        ]
                    },
                    {
                        title: "Calendar",
                        path: "/docs/design/components/calendar"
                    },
                    {
                        title: "Card",
                        path: "/docs/design/components/card"
                    },
                    {
                        title: "Carousel",
                        path: "/docs/design/components/carousel"
                    },
                    {
                        title: "Dropdown",
                        path: "/docs/design/components/dropdown"
                    },
                    {
                        title: "Lists",
                        path: "/docs/design/components/lists",
                        // sortable, Griddable etc.!
                        children: [
                            {
                                title: "Base List",
                                path: "/docs/design/components/lists/base-list"
                            },
                            {
                                title: "Simple List",
                                path: "/docs/design/components/lists/simple-list"
                            },
                            {
                                title: "List with Icons",
                                path: "/docs/design/components/lists/list-with-icons"
                            },
                            {
                                title: "File List",
                                path: "/docs/design/components/lists/file-list"
                            },
                            {
                                title: "Action List",
                                path: "/docs/design/components/lists/action-list"
                            }
                        ]
                    },
                    {
                        title: "Modals",
                        path: "/docs/design/components/modals",
                        children: [
                            {
                                title: "Base Modal",
                                path: "/docs/design/components/modals/base-modal"
                            },
                            {
                                title: "Confirmation Modal",
                                path: "/docs/design/components/modals/confirmation-modal"
                            },
                            {
                                title: "Form Modal",
                                path: "/docs/design/components/modals/form-modal"
                            }
                        ]
                    },
                    {
                        title: "Navigation",
                        path: "/docs/design/components/navigation",
                        children: [
                            {
                                title: "Horizontal Tabs",
                                path: "/docs/design/components/navigation/horizontal-tabs"
                            },
                            {
                                title: "Vertical Tabs",
                                path: "/docs/design/components/navigation/vertical-tabs"
                            }
                        ]
                    },
                    {
                        title: "Offcanvas",
                        path: "/docs/design/components/offcanvas"
                    },
                    {
                        title: "Progress Bar",
                        path: "/docs/design/components/progress-bar"
                    },

                    {
                        title: "Pagination",
                        path: "/docs/design/components/pagination"
                    },
                    {
                        title: "Spinners",
                        path: "/docs/design/components/spinners"
                    },
                    {
                        title: "Toast",
                        path: "/docs/design/components/toast"
                    },
                    {
                        title: "Tootltips & Popovers",
                        path: "/docs/design/components/tooltips-popovers"
                    }
                ]
            },
            {
                title: "Layout",
                path: "/docs/design/layout",
                children: [

                ]
            },
            {
                title: "Forms",
                path: "/docs/design/forms",
                children: [

                ]
            }
        ]
    }

];

export default hierarchy;