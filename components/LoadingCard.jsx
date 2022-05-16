const LoadingCard = () => {
  return (
    <div className="bg-white rounded-md shadow-md px-4 py-6 h-48">
      <div className="grid grid-cols-12 w-full gap-4 animate-pulse">
        <div className="h-2 bg-zinc-200 rounded col-start-14 col-span-3" />
        <div className="h-2 bg-zinc-200 rounded col-start-12 col-span-1" />

        <div className="col-span-6 grid grid-cols-12 gap-4 mt-4">
          <div className="h-2 bg-zinc-200 rounded col-span-2" />
          <div className="h-2 bg-zinc-200 rounded col-span-6" />
          <div className="h-2 bg-zinc-200 rounded col-span-4" />
          <div className="h-2 bg-zinc-200 rounded col-span-3" />
          <div className="h-2 bg-zinc-200 rounded col-span-2" />
          <div className="h-2 bg-zinc-200 rounded col-span-7" />
          <div className="h-2 bg-zinc-200 rounded col-span-2" />
          <div className="h-2 bg-zinc-200 rounded col-span-1" />
          <div className="h-2 bg-zinc-200 rounded col-span-3" />
          <div className="h-2 bg-zinc-200 rounded col-span-1" />
          <div className="h-2 bg-zinc-200 rounded col-span-3" />
          <div className="h-2 bg-zinc-200 rounded col-span-2" />
          <div className="h-2 bg-zinc-200 rounded col-span-4" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
