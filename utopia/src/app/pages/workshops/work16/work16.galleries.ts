
import { TemplateGalleries } from 'src/app/services/gallery.interface';

const folder = 'assets/imgs/workshops/2016';

export const work16Galleries: TemplateGalleries = {
    photo: {
        1: `${folder}/left.jpg`,
    },
    installation: {
        1: `${folder}/look.jpg`,
        2: `${folder}/drill.jpg`,
        3: `${folder}/kneel.jpg`,
        4: `${folder}/meet.jpg`,
        5: `${folder}/mirror.jpg`,
        6: `${folder}/carry.jpg`,
    },
    editorial: {
        1: `${folder}/beach.jpg`,
        2: `${folder}/fog.jpg`,
        3: `${folder}/bow.jpg`,
    },
    music: {
        1: `${folder}/sax.jpg`,
        2: `${folder}/song.jpg`,
    },
    painting: {
        1: `${folder}/clown.jpg`,
        2: `${folder}/marker.jpg`,
        3: `${folder}/tiny.jpg`,
        4: `${folder}/black.jpg`,
        5: `${folder}/scatter.jpg`,
        6: `${folder}/yellow.jpg`,
    }
};

