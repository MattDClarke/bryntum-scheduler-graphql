import { builder } from "./builder";
import "./types/Resources";
import "./types/Events";

export const schema = builder.toSchema();
