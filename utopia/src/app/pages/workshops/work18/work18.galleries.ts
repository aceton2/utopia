
import { GalleryCollection, TemplateGalleries } from 'src/app/services/gallery.interface';

const folder = 'assets/imgs/workshops/2018';

const headGallery: GalleryCollection = {
    sunset: `${folder}/tal-w18-25.jpg`
};

const videoGallery: GalleryCollection = {
    grass: `${folder}/tal-w18-7.jpg`,
    quartet: `${folder}/tal-w18-1.png`,
    coffee: `${folder}/tal-w18-35.jpg`,
    face: `${folder}/tal-w18-13.jpg`,
};

const perfGallery: GalleryCollection = {
    net: `${folder}/tal-w18-12.jpg`,
    snow: `${folder}/tal-w18-3.jpg`,
    forearm: `${folder}/tal-w18-6.jpg`,
    eyes: `${folder}/tal-w18-37.jpg`,
    keyboard: `${folder}/tal-w18-32.jpg`,
    camp: `${folder}/tal-w18-14.jpg`,
    ghost: `${folder}/tal-w18-8.jpg`,
};

const illusGallery: GalleryCollection = {
    gorilla: `${folder}/tal-w18-2.jpg`,
    cartoon: `${folder}/tal-w18-16.jpg`,
    office: `${folder}/tal-w18-10.jpg`,
};

const danceGallery: GalleryCollection = {
    pants: `${folder}/tal-w18-7.jpg`,
    bow: `${folder}/tal-w18-26.jpg`,
    judo: `${folder}/tal-w18-19.jpg`,
    group: `${folder}/tal-w18-24.jpg`,
};

const experiGallery: GalleryCollection = {
    sound: `${folder}/tal-w18-29.jpg`,
    duck: `${folder}/tal-w18-36.jpg`,
    girl: `${folder}/tal-w18-15.jpg`,
    huddle: `${folder}/tal-w18-21.jpg`,
};

const musicGallery: GalleryCollection = {
    cello: `${folder}/tal-w18-23.jpg`,
    keys: `${folder}/tal-w18-4.jpg`,
    drum: `${folder}/tal-w18-17.jpg`,
};

const instaGallery: GalleryCollection = {
    ladder: `${folder}/tal-w18-5.jpg`,
    tv: `${folder}/tal-w18-27.jpg`,
    bag: `${folder}/tal-w18-30.jpg`,
    water: `${folder}/tal-w18-11.jpg`,
    view: `${folder}/tal-w18-31.jpg`,
    egg: `${folder}/tal-w18-20.jpg`,
};

export const work18Galleries: TemplateGalleries = {
    head: headGallery,
    video: videoGallery,
    perf: perfGallery,
    illus: illusGallery,
    dance: danceGallery,
    music: musicGallery,
    experi: experiGallery,
    insta: instaGallery
};

