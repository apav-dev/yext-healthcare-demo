export default function RelatedBlogs({
  image1,
  image2,
  image3,
  name1,
  name2,
  name3,
  description1,
  description2,
  description3,
  link1,
  link2,
  link3,
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to manage your health with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={image1}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              ></img>
              <div className="absolute inset-0 rounded-2xl"></div>
            </div>
            <div className="max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={link1}>
                    <span className="absolute inset-0"></span>
                    {name1}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {description1}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4"></div>
            </div>
          </article>
          <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={image2}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              ></img>
              <div className="absolute inset-0 rounded-2xl border-none"></div>
            </div>
            <div className="max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={link2}>
                    <span className="absolute inset-0"></span>
                    {name2}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {description2}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4"></div>
            </div>
          </article>
          <article className="flex flex-col items-start justify-between">
            <div className="relative w-full outline-none">
              <img
                src={image3}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              ></img>
              <div className="absolute inset-0 rounded-2xl"></div>
            </div>
            <div className="max-w-xl">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={link3}>
                    <span className="absolute inset-0"></span>
                    {name3}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {description3}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4"></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
