import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: "syd9h3mo",
    dataset: "production",
    apiVersion: "2023-02-04",
    useCdn: true,
    token: "skfYFVUpIDm0vwKYNCFuW3EC4ZFoVnbiIThJCYdU8xCo667WQl1IAAG8fqBEQBOdlp2gciNWV0JDthvmdvgUOJQd8ckYyRD2mpKGzjAsKPSL210IDDU0AwssHiS7sOfeeclPBYS4M1uuMAs8UpVbzO8NZTE0Qm2EIqFt1vu3mX8Wobi8C0d2 ",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
