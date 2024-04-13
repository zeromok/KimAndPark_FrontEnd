import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/users", () => {
    return HttpResponse.json(["Tom", "kim", "lee"]);
  }),
];
