import { Skeleton } from "@/components/ui/skeleton";
import { useFetch } from "../hooks/useFetch";
import { UseDataFetcher } from "../hooks/UseDataFetcher";
import { Badge } from "@/components/ui/badge";

export const BlogComponent = ({ data }) => {
  const PAYLOAD_API_URL = import.meta.env.VITE_PAYLOAD_API_URL;
  return (
    <>
      {data.docs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col bg-white rounded-lg shadow-md p-1 h-110"
        >
          {/* If you don't have an imageUrl in the object yet, use a placeholder or check your CMS fields */}
          <div className="h-5/10">
            <img
              src={
                blog.thumbnail.thumbnailURL
                  ? `${blog.thumbnail.thumbnailURL}`
                  : "/photos/glomespace_thumbnail.png"
              }
              alt={blog.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Use blog.Title (Capital T) */}
          <div className="h-5/10 p-4">
            <h3 className="text-[16px] font-semibold mb-2 text-blue-900">
              {blog.title}
            </h3>

            <p className="line-clamp text-gray-600 mb-4 text-[13px]">
              {blog.description}
            </p>

            {/* Use documentId or id for the link */}
            <a
              href={`/read-blog/${blog.slug}`}
              className="text-blue-500 hover:underline font-medium text-[13px]"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export const MiniBlogComponent = ({ data }) => {
  const { formatTimestampReturnDate } = UseDataFetcher();
  return (
    <div className="flex w-full grid md:grid-cols-2 gap-8 ">
      {data.docs.map((blog) => (
        <div className="flex gap-2 ">
          <div className="md:w-5/10  rounded-lg">
            <img
              src={
                blog.thumbnail.thumbnailURL
                  ? `${blog.thumbnail.thumbnailURL}`
                  : "/photos/glomespace_thumbnail.png"
              }
              alt={blog.title}
              className="md:w-full md:h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="hidden md:flex gap-1">
              {blog.tags.map((tag) => (
                <div key={tag.id} className="">
                  <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {tag.tag}
                  </Badge>
                </div>
              ))}
            </div>

            <h1 className="text-[16px] md:text-[30px] font-blogTitleFont">
              {blog.title}
            </h1>
            {/**
            * <p className="line-clamp text-gray-600 mb-4 text-[13px]">
              {blog.description}
            </p>

            */}
            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-gray-700 text-[10px] md:text-[12px]">
                {blog.author.firstName} {blog.author.lastName},{" "}
                {blog.author.title}
              </p>
              <p className="  text-gray-700 text-[12px]">
                {formatTimestampReturnDate(blog.publishDate)}
              </p>
            </div>
            <a
              href={`/read-blog/${blog.slug}`}
              className="text-blue-900 hover:underline font-medium text-[13px]"
            >
              Read More
            </a>
            <div className="w-full h-1 bg-blue-900" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const BlogComponentSkeleton = () => {
  return (
    <Skeleton className="flex flex-col gap-2 rounded-lg shadow-md p-1">
      <Skeleton className="h-6/10 bg-blue-100 w-full h-48 rounded-md" />

      <Skeleton className="flex flex-col gap-1 h-4/10 p-4">
        <Skeleton className="w-full h-3 bg-slate-200 bg-gray-200" />
        <Skeleton className="w-5/10 h-3 bg-slate-200 bg-gray-200" />
        <Skeleton className="w-full h-3 bg-slate-200 bg-gray-200" />
        <Skeleton className="w-7/10 h-3 bg-slate-200 bg-gray-200" />
        <Skeleton className="w-7/10 h-3 bg-slate-200 bg-gray-200" />
      </Skeleton>
    </Skeleton>
  );
};

export const BlogPostEmbeddable = () => {
  const PAYLOAD_API_URL = import.meta.env.VITE_PAYLOAD_API_URL;
  const { loading, data } = useFetch(
    `${PAYLOAD_API_URL}/api/blogs?limit=3&sort=-createdAt&where[status][equals]=published&depth=2`,
  );
  return (
    <div className="flex flex-col h-max md:h-140 px-3 md:px-10 w-full">
      <div className="flex flex-col items-center justify-center h-2/10 ">
        <h3 className="font-bold text-[20px]">Get insipired</h3>
        <p className="text-gray-500 uppercase tracking-widest text-[12px] font-medium mb-5 md:mb-0">
          Explore strategies and stories from our global delivery network.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {loading ? (
          <>
            <BlogComponentSkeleton />
            <BlogComponentSkeleton />
            <BlogComponentSkeleton />
          </>
        ) : (
          <>
            <BlogComponent data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export const BlogPostMiniEmbeddable = () => {
  const PAYLOAD_API_URL = import.meta.env.VITE_PAYLOAD_API_URL;
  const { loading, data } = useFetch(
    `${PAYLOAD_API_URL}/api/blogs?limit=3&sort=-createdAt&where[status][equals]=published&depth=2`,
  );
  return (
    <div className="flex flex-col h-max md:h-140 px-3 md:px-10 w-full">
      <div className="flex flex-col  justify-center h-2/10 ">
        <h3 className="font-bold text-[20px] font-blogTitleFont text-blue-900">
          Continue Reading
        </h3>
        <p className="text-gray-500 uppercase tracking-widest text-[12px] font-medium mb-5 md:mb-0">
          Explore strategies and stories from our global delivery network.
        </p>
      </div>

      <div>
        {loading ? (
          <>
            <BlogComponentSkeleton />
            <BlogComponentSkeleton />
            <BlogComponentSkeleton />
          </>
        ) : (
          <>
            <MiniBlogComponent data={data} />
          </>
        )}
      </div>
    </div>
  );
};
