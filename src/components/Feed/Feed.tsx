type Feed = {
  metaData: { id: Number; dateCreated: Date; dateUpdated: Date };
  data: {
    title: String;
    description: String;
    body: {
      type: String;
      url: String;
    };
    likes: Number;
    comments: [{ id: Number; value: String }];
    trendingAt: Number;
  };
};
type FeedProps = {
  feed: Feed;
};
export default function Feed({ feed }: FeedProps) {
  return (
    <section className="flex flex-col border border-gray-100">
      <div className="p-2 flex flex-row justify-between">
        <div>
          <h1 className="text-md font-bold">{feed.data.title}</h1>
          <h1 className="text-md"> {feed.data.description}</h1>
        </div>
        <div>
          <h1 className="text-md">{feed.metaData.dateUpdated}</h1>
        </div>
      </div>
      <img src={feed.data.body.url} />
      <div className="p-2">
        <h1>{feed.data.likes}</h1>
        <h1> {feed.data.comments.length}</h1>
        <h1> {feed.data.trendingAt}</h1>
      </div>
    </section>
  );
}
