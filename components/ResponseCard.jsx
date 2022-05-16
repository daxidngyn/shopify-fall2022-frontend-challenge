import dayjs from "dayjs";

const ResponseCard = ({ completion }) => {
  return (
    <article
      key={completion.id}
      className="bg-white rounded-md shadow-md px-4 py-6"
    >
      <div className="flex items-start md:items-center justify-between">
        <h3 className="text-zinc-900 font-medium text-lg">
          {completion.prompt}
        </h3>
        <span className="text-sm text-zinc-600 whitespace-nowrap ml-2 mt-1.5 md:m-0 md:block hidden">
          <time>
            {dayjs(completion.createdAt).format("MMM DD YYYY @ h:mma")}
          </time>
        </span>
      </div>

      <p className="text-zinc-600 mt-4 whitespace-pre-line">
        {completion.answer}
      </p>

      <div className="md:hidden mt-2">
        <span className="text-sm whitespace-nowrap">
          <time>
            {dayjs(completion.createdAt).format("MMM DD YYYY @ h:mma")}
          </time>
        </span>
      </div>
    </article>
  );
};

export default ResponseCard;
