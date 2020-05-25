
const sizeOf = require("image-size");
const fs = require("fs");
const bp = "./src/";
const imgsFolder = "assets/imgs/";
const fullImgsPath = bp + imgsFolder;

const images = [];

fs.readdirSync(fullImgsPath).forEach(file => {
    const path1 = fullImgsPath + file;
    if ( fs.lstatSync(path1).isDirectory() ) {
        fs.readdirSync(path1).forEach( file1 => {
            const path2 = path1 + "/" + file1;
            if ( fs.lstatSync(path2).isDirectory() ) {
                fs.readdirSync(path2).forEach( file2 => {
                    const path3 = path2 + "/" + file2;
                    images.push(path3);
                });
            } else {
                images.push(path2);
            }
        });
    } else {
        images.push(path1);
    }
});

const output = {};

images.forEach( imgName => {
    try {
        const dimensions = sizeOf(imgName);
        const shortName = imgName.substring(imgName.indexOf(bp) + bp.length);
        output[shortName] = {
            h: dimensions.height,
            w: dimensions.width,
        };
    } catch {
        console.error("not parsed", imgName);
        return null;
    }
});

fs.writeFile("./src/app/services/imageDims.json", JSON.stringify(output), () => {
    // tslint:disable-next-line: no-console
    console.log("dim success :)");
});
