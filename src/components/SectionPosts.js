import BaseCard from "./BaseCard";

export default function SectionPosts() {
  const posts = [
    {
      title: "Primo Post",
      content: "Contenuto primo post",
    },
    {
      title: "Secondo Post",
      content: "Contenuto secondo post",
    },
  ];
  return (
    <section>
      {posts.map((post, index) => {
        return (
          <BaseCard title={post.title} content={post.content} key={index} />
        );
      })}
    </section>
  );
}
