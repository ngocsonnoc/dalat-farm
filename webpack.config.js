const IMAGES = require.context('/src/assets/img/')
export function getImageFromPath(path){
    return IMAGES(path)
}