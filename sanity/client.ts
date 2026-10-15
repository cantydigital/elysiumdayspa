import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

/** Fetches a GROQ query, caching the result for `revalidate` seconds. */
export function sanityFetch<T>(query: string, params: QueryParams = {}, revalidate = 60) {
  return client.fetch<T>(query, params, { next: { revalidate, tags: ["post"] } });
}
