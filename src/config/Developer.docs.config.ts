import { ConfigDefinition } from "../types/Config.types";

const devDocConfig: ConfigDefinition = {
    basePath: "/docs/dev/",
    title: "Developer",
    entries: [
        {
            title: "Contributing",
            children: [
                {
                    title: "Repositories",
                    path: "contributing/repositories"
                }
            ]
        },
        {
            title: "Annotations",
            children: [
                {
                    title: "@Authenticated",
                    path: "annotations/@authenticated"
                }
            ]
        }, 
        {
            title: "Themes",
            children: [
                {
                    title: "Hot-Reloading Themes",
                    path: "themes/changes-during-development"
                }
            ]
        }
    ]
};

export default devDocConfig;