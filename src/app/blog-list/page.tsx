export default function BlogList() {
  const me = [
    {
      id: 1,
      title: "Coming Soon ⏳",
      date: "~~~",
    },
  ];

  return (
    <div className="min-h-screen font-sans antialiased max-w-[70rem] mx-auto pt-10 sm:pt-20 sm:pb-10 px-6">
      <div className="py-10 px-6 md:px-20 ">
        <h1 className="text-2xl font-bold">Blog</h1>

        <div className="flex flex-col gap-7 mt-10 ">
            {me.map((me, index) => (
                <div key={index} className="flex h-6 w-full items-center space-x-4 ">
                <div className="w-full">
                    <div className="flex flex-row items-center justify-start gap-y-2">
                        <p className="text-xs sm:text-sm font-thin tabular-nums text-right">
                            {me.date}
                        </p>
                        <div className="h-6 w-[1px] bg-purple-500 mx-2"></div>
                        <h2 className="inline-flex items-center font-semibold text-xs sm:text-base">
                            {me.title}
                        </h2>
                    </div>

                </div>

                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
