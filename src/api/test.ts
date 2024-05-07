import request from "@/utils/request";

type resType = {
  _id: string;
  title: string;
  status: number;
  pic: string;
  url: number;
};

type resultType = {
  result: resType[];
};

export const getList = () => {
  return request<resultType>("/focus", "GET");
};
