import axios from "axios";
const Base_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE0ODEwZTEyYmYzZWQyNmNiMmI0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTc2NjA3MiwiZXhwIjoxNjQwMDI1MjcyfQ.WF-HTdWglpLc2x6p024gJlr9sxGd1k7O4ZcIHL2J7dM";

export const publicRequest = axios.create({
  baseURL: Base_URL,
});

export const userRequest = axios.create({
  baseURL: Base_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
