// import img1 from '../images/1.JPG'
// import img2 from '../images/2.JPG'
// import img3 from '../images/3.JPG'
// import img4 from '../images/4.JPG'
// import img5 from '../images/5.JPG'
// import img6 from '../images/6.JPG'
// import img7 from '../images/7.JPG'

// const images = [
//   {src: img1, id: 1},
//   {src: img2, id: 2},
//   {src: img3, id: 3},
//   {src: img4, id: 4},
//   {src: img5, id: 5},
//   {src: img6, id: 6},
//   {src: img7, id: 7},
// ]

function importAll(r: __WebpackModuleApi.RequireContext) {
  return r.keys().map(r);
}

const imgs = importAll(require.context('../images', false, /\.(png|jpe?g|svg|JPG)$/));

var imgsLength = imgs.length

type CustomImage = {
  src: any,
  id: number
}
const images: Array<CustomImage> = []

for (var i = 0; i < imgsLength - 1; i++) {
  console.log(imgs[i], i)
  images.push({src: imgs[i], id: i})
}

export default images;