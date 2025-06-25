export default function BlogList() {
    const me = [
        {
            id : 1,
            title: "My New Portfolio Web🚀",
            date : "June 26, 2025",
            imageURL: "/yeay.png"
        }
    ]

    return (
        <div className='min-h-screen font-sans antialiased max-w-[70rem] mx-auto pt-10 sm:pt-20 sm:pb-10 px-6'>
            <div className="py-10 px-6 md:px-20 ">
                <h1 className="text-2xl font-bold">Blog</h1>
            </div>
        </div>
    )
}