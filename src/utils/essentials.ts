// Types
import { ErrorResponse, SuccessResponse } from "@typings/main";

export function createResponse<T> (type: "success", data: T): SuccessResponse<T>;
export function createResponse (type: "error", message: string): ErrorResponse;
export function createResponse (type: "success" | "error", dataOrMessage: any) {
	if (type === "success") {
		return {
			type: "success",
			data: dataOrMessage
		};
	} else {
		return {
			type: "error",
			message: dataOrMessage
		};
	}
}