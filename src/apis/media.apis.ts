import type { SuccessResponse } from "~/types/api/product.type";
import type {
  GetVideosParams,
  VideoListResponse,
} from "~/types/api/video.type";

import http from "~/utils/http";

const mediaApis = {
  getVideos(params: GetVideosParams) {
    return http.get<SuccessResponse<VideoListResponse>>(
      "/api/medias/videos",
      { params },
    );
  },
};

export default mediaApis;