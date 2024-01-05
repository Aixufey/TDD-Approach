import { http, HttpResponse } from "msw";

const handlers = [
    http.get("http://localhost:3030/scoops", () => {
        return HttpResponse.json([
            {
                name: "Chocolate",
                imagePath: "/images/chocolate.png",
            },
            {
                name: "Vanilla",
                imagePath: "/images/vanilla.png",
            },
        ]);
    }),
];
export default handlers;
