export async function httpRequest(
  url: string,
  body?: string,
  method: string = "GET"
): Promise<Response> {
  const opts: RequestInit = {};

  opts.headers = {};


  opts.method = method;

  if (body) {
    opts.body = body;
  }

  const methods = ["post", "put", "patch"];
  if (methods.indexOf(method.toLowerCase()) >= 0) {
    opts.headers = {
      ...opts.headers,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  }

  const response: Response = await fetch(url, opts);
  return response;
}
