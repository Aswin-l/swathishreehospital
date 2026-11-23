export type EnquiryPayload = {
  name: string;
  phone: string;
  department: string;
  message: string;
};
export type ApiResponse<T> = { data: T; message?: string; success: boolean };
export type Department = { id: string; name: string; description: string; icon: string };
