import SanityClient from "@/utils/SanityClient";

export default class Project {
    constructor(imgUrl, title, slug, content, isFeatured){
        this.imgUrl = imgUrl;
        this.title = title;
        this.slug = slug;
        this.content = content;
        this.isFeatured = isFeatured;
    }

    static fromJson(json){
        return new Project(json.imgUrl, json.title, json.slug.current, json.content, json.isFeatured);
    }

    static async getFeaturedProjects(){
        const query = `*[_type == "project" && featured == true]{
        "imgUrl": thumbnail.asset->url,
        title,
        slug,
        content,
        featured
    }`;
        const json = await SanityClient.getClient()?.fetch(query);
        return json.map(Project.fromJson);
    }

    static async getProjects(){
        const query = `*[_type == "project"] | order(_createdAt desc) {
        "imgUrl": thumbnail.asset->url,
        title,
        slug,
        content,
        featured
    }`;
        const json = await SanityClient.getClient()?.fetch(query);
        return json.map(Project.fromJson);
    }

    static async getProjectBySlug(slug){
        const query = `*[_type == "project" && slug.current == "${slug}"]{
        "imgUrl": thumbnail.asset->url,
        title,
        slug,
        content,
        featured
    }`;
        const params = {slug};
        const json = await SanityClient.getClient()?.fetch(query, params);
        return json.map(Project.fromJson)[0];
    }
}