import { defineCollection, z } from "astro:content";

import { categories } from "../settings/categories";
import { contracts } from "../settings/contracts";
import { levels } from "../settings/levels";
import { locations } from "../settings/locations";
import { skills } from "../settings/skills";

const positions = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean(),
      category: z.enum(categories),
      contract: z.enum(contracts),
      level: z.enum(levels),
      location: z.enum(locations),
      apply_url: z.string(),
      skills: z.array(z.enum(skills)),
    }),
});

const p = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

export const collections = {
  positions,
  p,
};
