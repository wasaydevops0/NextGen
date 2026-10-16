import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      title: "Designing High-Conversion Mobile & Web Experiences in 2026",
      category: "UI/UX Design",
      author: "NextGen Design",
      date: "04/08/2026",
      image:
        "https://cdn.sanity.io/images/6bs02ygd/production/1be63859594afd5c58b29551e299b886f9b6c0d4-1080x1080.png",
      link: "#",
    },
    {
      title: "Building Lightning-Fast Web Applications with Next.js 16",
      category: "Web Engineering",
      author: "NextGen Dev Team",
      date: "9/08/2025",
      image:
        "https://cdn.sanity.io/images/6bs02ygd/production/e5b8c49f30139a4d3bb607ee59471bbe9887ee4b-800x800.jpg",
      link: "#",
    },
    {
      title: "Cross-Platform Mobile App Architecture with React Native",
      category: "Mobile Apps",
      author: "NextGen Mobile",
      date: "14/07/2026",
      image:
        "https://cdn.sanity.io/images/6bs02ygd/production/e0feec142c444a896084b7f62ca6e7b4fd1f43de-387x484.jpg",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-24" id="blog">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="font-urbanist font-bold text-[48px] md:text-[56px] text-[#2A3240] leading-[1.1]">
            From our
            <br />
            design &amp; dev blog
          </h2>
          <a
            href="#blog"
            className="bg-brand-orange text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-brand-orangeDark transition-colors inline-block"
          >
            All Articles
          </a>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <a
              key={idx}
              href={blog.link}
              className="flex flex-col gap-6 group cursor-pointer"
            >
              {/* Image with signature corner notch */}
              <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-sm bg-neutral-100">
                <div className="absolute inset-0 bg-[#8E90DC] flex items-center justify-center">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom-right corner cutout pill */}
                <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-white rounded-tl-[48px] z-10 flex items-center justify-center">
                  <div className="w-[72px] h-[72px] bg-[#1A1F2C] text-white group-hover:bg-brand-orange rounded-full flex items-center justify-center shadow-inner cursor-pointer transition-colors duration-300">
                    <span className="text-2xl font-light leading-none mb-0.5">
                      ↗
                    </span>
                  </div>
                </div>
                {/* Curved inverted notches */}
                <div className="absolute bottom-0 right-[100px] w-[24px] h-[24px] bg-transparent rounded-br-[24px] shadow-[12px_12px_0_12px_white] z-10 pointer-events-none" />
                <div className="absolute bottom-[100px] right-0 w-[24px] h-[24px] bg-transparent rounded-br-[24px] shadow-[12px_12px_0_12px_white] z-10 pointer-events-none" />
              </div>

              {/* Blog details */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="bg-[#F3F4F6] text-[#4B5563] font-sans text-sm font-medium px-5 py-2 rounded-full w-max">
                  {blog.category}
                </div>
                <div className="flex items-center gap-4 text-[#8C94A3] font-sans text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {blog.date}
                  </div>
                </div>
                <h3 className="font-urbanist font-semibold text-[24px] md:text-[26px] text-[#2A3240] leading-snug group-hover:text-brand-orange transition-colors">
                  {blog.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
