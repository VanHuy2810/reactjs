import Post from "./postlist";

function List_post() {
  let lists = [
    { title: "vicieo", desc: "kkkk", status: "new" },
    { title: "vicieo2", desc: "kkkk", status: "new" },
    { title: "vicieo3", desc: "kkkk", status: "old" },
    { title: "vicieo4", desc: "kkkk", status: "vcl" },
  ];
  let dt = lists.map((item, index) => {
    return <Post key={index} {...item} />;
  });
  return (
    <>
      <h1>Post List</h1>
      {dt}
    </>
  );
}

export default List_post;
