import { ResourceWithOptions } from "adminjs";
import { categoryResourceOptions } from "./category";
import { Category } from "../../models";

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    }
]