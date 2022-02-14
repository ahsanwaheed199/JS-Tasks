// 8. Write a program that takes two arrays of objects and joins them according to their ids.
// const titles = [
//     { id: 1, title: "Title 1" },
//     { id: 2, title: "Title 2" },
//     { id: 3, title: "Title 3" },
// ];
// const posts = [
//     { id: 1, post: "This is post 1" },
//     { id: 3, post: "This is post 3" },
//     { id: 2, post: "This is post 2" },
// ];
// //Expected output
// [
//     { "id": 1, "title": "Title 1", "post": "This is post 1" },
//     { "id": 2, "title": "Title 2", "post": "This is post 2" },
//     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// ]

const titles = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];
const posts = [
  { id: 1, post: "This is post 1" },
  { id: 3, post: "This is post 3" },
  { id: 2, post: "This is post 2" },
];
let arr = titles.map((item, i) => {
  return Object.assign({}, item, posts[i]);
});
console.log(arr);
