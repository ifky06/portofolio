import SanityClient from '@/utils/SanityClient';

export default class Profile {
    constructor(name,  bio, imgUrl, bgUrl) {
        this.name = name;
        this.bio = bio;
        this.imgUrl = imgUrl;
        this.bgUrl = bgUrl;
    }

    static fromJson(json) {
        return new Profile(json.name, json.bio, json.imgUrl, json.bgUrl);
    }

    static async getProfile() {
        const query = `*[_type == "profile"]{name, bio, "imgUrl": image.asset->url, "bgUrl": background.asset->url}`;
        const json = await SanityClient.getClient()?.fetch(query);
        return json.map(Profile.fromJson)[0];
    }
}