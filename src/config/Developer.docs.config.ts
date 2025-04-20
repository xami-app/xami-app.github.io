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
                    title: "@CustomTag",
                    path: "annotations/@customtag"
                }
            ]
        }
    ]
};

export default devDocConfig;