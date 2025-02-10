
import { z } from "zod";
export const BannerValidation = z.object({
    title: z.string().nonempty({ message: "Title is required" }),
    description: z.string().nonempty({ message: "Description is required" })
});
