import axios from "axios";
const Base_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE0ODEwZTEyYmYzZWQyNmNiMmI0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDgxODIyMSwiZXhwIjoxNjQxMDc3NDIxfQ._GgppjXKkuSySzdd-KtX1fq_J65Fwn-3JqYJ89p1icw";

export const publicRequest = axios.create({
  baseURL: Base_URL,
});

export const userRequest = axios.create({
  baseURL: Base_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
