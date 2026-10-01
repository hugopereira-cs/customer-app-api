interface HttpResponse {
  statusCode: number;
  body: any;
}

export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
} as const;

export const Messages = {
  INVALID_ID: "Invalid ID",
  INVALID_CUSTOMER: "Invalid customer data",
  CUSTOMER_CREATED: "Customer created successfully",
  CUSTOMER_DELETED: "Customer deleted successfully",
  CUSTOMER_NOT_FOUND: "Customer not found",
  CUSTOMER_UPDATED: "Customer updated successfully",
  ID_EXISTS: "This ID already exists. Please choose a different ID.",
  INVALID_EMAIL: "Invalid email address",
} as const;

export const ok = async (data: unknown): Promise<HttpResponse> => ({
  statusCode: HttpStatus.OK,
  body: data,
});

export const created = async (message: string): Promise<HttpResponse> => ({
  statusCode: HttpStatus.CREATED,
  body: { message },
});

export const noContent = async (): Promise<HttpResponse> => ({
  statusCode: HttpStatus.NO_CONTENT,
  body: null,
});

export const badRequest = async (message: string): Promise<HttpResponse> => ({
  statusCode: HttpStatus.BAD_REQUEST,
  body: { message },
});

export const notFound = async (message: string): Promise<HttpResponse> => ({
  statusCode: HttpStatus.NOT_FOUND,
  body: { message },
});
