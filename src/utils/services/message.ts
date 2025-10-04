import axiosInstance from "../axiosInstance";

const askAssistantService = async (data: { text: string }) => {
  try {
    const response = await axiosInstance.post(`/api/ask`, data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const fileUploadService = async (form: FormData) => {
  try {
    const response = await axiosInstance.post(`/api/file`, form);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllFilesService = async () => {
  try {
    const response = await axiosInstance.get(`/api/file`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteFileService = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/api/file/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export {
  askAssistantService,
  fileUploadService,
  getAllFilesService,
  deleteFileService,
};
