import { Skeleton } from "@/components/ui/skeleton";

export const BlogComponent = ({ data }) => {
  return (
    <>
      {data?.data
        ? data.data.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-1">
              {/* If you don't have an imageUrl in the object yet, use a placeholder or check your CMS fields */}
              <img
                src={blog.thumbnail || "/photos/glomespace_thumnbail.png"}
                alt={blog.Title}
                className="w-full h-48 object-cover rounded-md"
              />

              {/* Use blog.Title (Capital T) */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {blog.Title}
                </h3>

                <p className="text-gray-600 mb-4 text-[13px]">
                  {blog.description}
                </p>

                {/* Use documentId or id for the link */}
                <a
                  href={`/read-blog/${blog.documentId}`}
                  className="text-blue-500 hover:underline font-medium text-[13px]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))
        : data?.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-1">
              {/* If you don't have an imageUrl in the object yet, use a placeholder or check your CMS fields */}
              <img
                src={blog.thumbnail || "/photos/glomespace_thumnbail.png"}
                alt={blog.Title}
                className="w-full h-48 object-cover rounded-md"
              />

              {/* Use blog.Title (Capital T) */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {blog.Title}
                </h3>

                <p className="text-gray-600 mb-4 text-[13px]">
                  {blog.description}
                </p>

                {/* Use documentId or id for the link */}
                <a
                  href={`/read-blog/${blog.documentId}`}
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
