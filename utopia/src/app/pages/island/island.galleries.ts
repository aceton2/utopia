
import { TemplateGalleries } from 'src/app/services/gallery.interface';

const folder = 'assets/imgs/island';

export const islandGalleries: TemplateGalleries = {
    head: {
        1: `${folder}/tal14.jpg`,
    },
    surroundings: {
        1: `${folder}/tal1.gif`,
        2: `${folder}/tal2.gif`,
        3: `${folder}/tal7.gif`,
        4: `${folder}/tal3.gif`,
    },
    organization: {
        1: `${folder}/tal8.jpg`,
        2: `${folder}/tal9.jpg`,
    },
    community: {
        1: `${folder}/tal6.gif`,
        2: `${folder}/tal10.jpg`,
        3: `${folder}/tal4.gif`,
    },
    activities: {
        1: `${folder}/tal5.gif`,
        2: `${folder}/tal11.jpg`,
        3: `${folder}/tal12.jpg`,
    }
};
