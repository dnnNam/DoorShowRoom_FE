import { useQuery } from "@tanstack/react-query";

import mediaApis from "~/apis/media.apis";
import type { GetVideosParams, Video } from "~/types/api/video.type";

export const useVideos = (params: GetVideosParams = { page: 1, limit: 10 }) => {
  const query = useQuery({
    queryKey: ["videos", params],
    queryFn: () => mediaApis.getVideos(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    placeholderData: (previousData) => previousData,
  });

  const rawData = query.data?.data?.data as
    | Video[]
    | { items: Video[]; total: number }
    | undefined;

  // API có thể trả thẳng mảng, hoặc trả { items, total } giống các list API khác trong dự án
  const items: Video[] = Array.isArray(rawData)
    ? rawData
    : (rawData?.items ?? []);

  const total: number = Array.isArray(rawData)
    ? rawData.length
    : (rawData?.total ?? items.length);

  return {
    items,
    total,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};