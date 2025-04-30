import { ConfigDefinition } from "../types/Config.types";

const adminDocConfig: ConfigDefinition = {
    basePath: "/docs/admin/",
    title: "Admin",
    entries: [
        {
            title: "Languages",
            path: "languages",
            children: [
                {
                    title: "Editing Languages",
                    path: "languages/editing-languages"
                },
                {
                    title: "Adding Custom Languages",
                    path: "languages/adding-custom-languages"
                }
            ]
        }, {
            title: "Themes",
            path: "themes"
        }
    ]
};

export default adminDocConfig;