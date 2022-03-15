/* eslint-disable @typescript-eslint/no-unused-vars */
import { authAxios as api, responseBody } from "./axios.config";

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

export const apiService = {
	// getProjects: (): Promise<IProject[]> => requests.get("/v1/projects", axiosAuthHeader()),
	// getSubCategories: (id: string): Promise<SubCategory[]> => requests.get(`/v1/subCategory/${id}`, axiosAuthHeader()),
	// postProject: (body: IProjectsPostDTO): Promise<any> => requests.post("/v1/projects", body, axiosAuthHeader()),
};
