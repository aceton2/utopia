
import { GalleryCollection, TemplateGalleries } from 'src/app/components/directives/gallery.interface';

const videoGallery: GalleryCollection = {
    grass: {
        src: 'assets/imgs/workshops/2018/tal-w18-7.jpg',
        w: 1200,
        h: 900
    },
    quartet: {
        src: 'assets/imgs/workshops/2018/tal-w18-1.png',
        w: 1200,
        h: 900
    },
    coffee: {
        src: 'assets/imgs/workshops/2018/tal-w18-35.jpg',
        w: 1200,
        h: 900
    },
    face: {
        src: 'assets/imgs/workshops/2018/tal-w18-13.jpg',
        w: 1200,
        h: 900
    }
};

const perfGallery: GalleryCollection = {
    net: {
        src: 'assets/imgs/workshops/2018/tal-w18-12.jpg',
        w: 1200,
        h: 900
    },
    snow: {
        src: 'assets/imgs/workshops/2018/tal-w18-3.jpg',
        w: 1200,
        h: 900
    },
};

const illusGallery: GalleryCollection = {
    gorilla: {
        src: 'assets/imgs/workshops/2018/tal-w18-2.jpg',
        w: 1200,
        h: 900
    },
    cartoon: {
        src: 'assets/imgs/workshops/2018/tal-w18-16.jpg',
        w: 1200,
        h: 900
    },
    office: {
        src: 'assets/imgs/workshops/2018/tal-w18-10.jpg',
        w: 1200,
        h: 900
    },
};

const danceGallery: GalleryCollection = {
    pants: {
        src: 'assets/imgs/workshops/2018/tal-w18-7.jpg',
        w: 1200,
        h: 900
    },
    bow: {
        src: 'assets/imgs/workshops/2018/tal-w18-26.jpg',
        w: 1200,
        h: 900
    },
    judo: {
        src: 'assets/imgs/workshops/2018/tal-w18-19.jpg',
        w: 1200,
        h: 900
    },
    group: {
        src: 'assets/imgs/workshops/2018/tal-w18-24.jpg',
        w: 1200,
        h: 900
    },
};


const experiGallery: GalleryCollection = {
    sound: {
        src: 'assets/imgs/workshops/2018/tal-w18-29.jpg',
        w: 1200,
        h: 900
    },
    duck: {
        src: 'assets/imgs/workshops/2018/tal-w18-36.jpg',
        w: 1200,
        h: 900
    },
    girl: {
        src: 'assets/imgs/workshops/2018/tal-w18-15.jpg',
        w: 1200,
        h: 900
    },
    huddle: {
        src: 'assets/imgs/workshops/2018/tal-w18-21.jpg',
        w: 1200,
        h: 900
    },
};

const musicGallery: GalleryCollection = {
    cello: {
        src: 'assets/imgs/workshops/2018/tal-w18-23.jpg',
        w: 1200,
        h: 900
    },
    keys: {
        src: 'assets/imgs/workshops/2018/tal-w18-4.jpg',
        w: 1200,
        h: 900
    },
    drum: {
        src: 'assets/imgs/workshops/2018/tal-w18-17.jpg',
        w: 1200,
        h: 900
    },
};

const instaGallery: GalleryCollection = {
    ladder: {
        src: 'assets/imgs/workshops/2018/tal-w18-5.jpg',
        w: 1200,
        h: 900
    },
    tv: {
        src: 'assets/imgs/workshops/2018/tal-w18-27.jpg',
        w: 1200,
        h: 900
    },
};

export const work18Galleries: TemplateGalleries = {
    video: videoGallery,
    perf: perfGallery,
    illus: illusGallery,
    dance: danceGallery,
    music: musicGallery,
    experi: experiGallery,
    insta: instaGallery
};

