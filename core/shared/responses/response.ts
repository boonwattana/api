export class Responses {

  static error(message: string,
        traceback: any,
        statusCode: number) {
    return {
      success: false,
      statusCode: statusCode,
      traceback: traceback,
      message: message,
    };
  }

  static success(message: string,
          data: any,
          statusCode: number) {
    return {
      success: true,
      statusCode: statusCode,
      message: message,
      data: data,
    };
  }
}